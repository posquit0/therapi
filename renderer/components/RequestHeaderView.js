import React from 'react';


const RequestHeaderView = ({ headers }) => {
  return (
    <div className="request-header-view">
      { JSON.stringify(headers) }
    </div>
  );
};

export default RequestHeaderView;
