import React, { useState } from 'react';
import FilterPanel from './components/FilterPanel';
import ProductList from './components/ProductList';
import products from './data/products';
import './App.css';

const categories = ["Electronics", "Footwear", "Clothing"];
const brands = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"];

const App = () => {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    priceRange: { min: 0, max: 500 },
    rating: 0,
  });

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(product.category);
    const matchesBrand =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const matchesPrice =
      product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
    const matchesRating = product.rating >= filters.rating;

    return matchesCategory && matchesBrand && matchesPrice && matchesRating;
  });

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <div className={`filter-panel ${isFilterPanelOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleFilterPanel}>✖</button>
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          categories={categories}
          brands={brands}
        />
      </div>

      <button className="toggle-filter-btn" onClick={toggleFilterPanel}>
        {isFilterPanelOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
