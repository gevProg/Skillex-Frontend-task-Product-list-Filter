import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Rating: {product.rating} ⭐</p>
          </div>
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
};

export default ProductList;
