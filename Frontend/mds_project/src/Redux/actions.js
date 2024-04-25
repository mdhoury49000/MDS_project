// src/redux/actions.js
export const addToCart = (product, quantity = 1) => ({
  type: 'ADD_TO_CART',
  payload: { product, quantity },
});
// Action pour diminuer la quantité d'un produit dans le panier ou le supprimer
export const removeItem = (id, quantity = 1) => ({
  type: 'REMOVE_ITEM',
  payload: { id, quantity }
});
