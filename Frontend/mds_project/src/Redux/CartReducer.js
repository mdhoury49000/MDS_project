// src/redux/cartReducer.js
const initialState = {
  items: [], // Chaque élément sera { product: {}, quantity: 1 }
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product.id === newItem.product.id);
      if (existingItem) {
        // Augmenter la quantité pour les articles existants
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === newItem.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      // Ajouter un nouvel article
      return {
        ...state,
        items: [...state.items, newItem],
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload.id),
      };
    }
    // Ajoutez d'autres actions si nécessaire
    default:
      return state;
  }
}

export default cartReducer;
