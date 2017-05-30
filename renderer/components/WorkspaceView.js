import React from 'react';
import styled from 'styled-components';
import AccordionPanel from './Accordion/AccordionPanel';
import DocumentationList from './DocumentationList';
import SpecificationList from './SpecificationList';
import Divider from './Divider';


const Wrapper = styled.div`
  & > div {
    margin-bottom: 15px;
  }
`;
// TODO: Collapse by Spec Section
// TODO: Draggable in the category
// TODO: onSelect
// TODO: Alert when click Delete
const WorkspaceView = ({ history }) => {
  return (
    <Wrapper>
      <AccordionPanel heading="DOCUMENTATION">
        <DocumentationList docs={ [1, 2, 3] } />
      </AccordionPanel>
      <AccordionPanel heading="SPECIFICATION">
        <SpecificationList specs={ [1, 2, 3] } />
      </AccordionPanel>
      <AccordionPanel heading="TEST">
        <DocumentationList docs={ [1, 2, 3] } />
      </AccordionPanel>
    </Wrapper>
  );
};

export default WorkspaceView;
