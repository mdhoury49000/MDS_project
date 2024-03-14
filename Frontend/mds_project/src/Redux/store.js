// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Corrigé de 'import thunk from 'redux-thunk';'
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Vous pouvez ajouter d'autres reducers ici si nécessaire
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
