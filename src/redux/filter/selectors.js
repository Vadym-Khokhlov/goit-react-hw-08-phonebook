import { selectContacts } from 'redux/contacts/selectors';
import { createSelector } from '@reduxjs/toolkit';
export const selectInputFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectInputFilter, selectContacts],
  (filter, contacts) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter))
);
