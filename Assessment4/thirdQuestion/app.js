import React from 'react';
import ProductComponent from './ProductComponent';
import { addProductToDatabase } from './actions';

const App = () => {
  const handleAddProduct = (product) => {
    addProductToDatabase(product);
  };

  return (
    <div>
      <ProductComponent onSubmit={handleAddProduct} />
    </div>
  );
};

export default App;
