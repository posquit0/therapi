import React from 'react';


const RequestQueryView = ({ query }) => {
  return (
    <div className="request-query-view">
      { JSON.stringify(query) }
    </div>
  );
};

export default RequestQueryView;
