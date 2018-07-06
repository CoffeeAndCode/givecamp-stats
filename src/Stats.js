import React from 'react';
import TicketTypes from './TicketTypes';
import TShirts from './TShirts';

export default ({ tshirts, ticketTypes }) => {
  return (
    <div>
      <hr/>
      <TicketTypes data={ticketTypes} />
      <hr/>
      <TShirts data={tshirts} />
    </div>
  );
}
