import React from 'react';


const Filter = ({ history }) => {
  return (
    <div className="filter">
      { JSON.stringify(history) }
    </div>
  );
};

export default Filter;
