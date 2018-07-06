import React from 'react';
import Tshirt from './TShirt';

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

function renderItem(data) {
  return function(shirtSize) {
    return <Tshirt count={data[shirtSize] || 0} key={shirtSize} type={shirtSize} />;
  }
}

export default ({ data }) => {
  return (
    <ul>
      {orderedSizes.map(renderItem(data))}
    </ul>
  );
};
