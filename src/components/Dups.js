import React from 'react';

function renderChild(attendee) {
  return <li>{attendee}</li>;
}

export default ({ data }) => {
  return (
    <div>
      <h3>Duplicate Registrations</h3>
      <ul>{data.map(renderChild)}</ul>
    </div>
  );
};
