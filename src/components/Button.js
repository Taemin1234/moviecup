import React from 'react';
import * as MI from '../style/style'

const Button = ({children, onClick, bg, color, margin}) => {
  return (
    <MI.Buttons bg={bg} color={color} margin={margin} onClick={onClick}>{children}</MI.Buttons>
  );
};

export default Button;