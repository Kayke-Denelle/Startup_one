import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams, Link } from 'react-router-dom';

const FlashcardList = () => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [editingCardIndex, setEditingCardIndex] = useState(null);
  const [isAddingCard, setIsAddingCard] = useState(false); // State to manage the new card input visibility

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
      setIsAddingCard(false); // Hide the input fields after adding
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
    const response = await fetch(`http://localhost:5000/api/cartas/${cardId}`, {
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

<div className="bg-gray-800 text-white w-64 min-h-screen p-5 hidden sm:hidden md:hidden lg:block xl:block">
        <h2 className="text-2xl font-bold mb-5">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link to="/baralhos" className="block p-2 rounded hover:bg-gray-700">Baralhos</Link>
          </li>
          <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">Sair</Link>
          </li>
        </ul>
      </div>

      {/* Navbar - fixed at the top */}
      <nav className="bg-gray-800 text-white w-full fixed lg:hidden xl:hidden top-0 left-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded">Dashboard</Link>
            <Link to="/baralhos" className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded">Baralhos</Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded">Sair</Link>
          </div>
        </div>
      </nav>

      {/* Main content area - Add padding-top to account for fixed navbar */}
      <div className="pt-20 flex-1 min-h-screen flex flex-col items-center bg-gray-100 p-5">
        <h2 className="text-3xl font-bold mb-5">Cartas do Baralho</h2>
        
        {/* Grid layout for flashcards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mp:grid-cols-2 xl:grid-cols-3 gap-4">
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

          {/* Add card button or form */}
          {isAddingCard ? (
            <div className="relative perspective">
              <div className="card">
                <div className="card-inner">
                  <div className="card-front flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4">
                    <input
                      type="text"
                      placeholder="Pergunta"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="border rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Resposta"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="border rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      onClick={handleAddCard} 
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      Adicionar Carta
                    </button>
                    <button 
                      onClick={() => setIsAddingCard(false)} 
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 mt-2"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative perspective" onClick={() => setIsAddingCard(true)}>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front flex items-center justify-center bg-white shadow-lg rounded-lg p-4">
                    <strong className="text-black">+</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
          <style jsx>{`
          .perspective {
            perspective: 1000px;
          }
          .card {
            width: 325px; 
            height: 225px; 
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
    </div>
  );
};

export default FlashcardList;
