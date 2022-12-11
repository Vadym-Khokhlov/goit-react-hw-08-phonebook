import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find number by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

export default Filter;
