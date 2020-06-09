import React from 'react';

const Event = ({ item }) => {
  return(
    <div className='single-event'>
      <h3>{item.description}</h3>
    </div>
  );
};

export default Event;
