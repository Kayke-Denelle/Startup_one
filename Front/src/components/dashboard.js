import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';



const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const [revisionData, setRevisionData] = useState([]);

  useEffect(() => {
    const fetchRevisions = async () => {
      const response = await fetch('https://volans-api-production.up.railway.app/api/revisions?userId=USER_ID', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      setRevisionData(data);
    };

    fetchRevisions();
  }, [token]);

  const chartData = {
    labels: revisionData.map(r => new Date(r.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Fácil',
        data: revisionData.map(r => r.easyCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Médio',
        data: revisionData.map(r => r.mediumCount),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Difícil',
        data: revisionData.map(r => r.hardCount),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Seu Progresso</h1>
        <Chart type="bar" data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
