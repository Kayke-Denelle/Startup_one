import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

const ReviewPage = () => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [reviewResults, setReviewResults] = useState({ easy: 0, medium: 0, hard: 0 });
  const [isFlipped, setIsFlipped] = useState(false); // Controla o estado do flip da carta
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

  const handleDifficulty = async (difficulty) => {
    const card = cards[currentCardIndex];

    // Atualize a contagem de dificuldades
    setReviewResults(prevResults => ({
      ...prevResults,
      [difficulty]: prevResults[difficulty] + 1,
    }));

    // Atualize o banco de dados com a dificuldade selecionada
    await fetch(`https://volans-api-production.up.railway.app/api/cartas/${card._id}/difficulty`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ difficulty }),
    });

    // Próximo cartão ou término da revisão
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false); // Reseta o flip para a frente da carta
    } else {
      // Chamamos a função para avaliar o desempenho
      evaluatePerformance();
    }
  };

  const evaluatePerformance = () => {
    const { easy, medium, hard } = reviewResults;
    const totalCards = easy + medium + hard;

    if (totalCards === 0) return; // Sem revisão para avaliar

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
    navigate('/baralhos'); // Redirecionar para a página de baralhos
  };

  const card = cards[currentCardIndex];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Revisão do Baralho</h2>
      {cards.length > 0 && card ? (
        <div className="relative">
          <div 
            className={`card w-72 h-96 bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 ${isFlipped ? 'rotateY-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)} // Gira a carta ao clicar
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
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
            <button 
              onClick={() => setCurrentCardIndex(Math.max(currentCardIndex - 1, 0))}
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            >
              &#8592; {/* Seta para a esquerda */}
            </button>
            <button 
              onClick={() => setCurrentCardIndex(Math.min(currentCardIndex + 1, cards.length - 1))}
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            >
              &#8594; {/* Seta para a direita */}
            </button>
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={() => handleDifficulty('easy')} className="bg-green-500 text-white py-2 px-4 rounded">Fácil</button>
            <button onClick={() => handleDifficulty('medium')} className="bg-yellow-500 text-white py-2 px-4 rounded">Médio</button>
            <button onClick={() => handleDifficulty('hard')} className="bg-red-500 text-white py-2 px-4 rounded">Difícil</button>
          </div>
        </div>
      ) : (
        <p>Carregando cartões ou nenhum cartão disponível para revisão.</p>
      )}
    </div>
  );
};

export default ReviewPage;
