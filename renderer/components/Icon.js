import React from 'react';
import PropTypes from 'prop-types';


const Icon = ({ icon, size, color, style }) => {
  const computedStyle = Object.assign({
    display: 'inline-block',
    width: size || '1em',
    height: size || '1em',
    verticalAlign: 'middle',
    strokeWidth: 0,
    stroke: 'currentColor',
    fill: 'currentColor',
    color: color
  }, style);

  return (
    <svg
      preserveAspectRatio='xMidYMid meet'
      style={ computedStyle }
      viewBox="0 0 1024 1024">
      <path d={ icon }></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  style: PropTypes.object
};

export default Icon;