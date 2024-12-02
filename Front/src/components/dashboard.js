import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Dashboard = ({ userId }) => {
  const [revisionDates, setRevisionDates] = useState([]);

  // Função para buscar as revisões
  const fetchRevisionData = async () => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch(`https://volans-api-production.up.railway.app/api/revisions?userId=${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRevisionDates(data);
      } else {
        const errorData = await response.json();
        console.error('Erro ao buscar dados para o gráfico:', errorData);
      }
    } catch (error) {
      console.error('Erro ao buscar dados da revisão:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRevisionData();
    }
  }, [userId]);

  // Preparando os dados para o gráfico
  const getChartData = () => {
    const labels = []; // Array para armazenar as datas das revisões
    const counts = []; // Array para armazenar as contagens de revisões

    const currentDate = new Date();

    // Percorrendo as datas de revisão e contando as revisões por dia
    revisionDates.forEach(revisions => {
      revisions.forEach(date => {
        const day = new Date(date);
        if (currentDate.getDate() === day.getDate()) {
          counts.push(1);
          labels.push(day.toLocaleDateString());
        }
      });
    });

    return {
      labels,
      datasets: [
        {
          label: 'Revisões por Data',
          data: counts,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        },
      ],
    };
  };

  return (
    <div>
      <h2>Gráfico de Revisões</h2>
      <Line data={getChartData()} />
    </div>
  );
};

export default Dashboard;
