const solutionCode1 = `
// App.js

import React, { useState } from "react";
import Cards from "./Cards";
import './styles.css'


function App() {
  const [startAgain, setStartAgain] = useState(false);

  const handleStartAgain = () => {
    setStartAgain(true);
    setTimeout(() => {
      setStartAgain(false);
    }, 100); 
  };

  return (
    <div className='App'>
      <h1>Memory Game - React</h1>
      <div className='button-container'>
        <button onClick={handleStartAgain}>Start Again</button>
      </div>
      <Cards startAgain={startAgain} />
    </div>
  );
}

export default App;

`;

const solutionCode2 = `
//Card.js

function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Card
`;
const solutionCode3 = `
//Cards.js

import React, { useEffect, useState } from "react";
import Card from "./Card";

function Cards({ startAgain }) {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    if (startAgain) {
      setItems(
        [
          { id: 1, img: "/img/html.png", stat: "" },
          { id: 1, img: "/img/html.png", stat: "" },
          { id: 2, img: "/img/css.png", stat: "" },
          { id: 2, img: "/img/css.png", stat: "" },
          { id: 3, img: "/img/js.png", stat: "" },
          { id: 3, img: "/img/js.png", stat: "" },
          { id: 4, img: "/img/scss.png", stat: "" },
          { id: 4, img: "/img/scss.png", stat: "" },
          { id: 5, img: "/img/react.png", stat: "" },
          { id: 5, img: "/img/react.png", stat: "" },
          { id: 6, img: "/img/vue.png", stat: "" },
          { id: 6, img: "/img/vue.png", stat: "" },
          { id: 7, img: "/img/angular.png", stat: "" },
          { id: 7, img: "/img/angular.png", stat: "" },
          { id: 8, img: "/img/nodejs.png", stat: "" },
          { id: 8, img: "/img/nodejs.png", stat: "" },
        ].sort(() => Math.random() - 0.5)
      );
      setPrev(-1);
    }
  }, [startAgain]);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className='container'>
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;



`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3];
