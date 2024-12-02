import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import {jwtDecode} from 'jwt-decode';  // Certifique-se de que o jwt-decode está sendo importado corretamente

const ReviewPage = () => {
  const { token } = useContext(AuthContext); // Obtendo o token do contexto
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
        try {
          const response = await fetch(`https://volans-api-production.up.railway.app/api/cartas/${deckId}`, {
            headers: { 'Authorization': `Bearer ${token}` },
          });
          const data = await response.json();
          setCards(data);
        } catch (error) {
          console.error('Erro ao carregar as cartas:', error);
        }
      };

      fetchCards();
    }
  }, [deckId, token, navigate]);

  const handleDifficulty = async (difficulty) => {
    const card = cards[currentCardIndex];
    setReviewResults((prevResults) => ({
      ...prevResults,
      [difficulty]: prevResults[difficulty] + 1,
    }));

    try {
      await fetch(`https://volans-api-production.up.railway.app/api/cartas/${card._id}/difficulty`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ difficulty }),
      });
    } catch (error) {
      console.error('Erro ao salvar a dificuldade:', error);
    }

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setIsFlipped(false); // Reinicia para mostrar a pergunta no próximo cartão
    } else {
      await evaluatePerformance();
    }
  };

  const evaluatePerformance = async () => {
    const { easy, medium, hard } = reviewResults;
    const totalCards = easy + medium + hard;

    if (totalCards === 0) return;

    // Salva os resultados no backend
    await saveReviewResults();

    // Avaliação do desempenho
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
    navigate('/baralhos');
  };

  const saveReviewResults = async () => {
    const { easy, medium, hard } = reviewResults;
    const decodedToken = jwtDecode(token); // Decodificando o token para obter o userId
    const userId = decodedToken.userId;  // Obtendo o userId a partir do token

    try {
      const response = await fetch('https://volans-api-production.up.railway.app/api/revisions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId, // Passando o userId para a API
          deckId, // Passando o deckId (ID do baralho)
          easyCount: easy,
          mediumCount: medium,
          hardCount: hard,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Revisão salva com sucesso:', data);
      } else {
        const errorData = await response.json();
        console.error('Erro ao salvar revisão:', errorData);
      }
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor:', error);
    }
  };

  const card = cards[currentCardIndex];

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
                className={`card w-72 h-96 bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-500 ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={toggleFlip}
              >
                <div className={`front ${isFlipped ? 'hidden' : 'block'}`}>
                  <h3 className="font-semibold text-xl mb-2">Pergunta:</h3>
                  <p>{card.question}</p>
                </div>
                <div className={`back ${isFlipped ? 'block' : 'hidden'}`}>
                  <h3 className="font-semibold text-xl mb-2">Resposta:</h3>
                  <p>{card.answer}</p>
                </div>
              </div>

              {/* Navegação */}
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
                <button onClick={() => handleDifficulty('easy')} className="bg-green-500 text-white py-2 px-4 rounded">
                  Fácil
                </button>
                <button onClick={() => handleDifficulty('medium')} className="bg-yellow-500 text-white py-2 px-4 rounded">
                  Médio
                </button>
                <button onClick={() => handleDifficulty('hard')} className="bg-red-500 text-white py-2 px-4 rounded">
                  Difícil
                </button>
              </div>
            </div>
          ) : (
            <p>Carregando cartões ou nenhum cartão disponível para revisão.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
