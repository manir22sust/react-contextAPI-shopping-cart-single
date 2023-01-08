import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw Error("useShop must be used within ShopContext");
  }
  return context;
};
