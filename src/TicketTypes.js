import React from 'react';
import TicketType from './TicketType';

function renderTicketType(data) {
  return function(ticketType) {
    return <TicketType count={data[ticketType]} key={ticketType} type={ticketType} />;
  }
}

export default ({ data }) => {
  return (
    <ul>
      {Object.keys(data).map(renderTicketType(data))}
    </ul>
  );
};
