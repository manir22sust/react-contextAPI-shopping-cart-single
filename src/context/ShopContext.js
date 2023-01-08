import { createContext, useReducer } from "react";
import { shopReducer, initialState } from "./shopReducer";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));
    dispatch({
      type: "UPDATE_PRICE",
      payload: { total },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
