import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registrar os componentes necessários para gráficos de barras
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const MONTHS_ABBREVIATIONS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

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

          // Agrupar as revisões por mês
          const monthlyCounts = {};

          reviewsPerMonth.forEach((item) => {
            const monthYear = `${item.year}-${item.month}`; // Formato: "2023-1"
            if (!monthlyCounts[monthYear]) {
              monthlyCounts[monthYear] = 0;
            }
            monthlyCounts[monthYear] += item.count; // Soma as contagens para o mesmo mês
          });

          // Transformar o objeto em arrays para o gráfico
          const months = Object.keys(monthlyCounts).map((key) => {
            const [year, month] = key.split("-");
            return `${MONTHS_ABBREVIATIONS[month - 1]} ${year}`; // Mapeia o número do mês para a abreviação
          });

          const counts = Object.values(monthlyCounts);

          setMonthlyData({ months, counts });
        }
      } catch (error) {
        console.error('Erro ao buscar revisões mensais:', error);
      }
    };

    fetchMonthlyReviews();
  }, [token, userId]);

  const data = {
    labels: monthlyData.months, // Mês e ano
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
      },
      x: {
        title: {
          display: true,
          text: 'Meses',
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