import React from 'react';
import PropTypes from "prop-types";

const Type = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape = "",
    size = "",
    variant = "",
    color = "",
    ...restProps
  }) => {
  return (
    <button className={`${className}`} {...restProps} style={{color: '#72d5bf',borderRadius: "30px", padding: "10px", backgroundColor: "gray", border: "1px solid #72d5bf", display: "flex"}}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  )
}

export default Type