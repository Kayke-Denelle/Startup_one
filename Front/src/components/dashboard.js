import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registrar os componentes necessários para gráficos de barras
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const MonthlyReviewChart = () => {
  const { token, userId } = useContext(AuthContext);
  const [monthlyData, setMonthlyData] = useState({ months: [], counts: [] });

  useEffect(() => {
    const fetchMonthlyReviews = async () => {
      try {
        const response = await fetch(`https://volans-api-production.up.railway.app/api/revisoes/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const reviewsPerMonth = data.reviewsPerMonth;

          // Formatando as informações para meses e contagem
          const months = reviewsPerMonth.map(item => `${item.month}/${item.year}`);
          const counts = reviewsPerMonth.map(item => item.count);

          setMonthlyData({ months, counts });
        }
      } catch (error) {
        console.error('Erro ao buscar revisões mensais:', error);
      }
    };

    fetchMonthlyReviews();
  }, [token, userId]);

  const data = {
    labels: monthlyData.months, // Mês/Ano
    datasets: [
      {
        label: 'Revisões Mensais',
        data: monthlyData.counts, // Contagem de revisões por mês
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Ajuste do passo para o eixo Y
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Revisões Mensais</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlyReviewChart;
