import React from 'react';
import { Pie } from 'react-chartjs-2';

const chartOptions = {
  legend: {
    display: true
  },
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Years of Experience'
  }
};

const orderedExperienceLevels = [
  'Student',
  '1-3 years',
  '4-6 years',
  '7-10 years',
  '11-15 years',
  'I used punchcards'
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
          '#932890'
        ],
        data: orderedExperienceLevels.map(expLevel => data[expLevel])
      }
    ],
    labels: orderedExperienceLevels
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
