import React from 'react';
import HistoryListItem from './HistoryListItem';


// TODO: collapse by datetime
const renderHistoryItem = item => {
  return (
    <HistoryListItem
      key={ item.id }
      history={ item }
    />
  );
};

// TODO: onSelect
// TODO: onDelete
// TODO: onClean
const HistoryView = ({ history }) => {

  return (
    <div className="history-view">
      <div className="history-items">
        { history.map(item => renderHistoryItem(item)) }
      </div>
    </div>
  );
};

export default HistoryView;
