import { useState, useEffect } from "react";
import { useShop } from "../hooks/useShop";

export const ProductCard = ({ name, imageUrl, price }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="productWrapper">
      <img src={imageUrl} alt="" />
      <button onClick={handleClick}>
        <p>{isInCart ? "-" : "+"}</p>
      </button>
      <div className="textContainer">
        <div className="productTitle">{name}</div>
        <div className="productPrice"> $ {price} </div>
      </div>
    </div>
  );
};
