import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';
import { SEARCH, CROSS } from '../constants/icons';


const FilterInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Filter'
})`
  flex: 1;
  padding: 0.4em 0.6em;
  border: none;
  background: none;
  font-size: 0.9em;
  color: white;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  border: 1px solid;
  border-color: #454643;
  border-radius: 7px;
  font-size: 1.1em;

  svg:first-child {
    margin-left: 0.5em;
  }
  svg:last-child {
    margin-right: 0.5em;
  }
  &:hover {
    border-color: #008480;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75);
  }
`;

// TODO: Cancel button
const Filter = props => {
  return (
    <Wrapper>
      <Icon icon={ SEARCH } />
      <FilterInput />
      <Icon icon={ CROSS } />
    </Wrapper>
  );
}

export default Filter;
