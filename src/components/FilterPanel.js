import React from 'react';

const FilterPanel = ({ filters, setFilters, categories, brands }) => {
  const handleCategoryChange = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((cat) => cat !== category)
      : [...filters.category, category];

    setFilters({ ...filters, category: newCategories });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];

    setFilters({ ...filters, brand: newBrands });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, priceRange: { ...filters.priceRange, [name]: value } });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: Number(e.target.value) });
  };

  return (
    <div>
      <h4>Categories</h4>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={filters.category.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}

      <h4>Brands</h4>
      {brands.map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            checked={filters.brand.includes(brand)}
            onChange={() => handleBrandChange(brand)}
          />
          {brand}
        </label>
      ))}

      <h4>Price Range</h4>
      <label>
        Min Price:
        <input
          type="number"
          name="min"
          value={filters.priceRange.min}
          onChange={handlePriceChange}
          min="0"
          max="500"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          name="max"
          value={filters.priceRange.max}
          onChange={handlePriceChange}
          min="0"
          max="500"
        />
      </label>

      <h4>Rating</h4>
      <input
        type="number"
        min="0"
        max="5"
        value={filters.rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default FilterPanel;
