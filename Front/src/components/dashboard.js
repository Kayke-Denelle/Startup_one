// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export default function Dashboard({ userId }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://volans-api-production.up.railway.app/api/revisions/weekly-summary?userId=${userId}`
        );

        const data = response.data;

        // Prepara os dados para o gráfico
        const labels = data.map((entry) => entry._id);
        const counts = data.map((entry) => entry.count);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Revisões por Dia',
              data: counts,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao buscar dados para o gráfico:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!chartData) return <p>Carregando gráfico...</p>;

  return (
    <div>
      <h2>Resumo Semanal</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Revisões Realizadas na Última Semana',
            },
          },
        }}
      />
    </div>
  );
}
