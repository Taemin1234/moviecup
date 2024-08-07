import React from 'react';


const Radio = ({title, children, value, onChange}) => {
  return (
    <label>
        <select value={value} onChange={onChange}>
            <option>{title}</option>
            {children}
        </select>
        
    </label>
  );
};

export default Radio;