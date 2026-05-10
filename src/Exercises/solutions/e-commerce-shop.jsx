const solutionCode1 = `
// App.js

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import products from './products.json';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import SearchFilter from './components/SearchFilter';
import ReviewPage from './components/ReviewPage';

function App() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If the product already exists, increase its quantity
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the product is new, add it to the cart with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="App">
      <h1>My E-Commerce Store</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      <Routes>
        <Route path="/" element={<ProductList products={filteredProducts} addToCart={addToCart} />} />
        <Route path="/leave-review/:productId" element={<ReviewPage />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
`;

const solutionCode2 = `
// products.json

[
    {
      "id": 1,
      "name": "Stylish T-Shirt",
      "price": 25.99,
      "image": "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      "category": "Clothing",
      "reviews": [
        { "id": 1, "user": "Alice", "comment": "Great fit and comfortable!", "rating": 5 },
        { "id": 2, "user": "Bob", "comment": "Nice design but a bit pricey.", "rating": 4 }
      ]
    },
    {
      "id": 2,
      "name": "Wireless Headphones",
      "price": 99.99,
      "image": "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg",
      "category": "Electronics",
      "reviews": [
        { "id": 1, "user": "Charlie", "comment": "Amazing sound quality!", "rating": 5 }
      ]
    },
    {
      "id": 3,
      "name": "Running Shoes",
      "price": 59.99,
      "image": "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "category": "Footwear",
      "reviews": []
    }
  ]
`;
const solutionCode3 = `
// compoennts/ProductList.js

import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products, addToCart }) {
  return (
    <div className='product-list'>
      {products.map((product) => {
        // Fetch reviews for this product from localStorage ( as no backend in this project )
        const storedReviews =
          JSON.parse(localStorage.getItem(\`reviews-\${product.id}\`)) || [];
        return (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>\${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <div className='reviews'>
              <h4>Reviews:</h4>
              {storedReviews.length > 0 ? (
                storedReviews.map((review) => (
                  <div key={review.id}>
                    <p>
                      <strong>{review.user}</strong>: {review.comment} (Rating:{" "}
                      {review.rating})
                    </p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
            <Link to={\`/leave-review/\${product.id}\`}>
              <button>Leave a Review</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

`;
const solutionCode4 = `
// compoennts/ShoppingCart.js

import React from "react";

function ShoppingCart({ cart, removeFromCart }) {
  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={\`\${item.id}-\${index}\`} className='cart-item'>
            <p>
              {item.name} - \${item.price} (Quantity: {item.quantity})
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;

`;
const solutionCode5 = `
// compoennts/SearchFilter.js

import React, { useState } from "react";

function SearchFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["All", "Clothing", "Electronics", "Footwear"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className='search-filter'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchFilter;

`;
const solutionCode6 = `
// compoentns/ReviewPage.js

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../index.css";

function ReviewFormPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ user: "", rating: "", comment: "" });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedReviews =
      JSON.parse(localStorage.getItem(\`reviews-\${productId}\`)) || [];
    const newReview = { id: storedReviews.length + 1, ...review };
    localStorage.setItem(
      \`reviews-\${productId}\`,
      JSON.stringify([...storedReviews, newReview])
    );

    navigate("/");
  };

  return (
    <div className='review-form-page'>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} className='review-form'>
        <input
          type='text'
          name='user'
          placeholder='Your Name'
          value={review.user}
          onChange={handleChange}
          required
          className='review-input'
        />
        <input
          type='number'
          name='rating'
          placeholder='Rating (1-5)'
          value={review.rating}
          onChange={handleChange}
          min='1'
          max='5'
          required
          className='review-input'
        />
        <textarea
          name='comment'
          placeholder='Your Review'
          value={review.comment}
          onChange={handleChange}
          required
          className='review-textarea'
        />
        <button type='submit' className='review-submit-button'>
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewFormPage;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
  
];
