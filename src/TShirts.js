import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartOptions = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'T-Shirt Sizes'
  }
};

const orderedSizes = [
  'Normal - S',
  'Normal - M',
  'Normal - L',
  'Normal - XL',
  'Normal - XXL',
  'Normal - XXXL',
  'Organizer - S',
  'Organizer - M',
  'Organizer - L',
  'Organizer - XL',
  'Organizer - XXL',
  'Organizer - XXXL'
];

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
          '#fc412d',
          '#fb9237',
          '#fcee63',
          '#87fc72',
          '#59b2fc',
          '#932890'
        ],
        data: orderedSizes.map(size => data[size])
      }
    ],
    labels: orderedSizes
  };
}

export default ({ data }) => {
  return (
    <div
      className="chart-container"
      style={{ position: 'relative', maxHeight: '400px', minHeight: '300px' }}
    >
      <Bar data={chartData(data)} options={chartOptions} />
    </div>
  );
};
