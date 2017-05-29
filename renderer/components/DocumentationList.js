import React from 'react';
import DocumentationListItem from './DocumentationListItem';


const renderItem = item => {
  return (
    <DocumentationListItem />
  );
};

const DocumentationList = props => {
  const { docs } = props;

  return (
    <div>
      { docs.map(doc => renderItem(doc)) }
    </div>
  );
};

export default DocumentationList;
