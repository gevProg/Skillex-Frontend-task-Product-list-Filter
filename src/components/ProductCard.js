import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.brand}</p>
    <p>${product.price}</p>
    <p>Rating: {product.rating} Stars</p>
  </div>
);

export default ProductCard;
