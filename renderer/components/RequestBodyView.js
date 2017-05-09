import React from 'react';


const RequestBodyView = ({ data }) => {
  return (
    <div className="request-body-view">
      { JSON.stringify(data) }
    </div>
  );
};

export default RequestBodyView;
