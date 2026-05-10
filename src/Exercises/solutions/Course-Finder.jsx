const solutionCode1 = `
//App.js

import React, { useState } from "react";
import Navigation from "./Nav";
import Products from "./Products";
import Recommended from "./Recommended";
import Sidebar from "./Sidebar";
import Card from "./Card";
import './styles.css'
import data from "./data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedPriceRange(null); // Clear selected price range when category changes
  };

  const handlePriceChange = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange);
    setSelectedCategory(null); // Clear selected category when price range changes
    setQuery(""); // Clear input query
  };

  const handleRecommendedClick = (selectedCategory) => {
    setSelectedCategory(selectedCategory === "All" ? null : selectedCategory);
    setSelectedPriceRange(null); // Clear selected price range
    setQuery(""); // Clear input query
  };

  function filteredData(products, selectedCategory, query, selectedPriceRange) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    // Applying selected category filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Applying selected price range filter
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) =>
          parseFloat(newPrice.slice(1)) >= parseFloat(minPrice) &&
          parseFloat(newPrice.slice(1)) <= parseFloat(maxPrice)
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(data, selectedCategory, query, selectedPriceRange);

  return (
    <>
      <Sidebar handleChange={handleChange} handlePriceChange={handlePriceChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleRecommendedClick} />

      <Products result={result} />
    </>
  );
}

export default App;

`;

const solutionCode2 = `
//Button.js

import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  const handleClick = () => {
    onClickHandler(value);
  };

  return (
    <button className="button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
`;
const solutionCode3 = `
//Card.js

import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;

`;
const solutionCode4 = `
//Category.js

import Input from "./Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Web Development"
          title="Web Development"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Data Science"
          title="Data Science"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Software Engineering"
          title="Software Engineering"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Computer Science"
          title="Computer Science"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mobile Development"
          title="Mobile Development"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;

`;
const solutionCode5 = `
//Input.js

const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;
  
`;
const solutionCode6 = `
//Nav.js

import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search course..."
        />
      </div>
      <div className="profile-container">
        <a href="/">
          <FiHeart className="nav-icons" />
        </a>
        <a href="/">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

`;
const solutionCode7 = `
//Price.js

import React from "react";
import Input from "./Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      {/* Option to select all */}
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="price"
        />
        <span className="checkmark">All</span>
      </label>

      {/* Options for specific price ranges */}
      <Input
        handleChange={handleChange}
        value="0-50"
        title="$0 - $50"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value="50-100"
        title="$50 - $100"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value="100-150"
        title="$100 - $150"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value="150-200"
        title="Over $150"
        name="price"
      />
    </div>
  );
};

export default Price;

`;
const solutionCode8 = `
//Products.js


const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;

`;
const solutionCode9 = `
//Recommended.js

import React from 'react';
import Button from "./Button";

const Recommended = ({ handleClick }) => {

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={() => handleClick("All")} value="All" title="All Categories" />
          <Button onClickHandler={() => handleClick("Web Development")} value="Web Development" title="Web Development" />
          <Button onClickHandler={() => handleClick("Data Science")} value="Data Science" title="Data Science" />
          <Button onClickHandler={() => handleClick("Software Engineering")} value="Software Engineering" title="Software Engineering" />
          <Button onClickHandler={() => handleClick("Computer Science")} value="Computer Science" title="Computer Science" />
          <Button onClickHandler={() => handleClick("Mobile Development")} value="Mobile Development" title="Mobile Development" />
        </div>
      </div>
    </>
  );
};

export default Recommended;

`;
const solutionCode10 = `
//Sidebar.js

import { useState } from "react";
import Category from "./Category";
import Price from "./Price";

const Sidebar = ({ handleChange, handlePriceChange }) => {
  const [priceRange, setPriceRange] = useState("");

  const handlePriceRangeChange = (event) => {
    const selectedPriceRange = event.target.value;
    setPriceRange(selectedPriceRange);
    handlePriceChange(selectedPriceRange);
  };

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <div>
          <Category handleChange={handleChange} />
          <Price handleChange={handlePriceRangeChange} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
  solutionCode7,
  solutionCode8,
  solutionCode9,
  solutionCode10,
];
