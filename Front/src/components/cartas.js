import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

const FlashcardList = () => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { deckId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchCards = async () => {
        const response = await fetch(`http://localhost:5000/api/cartas/${deckId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setCards(data);
      };

      fetchCards();
    }
  }, [token, deckId, navigate]);

  const handleAddCard = async () => {
    if (!question || !answer) return alert('Pergunta e resposta são obrigatórios');
    
    const response = await fetch('http://localhost:5000/api/cartas', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question, answer, deckId })
    });

    const data = await response.json();
    if (data._id) {
      setCards((prevCards) => [...prevCards, data]);
      setQuestion('');
      setAnswer('');
    } else {
      alert('Erro ao adicionar carta');
    }
  };

  return (
    <div>
      <h2>Cartas do Baralho</h2>
      <div>
        <input
          type="text"
          placeholder="Pergunta"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Resposta"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleAddCard}>Adicionar Carta</button>
      </div>
      <ul>
        {cards.map((card) => (
          <li key={card._id}>
            <strong>Pergunta:</strong> {card.question} <br />
            <strong>Resposta:</strong> {card.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
