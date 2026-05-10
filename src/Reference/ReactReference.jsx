import  { useState } from "react";
import { FaTimes, FaGripVertical } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReferenceTitle from "./ReferenceTitle";
import "../styles/reference.css";
import Draggable from "react-draggable"; // Import react-draggable

const ES6Cheatsheet = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active card index
  const [positions, setPositions] = useState([]); // Track initial positions of cards

  const categories = [
    {
      title: "Variables & Scoping",
      items: [
        {
          title: "const",
          description: "Block-scoped. Cannot be re-assigned. Not immutable. ",
          code: 'const name = "John";\nconst user = { name: "John" };\nuser.name = "Jane"; // Valid\nuser = {}; // Error!',
        },
        {
          title: "let",
          description: "Block-scoped. Can be re-assigned.",
          code: "let count = 0;\ncount = 1; // Valid\nif (true) {\n  let count = 2; // Different variable\n}",
        },
      ],
    },
    {
      title: "Arrow Functions",
      items: [
        {
          title: "Basic Syntax",
          description: "Shorter syntax, lexical this binding",
          code: 'const add = (a, b) => a + b;\nconst square = x => x * x;\nconst log = () => console.log("Hello");',
        },
        {
          title: "With Object Return",
          description: "Parentheses required for object literals",
          code: 'const getUser = () => ({ name: "John", age: 30 });',
        },
      ],
    },
  ];

  // Handle dragging start event
  const handleStart = (index) => {
    setActiveIndex(index);
  };

  // Handle dragging stop event
  const handleStop = (index, position) => {
    setActiveIndex(index); // Keep the last dragged card on top
    const newPositions = [...positions];
    newPositions[index] = position; // Save the position of the dragged card
    setPositions(newPositions);
  };

  // Reset the position of the card when X is pressed
  const handleResetPosition = (index) => {
    const newPositions = [...positions];
    newPositions[index] = { x: 0, y: 0 }; // Reset to the original position
    setPositions(newPositions);
  };

  return (
    <div>
      <Navbar />
      <ReferenceTitle />
      <div>
        <main>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Draggable
                key={index}
                handle=".drag-icon"
                onStart={() => handleStart(index)} // Set active card on start
                onStop={(e, data) => handleStop(index, data)} // Save position on stop
                position={positions[index] || { x: 0, y: 0 }} // Set position
              >
                <div
                  className="reference-card"
                  style={{
                    zIndex: activeIndex === index ? 10 : "auto", // Make active card stay on top
                  }}
                >
                  <div className="reference-header">
                    <h2>{category.title}</h2>
                    <div className="icons">
                      {/* Ensure drag handle is correct */}
                      <FaGripVertical className="drag-icon" />
                      <FaTimes
                        className="close-icon"
                        onClick={() => handleResetPosition(index)} 
                      />
                    </div>
                  </div>
                  <div className="reference-content">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3>{item.title}</h3>
                        <p className="reference-description">{item.description}</p>
                        <pre>
                          <code>{item.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              </Draggable>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ES6Cheatsheet;
