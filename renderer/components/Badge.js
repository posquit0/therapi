import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const DEFAULT_COLOR = '#e82c0c';
const Wrapper = styled.span`
  vertical-align: middle;
  font-size: 1em;
  border-radius: 20%;
  background-color: ${props => props.color || DEFAULT_COLOR}

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;
const Badge = props => {
  const { color, value } = props;

  return (
    <Wrapper>{ value }</Wrapper>
  );
};

Badge.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string
};

export default Badge;
