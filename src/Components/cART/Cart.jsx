import React from "react";
import "./Cart.css";
const Cart = (props) => {
  // const cart=props.cart;

  const { cart } = props;
  let total = 0;
  for (let product of cart) {
    total = total + product.price;
  }
  // console.log(cart)
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected items:{cart.length}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping Charge:{}</p>
      <p>Total Tax:{}</p>
      <h6>Grand Total:{} </h6>
      <button>Clear Cart</button>
      <button>Review Order</button>
    </div>
  );
};

export default Cart;
