import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';

const FlashcardReview = () => {
  const { token } = useContext(AuthContext);
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
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

    await fetch(`https://volans-api-production.up.railway.app/api/cartas/${card._id}/difficulty`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ difficulty }),
    });

    // Passa para o próximo cartão ou encerra a revisão
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      alert('Revisão concluída!');
      navigate('/baralhos');
    }
  };

  if (cards.length === 0) return <p>Carregando...</p>;

  const card = cards[currentCardIndex];

  return (
    <div>
      <h2>Revisão do Baralho</h2>
      <div>
        <h3>Pergunta:</h3>
        <p>{card.question}</p>
        <h3>Resposta:</h3>
        <p>{card.answer}</p>
      </div>
      <div>
        <button onClick={() => handleDifficulty('easy')}>Fácil</button>
        <button onClick={() => handleDifficulty('medium')}>Médio</button>
        <button onClick={() => handleDifficulty('hard')}>Difícil</button>
      </div>
    </div>
  );
};

export default FlashcardReview;
