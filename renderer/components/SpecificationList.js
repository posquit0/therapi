import React from 'react';
import SpecificationListItem from './SpecificationListItem';


const renderItem = item => {
  return (
    <SpecificationListItem />
  );
};

const SpecificationList = props => {
  const { specs } = props;

  return (
    <div>
      { specs.map(spec => renderItem(spec)) }
    </div>
  );
};

export default SpecificationList;
