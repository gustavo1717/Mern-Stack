import React, { useState } from 'react';

const ProductComponent = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    rating: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Details:', product);
    // Add API call here to submit the product details to the server
  };

  return (
    <div>
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={product.description} onChange={handleInputChange} />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" name="rating" value={product.rating} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductComponent;
