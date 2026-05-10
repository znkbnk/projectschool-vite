const solutionCode1 = `
//App.js 

import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
import './styles.css'

const sections = [
  { id: 'row1', label: 'Home', height: 300, icon: '🏠' },
  { id: 'row2', label: 'About', height: 400, icon: '👤' },
  { id: 'row3', label: 'Services', height: 350, icon: '🛠️' },
  { id: 'row4', label: 'Portfolio', height: 500, icon: '🖼️' },
  { id: 'row5', label: 'Contact', height: 250, icon: '📞' },
  { id: 'row6', label: 'FAQ', height: 300, icon: '❓' },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      let newIndex = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (scrollTop >= (element.offsetTop - 120)) {
          newIndex = index;
        }
      });

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (index, sectionId) => {
    setActiveIndex(index);
    scroller.scrollTo(sectionId, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -60,
    });
  };

  return (
    <div id="app">
      <div id="nav-wrap">
        <div id="nav">
          <ul className="clearfix">
            {sections.map((section, index) => (
              <li
                key={section.id}
                className={\`nav-btn \${activeIndex === index ? 'active' : ''}\`}
                onClick={() => handleClick(index, section.id)}
              >
                <span className="nav-icon">{section.icon}</span>
                {section.label}
              </li>
            ))}
            <div
              id="nav-indicator"
              style={{ left: \`\${activeIndex * 100}px\` }}
            ></div>
          </ul>
        </div>
      </div>
      <div id="content-wrap">
        <h1 className={\`animation \${scrollY < 100 ? 'animationActive' : ''}\`}>
          Welcome to Our Awesome Page
        </h1>
        <h2 className={\`animation \${scrollY < 100 ? 'animationActive' : ''}\`}>
          Scroll down to explore more!
        </h2>
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className={\`row row-nav \${activeIndex === index ? 'active' : ''}\`}
            style={{ minHeight: section.height }}
          >
            <h3>{section.label}</h3>
            <p>This is the content for the {section.label.toLowerCase()} section.</p>
            <div className="row-btn">
              <div className="circle"></div>
            </div>
          </div>
        ))}
        <div id="top" onClick={() => scroll.scrollToTop()}>
          ↑ Top
        </div>
      </div>
    </div>
  );
};

export default App;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;