import React from "react";
import { Helmet } from "react-helmet-async";
import AuthorProfile from "./AuthorProfile";
import { authorsData } from "../data/tasksData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthorsList = () => {
  return (
    <div>
      <Helmet>
        <title>Authors | Project School</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Navbar />
      <div className='header'>
        <h1 className='component-title'>Meet the Authors</h1>
        <p className='header-subtitle'>
          The developers behind Project School's guides and projects.
        </p>
      </div>
      <div className='author-container'>
        {authorsData.map((author, index) => (
          <AuthorProfile key={index} author={author} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AuthorsList;