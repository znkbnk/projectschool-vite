const solutionCode1 = `
//App.js

import React, { useState } from "react";
import data from "./data";
import List from "./List";
import BirthdayLogic from "./BirthdayLogic";
import './styles.css'


function App() {
  const [people, setPeople] = useState(data);
  const birthdaysToday = BirthdayLogic({ people });

  return (
    <main>
      <section className='container'>
        <h2>
          {birthdaysToday.length} Birthday
          {birthdaysToday.length === 1 ? "" : "s"} today:
        </h2>
        <List people={birthdaysToday} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
`;

const solutionCode2 = `
//BirthdayLogic.js

const BirthdayLogic = ({ people }) => {
    const today = new Date();
    const todayFormatted = \`\${today.getMonth() + 1}-\${today.getDate()}\`;
    const birthdaysToday = people.filter((person) => {
      const dob = new Date(person.dob);
      const dobFormatted = \`\${dob.getMonth() + 1}-\${dob.getDate()}\`;
      return dobFormatted === todayFormatted;
    });
  
    return birthdaysToday;
  };
  
  export default BirthdayLogic;
`;

const solutionCode3 = `
//List.js

import React from "react";

const List = ({ people }) => {
  const today = new Date();
  const todayFormatted = \`\${today.getMonth() + 1}-\${today.getDate()}\`;

  const birthdaysToday = people.filter((person) => {
    const dob = new Date(person.dob);
    const dobFormatted = \`\${dob.getMonth() + 1}-\${dob.getDate()}\`;
    return dobFormatted === todayFormatted;
  });

  return (
    <>
      {birthdaysToday.length > 0 && (
        <div className='birthday-list'>
          {birthdaysToday.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article key={id} className='person'>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default List;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3];