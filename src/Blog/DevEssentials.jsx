import React from "react";
import { Link } from "react-router-dom";
import { blogCards } from "../data/articlesData";
import "../styles/devEssentials.css"; // New CSS file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

function DevEssentials() {
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />

      <div className="page-header">
        <h1 className="component-title">
          Dev Essentials: Core Guides & Tools
        </h1>
        <p className="header-subtitle">
          Step-by-step guides on vital development tools and techniques to
          sharpen your skills.
        </p>
      </div>

      <div className="wrapper">
        {blogCards.map((item, index) => (
          <Link
            key={index}
            to={`/blogs/devessentials/${item.id}`}
            className="card-link"
          >
            <div className="dev-card">
              <div className="dev-card__body">
                <img
                  src={item.image}
                  alt={item.title}
                  className="dev-card__image"
                />
                <h2 className="dev-card__title">{item.title}</h2>
                <div
                  className="dev-card__extract"
                  dangerouslySetInnerHTML={{ __html: item.extract }}
                />
                <div className="dev-card__date">{item.date}</div>
                <span className="dev-card__btn">Read more</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default DevEssentials;