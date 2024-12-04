import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importando ícones

const FlashcardList = () => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [editingCardIndex, setEditingCardIndex] = useState(null);
  const [isAddingCard, setIsAddingCard] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchCards = async () => {
        const response = await fetch(`https://volans-api-production.up.railway.app/api/cartas/${deckId}`, {
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
  
    const response = await fetch('https://volans-api-production.up.railway.app/api/cartas', {
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
      setIsAddingCard(false);
    } else {
      alert('Erro ao adicionar carta');
    }
  };

  const handleEditCard = (index) => {
    const cardToEdit = cards[index];
    setQuestion(cardToEdit.question);
    setAnswer(cardToEdit.answer);
    setEditingCardIndex(index);
    setFlippedCardIndex(null);
  };

  const handleUpdateCard = async () => {
    if (editingCardIndex === null) return;

    const response = await fetch(`https://volans-api-production.up.railway.app/api/cartas/${cards[editingCardIndex]._id}`, {
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

    // Confirmation dialog
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta carta?');
    if (!confirmDelete) return;

    const response = await fetch(`https://volans-api-production.up.railway.app/api/cartas/${cardId}`, {
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
      <Sidebar/>

      <div className="pt-20 flex-1 min-h-screen flex flex-col items-center bg-gray-100 p-5">
        <h2 className="text-3xl font-bold mb-5"> Cartas do Baralho</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mp:grid-cols-2 xl:grid-cols-3 gap-4">
  {cards.map((card, index) => (
    <div key={card._id} className="relative perspective">
      <div className={`card ${flippedCardIndex === index ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
        <div className="card-inner">

          {/* Parte frontal da carta */}
          <div className="card-front flex flex-col bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col w-full">
              {/* Título Pergunta */}
              <div className="flex justify-start mb-2">
                <strong className="text-lg font-semibold">Pergunta:</strong>
              </div>
              <p className="text-center">{card.question}</p>
            </div>
            <div className="flex justify-between mt-4 gap-4">
              <button onClick={(e) => { e.stopPropagation(); handleEditCard(index); }} className="absolute bottom-2 right-2 bg-cor-2 text-white p-2 rounded-md hover:bg-cor-3">
                <FaEdit size={18} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); handleDeleteCard(index); }} className="absolute bottom-2 right-16 bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                <FaTrashAlt size={18} />
              </button>
            </div>
          </div>

          {/* Parte de trás da carta */}
          <div className="card-back flex flex-col items-start justify-start bg-cor-1 text-white shadow-lg rounded-lg p-6">
            <div className="flex justify-start mb-2">
              <strong className="text-lg font-semibold">Resposta:</strong>
            </div>
            <p className="text-center">{card.answer}</p>
          </div>
          
        </div>
      </div>
    </div>
          ))}

          {editingCardIndex !== null ? (
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
                      onClick={handleUpdateCard} 
                      className="bg-cor-2 text-white px-4 py-2 rounded-md hover:bg-cor-3 transition duration-300"
                    >
                      Atualizar Carta
                    </button>
                    <button 
                      onClick={() => {
                        setEditingCardIndex(null);
                        setQuestion('');
                        setAnswer('');
                      }} 
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 mt-2"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : isAddingCard ? (
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
                      className="bg-cor-2 text-white px-4 py-2 rounded-md hover:bg-cor-3 transition duration-300"
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
                    <strong className="text-black"><img src={require("../Img/icons8-plus-56.png")} alt="plus--v1"/></strong>
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
            width: 350px; 
            height: 250px; 
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
