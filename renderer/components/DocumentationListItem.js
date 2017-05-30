import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;
const DocumentationListItem = props => {
  return (
    <Wrapper>
      First Documentation
    </Wrapper>
  );
};

export default DocumentationListItem;
