import React from 'react';


const HistoryView = ({ history }) => {
  return (
    <div className="history-view">
      { JSON.stringify(history) }
    </div>
  );
};

export default HistoryView;
