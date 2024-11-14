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
    await fetch(`http://localhost:5000/api/cartas/${card._id}/difficulty`, {
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
    } else {
      // Chamamos a função para avaliar o desempenho
      evaluatePerformance();
    }
  };

  // Função para avaliar o desempenho
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

  return (
    <div>
      <h2>Revisão do Baralho</h2>
      <div>
        <h3>Pergunta:</h3>
        <p>{cards.question}</p>
        <h3>Resposta:</h3>
        <p>{cards.answer}</p>
      </div>
      <div>
        <button onClick={() => handleDifficulty('easy')}>Fácil</button>
        <button onClick={() => handleDifficulty('medium')}>Médio</button>
        <button onClick={() => handleDifficulty('hard')}>Difícil</button>
      </div>
    </div>
  );
};

export default ReviewPage;
