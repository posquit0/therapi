import React from 'react';


const RequestAuthView = ({ query }) => {
  return (
    <div className="request-auth-view">
      { JSON.stringify(query) }
    </div>
  );
};

export default RequestAuthView;
