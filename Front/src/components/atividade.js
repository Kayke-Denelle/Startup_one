import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Atividade = () => {
  const { deckId } = useParams();
  const [cartas, setCartas] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [dificuldade, setDificuldade] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchCartas = async () => {
      const response = await fetch(`https://volans-api-production.up.railway.app/api/cartas/${deckId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setCartas(data);
    };

    fetchCartas();
  }, [deckId, token]);

  const handleSalvarAtividade = async () => {
    if (dificuldade && cartas[indiceAtual]) {
      const atividadeData = {
        userId: 'user-id-placeholder', // Substitua pelo ID do usuário real
        cartaId: cartas[indiceAtual]._id,
        dificuldade
      };

      await axios.post('https://volans-api-production.up.railway.app/api/atividades', atividadeData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      setDificuldade('');
      setIndiceAtual(indiceAtual + 1);
    }
  };

  if (indiceAtual >= cartas.length) {
    return <h2>Atividade concluída!</h2>;
  }

  return (
    <div>
      <h2>{cartas[indiceAtual]?.question}</h2>
      <div>
        <button onClick={() => setDificuldade('facil')}>Fácil</button>
        <button onClick={() => setDificuldade('medio')}>Médio</button>
        <button onClick={() => setDificuldade('dificil')}>Difícil</button>
      </div>
      <button onClick={handleSalvarAtividade}>Salvar Atividade</button>
    </div>
  );
};

export default Atividade;