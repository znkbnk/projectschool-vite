const solutionCode1 = `
//App.js

import React, { useState, useEffect, useRef } from 'react';
import './styles.css'

import icon1 from './1.gif';
import icon2 from './2.gif';
import icon3 from './3.gif';
import icon4 from './4.gif';
import icon5 from './5.gif';

const App = () => {
  const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const borderRef = useRef(null);

  const icons = [icon1, icon2, icon3, icon4, icon5];

  const clickItem = (index) => {
    setActiveIndex(index);
    document.body.style.backgroundColor = bgColorsBody[index];
    offsetMenuBorder(menuRef.current.children[index], borderRef.current);
  };

  const offsetMenuBorder = (element, menuBorder) => {
    const offsetActiveItem = element.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left - menuRef.current.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
    menuBorder.style.transform = \`translate3d(\${left}, 0 , 0)\`;
  };

  useEffect(() => {
    offsetMenuBorder(menuRef.current.children[activeIndex], borderRef.current);
    const handleResize = () => offsetMenuBorder(menuRef.current.children[activeIndex], borderRef.current);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <div>
      <menu className="menu" ref={menuRef}>
        {icons.map((icon, index) => (
          <div
            key={index}
            className={\`menu__item \${activeIndex === index ? 'active' : ''}\`}
            style={{ '--bgColorItem': bgColorsBody[index] }}
            onClick={() => clickItem(index)}
          >
            <img src={icon} alt={\`Icon \${index + 1}\`} />
          </div>
        ))}
        <div className="menu__border" ref={borderRef}></div>
      </menu>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M196.2,0C190.5,0.1,182.1-0.4,172.9,3.6c-5.7,2.3-9.9,5-18.1,10.5c-10.7,7.1-11.8,9.2-20.6,14.3
                     c-5,2.9-9.2,5.2-15.2,7c-7.1,2.1-13.3,2.3-17.6,2.1c-4.2,0.2-10.5-0.1-17.6-2.1c-6.1-1.8-10.2-4.1-15.2-7
                     c-8.8-5-9.9-7.1-20.6-14.3c-8.3-5.5-12.4-8.2-18.1-10.5C20.1,0.4,11.7,0.1,6.7,0H196.2z"/>
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;