import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-2">Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
