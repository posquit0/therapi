import React from 'react';


const ResponseBodyView = ({ data }) => {
  return (
    <div className="response-body-view">
      { JSON.stringify(data) }
    </div>
  );
};

export default ResponseBodyView;
