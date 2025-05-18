import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend  } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend );

/*
const polarData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: 'Category Distribution',
      data: [10, 20, 30, 40, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
    },
  ],
};
*/
const PolarAreaChart  = ({data, width, height, disableLegend, disableLegendFilter}) => {
  
  const options = {
    plugins: {
      legend: {
        display: !disableLegend,
        position: 'bottom', // Moves labels to the bottom
        align: 'center', // Centers the legend
        onClick: disableLegendFilter
            ? () => {} 
            : undefined,
      },
    },
  };

  return (
    <div style={{ width: width, height: height }}>
      <PolarArea data={data} options={options}/>
    </div>
  );
};

export default PolarAreaChart ;