import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar'; // Import the Sidebar component

const FlashcardList = () => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [editingCardIndex, setEditingCardIndex] = useState(null);

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

  const handleEditCard = async (index) => {
    const cardToEdit = cards[index];
    setQuestion(cardToEdit.question);
    setAnswer(cardToEdit.answer);
    setEditingCardIndex(index);
    setFlippedCardIndex(null); // Reset flip state when editing
  };

  const handleUpdateCard = async () => {
    if (editingCardIndex === null) return;
    
    const response = await fetch(`http://localhost:5000/api/cartas/${cards[editingCardIndex]._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question, answer })
    });

    const data = await response.json();
    if (data._id) {
      const updatedCards = [...cards];
      updatedCards[editingCardIndex] = data;
      setCards(updatedCards);
      setQuestion('');
      setAnswer('');
      setEditingCardIndex(null);
    } else {
      alert('Erro ao atualizar carta');
    }
  };

  const handleDeleteCard = async (index) => {
    const cardId = cards[index]._id;
    const response = await fetch(`http://localhost:5000/api/cartas/${ cardId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    if (response.ok) {
      setCards((prevCards) => prevCards.filter((_, i) => i !== index));
    } else {
      alert('Erro ao excluir carta');
    }
  };

  const handleCardClick = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="flex-1 min-h-screen flex flex-col items-center bg-gray-100 p-5">
        <h2 className="text-3xl font-bold mb-5">Cartas do Baralho</h2>
        <div className="mb-5 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Pergunta"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Resposta"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={editingCardIndex !== null ? handleUpdateCard : handleAddCard} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {editingCardIndex !== null ? 'Atualizar Carta' : 'Adicionar Carta'}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={card._id} className="relative perspective">
              <div className={`card ${flippedCardIndex === index ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
                <div className="card-inner">
                  <div className="card-front flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4">
                    <strong>Pergunta:</strong>
                    <p className="text-center">{card.question}</p>
                    <div className="flex justify-between mt-4">
                      <button onClick={() => handleEditCard(index)} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">Editar</button>
                      <button onClick={() => handleDeleteCard(index)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">Excluir</button>
                    </div>
                  </div>
                  <div className="card-back flex items-center justify-center bg-blue-500 text-white shadow-lg rounded-lg p-4">
                    <strong>Resposta:</strong>
                    <p className="text-center">{card.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }
          .card {
            width: 400px; /* Increased width */
            height: 300px; /* Increased height */
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            cursor: pointer;
          }
          .card-inner {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s;
          }
          .card.flipped .card-inner {
            transform: rotateY(180deg);
          }
          .card-front,
          .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .card-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </div>
  );
};

export default FlashcardList;