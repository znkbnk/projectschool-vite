const solutionCode1 = `
//App.js 

import React, { useState } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import './styles.css'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app-container">
      <Header onSearch={setSearchQuery} />
      <Slider searchQuery={searchQuery} />
    </div>
  );
};

export default App;

`;

const solutionCode2 = `
//components/Header.js
import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = ['Home', 'Movies', 'Genre', 'Actors'];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Movies4u</div>
        <nav className="menu">
          {menuItems.map((item) => (
            <a href="/" className="menu-item" key={item}>
              {item}
            </a>
          ))}
        </nav>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="menu-button" onClick={toggleMobileMenu}>
          Menu
        </button>
      </div>
      <div className={\`mobile-menu \${mobileMenuOpen ? 'open' : ''}\`}>
        {menuItems.map((item) => (
          <a href="/" className="mobile-menu-item" key={item}>
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

`;
const solutionCode3 = `
//components/Modal.js

import React from 'react';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={image.src} alt={image.title} className="modal-image" />
        <h2 className="modal-title">{image.title}</h2>
        <p className="modal-description">{image.description}</p>
      </div>
    </div>
  );
};

export default Modal;

`;
const solutionCode4 = `
//components/Slider.js

import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const images = [
  { src: '/images/img1.jpg', title: 'Luffy', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { src: '/images/img2.jpg', title: 'Goku', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { src: '/images/img3.jpg', title: 'Girl', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { src: '/images/img4.jpg', title: 'Cat', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
];

const Slider = ({ searchQuery }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState(images);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [filteredImages]);

  useEffect(() => {
    setFilteredImages(
      images.filter((image) =>
        image.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setActiveIndex(0); // Reset to first slide when search query changes
  }, [searchQuery]);

  const openModal = () => {
    setModalImage(filteredImages[activeIndex]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="slider-container">
      {filteredImages.map((img, index) => (
        <div
          key={index}
          className={\`slide \${index === activeIndex ? 'active' : ''}\`}
          onClick={openModal}
        >
          <img src={img.src} alt={img.title} className="slide-image" />
          <div className="slide-content">
            <h2 className="slide-title">{img.title}</h2>
            <p className="slide-description">{img.description}</p>
          </div>
        </div>
      ))}
      <div className="slider-nav">
        <button className="nav-button" onClick={prevSlide}>
          &lt;
        </button>
        <button className="nav-button" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="thumbnail-container">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.title}
            className={\`thumbnail \${index === activeIndex ? 'active' : ''}\`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      {modalImage && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={modalImage}
        />
      )}
    </div>
  );
};

export default Slider;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4];
