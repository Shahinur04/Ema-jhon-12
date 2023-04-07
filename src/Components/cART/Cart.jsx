import React from "react";
import "./Cart.css";
const Cart = (props) => {
  // const cart=props.cart;

  const { cart } = props;
  let total = 0;
  for (let product of cart) {
    total = total + product.price;
  }
  let shipping = 0;
  for (let product of cart) {
    shipping = shipping + product.shipping;
  }
  let tax=total*7/100;
  const grandTotal=shipping+total+tax;
  // console.log(cart)
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected items:{cart.length}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping Charge:${shipping}</p>
      <p>Total Tax:${tax.toFixed(2)}</p>
      <h2>Grand Total:${grandTotal.toFixed(2)} </h2>
      {/* <button>Clear Cart</button>
      <button>Review Order</button> */}
    </div>
  );
};

export default Cart;
