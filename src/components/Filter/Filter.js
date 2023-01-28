import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputFilter } from '../../redux/selectors';
import { setInputFilter } from 'redux/filterSlice';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectInputFilter);
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel>
        Find phone number by name
        <FilterInput
          type="text"
          value={filter}
          name="filter"
          onChange={e => dispatch(setInputFilter(e.currentTarget.value))}
          placeholder="find your contact"
        />
      </FilterLabel>
    </>
  );
};

export default Filter;
