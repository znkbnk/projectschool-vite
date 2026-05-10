const solutionCode1 = `
//App.js

import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './styles.css'
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

`;

const solutionCode2 = `
//Categories.js

import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    filterItems(category);
    setActiveCategory(category);
  };

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className={\`filter-btn \${
              activeCategory === category ? "active" : ""
            }\`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

`;
const solutionCode3 = `
//Menu.js

import React from "react";

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>\${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3];
