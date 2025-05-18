import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

/*
const radarData = {
  labels: ['Speed', 'Strength', 'Agility', 'Stamina', 'Skill'],
  datasets: [
    {
      label: 'Player Stats',
      data: [80, 90, 70, 85, 95],
      backgroundColor: 'rgba(34, 202, 236, 0.2)',
      borderColor: 'rgba(34, 202, 236, 1)',
      borderWidth: 2,
    },
  ],
};
*/

const RadarChart = ({data, max, min, width, height}) => {

  // Chart options
  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: min,
        suggestedMax: max,
      },
    },
  };

  return (
    <div style={{ width: width, height: height }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;