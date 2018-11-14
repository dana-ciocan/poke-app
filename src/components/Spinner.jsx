import React from 'react';
import './Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({ colour, size }) => {
  console.log(colour);
  let borderWidth;
  let spinnerSize;
  switch (size) {
    case 'medium':
      borderWidth = 24;
      spinnerSize = 80;
      break;
    case 'large':
      borderWidth = 36;
      spinnerSize = 120;
      break;
    default:
      borderWidth = 12;
      spinnerSize = 40;
      break;
  }
  return (
    <div
      className="loader"
      style={{
        border: `${borderWidth}px solid #999999`,
        borderTop: `${borderWidth}px solid ${colour}`,
        width: `${spinnerSize}px`,
        height: `${spinnerSize}px`,
      }}
    />
  );
};

Spinner.propTypes = {
  colour: PropTypes.string,
  size: PropTypes.string,
};
Spinner.defaultProps = {
  colour: 'purple',
  size: 'small',
};

export default Spinner;
