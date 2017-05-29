import React from 'react';
import AccordionPanel from './Accordion/AccordionPanel';
import DocumentationList from './DocumentationList';
import SpecificationList from './SpecificationList';
import Divider from './Divider';


// TODO: Collapse by Spec Section
// TODO: Draggable in the category
// TODO: onSelect
// TODO: Alert when click Delete
const WorkspaceView = ({ history }) => {
  return (
    <div className="workspace-view">
      <AccordionPanel heading="DOCUMENTATION">
        <DocumentationList docs={ [1, 2, 3] } />
      </AccordionPanel>
      <AccordionPanel heading="SPECIFICATION">
        <SpecificationList specs={ [1, 2, 3] } />
      </AccordionPanel>
      <AccordionPanel heading="TEST">
        <DocumentationList docs={ [1, 2, 3] } />
      </AccordionPanel>
    </div>
  );
};

export default WorkspaceView;
