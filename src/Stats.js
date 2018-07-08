import React from 'react';
import NumberOfGiveCamps from './NumberOfGiveCamps';
import TicketTypes from './TicketTypes';
import TShirts from './TShirts';
import YearsOfExperience from './YearsOfExperience';

export default ({
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
    </div>
  );
};
