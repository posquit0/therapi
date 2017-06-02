import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const VerticalDivider = styled.span`
  margin: 0;
  width: 1px;
  height: 100%;
  border: none;
  background-color: ${({ color }) => color || '#e8e8e8' };
`;


export default VerticalDivider;