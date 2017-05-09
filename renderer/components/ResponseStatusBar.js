import React from 'react';
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
      <span className="response-time">{ translateTime(time) }</span>
      <span className="response-size">{ translateSize(size) }</span>
    </div>
  );
};

export default ResponseStatusBar;
