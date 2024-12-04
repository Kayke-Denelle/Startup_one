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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {decks.map((deck) => (
            <div key={deck._id} className="relative bg-white shadow-lg rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://path-to-your-deck-image.jpg)', // Substitua pelo caminho da imagem do baralho
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  zIndex: -1,
                }}
              ></div>

              <h3 className="text-xl font-bold mb-2 text-center">{deck.name}</h3>

              <div className="flex justify-between items-center">
                <Link 
                  to={`/cartas/${deck._id}`} 
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Mural de Cartas
                </Link>
                <Link 
                  to={`/revisao/${deck._id}`} 
                  className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Revisar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckList;
