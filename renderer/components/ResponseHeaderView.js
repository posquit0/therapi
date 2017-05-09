import React from 'react';


const ResponseHeaderView = ({ headers }) => {
  return (
    <div className="response-header-view">
      { JSON.stringify(headers) }
    </div>
  );
};

export default ResponseHeaderView;
