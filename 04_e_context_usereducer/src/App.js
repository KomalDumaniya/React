import React from "react";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <ProductProvider>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Inventory System</h1>
        <ProductList />
        <Cart />
      </div>
    </ProductProvider>
  );
}
