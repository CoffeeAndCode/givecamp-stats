import React from 'react';

export default ({ count, type }) => {
  return (
    <li>
      {type}: {count}
    </li>
  );
};
