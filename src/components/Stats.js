import React from 'react';
import Dups from './Dups';
import FoodAllergies from './FoodAllergies';
import NumberOfGiveCamps from './NumberOfGiveCamps';
import TicketTypes from './TicketTypes';
import TShirts from './TShirts';
import YearsOfExperience from './YearsOfExperience';

export default ({
  dups,
  foodAllergies,
  numberOfGiveCamps,
  tshirts,
  ticketTypes,
  yearsOfExperience
}) => {
  return (
    <div>
      <hr />
      <TicketTypes data={ticketTypes} />
      <hr />
      <TShirts data={tshirts} />
      <hr />
      <YearsOfExperience data={yearsOfExperience} />
      <hr />
      <NumberOfGiveCamps data={numberOfGiveCamps} />
      <hr />
      <FoodAllergies data={foodAllergies} />
      <hr />
      <Dups data={dups} />
    </div>
  );
};
