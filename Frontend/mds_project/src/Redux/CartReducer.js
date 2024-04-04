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
        // Le produit existe déjà dans le panier, mise à jour de la quantité
        return {
          ...state,
          items: state.items.map((item, index) => 
            index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
          ),
        };
      } else {
        // Nouvel ajout dans le panier
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }
      case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload.id),
      };
    }
    // Gérer d'autres actions si nécessaire
    default:
      return state;
  }
}

export default cartReducer;
