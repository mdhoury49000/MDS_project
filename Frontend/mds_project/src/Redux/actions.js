// src/redux/actions.js
export const addToCart = (product, quantity = 1) => ({
  type: 'ADD_TO_CART',
  payload: { product, quantity },
});

  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { id: productId },
  });
  