// src/redux/cartReducer.js
const initialState = {
  items: [], // Chaque élément est un objet { product: {}, quantity: 1 }
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);
      if (existingItemIndex >= 0) {
        // Produit déjà dans le panier, mise à jour de la quantité
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
        );
        return { ...state, items: updatedItems };
      } else {
        // Nouveau produit, ajout au panier
        return { ...state, items: [...state.items, { product, quantity }] };
      }
    }
    case 'REMOVE_ITEM': {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.product.id === id);
      if (existingItemIndex >= 0) {
        const updatedItem = { ...state.items[existingItemIndex], quantity: state.items[existingItemIndex].quantity - quantity };
        if (updatedItem.quantity <= 0) {
          // Si la quantité devient 0 ou moins, retirer l'article du panier
          return { ...state, items: state.items.filter(item => item.product.id !== id) };
        } else {
          // Sinon, mettre à jour la quantité
          return {
            ...state,
            items: state.items.map((item, index) =>
              index === existingItemIndex ? updatedItem : item
            ),
          };
        }
      }
      return state; // Si l'article n'est pas trouvé, retourner l'état actuel
    }
    default:
      return state;
  }
}

export default cartReducer;
