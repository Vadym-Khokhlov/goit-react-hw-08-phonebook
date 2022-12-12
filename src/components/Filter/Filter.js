import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterLabel>
        Find number by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
