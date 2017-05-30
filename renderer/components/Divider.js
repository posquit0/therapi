import React from 'react';
import PropTypes from 'prop-types';


const Divider = (props) => {
  const { style, color } = props;

  const dividerStyle = Object.assign({
    margin: 0,
    height: 1,
    border: 'none',
    backgroundColor: color || '#e8e8e8'
  }, style);

  return (
    <hr style={ dividerStyle } />
  );
};

Divider.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string
};

Divider.defaultProps = {};

export default Divider;