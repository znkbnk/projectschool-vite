const solutionCode1 = `
//App.js 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm/ContactForm";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import { Helmet } from "react-helmet";
import Home from "./components/pages/Home";

const App = () => (
  <>
    <Helmet>
      <title>Product Website</title>
      <meta name="description" content="Explore our product catalog, read customer reviews, and contact us!" />
    </Helmet>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  </>
);

export default App

`;

const solutionCode2 = `
//components/ContactForm.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormWrapper, StyledInput, StyledButton } from "./ContactForm.styles";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      reset();
      setIsSubmitting(false);
    }, 1000); 
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact Us</h2>
      <StyledInput 
        {...register("name", { required: "Name is required" })} 
        placeholder="Your Name"
      />
      {errors.name && <span>{errors.name.message}</span>}

      <StyledInput 
        {...register("email", { 
          required: "Email is required", 
          //Google the value...
          pattern: { value: CHANGE ME , message: "Invalid email" } 
        })} 
        placeholder="Your Email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea 
        {...register("message", { required: "Message is required" })} 
        placeholder="Your Message"
      ></textarea>
      {errors.message && <span>{errors.message.message}</span>}

      <StyledButton disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </StyledButton>
    </FormWrapper>
  );
};

export default ContactForm;

`;
const solutionCode3 = `
//component/ContactForm/ContactForm.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders the contact form", () => {
  render(<ContactForm />);
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
});

test("submits form when valid", () => {
  const handleSubmit = jest.fn();
  render(<ContactForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John" } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
  fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Hello!" } });

  fireEvent.click(screen.getByText(/Submit/i));
  expect(handleSubmit).toHaveBeenCalled();
});

`;
const solutionCode4 = `
//components/CustomerReviews/CustomerReviews.js

import React from "react";
import reviews from "../data/reviews";
import { ReviewsWrapper, ReviewCard } from "./CustomerReviews.styles";

const CustomerReviews = () => {
  return (
    <ReviewsWrapper>
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <h4>{review.customerName}</h4>
          <p>{review.message}</p>
          <span>Rating: {review.rating} / 5</span>
        </ReviewCard>
      ))}
    </ReviewsWrapper>
  );
};

export default CustomerReviews;

`;
const solutionCode5 = `
//components/CustomerReviews/CustomerReviews.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerReviews from "./CustomerReviews";
import reviews from "../../data/reviews";

test("renders customer reviews", () => {
  render(<CustomerReviews />);
  reviews.forEach((review) => {
    expect(screen.getByText(review.message)).toBeInTheDocument();
    expect(screen.getByText(review.customerName)).toBeInTheDocument();
  });
});

`;
const solutionCode6 = `
//components/ProductCatalog/ProductCatalog.js

import React from "react";
import products from "../data/products";
import { CatalogWrapper, ProductCard } from "./ProductCatalog.styles";

const ProductCatalog = () => {
  return (
    <CatalogWrapper>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>\${product.price}</span>
        </ProductCard>
      ))}
    </CatalogWrapper>
  );
};

export default ProductCatalog;

`;
const solutionCode7 = `
//components/ProductCatalog/ProductCatalog.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCatalog from "./ProductCatalog";
import products from "../../data/products";

test("renders product catalog", () => {
  render(<ProductCatalog />);
  products.forEach((product) => {
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(\`$\${product.price}\`)).toBeInTheDocument();
  });
});

`;
const solutionCode8 = `
//components/utils/validateForm.js

export const validateForm = (name, email, message) => {
    const errors = {};
    if (!name) errors.name = "Name is required.";
    //Google the value...
    if (!email || 'CHANGE ME'.test(email)) errors.email = "Valid email is required.";
    if (!message) errors.message = "Message is required.";
    return errors;
  };
  
`;
const solutionCode9 = `
//components/pages/Home.js 

import React from "react";
import { Link } from "react-router-dom";
import { HomeWrapper } from "./Home.styles";


const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to Our Product Website</h1>
      <nav>
        <Link to="/products">Product Catalog</Link>
        <Link to="/reviews">Customer Reviews</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </HomeWrapper>
  );
};

export default Home;


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
];
