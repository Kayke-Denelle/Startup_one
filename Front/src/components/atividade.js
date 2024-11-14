import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

const ReviewPage = () => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [reviewResults, setReviewResults] = useState({ easy: 0, medium: 0, hard: 0 });
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar a rotação da carta

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
      setIsFlipped(false); // Resetar a rotação ao mudar de cartão
    } else {
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
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">Revisão do Baralho</h2>
      {cards.length > 0 && cards[currentCardIndex] ? (
        <div className="relative w-72 h-48 perspective">
          <div className={`card w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className="card-front absolute w-full h-full bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center backface-hidden">
              <h3 className="text-lg font-semibold">Pergunta:</h3>
              <p className="text-center">{card.question}</p>
            </div>
            <div className="card-back absolute w-full h-full bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center backface-hidden rotate-y-180">
              <h3 className="text-lg font-semibold">Resposta:</h3>
              <p className="text-center">{card.answer}</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={() => setIsFlipped(!isFlipped)} className="bg-blue-500 text-white p-2 rounded-l-lg">
              Virar
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={() => handleDifficulty('easy')} className="bg-green-500 text-white p-2 rounded-lg mx-1">
              Fácil
            </button>
            <button onClick={() => handleDifficulty('medium')} className="bg-yellow-500 text-white p-2 rounded-lg mx-1">
              Médio
            </button>
            <button onClick={() => handleDifficulty('hard')} className="bg-red-500 text-white p-2 rounded-lg mx-1">
              Difícil
            </button>
          </div>
        </div>
      ) : (
        <p>Carregando cartas...</p>
      )}
    </div>
  );
};

export default ReviewPage;