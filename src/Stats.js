import React from 'react';
import TicketTypes from './TicketTypes';
import TShirts from './TShirts';
import YearsOfExperience from './YearsOfExperience';

export default ({ tshirts, ticketTypes, yearsOfExperience }) => {
  return (
    <div>
      <hr />
      <TicketTypes data={ticketTypes} />
      <hr />
      <TShirts data={tshirts} />
      <hr />
      <YearsOfExperience data={yearsOfExperience} />
    </div>
  );
};
