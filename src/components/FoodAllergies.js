import React from 'react';

function renderChild(data) {
  const chartData = data;
  return function(label) {
    return (
      <li>
        <em>{label}:</em> {chartData[label]}
      </li>
    );
  };
}

export default ({ data }) => {
  const orderedLabels = Object.keys(data).sort();

  return (
    <div>
      <h3>Dietary Info</h3>
      <ul className="food-allergies">{orderedLabels.map(renderChild(data))}</ul>
    </div>
  );
};
