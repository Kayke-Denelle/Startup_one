import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importando ícones de editar e excluir

const DeckList = () => {
  const { token, logout } = useContext(AuthContext);
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState('');
  const [editingDeck, setEditingDeck] = useState(null); // Armazenar o deck sendo editado
  const [editedDeckName, setEditedDeckName] = useState('');
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

  // Edit deck name
  const handleEditDeck = (deckId, currentName) => {
    setEditingDeck(deckId);
    setEditedDeckName(currentName);
  };

  const handleSaveEdit = async (deckId) => {
    if (!editedDeckName) return alert('O nome do baralho não pode ser vazio');
    
    const response = await fetch(`https://volans-api-production.up.railway.app/api/baralhos/${deckId}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ name: editedDeckName })
    });

    const data = await response.json();
    if (data._id) {
      setDecks((prevDecks) =>
        prevDecks.map((deck) =>
          deck._id === deckId ? { ...deck, name: editedDeckName } : deck
        )
      );
      setEditingDeck(null);
      setEditedDeckName('');
    } else {
      alert('Erro ao editar baralho');
    }
  };

  // Delete deck
  const handleDeleteDeck = async (deckId) => {
    const confirmation = window.confirm('Você tem certeza que deseja excluir este baralho?');
    if (!confirmation) return;
  
    try {
      const response = await fetch(`https://volans-api-production.up.railway.app/api/baralhos/${deckId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        setDecks((prevDecks) => prevDecks.filter(deck => deck._id !== deckId));
        alert('Baralho excluído com sucesso!');
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error('Erro ao excluir o baralho:', error);
      alert('Erro ao excluir o baralho');
    }
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {decks.map((deck) => (
            <div key={deck._id} className="relative bg-white shadow-lg rounded-lg p-5 flex flex-col h-[350px]">
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

              <h3 className="text-xl font-bold mb-2 text-center">
                {editingDeck === deck._id ? (
                  <input
                    type="text"
                    value={editedDeckName}
                    onChange={(e) => setEditedDeckName(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md w-full"
                  />
                ) : (
                  deck.name
                )}
              </h3>

              <div className="flex flex-col items-center mt-4 space-y-2">
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

              <div className="mt-4 flex justify-between items-center">
                {editingDeck === deck._id ? (
                  <button
                    onClick={() => handleSaveEdit(deck._id)}
                    className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Salvar
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditDeck(deck._id, deck.name)}
                      className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteDeck(deck._id)}
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckList;
