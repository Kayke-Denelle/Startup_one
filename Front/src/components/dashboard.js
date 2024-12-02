import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Ou outro pacote gráfico de sua escolha

const Dashboard = ({ deckId }) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch(`https://volans-api-production.up.railway.app/api/baralhos/${deckId}/revisoes`);
        const data = await response.json();
        setReviewData(data.reviews);
      } catch (error) {
        console.error('Erro ao buscar dados para o gráfico:', error);
      }
    };

    fetchReviewData();
  }, [deckId]);

  // Dados para o gráfico
  const labels = reviewData.map((entry) => entry.date);
  const counts = reviewData.map((entry) => entry.count);

  return (
    <div>
      <h2>Revisões da Semana</h2>
      <canvas id="reviewChart"></canvas>
      <script>
        {`
          const ctx = document.getElementById('reviewChart').getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ${JSON.stringify(labels)},
              datasets: [{
                label: 'Revisões',
                data: ${JSON.stringify(counts)},
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              }],
            },
          });
        `}
      </script>
    </div>
  );
};

export default Dashboard;
