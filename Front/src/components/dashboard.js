import React, { useEffect, useState, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { AuthContext } from '../context/AuthContext';

// Registrar os componentes do Chart.js
Chart.register(...registerables);

const ReviewChart = () => {
  const { token, userId } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await fetch(
          `https://volans-api-production.up.railway.app/api/usuarios/${userId}/revisoes`,
          {
            headers: { 'Authorization': `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro ao buscar dados de revisão:', response.statusText, errorText);
          setError('Não foi possível carregar os dados de revisão.');
          return;
        }

        const data = await response.json();

        // Consolidar os dados de revisão por data
        const consolidatedData = data.reviews.reduce((acc, review) => {
          const { date, count } = review;
          acc[date] = (acc[date] || 0) + count;
          return acc;
        }, {});

        // Formatar para um array compatível com o gráfico
        const formattedData = Object.entries(consolidatedData).map(([date, count]) => ({
          date,
          count,
        }));

        setReviewData(formattedData);
      } catch (error) {
        console.error('Erro de rede ao buscar dados:', error);
        setError('Erro ao carregar dados. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllReviews();
  }, [token, userId]);

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
      <h2 className="text-2xl font-bold mb-4">Revisões Consolidada de Todos os Baralhos</h2>
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
