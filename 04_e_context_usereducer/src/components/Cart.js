import React from "react";
import { useProduct } from "../context/ProductContext";

const Cart = () => {
  const { state } = useProduct();

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Cart</h2>
      {state.cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
