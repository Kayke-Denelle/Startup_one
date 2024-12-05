import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Sidebar from './sidebar'; // Supondo que você tenha um Sidebar componente

// Registrar os componentes necessários para gráficos de barras
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const MonthlyReviewChart = () => {
  const { token, userId } = useContext(AuthContext);
  const [monthlyData, setMonthlyData] = useState({ months: [], counts: [] });
  const [decksAndCards, setDecksAndCards] = useState({ decks: 0, cards: 0 }); // Estado para armazenar baralhos e cartas

  // Fetch para revisões mensais
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

          const monthlyCounts = {};
          reviewsPerMonth.forEach((item) => {
            const month = item.month.substring(0, 3);
            const year = item.year;
            const monthYear = `${month} ${year}`;

            if (!monthlyCounts[monthYear]) {
              monthlyCounts[monthYear] = 0;
            }
            monthlyCounts[monthYear] += item.count;
          });

          const allMonths = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          ];

          const months = [];
          const counts = [];
          allMonths.forEach((month) => {
            let found = false;
            for (let item of Object.keys(monthlyCounts)) {
              if (item.startsWith(month)) {
                months.push(item);
                counts.push(monthlyCounts[item]);
                found = true;
                break;
              }
            }
            if (!found) {
              months.push(`${month} ${new Date().getFullYear()}`);
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

  // Fetch para quantidade de baralhos e cartas
  useEffect(() => {
    const fetchDecksAndCards = async () => {
      try {
        const response = await fetch(`https://volans-api-production.up.railway.app/api/decks/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDecksAndCards({ decks: data.decks, cards: data.cards });
        }
      } catch (error) {
        console.error('Erro ao buscar dados de baralhos e cartas:', error);
      }
    };

    fetchDecksAndCards();
  }, [token, userId]);

  const data = {
    labels: monthlyData.months,
    datasets: [
      {
        label: 'Revisões Mensais',
        data: monthlyData.counts,
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
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-100">
      <Sidebar className="lg:w-1/4 p-4 bg-white shadow-md" />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Revisões Mensais</h2>
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
          <Bar data={data} options={options} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Suas Estatísticas</h3>
          <p className="text-gray-600">Baralhos Criados: <span className="font-bold">{decksAndCards.decks}</span></p>
          <p className="text-gray-600">Cartas Criadas: <span className="font-bold">{decksAndCards.cards}</span></p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReviewChart;
