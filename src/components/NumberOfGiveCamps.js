import React from 'react';
import { Pie } from 'react-chartjs-2';

const chartOptions = {
  legend: {
    display: true
  },
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Number of GiveCamps'
  }
};

const orderedLabels = ['0', '1', '2', '3', '4', '5', 'More than 5'];

function chartData(data) {
  return {
    datasets: [
      {
        backgroundColor: [
          '#fc412d',
          '#fb9237',
          '#fcee63',
          '#87fc72',
          '#59b2fc',
          '#932890',
          '#fc91fb'
        ],
        data: orderedLabels.map(label => data[label])
      }
    ],
    labels: orderedLabels
  };
}

export default ({ data }) => {
  return (
    <div
      className="chart-container"
      style={{ position: 'relative', maxHeight: '400px', minHeight: '300px' }}
    >
      <Pie data={chartData(data)} options={chartOptions} />
    </div>
  );
};
