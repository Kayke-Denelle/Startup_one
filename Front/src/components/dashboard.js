import React, { useEffect, useState, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { AuthContext } from '../context/AuthContext';

// Registrar componentes do Chart.js
Chart.register(...registerables);

const Dashboard = () => {
  const { token, userId } = useContext(AuthContext);
  const [reviewCount, setReviewCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://volans-api-production.up.railway.app/api/revisoes/${userId}`,
          {
            headers: { 'Authorization': `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro ao buscar dados de revisão:', errorText);
          setError('Não foi possível carregar os dados de revisão.');
          return;
        }

        const data = await response.json();
        setReviewCount(data.reviews);
      } catch (err) {
        console.error('Erro ao buscar dados de revisão:', err);
        setError('Erro ao carregar dados. Tente novamente mais tarde.');
      }
    };

    fetchReviews();
  }, [userId, token]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Revisões Realizadas</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Total de Revisões: {reviewCount}</p>
      )}
    </div>
  );
};

export default Dashboard;
