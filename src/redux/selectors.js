import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectInputFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectInputFilter, selectContacts],
  (filter, contacts) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter))
);
