import React from "react";
import { ShopData } from "../Data/ShopData";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <div>
      <div className="Title">Welcome to Clothing Shop</div>
      <div className="productsWrapper">
        {ShopData.map((data, index) => {
          return (
            <div key={index}>
              <ProductCard {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
