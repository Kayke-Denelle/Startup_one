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

          // Agrupar as revisões por mês e ano, sem somar os valores entre os anos
          const monthlyCounts = {};

          reviewsPerMonth.forEach((item) => {
            const month = item.month.substring(0, 3); // Extrair o nome do mês (primeiros 3 caracteres)
            const year = item.year; // Ano

            const monthYear = `${month} ${year}`; // Criar chave única para o mês e ano (Ex: "Jan 2023")

            // Se o mês/ano já existe, adiciona as revisões, senão cria um novo
            if (!monthlyCounts[monthYear]) {
              monthlyCounts[monthYear] = 0;
            }
            monthlyCounts[monthYear] += item.count; // Soma as revisões do mesmo mês e ano
          });

          // Definir todos os meses do ano
          const allMonths = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];

          const months = [];
          const counts = [];

          // Preencher os meses do ano, caso não haja revisões para algum mês, vai inserir 0
          allMonths.forEach((month) => {
            let found = false;

            // Verificar se o mês está presente nos dados
            for (let item of Object.keys(monthlyCounts)) {
              if (item.startsWith(month)) { // Verifica se o mês corresponde à chave
                months.push(item);
                counts.push(monthlyCounts[item]);
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
    labels: monthlyData.months, // Mês e ano (jan, fev, etc.)
    datasets: [
      {
        label: 'Revisões Mensais',
        data: monthlyData.counts, // Contagem de revisões por mês
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(199, 199, 199, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(100, 100, 100, 0.8)', // Cor ao passar o mouse
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 16,
          weight: 'bold',
        },
        bodyFont: {
          size: 14,
        },
        borderColor: '#fff',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#555',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false, // Remove linhas verticais
        },
      },
      y: {
        beginAtZero: true, // Começa o gráfico no valor zero
        ticks: {
          color: '#555',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#ddd', // Linhas horizontais cinzas claras
        },
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-100">
      <Sidebar className="lg:w-1/4 p-4 bg-white shadow-md" /> {/* Sidebar com Tailwind CSS */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Revisões Mensais</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MonthlyReviewChart;
