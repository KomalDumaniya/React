import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 },
  { id: 3, name: "Orange", price: 8 },
];

function ProductList() {
  const { dispatch } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      {products.map((product, index) => (
        <div key={index} className="flex justify-between mb-2">
          {product.name} - ${product.price.toFixed(2)}
          <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
