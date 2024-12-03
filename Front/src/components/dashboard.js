import React, { useEffect, useState, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import registerables
import { AuthContext } from '../context/AuthContext';

// Register all necessary components
Chart.register(...registerables);

const ReviewChart = ({ deckId }) => {
  const { token } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewCounts = async () => {
      if (!deckId) {
        console.error('deckId is undefined');
        return; // Exit if deckId is not defined
      }

      try {
        const response = await fetch(`https://volans-api-production.up.railway.app/api/baralhos/${deckId}/revisoes`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        // Check if the response is okay
        if (!response.ok) {
          const errorText = await response.text(); // Get the response as text
          console.error('Failed to fetch review counts:', response.statusText, errorText); // Log the response text
          return;
        }

        const data = await response.json();
        setReviewData(data.reviews);
      } catch (error) {
        console.error('Error fetching review counts:', error);
      }
    };

    fetchReviewCounts();
  }, [deckId, token]);

  const chartData = {
    labels: reviewData.map(item => item.date),
    datasets: [
      {
        label: 'Revisões na Semana',
        data: reviewData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Fixed the spacing issue here
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contagem de Revisões na Semana</h2>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default ReviewChart;