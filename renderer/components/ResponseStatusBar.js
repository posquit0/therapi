import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { CLOCK, FLOPPY_DISK } from '../constants/icons';
import './ResponseStatusBar.css';


function calcLevel(status) {
  if (status < 300)
    return 'success';
  else if (status < 400)
    return 'info';
  else if (status < 500)
    return 'failure';

  return 'error';
}

function translateStatus(status) {
  return '404 Not Found';
}

function translateTime(time) {
  return `${time} ms`;
}

function translateSize(size) {
  return `${size} B`;
}

const ResponseStatusBar = ({ status, time, size }) => {
  const level = calcLevel(status);

  return (
    <div className="response-status-bar">
      <span className={ `response-status-code ${level}` }>{ translateStatus(status) }</span>
      <span className="response-time">
        <Icon icon={ CLOCK } />
        <span>{ translateTime(time) }</span>
      </span>
      <span className="response-size">
        <Icon icon={ FLOPPY_DISK } />
        <span>{ translateSize(size) }</span>
      </span>
    </div>
  );
};

ResponseStatusBar.propTypes = {
  status: PropTypes.number,
  time: PropTypes.number,
  size: PropTypes.number
};

export default ResponseStatusBar;
