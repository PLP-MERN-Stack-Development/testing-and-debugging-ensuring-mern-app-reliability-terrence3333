import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, className, ...props }) => {
  const btnClass = classNames(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    { 'btn-disabled': disabled },
    className
  );

  return (
    <button className={btnClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
