import React from "react";
import { useProduct } from "../context/ProductContext";

const ProductList = () => {
  const { state, dispatch } = useProduct();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Products</h2>
      {state.inventory.map((product) => (
        <div key={product.id} className="flex justify-between mb-2">
          <span>
            {product.name} (Stock: {product.stock})
          </span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50" onClick={() => dispatch({ type: "ADD_TO_CART", payload: { productId: product.id } }) } disabled={product.stock === 0} >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
