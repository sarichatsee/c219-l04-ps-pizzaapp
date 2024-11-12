// menu.js
import React, { useState } from 'react';
import pizzaData from './data';

const Pizza = ({ image, name, ingredients, price }) => {
  return (
    <div className="pizza">
      <img src={image} alt={name} className="pizza-image" />
      <div className="pizza-info">
        <h2>{name}</h2>
        <p>{ingredients}</p>
      </div>
      <p className="pizza-price">${price}</p>
    </div>
  );
};

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  const filteredPizzas = pizzaData.filter(pizza =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <div className="menu-heading">
        <h2>Our Menu</h2>
      </div>

      {/* Show tagline only if the shop is open */}
      {isOpen && <p className="tagline">Authentic Italian cuisine, all from our stone oven</p>}

      {/* Search Bar with Icon */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a pizza..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <i className="fas fa-magnifying-glass search-icon"></i> {/* Font Awesome Icon */}
      </div>

      {/* Filtered Pizza List */}
      <div className="menu-grid">
        {filteredPizzas.map((pizza, index) => (
          <Pizza
            key={index}
            image={pizza.image}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
