const getItems = state => state.contact.items;

const getLoading = state => state.contact.loading;

const getFilter = state => state.contact.filter;

const getFilteredContacts = state => {
  const filter = getFilter(state).toLowerCase();
  const items = getItems(state);
  return items.filter(item => item.name.toLowerCase().includes(filter));
};

export default {
  getItems,
  getLoading,
  getFilter,
  getFilteredContacts,
};
