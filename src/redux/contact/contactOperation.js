import axios from 'axios';
import contactsAction from './contactActions';

const addContact = data => dispatch => {
  dispatch(contactsAction.addContactRequest());

  axios
    .post('http://localhost:2000/contacts', { ...data })
    .then(response => dispatch(contactsAction.addContactSuccess(response.data)))
    .catch(error => dispatch(contactsAction.addContactError(error)));
};

const fetchContacs = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(response =>
      dispatch(contactsAction.fetchContactsSuccess(response.data)),
    )
    .catch(error =>
      dispatch(contactsAction.fetchContactsError(console.log(error))),
    );
};

const removeContact = id => dispatch => {
  dispatch(contactsAction.removeContactRequest());
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactSuccess(id)))
    .catch(error => dispatch(contactsAction.removeContactError(error)));
};

export default { addContact, fetchContacs, removeContact };
