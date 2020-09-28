import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contact/contactReducer';

const defaultMiddleware = getDefaultMiddleware();
const store = configureStore({
  reducer: { contact: contactReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...defaultMiddleware],
});

export default store;
