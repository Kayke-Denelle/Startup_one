import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const ReviewPage = () => {
  const { token, userId } = useContext(AuthContext); // Certifique-se de que userId está disponível no contexto
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [reviewResults, setReviewResults] = useState({ easy: 0, medium: 0, hard: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const { deckId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchCards = async () => {
        const response = await fetch(`https://volans-api-production.up.railway.app/api/cartas/${deckId}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        setCards(data);
      };

      fetchCards();
    }
  }, [deckId, token, navigate]);

  // Função para registrar a revisão (registro do número de revisões)
  const registerReview = async () => {
    try {
      const totalReviews = reviewResults.easy + reviewResults.medium + reviewResults.hard;

      if (totalReviews === 0) {
        alert("Você precisa revisar pelo menos uma carta antes de finalizar.");
        return;
      }

      const response = await fetch('https://volans-api-production.up.railway.app/api/revisoes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        console.error('Erro ao registrar revisão');
      } else {
        alert('Revisão registrada com sucesso!');
        navigate('/baralhos');
      }
    } catch (error) {
      console.error('Erro de rede ao registrar revisão:', error);
    }
  };

  const handleDifficulty = (difficulty) => {
    const card = cards[currentCardIndex];
    setReviewResults(prevResults => ({
      ...prevResults,
      [difficulty]: prevResults[difficulty] + 1,
    }));

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false); // Redefine aqui para garantir que a próxima carta comece com a pergunta
    } else {
      // Quando chegar ao final, exibe a performance
      evaluatePerformance();
    }
  };

  const evaluatePerformance = () => {
    const { easy, medium, hard } = reviewResults;
    const totalCards = easy + medium + hard;

    if (totalCards === 0) return;

    const hardPercentage = (hard / totalCards) * 100;
    let message = '';

    if (hardPercentage > 50) {
      message = 'Você está com dificuldades. Recomenda-se estudar mais.';
    } else if (hardPercentage > 20) {
      message = 'Você está com alguma dificuldade. Continue revisando para melhorar.';
    } else {
      message = 'Ótimo trabalho! Você está indo muito bem na revisão.';
    }

    alert(message);
  };

  const card = cards[currentCardIndex];

  // Função para alternar o estado do flip da carta
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Revisão do Baralho</h2>
          {cards.length > 0 && card ? (
            <div className="relative">
              {/* Cartão */}
              <div
                className={`card w-[110rem] h-96 bg-white shadow-lg rounded-lg p-4 flex items-center justify-center transform transition-all duration-500 ${isFlipped ? 'rotateY-180' : ''}`}onClick={toggleFlip}>
                <div className={`front ${isFlipped ? 'hidden' : 'block'} flex items-center justify-center`}>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-center">Pergunta:</h3>
                    <p className="text-center">{card.question}</p>
                  </div>
                </div>
                <div className={`back ${isFlipped ? 'block' : 'hidden'} flex items-center justify-center`}>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-center">Resposta:</h3>
                    <p className="text-center">{card.answer}</p>
                  </div>
                </div>
              </div>

              {/* Navegação das setas */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
                <button
                  onClick={toggleFlip}
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
                >
                  &#8592;
                </button>
                <button
                  onClick={toggleFlip}
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
                >
                  &#8594;
                </button>
              </div>

              {/* Botões de dificuldade */}
              <div className="mt-4 flex justify-center space-x-4">
                <button onClick={() => handleDifficulty('easy')} className="bg-green-500 text-white py-2 px-4 rounded">Fácil</button>
                <button onClick={() => handleDifficulty('medium')} className="bg-yellow-500 text-white py-2 px-4 rounded">Médio</button>
                <button onClick={() => handleDifficulty('hard')} className="bg-red-500 text-white py-2 px-4 rounded">Difícil</button>
              </div>
            </div>
          ) : (
            <p>Carregando cartões ou nenhum cartão disponível para revisão.</p>
          )}

          {/* Botão de finalizar revisão */}
          <div className="mt-8">
            <button
              onClick={registerReview}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Finalizar Revisão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
