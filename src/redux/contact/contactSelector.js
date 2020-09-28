import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contact.items;

const isLoading = state => state.contact.loadingReducer;

const getFilter = state => state.contact.filter;

const getFilteredContacts = state => {
  const filter = getFilter(state).toLowerCase();
  const items = getItems(state);
  return items.filter(item => item.name.toLowerCase().includes(filter));
};

export default {
  getItems,
  isLoading,
  getFilter,
  getFilteredContacts,
};
