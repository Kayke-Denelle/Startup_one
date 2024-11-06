import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const DeckList = () => {
  const { token, logout } = useContext(AuthContext);
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState('');
  const navigate = useNavigate();

  // Carregar baralhos do usuário
  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchDecks = async () => {
        const response = await fetch('http://localhost:5000/api/baralhos', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setDecks(data);
      };

      fetchDecks();
    }
  }, [token, navigate]);

  // Criar novo baralho
  const handleCreateDeck = async () => {
    if (!newDeckName) return alert('Nome do baralho é obrigatório');
    
    const response = await fetch('http://localhost:5000/api/baralhos', {
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

  return (
    <div>
      <h2>Baralhos</h2>
      <button onClick={logout}>Sair</button>
      <div>
        <input
          type="text"
          placeholder="Novo Baralho"
          value={newDeckName}
          onChange={(e) => setNewDeckName(e.target.value)}
        />
        <button onClick={handleCreateDeck}>Criar Baralho</button>
      </div>
      <ul>
        {decks.map((deck) => (
          <li key={deck._id}>
            <Link to={`/cartas/${deck._id}`}>{deck.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeckList;
