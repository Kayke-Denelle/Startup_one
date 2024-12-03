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

          // Agrupar as revisões por mês
          const monthlyCounts = {};

          reviewsPerMonth.forEach((item) => {
            const monthYear = `${item.month} ${item.year}`;
            if (!monthlyCounts[monthYear]) {
              monthlyCounts[monthYear] = 0;
            }
            monthlyCounts[monthYear] += item.count; // Soma as contagens para o mesmo mês
          });

          // Definir todos os meses do ano
          const allMonths = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];

          const months = [];
          const counts = [];

          // Preencher os meses do ano
          allMonths.forEach((month) => {
            let found = false;

            // Verificar se o mês está presente nos dados
            for (let item of reviewsPerMonth) {
              if (item.month.substring(0, 3) === month) {
                months.push(`${month} ${item.year}`);
                counts.push(item.count);
                found = true;
                break;
              }
            }

            // Se o mês não foi encontrado, adicionar como 0
            if (!found) {
              months.push(`${month} ${new Date().getFullYear()}`); // Usa o ano atual
              counts.push(0);
            }
          });

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
      x: {
        // Mostrar os meses corretamente como labels
        ticks: {
          autoSkip: false, // Não ocultar ticks automaticamente
        },
      },
      y: {
        beginAtZero: true,
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
