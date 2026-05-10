var e=[`
//App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Shop } from "./Shop";
import { Contact } from "./Contact";
import { Cart } from "./Cart";
import { ShopContextProvider } from "./ShopContext";
import './styles.css'


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

`,`
//Cart.js

import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { PRODUCTS } from "./Products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          } else {
            return null;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: \${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

`,`
//cartItem.js

import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt=''/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: \${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

`,`
//Contact.js

import React from "react";

export const Contact = () => {
  return <div>contact</div>;
};

`,`
//Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

`,`
//Product.js

import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt=''/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> \${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

`,`
//Products.js

import course1 from "/public/img/1.webp";
import course2 from "/public/img/2.webp";
import course3 from "/public/img/3.webp";
import course4 from "/public/img/4.webp";
import course5 from "/public/img/5.webp";
import course6 from "/public/img/6.webp";
import course7 from "/public/img/7.webp";
import course8 from "/public/img/8.webp";

export const PRODUCTS = [
  {
    id: 1,
    courseName: "JavaScript Basics",
    price: 49.99,
    productImage: course1,
  },
  {
    id: 2,
    courseName: "Advanced React",
    price: 99.99,
    productImage: course2,
  },
  {
    id: 3,
    courseName: "Python for Data Science",
    price: 79.99,
    productImage: course3,
  },
  {
    id: 4,
    courseName: "Machine Learning with Python",
    price: 129.99,
    productImage: course4,
  },
  {
    id: 5,
    courseName: "Web Development Bootcamp",
    price: 199.99,
    productImage: course5,
  },
  {
    id: 6,
    courseName: "Introduction to Cyber Security",
    price: 89.99,
    productImage: course6,
  },
  {
    id: 7,
    courseName: "iOS App Development with Swift",
    price: 149.99,
    productImage: course7,
  },
  {
    id: 8,
    courseName: "Cloud Computing with AWS",
    price: 109.99,
    productImage: course8,
  },
];
`,`
//Shop.js

import React from "react";
import { PRODUCTS } from "./Products";
import { Product } from "./Product";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Course Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

`,`
//ShopContext.js

import { createContext, useState } from "react";
import { PRODUCTS } from "./Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

`];export{e as default};
//# sourceMappingURL=Course-Shop-D5sbmAfl.js.map