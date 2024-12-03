import React, { useEffect, useState, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { AuthContext } from '../context/AuthContext';

// Registrar os componentes do Chart.js
Chart.register(...registerables);

const ReviewChart = ({ deckId }) => {
  const { token, userId } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewCounts = async () => {
      if (!deckId) {
        console.error('deckId não foi fornecido.');
        setError('Baralho não identificado. Verifique a configuração.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://volans-api-production.up.railway.app/api/usuarios/${userId}/revisoes`,
          {
            headers: { 'Authorization': `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Erro ao buscar dados: ${response.statusText}`, errorText);
          setError('Não foi possível carregar os dados de revisão.');
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setReviewData(data.reviews);
      } catch (fetchError) {
        console.error('Erro de rede ao buscar dados:', fetchError);
        setError('Erro ao carregar dados. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewCounts();
  }, [deckId, token]);

  const chartData = {
    labels: reviewData.map(item => item.date),
    datasets: [
      {
        label: 'Revisões na Semana',
        data: reviewData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        grid: { display: true },
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contagem de Revisões na Semana</h2>
      {isLoading ? (
        <p>Carregando dados...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div style={{ height: '400px' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default ReviewChart;
