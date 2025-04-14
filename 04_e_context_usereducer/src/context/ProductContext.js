import React, { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
  inventory: [
    { id: 1, name: "Laptop", stock: 5 },
    { id: 2, name: "Phone", stock: 10 },
    { id: 3, name: "Headphones", stock: 8 },
  ],
  cart: [],
};

function reducer(state, action) {
  if (action.type !== "ADD_TO_CART") return state;

  const { productId } = action.payload;
  const product = state.inventory.find((item) => item.id === productId);

  if (!product || product.stock === 0) return state;

  const updatedInventory = state.inventory.map((item) =>
    item.id === productId ? { ...item, stock: item.stock - 1 } : item
  );

  const updatedCart = state.cart.some((item) => item.id === productId)
    ? state.cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    : [...state.cart, { id: product.id, name: product.name, quantity: 1 }];

  return {
    ...state,
    inventory: updatedInventory,
    cart: updatedCart,
  };
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
