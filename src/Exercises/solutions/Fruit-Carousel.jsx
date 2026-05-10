const solutionCode1 = `
//App.js

import React from 'react';
import Carousel from './Carousel';
import './styles.css'

const App = () => {
  const items = [
    { title: 'Apple', num: '01', img: 'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Banana', num: '02', img: 'https://images.unsplash.com/photo-1536228891610-d27ef66f7110?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Cherry', num: '03', img: 'https://images.unsplash.com/photo-1530176611600-d05a6387d07c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Grape', num: '04', img: 'https://plus.unsplash.com/premium_photo-1681826659316-fa513caebdb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Orange', num: '05', img: 'https://plus.unsplash.com/premium_photo-1675237625619-4fdb5e21ef87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Strawberry', num: '06', img: 'https://images.unsplash.com/photo-1591271300850-22d6784e0a7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Watermelon', num: '07', img: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Pineapple', num: '08', img: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Mango', num: '09', img: 'https://plus.unsplash.com/premium_photo-1675715403481-6ac4be346374?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Blueberry', num: '10', img: 'https://images.unsplash.com/photo-1425934398893-310a009a77f9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

  return (
    <div className="App">
      <Carousel items={items} />
    </div>
  );
};

export default App;

`;

const solutionCode2 = `
//Carousel.js


import React, { useState, useEffect, useCallback } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item
  const [visibleItems, setVisibleItems] = useState([]);

  const updateVisibleItems = useCallback((index) => {
    const prev = (index - 1 + items.length) % items.length;
    const next = (index + 1) % items.length;
    setVisibleItems([items[prev], items[index], items[next]]);
  }, [items]);

  useEffect(() => {
    updateVisibleItems(activeIndex);
  }, [activeIndex, updateVisibleItems]);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const handleScroll = useCallback((event) => {
    if (event.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const carouselElement = document.querySelector('.carousel');
    carouselElement.addEventListener('wheel', handleScroll);

    return () => {
      carouselElement.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      {visibleItems.map((item, index) => (
        <div
          key={item.num}
          className={\`carousel-item \${index === 1 ? 'active' : index === 0 ? 'prev' : 'next'}\`}
          onClick={() => handleItemClick(items.indexOf(item))}
        >
          <div className="carousel-box">
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="num">{item.num}</div>
            </div>
          </div>
        </div>
      ))}
      <button className="nav-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: \`\${((activeIndex + 1) / items.length) * 100}%\` }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];

