import React from "react";
import Cart from "../cART/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const products =useLoaderData();
    console.log(products);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h1>Order me i want to sold_out</h1>
      </div>
      <div className="cart-container">
        <Cart Cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Orders;
