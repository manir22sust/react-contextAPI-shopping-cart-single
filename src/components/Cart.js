import { useShop } from "../hooks/useShop";
import { ProductCard } from "./ProductCard";

export const Cart = () => {
  const { products, total } = useShop();
  return (
    <div>
      <h2> Your cart total is {total}.00$ </h2>
      <div className="cartWrapper">
        {products.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
    </div>
  );
};
