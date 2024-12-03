import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const DeckList = () => {
  const { token, logout } = useContext(AuthContext);
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState('');
  const navigate = useNavigate();

  // Load user's decks
  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchDecks = async () => {
        const response = await fetch('https://volans-api-production.up.railway.app/api/baralhos', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (Array.isArray(data)) {
          setDecks(data);
        } else {
          console.error('Expected an array but got:', data);
          setDecks([]); // Set to empty array if not an array
        }
      };

      fetchDecks(); 
    }
  }, [token, navigate]);

  // Create new deck
  const handleCreateDeck = async () => {
    if (!newDeckName) return alert('Nome do baralho é obrigatório');
    
    const response = await fetch('https://volans-api-production.up.railway.app/api/baralhos', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ name: newDeckName })
    });

    const data = await response.json();
    if (data._id) {
      setDecks((prevDecks) => [...prevDecks, data]);
      setNewDeckName('');
    } else {
      alert('Erro ao criar baralho');
    }
  };

  // Start activity
  const handleStartActivity = (deckId) => {
    navigate(`/atividade/${deckId}`); // Navigate to the activity page
  };

  return (  
    <div className="flex">
      <Sidebar/> {/* Render the Sidebar component */}
      
      <div className="flex-1 min-h-screen flex flex-col items-center p-5">
        <h2 className="text-3xl font-bold mb-5">Baralhos</h2>
        <button 
          onClick={logout} 
          className="mb-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Sair
        </button>
        <div className="mb-5 flex">
          <input
            type="text"
            placeholder="Novo Baralho"
            value={newDeckName}
            onChange={(e) => setNewDeckName(e.target.value)}
            className="border rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleCreateDeck} 
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          >
            Criar Baralho
          </button>
        </div>
        <ul className="w-full max-w-md">
          {decks.map((deck) => (
            <li key={deck._id} className="mb-2">
              <Link 
                to={`/cartas/${deck._id}`} 
                className="block bg-white shadow-md rounded p-4 hover:bg-gray-200 transition duration-300"
              >
                {deck.name}
              </Link>
              <Link to={`/revisao/${deck._id}`}>
              <button>Revisar</button>
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeckList;