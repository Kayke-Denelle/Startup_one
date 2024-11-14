import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Activity = () => {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const { token } = useContext(AuthContext);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dificuldade, setDifficulty] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`https://volans-api-production.up.railway.app/api/cartas/${deckId}`);
        setCards(response.data);
      } catch (error) {
        console.error('Erro ao buscar cartas:', error);
      }
    };

    fetchCards();
  }, [deckId]);

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      alert('Você completou todas as cartas!');
    }
  };

  const handleSaveActivity = async () => {
    if (dificuldade && cards[currentCardIndex]) {
      const atividadeData = {
        userId: token, // Substitua pelo ID do usuário real
        cartaId: cards[currentCardIndex]._id,
        dificuldade
      };

      try {
        const response = await axios.post('https://volans-api-production.up.railway.app/api/atividades', atividadeData, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.status === 201) {
          setDifficulty('');
          handleNextCard();
        } else {
          console.error('Erro ao salvar a atividade:', response.data);
        }
      } catch (error) {
        console.error('Erro ao salvar a atividade:', error);
      }
    } else {
      alert('Por favor, selecione a dificuldade antes de continuar.');
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-3xl font-bold mb-5">Atividade - {cards.length > 0 ? cards[currentCardIndex].name : 'Carregando...'}</h2>
      {cards.length > 0 && (
        <div className="mb-5">
          <p>{cards[currentCardIndex].description}</p>
          <select value={dificuldade} onChange={(e) => setDifficulty(e.target.value)} className="mt-2 border rounded p-2">
            <option value="">Selecione a dificuldade</option>
            <option value="fácil">Fácil</option>
            <option value="médio">Médio</option>
            <option value="difícil">Difícil</option>
          </select>
        </div>
      )}
      <button 
        onClick={handleSaveActivity} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Salvar Atividade
      </button>
      <button 
        onClick={handleNextCard} 
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        Próxima Carta
      </button>
    </div>
  );
};

export default Activity;