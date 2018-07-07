import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartOptions = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Ticket Types'
  }
};

function chartData(data) {
  return {
    datasets: [{
      backgroundColor: [
        '#fc412d',
        '#fb9237',
        '#fcee63',
        '#87fc72',
        '#59b2fc',
        '#932890',
        '#fc91fb'
      ],
      data: Object.values(data)
    }],
    labels: Object.keys(data)
  };
}

export default ({ data }) => {
  return (
    <div className="chart-container" style={{ position: 'relative', maxHeight: '400px', minHeight: '300px' }}>
      <Bar data={chartData(data)} options={chartOptions} height={300} width={300} />
    </div>
  );
};
