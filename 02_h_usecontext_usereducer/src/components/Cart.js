import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  return (
    <div className="p-4 border-t mt-4">
      <h2 className="text-xl font-bold mb-2">Cart</h2>
      {cart.items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.items.map((item, index) => (
          <div key={index}className="flex justify-between mb-2">
            {item.name} - ${item.price.toFixed(2)}
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}>
              Remove
            </button>
          </div>
        ))
      )}
      {cart.items.length > 0 && (
        <div>
          <button  className="bg-gray-800 text-white px-4 py-2 mt-4 rounded" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
