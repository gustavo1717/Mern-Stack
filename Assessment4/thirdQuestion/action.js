const products = [];

export const addProductToDatabase = (product) => {
  // Simulate adding the product to the database (local array)
  products.push(product);
  console.log('Product added to the local database:', product);
  console.log('All products:', products);
};
