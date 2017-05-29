import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from 'rc-tooltip';
import Icon from './Icon';
import { CLOCK, FLOPPY_DISK } from '../constants/icons';
import httpStatusCodes from '../constants/httpStatusCodes';
import * as colors from '../constants/colors';
import 'rc-tooltip/assets/bootstrap.css';


function getStatusColor(statusLevel) {
  return colors[statusLevel.toUpperCase()];
}

function calcStatusLevel(statusCode) {
  if (statusCode < 300)
    return 'success';
  else if (statusCode < 400)
    return 'warning';
  else if (statusCode < 500)
    return 'failure';

  return 'error';
}

function translateStatusText(statusCode) {
  return 'Not Found';
}

function translateTime(time) {
  return `${time} ms`;
}

function translateSize(size) {
  return `${size} B`;
}

const Status = styled.div`
  display: inline-block;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    margin-right: 4px;
    background-color: ${props => getStatusColor(props.level)};
  }
`;

const Info = styled.span`
  min-width: 48px;
  margin-left: 8px;
  font-size: 0.7em;
  text-align: left;
  & > * {
    vertical-align: middle;
  }
  svg {
    margin-right: 0.5em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const ResponseStatusBar = ({ status, statusText, time, size }) => {
  const level = calcStatusLevel(status);
  const httpStatus = httpStatusCodes[status] || {};

  return (
    <Wrapper className="response-status-bar">
      <Tooltip placement="bottom" overlay={ httpStatus.description }>
        <Status level={ level }>
          { `${status} ${statusText || httpStatus.text}` }
        </Status>
      </Tooltip>
      <span>
        <Info>
          <Icon icon={ CLOCK } /><span>{ translateTime(time) }</span>
        </Info>
        <Tooltip placement="bottomRight" overlay={ translateSize(size) }>
          <Info>
            <Icon icon={ FLOPPY_DISK } /><span>{ translateSize(size) }</span>
          </Info>
        </Tooltip>
      </span>
    </Wrapper>
  );
};

ResponseStatusBar.propTypes = {
  status: PropTypes.number,
  statusText: PropTypes.string,
  time: PropTypes.number,
  size: PropTypes.number
};

export default ResponseStatusBar;
