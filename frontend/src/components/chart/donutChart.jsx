import React, { use, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import './donutChart.css';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);


/*
const chartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
    },
  ],
};
*/

const DonutChart = ({ chartData, width, height, centerTxt, fontSize, disableLegend, disableLegendFilter, cutout, tooltip}) => {
  const [centerText, setCenterText] = useState(centerTxt);

  // Simulating an async update
  useEffect(() => {
    setCenterText(centerTxt);
  }, [centerTxt]);

  // Set font size and style for the center text 
  const adjustmentMap = {
    large: 5,
    medium: 10,
    small: 15
  };

  // Set font size and style for the center text 
  const cutoutMap = {
    thick: 55,
    medium: 72.5,
    thin: 80
  };

  // Plugin to display text in the center
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
      const { ctx, chartArea, data } = chart;
      ctx.save();
      
      const adjustment = adjustmentMap[fontSize] || 15;
      const fontSizeCalculated = (chartArea.bottom - chartArea.top) / adjustment; // Adjust font size based on the chart size
      ctx.font = `${fontSizeCalculated}px Arial`;
      ctx.fillStyle = '#000'; // Text color
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Center position
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      ctx.fillText(centerText, centerX, centerY);
      ctx.restore();
    }
  };

  const options = {
    responsive: true,
    cutout: `${cutoutMap[cutout] || 55}%`,
    plugins: {
      tooltip: {
        enabled: tooltip,
      },
      legend: {
        display: !disableLegend,
        position: 'bottom',
        labels: {
          font: {
            size: 18,
            weight: 'bold',
          },
        },
        onClick: disableLegendFilter
          ? () => {} 
          : undefined,
      },
    },
  };

  return (
    <div className="donutchart" style={{ width: width, height: height }}>
      <Doughnut 
        key={centerText}
        data={chartData} 
        options={options}
        plugins={[centerTextPlugin]}/>
    </div>
  );
};

export default DonutChart;