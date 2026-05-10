// stylesData.js
const stylesData = [
  {
    taskId: "3D-Interactive-Card",
    title: "3D Interactive Card",
    css: `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    
    .app-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
      margin: 0;
    }
    
    
    .card {
      width: 300px;
      height: 400px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
      transition: transform 0.5s;
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    
    
    .sneaker-image {
      position: relative;
      z-index: 1;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    
    .circle {
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #f5f5f5;
      z-index: -1;
    }
    
    
    .sneaker-image img {
      width: 150px; /* Adjust size as needed */
      height: auto;
      display: block;
      transform-origin: center;
      transition: transform 0.5s;
    }
    
    
    .info {
      padding: 20px;
      text-align: center;
    }
    
    
    .title {
      font-size: 24px;
      margin: 0;
      transition: transform 0.5s;
    }
    
    
    .description {
      font-size: 16px;
      margin: 10px 0;
      transition: transform 0.5s;
    }
    
    
    .difficulty-buttons {
      display: flex;
      justify-content: space-around;
      margin: 20px 0;
      transition: transform 0.5s;
    }
    
    
    .difficulty-buttons button {
      padding: 10px;
      border: none;
      background: #ddd;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    
    .difficulty-buttons button:hover {
      background: #ccc;
    }
    
    
    .start-button {
      margin-top: 20px;
      transition: transform 0.5s;
    }
    
    
    .start-button button {
      padding: 10px 20px;
      border: none;
      background: #3498db;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    
    .start-button button:hover {
      background: #2980b9;
    }
    
      
      `,
  },
  {
    taskId: "BMI-Tracker",
    title: "BMITracker",
    css: `body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    .app {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
    
    .container {
      box-shadow: 0px 0px 12px #ccc;
      border-radius: 8px;
      padding: 3rem;
    }
    
    input {
      width: 100%;
      font-size: 1.2rem;
      padding: 15px 4px;
      margin: 8px 0;
      border-radius: 8px;
    }
    
    .btn {
      display: block;
      width: 100%;
      font-size: 1.2rem;
      margin: 8px 0;
      padding: 15px 0;
      background-color: #0077ee;
      color: #fff;
      border: 1px solid #333;
      border-radius: 8px;
      cursor: pointer;
    }
    /* unvisited link */
    
    .btn-outline {
      background-color: #fff;
      color: #707377;
    }
    
    .center {
      text-align: center;
      margin: 24px 0;
    }
    
    p {
      margin: 10px 0;
    }  
      `,
  },
  {
    taskId: "Dark-Light-Mode-Toggle",
    title: "Dark Light Mode Toggle",
    css: `:root {
      --clr-bcg: #fff;
      --clr-font: #282c35;
      --clr-primary: #d23669;
    }
    
    .dark-theme {
      --clr-bcg: #282c35;
      --clr-font: #fff;
      --clr-primary: #ffa7c4;
    }
    .light-theme {
      --clr-bcg: #fff;
      --clr-font: #282c35;
      --clr-primary: #d23669;
    }
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-bcg);
      color: var(--clr-font);
      line-height: 1.5;
      font-size: 0.875rem;
      transition: all 0.3s linear;
    }
    
    /*
      =============== 
      Navbar
      ===============
      */
    .nav-center {
      width: 90vw;
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;
    }
    .nav-center h1 {
      font-size: 2.5rem;
      text-transform: capitalize;
      letter-spacing: 2px;
    }
    
    .articles {
      padding: 5rem 0;
      width: 90vw;
      max-width: 600px;
      margin: 0 auto;
    }
    .post {
      margin-bottom: 3rem;
    }
    .post h2 {
      color: var(--clr-primary);
      text-transform: capitalize;
      letter-spacing: 2px;
      font-size: 1.75rem;
    }
    .post-info {
      margin-bottom: 0.75rem;
      font-style: italic;
    }
    .post-info span {
      margin-right: 0.5rem;
    }
    
    .btn {
      background: var(--clr-primary);
      color: var(--clr-bcg);
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
      border-color: transparent;
      text-transform: capitalize;
      transition: all 0.3s linear;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
    }`,
  },
  {
    taskId: "Sortify-Search-by-Name",
    title: "Sortify Search by Name",
    css: `
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    `,
  },
  {
    taskId: "Simple-Quiz-App",
    title: "Simple Quiz App",
    css: `
    body {
      margin: 0;
      font-family: "Verdana", cursive, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    
    .app {
      background-color: #ffffff;
      width: 600px;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .score-section {
      margin-top: 20px;
      font-size: 20px;
    }
    
    /* QUESTION SECTION */
    .question-section {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }
    
    .question-count {
      margin-bottom: 10px;
    }
    
    .question-count span {
      font-size: 24px;
    }
    
    .question-text {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    /* ANSWER SECTION */
    .answer-section {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    
    button {
      font-size: 16px;
      color: #ffffff;
      background-color: #4caf50;
      border: none;
      border-radius: 8px;
      padding: 15px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    button:hover {
      background-color: #45a049;
    }
    
    button:active {
      background-color: #3e8e41;
    }
    
    .correct {
      background-color: #66bb6a;
    }
    
    .incorrect {
      background-color: #ef5350;
    }
    
    `,
  },
  {
    taskId: "FAQ",
    title: "FAQ",
    css: `
    :root {
      --clr-primary-1: hsl(205, 86%, 17%);
      --clr-primary-5: hsl(205, 78%, 60%);
      --clr-grey-1: hsl(209, 61%, 16%);
      --clr-grey-3: hsl(209, 34%, 30%);
      --clr-grey-10: hsl(210, 36%, 96%);
      --transition: all 0.3s linear;
      --spacing: 0.1rem;
      --radius: 0.25rem;
      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      --max-width: 1170px;
      --fixed-width: 920px;
    }
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-grey-10);
      color: var(--clr-grey-1);
      line-height: 1.5;
      font-size: 0.875rem;
    }
    
    ul {
      list-style-type: none;
    }
    
    a {
      text-decoration: none;
    }
    
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
    }
    
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.25rem;
    }
    
    h4 {
      font-size: 0.875rem;
    }
    
    p {
      margin-bottom: 1.25rem;
      color: var(--clr-grey-3);
    }
    
    @media screen and (min-width: 800px) {
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.75rem;
      }
      h4 {
        font-size: 1rem;
      }
      body {
        font-size: 1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1;
      }
    }
    
    /* App Styles */
    main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .container {
      width: 90vw;
      margin: 5rem auto;
      background: var(--clr-white);
      border-radius: var(--radius);
      padding: 2.5rem 2rem;
      max-width: var(--fixed-width);
      display: grid;
      gap: 1rem 2rem;
      box-shadow: var(--light-shadow);
    }
    
    .container h3 {
      line-height: 1.2;
      font-weight: 500;
    }
    
    @media screen and (min-width: 992px) {
      .container {
        display: grid;
        grid-template-columns: 250px 1fr;
      }
    }
    
    /* Question Styles */
    .question {
      padding: 1rem 1.5rem;
      border: 2px solid var(--clr-grey-10);
      margin-bottom: 1rem;
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
    }
    
    .question h4 {
      text-transform: none;
      line-height: 1.5;
    }
    
    .question p {
      color: var(--clr-grey-3);
      margin-bottom: 0;
      margin-top: 0.5rem;
    }
    
    .question header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .question header h4 {
      margin-bottom: 0;
    }
    
    .btn {
      background: transparent;
      border-color: transparent;
      width: 2rem;
      height: 2rem;
      background: var(--clr-grey-10);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--clr-primary-5);
      cursor: pointer;
      margin-left: 1rem;
      align-self: center;
      min-width: 2rem;
    }
    
    `,
  },
  {
    taskId: "Birthday-Reminder",
    title: "Birthday Reminder",
    css: `
    :root {
      --primary-color: #ff6b6b;
      --secondary-color: #48dbfb;
      --text-color: #2c3a47;
      --bg-color: #f8f9fa;
      --accent-color: #1dd1a1;
      --shadow-color: rgba(0, 0, 0, 0.2);
    }
    html {
      display: flex;
      justify-content: center;
    }
    
    
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 500px;
      font-family: "Poppins", sans-serif;
      background: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }
    
    
    h1,
    h2,
    h3,
    h4 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
    }
    
    
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 1.5rem;
      box-shadow: 0 10px 20px var(--shadow-color);
      padding: 2.5rem;
      margin-top: 40px;
      transition: all 0.3s ease;
    }
    
    
    .container:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 25px var(--shadow-color);
    }
    
    
    .person img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 5px 15px var(--shadow-color);
      transition: all 0.3s ease;
    }
    
    
    .person img:hover {
      transform: scale(1.1);
    }
    
    
    .container button {
      background: var(--accent-color);
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      outline: none;
      transition: background 0.3s ease;
    }
    
    
    .container button:hover {
      background: #16a085;
    }
    
    `,
  },
  {
    taskId: "Dynamic-Box-Shadow-Generator",
    title: "Dynamic Box Shadow Generator",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f2f2f2;
  }
  
  .container {
    display: flex;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
    margin: 0 700px;
  }
  
  .preview-box {
    height: 200px;
    width: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .preview-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .controls-box {
    width: 600px;
    background-color: #272727;
    padding: 2em;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    color: #fff;
    margin: 2em;
    transition: all 0.3s ease;
  }
  
  .controls-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
  
  label {
    display: block;
    margin-bottom: 1em;
    color: #aaa;
  }
  
  input[type="range"],
  input[type="color"] {
    width: 100%;
    display: block;
    margin-bottom: 1.5em;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    outline: none;
  }
  
  input[type="color"] {
    width: 30px;
    padding: 0;
  }
  
  .text-right {
    text-align: center;
  }
  
  button {
    border: none;
    outline: none;
    background-color: #007bff;
    padding: 1em 2em;
    border-radius: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .codes.controls-box {
    margin-top: 2em;
  }
  
  .codes .code {
    color: #e64;
  }
  
    `,
  },
  {
    taskId: "Memory-Game",
    title: "Memory Game",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
  }
  
  body {
    font-family: "Roboto", "Arial", sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  .container {
    height: 600px;
    width: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1em;
    justify-content: center;
  }
  
  .card {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transform: rotateY(180deg);
    animation: 1s ease-out 0s 1 hideCard;
    transition: transform 0.5s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 150px;
    height: 150px;
  }
  
  @keyframes hideCard {
    0%,
    70% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  
  .card img {
    max-width: 90%;
    max-height: 90%;
    transition: transform 0.5s;
    transform: scale(0);
    animation: 1s ease-out 0s 1 hideImage;
  }
  
  @keyframes hideImage {
    0%,
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  
  .card.active {
    transform: rotateY(0);
  }
  
  .card.correct {
    background-color: #4caf50;
  }
  
  .card.wrong {
    background-color: #f44336;
  }
  
  .card.active img {
    transform: scale(1);
  }
  
  /* Button Styles */
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    margin: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
    `,
  },
  {
    taskId: "Color-Generator",
    title: "Color Generator",
    css: `
    :root {
      --clr-primary-1: hsl(205, 86%, 17%);
      --clr-primary-2: hsl(205, 77%, 27%);
      --clr-primary-3: hsl(205, 72%, 37%);
      --clr-primary-4: hsl(205, 63%, 48%);
      --clr-primary-5: hsl(205, 78%, 60%);
      --clr-primary-6: hsl(205, 89%, 70%);
      --clr-primary-7: hsl(205, 90%, 76%);
      --clr-primary-8: hsl(205, 86%, 81%);
      --clr-primary-9: hsl(205, 90%, 88%);
      --clr-primary-10: hsl(205, 100%, 96%);
      --clr-grey-1: hsl(209, 61%, 16%);
      --clr-grey-2: hsl(211, 39%, 23%);
      --clr-grey-3: hsl(209, 34%, 30%);
      --clr-grey-4: hsl(209, 28%, 39%);
      --clr-grey-5: hsl(210, 22%, 49%);
      --clr-grey-6: hsl(209, 23%, 60%);
      --clr-grey-7: hsl(211, 27%, 70%);
      --clr-grey-8: hsl(210, 31%, 80%);
      --clr-grey-9: hsl(212, 33%, 89%);
      --clr-grey-10: hsl(210, 36%, 96%);
      --clr-white: #fff;
      --clr-red-dark: hsl(360, 67%, 44%);
      --clr-red-light: hsl(360, 71%, 66%);
      --clr-green-dark: hsl(125, 67%, 44%);
      --clr-green-light: hsl(125, 71%, 66%);
      --clr-black: #222;
      --transition: all 0.3s ease-in-out;
      --spacing: 0.1rem;
      --radius: 0.5rem;
      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      --max-width: 1170px;
      --fixed-width: 620px;
    }
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-grey-10);
      color: var(--clr-grey-1);
      line-height: 1.6;
      font-size: 1rem;
    }
    
    ul {
      list-style-type: none;
    }
    
    a {
      text-decoration: none;
    }
    
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 3.5rem;
    }
    
    h2 {
      font-size: 2.5rem;
    }
    
    h3 {
      font-size: 1.75rem;
    }
    
    h4 {
      font-size: 1.25rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-6);
    }
    
    @media screen and (min-width: 800px) {
      body {
        font-size: 1.1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1.3;
      }
    }
    
    .section {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
      padding: 2rem;
      background-color: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    
    @media screen and (min-width: 992px) {
      .section {
        width: 95vw;
      }
    }
    
    .container {
      text-align: center;
      display: flex;
      align-items: center;
      height: 100px;
      padding: 0 2rem;
      background-color: var(--clr-primary-10);
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
    }
    
    .container h3 {
      margin-right: 2rem;
      color: var(--clr-primary-2);
    }
    
    input,
    .btn {
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem;
      border-radius: var(--radius);
      border: none;
      transition: var(--transition);
    }
    
    .btn {
      background: var(--clr-primary-2);
      color: var(--clr-white);
      cursor: pointer;
    }
    
    .btn:hover {
      background: var(--clr-primary-6);
    }
    
    input.error {
      border: 2px solid var(--clr-red-dark);
    }
    
    .colors {
      min-height: calc(100vh - 100px);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
      grid-template-rows: repeat(auto-fit, minmax(66px, 1fr));
    }
    
    .color {
      padding: 1rem 2rem;
      cursor: pointer;
      font-size: 1rem;
      text-transform: none;
      background-color: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
      transition: var(--transition);
    }
    
    .color:hover {
      transform: translateY(-5px);
      box-shadow: var(--dark-shadow);
    }
    
    .percent-value,
    .color-value {
      margin-bottom: 0.5rem;
    }
    
    .color-light .color-value,
    .color-light .percent-value {
      color: var(--clr-white);
    }
    
    .alert {
      text-transform: uppercase;
      font-size: 0.9rem;
      margin-top: 1rem;
      color: var(--clr-red-dark);
    }
    
    `,
  },
  {
    taskId: "Range-Slider",
    title: "Range Slider",
    css: `
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
    }
    
    * {
      box-sizing: border-box;
    }
    
    .container {
      width: 450px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      position: relative;
      padding: 20px 0;
    }
    
    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }
    
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 24px;
      height: 24px;
      background: #007bff;
      border: 3px solid #fff;
      cursor: pointer;
      border-radius: 50%;
      pointer-events: auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background 0.3s ease;
      z-index: 3;
    }
    
    input[type="range"]::-webkit-slider-thumb:hover {
      background: #0056b3;
    }
    
    input[type="range"]::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background: #007bff;
      border: 3px solid #fff;
      cursor: pointer;
      border-radius: 50%;
      pointer-events: auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background 0.3s ease;
      z-index: 3;
    }
    
    input[type="range"]::-moz-range-thumb:hover {
      background: #0056b3;
    }
    
    .slider {
      position: relative;
      height: 8px;
      background: #ddd;
      border-radius: 4px;
      margin-top: 20px;
      z-index: 1;
    }
    
    .slider__track,
    .slider__range {
      position: absolute;
      height: 100%;
      border-radius: 4px;
    }
    
    .slider__track {
      width: 100%;
      background: #ddd;
    }
    
    .slider__range {
      background: #007bff;
    }
    
    .leftvalue,
    .rightvalue {
      position: absolute;
      top: -35px;
      color: #333;
      font-size: 14px;
      background: #fff;
      padding: 4px 8px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      white-space: nowrap;
      font-weight: bold;
    }
    
    .leftvalue {
      transform: translateX(-50%);
    }
    
    .rightvalue {
      transform: translateX(-50%);
    }
    
    .leftvalue span,
    .rightvalue span {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #ffffff;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    
    `,
  },
  {
    taskId: "Form-Validation-Component",
    title: "Form Validation Component",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    background-image: linear-gradient(
      to right,
      #234c77 0%,
      #9b3c3c 50%,
      #306d5e 100%
    );
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    background: #f0f5f9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50rem;
    height: 30rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }
  
  .card-image {
    background: url("https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-position: center;
    background-size: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  input {
    padding: 12px 16px;
    margin: 8px;
    width: 20rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-bottom: 2px solid #5eff8b;
    outline: none;
    color: #0c4164;
  }
  
  .submit-btn {
    width: 80%;
    margin-top: 20px;
    padding: 12px 24px;
    background: #52bbb2;
    cursor: pointer;
    border: none;
    color: #000;
    font-weight: bold;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
  }
  
  .error {
    font-family: sans-serif;
    color: #ff6b6b;
  }
  
    `,
  },
  {
    taskId: "Markdown-Preview-App",
    title: "Markdown Preview App",
    css: `
    :root {
      /* Colors */
      --primary: hsl(205, 78%, 60%);
      --primary-dark: hsl(205, 86%, 17%);
      --primary-light: hsl(205, 90%, 88%);
      --secondary: hsl(360, 67%, 44%);
      --grey: hsl(210, 22%, 49%);
      --light-grey: hsl(210, 36%, 96%);
      --dark-grey: hsl(209, 61%, 16%);
      --black: #000;
      --white: #fff;
    
      /* Spacing */
      --spacing: 2rem;
    
      /* Shadows */
      --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
      /* Fonts */
      --font-primary: "Roboto", sans-serif;
      --font-secondary: "Open Sans", sans-serif;
    }
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-primary);
      background-color: var(--light-grey);
      color: var(--black);
      line-height: 1.6;
      font-size: 16px;
    }
    
    h1,
    h2,
    h3,
    h4 {
      font-family: var(--font-secondary);
      margin-bottom: 1rem;
      transition: var(--transition);
    }
    
    /* Markdown */
    .markdown {
      padding: var(--spacing);
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
    
    .input {
      border: 1px solid var(--grey);
      border-radius: 0.5rem;
      font-size: 1rem;
      padding: 1rem;
      box-shadow: var(--shadow);
      min-height: 20vh;
      transition: var(--transition);
    }
    
    .input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(68, 138, 255, 0.2);
    }
    
    .input,
    .result {
      padding: 1rem;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      transition: var(--transition);
    }
    
    img:hover {
      transform: scale(1.05);
    }
    
    blockquote {
      font-style: italic;
      border-left: 4px solid var(--primary);
      padding-left: 1rem;
      margin: 1rem 0;
      transition: var(--transition);
    }
    
    pre {
      background-color: var(--black);
      color: var(--white);
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      overflow-x: auto;
      transition: var(--transition);
    }
    
    pre:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow);
    }
    
    `,
  },
  {
    taskId: "Menu-App",
    title: "Menu App",
    css: `
    :root {
      /* Colors */
      --clr-primary: hsl(217, 90%, 61%);
      --clr-secondary: hsl(34, 97%, 64%);
      --clr-accent: hsl(217, 90%, 61%);
      --clr-background: #f4f4f4;
      --clr-text: #333;
      --clr-grey: #999;
      --clr-white: #fff;
    
      /* Shadows */
      --shadow-light: 0 2px 5px rgba(0, 0, 0, 0.1);
      --shadow-dark: 0 5px 15px rgba(0, 0, 0, 0.2);
    
      /* Spacing */
      --spacing-xs: 0.5rem;
      --spacing-sm: 1rem;
      --spacing-md: 1.5rem;
      --spacing-lg: 2rem;
    
      /* Border radius */
      --radius-sm: 0.25rem;
      --radius-md: 0.5rem;
      --radius-lg: 1rem;
    
      /* Transitions */
      --transition: all 0.3s ease;
    }
    
    /*
      =============== 
      Global Styles
      ===============
      */
    
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "Roboto", sans-serif;
      background: var(--clr-background);
      color: var(--clr-text);
      line-height: 1.6;
      font-size: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    h1,
    h2,
    h3,
    h4 {
      margin-bottom: var(--spacing-sm);
    }
    
    p {
      margin-bottom: var(--spacing-md);
    }
    
    ul {
      list-style-type: none;
    }
    
    /* 
      =============== 
      Menu
      ===============
      */
    
    .menu {
      padding: var(--spacing-lg) 0;
    }
    
    .title {
      text-align: center;
      margin-bottom: var(--spacing-md);
    }
    
    .underline {
      width: 5rem;
      height: 0.25rem;
      background: var(--clr-primary);
      margin: var(--spacing-sm) auto;
    }
    
    .btn-container {
      margin-bottom: var(--spacing-lg);
      display: flex;
      justify-content: center;
    }
    
    .filter-btn {
      background: transparent;
      border: none;
      font-size: 1rem;
      text-transform: capitalize;
      margin: 0 var(--spacing-xs);
      letter-spacing: 1px;
      padding: 0.375rem 0.75rem;
      color: var(--clr-primary);
      cursor: pointer;
      transition: var(--transition);
      border-radius: var(--radius-sm);
    }
    
    .filter-btn:hover {
      background: var(--clr-primary);
      color: var(--clr-white);
    }
    
    .filter-btn.active {
      border-bottom: 2px solid var(--clr-primary);
    }
    
    .section-center {
      width: 90%;
      margin: 0 auto;
      max-width: 1170px;
      display: grid;
      gap: var(--spacing-lg);
      justify-items: center;
    }
    
    .menu-item {
      display: grid;
      grid-template-columns: minmax(200px, 1fr) 2fr;
      gap: var(--spacing-md);
      max-width: 800px;
    }
    
    .photo {
      object-fit: cover;
      height: 150px;
      width: 100%;
      border-radius: var(--radius-md);
    }
    
    .item-info header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--clr-grey);
    }
    
    .item-info h4 {
      margin-bottom: var(--spacing-xs);
    }
    
    .price {
      color: var(--clr-accent);
    }
    
    .item-text {
      padding-top: var(--spacing-sm);
    }
    
    @media screen and (min-width: 768px) {
      .menu-item {
        grid-template-columns: minmax(150px, 1fr) 3fr;
        gap: var(--spacing-lg);
        max-width: 1000px;
      }
    
      .photo {
        height: 120px;
      }
    }
    
    @media screen and (min-width: 1200px) {
      .section-center {
        width: 95%;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
    
    `,
  },
  {
    taskId: "Responsive-Navbar",
    title: "Responsive Navbar",
    css: `
    :root {
      /* dark shades of primary color*/
      --clr-primary-1: hsl(205, 86%, 17%);
      --clr-primary-2: hsl(205, 77%, 27%);
      --clr-primary-3: hsl(205, 72%, 37%);
      --clr-primary-4: hsl(205, 63%, 48%);
      /* primary/main color */
      --clr-primary-5: hsl(205, 78%, 60%);
      /* lighter shades of primary color */
      --clr-primary-6: hsl(205, 89%, 70%);
      --clr-primary-7: hsl(205, 90%, 76%);
      --clr-primary-8: hsl(205, 86%, 81%);
      --clr-primary-9: hsl(205, 90%, 88%);
      --clr-primary-10: hsl(205, 100%, 96%);
      /* darkest grey - used for headings */
      --clr-grey-1: hsl(209, 61%, 16%);
      --clr-grey-2: hsl(211, 39%, 23%);
      --clr-grey-3: hsl(209, 34%, 30%);
      --clr-grey-4: hsl(209, 28%, 39%);
      /* grey used for paragraphs */
      --clr-grey-5: hsl(210, 22%, 49%);
      --clr-grey-6: hsl(209, 23%, 60%);
      --clr-grey-7: hsl(211, 27%, 70%);
      --clr-grey-8: hsl(210, 31%, 80%);
      --clr-grey-9: hsl(212, 33%, 89%);
      --clr-grey-10: hsl(210, 36%, 96%);
      --clr-white: #fff;
      --clr-red-dark: hsl(360, 67%, 44%);
      --clr-red-light: hsl(360, 71%, 66%);
      --clr-green-dark: hsl(125, 67%, 44%);
      --clr-green-light: hsl(125, 71%, 66%);
      --clr-black: #222;
      --transition: all 0.3s linear;
      --spacing: 0.1rem;
      --radius: 0.25rem;
      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      --max-width: 1170px;
      --fixed-width: 620px;
    }
    /*
      =============== 
      Global Styles
      ===============
      */
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-grey-10);
      color: var(--clr-grey-1);
      line-height: 1.5;
      font-size: 0.875rem;
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 0.875rem;
    }
    p {
      margin-bottom: 1.25rem;
      color: var(--clr-grey-5);
    }
    @media screen and (min-width: 800px) {
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.75rem;
      }
      h4 {
        font-size: 1rem;
      }
      body {
        font-size: 1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1;
      }
    }
    
    /* section */
    .section {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    
    @media screen and (min-width: 992px) {
      .section {
        width: 95vw;
      }
    }
    
    /*
      =============== 
      Navbar
      ===============
      */
    nav {
      background: var(--clr-white);
      box-shadow: var(--light-shadow);
    }
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    
    .nav-toggle {
      font-size: 1.2rem;
      color: var(--clr-primary);
      background: transparent;
      border: none;
      transition: var(--transition);
    }
    
    .nav-toggle:hover {
      color: var(--clr-primary-light);
      transform: rotate(90deg);
    }
    .logo {
      height: 40px;
    }
    .links a {
      color: var(--clr-grey);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: 0.05rem;
      display: block;
      padding: 1rem;
      transition: var(--transition);
    }
    
    .links a:hover {
      background: var(--clr-primary-light);
      color: var(--clr-primary);
      padding-left: calc(1rem + 0.5rem);
    }
    .social-icons {
      display: none;
    }
    .links-container {
      height: 0;
      overflow: hidden;
      transition: var(--transition);
    }
    .show-container {
      height: 10rem;
    }
    @media screen and (min-width: 800px) {
      .nav-center {
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
      }
      .nav-header {
        padding: 0;
      }
      .nav-toggle {
        display: none;
      }
      .links-container {
        height: auto !important;
      }
      .links {
        display: flex;
      }
      .links a {
        padding: 0;
        margin: 0 0.5rem;
      }
      .links a:hover {
        padding: 0;
        background: transparent;
      }
      .social-icons {
        display: flex;
      }
      .social-icons a {
        margin: 0 0.75rem;
        font-size: 1.2rem;
        color: var(--clr-primary);
        transition: var(--transition);
      }
    
      .social-icons a:hover {
        color: var(--clr-primary-light);
      }
    }
    
    `,
  },
  {
    taskId: "Pagination-Page",
    title: "Pagination Page",
    css: `
    :root {
      /* dark shades of primary color*/
      --clr-primary-1: hsl(200, 86%, 15%);
      --clr-primary-2: hsl(200, 77%, 25%);
      --clr-primary-3: hsl(200, 72%, 35%);
      --clr-primary-4: hsl(200, 63%, 45%);
      /* primary/main color */
      --clr-primary-5: hsl(200, 78%, 55%);
      /* lighter shades of primary color */
      --clr-primary-6: hsl(200, 89%, 65%);
      --clr-primary-7: hsl(200, 90%, 71%);
      --clr-primary-8: hsl(200, 86%, 76%);
      --clr-primary-9: hsl(200, 90%, 83%);
      --clr-primary-10: hsl(200, 100%, 91%);
      /* darkest grey - used for headings */
      --clr-grey-1: hsl(205, 61%, 13%);
      --clr-grey-2: hsl(207, 39%, 20%);
      --clr-grey-3: hsl(205, 34%, 27%);
      --clr-grey-4: hsl(205, 28%, 36%);
      /* grey used for paragraphs */
      --clr-grey-5: hsl(206, 22%, 46%);
      --clr-grey-6: hsl(205, 23%, 57%);
      --clr-grey-7: hsl(207, 27%, 67%);
      --clr-grey-8: hsl(206, 31%, 77%);
      --clr-grey-9: hsl(208, 33%, 86%);
      --clr-grey-10: hsl(206, 36%, 93%);
      --clr-white: #fff;
      --clr-red-dark: hsl(360, 67%, 40%);
      --clr-red-light: hsl(360, 71%, 60%);
      --clr-green-dark: hsl(125, 67%, 40%);
      --clr-green-light: hsl(125, 71%, 60%);
      --clr-black: #222;
    
      --transition: all 0.4s ease-in-out;
      --spacing: 0.2rem;
      --radius: 1rem;
      --light-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      --dark-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
      --max-width: 1200px;
      --fixed-width: 640px;
    }
    
    /*
      =============== 
      Global Styles
      ===============
      */
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "Poppins", sans-serif;
      background: var(--clr-grey-6);
      color: var(--clr-grey-1);
      line-height: 1.6;
      font-size: 1rem;
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-5);
    }
    
    /*
      =============== 
      Pagination
      ===============
      */
    .section-title {
      text-align: center;
      margin: 5rem 0 7rem;
    }
    .underline {
      width: 20rem;
      height: 0.3rem;
      background: var(--clr-primary-3);
      margin: 0 auto;
    }
    .followers {
      width: 95vw;
      max-width: var(--max-width);
      margin: 6rem auto;
    }
    .container {
      display: grid;
      gap: 2.5rem;
      margin-bottom: 5rem;
    }
    @media screen and (min-width: 576px) {
      .container {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    }
    .card {
      background: var(--clr-white);
      border-radius: 50%;
      box-shadow: var(--light-shadow);
      padding: 2.5rem 4rem;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: var(--dark-shadow);
    }
    .card img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1.25rem;
    }
    
    .card h4 {
      margin-bottom: 2rem;
      font-size: 1rem;
      color: var(--clr-grey-5);
    }
    
    .btn {
      padding: 0.5rem 1rem;
      letter-spacing: 2px;
      font-size: 0.9rem;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      border-radius: var(--radius);
      border-color: transparent;
      text-transform: uppercase;
      transition: var(--transition);
      cursor: pointer;
      box-shadow: var(--light-shadow);
    }
    .btn:hover {
      background: var(--clr-primary-7);
      box-shadow: var(--dark-shadow);
    }
    
    .btn-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .page-btn {
      width: 2.5rem;
      height: 2.5rem;
      background: var(--clr-primary-7);
      border-color: transparent;
      border-radius: 6px;
      cursor: pointer;
      margin: 0.75rem;
      transition: var(--transition);
    }
    .page-btn:hover {
      background: var(--clr-primary-9);
    }
    .active-btn {
      background: var(--clr-primary-1);
      color: var(--clr-white);
    }
    .prev-btn,
    .next-btn {
      background: transparent;
      border: 2px solid var(--clr-primary-3);
      color: var(--clr-primary-1);
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      margin: 0.75rem;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
    }
    
    .prev-btn:hover,
    .next-btn:hover {
      background: var(--clr-primary-3);
      color: var(--clr-white);
    }
    
    @media screen and (min-width: 775px) {
      .btn-container {
        margin: 0 auto;
        max-width: 720px;
      }
    }
    
    `,
  },
  {
    taskId: "Search-Bar",
    title: "Search Bar",
    css: `
    .App {
      background-color: #eee;
      width: 100vw;
      height: 100vh;
    }
    
    .search-bar-container {
      padding-top: 20vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 200px;
    }
    
    .result-container {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .result-container p {
      margin: 10px 0;
    }
    
    .result-container p:first-child {
      font-weight: 600;
      font-size: 1.2em;
      text-align: center;
      margin-bottom: 15px;
    }
    
    .result-container p:not(:first-child) {
      margin-left: 20px;
    }
    
    .result-container p span {
      font-weight: 500;
    }
    
    .result-container p span:first-child {
      color: #007bff;
    }
    
    /* SearchBar.css */
    
    .search-bar {
      width: 40%;
      position: relative;
    }
    
    .input-wrapper {
      position: relative;
      width: 100%;
    }
    
    input {
      background-color: #f5f5f5;
      border: none;
      height: 3rem;
      font-size: 1.25rem;
      width: 100%;
      padding-left: 40px;
      border-radius: 25px;
      transition: background-color 0.3s ease;
    }
    
    input:focus {
      background-color: #ffffff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
    }
    
    #search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #007bff;
      transition: color 0.3s ease;
    }
    
    #search-icon:hover {
      color: #0056b3;
    }
    
    /* SearchResult */
    
    .search-result {
      padding: 10px 20px;
    }
    
    .search-result:hover {
      background-color: #efefef;
    }
    
    /* SearchResultsList */
    
    .results-list {
      width: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 8px #ddd;
      border-radius: 10px;
      margin-top: 1rem;
      max-height: 300px;
      overflow-y: auto;
    }
    
    `,
  },
  {
    taskId: "Dropdown",
    title: "Dropdown",
    css: `
    .App {
      width: 100%;
      height: 100vh;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .selectOption {
      position: relative;
      width: 300px;
    }
    
    input {
      width: 100%;
      padding: 15px;
      outline: none;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      background: #fff;
      color: #333;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
      cursor: pointer;
    }
    
    input:focus {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      color: #666;
      transition: transform 0.3s ease;
      pointer-events: none;
    }
    
    .icon.active {
      transform: translateY(-50%) rotate(180deg);
    }
    
    .options {
      position: absolute;
      width: calc(100% - 30px);
      background: #fff;
      border-radius: 8px;
      top: calc(100% + 5px);
      left: 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0s linear 0.3s;
    }
    
    .options.active {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease, visibility 0s linear 0s;
    }
    
    li {
      list-style: none;
      font-size: 16px;
      padding: 12px 15px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    li:hover {
      background-color: #f5f5f5;
    }
    
    `,
  },
  {
    taskId: "Sidebar",
    title: "Sidebar",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100vh;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #fff;
  }
  
  .main {
    display: flex;
    height: 100vh;
  }
  
  .container {
    flex-grow: 1;
    padding: 2em;
    background-image: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
      url("../public/banner.webp");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .title {
    font-size: 3em;
  }
  .info {
    font-size: 1.1em;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 1.5em;
    color: rgb(224, 224, 224);
  }
  .btn {
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 0.75em 1em;
    font-size: 1em;
    letter-spacing: 1px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: rgb(134, 49, 0);
    color: #fff;
  }
  
  .sidebar {
    width: 260px;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100%;
    overflow: auto;
  }
  
  .sidebar-item {
    padding: 0.75em 1em;
    display: block;
    transition: background-color 0.15s;
    border-radius: 5px;
  }
  .sidebar-item:hover {
    background-color: rgba(212, 212, 212, 0.308);
  }
  
  .sidebar-title {
    display: flex;
    font-size: 1.2em;
    justify-content: space-between;
  }
  .sidebar-title span i {
    display: inline-block;
    width: 1.5em;
  }
  .sidebar-title .toggle-btn {
    cursor: pointer;
    transition: transform 0.3s;
  }
  .sidebar-item.open > .sidebar-title .toggle-btn {
    transform: rotate(180deg);
  }
  .sidebar-content {
    padding-top: 0.25em;
    height: 0;
    overflow: hidden;
  }
  .sidebar-item.open > .sidebar-content {
    height: auto;
  }
  
  .sidebar-item.plain {
    color: #fff;
    text-decoration: none;
  }
  .sidebar-item.plain:hover {
    text-decoration: underline;
  }
  .sidebar-item.plain i {
    display: inline-block;
    width: 1.7em;
  }
  
    `,
  },
  {
    taskId: "Dynamic-Table-with-Sorting-and-Copy-Functionality",
    title: "Dynamic Table with Sorting and Copy Functionality",
    css: `
    html,
body {
  height: 100%;
}

body {
  margin: 0;
  background: rgb(148, 148, 148);
  font-family: sans-serif;
  font-weight: 100;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 600px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90%; 
  max-width: 800px; 
  overflow-x: auto; 
}

table {
  width: 100%; 
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

th,
td {
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.356);
  color: #000000;
  height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

th {
  text-align: left;
}

thead th {
  background-color: #66948e;
}

tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

tbody td {
  position: relative;
}

tbody td:hover:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #0056b3;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    width: 95%; 
    top: 20px; 
    transform: translate(-50%, 0); 
  }

  table {
    font-size: 14px; 
  }

  th,
  td {
    padding: 8px; 
  }
}

@media (max-width: 480px) {
  .container {
    width: 100%; 
    top: 10px; 
  }

  table {
    font-size: 12px; 
  }

  th,
  td {
    padding: 6px; 
  }
}

    `,
  },
  {
    taskId: "To-Do-App",
    title: "ToDo App",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.App {
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.TodoWrapper {
  background: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.TodoForm {
  width: 100%;
}

.todo-input {
  outline: none;
  background: #f0f0f0;
  border: 1px solid #ddd;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  color: #333;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-input::placeholder {
  color: #bbb;
}

.todo-btn {
  background: #58e6ff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.todo-btn:hover {
  background: #6742b5;
}

.Todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #333;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease;
}

.Todo.completed {
  background-color: #c7e8a9;
}

.Todo:hover {
  background-color: #c7e8a9;
}

.fa-trash {
  margin-left: 1rem;
}

.completed {
  text-decoration: line-through;
}

    `,
  },
  {
    taskId: "Testimonials",
    title: "Testimonials",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f6f9fc;
  }
  
  .testimonials {
    margin: 0 auto;
    text-align: center;
    font-family: "Roboto", sans-serif;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    max-width: 600px;
  }
  
  .testimonials-quote {
    font-size: 22px;
    font-style: italic;
    margin-bottom: 20px;
    color: #444444;
  }
  
  .testimonials-author {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #222222;
  }
  
  .testimonials-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .testimonials-nav button {
    padding: 10px 20px;
    border: none;
    background-color: #ab36bb;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
    margin: 0 5px;
  }
  
  .testimonials-nav button:hover {
    background-color: rgba(153, 54, 187, 0.8);
  }
  
  .testimonials-nav button:active {
    transform: scale(0.95);
  }
  
    `,
  },
  {
    taskId: "Voice-to-Text",
    title: "Voice to Text",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 600px;
  padding: 0 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.main-content {
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.main-content:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-style {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:focus,
button:hover {
  background-color: #e45748;
}

.counter-container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    padding: 12px 20px;
  }

  .btn-style {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "Text-to-Voice",
    title: "Text to Voice",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.input-text {
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.input-text:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-style {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:focus,
button:hover {
  background-color: #e45748;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    padding: 12px 20px;
  }

  .btn-style {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "Course-Finder",
    title: "Course Finder",
    css: `
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  a {
    text-decoration: none;
    color: rgb(97, 97, 97);
  }
  
  li {
    list-style: none;
  }
  
  .btns {
    padding: 10px 20px;
    margin-right: 6px;
    background: transparent;
    border: none;
    border: 0.6px solid #ccc;
    border-radius: 5px;
    color: #323232;
    cursor: pointer;
  }
  
  /* Button */
  
  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
  
  .button:active {
    background-color: #388e3c;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
  }
  
  /* Nav  */
  
  nav {
    display: flex;
    border-bottom: 2px solid #f3f3f3;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    width: 100%;
    top: 0;
    z-index: 999;
  }
  
  input {
    padding: 12px 20px;
    border: 1px solid #ddd;
    background: #f7f6f6;
    outline: none;
    border-radius: 25px;
    width: 100%;
    max-width: 300px;
  }
  
  .nav-icons {
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
  
  /* Product  */
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-left: 20rem;
    margin-top: 2rem;
    z-index: -2;
    gap: 20px;
    padding: 0 20px;
  }
  
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .card-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .card-reviews {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #666;
  }
  
  .rating-star {
    color: #f90;
  }
  
  .card-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    color: #333;
  }
  
  .bag-icon {
    color: #007185;
  }
  
  /* Recommended  */
  
  .recommended-flex {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 0 20px;
    margin-left: 20rem;
  }
  
  .recommended-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
    margin-top: 20px;
  }
  
  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
  }
  
  .button:hover {
    background-color: #45a049;
  }
  
  /* Category  */
  
  .sidebar-title {
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  
  .sidebar-items {
    margin-top: 20px;
  }
  
  .sidebar-label-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .sidebar-label-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  .all {
    background: linear-gradient(blue, crimson);
  }
  
  .sidebar-label-container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .sidebar-label-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .sidebar-label-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .sidebar-label-container .checkmark:after {
    top: 6.4px;
    left: 6.4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
  }
  
  .line {
    margin-top: 3rem;
    border-color: #f7f7f7;
  }
  
  /* Price  */
  
  .price-title {
    margin-top: 20px;
  }
  
  /* Sidebar   */
  
  .sidebar {
    width: 280px;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .logo-container {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .logo-container h1 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    color: #333;
  }
  
    `,
  },
  {
    taskId: "Course-Shop",
    title: "Course Shop",
    css: `
    .App {
      width: 100%;
      height: auto;
      min-height: 100vh;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    /* Navbar  */
    
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
    
    .navbar {
      width: 100%;
      height: 80px;
      background-color: #1c1c1e;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
    
    .navbar:hover {
      background-color: #28282a;
    }
    
    .links {
      margin-right: 50px;
      display: flex;
      align-items: center;
    }
    
    .links a {
      text-decoration: none;
      color: white;
      margin-left: 20px;
      font-size: 18px;
      font-family: "Roboto", sans-serif;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    
    .links a:hover {
      color: #f39c12;
      transform: translateY(-3px);
    }
    
    .links a:active {
      color: #e67e22;
    }
    
    .links a:last-child {
      display: flex;
      align-items: center;
    }
    
    .links a svg {
      margin-left: 10px;
      transition: transform 0.3s ease;
    }
    
    .links a:hover svg {
      transform: scale(1.1);
    }
    
    /* Cart  */
    
    .cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .cartItem {
      width: 700px;
      height: 250px;
      display: flex;
    
      align-items: center;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      border-radius: 25px;
      margin: 30px;
    }
    
    .cartItem img {
      width: 200px;
      margin: 20px;
      border-radius: 25px;
    }
    
    .cartItem .description {
      width: 100%;
      font-size: 30px;
    }
    
    .countHandler input {
      width: 25px;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      transition: border-color 0.3s ease;
    }
    
    .countHandler button {
      background-color: #45a049;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .countHandler button:hover {
      background-color: #4caf50;
    }
    
    .countHandler input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
    
    .checkout {
      display: flex;
      gap: 20px;
    }
    
    .checkout button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      transition: background-color 0.3s ease-in-out;
    }
    
    .checkout button:hover {
      background-color: #45a049;
      cursor: pointer;
    }
    
    /* Shop  */
    
    .shopTitle {
      margin-top: 50px;
      text-align: center;
      font-size: 48px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .products {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .product {
      border-radius: 20px;
      width: 300px;
      height: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease-in-out;
      margin: 25px;
    }
    
    .product img {
      width: 100%;
      border-radius: 15px;
    }
    
    .product .description {
      text-align: center;
    }
    
    .product:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    
    .addToCartBttn {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      transition: background-color 0.3s ease-in-out;
    }
    
    .addToCartBttn:hover {
      background-color: #45a049;
      cursor: pointer;
    }
    
    `,
  },
  {
    taskId: "MATERIALIZECSS-Portfolio",
    title: "MATERIALIZECSS Portfolio",
    css: `
    .main-container {
      width: 100%;
    }
    
    .parallax-container {
      height: 400px;
    }
    .logo {
      padding-left: 20px;
    }
    .btn {
      width: 120px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      margin-right: 10px;
    }
    .cta {
      font-size: 35px;
      font-weight: 300px;
      text-shadow: 1px 1px black;
    }
    .cform {
      padding-top: 40px;
    }
    .project,
    .section-header {
      padding-top: 10px;
      text-align: center;
    }
    .card-content b {
      color: black;
    }
    /* Footer animations */
    .social:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
    .social {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -o-transform: scale(0.8);
      transition-duration: 0.5s;
      -webkit-transition-duration: 0.5s;
      -moz-transition-duration: 0.5s;
      -o-transition-duration: 0.5s;
    }
    .footer-copyright .container .material-icons {
      margin-left: 20px;
    }
    
    /* label color */
    .input-field label {
      color: #000;
    }
    /* label focus color */
    .input-field input[type="text"]:focus + label {
      color: #000;
    }
    /* label underline focus color */
    .input-field input[type="text"]:focus {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
    /* valid color */
    .input-field input[type="text"].valid {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
    /* invalid color */
    .input-field input[type="text"].invalid {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
    /* icon prefix focus color */
    .input-field .prefix.active {
      color: #000;
    }
    
    `,
  },
  {
    taskId: "TradeHub-React-Trading-Dashboard",
    title: "TradeHub React Trading Dashboard",
    css: `
    import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

    export const theme = extendTheme(
    {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },
    fonts: {
      heading: 'Ubuntu',
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "30px",
          md: "32px",
        },
        color: "p.black",
        lineHeight: {
          base: "34px",
          md: "36px",
        },
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.black",
        lineHeight: { base: "28px", md: "32px" },
      },
      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
          xl: "32px",
        },
        color: "p.black",
        lineHeight: { base: "26px", md: "28px", xl: "36px" },
      },
      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.black",
        lineHeight: { base: "24px", md: "26px" },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",
        lineHeight: { base: "22px", md: "24px" },
      },
      h6: {
        fontSize: {
          base: "16px",
          md: "18px",
        },
        color: "p.black",
        lineHeight: { base: "20px", md: "22px" },
      },
    },

    fontSizes: {
      xs: "12px",
      sm: "14px",
      base: { base: "16px", md: "18px" },
      lg: { base: "18px", md: "20px" },
      xl: { base: "20px", md: "22px" },
      "2xl": { base: "22px", md: "24px" },
      "3xl": { base: "24px", md: "28px" },
      "4xl": { base: "30px", md: "32px" },
    },
    styles: {
      global: {        
        body: {
          bg: "#F3F3F7",
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
              pb: "0",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",
            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);

    `,
  },
  {
    taskId: "Cube-Image-Gallery",
    title: "Cube Image Gallery",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

:root {
  --font-family: "Montserrat", Arial, sans-serif;
  --font-weight: 500;
  --primary-color: #ab00fb;
  --secondary-color: #ea16f1;
  --background-color: #080808;
  --border-color: rgb(182, 0, 238);
}

body {
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  line-height: 1.6;
  text-align: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  color: #fafafa;
  background-color: var(--background-color);
}

h1 {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 2.5rem;
}

.cube-container {
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: 5rem auto 6rem;
  perspective: 100rem;
}

.cube {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.32, 0.05, 0.35, 1.6);
}

.cube-face-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 0.5rem #fff, 0 0 1.5rem var(--border-color),
    0 0 3rem var(--border-color);
}

.image-buttons {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.image-buttons input {
  width: 100px;
  height: 100px;
  border: 0.2rem solid #fafafa;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}

.image-buttons input:focus {
  outline: none;
  border-color: var(--border-color);
}

.image-1 {
  transform: translateZ(15rem);
}

.image-2 {
  transform: rotateX(-180deg) translateZ(15rem);
}

.image-3 {
  transform: rotateY(90deg) translateZ(15rem);
}

.image-4 {
  transform: rotateY(-90deg) translateZ(15rem);
}

.image-5 {
  transform: rotateX(90deg) translateZ(15rem);
}

.image-6 {
  transform: rotateX(-90deg) translateZ(15rem);
}

.cube.initial-position {
  transform: translateZ(-15rem) translateY(-2rem) rotateX(-15deg) rotateY(18deg)
    rotateZ(2deg);
}

.cube.show-image-1 {
  transform: translateZ(-15rem);
}

.cube.show-image-2 {
  transform: translateZ(-15rem) rotateX(180deg);
}

.cube.show-image-3 {
  transform: translateZ(-15rem) rotateY(-90deg);
}

.cube.show-image-4 {
  transform: translateZ(-15rem) rotateY(90deg);
}

.cube.show-image-5 {
  transform: translateZ(-15rem) rotateX(-90deg);
}

.cube.show-image-6 {
  transform: translateZ(-15rem) rotateX(90deg);
}

    `,
  },
  {
    taskId: "Analog-Clock",
    title: "Analog Clock",
    css: `
    body {
      margin: 0;
      overflow: hidden;
    }
    
    h1 {
      color: #fff;
    }
    
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(to right, #2c3e50, #3498db);
    }
    
    .clock {
      width: 50vmin;
      height: 50vmin;
      border: 8px solid rgb(255, 255, 255);
      box-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
        0 0 20px rgb(255, 255, 255);
    
      position: relative;
      transform: rotate(-90deg);
      border-radius: 50%;
      background: radial-gradient(circle, #34495e, #2c3e50);
    }
    
    .time {
      color: #fff;
      position: absolute;
      transform: rotate(90deg);
    }
    
    .line {
      position: absolute;
      width: 50%;
      height: 2%;
      background: red;
      top: 50%;
      left: 50%;
      transform-origin: 0% 50%;
      transform: rotate(90deg);
    }
    
    .mid {
      position: absolute;
      width: 4%;
      height: 4%;
      background: #fff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    
    #seconds {
      border-radius: 25px;
    
      background: rgb(255, 255, 255);
      width: 45%;
      height: 0.8%;
      box-shadow: 0 0 5px green, 0 0 10px green, 0 0 20px green;
    }
    
    #minutes {
      border-radius: 25px;
      background: rgb(255, 255, 255);
      width: 40%;
      height: 1.6%;
      box-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 20px blue;
    }
    
    #hours {
      border-radius: 25px;
    
      background: rgb(255, 255, 255);
      width: 30%;
      height: 2.4%;
      box-shadow: 0 0 5px red, 0 0 10px red, 0 0 20px red;
    }
    
    .time-12 {
      top: 50%;
      right: 0%;
      margin-top: -2%;
    }
    
    .time-3 {
      bottom: 0%;
      left: 50%;
      margin-left: -1%;
    }
    
    .time-6 {
      top: 50%;
      left: 0%;
      margin-top: -1.6%;
      margin-left: 1%;
    }
    
    .time-9 {
      top: 0%;
      left: 50%;
      margin-left: -1%;
    }
    
    `,
  },
  {
    taskId: "Dynamic-Menu-Highlighter",
    title: "Dynamic Menu Highlighter",
    css: `
    html {
      box-sizing: border-box;
      --bgColorMenu: #1d1d27;
      --duration: 0.7s;
    }
    
    html *,
    html *::before,
    html *::after {
      box-sizing: inherit;
    }
    
    body {
      margin: 0;
      width: 100%;
      overflow: hidden;
      background-color: #ffb457;
      -webkit-tap-highlight-color: transparent;
      transition: background-color var(--duration);
    }
    
    .menu {
      margin: 300px 0;
    
      display: flex;
      font-size: 1.5em;
      padding: 0 2.85em;
      position: relative;
    
      background-color: var(--bgColorMenu);
    }
    
    .menu__item {
      all: unset;
      flex-grow: 1;
      z-index: 100;
      display: flex;
      cursor: pointer;
      position: relative;
      border-radius: 50%;
      align-items: center;
      will-change: transform;
      justify-content: center;
      padding: 0.55em 0 0.85em;
      transition: transform var(--timeOut, var(--duration));
    }
    
    .menu__item::before {
      content: "";
      z-index: -1;
      width: 4.2em;
      height: 4.2em;
      border-radius: 50%;
      position: absolute;
      transform: scale(0);
      transition: background-color var(--duration), transform var(--duration);
    }
    
    .menu__item.active {
      transform: translate3d(0, 0.8em, 0);
    }
    
    .menu__item.active::before {
      transform: scale(1);
      background-color: var(--bgColorItem);
    }
    
    .icon {
      width: 2.6em;
      height: 2.6em;
      stroke: white;
      fill: transparent;
      stroke-width: 1pt;
      stroke-miterlimit: 10;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 400;
    }
    
    .menu__item.active .icon {
      animation: strok 1.5s reverse;
    }
    
    @keyframes strok {
      100% {
        stroke-dashoffset: 400;
      }
    }
    
    .menu__border {
      left: 0;
      top: 99%;
      width: 10.9em;
      height: 2.4em;
      position: absolute;
      clip-path: url(#menu);
      will-change: transform;
      background-color: var(--bgColorMenu);
      transition: transform var(--timeOut, var(--duration));
    }
    
    .svg-container {
      width: 0;
      height: 0;
    }
    
    @media screen and (max-width: 50em) {
      .menu {
        font-size: 0.8em;
      }
    }
    
    `,
  },
  {
    taskId: "Order-Tracker-Mobile-App",
    title: "Order Tracker Mobile App",
    css: `
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.3s ease;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  animation: gradientBG 15s ease infinite;
  background-size: 400% 400%;
  overflow: hidden;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

a {
  text-decoration: none;
  color: white;
}

.container {
  padding: 0;
  margin: 20px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  position: relative;
  height: 100vh;
  width: 100vw;
}

.iphone {
  background-color: #f4f4fb;
  height: 812px;
  width: 375px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  z-index: 2;
  transform-origin: top center;
  transition: transform 0.5s ease;
}

.container,
.iphone {
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  background: linear-gradient(45deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
}

.order-summary {
  margin-left: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.order-summary > div {
  margin: 6px;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.order-status {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.order-date {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.order-day {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.back-btn {
  color: rgb(255, 255, 255);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.384);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.back-btn:hover {
  transform: scale(1.2) rotate(360deg);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.603);
  background-color: rgba(255, 255, 255, 0.3);
}

.back-btn i {
  color: white;
  font-size: 1.2rem;
}

.hero-img-container {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 20px;
  overflow: hidden;
}

.hero-img-container::before {
  height: 20px;
  width: 20px;
  background-color: transparent;
  position: absolute;
  top: 60px;
  right: 120px;
  content: "";
  border-radius: 50%;
  border: 2px solid #ff6a88;
  border-top: 2px solid transparent;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.arc {
  border: 1px solid #7c28c0;
  display: inline-block;
  min-width: 150px;
  min-height: 150px;
  padding: 0.5em;
  border-radius: 50%;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  opacity: 0.4;
  position: absolute;
  transform: rotate(-40deg);
  left: 110px;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(-40deg);
  }
  to {
    transform: rotate(320deg);
  }
}

.triangle1 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 20px 10px;
  border-color: transparent transparent #ff6a88 transparent;
  position: absolute;
  top: 50px;
  left: 130px;
  transform: rotate(-45deg);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(-45deg);
  }
  50% {
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
  }
}

.hero-img {
  width: 80%;
  transition: transform 0.3s ease;
}

.order-status-container {
  z-index: 3;
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  position: relative;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
}

.status-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 150px;
  padding-top: 20px;
}

.status-item > div {
  margin: 10px;
}

.status-circle {
  height: 20px;
  width: 20px;
  background-color: #ff6a88;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 5;
  transition: all 0.3s;
  cursor: pointer;
}

.status-circle:hover {
  transform: scale(1.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.status-text {
  font-size: 0.8rem;
  font-weight: 500;
}

.status-text span {
  display: block;
  text-align: center;
  padding: 2px;
}

.green {
  color: #84fab0;
}

.first::before {
  content: "";
  height: 4px;
  width: 70px;
  background-color: #ff6a88;
  position: absolute;
  z-index: 4;
  top: 83px;
  left: 40px;
}

.second::before {
  content: "";
  height: 4px;
  width: 210px;
  background-color: #ff6a88;
  position: absolute;
  z-index: 4;
  top: 83px;
  left: 100px;
  opacity: 0.2;
}

.order-details-container {
  position: relative;
  z-index: 6;
  height: 900px;
  background: linear-gradient(45deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding-top: 20px;
  transform: translateY(-45px);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, opacity 0.5s ease;
  cursor: default;
  overflow: hidden;
}

.odc-header {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.hidden-odc-header .odc-header {
  display: none;
}

.cta-text {
  margin-top: 40px;
  margin-right: 25px;
  color: white;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.18);
}

.cta-button {
  margin-top: 20px;
  padding: 20px 40px;
  background-color: #ff6a88;
  border: 0;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: shadow-pulse 1s infinite;
  cursor: pointer;
  transition: all 1s ease;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);
  }
}

.cta-button:focus {
  outline: none;
}

.order-details-container::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: #eaebff;
  opacity: 0.8;
  border-radius: 2px;
  top: 20px;
  left: 150px;
}
.top-of-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.action-btn {
  cursor: pointer;
}
.odc-wrapper {
  margin: 30px;
}

.odc-header-line {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

.odc-header-details {
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-container {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 10px;
  transition: all 1s ease;
}

.product-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.product span {
  display: block;
  color: white;
  margin-left: 25px;
  margin-bottom: 8px;
  flex-grow: 1;
}

.product span:first-child {
  font-weight: 300;
  font-size: 0.8rem;
}

.product span:last-child {
  font-weight: 500;
  font-size: 1.3rem;
}

.img-photo {
  width: 60px;
  transform: rotate(-35deg);
  transition: transform 0.3s ease;
}

.img-photo:hover {
  transform: rotate(0deg) scale(1.1);
}

.cancellation {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.cancellation:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.shipping-desc {
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
}

.shipping-address {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.shipping-address:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.footer {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 0.9rem;
}

.footer small {
  font-size: 0.7rem;
}

.footer a {
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 2px;
  transition: all 0.3s ease;
}

.footer a:hover {
  color: #ff6a88;
  border-bottom-color: #ff6a88;
}

    `,
  },
  {
    taskId: "Timer-App",
    title: "Timer App",
    css: `
    @keyframes subtlePulse {
      0%,
      100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.02);
        opacity: 0.9;
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
    
    @keyframes neonGlow {
      0%,
      100% {
        box-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 15px #ff69b4,
          0 0 20px #ff69b4;
      }
      50% {
        box-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4,
          0 0 40px #ff69b4;
      }
    }
    
    .timer-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url("https://images.unsplash.com/photo-1550039120-5d6529f0c4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      background-size: cover;
      background-position: center;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    
    .timer-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }
    
    .timer {
      background-color: rgba(20, 20, 20, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 30px;
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
      z-index: 2;
      position: relative;
      overflow: hidden;
      border: 2px solid #ff69b4;
      animation: neonGlow 2s infinite;
    }
    
    .timer::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shimmer 8s infinite linear;
    }
    
    .timer.active {
      transform: scale(1.03);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    
    .time-display {
      font-size: 5.5em;
      font-weight: 300;
      color: #ff69b4;
      text-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
      margin-bottom: 30px;
      font-family: "Helvetica Neue", Arial, sans-serif;
      letter-spacing: 2px;
      animation: subtlePulse 2s infinite ease-in-out;
    }
    
    .button-container {
      display: flex;
      gap: 20px;
    }
    
    .start-btn,
    .pause-btn,
    .reset-btn {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 0.9em;
      font-weight: 400;
      cursor: pointer;
      border-radius: 50px;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      overflow: hidden;
      border: 1px solid #ff69b4;
    }
    
    .start-btn::before,
    .pause-btn::before,
    .reset-btn::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: all 0.5s;
    }
    
    .start-btn:hover::before,
    .pause-btn:hover::before,
    .reset-btn:hover::before {
      left: 100%;
    }
    
    .start-btn:hover,
    .pause-btn:hover,
    .reset-btn:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 0 10px #ff69b4;
    }
    
    .start-btn {
      background-color: rgba(255, 105, 180, 0.3);
    }
    
    .pause-btn {
      background-color: rgba(255, 152, 0, 0.3);
    }
    
    .reset-btn {
      background-color: rgba(244, 67, 54, 0.3);
    }
    
    @media (max-width: 768px) {
      .timer {
        padding: 40px;
      }
    
      .time-display {
        font-size: 4em;
      }
    
      .button-container {
        flex-direction: column;
      }
    }
    
    `,
  },
  {
    taskId: "Portfolio-Website",
    title: "Portfolio Website",
    css: `
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body,
  html {
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: #454545;
    width: 100%;
  }
  
  img {
    width: 100%;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 80px 0;
  }
  
  @media screen and (max-width: 760px) {
    .container {
      padding: 80px 25px;
    }
  }
  
  .section-title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 50px;
  }
  
  .accent-text {
    font-family: "Dancing Script", cursive;
    color: #13b5d1;
  }
  
  .active,
  .is-checked {
    color: #13b5d1;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  h3 {
    margin: 20px 0 10px 0;
  }
  
  p {
    padding: 2rem;
    font-size: 16px;
    line-height: 1.6;
    color: #a3a3a3;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    text-decoration: none;
  }
  
  /* Services */
  
  .services-grid {
    width: 800px;
  }
  
  /* Contact */
  
  #contact {
    padding: 80px 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-title h1 {
    font-size: 36px;
    color: #333;
  }
  
  .accent-text {
    color: #007bff;
  }
  
  .contact-form {
    width: 500px;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
  }
  
  textarea {
    height: 150px;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  /* Scroll Bar Styles */
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #a3a3a3;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #13b5d1;
  }
  
  /* Preload Page Styles */
  #preload-overlay {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9000;
  }
  
  .loader-frame {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .loader1,
  .loader2 {
    position: absolute;
    border: 5px solid transparent;
    border-radius: 50%;
  }
  
  .loader1 {
    width: 100px;
    height: 100px;
    border-top: 5px solid #13b5d1;
    border-bottom: 5px solid #13b5d1;
    animation: clockwisespin 2s linear infinite;
  }
  
  .loader2 {
    width: 90px;
    height: 90px;
    border-left: 5px dotted #454545;
    border-right: 5px dotted #454545;
    top: 5px;
    left: 5px;
    animation: anticlockwisespin 2.5s linear infinite;
  }
  
  @keyframes clockwisespin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes anticlockwisespin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  /* Header Styles */
  #main-header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 900;
    background: #fff;
    border-bottom: 1px solid #e52e2d;
    transition: max-height 0.3s ease;
  }
  
  .header-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 0 25px;
  }
  
  .logo {
    float: left;
    display: block;
    line-height: 1;
    font-size: 27pt;
    font-weight: bold;
    color: #13b5d1;
    font-family: "Dancing Script", cursive;
  }
  
  nav ul {
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline-block;
    margin-left: 20px;
  }
  
  nav ul a {
    color: #454545;
    text-transform: uppercase;
    font-size: 14px;
    transition: color 0.3s ease;
  }
  
  nav ul a:hover,
  nav ul .active {
    color: #13b5d1;
  }
  
  .mobile-toggle {
    display: none;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 22px;
    top: 20px;
    width: 30px;
    transition: all 200ms ease-in;
  }
  
  .mobile-toggle span {
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    border-radius: 1000px;
    background: #454545;
    display: block;
  }
  
  @media screen and (max-width: 768px) {
    #main-header {
      max-height: 70px;
      overflow: hidden;
    }
  
    #main-header.open-nav {
      max-height: 400px;
    }
  
    .mobile-toggle {
      display: block;
    }
  
    .open-nav .mobile-toggle {
      transform: rotate(-90deg);
    }
  
    nav {
      width: 100%;
      padding-top: 20px;
    }
  
    nav ul {
      float: none;
      text-align: center;
    }
  
    nav ul li {
      width: 100%;
      padding: 10px 0;
      margin: 0;
    }
  
    .logo {
      float: none;
      margin: 0 auto;
      text-align: center;
    }
  }
  
  /* Hero Styles */
  #hero {
    background: url("https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    position: relative;
    margin-top: 70px;
  }
  
  #particles-js {
    width: 100%;
    height: 100%;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 50px;
    color: #fff;
    margin: 30px 0 10px;
  }
  
  .hero-content h2 {
    font-size: 30px;
    color: #bfbfbf;
  }
  
  .hero-content .download {
    color: #bfbfbf;
    background: #13b5d1;
    border: 1px solid #13b5d1;
    border-radius: 1000px;
    padding: 10px;
    transition: border-color 0.3s ease;
    cursor: pointer;
  }
  
  .hero-content .download a {
    color: #000000;
    font-size: 16px;
  }
  
  .hero-content .download:hover {
    border-color: #bfbfbf;
  }
  
  .hero-content img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 3px solid #13b5d1;
  }
  
  @media screen and (max-width: 768px) {
    .hero-content img {
      width: 200px;
      height: 200px;
    }
  }
  
  /* Clients */
  
  #client {
    height: 100vh;
  }
  
  .client-item img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 3px solid #13b5d1;
  }
  
  /* About Styles */
  .about-text {
    opacity: 0;
    transform: translateX(25px);
    transition: all 0.3s ease-out;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
  }
  
  .about-text-animate {
    opacity: 1;
    transform: translateX(0);
  }
  
  .about-social {
    margin: 20px 0;
  }
  
  .about-social li {
    padding-right: 20px;
  }
  
  .about-social .fab,
  .about-social .far {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #a3a3a3;
    border-radius: 50%;
    color: #454545;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  
  .about-social .fab:hover,
  .about-social .far:hover {
    color: #13b5d1;
  }
  
  .skill-progress-container p {
    color: #454545;
  }
  
  .skill-progress-container,
  .eduction-block {
    margin-bottom: 15px;
    padding-left: 16px;
    width: 80%;
  }
  
  .skill-bar {
    position: relative;
    width: 100%;
    height: 5px;
    margin-top: 5px;
    background: #a3a3a3;
  }
  
  .bar-percent {
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    background: #13b5d1;
  }
  
  .education-container h3 {
    text-transform: capitalize;
  }
  
  @media screen and (max-width: 768px) {
    .education-container h3 {
      margin-top: 20px;
    }
  }
  
  .education-block {
    margin-bottom: 25px;
  }
  
  .education-block h3 {
    text-transform: uppercase;
    color: #13b5d1;
  }
  
  .education-block p {
    font-size: 14px;
  }
  
  /* Portfolio.css */
  
  .section-title {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .accent-text {
    color: #13b5d1;
  }
  
  .button-group {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .button-group ul {
    list-style: none;
    padding: 0;
  }
  
  .button-group button {
    padding: 10px 20px;
    border-radius: 1000px;
    background: none;
    border: 1px solid #13b5d1;
    color: #13b5d1;
    text-transform: capitalize;
    cursor: pointer;
    margin-right: 5px;
    transition: all 0.3s ease;
  }
  
  .button-group button:hover,
  .button-group button.is-checked {
    color: #fff;
    background: #13b5d1;
  }
  
  .img-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .img-container {
    width: 250px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    text-align: center;
  }
  
  .hidden {
    display: none;
  }
  
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .img-container:hover img {
    transform: scale(1.1);
  }
  
  /* Testimonials Styles */
  .testimonial-block {
    margin-bottom: 30px;
  }
  
  .testimonial-block p {
    font-style: italic;
    margin: 0 0 10px 0;
  }
  
  .testimonial-name h3 {
    display: inline-block;
  }
  
  .testimonial-name span {
    font-style: italic;
    margin-left: 20px;
  }
  
  .owl-theme .owl-dots .owl-dot {
    background: #a3a3a3;
    border-radius: 50%;
    display: inline-block;
    height: 10px;
    margin: 0 5px;
    width: 10px;
  }
  
  .owl-theme .owl-dots .owl-dot.active {
    background: #13b5d1;
  }
  
  /* Footer Styles */
  #main-footer {
    background: #454545;
    padding: 40px 0;
  }
  
  #main-footer p {
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
  
  .social-links {
    color: white;
    text-align: center;
  }
  
  .social-links :visited {
    color: inherit;
    text-decoration: none;
  }
  
  .social-links li {
    margin-right: 10px;
  }
  
    `,
  },
  {
    taskId: "Materialize-Portfolio",
    title: "Materialize Portfolio",
    css: `
    .header {
      padding: 0;
      min-height: calc(100vh - 64px);
    }
    .header .wrapper {
      margin: auto;
    }
    .header .btn-large {
      margin: 8px;
      width: 200px;
    }
    .header h1 {
      margin-top: 20px;
      text-align: center;
      font-weight: 500;
    }
    .header .scroll-down {
      color: #ddd !important;
      display: block;
      margin-top: 20vh;
      font-size: 2rem;
    }
    .header .scroll-down i {
      display: block;
      font-size: 5rem;
    }
    nav ul li a,
    nav .material-icons {
      font-weight: 500;
      color: #039be5 !important;
    }
    nav .material-icons {
      padding-left: 16px;
    }
    nav .brand-logo img {
      width: 25px;
    }
    @media (min-width: 993px) {
      nav {
        padding: 0 calc(15vw + 1.5rem);
        margin: auto;
        left: 0;
        right: 0;
      }
    }
    ul li.list-head {
      color: rgba(0, 0, 0, 0.87);
      padding: 0px 30px 12px;
    }
    ul li.list-head:hover {
      background: transparent;
    }
    @media (max-width: 600px) {
      ul li.list-head {
        padding-bottom: 6px;
      }
      ul li.list-head h4 {
        font-size: 1.9em;
      }
      iframe {
        height: 380px !important;
      }
    }
    .img-box .text {
      margin-top: 32px;
    }
    .col .divider {
      margin: 62px 0 32px 0;
    }
    h2,
    h3 {
      margin-bottom: 40px;
      font-weight: 200;
      text-align: center;
    }
    .text {
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 2rem;
      text-align: justify;
    }
    footer a {
      font-weight: 500;
    }
    iframe.z-depth-1 {
      transition: 0.3s;
      height: 600px;
    }
    .col {
      transition: 0.4s;
    }
    
    .copyright {
      color: black;
    }
    
    .hidden {
      opacity: 0;
      transform: translateX(-16px);
      transition: 0.4s;
    }
    .pointer {
      cursor: pointer;
    }
    
    `,
  },
  {
    taskId: "File-Uploader",
    title: "File Uploader",
    css: `
    body {
      background: no-repeat center
        url("https://images.unsplash.com/photo-1618912487390-8987d3c3b862?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      background-size: cover;
      font-family: "Quicksand", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }
    
    h1 {
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-size: 2.5em;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .file-upload {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.9);
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      font-size: 15px;
      text-align: center;
    }
    
    .file-upload__input {
      display: none;
    }
    
    .file-upload__button {
      background: #00a884;
      border: none;
      border-radius: 4px;
      padding: 0.8em 1.2em;
      color: #ffffff;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    
    .file-upload__button:hover {
      background: #009879;
      transform: scale(1.05);
    }
    
    .file-upload__button:active {
      background: #00745d;
      transform: scale(1);
    }
    
    .file-upload__label {
      margin-top: 15px;
      max-width: 300px;
      font-size: 1em;
      overflow: hidden;
      white-space: nowrap;
      font-family: "Quicksand", sans-serif;
      color: #333;
      background: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .file-upload__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f9f9f9;
      padding: 5px 10px;
      border-radius: 5px;
      margin-top: 5px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .file-upload__downloads {
      margin-top: 20px;
    }
    
    .file-upload__download-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #eaeaea;
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .file-upload__delete {
      margin-left: 10px;
      background: #ff4d4d;
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 0.8em;
      font-weight: bold;
      cursor: pointer;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    
    .file-upload__delete:hover {
      background: #ff1a1a;
    }
    
    .file-upload__downloads a {
      display: block;
      color: #007bff;
      text-decoration: none;
      margin-top: 5px;
      transition: color 0.3s ease;
      font-size: 1em;
    }
    
    .file-upload__downloads a:hover {
      color: #0056b3;
      text-decoration: underline;
    }
    
    `,
  },
  {
    taskId: "Cake-Website",
    title: "Cake Website",
    css: `
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");

/* Global styles */
body {
  font-family: "Josefin Sans", sans-serif;
  background-color: #e4e1dc;
  color: #3e4546;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

p {
  font-size: 90%;
  line-height: 1.7;
}

h3 {
  font-family: "Snell Roundhand", cursive;
  font-weight: normal;
  color: #54301a;
  text-shadow: 0 0 1px #54301a;
}

/* Navbar styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(228, 225, 220, 0.9);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: rgba(228, 225, 220, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {
  width: 60px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.1);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #54301a;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style-type: none;
}

.nav-links li a {
  text-decoration: none;
  color: #54301a;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links li a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #54301a;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links li a:hover {
  color: #7f5b51;
}

.nav-links li a:hover::after {
  transform: scaleX(1);
}

.cart-icon {
  position: relative;
  font-size: 1.5rem;
  color: #54301a;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #54301a;
  color: #fff;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 50%;
}

/* Main section styles */
.main-section {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: background-image 0.5s ease-in-out;
}

.main-content {
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.main-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: "Snell Roundhand", cursive;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.cta-button {
  display: inline-block;
  background-color: #54301a;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #7f5b51;
  transform: translateY(-3px);
}

/* Specials section styles */
.specials-section {
  background-color: #f8f5f2;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.specials-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #54301a;
  margin-bottom: 2rem;
}

.specials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.special-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.special-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.special-icon {
  font-size: 2.5rem;
  color: #54301a;
  margin-bottom: 1rem;
}

.special-card h3 {
  font-size: 1.5rem;
  color: #54301a;
  margin-bottom: 0.5rem;
}

.special-card .time {
  font-size: 0.9rem;
  color: #7f5b51;
  margin-bottom: 1rem;
}

.special-card .description {
  font-size: 1rem;
  color: #3e4546;
  margin-bottom: 1rem;
}

.special-card .price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #54301a;
  margin-bottom: 0.5rem;
}

.special-card .extra-info {
  font-size: 0.9rem;
  color: #7f5b51;
}

.order-now {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  background-color: #54301a;
  color: #fff;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  transition: bottom 0.3s ease;
}

.special-card:hover .order-now {
  bottom: 0;
}

.children-offer {
  background-color: #54301a;
  color: #fff;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.child-icon {
  font-size: 3rem;
}

.children-offer p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Footer styles */
.footer {
  background-color: #54301a;
  color: #fff;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
}

.footer-logo {
  width: 80px;
  height: auto;
  margin-bottom: 1rem;
}

.footer h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e4e1dc;
}

.footer-nav {
  display: flex;
  flex-direction: column;
}

.footer-nav a {
  color: #e4e1dc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #b48b66;
}

.footer p {
  margin-bottom: 0.5rem;
}

.newsletter-form {
  display: flex;
  margin-bottom: 1rem;
}

.newsletter-form input {
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form input.valid {
  border: 2px solid #4caf50;
}

.subscribe-btn {
  background-color: #b48b66;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-btn:hover {
  background-color: #7f5b51;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  color: #e4e1dc;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #b48b66;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #7f5b51;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 74px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: rgba(228, 225, 220, 0.95);
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-150%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .main-content h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .features {
    flex-direction: column;
    gap: 1rem;
  }

  .specials-section h2 {
    font-size: 2rem;
  }

  .children-offer {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 2rem;
  }
}

    `,
  },
  {
    taskId: "Interactive-3D-Card-Viewer",
    title: "Interactive 3D Card Viewer",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    cursor: grabbing;
    user-select: none;
  }
  
  .card {
    width: 350px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    perspective: 600px;
  }
  
  .front,
  .back {
    width: 100%;
    overflow: hidden;
    transition: all 0.9s linear;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .front {
    transform: translateZ(1px) translateX(0px) translateY(0px);
  }
  
  .back {
    transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(180deg);
  }
  
  img {
    width: 100%;
  }
  
  h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #666;
    text-transform: capitalize;
    font-size: 1.2em;
    font-weight: 100;
    font-family: "Roboto", sans-serif;
  }
  
  h2 {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: #555;
    text-transform: capitalize;
    font-size: 1em;
    font-weight: 50;
    font-family: "Roboto", sans-serif;
  }
  
    `,
  },
  {
    taskId: "Dev-Portfolio",
    title: "Dev Portfolio",
    css: `
    /* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navbar Styles */
.navbar {
  background-color: transparent;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: #333;
}

.navbar.scrolled {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.navbar.scrolled .navbar-logo {
  color: #333;
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.navbar.scrolled .nav-link {
  color: #333;
}

.nav-link:hover {
  color: #007bff;
}

/* Home Styles */
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat center center/cover;
  color: #fff;
  text-align: center;
}

.home-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3;
}

/* About Styles */
.about {
  height: 100vh;
  padding: 5rem 0;
  background-color: #fff;
}

.about h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.about-text,
.skills {
  flex: 1;
  padding: 0 1rem;
}

.skills ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.skills li {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
}

/* Portfolio Styles */
.portfolio {
  height: 100vh;

  padding: 5rem 0;
  background-color: #f4f4f4;
}

.portfolio h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.filter-buttons button {
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.filter-buttons button:hover,
.filter-buttons button.active {
  color: #007bff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-card h3 {
  padding: 1rem;
  text-align: center;
}

/* Contact Styles */
.contact {
  height: 100vh;

  padding: 5rem 0;
  background-color: #fff;
}

.contact h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.contact form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.contact input,
.contact textarea {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact textarea {
  height: 150px;
}

.contact button {
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact button:hover {
  background-color: #0056b3;
}

/* Footer Styles */
footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.social-links a {
  color: #fff;
  margin-left: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-text,
  .skills {
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .footer-content {
    flex-direction: column;
  }

  .social-links {
    margin-top: 1rem;
  }
}

    `,
  },
  {
    taskId: "Fruit-Carousel",
    title: "Fruit Carousel",
    css: `
    body {
      margin: 0;
      padding: 0;
      background: #f0f0f0;
      font-family: "Poppins", sans-serif;
      overflow-x: hidden;
      overflow: hidden;
    }
    
    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;
      overflow: hidden;
    }
    
    .carousel:hover {
      overflow: auto;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
    }
    
    .carousel:hover::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    
    .carousel-item {
      position: absolute;
      width: 60vw;
      height: 70vh;
      transition: all 0.5s ease;
      opacity: 0;
      transform: scale(0.8);
    }
    
    .carousel-item.active {
      opacity: 1;
      transform: scale(1);
      z-index: 2;
    }
    
    .carousel-item.prev,
    .carousel-item.next {
      opacity: 0.5;
      z-index: 1;
    }
    
    .carousel-item.prev {
      z-index: 1;
      transform: translateX(-50%) scale(0.8);
      opacity: 0.7;
    }
    
    .carousel-item.next {
      z-index: 1;
      transform: translateX(50%) scale(0.8);
      opacity: 0.7;
    }
    
    .carousel-box {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
    
    .carousel-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .carousel-box:hover img {
      transform: scale(1.05);
    }
    
    .carousel-box .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    
    .carousel-box:hover .content {
      transform: translateY(0);
    }
    
    .carousel-box .title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .carousel-box .num {
      font-size: 18px;
      opacity: 0.8;
    }
    
    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.7);
      color: #333;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
    }
    
    .nav-button:hover {
      background: rgba(255, 255, 255, 0.9);
    }
    
    .nav-button.prev {
      left: 20px;
    }
    
    .nav-button.next {
      right: 20px;
    }
    
    .progress-bar {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      overflow: hidden;
    }
    
    .progress {
      width: 0;
      height: 100%;
      background: #fff;
      transition: width 0.3s ease;
    }
    
    `,
  },
  {
    taskId: "FitLife-Website",
    title: "FitLife Website",
    css: `
    :root {
      --primary-color: #ff4c29;
      --secondary-color: #082032;
      --text-color: #2c394b;
      --background-color: #f0f0f0;
    }
    
    body {
      font-family: "Roboto", sans-serif;
      color: var(--text-color);
      background-color: var(--background-color);
      line-height: 1.6;
    }
    
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
    }
    
    .btn-primary:hover {
      background-color: #333;
    }
    
    /* Navbar.css */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: background-color 0.3s ease;
    }
    
    .navbar-collapse {
      display: flex;
      align-items: center;
    }
    
    .navbar.scrolled {
      background-color: var(--secondary-color);
    }
    
    .navbar.scrolled a {
      color: #fff;
      cursor: pointer;
    }
    
    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
    
    .brand-highlight {
      color: var(--primary-color);
    }
    
    .navbar-toggler {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
    }
    
    .navbar-cta {
      margin-left: auto;
    }
    
    .burger-icon {
      display: block;
      width: 25px;
      height: 3px;
      background-color: var(--primary-color);
      position: relative;
      transition: background-color 0.3s ease;
    }
    
    .burger-icon::before,
    .burger-icon::after {
      content: "";
      position: absolute;
      width: 25px;
      height: 3px;
      background-color: var(--primary-color);
      transition: all 0.3s ease;
    }
    
    .burger-icon::before {
      top: -8px;
    }
    
    .burger-icon::after {
      bottom: -8px;
    }
    
    .navbar-nav {
      display: flex;
      list-style-type: none;
      margin-right: 1rem;
      margin-bottom: 0;
    }
    
    .navbar-nav li {
      margin-left: 2rem;
    }
    
    .navbar-nav a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
    }
    
    .navbar-nav a:hover {
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .navbar-toggler {
        display: block;
      }
    
      .navbar-collapse {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--secondary-color);
        padding: 1rem;
        display: none;
      }
    
      .navbar-collapse.show {
        display: block;
      }
    
      .navbar-nav {
        flex-direction: column;
      }
    
      .navbar-nav li {
        margin: 1rem 0;
      }
    
      .navbar-nav a {
        color: #fff;
      }
    
      .navbar-toggler.active .burger-icon {
        background-color: transparent;
      }
    
      .navbar-toggler.active .burger-icon::before {
        top: 0;
        transform: rotate(45deg);
      }
    
      .navbar-toggler.active .burger-icon::after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
    
    /* HeroSection.css */
    .hero-section {
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      overflow: hidden;
    }
    
    .hero-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    
    .hero-content {
      max-width: 800px;
      padding: 2rem;
    }
    
    .hero-content h1 {
      color: var(--primary-color);
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }
    
    .hero-content p {
      color: #333;
    
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .scroll-down {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }
    
    .scroll-down i {
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    
    /* AboutSection.css */
    .about-section {
      padding: 5rem 0;
      background-color: white;
    }
    
    .about-section h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .about-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .about-card {
      background-color: var(--background-color);
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    
    .about-card:hover {
      transform: translateY(-10px);
    }
    
    .about-card i {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    
    .about-card h3 {
      margin-bottom: 1rem;
    }
    
    /* TrainersSection.css */
    .trainers-section {
      padding: 5rem 0;
      background-color: var(--secondary-color);
      color: white;
    }
    
    .trainers-section h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .trainer-card {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
    }
    
    .trainer-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    
    .trainer-info {
      padding: 1.5rem;
      text-align: center;
      color: var(--text-color);
    }
    
    .trainer-social {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
    
    .social-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      margin: 0 0.5rem;
      transition: background-color 0.3s ease;
    }
    
    .social-btn:hover {
      background-color: darken(var(--primary-color), 10%);
    }
    
    /* ContactForm.css */
    .contact-section {
      padding: 5rem 0;
      background-color: white;
    }
    
    .contact-section h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    .form-group textarea {
      height: 150px;
    }
    
    .success-message {
      text-align: center;
      background-color: #4caf50;
      color: white;
      padding: 2rem;
      border-radius: 5px;
    }
    
    /* Footer.css */
    .footer {
      background-color: var(--secondary-color);
      color: white;
      padding: 3rem 0 1rem;
      position: relative;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-brand h3 {
      margin-bottom: 1rem;
    }
    
    .footer-links ul {
      list-style-type: none;
      padding: 0;
    }
    
    .footer-links li {
      margin-bottom: 0.5rem;
    }
    
    .footer-links a {
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
    
    .footer-newsletter form {
      display: flex;
    }
    
    .footer-newsletter input {
      flex-grow: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 5px 0 0 5px;
    }
    
    .footer-newsletter button {
      border-radius: 0 5px 5px 0;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .social-icons a {
      color: white;
      font-size: 1.2rem;
      margin-left: 1rem;
    }
    
    .back-to-top {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      background-color: var(--primary-color);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    
    .back-to-top:hover {
      background-color: darken(var(--primary-color), 10%);
    }
    
    `,
  },
  {
    taskId: "FAQ-Toggle",
    title: "FAQ Toggle",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap");

:root {
  --primary-color: #6c63ff;
  --secondary-color: #4caf50;
  --background-color: #1e1e2e;
  --item-background: #2a2a3c;
  --text-color: #e0e0e0;
  --text-color-muted: #b0b0b0;
  --transition-speed: 0.5s;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Poppins", sans-serif;
}

.faq-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.faq-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 10% 20%,
      rgba(108, 99, 255, 0.15) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(76, 175, 80, 0.15) 0%,
      transparent 30%
    );
  filter: blur(60px);
  z-index: -1;
}

.faq-list {
  list-style: none;
  padding: 0;
}

.faq-item {
  background: var(--item-background);
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all var(--transition-speed) cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.faq-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.3);
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
}

.faq-question-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  text-align: left;
}

.faq-icon {
  position: relative;
  width: 20px;
  height: 20px;
}

.faq-icon-bar {
  position: absolute;
  background-color: var(--primary-color);
  transition: all var(--transition-speed) ease;
}

.faq-icon-bar:first-child {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.faq-icon-bar:last-child {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.faq-item.active .faq-icon-bar:last-child {
  transform: translateX(-50%) scaleY(0);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all var(--transition-speed) cubic-bezier(0.23, 1, 0.32, 1);
}

.faq-item.active .faq-answer {
  max-height: 1000px;
  padding: 0 30px 25px;
}

.faq-answer p {
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-speed) ease 0.2s;
  color: var(--text-color-muted);
}

.faq-item.active .faq-answer p {
  opacity: 1;
  transform: translateY(0);
}

@keyframes soft-pulse {
  0% {
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.2),
      0 0 20px rgba(108, 99, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 10px rgba(108, 99, 255, 0.3),
      0 0 30px rgba(108, 99, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.2),
      0 0 20px rgba(108, 99, 255, 0.1);
  }
}

.faq-item.active {
  animation: soft-pulse 3s infinite;
}

@media (max-width: 768px) {
  .faq-container {
    padding: 10px;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question-text {
    font-size: 16px;
  }
}

    `,
  },
  {
    taskId: "Pomodoro-Focus-Timer",
    title: "Pomodoro Focus Timer",
    css: `
    :root {
      --color1: #ff6b6b;
      --color2: #4ecdc4;
      --color3: #45b7d1;
      --color4: #f7d44c;
      --background: #2f3640;
      --text: #f5f6fa;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background: var(--background);
      color: var(--text);
      font-family: "Orbitron", sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    
    #pomodoro {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    
    h1 {
      font-size: 2.5em;
      margin-bottom: 1em;
      text-transform: uppercase;
      letter-spacing: 3px;
      text-align: center;
      color: var(--color4);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    #clock-container {
      position: relative;
      width: 300px;
      height: 300px;
    }
    
    #clockBody {
      width: 100%;
      height: 100%;
      background: conic-gradient(
        var(--color1) 0deg,
        var(--color2) 90deg,
        var(--color3) 180deg,
        var(--color4) 270deg
      );
      border-radius: 50%;
      position: absolute;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
      transition: transform 0.5s ease;
    }
    
    #clockBody.rotating {
      animation: rotate 60s linear infinite;
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    #timer {
      font-size: 3em;
      font-weight: bold;
      background: var(--background);
      border-radius: 50%;
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    
    #settings {
      margin-top: 2em;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      width: 100%;
      max-width: 500px;
    }
    
    label {
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color4);
    }
    
    input {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      color: var(--text);
      padding: 0.5em;
      font-size: 1em;
      text-align: center;
      border: none;
      border-radius: 25px;
      outline: none;
      font-family: "Orbitron", sans-serif;
    }
    
    button {
      width: 100%;
      padding: 0.7em;
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: "Orbitron", sans-serif;
      position: relative;
      overflow: hidden;
    }
    
    button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: all 0.5s;
    }
    
    button:hover::before {
      left: 100%;
    }
    
    button:nth-child(3n + 1) {
      background: var(--color1);
      clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    }
    
    button:nth-child(3n + 2) {
      background: var(--color2);
      clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
    }
    
    button:nth-child(3n) {
      background: var(--color3);
      clip-path: circle(50% at 50% 50%);
    }
    
    #reset {
      grid-column: span 3;
      background: var(--color4);
      clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
      );
    }
    
    @media screen and (max-width: 480px) {
      #clockBody {
        width: 250px;
        height: 250px;
      }
    
      #timer {
        font-size: 2.5em;
      }
    
      #settings {
        grid-template-columns: 1fr 1fr;
      }
    
      #reset {
        grid-column: span 2;
      }
    }
    
    `,
  },
  {
    taskId: "Profolio",
    title: "Profolio",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    overflow-x: hidden;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    background-color: #f6f9fc;
    color: #2c3e50;
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .section-padding {
    padding-top: 80px;
  }
  
  h2 {
    text-align: center;
  }
  
  /* Navbar */
  .navbar {
    background-color: rgba(44, 62, 80, 0.9);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    height: 80px;
    padding: 0 15px;
  }
  
  .container {
    height: 100%;
  }
  
  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  
  .navbar-logo {
    flex-shrink: 0;
  }
  
  .logo-img {
    height: 40px;
    width: auto;
  }
  
  .navbar-menu {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  
  .navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar-nav .menu__item {
    margin: 0 10px;
    display: flex;
    align-items: center;
  }
  
  .navbar-nav .menu__item a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
  }
  
  .navbar-nav .menu__item img {
    height: 70px;
    width: auto;
  }
  
  .navbar-nav .menu__item a:hover::after {
    width: 100%;
  }
  
  /* Header styles */
  .jumbotron.homepage {
    background: linear-gradient(135deg, #3498db, #8e44ad);
    color: #ecf0f1;
    padding: 200px 0 150px;
    margin-bottom: 0;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  
  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #ecf0f1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .profile-image:hover {
    transform: scale(1.05) rotate(5deg);
  }
  
  .header-text h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-text h3 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 30px;
  }
  
  .header-text .highlight {
    color: #f39c12;
    font-weight: 600;
  }
  
  .cta-buttons {
    margin-top: 30px;
  }
  
  .cta-buttons .btn {
    margin: 0 10px;
    padding: 12px 30px;
    font-size: 1.2rem;
    border-radius: 30px;
    transition: all 0.3s ease;
  }
  
  .cta-buttons .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .jumbotron.homepage .row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  
  .jumbotron.homepage img {
    border: 5px solid #ecf0f1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .jumbotron.homepage img:hover {
    transform: scale(1.05);
  }
  
  .header-text h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-text h3 {
    font-size: 2rem;
    font-weight: 300;
  }
  
  .header-text h3 span {
    color: #f39c12;
    font-weight: 600;
  }
  
  section {
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom right, #f6f9fc 49%, transparent 51%);
  }
  
  section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top left, #f6f9fc 49%, transparent 51%);
  }
  
  section h1 {
    font-size: 3rem;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
  }
  
  section h1::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 5px;
    background: linear-gradient(to right, #3498db, #8e44ad);
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2.5px;
  }
  
  /* About Section */
  #about .highlight {
    color: #3498db;
    font-weight: 600;
  }
  
  #about .lead {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  
  .container#about {
    height: auto;
  }
  
  /* Button styling */
  .btn {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn:hover {
    background: linear-gradient(135deg, #2ecc71, #3498db);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
  
  .btn:focus {
    outline: none;
  }
  
  .btn:active {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
  
  .btn-lg {
    padding: 14px 28px;
    font-size: 18px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3498db, #2ecc71);
  }
  
  /* Timeline */
  .timeline {
    position: relative;
    padding: 20px 0;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    width: calc(70% - 20px);
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateX(0);
    transition: all 0.3s ease;
  }
  
  .timeline-item.left {
    float: left;
    clear: left;
  }
  
  .timeline-item.right {
    float: right;
    clear: right;
  }
  
  .timeline-item .timeline-badge {
    position: absolute;
    top: 20px;
    right: -60px;
    width: 100px;
    height: 40px;
    background: #3498db;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .timeline-item.right .timeline-badge {
    right: auto;
    left: -60px;
  }
  
  .timeline-item .timeline-panel {
    position: relative;
  }
  
  .timeline-item h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: #3498db;
  }
  
  .timeline-item p {
    font-size: 1rem;
    color: #2c3e50;
  }
  
  /* Skills section */
  .skills-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .skills-container {
    width: 100%;
  }
  
  .skill-item {
    margin-bottom: 20px;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .skill-name {
    font-weight: bold;
    font-size: 16px;
  }
  
  .skill-level {
    font-size: 14px;
    color: #555;
  }
  
  .skill-bar {
    height: 12px;
    border-radius: 6px;
    transition: width 0.3s ease-in-out;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Portfolio section */
  .portfolio-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  .portfolio-item {
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }
  
  .portfolio-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  #portfolio {
    margin-top: 100px;
  }
  
  .img-responsive {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 152, 219, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .portfolio-card:hover .portfolio-overlay {
    opacity: 1;
  }
  
  .portfolio-overlay h3 {
    color: #fff;
    margin-bottom: 15px;
  }
  
  .portfolio-overlay .btn {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .portfolio-overlay .btn:hover {
    background: linear-gradient(135deg, #2ecc71, #3498db);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
  
  .portfolio-overlay .btn:focus {
    outline: none;
  }
  
  .portfolio-overlay .btn:active {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
  
  /* Contact Section Styles */
  .contact-section {
    position: relative;
    overflow: hidden;
  }
  
  .contact-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }
  
  .contact-section h1 {
    color: #2c3e50;
    margin-bottom: 50px;
  }
  
  .contact-info {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info h3 {
    color: #3498db;
    margin-bottom: 20px;
  }
  
  .contact-details {
    list-style: none;
    padding: 0;
  }
  
  .contact-details li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .contact-details li svg {
    margin-right: 10px;
    color: #3498db;
  }
  
  .contact-form {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    position: relative;
    margin-bottom: 20px;
  }
  
  .input-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #3498db;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px 10px 10px 40px;
    border: none;
    border-bottom: 2px solid #e9ecef;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-bottom-color: #3498db;
  }
  
  .contact-form button {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    color: #fff;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
  
  .contact-form button:hover {
    background: linear-gradient(135deg, #2ecc71, #3498db);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
  }
  
  /* Footer Styles */
  footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 60px 0 30px;
    position: relative;
    overflow: hidden;
  }
  
  footer::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top left, #2c3e50 49%, transparent 51%);
  }
  
  footer h3 {
    color: #3498db;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  footer ul {
    list-style: none;
    padding: 0;
  }
  
  footer ul li {
    margin-bottom: 10px;
  }
  
  footer a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: #3498db;
  }
  
  .social-icons {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
  }
  
  .social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  .social-icons a:hover {
    background-color: #3498db;
    transform: translateY(-3px);
  }
  
  footer hr {
    border-color: rgba(255, 255, 255, 0.1);
    margin: 30px 0;
  }
  
  footer p {
    font-size: 0.9rem;
    opacity: 0.7;
  }
  
    `,
  },
  {
    taskId: "Animated-Progress-Loader",
    title: "Animated Progress Loader",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circular-progress {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-progress-inner {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #f0f0f0;
}

.progress-text {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #333;
}

.content {
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6366f1;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .circular-progress {
    width: 120px;
    height: 120px;
  }

  .circular-progress-inner {
    width: 100px;
    height: 100px;
  }

  .progress-text {
    font-size: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}

    `,
  },
  {
    taskId: "Dynamic-Loader",
    title: "Dynamic Loader",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Space Mono", monospace;
  background-color: #000;
  color: #fff;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000, #111);
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader-shape {
  width: 200px;
  height: 200px;
}

.progress-text {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #00ff00;
}

.content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00ffff;
}

p {
  font-size: 1.5rem;
  color: #ff00ff;
}

@media (max-width: 768px) {
  .loader-shape {
    width: 150px;
    height: 150px;
  }

  .progress-text {
    font-size: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}

    `,
  },
  {
    taskId: "Speech-Synth",
    title: "Speech Synth",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.input-text {
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.input-text:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-style {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:focus,
button:hover {
  background-color: #e45748;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    padding: 12px 20px;
  }

  .btn-style {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "Smooth-Scroll-Navigator",
    title: "Smooth Scroll Navigator",
    css: `
    body,
html {
  background: #2c3e50;
  font-family: "Exo", sans-serif;
  color: #ecf0f1;
}

#nav-wrap {
  background-color: #34495e;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
}

.clearfix {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav-btn {
  width: 100px;
  padding: 20px 0;
  font-size: 14px;
  color: #bdc3c7;
  transition: all 0.3s ease;
}

#nav-indicator {
  background: #3498db;
  height: 3px;
  transition: all 0.3s ease;
}

.nav-icon {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}

h1,
h2 {
  color: #ecf0f1;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 60px;
}

.row {
  background: #34495e;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.row:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.row h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #3498db;
}

.row p {
  font-size: 18px;
  line-height: 1.6;
}

.row.active {
  background: #2c3e50;
  border: 2px solid #3498db;
}

#top {
  background: #3498db;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  transition: all 0.3s ease;
}

#top:hover {
  background: #2980b9;
  transform: scale(1.1);
}

    `,
  },
  {
    taskId: "Tesla-Experience",
    title: "Tesla Experience",
    css: `
    body {
      margin: 0;
      font-family: "Gotham", Arial, sans-serif;
      background-color: #000;
      color: #fff;
    }
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
    }
    
    .header-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
    }
    
    .header .logo {
      height: 30px;
    }
    
    .header-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .header-links li {
      margin: 0 1rem;
    }
    
    .header-links li a {
      color: #fff;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .header-links li a.active,
    .header-links li a:hover {
      color: #c0c0c0;
    }
    
    .header .btn {
      background-color: #e82127;
      color: #fff;
      padding: 0.5rem 1.2rem;
      text-decoration: none;
      border-radius: 5px;
      font-size: 0.95rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .header .btn:hover {
      background-color: #c01118;
    }
    
    .home {
      text-align: center;
      padding: 6rem 2rem 2rem;
    }
    
    .home .intro {
      max-width: 800px;
      margin: 0 auto 4rem;
    }
    
    .home .intro h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .home .intro p {
      font-size: 1.2rem;
    }
    
    .home .features {
      margin: 4rem 0;
    }
    
    .home .features h2 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }
    
    .feature-cards {
      display: flex;
      justify-content: space-around;
      margin: 2rem 0;
    }
    
    .feature-card {
      width: 30%;
      padding: 2rem;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-card h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    
    .feature-card p {
      font-size: 1rem;
      line-height: 1.5;
    }
    
    .test-drive {
      margin: 4rem 0;
    }
    
    .test-drive h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    
    .test-drive p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .test-drive .btn {
      background-color: #e82127;
      color: #fff;
      padding: 0.8rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .test-drive .btn:hover {
      background-color: #c01118;
    }
    .model {
      height: 100vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .model::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    
    .model-info {
      padding: 2rem;
      border-radius: 10px;
      z-index: 2;
      text-align: center;
      max-width: 800px;
    }
    
    .model-info h1 {
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    
    .model-info p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .specs {
      display: flex;
      justify-content: space-around;
      margin: 2rem 0;
    }
    
    .specs div {
      text-align: center;
    }
    
    .specs h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .specs p {
      font-size: 1rem;
    }
    
    .price {
      text-align: center;
      margin: 2rem 0;
    }
    
    .price h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .btn {
      background-color: #e82127;
      color: #fff;
      padding: 0.8rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .btn:hover {
      background-color: #c01118;
    }
    .footer {
      text-align: center;
      padding: 1.5rem;
      background-color: #111;
      color: #ccc;
      font-size: 0.9rem;
    }
    
    .footer a {
      color: #ccc;
      text-decoration: none;
      margin: 0 0.5rem;
      transition: color 0.3s ease;
    }
    
    .footer a:hover {
      color: #fff;
    }
    
    `,
  },
  {
    taskId: "Dynamic-Dashboard",
    title: "Dynamic Dashboard",
    css: `
    :root {
      --primary-color: #3498db;
      --secondary-color: #2c3e50;
      --background-color: #ecf0f1;
      --text-color: #333;
      --sidebar-width: 150px;
    }
    
    body {
      font-family: "Roboto", Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: var(--background-color);
      color: var(--text-color);
    }
    
    header {
      background: var(--secondary-color);
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    header a {
      color: white;
      text-decoration: none;
      padding: 10px;
      transition: color 0.3s ease;
    }
    
    header a:hover {
      color: var(--primary-color);
    }
    
    aside {
      width: var(--sidebar-width);
      position: fixed;
      top: 70px;
      left: 0;
      bottom: 0;
      background: white;
      padding: 20px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    aside a {
      display: block;
      padding: 15px;
      color: var(--text-color);
      text-decoration: none;
      transition: background-color 0.3s ease;
      border-radius: 5px;
    }
    
    aside a:hover,
    aside a.current {
      background-color: var(--primary-color);
      color: white;
    }
    
    #main {
      margin-left: var(--sidebar-width);
      padding: 30px;
      transition: margin-left 0.3s ease;
    }
    
    .sub {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    
    .sub button {
      background: none;
      border: none;
      padding: 10px 15px;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-bottom: 2px solid transparent;
    }
    
    .sub button.current,
    .sub button:hover {
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
    
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background-color: white;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
    }
    
    th,
    td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    th {
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    tr:last-child td {
      border-bottom: none;
    }
    
    tr:nth-child(even) {
      background-color: #f8f8f8;
    }
    
    tr:hover {
      background-color: #f0f0f0;
    }
    
    
    
    .schedule-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .schedule-item {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease; 
    }
    
    .schedule-item:hover {
      transform: scale(1.1);
    }
    
    .schedule-item h3 {
      color: var(--primary-color);
      margin-top: 0;
    }
    
    .schedule-item ul {
      list-style-type: none;
      padding: 0;
    }
    
    .schedule-item li {
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .schedule-item li:last-child {
      border-bottom: none;
    }
    
    .info-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .info-card,
    .features-card {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .features-card ul {
      list-style-type: none;
      padding: 0;
    }
    
    .features-card li {
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .features-card li:last-child {
      border-bottom: none;
    }
    
    .menu-toggle {
      display: block;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    @media (max-width: 768px) {
      aside {
        transform: translateX(-100%);
      }
    
      #main {
        margin-left: 0;
      }
    
      .menu-open aside {
        transform: translateX(0);
      }
    
      .menu-open #main {
        margin-left: var(--sidebar-width);
      }
    }
    
    .loading-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    `,
  },
  {
    taskId: "Quiz-Master",
    title: "Quiz Master",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');


:root {
  --react-blue: #61dafb;
  --dark-bg: #282c34;
  --neon-green: #39ff14;
}


html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: var(--dark-bg);
}


.App {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  position: relative;
  overflow: hidden;
  color: var(--react-blue);
}


.react-logo {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="%2361dafb"/><g stroke="%2361dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>') no-repeat center center;
  background-size: 50%;
  opacity: 0.1;
  animation: rotate 60s linear infinite;
}


@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


.App-header {
  padding: 20px;
  z-index: 10;
  position: relative;
}


.App-header h1 {
  font-size: 3em;
  margin-bottom: 30px;
  text-shadow: 0 0 10px var(--react-blue);
  animation: neon 1.5s ease-in-out infinite alternate;
}


@keyframes neon {
  from { text-shadow: 0 0 10px var(--react-blue), 0 0 20px var(--react-blue), 0 0 30px var(--react-blue); }
  to { text-shadow: 0 0 5px var(--react-blue), 0 0 10px var(--react-blue), 0 0 15px var(--react-blue); }
}


.quiz-container {
  background-color: rgba(40, 44, 52, 0.8);
  border: 2px solid var(--react-blue);
  border-radius: 15px;
  padding: 30px;
  max-width: 600px;
  width: 90%;
  margin: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px var(--react-blue);
}


.quiz-container::before {
  content: '<React>';
  position: absolute;
  top: 5px;
  left: 15px;
  font-size: 0.8em;
  color: var(--neon-green);
  opacity: 0.7;
}


.quiz-container::after {
  content: '</Quiz>';
  position: absolute;
  bottom: 5px;
  right: 15px;
  font-size: 0.8em;
  color: var(--neon-green);
  opacity: 0.7;
}


.quiz-question {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--neon-green);
  text-align: center;
  padding: 10px;
  background: rgba(57, 255, 20, 0.1);
  border-radius: 5px;
}


.quiz-options {
  display: flex;
  flex-direction: column;
}


.quiz-option {
  cursor: pointer;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: rgba(97, 218, 251, 0.1);
  color: var(--react-blue);
  font-size: 1em;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
}


.quiz-option::before {
  content: '{ }';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
  font-size: 1.2em;
  color: var(--react-blue);
}


.quiz-option.correct::before {
  content: '{✔}'; 
  color: #009200; 
}


.quiz-option.wrong::before {
  content: '{✘}';
  color:#811111; 
}


.quiz-option.wrong {
  background-color: #eb6c6b;
}


.quiz-option.correct {
  background-color: rgb(85, 207, 85);
}


.quiz-result {
  font-size: 1.2em;
  color: var(--neon-green);
}


.quiz-result h2 {
  margin-bottom: 20px;
}


.quiz-result p {
  margin: 10px 0;
  text-align: left;
}


button {
  background-color: var(--react-blue);
  border: none;
  color: var(--dark-bg);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  position: relative;
  overflow: hidden;
}


button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
  z-index: 1;
  transition: all 0.3s ease;
}


button:hover::before {
  left: 100%;
}


button:hover {
  box-shadow: 0 0 10px var(--react-blue);
}


@media (max-width: 600px) {
  .App-header h1 {
    font-size: 2em;
  }
  
  .quiz-question {
    font-size: 1.2em;
  }
  
  .quiz-option {
    font-size: 0.9em;
  }
}

    `,
  },
  {
    taskId: "Profile-Popup-Animation",
    title: "Profile Popup Animation",
    css: `
    .app-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #111;
      color: #fff;
      font-family: "Arial", sans-serif;
    }
    
    .profile-container {
      background-color: #222;
      border-radius: 20px;
      padding: 30px;
      max-width: 600px;
      width: 100%;
      position: relative;
    }
    
    .info-table {
      border-collapse: separate;
      border-spacing: 0 10px;
      margin-bottom: 20px;
    }
    
    .table-row {
      background-color: #333;
      transition: background-color 0.3s ease;
    }
    
    .table-row:hover {
      background-color: #444;
    }
    
    .table-cell {
      padding: 15px;
      border-radius: 5px;
    }
    
    .table-cell:first-child {
      font-weight: bold;
      color: #888;
    }
    
    .btn {
      background-color: #444;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s ease;
      margin-top: 20px;
    }
    
    .btn:hover {
      background-color: #555;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .popup {
      background-color: #222;
      padding: 30px;
      border-radius: 15px;
      max-width: 500px;
      width: 100%;
      position: relative;
      box-shadow: 10px 10px 25px rgba(153, 153, 153, 0.5);
      overflow: hidden;
      border: #777 0.1px solid;
    }
    
    .popup::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: linear-gradient(45deg, #ff00ff, #00ffff, #ff8800, #00ff00);
      z-index: -1;
      filter: blur(20px);
      animation: borderGlow 10s linear infinite;
    }
    
    .popup::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background-color: #222;
      border-radius: 13px;
      z-index: -1;
    }
    
    @keyframes borderGlow {
      0% {
        filter: blur(20px) hue-rotate(0deg);
      }
      100% {
        filter: blur(20px) hue-rotate(360deg);
      }
    }
    
    .popup-title {
      font-size: 28px;
      margin-bottom: 20px;
      color: #fff;
      text-align: center;
    }
    
    .popup-text {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 15px;
      color: #ddd;
    }
    
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .close-btn:hover {
      color: #ff00ff;
      transform: rotate(90deg);
    }
    
    `,
  },
  {
    taskId: "Movies4u",
    title: "Movies 4 You",
    css: `
    /* General styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #141414;
  color: #fff;
}

.app-container {
  min-height: 100vh;
}

/* Header styles */
.header {
  background-color: transparent;
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
}

.menu {
  display: flex;
  gap: 1rem;
}

.menu-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.menu-button {
  display: none;
}

/* Mobile menu */
.mobile-menu {
  display: none;
}

.mobile-menu.open {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #141414;
  padding: 1rem 2rem;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
}

.mobile-menu-item {
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 0;
  font-size: 2rem;
}

/* Slider styles */
.slider-container {
  height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 10%;
  left: 10%;
  right: 10%;
  color: #fff;
  z-index: 1;
}

.slide-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.slide-description {
  font-size: 1rem;
}

.slider-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
  z-index: 2;
}

.nav-button {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
}

.thumbnail-container {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.thumbnail {
  width: 100px;
  height: 60px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail:hover,
.thumbnail.active {
  opacity: 1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .menu-button {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 3;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-menu.open {
    display: block;
  }
}

/* Search bar */
.search-bar {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  margin-right: 1rem;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.modal-content {
  background: #fff;
  color: #000;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  text-align: center;
  width: 80%;
  max-width: 500px;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.modal-description {
  font-size: 1rem;
}

    `,
  },
  {
    taskId: "Natures-Beauty",
    title: "Natures Beauty",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  min-height: 100vh;
  width: 100%;

  background-color: #217c24;
  background-image: linear-gradient(62deg, #217c24 22%, #0b4e0c 100%);

  overflow-x: hidden;
  transform-style: preserve-3d;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 3rem;
}

.menu {
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  /* border: 1px solid white; */
}

.logo {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 4rem;
}

.logo span {
  font-weight: 300;
}

.hamburger-menu {
  height: 4rem;
  width: 3rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bar {
  width: 1.9rem;
  height: 1.5px;

  border-radius: 2px;
  background-color: #eee;
  transition: 0.5s;
  position: relative;
}

.bar::before,
.bar::after {
  content: "";

  position: absolute;
  width: inherit;
  height: inherit;
  background: #eee;
  transition: 0.5s;
}

.bar::before {
  transform: translateY(-9px);
}

.bar::after {
  transform: translateY(9px);
}

.container.active .bar {
  transform: rotate(360deg);
  background-color: transparent;
}

.main {
  position: relative;

  width: 100%;
  left: 0;
  z-index: 5;
  overflow: hidden;
  transform-origin: left;
  transition: 0.5s;
}

header {
  min-height: 100vh;
  width: 100%;
  background: url("/images/bg.jpg") no-repeat top center / cover;
  position: relative;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #0000006b;

  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  max-width: 45rem;
  text-align: center;
  color: #fff;

  padding: 0 2rem;
}

.title {
  font-size: 4rem;
}

.btn {
  margin-top: 1rem;
  padding: 0.6rem 1.8rem;
  background-color: #29b546;
  border: none;
  outline: none;
  border-radius: 25px;

  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
}

.container.active .bar::before {
  transform: translateY(0) rotate(45deg);
}
.container.active .bar::after {
  transform: translateY(0) rotate(-45deg);
}

.container.active .main {
  cursor: pointer;
  transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
}

.links {
  position: absolute;
  width: 30%;
  right: 0;
  top: 0;
  height: 100vh;

  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
}

.links a {
  text-decoration: none;
  color: #eee;

  padding: 0.7rem 0;

  display: inline-block;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  letter-spacing: 1px;
  transition: 0.3s;
  transform: translateY(10px);

  animation: hide 0.5s forwards ease;
}

.links a:hover {
  transform: scale(1.05);
}

.container.active .links a {
  animation: appear 0.5s forwards ease var(--i);
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes hide {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: 0.5s;
  z-index: -1;

  border: 2px solid black;
}

.shadow.one {
  z-index: -1;
  opacity: 0.15;
}

.shadow.two {
  z-index: -2;
  opacity: 0.1;
}

.container.active .shadow.one {
  transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
}

.container.active .shadow.two {
  transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
}

.container.active .main:hover + .shadow.one {
  transform: perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5);
}
.container.active .main:hover + .shadow.two {
  transform: perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5);
}

.container.active .main:hover {
  transform: perspective(1300px) rotateY(20deg) translateZ(340px) scale(0.5);
}

    `,
  },
  {
    taskId: "Captcha-Guard",
    title: "Captcha Guard",
    css: `
    :root {
      --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --text-color: #ffffff;
      --input-bg: rgba(255, 255, 255, 0.1);
      --button-gradient: linear-gradient(
        45deg,
        #ff9a9e 0%,
        #fad0c4 99%,
        #fad0c4 100%
      );
      --success-color: #4ade80;
      --error-color: #f87171;
    }
    
    body {
      font-family: "Poppins", sans-serif;
      background: var(--bg-gradient);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      color: var(--text-color);
    }
    
    .container {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 3rem;
      width: 380px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      background-clip: padding-box; 
    }
    
    .container:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.35);
    }
    
    .title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-align: center;
      background: linear-gradient(to right, #fff, #ffe4e1);
      -webkit-background-clip: text;
      background-clip: text; /* Standard */
      -webkit-text-fill-color: transparent;
    }
    
    .captcha {
      background: var(--input-bg);
      border-radius: 15px;
      padding: 2rem 1rem;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .captcha::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      animation: ripple 15s linear infinite;
    }
    
    @keyframes ripple {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .captcha h3 {
      font-size: 2.5rem;
      letter-spacing: 8px;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(to right, #fff, #ffd1dc);
      -webkit-background-clip: text;
      background-clip: text; 
      -webkit-text-fill-color: transparent;
      position: relative;
      z-index: 1;
    }
    
    .user-input {
      width: 100%;
      padding: 1rem;
      background: var(--input-bg);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      font-size: 1.1rem;
      color: var(--text-color);
      margin-bottom: 2rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
      background-clip: padding-box; 
    }
    
    .user-input:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }
    
    .user-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .button-container {
      display: flex;
      gap: 1rem;
    }
    
    button {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      position: relative;
      overflow: hidden;
      background-clip: padding-box; 
    }
    
    button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: all 0.5s;
    }
    
    button:hover::before {
      left: 100%;
    }
    
    .check-btn {
      background: var(--button-gradient);
      color: #2d3748;
    }
    
    .generate-btn {
      background: rgba(255, 255, 255, 0.2);
      color: var(--text-color);
    }
    
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
    }
    
    .message-container {
      margin-top: 2rem;
      text-align: center;
    }
    
    .message {
      font-size: 1.1rem;
      padding: 1rem;
      border-radius: 12px;
      transition: all 0.3s ease;
      animation: fadeInUp 0.5s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .message.success {
      background: rgba(74, 222, 128, 0.2);
      color: var(--success-color);
    }
    
    .message.error {
      background: rgba(248, 113, 113, 0.2);
      color: var(--error-color);
    }
    
    .fa-robot,
    .fa-circle-check,
    .fa-triangle-exclamation {
      margin-right: 0.5rem;
    }
    
    `,
  },
  {
    taskId: "Calculator",
    title: "Calculator",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&family=Spartan:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: hsl(222, 26%, 31%);
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Spartan", sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

header h3 {
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1.5em;
}

.calculator {
  width: 500px;
}

.theme {
  text-align: center;
  display: flex;
  position: relative;
}

.theme h4 {
  position: absolute;
  left: -90%;
  top: 50%;
}

.toggle {
  margin: 0.5rem 0;
}

.background {
  background-color: hsl(218, 30%, 18%);
  width: 80px;
  height: 25px;
  border-radius: 1rem;
  position: relative;
}

.circle {
  background: hsl(6, 63%, 50%);
  height: 67%;
  width: 17px;
  border-radius: 1rem;
  position: absolute;
  top: 15%;
  left: 5%;
  cursor: pointer;
}

span {
  font-size: 0.8em;
}

.display {
  width: 95%;
  height: 150px;
  background: hsl(218, 32%, 15%);
  border-radius: 1rem;
  text-align: right;
  line-height: 150px;
  padding-right: 1rem;
  font-size: 3.5em;
  margin-left: 2%;
  overflow-x: hidden;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  gap: 10px;
  background: hsl(218, 30%, 21%);
  width: 95%;
  margin-left: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
}

button {
  width: 100%;
  height: 70px;
  cursor: pointer;
  background: hsl(30, 25%, 89%);
  color: hsl(221, 14%, 31%);
  font-size: 1.2em;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  box-shadow: 0 -5px 0 rgba(0, 0, 0, 0.3) inset;
  transition: 0.2s ease-in-out;
}

button:hover {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

#equal {
  background: hsl(6, 63%, 50%);
  color: white;
  grid-column: span 2;
}

#equal:hover {
  background: hsl(6, 98%, 61%);
}

#reset {
  grid-column: span 2;
}

#del,
#reset {
  background-color: hsl(221, 27%, 46%);
  color: white;
  box-shadow: 0 -5px 0 rgba(0, 0, 0, 0.5) inset;
}

#del:hover,
#reset:hover {
  background-color: white;
  color: hsl(221, 27%, 46%);
}

.one,
.two,
.three {
  padding: 0 0.5rem;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .calculator {
    width: 100%;
  }
  header {
    width: 350px;
    margin: 0 auto;
  }
}

    `,
  },
  {
    taskId: "Copy-To-Clipboard",
    title: "Copy To Clipboard",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.clipboard-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.clipboard-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  max-width: 32rem;
  width: 100%;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.clipboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.clipboard-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -1px;
}

.clipboard-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.clipboard-textarea {
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
}

.clipboard-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.25);
}

.clipboard-button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.clipboard-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.clipboard-button:active {
  transform: translateY(0);
}

.clipboard-button.copied {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.clipboard-textarea,
.clipboard-button {
  animation: fadeIn 0.5s ease-out;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .clipboard-card {
    padding: 2rem;
  }

  .clipboard-title {
    font-size: 2rem;
  }
}

    `,
  },
  {
    taskId: "English-Dictionary",
    title: "English Dictionary",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #119fb8 0%, #7c378d 100%);
  }
  
  ::selection {
    color: #fff;
    background: #764ba2;
  }
  
  .wrapper {
    width: 450px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .wrapper header {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #333;
    margin-bottom: 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .wrapper .search {
    position: relative;
    margin-bottom: 25px;
  }
  
  .search input {
    height: 55px;
    width: 100%;
    outline: none;
    font-size: 18px;
    border-radius: 30px;
    padding: 0 60px 0 25px;
    border: 2px solid #ddd;
    transition: all 0.3s ease;
  }
  
  .search input:focus {
    border-color: #764ba2;
    box-shadow: 0 0 10px rgba(118, 75, 162, 0.3);
  }
  
  .search input::placeholder {
    color: #999;
  }
  
  .search span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 22px;
    color: #764ba2;
    transition: color 0.3s ease;
  }
  
  .search span:hover {
    color: #667eea;
  }
  
  .search-btn {
    display: block;
    width: 200px;
    height: 50px;
    margin: 0 auto 25px;
    background: linear-gradient(135deg, #af66ea 0%, #4b9fa2 100%);
    color: #fff;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .search-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
  }
  
  .wrapper .info-text {
    font-size: 15px;
    color: #666;
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.5;
  }
  
  .wrapper ul {
    padding: 0;
    transition: all 0.3s ease;
  }
  
  .wrapper ul li {
    list-style: none;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  ul li:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  ul .word p {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
  }
  
  ul .word span {
    font-size: 16px;
    color: #764ba2;
  }
  
  ul .content {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
  }
  
  ul .content::-webkit-scrollbar {
    width: 6px;
  }
  
  ul .content::-webkit-scrollbar-thumb {
    background: #764ba2;
    border-radius: 3px;
  }
  
  .content li .details {
    padding-left: 20px;
    border-left: 4px solid #764ba2;
    margin-top: 15px;
  }
  
  .content li p {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .content li span {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  
  .content .synonyms .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  .content .synonyms span {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    background: rgba(118, 75, 162, 0.1);
    color: #764ba2;
    transition: all 0.3s ease;
  }
  
  .content .synonyms span:hover {
    background: #764ba2;
    color: #fff;
  }
  
    `,
  },
  {
    taskId: "day1",
    title: "Day 1: Navbar",
    css: `
    /* Main Navbar Styling */
    body {
      margin: 0;
    }
.navbar {
  background: linear-gradient(to right, #6a0dad, #1e3a8a);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0 16px;
}

.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.brand-name {
  font-size: 24px;
  font-weight: bold;
}

.navbar-list {
  display: flex;
  gap: 32px;
  list-style: none;
  padding-left: 0;
}
.navbar-list ul{
  list-style: none;
}

.navbar-item {
  position: relative;
}

.navbar-item a {
  text-decoration: none;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  font-size: 16px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
}

.chevron-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}

/* Hover effect for showing dropdown */
.navbar-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 0;
  border: 1px solid #f3f4f6;
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 10;
  
}

.dropdown-item {
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}

/* Sub Dropdown */
.sub-dropdown-menu {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 180px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 0;
  border: 1px solid #f3f4f6;
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

/* Show sub-dropdown when parent item is hovered */
.dropdown-item:hover .sub-dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.sub-dropdown-item {
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.sub-dropdown-item:hover {
  background-color: #f3f4f6;
}

/* Burger Menu */
.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.navbar-toggle .bar {
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 2px;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .navbar-list {
    display: none; 
    flex-direction: column;
    gap: 16px;
    width: 100%;
    background: linear-gradient(to right, #6a0dad, #1e3a8a);
    position: absolute;
    top: 64px;
    left: 0;
    padding: 16px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateY(-100%);
    opacity: 0;
  }

  .navbar-list.open {
    display: flex;
    transform: translateY(0);
    opacity: 1;
    z-index: 10;
  }

  .navbar-item {
    text-align: center;
  }

  .navbar-toggle {
    display: flex;

  }
}

    `,
  },
  {
    taskId: "day2",
    title: "Day2: Home Page",
    css: `
    /* Global Styles */
:root {
    --gradient-primary: linear-gradient(135deg, #4c1d95 0%, #312e81 100%);
    --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
    --color-primary: #4c1d95;
    --color-secondary: #312e81;
    --color-text: #ffffff;
    --color-text-muted: rgba(255, 255, 255, 0.7);
  }
  
  body {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: var(--gradient-primary);
    color: var(--color-text);
  }
  
  /* Enhanced Hero Section */
  .hero {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .hero-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.1);
    animation: heroZoom 20s infinite alternate ease-in-out;
  }
  
  @keyframes heroZoom {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.3);
    }
  }
  
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(76, 29, 149, 0.9)
    );
    z-index: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 2rem;
    max-width: 800px;
    animation: fadeInUp 1s ease-out;
  }
  
  .hero-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    background: var(--gradient-text);
    -webkit-background-clip: text; 
    background-clip: text; 
    -webkit-text-fill-color: transparent; 
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

  
  .hero-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--color-text-muted);
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  /* Buttons */
  .button-primary {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
    color: white;
    border: none;
    border-radius: 9999px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s;
  }
  
  .button-secondary {
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: white;
    border: none;
    border-radius: 9999px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s;
  }
  
  .button-primary:hover,
  .button-secondary:hover {
    transform: scale(1.05);
  }
  
  /* Stats Section */
  .stats {
    padding: 5rem 2rem;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .stat-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    animation: fadeInUp 1s ease-out;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: var(--color-text-muted);
  }
  
  /* Programs Section */
  .programs {
    padding: 5rem 2rem;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
  }
  
  .section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    background: var(--gradient-text);
    -webkit-background-clip: text; 
    background-clip: text; 
    -webkit-text-fill-color: transparent; 
}

  
  .programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .program-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2rem;
    transition: background-color 0.3s;
  }
  
  .program-card:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .program-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .program-description {
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .feature-dot {
    width: 6px;
    height: 6px;
    background-color: #8b5cf6;
    border-radius: 50%;
  }
  
  /* Testimonials Section */
  .testimonials {
    padding: 5rem 2rem;
  }
  
  .testimonial-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .testimonial-text {
    font-size: 1.25rem;
    font-style: italic;
    margin: 1.5rem 0;
    color: var(--color-text-muted);
  }
  
  .testimonial-author {
    font-weight: 600;
  }
  
  .testimonial-role {
    color: var(--color-text-muted);
  }
  
  .testimonial-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }
  
  .nav-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .nav-dot.active {
    background-color: #8b5cf6;
  }
  
  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-description {
      font-size: 1.25rem;
    }
    
    .button-group {
      flex-direction: column;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
    `,
  },
  {
    taskId: "day3",
    title: "Day3: about.css",
    css: `
    /* About Page Styles */
    .about {
        padding: 2rem;
        color: var(--color-text);
      }
      
      .about-intro {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
        margin-bottom: 4rem;
      }
      
      .about-content {
        flex: 1;
      }
      
      .about-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        background: var(--gradient-text);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .about-description {
        font-size: 1.2rem;
        color: var(--color-text-muted);
        line-height: 1.8;
      }
      
      .about-image img {
        max-width: 100%;
        border-radius: 1rem;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
      
      .mission {
        text-align: center;
        margin-bottom: 4rem;
      }
      
      .mission-description {
        font-size: 1.5rem;
        color: var(--color-text-muted);
        max-width: 600px;
        margin: 0 auto;
      }
      
      .team {
        margin-bottom: 4rem;
      }
      
      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }
      
      .team-card {
        text-align: center;
      }
      
      .team-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 1rem;
        object-fit: cover;
      }
      
      .team-name {
        font-size: 1.2rem;
        font-weight: bold;
      }
      
      .team-role {
        color: var(--color-text-muted);
      }
      
      .achievements {
        text-align: center;
      }
      
      .achievement-list {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        max-width: 600px;
        color: var(--color-text-muted);
        font-size: 1.2rem;
        line-height: 1.8;
      }
      
    `,
    title2: "Day3: footer.css",
    css2: `
    /* Footer Styles */
    .footer {
        background: linear-gradient(to right, #1e3a8a,#6a0dad);
        color: var(--color-light);
        padding: 2rem 1rem;
        margin-top: 4rem;
      }
      
      .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
      }
      
      .footer-section {
        flex: 1;
        min-width: 200px;
      }
      
      .footer-section h3,
      .footer-section h4 {
        margin-bottom: 1rem;
        color: var(--color-light);
      }
      
      .footer-section p,
      .footer-section ul {
        color: var(--color-light-muted);
        line-height: 1.8;
      }
      
      .footer-section ul {
        list-style: none;
        padding: 0;
      }
      
      .footer-section ul li {
        margin-bottom: 0.5rem;
      }
      
      .footer-section ul li a {
        text-decoration: none;
        color: var(--color-light-muted);
        transition: color 0.3s;
      }
      
      .footer-section ul li a:hover {
        color: var(--color-accent);
      }
      
      .footer-bottom {
        text-align: center;
        margin-top: 2rem;
        border-top: 1px solid var(--color-light-muted);
        padding-top: 1rem;
        font-size: 0.9rem;
        color: var(--color-light-muted);
      }
      
    `,
  },
  {
    taskId: "day4",
    title: "services.css",
    css: `
    .services-page {
      padding: 2rem;
      color: var(--color-text);
    }
    
    .services-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .services-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .services-header p {
      font-size: 1.2rem;
      color: var(--color-text-muted);
    }
    
    .lessons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
    
    .lesson-card {
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 1rem;
      text-align: center;
      padding: 1.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .lesson-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
    
    .lesson-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
    
    .lesson-card h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }
    
    .lesson-card p {
      font-size: 1rem;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }
    
    .lesson-card .price {
      font-weight: bold;
      color: var(--color-text);
      margin-bottom: 1rem;
    }
    
    .learn-more-btn {
      display: inline-block;
      background: var(--gradient-button);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .learn-more-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    `,
    title2: "blog.css",
    css2: `
    .blog-page {
      padding: 2rem;
      color: var(--color-text);
    }
    
    .blog-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .blog-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .blog-header p {
      font-size: 1.2rem;
      color: var(--color-text-muted);
    }
    
    .blog-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .blog-card {
      display: flex;
      gap: 1.5rem;
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .blog-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
    
    .blog-thumbnail {
      width: 150px;
      height: 150px;
      border-radius: 1rem;
      object-fit: cover;
    }
    
    .blog-content h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .blog-content .date {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      margin-bottom: 0.5rem;
    }
    
    .blog-content p {
      font-size: 1rem;
      color: var(--color-text-muted);
    }
    
    .read-more-btn {
      display: inline-block;
      background: var(--gradient-button);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .read-more-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    `,
  },
  {
    taskId: "day5",
    title: "contactus.css",
    css: `
    /* Contact Us Page */
    .contact-us-page {
        text-align: center;
        padding: 5rem 2rem;
      }
      
      .contact-info {
        margin-bottom: 2rem;
        color: var(--color-text-muted);
        font-size: 1.25rem;
        text-align: center;
      }
      
      .google-maps iframe {
        width: 50%;
        height: 450px;
        border-radius: 1rem;
        max-width: 100%;
        margin-top: 2rem;
      }
      
      .contact-form {
        max-width: 600px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
      }
      
      .contact-form label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
        color: var(--color-text);
      }
      
      .contact-form input,
      .contact-form textarea {
        width: 80%;
        padding: 1rem;
        margin-bottom: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        color: var(--color-text);
        font-size: 1rem;
      }
      
      .contact-form textarea {
        resize: vertical;
        min-height: 150px;
      }
      
      .contact-form button {
        width: 80%;
        padding: 1rem;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 9999px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s;
      }
      
      .contact-form button:hover {
        transform: scale(1.05);
      }
      
      .contact-form input:focus,
      .contact-form textarea:focus,
      .contact-form button:focus {
        outline: none;
        border-color: var(--gradient-primary);
      }
      
    `,
    title2: "testimonials.css",
    css2: `
    /* Testimonials Section */
.testimonials {
    padding: 5rem 2rem;
    backdrop-filter: blur(10px);
  }
  
  .testimonial-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    gap: 20px;
    transition: background-color 0.3s;
  }
  
  .testimonial-card:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .testimonial-text {
    font-size: 1.25rem;
    font-style: italic;
    margin: 1.5rem 0;
    color: var(--color-text-muted);
  }
  
  .testimonial-author {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-text);
  }
  
  .testimonial-role {
    color: var(--color-text-muted);
    font-size: 1rem;
  }
  
  .testimonial-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }
  
  .nav-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .nav-dot.active {
    background-color: #8b5cf6;
  }
  
  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .testimonial-card {
    animation: fadeInUp 1s ease-out;
  }
  
    `,
  },
  {
    taskId: "Total-Compensation-Calculator",
    title: "styles.css",
    css: `
     
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f4f4f4;
      line-height: 1.6;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
    }
    
    form {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-weight: 600;
      color: #555;
    }
    
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
      transition: border-color 0.3s ease;
    }
    
    input:focus {
      outline: none;
      border-color: #007BFF;
    }
    
    button {
      margin: 5px;
      padding: 5px 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:disabled {
      background-color: #ccc;
    }
    
    button:hover {
      background-color: #0056b3;
    }
    
    .error {
      color: red;
      margin-bottom: 20px;
      text-align: center;
    }
    
    /* Tooltip styles */
    .info-tooltip {
      display: inline-flex;
      align-items: center;
      margin-left: 10px;
      position: relative;
      color: #007BFF;
    }
    
    .info-tooltip svg {
      cursor: pointer;
    }
    
    .tooltip-text {
      visibility: hidden;
      width: 250px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 8px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s, visibility 0.3s;
      font-size: 0.9em;
    }
    
    .info-tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
    
    /* Table styles */
    table {
      width: 80%;
      max-width: 1000px;
      margin: 20px auto;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 10px;
      text-align: center;
      border: 1px solid #ddd;
    }
    
    th {
      background-color: #f4f4f4;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    `,
  },
  {
    taskId: "Therapist-Calendar-App",
    title: "TherapistScheduler",
    css: `
    .ultra-modern-scheduler {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      background: linear-gradient(135deg, #2980b9 0, #00ced1 100%);
      font-family: "Inter", -apple-system, system-ui, sans-serif;
      color: #1a1f36;
    }
    
    .scheduler-glass {
      background: rgba(255, 255, 255, 0.815);
      backdrop-filter: blur(20px);
      border-radius: 32px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      width: 100%;
      max-width: 1000px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .scheduler-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    .header-title {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .header-title h1 {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #4649e5 0%, #3a6aed 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }
    
    .header-icon {
      color: #466be5;
    }
    
    .current-date {
      font-size: 1.25rem;
      font-weight: 600;
      color: #468be5;
    }
    
    .scheduler-content {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 3rem;
    }
    
    /* Calendar Styles */
    .calendar-section {
      background: white;
      border-radius: 24px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
    
    .calendar-navigation {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    
    .nav-btn {
      background: none;
      border: none;
      color: #468be5;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 12px;
      transition: all 0.3s ease;
    }
    
    .nav-btn:hover {
      background: #f5f3ff;
    }
    
    .calendar-grid {
      margin-bottom: 2rem;
    }
    
    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      margin-bottom: 1rem;
    }
    
    .weekday {
      font-weight: 600;
      color: #6b7280;
      font-size: 0.875rem;
      padding: 0.5rem;
    }
    
    .days-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.5rem;
      transition: opacity 0.3s ease;
    }
    
    .days-grid.animating {
      opacity: 0;
    }
    
    .day-cell {
      aspect-ratio: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.875rem;
      color: #1f2937;
    }
    
    .day-cell:hover:not(:disabled) {
      background: #f5f3ff;
    }
    
    .day-cell.other-month {
      opacity: 0.3;
    }
    
    .day-cell.today {
      font-weight: 600;
      color: #468be5;
    }
    
    .day-cell.selected {
      background: #468be5;
      color: white;
      font-weight: 600;
    }
    
    .day-cell.has-appointment::after {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: #468be5;
      border-radius: 50%;
    }
    
    .day-cell.selected.has-appointment::after {
      background: white;
    }
    
    .selection-indicator {
      position: absolute;
      inset: 2px;
      border-radius: 10px;
      border: 2px solid #468be5;
      pointer-events: none;
      opacity: 0;
      animation: pulseSelect 2s infinite;
    }
    
    @keyframes pulseSelect {
      0% {
        transform: scale(0.95);
        opacity: 0.6;
      }
      50% {
        transform: scale(1);
        opacity: 0.8;
      }
      100% {
        transform: scale(0.95);
        opacity: 0.6;
      }
    }
    
    .time-slots {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      margin-bottom: 2rem;
    }
    
    .time-slot {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      background: #f8fafc;
      border: 2px solid transparent;
      border-radius: 12px;
      color: #4a5568;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .time-slot:hover:not(:disabled) {
      border-color: #468be5;
      background: #f5f3ff;
    }
    
    .time-slot.selected {
      background: #468be5;
      border-color: #468be5;
      color: white;
      transform: scale(1.05);
    }
    
    .time-slot.selected svg {
      color: white;
    }
    
    .time-slot.booked {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .schedule-btn {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #46b8e5 0%, #3a79ed 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    
    .schedule-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
    }
    
    .schedule-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    /* Appointments Section */
    .appointments-section {
      background: white;
      border-radius: 24px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
    
    .appointments-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1a1f36;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #46e5dd 0%, #3ab4ed 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .appointments-grid {
      display: grid;
      gap: 1rem;
    }
    
    .appointment-card {
      background: #f8fafc;
      border-radius: 16px;
      padding: 1.25rem;
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
      animation: slideIn 0.5s ease-out;
    }
    
    .appointment-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      border-color: #468be5;
    }
    
    .appointment-date {
      font-weight: 600;
      color: #1a1f36;
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }
    
    .appointment-time {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #468be5;
      font-size: 0.875rem;
    }
    
    /* Confirmation Animation */
    .confirmation-animation {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(79, 70, 229, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeInOut 1.5s ease-in-out;
    }
    
    .confirmation-animation::after {
      content: "✓";
      font-size: 8rem;
      color: #468be5;
      animation: checkmark 1.5s ease-out;
    }
    
    /* Notification Styles */
    .notification {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1rem 1.5rem;
      border-radius: 16px;
      color: white;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      animation: slideInRight 0.3s ease-out;
      z-index: 1000;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .notification.success {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }
    
    .notification.error {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    .check-icon {
      width: 20px;
      height: 20px;
      animation: checkBounce 0.5s ease-out;
    }
    
    /* Animations */
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes fadeInOut {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    @keyframes checkmark {
      0% {
        transform: scale(0) rotate(-45deg);
        opacity: 0;
      }
      50% {
        transform: scale(1.2) rotate(0deg);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }
    }
    
    @keyframes checkBounce {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    
    /* Responsive Styles */
    @media (max-width: 1024px) {
      .scheduler-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    
      .time-slots {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .ultra-modern-scheduler {
        padding: 1rem;
      }
    
      .scheduler-glass {
        padding: 1.5rem;
        border-radius: 24px;
      }
    
      .header-title h1 {
        font-size: 1.5rem;
      }
    
      .time-slots {
        grid-template-columns: 1fr;
      }
    
      .calendar-section,
      .appointments-section {
        padding: 1.5rem;
      }
    }
    
    `,
  },
  {
    taskId: "day18",
    title: "navbar.css",
    css: `
    /*  Navbar  */
    .navbar {
      background: linear-gradient(to right, #6a0dad, #1e3a8a);
      color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 16px 0;
    }
    
    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      padding: 0 16px;
    }
    
    .navbar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
    }
    
    .brand-name {
      font-size: 24px;
      font-weight: bold;
    }
    
    .navbar-list {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
      padding-left: 0;
    }
    
    .navbar-list ul {
      list-style: none;
    }
    
    .navbar-item {
      position: relative;
    }
    
    .navbar-item > .dropdown-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px;
      text-decoration: none;
      color: white;
      font-size: 16px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    
    .dropdown-toggle {
      display: block;
      width: 100%;
      padding: 5px;
      text-decoration: none;
      color: white;
      font-size: 16px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    
    .chevron-icon {
      width: 16px;
      height: 16px;
      transition: transform 0.2s;
    }
    
    
    .navbar-item:hover .dropdown-menu {
      display: block;
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .dropdown-menu {
      position: absolute;
      left: 0;
      top: 100%;
      min-width: 200px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 8px 0;
      margin-top: 0;
      border: 1px solid #f3f4f6;
      display: none;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all 0.3s ease;
      z-index: 10;
    }
    
    .dropdown-item {
      padding: 8px 16px;
      font-size: 14px;
      color: #374151;
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }
    
    .dropdown-item:hover {
      background-color: #f3f4f6;
    }
    
    /* Sub Dropdown */
    .sub-dropdown-menu {
      position: absolute;
      left: 100%;
      top: 0;
      min-width: 200px; 
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 4px 0; 
      margin-top: 0;
      border: 1px solid #f3f4f6;
      display: none;
      opacity: 0;
      visibility: hidden;
      transform: translateX(10px);
      transition: all 0.3s ease;
    }
    
    
    .dropdown-item:hover .sub-dropdown-menu {
      display: block;
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
    
    .sub-dropdown-item {
      padding: 6px 12px; 
      font-size: 14px;
      color: #374151;
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }
    
    .sub-dropdown-menu .sub-dropdown-item a {
      display: block;
      width: 100%;
      padding: 6px 12px; 
      text-decoration: none;
      color: #374151;
    }
    
    .sub-dropdown-item:hover {
      background-color: #f3f4f6;
    }
    
    /* Burger Menu */
    .navbar-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
      cursor: pointer;
    }
    
    .navbar-toggle .bar {
      height: 4px;
      width: 100%;
      background-color: white;
      border-radius: 2px;
    }
    
    /* Auth Button  */
    .auth-button {
      background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
      color: white;
      padding: 8px 16px;
      border-radius: 9999px;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s;
    }
    
    .auth-button:hover {
      transform: scale(1.05);
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .navbar-list {
        display: none;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        background: linear-gradient(to right, #6a0dad, #1e3a8a);
        position: absolute;
        top: 64px;
        left: 0;
        padding: 16px 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: translateY(-100%);
        opacity: 0;
      }
    
      .navbar-list.open {
        display: flex;
        transform: translateY(0);
        opacity: 1;
        z-index: 10;
      }
    
      .navbar-item {
        text-align: center;
      }
    
      .navbar-toggle {
        display: flex;
      }
    }
    `,
    title2: "auth.css",
    css2: `
    .auth-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #6211cc, #1e3a8a);
      padding: 20px;
    }
    
    .auth-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 2rem;
      width: 100%;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .auth-card h2 {
      margin-bottom: 1.5rem;
      color: white;
    }
    
    .form-group {
      margin-bottom: 1rem;
      text-align: left;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    .form-group input {
      width: calc(100% - 1.5rem);
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      margin: 0;
    }
    
    .form-group input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    
    .auth-button {
      width: 100%;
      padding: 0.75rem;
      background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .auth-button:hover {
      transform: scale(1.05);
    }
    
    .toggle-auth {
      color: #e9d5ff;
      cursor: pointer;
      text-decoration: underline;
    }
    
    .toggle-auth:hover {
      color: #d8b4fe;
    }
    
    .form-group select {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      appearance: none;
      cursor: pointer;
    }
    
    .form-group select option {
      background: #6d28d9;
      color: white;
    }
    
    .form-group .select-wrapper {
      position: relative;
    }
    
    .form-group .select-wrapper::after {
      content: "▼";
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.7);
      pointer-events: none;
    }
    
    `,
  },
  {
    taskId: "day19",
    title: "auth.css",
    css: `
    .auth-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #6211cc, #1e3a8a);
      padding: 20px;
    }
    
    .auth-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 2rem;
      width: 100%;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .auth-card h2 {
      margin-bottom: 1.5rem;
      color: white;
    }
    
    .form-group {
      margin-bottom: 1rem;
      text-align: left;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    .form-group input {
      width: calc(100% - 1.5rem);
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      margin: 0;
    }
    
    .form-group input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
    
    .auth-button {
      width: 100%;
      padding: 0.75rem;
      background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .auth-button:hover {
      transform: scale(1.05);
    }
    
    .toggle-auth {
      color: #e9d5ff;
      cursor: pointer;
      text-decoration: underline;
    }
    
    .toggle-auth:hover {
      color: #d8b4fe;
    }
    
    .form-group select {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      appearance: none;
      cursor: pointer;
    }
    
    .form-group select option {
      background: #6d28d9;
      color: white;
    }
    
    .form-group .select-wrapper {
      position: relative;
    }
    
    .form-group .select-wrapper::after {
      content: "▼";
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.7);
      pointer-events: none;
    }
    
    `,
    title2: "navbar.css",
    css2: `
    /*  Navbar  */
.navbar {
  background: linear-gradient(to right, #6a0dad, #1e3a8a);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0 16px;
}

.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.brand-name {
  font-size: 24px;
  font-weight: bold;
}

.navbar-list {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  padding-left: 0;
}



.navbar-list ul {
  list-style: none;
}

.navbar-item {
  position: relative;
}

.navbar-item a,
.navbar-item a:visited {
  color: white;
}

.navbar-item > .dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.dropdown-toggle {
  display: block;
  width: 100%;
  padding: 5px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.chevron-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}


.navbar-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 0;
  border: 1px solid #f3f4f6;
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 10;
}

.dropdown-item {
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.dropdown-item a,
.dropdown-item a:visited {
  color: #374151;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}

.dropdown-item button {
  background: none;
  border: none;
  color: #374151; /* Ensure the text color is visible */
  font-size: 14px;
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-item button:hover {
  background-color: #f3f4f6; /* Add hover effect */
}

/* Sub Dropdown */
.sub-dropdown-menu {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 200px; 
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 4px 0; 
  margin-top: 0;
  border: 1px solid #f3f4f6;
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;
}


.dropdown-item:hover .sub-dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.sub-dropdown-item {
  padding: 6px 12px; 
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.sub-dropdown-menu .sub-dropdown-item a {
  display: block;
  width: 100%;
  padding: 6px 12px; 
  text-decoration: none;
  color: #374151;
}

.sub-dropdown-item a,
.sub-dropdown-item a:visited {
  color: #374151;
}

.sub-dropdown-item:hover {
  background-color: #f3f4f6;
}

/* Burger Menu */
.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.navbar-toggle .bar {
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 2px;
}

/* Auth Button  */
.auth-button {
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s;
}

.auth-button:hover {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-list {
    display: none;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    background: linear-gradient(to right, #6a0dad, #1e3a8a);
    position: absolute;
    top: 64px;
    left: 0;
    padding: 16px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateY(-100%);
    opacity: 0;
  }

  .navbar-list.open {
    display: flex;
    transform: translateY(0);
    opacity: 1;
    z-index: 10;
  }

  .navbar-item {
    text-align: center;
  }

  .navbar-toggle {
    display: flex;
  }
}
    `,
  },
  {
    taskId: "day20",
    title: "profileSetup.css",
    css: `
    .profile-setup-container {
      min-height: 100vh;
      padding: 2rem;
      background: linear-gradient(135deg, #1e3a8a, #6211cc);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .profile-setup-form {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 2.5rem;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .profile-setup-container h1 {
      color: white;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      font-weight: 600;
    }
    
    .profile-setup-container h2 {
      color: white;
      font-size: 1.5rem;
      margin: 1.5rem 0;
      font-weight: 500;
    }
    
    .profile-setup-form > div {
      margin-bottom: 1.5rem;
    }
    
    .profile-setup-form label {
      display: block;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 0.95rem;
    }
    
    /* Inputs */
    .profile-setup-form input,
    .profile-setup-form textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .profile-setup-form input:focus,
    .profile-setup-form textarea:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }
    
    .profile-setup-form input::placeholder,
    .profile-setup-form textarea::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
    
    .profile-setup-form textarea {
      min-height: 120px;
      resize: vertical;
    }
    
    .profile-role-section {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 2rem;
    }
    
    .availability-entry {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      align-items: center;
    }
    
    .availability-entry input {
      margin: 0;
    }
    
    .availability-entry button {
      background: rgba(220, 38, 38, 0.8);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }
    
    .availability-entry button:hover {
      background: rgba(220, 38, 38, 1);
      transform: translateY(-1px);
    }
    
    button[type="button"] {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
      margin-top: 1rem;
      width: auto;
    }
    
    button[type="button"]:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
    }
    
    .profile-setup-form button[type="submit"] {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #5d28d9 0%, #4c1d95 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      margin-top: 2rem;
    }
    
    .profile-setup-form button[type="submit"]:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .profile-setup-form button[type="submit"]:active {
      transform: translateY(0);
    }
    
    /* Responsive */
    @media (max-width: 640px) {
      .profile-setup-container {
          padding: 1rem;
      }
      
      .profile-setup-form {
          padding: 1.5rem;
      }
      
      .profile-setup-container h1 {
          font-size: 1.75rem;
      }
      
      .profile-setup-container h2 {
          font-size: 1.25rem;
      }
    
      .availability-entry {
          grid-template-columns: 1fr;
          gap: 0.5rem;
      }
    
      .availability-entry button {
          width: 100%;
      }
    }
    `,
  },
  {
    taskId: "e-commerce-shop",
    title: "index.css",
    css: `
    /* Base styles */
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #bae1ff;
      color: #333;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    
    .App {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    /* Typography */
    h1, h2 {
      color: #26547D;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
    
    /* Form Elements */
    input, 
    select, 
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #dddfba;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      background-color: #fff;
    }
    
    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: #baffc9;
      box-shadow: 0 0 0 3px rgba(186, 255, 201, 0.2);
    }
    
    button {
      background-color: #baffc9;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s ease, transform 0.1s ease;
    }
    
    button:hover {
      background-color: #a3e6b2;
      transform: translateY(-1px);
    }
    
    button:active {
      transform: translateY(0);
    }
    
    /* Search and Filter */
    .search-filter {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      align-items: center;
    }
    
    .search-filter input,
    .search-filter select {
      max-width: 300px;
      flex: 1;
    }
    
    /* Product List */
    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .product-card {
      background-color: #ffffba;
      border: 1px solid #dddfba;
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    
    .product-card img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      object-fit: cover;
    }
    
    /* Shopping Cart */
    .shopping-cart {
      background-color: #ffffba;
      padding: 2rem;
      border-radius: 1rem;
      margin-top: 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #dddfba;
    }
    
    .cart-item:last-child {
      border-bottom: none;
    }
    
    /* Review Pages */
    .review-page,
    .review-form-page {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
    }
    
    .review {
      background-color: #ffffba;
      border: 1px solid #dddfba;
      border-radius: 1rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .review-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .review-textarea {
      min-height: 150px;
      resize: vertical;
      padding: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid #dddfba;
      font-size: 1rem;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .App {
        padding: 1rem;
      }
      
      .search-filter {
        flex-direction: column;
        gap: 1rem;
      }
      
      .search-filter input,
      .search-filter select {
        max-width: 100%;
      }
      
      .product-list {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
    }
    `,
  },
  {
    taskId: "QR-GPS-Tracker",
    title: "styles.css",
    css: `
    /* General Styles */
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #8B5E3C, #D2B48C);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: #4A2C1A;
      overflow: hidden;
    }
    
    .main-container {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      max-width: 500px;
      width: 100%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      position: relative;
      overflow: hidden;
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    
    .main-container::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
      transform: rotate(45deg) translateZ(-100px);
      pointer-events: none;
      animation: rotateBackground 20s linear infinite;
    }
    
    @keyframes rotateBackground {
      0% {
        transform: rotate(0deg) translateZ(-100px);
      }
      100% {
        transform: rotate(360deg) translateZ(-100px);
      }
    }
    
    h1 {
      color: #4A2C1A;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      transform: translateZ(50px);
    }
    
    h2 {
      color: #5E3C2B;
      font-size: 1.8rem;
      margin-top: 1.5rem;
      font-weight: 600;
      transform: translateZ(50px);
    }
    
    p {
      color: #5E3C2B;
      font-size: 1.1rem;
      margin: 0.5rem 0;
      transform: translateZ(50px);
    }
    
    /* QR Scanner Container */
    #qr-scanner {
      margin: 20px auto;
      width: 300px;
      height: 300px;
      border: 4px solid #8B5E3C;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      position: relative;
      transform: translateZ(50px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    #qr-scanner:hover {
      transform: translateZ(50px) scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
    
    #qr-scanner::before {
      content: '';
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
      transform: rotate(45deg) translateZ(-50px);
      pointer-events: none;
      animation: rotateBackground 20s linear infinite;
    }
    
    /* Location Tracker Styles */
    .location-tracker {
      margin-top: 20px;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 15px;
      border: 2px solid #8B5E3C;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      transform: translateZ(50px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .location-tracker:hover {
      transform: translateZ(50px) scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
    
    .location-tracker::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
      transform: rotate(45deg) translateZ(-50px);
      pointer-events: none;
      animation: rotateBackground 20s linear infinite;
    }
    
    /* Button Styles */
    button {
      background: #8B5E3C;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
      transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transform: translateZ(50px);
    }
    
    button:hover {
      background: #A67B5B;
      transform: translateZ(50px) scale(1.05);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    }
    
    /* Framer Motion Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px) translateZ(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0) translateZ(50px);
      }
    }
    
    .fade-in {
      animation: fadeIn 0.8s ease-out;
    }
    `,
  },
  {
    taskId: "day26",
    title: "AdminDashboard.css",
    css: `
    :root {
      --color-border: #ddd;
      --color-primary-hover: #0056b3;
      --color-error: #dc3545;
      --color-error-hover: #a71d2a;
      --gradient-button: linear-gradient(90deg, #007bff, #00bfff);
      --gradient-button-hover: linear-gradient(90deg, #0056b3, #0088cc);
    }

    .admin-dashboard {
      padding: 2rem;
    }
    
    .tabs {
      margin-bottom: 2rem;
    }
    
    .tabs button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
      margin-right: 1rem;
    }
    
    .tabs button.active {
      background: var(--gradient-button);
      color: #fff;
    }
    
    .tabs button:hover {
      background: var(--gradient-button-hover);
    }
    `,
  },
  {
    taskId: "day27",
    title: "BlogListTable.css",
    css: `
    .blog-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .blog-table th,
    .blog-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--color-border);
    }
    
    .blog-table th {
      font-weight: bold;
      color: var(--color-text);
    }
    
    .blog-table tr:hover {
      background-color: var(--color-bg-hover);
    }
    
    .delete-btn,
    .edit-btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.9rem;
      margin-right: 0.5rem;
      transition: background 0.3s ease;
    }
    
    .delete-btn {
      background-color: var(--color-error);
      color: #fff;
    }
    
    .delete-btn:hover {
      background-color: var(--color-error-hover);
    }
    
    .edit-btn {
      background-color: var(--color-primary);
      color: #fff;
    }
    
    .edit-btn:hover {
      background-color: var(--color-primary-hover);
    }
    `,
    title2: "Blogmanagment.css",
    css2: `
    .blog-management {
      background-color: var(--color-bg-secondary);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    `,
    title3: "CreateBlogForm.css",
    css3: `
    .create-blog-form {
      background-color: var(--color-bg-secondary);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: var(--color-text);
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .submit-btn {
      background: var(--gradient-button);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .submit-btn:hover {
      background: var(--gradient-button-hover);
    }
    `,
  },
  {
    taskId: "ZipImage-Extractor",
    title: "styles.css",
    css: `
    /* Main color variables */
    :root {
      --color-lightest: #b2d8d8;
      --color-light: #66b2b2;
      --color-medium: #008080;
      --color-dark: #006666;
      --color-darkest: #004c4c;
      --glass-bg: rgba(178, 216, 216, 0.25);
      --glass-border: rgba(255, 255, 255, 0.18);
      --glass-shadow: rgba(0, 76, 76, 0.3);
    }
    
    /* Global styles */
    body {
      margin: 0;
      padding: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(
        135deg,
        var(--color-darkest),
        var(--color-medium)
      );
      background-attachment: fixed;
      color: white;
      min-height: 100vh;
    }
    
    /* Main container */
    .app-container {
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* Heading styles */
    h1,
    h2 {
      text-align: center;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    h1 {
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
    
    h2 {
      margin-top: 40px;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    
    /* Form section - glassmorphism style */
    .upload-section {
      width: 100%;
      background: var(--glass-bg);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 15px;
      border: 1px solid var(--glass-border);
      box-shadow: 0 8px 32px 0 var(--glass-shadow);
      padding: 30px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    /* File upload input */
    .file-input-container {
      display: inline-flex;
      position: relative;
      margin-bottom: 20px;
      width: 300px;
    }
    
    .file-input-container input[type="file"] {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    
    .file-input-label {
      background-color: var(--color-dark);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      text-align: center;
    }
    
    .file-input-container:hover .file-input-label {
      background-color: var(--color-medium);
    }
    
    /* Extract button */
    .extract-btn {
      background-color: var(--color-medium);
      color: white;
      border: none;
      padding: 12px 30px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      margin: 10px 0;
    }
    
    .extract-btn:hover:not(:disabled) {
      background-color: var(--color-light);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .extract-btn:disabled {
      background-color: var(--color-lightest);
      cursor: not-allowed;
      opacity: 0.7;
    }
    
    /* Gallery section - glassmorphism style */
    .gallery-container {
      width: 100%;
      background: var(--glass-bg);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 15px;
      border: 1px solid var(--glass-border);
      box-shadow: 0 8px 32px 0 var(--glass-shadow);
      padding: 30px;
    }
    
    /* Image grid */
    .image-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    
    /* Image card */
    .image-card {
      position: relative;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .image-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .image-card img {
      width: 200px;
      height: 300px;
      object-fit: cover;
      display: block;
    }
    
    /* Enlarge button container */
    .enlarge-btn-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 76, 76, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .image-card:hover .enlarge-btn-container {
      opacity: 1;
    }
    
    /* Enlarge button */
    .enlarge-btn {
      padding: 10px 20px;
      background-color: var(--color-dark);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .enlarge-btn:hover {
      background-color: var(--color-medium);
      transform: scale(1.05);
    }
    
    /* Modal for enlarged image */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      cursor: pointer;
    }
    
    .modal-content {
      max-width: 90%;
      max-height: 90%;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      position: relative;
    }
    
    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: var(--color-dark);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      z-index: 1001;
    }
    
    .modal-close:hover {
      background-color: var(--color-medium);
    }
    
    /* Loading spinner */
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top: 4px solid var(--color-light);
      animation: spin 1s linear infinite;
      margin: 20px auto;
    }
    
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .app-container {
        padding: 20px;
      }
    
      .upload-section,
      .gallery-container {
        padding: 20px;
      }
    
      .image-grid {
        gap: 10px;
      }
    
      .image-card img {
        width: 150px;
        height: 225px;
      }
    }
    
    `,
  },
  {
    taskId: "day30",
    title: "LessonListTable.css",
    css: `
    .lesson-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .lesson-table th,
    .lesson-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--color-border);
    }
    
    .lesson-table th {
      font-weight: bold;
      color: var(--color-text);
    }
    
    .lesson-table tr:hover {
      background-color: var(--color-bg-hover);
    }
    
   
    `,
    title2: "LessonManagement.css",
    css2: `
    .create-lesson-form {
      background-color: var(--color-bg-secondary);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: var(--color-text);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box; 
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .time-selectors {
      display: flex;
      gap: 1rem;
    }
    
    .time-select {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box; 
    }
    
    .time-select:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    
   
    `,
  },

  {
    taskId: "English-Terms-Learning",
    title: "index.css",
    css: `
    /* Reset default browser styles for consistency */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global styles */
body {
    font-family: Arial, sans-serif;
    background-color: #575756; /* Dark gray background */
    color: #f5f5f5; /* Light gray text for contrast */
    font-size: 16px;
    line-height: 1.5;
}

/* Center the main app content */
.app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
}

/* Header styling */
.header {
    background-color: #575756;
    color: #c1cf00; /* Vibrant green-yellow text */
    width: 100%;
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #666;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header h1 {
    font-size: 24px;
}

/* Card-like container for all components */
.card {
    background-color: #575756;
    border: 1px solid #666;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    width: 100%;
    margin: 20px auto;
}

/* Style for buttons */
button {
    background-color: #c1cf00; /* Vibrant green-yellow */
    color: #575756; /* Dark gray text */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    background-color: #a0b000; /* Slightly darker green-yellow */
    transform: scale(1.05);
}

button:focus {
    outline: 2px solid #c1cf00;
}

/* Style for inputs */
input,
select,
textarea {
    background-color: #f5f5f5;
    color: #575756;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    margin: 10px 0;
    transition: border-color 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #c1cf00;
    outline: none;
}

textarea {
    height: 100px;
    resize: vertical;
}

/* Style for labels */
label {
    color: #f5f5f5;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

/* Auth Component Styling */
.auth-container {
    max-width: 400px;
    text-align: center;
}

.auth-container button {
    margin: 10px 0;
    width: 100%;
}

.auth-container .error {
    color: #ff4444;
    font-size: 14px;
    margin-top: 10px;
}

/* Test Selection Component Styling */
.test-selection-container {
    max-width: 350px;
    text-align: center;
}

.test-selection-container select {
    width: 100%;
    margin: 10px 0;
}

.test-selection-container button {
    width: 100%;
    margin-top: 10px;
}

/* Test Component Styling */
.test-container {
    max-width: 600px;
}

.test-container h2 {
    color: #c1cf00;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
}

.test-container .question-text {
    font-size: 18px;
    color: #f5f5f5;
    margin-bottom: 15px;
    text-align: center;
}

.test-container .answer-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.test-container .answer-options button {
    background-color: #ddd;
    color: #575756;
    padding: 10px 15px;
    text-align: left;
    transition: background-color 0.3s ease;
}

.test-container .answer-options button:hover {
    background-color: #e0e600; /* Lighter green-yellow on hover */
}

.test-container .answer-options .correct {
    background-color: #c1cf00;
    color: #575756;
    animation: fadeIn 0.3s ease-in;
}

.test-container .answer-options .incorrect {
    background-color: #ff4444;
    color: #fff;
    animation: shake 0.5s ease;
}

.test-container .explanation {
    background-color: #eee;
    color: #575756;
    padding: 10px;
    border-radius: 5px;
    margin-top: 15px;
}

.test-container .explanation .correct-answer {
    color: #c1cf00;
    font-weight: bold;
}

/* Results Component Styling */
.results-container {
    max-width: 600px;
    text-align: center;
}

.results-container p {
    font-size: 18px;
    margin: 10px 0;
}

.results-container .score,
.results-container .percentage,
.results-container .time-taken {
    color: #c1cf00;
}

.results-container .incorrect-answers {
    margin-top: 20px;
}

.results-container .incorrect-answers div {
    background-color: #eee;
    color: #575756;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.results-container .incorrect-answers .selected-answer {
    color: #ff4444;
}

.results-container .incorrect-answers .correct-answer {
    color: #c1cf00;
}

.results-container button {
    margin-top: 20px;
    width: 100%;
}

/* Header buttons container */
.header-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

/* Add Question and Logout buttons */
.add-question-btn,
.logout-btn {
  background-color: #c1cf00; /* Vibrant green-yellow */
  color: #575756; /* Dark gray text */
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.add-question-btn:hover,
.logout-btn:hover {
  background-color: #a0b000; /* Slightly darker green-yellow */
  transform: scale(1.05);
}

.add-question-btn:focus,
.logout-btn:focus {
  outline: 2px solid #c1cf00;
}

/* Ensure header has enough space for buttons */
.header {
  padding-bottom: 20px; /* Add extra padding to accommodate buttons */
}

/* Question Form Component Styling */
.question-form-container {
    max-width: 500px;
}

.question-form-container form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.question-form-container button {
    margin-top: 10px;
}

.question-form-container .success-message {
    color: #c1cf00;
    background-color: #eee;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin-top: 10px;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateX(-5px);
    }
    20%, 40%, 60%, 80% {
        transform: translateX(5px);
    }
}

/* Loading State */
.loading {
    color: #c1cf00;
    font-size: 18px;
    text-align: center;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

/* Footer */
.footer {
    background-color: #575756;
    color: #c1cf00;
    text-align: center;
    padding: 10px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

/* Responsiveness */
@media (max-width: 600px) {
    .card {
        padding: 15px;
        margin: 10px;
    }

    body {
        font-size: 14px;
    }

    button {
        padding: 8px 16px;
        font-size: 14px;
    }

    input,
    select,
    textarea {
        padding: 8px;
        font-size: 14px;
    }

    .test-container .answer-options {
        gap: 8px;
    }

    .header h1 {
        font-size: 20px;
    }

    .test-container h2 {
        font-size: 18px;
    }

    .test-container .question-text {
        font-size: 16px;
    }

    .results-container p {
        font-size: 16px;
    }
}
    `,
  },
  {
    taskId: "day32",
    title: "CreateTestimonialForm.css",
    css: `
    .create-testimonial-form {
      background-color: var(--color-bg-secondary);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      cursor: pointer;
    }
    
    .form-group select:focus {
      outline: none;
      border-color: var(--color-primary-hover);
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: var(--color-text);
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .form-group input[type="checkbox"] {
      margin-left: 0.5rem;
      width: auto;
    }
    
    .submit-btn,
    .cancel-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      margin-right: 1rem;
    }
    
    .submit-btn {
      background: var(--gradient-button);
      color: white;
    }
    
    .submit-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    .cancel-btn {
      background-color: var(--color-error);
      color: white;
    }
    
    .cancel-btn:hover {
      background-color: var(--color-error-hover);
    }
    
    `,
    title2: "TestimonialListTable.css",
    css2: `
    .testimonial-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .testimonial-table th,
    .testimonial-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--color-border);
    }
    
    .testimonial-table th {
      font-weight: bold;
      color: var(--color-text);
    }
    
    .testimonial-table tr:hover {
      background-color: var(--color-bg-hover);
    }
    
    .edit-btn,
    .delete-btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-right: 0.5rem;
    }
    
    .edit-btn {
      background: var(--gradient-button);
      color: white;
    }
    
    .edit-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    .delete-btn {
      background-color: var(--color-error);
      color: white;
    }
    
    .delete-btn:hover {
      background-color: var(--color-error-hover);
    }
    
    `,
    title3: "TestimonialManagement.css",
    css3: `
    .testimonial-management {
      background-color: var(--color-bg-secondary);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .testimonial-management h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--color-text);
    }
    
    `,
  },
  {
    taskId: "day33",
    title: "testimonials.css",
    css: `
    .testimonials {
      padding: 5rem 2rem;
      backdrop-filter: blur(10px);
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .testimonial-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      gap: 20px;
      transition: background-color 0.3s;
    }
    
    .testimonial-card:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    .testimonial-text {
      font-size: 1.25rem;
      font-style: italic;
      margin: 1.5rem 0;
      color: var(--color-text-muted);
    }
    
    .testimonial-author {
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--color-text);
    }
    
    .testimonial-role {
      color: var(--color-text-muted);
      font-size: 1rem;
    }
    
    .testimonial-nav {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 2rem;
    }
    
    .nav-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .nav-dot.active {
      background-color: #8b5cf6;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .testimonial-card {
      animation: fadeInUp 1s ease-out;
    } 
    `,
  },
  {
    taskId: "day35",
    title: "messages.css",
    css: `
    /* src/styles/messages.css */

:root {
  --gradient-primary: linear-gradient(135deg, #4d1d95d2 0%, #312e81 100%);
  --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
  --color-primary: #4d1d95;
  --color-secondary: #312e81;
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
}

/* Messages Container */
.messages-container {
  display: flex;
  height: calc(100vh - 60px);
  padding: 20px;
  color: var(--color-text);
}

/* Error and Loading States */
.messages-error {
  color: #ff4444;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

.messages-loading {
  color: var(--color-text-muted);
  text-align: center;
}

/* Conversation List */
.conversation-list {
  width: 30%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 0 10rem 0 5rem;
}

.conversation-details {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.conversation-header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.conversation-item {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-left: none;
  border-right: none;
  cursor: pointer;
  border-radius: 1rem;
  margin: 10px;
  transition: background 0.3s;
}

.conversation-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.conversation-item.active {
  background: rgba(255, 255, 255, 0.15);
}

.conversation-name {
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text);
}

.conversation-preview {
  margin: 10px 0 5px;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.conversation-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* Chat Window */
.chat-window {
  width: 70%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border-radius: 0 5rem 5rem 0;
}

.chat-header {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  font-weight: bold;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.chat-message {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.chat-message.right {
  align-items: flex-end;
}

.chat-message.left {
  align-items: flex-start;
}

.message-bubble {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 70%;
  line-height: 1.4;
}

.message-bubble.right {
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border-bottom-right-radius: 5px;
}

.message-bubble.left {
  background: rgba(255, 255, 255, 0.15);
  color: var(--color-text);
  border-bottom-left-radius: 5px;
}

.message-time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 5px;
}

/* Chat Input */
.chat-input {
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
}

.chat-input-field {
  flex: 1;
  padding: 10px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  outline: none;
  transition: border-color 0.3s;
}

.chat-input-field:focus {
  border-color: #8b5cf6;
}

.chat-input-field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.chat-input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-style: italic;
}

.chat-send-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.chat-send-button:hover {
  transform: scale(1.05);
}

.chat-send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Placeholder/No Conversation State */
.chat-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.25rem;
}

/* No Conversations State */
.no-conversations {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-top: 20px;
}

/* New Message Form */
.new-message-button {
  margin-bottom: 20px;
  width: 100%;
}

.new-message-form {
  margin-bottom: 20px;
}

.search-results {
  max-height: 200px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-top: 10px;
}

.search-result-item {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s;
}

.search-result-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.conversation-email {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

/* Animations */
.messages-container,
.conversation-item,
.chat-message {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .messages-container {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - 60px);
  }

  .conversation-list {
    width: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 40vh;
    border-radius: 25px;
  }

  .chat-window {
    width: 100%;
    flex: 1;
  }

  .chat-input {
    flex-direction: column;
    gap: 10px;
  }

  .chat-input-field {
    width: 100%;
  }

  .chat-send-button {
    width: 100%;
    padding: 12px;
  }
}
 
    `,
  },

  {
    taskId: "day36",
    title: "messages.css",
    css: `
    /* src/styles/messages.css */

:root {
  --gradient-primary: linear-gradient(135deg, #4d1d95d2 0%, #312e81 100%);
  --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
  --color-primary: #4d1d95;
  --color-secondary: #312e81;
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
}

/* Messages Container */
.messages-container {
  display: flex;
  height: calc(100vh - 60px);
  padding: 20px;
  color: var(--color-text);
}

/* Error and Loading States */
.messages-error {
  color: #ff4444;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

.messages-loading {
  color: var(--color-text-muted);
  text-align: center;
}

/* Conversation List */
.conversation-list {
  width: 30%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 0 10rem 0 5rem;
}

.conversation-details {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.conversation-header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.conversation-item {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-left: none;
  border-right: none;
  cursor: pointer;
  border-radius: 1rem;
  margin: 10px;
  transition: background 0.3s;
}

.conversation-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.conversation-item.active {
  background: rgba(255, 255, 255, 0.15);
}

.conversation-name {
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text);
}

.conversation-preview {
  margin: 10px 0 5px;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.conversation-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* Chat Window */
.chat-window {
  width: 70%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border-radius: 0 5rem 5rem 0;
}

.chat-header {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  font-weight: bold;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.chat-message {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.chat-message.right {
  align-items: flex-end;
}

.chat-message.left {
  align-items: flex-start;
}

.message-bubble {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 70%;
  line-height: 1.4;
}

.message-bubble.right {
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border-bottom-right-radius: 5px;
}

.message-bubble.left {
  background: rgba(255, 255, 255, 0.15);
  color: var(--color-text);
  border-bottom-left-radius: 5px;
}

.message-time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 5px;
}

/* Chat Input */
.chat-input {
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
}

.chat-input-field {
  flex: 1;
  padding: 10px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  outline: none;
  transition: border-color 0.3s;
}

.chat-input-field:focus {
  border-color: #8b5cf6;
}

.chat-input-field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.chat-input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-style: italic;
}

.chat-send-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.chat-send-button:hover {
  transform: scale(1.05);
}

.chat-send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Placeholder/No Conversation State */
.chat-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.25rem;
}

/* No Conversations State */
.no-conversations {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-top: 20px;
}

/* New Message Form */
.new-message-button {
  margin-bottom: 20px;
  width: 100%;
}

.new-message-form {
  margin-bottom: 20px;
}

.search-results {
  max-height: 200px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-top: 10px;
}

.search-result-item {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s;
}

.search-result-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.conversation-email {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

/* Animations */
.messages-container,
.conversation-item,
.chat-message {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .messages-container {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - 60px);
  }

  .conversation-list {
    width: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 40vh;
    border-radius: 25px;
  }

  .chat-window {
    width: 100%;
    flex: 1;
  }

  .chat-input {
    flex-direction: column;
    gap: 10px;
  }

  .chat-input-field {
    width: 100%;
  }

  .chat-send-button {
    width: 100%;
    padding: 12px;
  }
}

    `,
  },
  {
    taskId: "day37",
    title: "LessonManagement.css",
    css: `
    .create-lesson-form {
      background-color: var(--color-bg-secondary);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: var(--color-text);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box; 
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .time-selectors {
      display: flex;
      gap: 1rem;
    }
    
    .time-select {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box; 
    }
    
    .time-select:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    
    .teacher-availability {
      margin-top: 0.5rem;
      padding: 0.5rem;
      background-color: var(--color-bg-primary);
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      color: var(--color-text);
    }
    
    .teacher-availability p {
      margin: 0 0 0.5rem 0;
      font-weight: bold;
    }
    
    .teacher-availability ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .teacher-availability li {
      margin-bottom: 0.25rem;
    }
    
    .no-availability {
      margin-top: 0.5rem;
      color: var(--color-error); 
      font-style: italic;
    } 
    `,
    title2: "activity.css",
    css2: `
    /* src/styles/activity.css */
.activity-container {
  padding: 2rem;
  color: var(--color-text);
}

.activity-container h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lessons-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.lesson-item {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lesson-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.lesson-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.lesson-item p {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.lesson-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .lessons-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .lessons-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .lessons-list {
    grid-template-columns: 1fr;
  }
}

    `,
  },
  {
    taskId: "ebay-lister",
    title: "styles.css",
    css: `
    /* Import a modern font */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/* Global styles */
body,
html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow-y: auto;
  font-family: "Poppins", sans-serif;
}

/* Main app container */
.App {
  max-width: 1400px;
  width: 90%;
  margin: 30px 0;
  padding: 30px;
  box-sizing: border-box;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Container for form and preview */
.container {
  display: flex;
  gap: 30px;
}

/* Form section */
.form-section {
  flex: 1;
  background: #f9f9f9;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* Preview section */
.preview-section {
  flex: 2;
  background: #f9f9f9;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* Headings */
h1 {
  font-size: 2.2em;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 1.5em;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.2em;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 15px;
}

/* Inputs and textarea */
input,
textarea,
select {
  display: block;
  width: 100%;
  margin: 15px 0;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  background: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #6b48ff;
  box-shadow: 0 0 8px rgba(107, 72, 255, 0.2);
}

textarea {
  height: 120px;
  resize: vertical;
}

/* Buttons */
button {
  margin: 8px;
  padding: 12px 25px;
  background: linear-gradient(90deg, #6b48ff 0%, #00ddeb 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(107, 72, 255, 0.3);
}

/* Remove button for images */
.image-item button {
  background: linear-gradient(90deg, #ff6b6b 0%, #ff8e53 100%);
  padding: 8px 15px;
}

.image-item button:hover {
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

/* Actions container */
.actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

/* Image upload and banner upload sections */
.image-upload,
.banner-upload {
  margin: 15px 0;
}

.banner-upload-image {
  display: flex;
  flex-direction: column;
}

.image-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: translateY(-5px);
}

/* Template selection */
.template-selection {
  margin-bottom: 30px;
  text-align: center;
}

.template-options {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.template-options button {
  padding: 12px 25px;
  background: #e0e0e0;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.template-options button.active {
  background: linear-gradient(90deg, #6b48ff 0%, #00ddeb 100%);
  color: white;
}

.template-options button:hover {
  background: #d0d0d0;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Saved listings */
ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  padding: 10px;
  background: #f9f9f9;
  margin: 5px 0;
  border-radius: 8px;
  font-size: 0.9em;
  color: #34495e;
}

/* Modern Store Template */
.modern-template {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.modern-template .listing-grid {
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  gap: 25px;
  max-width: 100%;
}

.modern-template .header {
  background: linear-gradient(90deg, #6b48ff 0%, #00ddeb 100%);
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.4em;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.modern-template .header:hover {
  transform: translateY(-3px);
}

.modern-template .banner {
  position: relative;
  width: 100%;
  height: 300px;
  background: #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modern-template .banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modern-template .banner-text {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  padding: 15px 25px;
  font-size: 1.6em;
  font-weight: 600;
  color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.modern-template .banner-text.yellow {
  background: rgba(255, 215, 0, 0.85);
  color: #2c3e50;
}

.modern-template .image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.modern-template .image-item {
  text-align: center;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.modern-template .image-item:hover {
  transform: translateY(-5px);
}

.modern-template .image-container {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
}

.modern-template .image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.modern-template .image-container img:hover {
  transform: scale(1.05);
}

.modern-template .caption {
  margin-top: 10px;
  font-size: 0.9em;
  color: #555;
  text-transform: uppercase;
  font-weight: 500;
}

.modern-template .description {
  line-height: 1.7;
  font-size: 1em;
  color: #333;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.modern-template .profile {
  border-top: 2px solid #e0e0e0;
  padding-top: 15px;
  font-size: 0.9em;
  color: #666;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

/* Baby Store Template */
.baby-template {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #e6f4f1 0%, #d1e8e2 100%);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.baby-template .listing-grid {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 25px;
  max-width: 100%;
}

.baby-template .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.baby-template .header:hover {
  transform: translateY(-3px);
}

.baby-template .store-name {
  font-size: 1.4em;
  font-weight: 600;
  color: #2c3e50;
}

.baby-template .nav-links a {
  margin-left: 20px;
  text-decoration: none;
  color: #6b48ff;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 0.3s ease;
}

.baby-template .nav-links a:hover {
  color: #00ddeb;
}

.baby-template .image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.baby-template .image-item {
  text-align: center;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.baby-template .image-item:hover {
  transform: translateY(-5px);
}

.baby-template .image-container {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
}

.baby-template .image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.baby-template .image-container img:hover {
  transform: scale(1.05);
}

.baby-template .caption {
  margin-top: 10px;
  font-size: 0.9em;
  color: #555;
  text-transform: uppercase;
  font-weight: 500;
}

.baby-template .description {
  line-height: 1.7;
  font-size: 1em;
  color: #333;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.baby-template .profile {
  border-top: 2px solid #e0e0e0;
  padding-top: 15px;
  font-size: 0.9em;
  color: #666;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

    `,
  },

  {
    taskId: "day40",
    title: "LessonListTable.css",
    css: `
    .lesson-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .lesson-table th,
    .lesson-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--color-border);
    }
    
    .lesson-table th {
      font-weight: bold;
      color: var(--color-text);
    }
    
    .lesson-table tr:hover {
      background-color: var(--color-bg-hover);
    }
    
    .cancel-btn {
      background-color: #ff4444;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 5px;
    }
    
    .cancel-btn:hover {
      background-color: #cc0000;
    }
     
    `,
    title2: "activity.css",
    css2: `
    /* src/styles/activity.css */
.activity-container {
  padding: 2rem;
  color: var(--color-text);
}

.activity-container h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lessons-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.lesson-item {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lesson-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.lesson-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.lesson-item p {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.lesson-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.cancel-button {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.cancel-button:hover {
  background-color: #cc0000;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .lessons-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .lessons-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .lessons-list {
    grid-template-columns: 1fr;
  }
}

    `,
    title3: "servoces.css",
    css3: `
    .services-page {
      padding: 2rem;
      color: var(--color-text);
    }
    
    .services-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .services-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .services-header p {
      font-size: 1.2rem;
      color: var(--color-text-muted);
    }
    
    .lessons-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .lesson-card {
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 1rem;
      text-align: center;
      padding: 1.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .lesson-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
    
    .lesson-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
    
    .lesson-card h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }
    
    .lesson-card p {
      font-size: 1rem;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }
    
    .lesson-card .price {
      font-weight: bold;
      color: var(--color-text);
      margin-bottom: 1rem;
    }
    
    .learn-more-btn {
      display: inline-block;
      background: var(--gradient-button);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .learn-more-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    .cancelled-label {
      color: #ff4444;
      font-weight: bold;
      margin-top: 10px;
      display: block;
    }
    
    .book-button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    
    .book-button:hover {
      background-color: #45a049;
    }
    
    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .lessons-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .lessons-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .lessons-grid {
        grid-template-columns: 1fr;
      }
    }
    
    `,
  },
  {
    taskId: "day41",
    title: "index.css",
    css: `
    a,
a:visited {
  color: inherit;
  text-decoration: none;
}

/* Common Button Styles */
button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: var(--color-background);
  color: var(--color-text);
  text-transform: uppercase;
  transition: all 0.3s ease;
}

button:hover {
  background-color: var(--color-primary);
  color: white;
}

button.active {
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
}

.submit-btn,
.delete-btn,
.edit-btn {
  color: #fff;
  background-color: var(--color-primary);
  cursor: pointer;
}

.submit-btn:hover,
.delete-btn:hover,
.edit-btn:hover {
  background-color: transparent;
}

/* Hover Effect */
button:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
 
    `,
    title2: "calendar.css",
    css2: `
    /* src/styles/calendar.css */
.calendar-section {
  background: linear-gradient(
    135deg,
    rgba(77, 29, 149, 0.9) 0%,
    rgba(49, 46, 129, 0.9) 100%
  );
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem auto;
  max-width: 1200px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.calendar-container {
  padding: 1rem;
}

.calendar-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(233, 213, 255, 0.3);
}

.calendar-wrapper {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* FullCalendar Custom Styling */
.fc {
  font-family: system-ui, -apple-system, sans-serif;
  color: rgb(255, 255, 255);
}

.fc-header-toolbar {
  padding: 1rem;
  margin-bottom: 0 !important;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.fc-toolbar-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.fc-button {
  background: rgba(139, 92, 246, 0.7) !important;
  border: none !important;
  color: white !important;
  text-transform: capitalize !important;
  border-radius: 9999px !important;
  padding: 0.5rem 1rem !important;
  transition: all 0.3s ease !important;
  backdrop-filter: blur(5px);
}

.fc-button:hover {
  background: rgba(139, 92, 246, 0.9) !important;
  transform: translateY(-1px);
}

.fc-button:active {
  transform: translateY(0);
}

.fc-button-primary:not(:disabled).fc-button-active {
  background: rgba(109, 40, 217, 0.9) !important;
}

.fc-daygrid-day-number,
.fc-col-header-cell-cushion {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.fc-theme-standard .fc-list-day-cushion {
  background-color: rgba(77, 29, 149, 0.692);
}
.fc .fc-list-event:hover td {
  background-color: rgba(77, 29, 149, 0.322);
  cursor: pointer;
}

.fc-theme-standard td,
.fc-theme-standard th {
  border: 1px solid var(--fc-border-color);
}

.fc-col-header-cell {
  background: rgba(77, 29, 149, 0.692);
}

.fc-daygrid-day-frame {
  background: rgba(255, 255, 255, 0.02);
}

.fc-event {
  border: none !important;
  border-radius: 8px !important;
  padding: 4px 8px !important;
  font-size: 0.85em !important;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.fc-event:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.fc-day-today {
  background-color: rgba(138, 92, 246, 0.438) !important;
}

.fc-timegrid-slot {
  height: 2.5em !important;
  background: rgba(255, 255, 255, 0);
}

.fc-timegrid-now-indicator-arrow {
  border-color: #8b5cf6;
}

.fc-timegrid-now-indicator-line {
  border-color: #8b5cf6;
}

/* Modal Styles */
.calendar-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.calendar-modal .modal-content {
  background: linear-gradient(135deg, #4d1d95 0%, #312e81 100%);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.calendar-modal h3 {
  margin-top: 0;
  color: white;
  font-size: 1.5rem;
}

.calendar-modal p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
}

.calendar-modal .status-completed {
  color: #10b981;
}

.calendar-modal .status-cancelled {
  color: #ef4444;
}

.calendar-modal .status-scheduled {
  color: #8b5cf6;
}

.calendar-modal button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.calendar-modal button:hover {
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .calendar-section {
    padding: 1rem;
    margin: 1rem;
  }

  .calendar-title {
    font-size: 2rem;
  }

  .fc-header-toolbar {
    flex-direction: column;
    gap: 0.5rem;
  }

  .fc-toolbar-chunk {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .fc-view-harness {
    min-height: 500px;
  }
}

    `,
    title3: "services.css",
    css3: `
    .services-page {
      padding: 2rem;
      color: var(--color-text);
    }
    
    .services-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .services-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .services-header p {
      font-size: 1.2rem;
      color: var(--color-text-muted);
    }
    
    .lessons-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .lesson-card {
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 1rem;
      text-align: center;
      padding: 1.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .lesson-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
    
    .lesson-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
    
    .lesson-card h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }
    
    .lesson-card p {
      font-size: 1rem;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }
    
    .lesson-card .price {
      font-weight: bold;
      color: var(--color-text);
      margin-bottom: 1rem;
    }
    
    .learn-more-btn {
      display: inline-block;
      background: var(--gradient-button);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .learn-more-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    .cancelled-label {
      color: #ff4444;
      font-weight: bold;
      margin-top: 10px;
      display: block;
    }
    
    .book-button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    
    .book-button:hover {
      background-color: #45a049;
    }
    
    /* View Toggle Buttons */
    
    .view-toggle button:hover {
      background-color: var(--color-primary);
      color: white;
    }
    
    .view-toggle button.active {
      background-color: var(--color-primary);
      color: white;
      font-weight: bold;
    }
    
    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .lessons-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .lessons-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .lessons-grid {
        grid-template-columns: 1fr;
      }
    }
    
    `,
  },

  {
    taskId: "day42",
    title: "home.css",
    css: `
    /* Consolidated CSS with responsive buttons */
:root {
  --gradient-primary: linear-gradient(135deg, #4d1d95d2 0%, #312e81 100%);
  --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
  --color-primary: #4d1d95;
  --color-secondary: #312e81;
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
  --color-background: #ffffff;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--gradient-primary);
  color: var(--color-text);
}

/* Enhanced Hero Section */
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.1);
  animation: heroZoom 20s infinite alternate ease-in-out;
}

@keyframes heroZoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.3);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(76, 29, 149, 0.9)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 2rem;
  max-width: 800px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-muted);
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Consolidated Button Styles */
.button-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 1rem;
  min-width: 120px;
}

.button-secondary {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid transparent;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 1rem;
  min-width: 120px;
}

.button-primary:hover,
.button-secondary:hover {
  transform: scale(1.05);
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Active button state */
button.active {
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
}

/* Special button styles */
.submit-btn,
.delete-btn,
.edit-btn {
  color: #fff;
  background-color: var(--color-primary);
  cursor: pointer;
}

.submit-btn:hover,
.delete-btn:hover,
.edit-btn:hover {
  background-color: transparent;
  color: var(--color-text);
}

/* Stats Section */
.stats {
  padding: 5rem 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text-muted);
}

/* Programs Section */
.programs {
  padding: 5rem 2rem;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-secondary)
  );
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.program-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  transition: background-color 0.3s;
}

.program-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.program-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.program-description {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background-color: #8b5cf6;
  border-radius: 50%;
}

/* Testimonials Section */
.testimonials {
  padding: 5rem 2rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-text {
  font-size: 1.25rem;
  font-style: italic;
  margin: 1.5rem 0;
  color: var(--color-text-muted);
}

.testimonial-author {
  font-weight: 600;
}

.testimonial-role {
  color: var(--color-text-muted);
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-dot.active {
  background-color: #8b5cf6;
}

/* Link Styles */
a,
a:visited {
  color: inherit;
  text-decoration: none;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.25rem;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }

  .button-primary,
  .button-secondary {
    width: 100%;
    max-width: 300px;
    padding: 0.75rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .button-primary,
  .button-secondary {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    min-width: auto;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}
 
    `,
    title2: "profileSetup.css",
    css2: `
    .profile-setup-container {
      min-height: 100vh;
      padding: 2rem;
      background: linear-gradient(135deg, #1e3a8a, #6211cc);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .profile-setup-form {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 2.5rem;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .profile-setup-container h1 {
      color: white;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      font-weight: 600;
    }
    
    .profile-setup-container h2 {
      color: white;
      font-size: 1.5rem;
      margin: 1.5rem 0;
      font-weight: 500;
    }
    
    .profile-setup-form > div {
      margin-bottom: 1.5rem;
    }
    
    .profile-setup-form label {
      display: block;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 0.95rem;
    }
    
    /* Inputs */
    .profile-setup-form input,
    .profile-setup-form textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .profile-setup-form input:focus,
    .profile-setup-form textarea:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }
    
    .profile-setup-form input::placeholder,
    .profile-setup-form textarea::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
    
    .profile-setup-form textarea {
      min-height: 120px;
      resize: vertical;
    }
    
    .profile-role-section {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 2rem;
    }
    
    button[type="button"] {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
      margin-top: 1rem;
      width: auto;
    }
    
    button[type="button"]:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
    }
    
    .profile-setup-form button[type="submit"] {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #5d28d9 0%, #4c1d95 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      margin-top: 2rem;
    }
    
    .profile-setup-form button[type="submit"]:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .profile-setup-form button[type="submit"]:active {
      transform: translateY(0);
    }
    
    /* Responsive */
    @media (max-width: 640px) {
      .profile-setup-container {
        padding: 1rem;
      }
    
      .profile-setup-form {
        padding: 1.5rem;
      }
    
      .profile-setup-container h1 {
        font-size: 1.75rem;
      }
    
      .profile-setup-container h2 {
        font-size: 1.25rem;
      }
    
      .availability-entry {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
    
      .availability-entry button {
        width: 100%;
      }
    }
    
    `,
    title3: "teacherDashbaord.css",
    css3: `
    /* src/styles/teacherDashboard.css */
.teacher-dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--gradient-primary);
  color: var(--color-text);
  min-height: 100vh;
}

.teacher-profile,
.upcoming-lessons,
.availability-management {
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 1s ease-out;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lessons-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.lesson-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 1rem;
  transition: background-color 0.3s;
}

.lesson-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.lesson-card h3 {
  font-size: 1.25rem;
  margin: 0 0 1rem;
  color: #8b5cf6;
}

.lesson-card p {
  margin: 0.5rem 0;
  color: var(--color-text-muted);
}

.availability-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
}

.flatpickr-input {
  flex: 1;
  min-width: 250px;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 9999px;
  color: var(--color-text);
  font-size: 1rem;
}

.flatpickr-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
}

.availability-list {
  margin-bottom: 1.5rem;
}

.availability-slot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
}

.availability-slot:hover {
  background: rgba(255, 255, 255, 0.1);
}

.availability-slot span {
  color: var(--color-text-muted);
}

/* Button Styles */
button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: var(--color-text);
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
  text-transform: uppercase;
  white-space: nowrap;
}

button:disabled {
  background: rgba(255, 255, 255, 0.3);
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  transform: scale(1.05);
  background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
}

.save-button {
  display: block;
  width: 200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.save-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .lesson-card {
    padding: 1rem;
  }

  .availability-form {
    flex-direction: column;
  }

  .flatpickr-input {
    min-width: auto;
  }

  button {
    width: 100%;
  }
}

    `,
  },
  {
    taskId: "Gallery-App",
    title: "index.css",
    css: `
    /* Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #000;
      background: #fff;
      background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23ff0000"/%3E%3C/svg%3E');
      background-size: 20px 20px;
      overflow-x: hidden;
    }
    
    /* Container */
    .container {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;
      max-width: 1400px;
    }
    
    /* Header Styles */
    .header {
      background: #000;
      padding: 1.5rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 5px solid #ff0;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      background: #ff0000;
      padding: 0.5rem 1rem;
      border: 3px solid #000;
      text-decoration: none;
      transform: rotate(-5deg);
      transition: transform 0.3s;
    }
    
    .logo:hover {
      transform: rotate(5deg);
    }
    
    .btn-order {
      background: #ff0;
      color: #000;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      border: 3px solid #000;
      border-radius: 0;
      text-decoration: none;
      transition: all 0.3s;
    }
    
    .btn-order:hover {
      background: #00f;
      color: #fff;
      transform: scale(1.1);
    }
    
    /* Gallery Section */
    #gallery {
      padding: 4rem 0;
      position: relative;
    }
    
    #gallery::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"%3E%3Ccircle cx="25" cy="25" r="5" fill="%2300f"/%3E%3C/svg%3E');
      opacity: 0.1;
      z-index: -1;
    }
    
    h2 {
      font-size: 3.5rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #ff0000;
      background: #000;
      padding: 0.5rem 1rem;
      border: 5px solid #ff0;
      text-align: center;
      margin-bottom: 2rem;
      transform: rotate(-3deg);
    }
    
    .gallery-description {
      font-size: 1.5rem;
      font-weight: bold;
      color: #000;
      background: #ff0;
      padding: 0.5rem 1rem;
      border: 3px solid #000;
      text-align: center;
      margin-bottom: 3rem;
      transform: rotate(3deg);
    }
    
    .row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 0 15px;
    }
    
    .col-lg-3,
    .col-md-6,
    .col-sm-6,
    .col-xs-12 {
      padding: 0;
      margin-bottom: 0;
    }
    
    .img-wrapper {
      position: relative;
      overflow: hidden;
      border: 5px solid #000;
      background: #fff;
      transition: all 0.3s;
    }
    
    .img-wrapper:hover {
      transform: scale(1.05) rotate(2deg);
      box-shadow: 10px 10px 0 #ff0;
    }
    
    .img-wrapper img {
      width: 100%;
      height: auto;
      display: block;
      filter: contrast(150%) saturate(200%);
      transition: all 0.3s;
    }
    
    .img-wrapper:hover img {
      filter: contrast(200%) saturate(300%);
    }
    
    .img-overlay {
      background: rgba(255, 0, 0, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s;
      cursor: pointer;
    }
    
    .img-overlay svg {
      color: #fff;
      font-size: 3em;
      background: #000;
      padding: 10px;
      border-radius: 50%;
      border: 3px solid #ff0;
    }
    
    .img-wrapper:hover .img-overlay {
      opacity: 1;
    }
    
    .image-info {
      padding: 1rem;
      text-align: center;
      background: #00f;
      border: 3px solid #000;
      border-top: none;
    }
    
    .image-info h3 {
      font-size: 1.3rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    
    .image-info p {
      font-size: 1.2rem;
      font-weight: bold;
      color: #ff0;
      margin-bottom: 1rem;
    }
    
    .btn.buy-now {
      background: #ff0000;
      color: #fff;
      width: 100%;
      padding: 0.8rem;
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      border: 3px solid #000;
      border-radius: 0;
      transition: all 0.3s;
    }
    
    .btn.buy-now:hover {
      background: #ff0;
      color: #000;
      transform: scale(1.05);
    }
    
    /* Overlay Styles */
    #overlay {
      background: rgba(0, 0, 0, 0.9);
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }
    
    #overlay img {
      width: 80%;
      max-height: 80vh;
      border: 5px solid #ff0;
      box-shadow: 10px 10px 0 #ff0000;
      filter: contrast(150%) saturate(200%);
    }
    
    #nextButton,
    #prevButton,
    #exitButton {
      color: #fff;
      font-size: 2em;
      background: #ff0000;
      width: 50px;
      height: 50px;
      border-radius: 0;
      border: 3px solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }
    
    #nextButton:hover,
    #prevButton:hover,
    #exitButton:hover {
      background: #ff0;
      color: #000;
      transform: scale(1.1);
    }
    
    #nextButton { right: 20px; }
    #prevButton { left: 20px; }
    #exitButton { top: 20px; right: 20px; }
    
    /* Checkout Page Styles */
    .checkout {
      padding: 5rem 0;
      min-height: 70vh;
      background: #fff;
      position: relative;
    }
    
    .checkout::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"%3E%3Ccircle cx="25" cy="25" r="5" fill="%2300f"/%3E%3C/svg%3E');
      opacity: 0.1;
      z-index: -1;
    }
    
    .checkout-container {
      max-width: 700px;
      margin: 0 auto;
      padding: 3rem;
      background: #ff0;
      border: 5px solid #000;
      text-align: center;
      transform: rotate(-2deg);
    }
    
    .checkout h1 {
      font-size: 3rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #ff0000;
      background: #000;
      padding: 0.5rem 1rem;
      border: 3px solid #ff0;
      margin-bottom: 1rem;
    }
    
    .subtitle {
      font-size: 1.3rem;
      font-weight: bold;
      color: #000;
      margin-bottom: 2rem;
    }
    
    .signup-form {
      background: #fff;
      padding: 2rem;
      border: 3px solid #000;
      margin-bottom: 2rem;
    }
    
    .form-group input {
      width: 100%;
      padding: 1rem;
      font-size: 1.2rem;
      background: #fff;
      border: 3px solid #000;
      border-radius: 0;
      color: #000;
      transition: all 0.3s;
    }
    
    .form-group input:focus {
      border-color: #ff0000;
      outline: none;
    }
    
    .btn-primary {
      background: #ff0000;
      color: #fff;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      border: 3px solid #000;
      border-radius: 0;
      transition: all 0.3s;
    }
    
    .btn-primary:hover {
      background: #00f;
      transform: scale(1.05);
    }
    
    .success-message {
      background: #00f;
      color: #fff;
      padding: 2rem;
      border: 3px solid #000;
    }
    
    .success-message h2 {
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #ff0;
    }
    
    .benefits {
      background: #ff0000;
      padding: 2rem;
      border: 3px solid #000;
    }
    
    .benefits h3 {
      font-size: 1.8rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      background: #000;
      padding: 0.5rem 1rem;
      border: 3px solid #ff0;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .benefits ul {
      list-style: none;
      padding: 0;
    }
    
    .benefits li {
      font-size: 1.2rem;
      color: #fff;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 2rem;
    }
    
    .benefits li:before {
      content: "★";
      color: #ff0;
      position: absolute;
      left: 0;
      font-size: 1.5rem;
    }
    
    .privacy-notice {
      font-size: 0.9rem;
      color: #000;
      margin-top: 1rem;
    }
    
    /* Footer Styles */
    .footer {
      background: #000;
      padding: 2rem 0;
      border-top: 5px solid #ff0;
      text-align: center;
    }
    
    .footer p {
      color: #fff;
      font-size: 1.1rem;
    }
    
    .footer a {
      color: #ff0 !important;
      text-decoration: none;
      margin-left: 10px;
      transition: all 0.3s;
    }
    
    .footer a:hover {
      color: #ff0000 !important;
    }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
      h2 { font-size: 2.5rem; }
      .logo { font-size: 2rem; }
      .btn-order { font-size: 1rem; padding: 0.5rem 1rem; }
      .gallery-description { font-size: 1.2rem; }
      .checkout h1 { font-size: 2rem; }
      .subtitle { font-size: 1.1rem; }
      .row { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
    }
    
    @media (max-width: 576px) {
      .row { grid-template-columns: 1fr; }
      .checkout-container { padding: 1.5rem; }
    }
    `,
  },
  {
    taskId: "day43",
    title: "LessonTableList.css",
    css: `
    .lesson-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      font-size: 0.95rem;
      background-color: var(--color-bg-light);
      border-radius: 0.75rem;
      overflow: hidden;
    }
    
    .lesson-table th,
    .lesson-table td {
      padding: 0.85rem 1rem;
      text-align: left;
      border-bottom: 1px solid var(--color-border);
      transition: all 0.2s ease;
    }
    
    .lesson-table th {
      font-weight: 600;
      color: var(--color-text);
      background-color: var(--color-primary);
      color: white;
      text-transform: capitalize;
      letter-spacing: 0.5px;
    }
    
    .lesson-table tr:last-child td {
      border-bottom: none;
    }
    
    .lesson-table tr:hover td {
      background-color: var(--color-bg-hover);
    }
    
    .cancel-btn,
    .delete-btn,
    .edit-btn {
      border: none;
      padding: 0.5rem 0.8rem;
      border-radius: 0.4rem;
      cursor: pointer;
      margin: 0.15rem;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .edit-btn {
      background-color: var(--color-primary);
      color: white;
    }
    
    .delete-btn {
      background-color: #dc3545;
      color: white;
    }
    
    .cancel-btn {
      background-color: #ff9500;
      color: white;
    }
    
    .cancel-btn:hover {
      background-color: #e08500;
      transform: translateY(-1px);
    }
    
    .edit-btn:hover {
      background-color: var(--color-primary-dark);
      transform: translateY(-1px);
    }
    
    .delete-btn:hover {
      background-color: #c82333;
      transform: translateY(-1px);
    }
    
    .actions-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
    }
    
    /* Responsive styles */
    @media (max-width: 992px) {
      .lesson-table {
        font-size: 0.9rem;
      }
    
      .lesson-table th,
      .lesson-table td {
        padding: 0.7rem 0.8rem;
      }
    }
    
    @media (max-width: 768px) {
      .lesson-table {
        display: block;
        box-shadow: none;
        background: transparent;
      }
    
      .lesson-table thead {
        display: none;
      }
    
      .lesson-table tbody {
        display: block;
      }
    
      .lesson-table tr {
        display: block;
        margin-bottom: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: 0.6rem;
        background-color: var(--color-bg-light);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease;
      }
    
      .lesson-table tr:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    
      .lesson-table td {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        text-align: right;
        border-bottom: 1px solid var(--color-border-light);
      }
    
      .lesson-table td::before {
        content: attr(data-label);
        font-weight: 600;
        margin-right: 1rem;
        color: var(--color-text-light);
        text-transform: capitalize;
      }
    
      .lesson-table td:last-child {
        border-bottom: none;
        justify-content: flex-end;
      }
    
      .actions-container {
        justify-content: flex-end;
      }
    
      .cancel-btn,
      .delete-btn,
      .edit-btn {
        padding: 0.4rem 0.7rem;
        font-size: 0.8rem;
        margin: 0.1rem;
      }
    }
    
    @media (max-width: 480px) {
      .lesson-table td {
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        padding: 0.6rem 1rem;
      }
    
      .lesson-table td::before {
        margin-right: 0;
        margin-bottom: 0.3rem;
        align-self: flex-start;
      }
    
      .actions-container {
        width: 100%;
        justify-content: space-between;
      }
    
      .cancel-btn,
      .delete-btn,
      .edit-btn {
        flex: 1;
        text-align: center;
        padding: 0.5rem;
        margin: 0.1rem;
      }
    }
     
    `,
    title2: "home.css",
    css2: `
    /* Consolidated CSS with responsive buttons */
:root {
  --gradient-primary: linear-gradient(135deg, #4d1d95d2 0%, #312e81 100%);
  --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
  --color-primary: #4d1d95;
  --color-secondary: #312e81;
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
  --color-background: #ffffff;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--gradient-primary);
  color: var(--color-text);
}

/* Enhanced Hero Section */
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.1);
  animation: heroZoom 20s infinite alternate ease-in-out;
}

@keyframes heroZoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.3);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(76, 29, 149, 0.9)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 2rem;
  max-width: 800px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-muted);
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Button Styles */
button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: var(--color-text);
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
  text-transform: uppercase;
  white-space: nowrap;
}

button:disabled {
  background: rgba(255, 255, 255, 0.3);
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  transform: scale(1.05);
  background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
}

.save-button {
  display: block;
  width: 200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.save-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  transform: scale(1.05);
}

/* Consolidated Button Styles */
.button-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 1rem;
  min-width: 120px;
}

.button-secondary {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid transparent;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 1rem;
  min-width: 120px;
}

.button-primary:hover,
.button-secondary:hover {
  transform: scale(1.05);
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Active button state */
button.active {
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
}

/* Special button styles */
.submit-btn,
.delete-btn,
.edit-btn {
  color: #fff;
  background-color: var(--color-primary);
  cursor: pointer;
}

.submit-btn:hover,
.delete-btn:hover,
.edit-btn:hover {
  background-color: transparent;
  color: var(--color-text);
}

/* Stats Section */
.stats {
  padding: 5rem 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text-muted);
}

/* Programs Section */
.programs {
  padding: 5rem 2rem;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-secondary)
  );
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.program-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  transition: background-color 0.3s;
}

.program-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.program-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.program-description {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background-color: #8b5cf6;
  border-radius: 50%;
}

/* Testimonials Section */
.testimonials {
  padding: 5rem 2rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-text {
  font-size: 1.25rem;
  font-style: italic;
  margin: 1.5rem 0;
  color: var(--color-text-muted);
}

.testimonial-author {
  font-weight: 600;
}

.testimonial-role {
  color: var(--color-text-muted);
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-dot.active {
  background-color: #8b5cf6;
}

/* Link Styles */
a,
a:visited {
  color: inherit;
  text-decoration: none;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.25rem;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }

  .button-primary,
  .button-secondary {
    width: 100%;
    max-width: 300px;
    padding: 0.75rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .button-primary,
  .button-secondary {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    min-width: auto;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}

    `,
    title3: "teacherDashboard.css",
    css3: `
    /* src/styles/teacherDashboard.css */
.teacher-dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--gradient-primary);
  color: var(--color-text);
  min-height: 100vh;
}

.teacher-profile,
.upcoming-lessons,
.availability-management {
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 1s ease-out;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lessons-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.lesson-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 1rem;
  transition: background-color 0.3s;
}

.lesson-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.lesson-card h3 {
  font-size: 1.25rem;
  margin: 0 0 1rem;
  color: #8b5cf6;
}

.lesson-card p {
  margin: 0.5rem 0;
  color: var(--color-text-muted);
}

.availability-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
}

.flatpickr-input {
  flex: 1;
  min-width: 250px;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 9999px;
  color: var(--color-text);
  font-size: 1rem;
}

.flatpickr-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
}

.availability-list {
  margin-bottom: 1.5rem;
}

.availability-slot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
}

.availability-slot:hover {
  background: rgba(255, 255, 255, 0.1);
}

.availability-slot span {
  color: var(--color-text-muted);
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .lesson-card {
    padding: 1rem;
  }

  .availability-form {
    flex-direction: column;
  }

  .flatpickr-input {
    min-width: auto;
  }

  button {
    width: 100%;
  }
}

    `,
  },
  {
    taskId: "day44",
    title: "LessonManagement.css",
    css: `
    .lesson-management {
      background: linear-gradient(
        135deg,
        rgba(77, 29, 149, 0.9) 0%,
        rgba(49, 46, 129, 0.9) 100%
      );
    
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .create-lesson-form {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: var(--color-text);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .time-selectors {
      display: flex;
      gap: 1rem;
    }
    
    .time-select {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      background-color: var(--color-bg-primary);
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }
    
    .time-select:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    
    .teacher-availability {
      margin-top: 0.5rem;
      padding: 0.5rem;
      background-color: var(--color-bg-primary);
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      color: var(--color-text);
    }
    
    .teacher-availability p {
      margin: 0 0 0.5rem 0;
      font-weight: bold;
    }
    
    .teacher-availability ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .teacher-availability li {
      margin-bottom: 0.25rem;
    }
    
    .no-availability {
      margin-top: 0.5rem;
      color: var(--color-error);
      font-style: italic;
    }
    
    .filter-section {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      justify-content: center;
    }
    
    .filter-section input,
    .filter-section select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .filter-section select {
      min-width: 120px;
    }
     
    `,
  },

  {
    taskId: "Simple-Breathing-Exercise",
    title: "styles.css",
    css: `
    /* src/App.css */
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2, #80deea);
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  color: #00838f;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.breathing-timer {
  margin: 30px 0;
  padding: 20px;
  background-color: rgba(178, 235, 242, 0.3);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.breathing-timer h2 {
  font-size: 2.8em;
  margin-bottom: 15px;
  font-weight: 500;
  transition: color 0.5s ease;
}

.breathing-timer h2.inhale {
  color: #0277bd;
}

.breathing-timer h2.hold {
  color: #7b1fa2;
}

.breathing-timer h2.exhale {
  color: #00695c;
}

.breathing-timer p {
  font-size: 1.4em;
  margin: 15px 0;
  color: #455a64;
}

.breathing-timer button {
  padding: 12px 40px;
  font-size: 1.2em;
  background-color: #00b8d4;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.breathing-timer button:hover {
  background-color: #0097a7;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.breathing-timer button:active {
  transform: translateY(1px);
}

.duration-selector {
  margin: 25px 0;
}

.duration-selector h3 {
  color: #00838f;
  font-size: 1.4em;
  margin-bottom: 15px;
}

.duration-selector button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1.1em;
  background-color: #e0f7fa;
  color: #006064;
  border: 1px solid #b2ebf2;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.duration-selector button.selected {
  background-color: #00acc1;
  color: white;
  border-color: #00acc1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.duration-selector button:hover {
  background-color: #b2ebf2;
  transform: translateY(-1px);
}

/* Animation for the breathing circle */
.breathing-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 8px solid #80deea;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 1s ease;
}

.breathing-circle.inhale {
  border-color: #29b6f6;
  animation: inhale-animation 4s forwards;
}

.breathing-circle.hold {
  border-color: #ba68c8;
  animation: hold-animation 4s forwards;
}

.breathing-circle.exhale {
  border-color: #26a69a;
  animation: exhale-animation 4s forwards;
}

@keyframes inhale-animation {
  0% {
    transform: scale(0.6);
    box-shadow: 0 0 0 0 rgba(41, 182, 246, 0.4);
  }
  90% {
    transform: scale(1.1);
    box-shadow: 0 0 0 15px rgba(41, 182, 246, 0);
  }
  100% {
    transform: scale(1.1);
    box-shadow: 0 0 0 15px rgba(41, 182, 246, 0);
  }
}

@keyframes hold-animation {
  0% {
    transform: scale(1.1);
    box-shadow: 0 0 0 15px rgba(186, 104, 200, 0);
  }
  100% {
    transform: scale(1.1);
    box-shadow: 0 0 0 15px rgba(186, 104, 200, 0);
  }
}

@keyframes exhale-animation {
  0% {
    transform: scale(1.1);
    box-shadow: 0 0 0 15px rgba(38, 166, 154, 0);
  }
  90% {
    transform: scale(0.6);
    box-shadow: 0 0 0 0 rgba(38, 166, 154, 0.4);
  }
  100% {
    transform: scale(0.6);
    box-shadow: 0 0 0 0 rgba(38, 166, 154, 0.4);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app {
    width: 90%;
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .breathing-timer h2 {
    font-size: 2.2em;
  }

  .breathing-circle {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .app {
    width: 95%;
    padding: 15px;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .breathing-timer h2 {
    font-size: 1.8em;
  }

  .breathing-timer p {
    font-size: 1.2em;
  }

  .breathing-circle {
    width: 120px;
    height: 120px;
    border-width: 6px;
  }

  .duration-selector button {
    padding: 8px 16px;
    font-size: 1em;
  }
}
 
    `,
  },
  {
    taskId: "day46",
    title: "messages.css",
    css: `
    /* src/styles/messages.css */

:root {
  --gradient-primary: linear-gradient(135deg, #4d1d95d2 0%, #312e81 100%);
  --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
  --color-primary: #4d1d95;
  --color-secondary: #312e81;
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
}

/* Messages Container */
.messages-container {
  display: flex;
  height: calc(100vh - 60px);
  padding: 20px;
  color: var(--color-text);
}

/* Error and Loading States */
.messages-error {
  color: #ff4444;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

.messages-loading {
  color: var(--color-text-muted);
  text-align: center;
}

/* Conversation List */
.conversation-list {
  width: 30%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 0 10rem 0 5rem;
}

.conversation-details {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.conversation-header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.conversation-item {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-left: none;
  border-right: none;
  cursor: pointer;
  border-radius: 1rem;
  margin: 10px;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
}

.conversation-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.conversation-item.active {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

.conversation-item.unread {
  background: rgba(138, 92, 246, 0.329);
  border-left: 5px solid #8b5cf6;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
}

.conversation-item.unread:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

.conversation-item.active.unread {
  background: rgba(139, 92, 246, 0.2);
  border-left: 3px solid #8b5cf6;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
}

.conversation-name {
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text);
}

.conversation-preview {
  margin: 10px 0 5px;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.conversation-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* Chat Window */
.chat-window {
  width: 70%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border-radius: 0 5rem 5rem 0;
}

.chat-header {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  font-weight: bold;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.chat-message {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.chat-message.right {
  align-items: flex-end;
}

.chat-message.left {
  align-items: flex-start;
}

.message-bubble {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 70%;
  line-height: 1.4;
}

.message-bubble.right {
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border-bottom-right-radius: 5px;
}

.message-bubble.left {
  background: rgba(255, 255, 255, 0.15);
  color: var(--color-text);
  border-bottom-left-radius: 5px;
}

.message-time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 5px;
}

/* Chat Input */
.chat-input {
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
}

.chat-input-field {
  flex: 1;
  padding: 10px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  outline: none;
  transition: border-color 0.3s;
}

.chat-input-field:focus {
  border-color: #8b5cf6;
}

.chat-input-field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.chat-input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-style: italic;
}

.chat-send-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.chat-send-button:hover {
  transform: scale(1.05);
}

.chat-send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Placeholder/No Conversation State */
.chat-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.25rem;
}

/* No Conversations State */
.no-conversations {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-top: 20px;
}

/* New Message Form */
.new-message-button {
  margin-bottom: 20px;
  width: 100%;
}

.new-message-form {
  margin-bottom: 20px;
}

.search-results {
  max-height: 200px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-top: 10px;
}

.search-result-item {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s;
}

.search-result-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.conversation-email {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

/* Animations */
.messages-container,
.conversation-item,
.chat-message {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .messages-container {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - 60px);
  }

  .conversation-list {
    width: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 40vh;
    border-radius: 25px;
  }

  .conversation-item.unread {
    border-left: none;
    border-bottom: 5px solid #8b5cf6;
  }

  .conversation-item.active.unread {
    border-bottom: 3px solid #8b5cf6;
  }

  .chat-window {
    width: 100%;
    flex: 1;
  }

  .chat-input {
    flex-direction: column;
    gap: 10px;
  }

  .chat-input-field {
    width: 100%;
  }

  .chat-send-button {
    width: 100%;
    padding: 12px;
  }
}

    `,
  },
  {
    taskId: "day47",
    title: "analytics.css",
    css: `
    :root {
      --gradient-primary: linear-gradient(135deg, #4d1d95d2 0%, #312e81 100%);
      --gradient-text: linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%);
      --color-primary: #4d1d95;
      --color-secondary: #312e81;
      --color-text: #ffffff;
      --color-text-muted: rgba(255, 255, 255, 0.7);
      --border-radius: 12px;
      --shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
    
    .analytics-container {
      min-height: 100vh;
      padding: clamp(1.5rem, 5vw, 2.5rem);
      background: var(--gradient-primary);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    
    .analytics-container h1 {
      font-size: clamp(1.8rem, 6vw, 2.5rem);
      text-align: center;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      margin: 0;
      animation: fadeInUp 0.8s ease-out;
    }
    
    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
      gap: clamp(1rem, 3vw, 1.5rem);
      max-width: 1400px;
      width: 100%;
      padding: 0 clamp(0.5rem, 2vw, 1rem);
    }
    
    .chart-container,
    .stats-container {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border-radius: var(--border-radius);
      padding: clamp(1rem, 3vw, 1.5rem);
      box-shadow: var(--shadow);
      transition: transform 0.3s ease, background 0.3s ease;
      animation: fadeInUp 0.8s ease-out;
    }
    
    .chart-container:hover,
    .stats-container:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-4px);
    }
    
    .chart-container h2,
    .stats-container h2 {
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      color: var(--color-text);
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    .stats-container p {
      font-size: clamp(0.95rem, 3vw, 1.05rem);
      color: var(--color-text-muted);
      margin: 0.5rem 0;
      line-height: 1.5;
    }
    
    /* Responsive Design */
    @media (max-width: 1024px) {
      .analytics-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    }
    
    @media (max-width: 768px) {
      .analytics-container {
        padding: clamp(1rem, 4vw, 1.5rem);
      }
    
      .analytics-container h1 {
        font-size: clamp(1.5rem, 5vw, 2rem);
      }
    
      .analytics-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .chart-container,
      .stats-container {
        padding: 1rem;
      }
    
      .chart-container h2,
      .stats-container h2 {
        font-size: clamp(1rem, 3.5vw, 1.2rem);
      }
    
      .stats-container p {
        font-size: clamp(0.85rem, 2.8vw, 0.95rem);
      }
    }
    
    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Accessibility */
    .chart-container:focus,
    .stats-container:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
    
    `,
    title2: "AdminDashboard.css",
    css2: `
    .admin-dashboard {
      padding: 2rem;
    }
    
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: clamp(0.5rem, 2vw, 0.75rem);
      justify-content: center;
      margin: clamp(1rem, 3vw, 2rem) 0;
      max-width: 100%;
    }
    
    `,
  },
  {
    taskId: "day49",
    title: "paymentForm.css",
    css: `
    /* paymentForm.css */
    .payment-form-container {
      background-color: var(--color-primary);
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      max-width: 400px;
      width: 100%;
      margin: 1.5rem auto;
      transition: all 0.2s ease;
      z-index: 1000;
    }
    
    .payment-form-container:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }
    
    .payment-form-container h2 {
      margin-bottom: 1.25rem;
      font-size: 1.4rem;
      text-align: center;
      color: white;
      font-weight: 600;
    }
    
    .payment-amount {
      margin-bottom: 1.5rem;
      text-align: center;
      font-size: 1.1rem;
      color: white;
      font-weight: 500;
    }
    
    .error-message {
      color: #ffcccc;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 0.9rem;
      padding: 0.5rem;
      background-color: rgba(220, 53, 69, 0.3);
      border-radius: 0.4rem;
      border: 1px solid #ffcccc;
    }
    
    .payment-form {
      display: flex;
      flex-direction: column;
    }
    
    .button-group {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    
    /* Payment Button Styles */
    .pay-button {
      padding: 0.75rem 2rem;
      background: #10b981;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      min-width: 120px;
      text-transform: uppercase;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .pay-button:hover:not(:disabled) {
      background: #0ea271;
      transform: translateY(-2px);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    .pay-button:disabled {
      background: rgba(255, 255, 255, 0.3);
      cursor: not-allowed;
    }
    
    .payment-cancel-button:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.25);
    }
    
    .payment-cancel-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    /* --- Responsive --- */
    @media (max-width: 768px) {
      .payment-form-container {
        padding: 1.25rem;
        margin: 1rem auto;
      }
    
      .payment-form-container h2 {
        font-size: 1.3rem;
      }
    
      .button-group {
        flex-direction: column;
        gap: 0.75rem;
      }
      .pay-button,
      .cancel-button {
        width: 100%;
        padding: 0.75rem 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .payment-form-container {
        padding: 1rem;
        border-radius: 0.6rem;
      }
    
      .payment-form-container h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
    
      .payment-amount {
        font-size: 1rem;
        margin-bottom: 1.25rem;
      }
      .pay-button,
      .cancel-button {
        font-size: 0.9rem;
        padding: 0.6rem 1rem;
      }
    }
    
    `,
    title2: "services.css",
    css2: `
    .services-page {
      padding: 2rem;
      color: var(--color-text);
    }
    
    .services-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .services-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .services-header p {
      font-size: 1.2rem;
      color: var(--color-text-muted);
    }
    
    .lessons-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .lesson-card {
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 1rem;
      text-align: center;
      padding: 1.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .lesson-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
    
    .lesson-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
    
    .lesson-card h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }
    
    .lesson-card p {
      font-size: 1rem;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }
    
    .lesson-card .price {
      font-weight: bold;
      color: var(--color-text);
      margin-bottom: 1rem;
    }
    
    .learn-more-btn {
      display: inline-block;
      background: var(--gradient-button);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .learn-more-btn:hover {
      background: var(--gradient-button-hover);
    }
    
    .cancelled-label {
      color: #ff4444;
      font-weight: bold;
      margin-top: 10px;
      display: block;
    }
    
    .book-button {
      padding: 0.75rem 2rem;
      color: white;
      border: none;
      border-radius: 9999px; 
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      min-width: 120px;
      text-transform: uppercase;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    
    
    .book-button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .modal-content {
      background: transparent;
      max-width: 500px;
      width: 100%;
    }
    
    .error-message {
      color: #dc2626;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .success-message {
      color: #4caf50;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .view-toggle {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .view-toggle button {
      padding: 0.75rem 1.5rem;
      border: none;
      background: var(--color-bg-secondary);
      color: var(--color-text);
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .view-toggle button:hover {
      background-color: var(--color-primary);
      color: white;
    }
    
    .view-toggle button.active {
      background-color: var(--color-primary);
      color: white;
      font-weight: bold;
    }
    
    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .lessons-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .lessons-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .lessons-grid {
        grid-template-columns: 1fr;
      }
    }
    `,
  },
  {
    taskId: "day50",
    title: "WelcomeWidget.css",
    css: `
    .welcome-widget {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      padding: 2rem;
      max-width: 500px;
      margin: 1rem auto;
      text-align: center;
      color: var(--color-text);
      animation: fadeInUp 1s ease-out;
    }
    
    .welcome-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .lesson-info {
      margin-bottom: 1rem;
    }
    
    .lesson-text {
      font-size: 1rem;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }
    
    .action-button {
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
      color: var(--color-text);
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      text-transform: uppercase;
      font-size: 1rem;
      min-width: 120px;
    }
    
    .action-button:hover {
      transform: scale(1.05);
      background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .welcome-widget {
        padding: 1.5rem;
        margin: 0.5rem;
      }
    
      .welcome-title {
        font-size: 1.25rem;
      }
    
      .action-button {
        width: 100%;
        max-width: 300px;
        padding: 0.75rem;
      }
    }
    
    @media (max-width: 480px) {
      .welcome-title {
        font-size: 1rem;
      }
    
      .action-button {
        font-size: 0.9rem;
        padding: 0.6rem 1rem;
        min-width: auto;
      }
    }
     
    `,
  },

  {
    taskId: "ecom19",
    title: "Navbar.module.css",
    css: `
.navbar {
  background-color: #03045e;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.navbar__logo {
  color: #48cae4;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar__links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar__link {
  color: #00b4d8;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.navbar__link:hover {
  color: #48cae4;
}

.navbar__link--active {
  color: #ffffff;
  font-weight: bold;
}
 
    `,
    title2: "Footer.module.css",
    css2: `
.footer {
  background-color: #03045e;
  color: #48cae4;
  padding: 2rem 0;
  margin-top: auto;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer__links_list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.footer__link {
  color: #00b4d8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer__links {
  display: flex;
  justify-content: center;
}

.footer__link:hover {
  color: #48cae4;
}

.footer__copyright {
  font-size: 0.8rem;
  text-align: center;
}

    `,
  },
  {
    taskId: "ecom20",
    title: "ProductCard.module.css",
    css: `
     .card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.imageContainer {
  height: 200px;
  overflow: hidden;
  background-color: #f8f9fa;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover .image {
  transform: scale(1.08);
}

.content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #03045e;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #e0e0e0;
  font-size: 0.9rem;
}

.starFilled {
  color: #00b4d8;
}

.reviewCount {
  font-size: 0.875rem;
  color: #0077b6;
}

.price {
  margin-top: auto;
  font-size: 1.4rem;
  font-weight: 700;
  color: #023e8a;
}
    `,
    title2: "HomePage.module.css",
    css2: `
    .container {
  min-height: 100vh;
}

/* HERO */
.hero {
  background: linear-gradient(135deg, #03045e 0%, #0077b6 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.heroContent {
  max-width: 800px;
  margin: 0 auto;
}

.heroTitle {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #48cae4;
}

.heroSubtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.heroCta {
  display: inline-block;
  background: #48cae4;
  color: #03045e;
  padding: 0.75rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.heroCta:hover {
  background: #00b4d8;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* FEATURED */
.featured {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.featuredContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.featuredTitle {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #03045e;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

/* STATES */
.loading,
.error,
.empty {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}

.error {
  color: #e74c3c;
}

.empty {
  color: #6c757d;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .heroTitle {
    font-size: 2.5rem;
  }
  .heroSubtitle {
    font-size: 1.2rem;
  }
  .featuredTitle {
    font-size: 2rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}

    `,
    title3: "ProductDetailPage.module.css",
    css3: `
.container {
  min-height: 100vh;
  padding-bottom: 4rem;
}

/* BREADCRUMB */
.breadcrumb {
  padding: 1rem 2rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.breadLink {
  color: #0077b6;
  text-decoration: none;
}

.breadLink:hover {
  text-decoration: underline;
}

.breadSep {
  margin: 0 0.5rem;
  color: #999;
}

.breadCurrent {
  color: #03045e;
  font-weight: 500;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

/* GALLERY */
.gallery {
  flex: 1;
}

.mainImage {
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  background: #f8f9fa;
  margin-bottom: 1rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
}

.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s ease;
}

.thumb:hover {
  border-color: #00b4d8;
}

/* INFO */
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 2.2rem;
  margin: 0;
  color: #03045e;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #e0e0e0;
  font-size: 1.1rem;
}

.starFilled {
  color: #00b4d8;
}

.reviewCount {
  color: #0077b6;
  font-size: 0.95rem;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #023e8a;
}

.description {
  line-height: 1.6;
  color: #444;
  margin: 1rem 0;
}

.stock {
  font-weight: 500;
}

.inStock {
  color: #27ae60;
}

.outOfStock {
  color: #e74c3c;
}

/* ACTIONS */
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.qtyBtn {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.qtyBtn:hover:not(:disabled) {
  background: #e9ecef;
}

.qtyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qtyInput {
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 1rem;
}

.addBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.addBtn:hover:not(:disabled) {
  background: #0096c7;
}

.addBtn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}

.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

/* RELATED */
.related {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.relatedTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #03045e;
  text-align: center;
}

.relatedGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.comingSoon {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 3rem;
}

/* STATES */
.loading,
.error,
.empty {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: white;
}
.empty {
  color: #6c757d;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .gallery {
    order: -1;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
  .mainImage {
    height: 350px;
  }
  .actions {
    flex-direction: column;
  }
  .quantity {
    width: 100%;
    justify-content: center;
  }
  .addBtn {
    width: 100%;
  }
}

    `,
    title4: "ProductListPage.module.css",
    css4: `
    .container {
  min-height: 100vh;
}

/* HERO */
.hero {
  background: linear-gradient(135deg, #03045e 0%, #0077b6 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.title {
  font-size: 2.8rem;
  margin: 0 0 0.5rem;
  color: #48cae4;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 2rem;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.filters {
  flex: 0 0 280px;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input,
.select,
.priceInput {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.input::placeholder,
.priceInput::placeholder {
  color: #999;
}

.priceRange {
  display: flex;
  gap: 0.5rem;
}

.priceInput {
  flex: 1;
}

.applyBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.applyBtn:hover {
  background: #0096c7;
}

/* GRID SECTION */
.gridSection {
  flex: 1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

/* STATES */
.loading,
.error,
.empty {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: #e74c3c;
}
.empty {
  color: #6c757d;
}

/* PAGINATION */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pageBtn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  color: #03045e;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.pageBtn:hover:not(:disabled) {
  background: #48cae4;
  color: white;
  border-color: #48cae4;
}

.pageBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pageBtnActive {
  background: #023e8a;
  color: white;
  border-color: #023e8a;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .filters {
    flex: none;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.2rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}

    `,
  },

  {
    taskId: "ecom21",
    title: "CartPage.module.css",
    css: `
     .container {
  min-height: 100vh;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* CART ITEMS */
.items {
  flex: 1;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: white;
}

.itemLink {
  flex: 0 0 100px;
}

.itemImage {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.itemInfo {
  flex: 1;
}

.itemName {
  font-weight: 600;
  color: #03045e;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
}

.itemName:hover {
  color: #0077b6;
}

.itemPrice {
  color: #023e8a;
  font-weight: 500;
}

.itemActions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.qtyBtn {
  width: 36px;
  height: 36px;
  background: #f8f9fa;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}

.qtyBtn:hover:not(:disabled) {
  background: #e9ecef;
}

.qtyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qty {
  width: 40px;
  text-align: center;
  padding: 0.5rem;
  font-weight: 500;
}

.removeBtn {
  color: #e74c3c;
  background: none;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;
}

.removeBtn:hover {
  color: #c0392b;
}

.itemTotal {
  font-weight: 700;
  color: #023e8a;
  min-width: 80px;
  text-align: right;
}

/* SUMMARY */
.summary {
  flex: 0 0 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.summaryTitle {
  font-size: 1.5rem;
  margin: 0 0 1rem;
  color: #03045e;
  text-align: center;
}

.summaryRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.summaryTotal {
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 700;
  color: #023e8a;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}

.checkoutBtn {
  display: block;
  width: 100%;
  background: #00b4d8;
  color: white;
  text-align: center;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.checkoutBtn:hover {
  background: #0096c7;
}

/* EMPTY STATE */
.empty {
  text-align: center;
  padding: 4rem 2rem;
  color: #6c757d;
}

.shopLink {
  display: inline-block;
  margin-top: 1rem;
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
}

.shopLink:hover {
  text-decoration: underline;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}
.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

.loading,
.error {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: #e74c3c;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .summary {
    flex: none;
  }
}

@media (max-width: 600px) {
  .item {
    flex-direction: column;
    text-align: center;
  }
  .itemLink {
    margin-bottom: 1rem;
  }
  .itemActions {
    justify-content: center;
  }
  .itemTotal {
    text-align: center;
  }
}

    `,
    title2: "CheckoutPage.module.css",
    css2: `
    .container {
  min-height: 100vh;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* FORM */
.formSection {
  flex: 1;
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #023e8a;
}

.input,
.select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.inputError {
  border-color: #e74c3c;
}

.errorMsg {
  color: #e74c3c;
  font-size: 0.875rem;
}

.row {
  display: flex;
  gap: 1rem;
}

.row > .inputGroup {
  flex: 1;
}

.paymentTitle {
  margin: 2rem 0 1rem;
  font-size: 1.2rem;
  color: #03045e;
}

.paymentOptions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radioLabel {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.radioLabel input {
  cursor: pointer;
}

/* SUMMARY */
.summary {
  flex: 0 0 380px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.summaryItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: #444;
}

.totals {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
}

.totalRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.totalFinal {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 700;
  color: #023e8a;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #eee;
}

.placeOrderBtn {
  width: 100%;
  background: #00b4d8;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s ease;
}

.placeOrderBtn:hover:not(:disabled) {
  background: #0096c7;
}

.placeOrderBtn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}
.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

/* STATES */
.loading,
.error {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: #e74c3c;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .summary {
    flex: none;
  }
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "ecom22",
    title: "Navbar.module.css",
    css: `
    .navbar {
  background-color: #03045e;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(72, 202, 228, 0.15);
}

.navbar__container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 70px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.navbar__logo:hover {
  transform: scale(1.05);
}

.navbar__logoImage {
  height: 50px;
  width: auto;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.navbar__logoImage:hover {
  box-shadow: 0 4px 16px rgba(72, 202, 228, 0.4);
}

.navbar__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar__link {
  color: #ade8f4;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.navbar__link:hover {
  color: #ffffff;
  background-color: rgba(72, 202, 228, 0.15);
  transform: translateY(-2px);
}

.navbar__link--active {
  color: #ffffff;
  background-color: rgba(72, 202 228 / 0.25);
  font-weight: 600;
  box-shadow: 0 0 0 2px rgba(72, 202, 228, 0.4);
}

/* Cart Badge */
.cartBadge {
  background-color: #48cae4;
  color: #03045e;
  color: #03045e;
  font-size: 0.75rem;
  font-weight: bold;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  padding: 0 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

/* Logout Button */
.logoutBtn {
  background: linear-gradient(135deg, #e63946, #d00000);
  color: white;
  border: none;
  padding: 0.65rem 1.3rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(230, 57, 70, 0.3);
}

.logoutBtn:hover {
  background: linear-gradient(135deg, #ff4d4d, #e63946);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(230, 57, 70, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__container {
    padding: 0 1rem;
    height: 60px;
  }

  .navbar__logoImage {
    height: 42px;
  }

  .navbar__links {
    gap: 1rem;
  }

  .navbar__link {
    font-size: 0.95rem;
    padding: 0.4rem 0.6rem;
  }

  .logoutBtn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
 
    `,
  },
  {
    taskId: "ecom23",
    title: "AdminDashboard.module.css",
    css: `
    .container {
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #03045e;
}

.welcome {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

/* TABS */
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.tabActive {
  background: #03045e;
  color: white;
}

/* OVERVIEW GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.statCard {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.statCard h3 {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.statNumber {
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
  margin: 0;
}

/* SECTION */
.section {
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: #03045e;
  text-align: center;
}

.tableContainer {
  overflow-x: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table th {
  background: #f8f9fa;
  color: #03045e;
  font-weight: 600;
}

.statusSelect {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.viewBtn, .promoteBtn, .demoteBtn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.viewBtn {
  background: #0077b6;
  color: white;
}

.promoteBtn {
  background: #27ae60;
  color: white;
}

.demoteBtn {
  background: #e74c3c;
  color: white;
}

.loading {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #0096c7;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .tabs { gap: 0.5rem; }
  .tab { padding: 0.5rem 1rem; font-size: 0.9rem; }
} 
    `,
    title2: "OrderDetailPage.module.css",
    css2: `
    .container {
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.header {
  max-width: 1000px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.backLink {
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
}

.backLink:hover {
  text-decoration: underline;
}

.title {
  font-size: 2.5rem;
  color: #03045e;
  margin: 0;
}

/* INFO CARD */
.infoCard {
  max-width: 1000px;
  margin: 0 auto 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.infoRow {
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
}

.statusBadge {
  display: flex;
  justify-content: flex-end;
}

.status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.status.pending { background: #fff3cd; color: #856404; }
.status.processing { background: #d1ecf1; color: #0c5460; }
.status.shipped { background: #d4edda; color: #155724; }
.status.delivered { background: #c3e6cb; color: #155724; }
.status.cancelled { background: #f8d7da; color: #721c24; }

/* MAIN */
.main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
}

/* ITEMS */
.itemsSection {
  flex: 1;
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
}

.items {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.item:last-child {
  border-bottom: none;
}

.itemImage {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.itemDetails {
  flex: 1;
}

.itemName {
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: #03045e;
}

.itemQty, .itemPrice {
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.95rem;
}

.itemTotal {
  font-weight: 700;
  color: #023e8a;
  min-width: 100px;
  text-align: right;
}

/* SUMMARY */
.summarySection {
  flex: 0 0 360px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.summaryCard, .addressCard {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.summaryRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.summaryTotal {
  font-size: 1.3rem;
  font-weight: 700;
  color: #023e8a;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  margin-top: 1rem;
}

.paymentMethod {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #666;
}

.address {
  line-height: 1.6;
  color: #444;
}

/* STATES */
.loading, .error, .empty {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading { color: #0096c7; }
.error { color: #e74c3c; }
.empty { color: #6c757d; }

/* RESPONSIVE */
@media (max-width: 992px) {
  .main { flex-direction: column; }
  .summarySection { flex: none; }
}

@media (max-width: 600px) {
  .infoRow { flex-direction: column; gap: 0.5rem; align-items: flex-start; }
  .statusBadge { justify-content: flex-start; margin-top: 1rem; }
  .item { flex-direction: column; text-align: center; }
  .itemDetails { text-align: center; }
  .itemTotal { text-align: center; }
}
    `,
    title3: "ProfilePage.module.css",
    css3: `
/* ProfilePage.module.css - Complete & Fixed */

.container {
  min-height: 100vh;
  padding: 2rem;
  background: #f5f7fa;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
  font-weight: 700;
}

.main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* CARD - Personal Information */
.card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.cardTitle {
  font-size: 1.6rem;
  margin: 0;
  color: #03045e;
}

.editBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.editBtn:hover {
  background: #0096c7;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;
}

.input:focus {
  outline: none;
  border-color: #00b4d8;
  box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
}

.saveBtn {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}

.saveBtn:hover:not(:disabled) {
  background: #219a52;
}

.saveBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.info p {
  margin: 0.75rem 0;
  font-size: 1.1rem;
}

.info strong {
  color: #023e8a;
}

/* ERROR MESSAGE inside form */
.errorMsg {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

ofi .error {
  text-align: center;
  color: #e74c3c;
  font-size: 1.2rem;
  padding: 2.5rem;
  background: #fdf2f2;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 600px;
  border: 1px solid #fcc1c1;
}

/* LOADING STATE */
.loading {
  text-align: center;
  font-size: 1.3rem;
  color: #00b4d8;
  padding: 4rem 2rem;
  font-weight: 500;
  animation: pulse 1.8s infinite;
}

/* ORDER HISTORY SECTION */
.ordersSection {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
  font-weight: 600;
}

.tableContainer {
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table th {
  background: #f8f9fa;
  color: #03045e;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.table tbody tr:hover {
  background: #f8f9fa;
}

/* Status Badges */
.status {
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.status.pending {
  background: #fff3cd;
  color: #856404;
}
.status.processing {
  background: #d1ecf1;
  color: #0c5460;
}
.status.shipped {
  background: #d4edda;
  color: #155724;
}
.status.delivered {
  background: #c3e6cb;
  color: #0f5132;
}
.status.cancelled {
  background: #f8d7da;
  color: #721c24;
}

.viewLink {
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.viewLink:hover {
  color: #00b4d8;
  text-decoration: underline;
}

.empty {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.shopLink {
  color: #00b4d8;
  font-weight: 600;
  text-decoration: none;
}

.shopLink:hover {
  text-decoration: underline;
}

/* TOAST NOTIFICATION */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.4s ease,
    fadeOut 0.4s ease 2.6s forwards;
  z-index: 1000;
  min-width: 200px;
  text-align: center;
}

.toast.success {
  background: #27ae60;
}

/* ANIMATIONS */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .main {
    padding: 0 0.5rem;
  }

  .cardHeader {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .editBtn,
  .saveBtn {
    width: 100%;
  }

  .title {
    font-size: 2rem;
  }

  .tableContainer {
    font-size: 0.9rem;
  }

  .toast {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}

    `,
  },
  {
    taskId: "ecom26",
    title: "CartPage.module.css",
    css: `
    .container {
  min-height: 100vh;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* CART ITEMS */
.items {
  flex: 1;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: white;
}

.itemLink {
  flex: 0 0 100px;
}

.itemImage {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.itemInfo {
  flex: 1;
}

.itemName {
  font-weight: 600;
  color: #03045e;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
}

.itemName:hover {
  color: #0077b6;
}

.itemPrice {
  color: #023e8a;
  font-weight: 500;
}

.itemActions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.qtyBtn {
  width: 36px;
  height: 36px;
  background: #f8f9fa;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}

.qtyBtn:hover:not(:disabled) {
  background: #e9ecef;
}

.qtyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qty {
  width: 40px;
  text-align: center;
  padding: 0.5rem;
  font-weight: 500;
}

.removeBtn {
  color: #e74c3c;
  background: none;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;
}

.removeBtn:hover {
  color: #c0392b;
}

.itemTotal {
  font-weight: 700;
  color: #023e8a;
  min-width: 80px;
  text-align: right;
}

/* SUMMARY */
.summary {
  flex: 0 0 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.summaryTitle {
  font-size: 1.5rem;
  margin: 0 0 1rem;
  color: #03045e;
  text-align: center;
}

.summaryRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.summaryTotal {
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 700;
  color: #023e8a;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}

.checkoutBtn {
  display: block;
  width: 100%;
  background: #00b4d8;
  color: white;
  text-align: center;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.checkoutBtn:hover {
  background: #0096c7;
}

/* EMPTY STATE */
.empty {
  text-align: center;
  padding: 4rem 2rem;
  color: #6c757d;
}

.shopLink {
  display: inline-block;
  margin-top: 1rem;
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
}

.shopLink:hover {
  text-decoration: underline;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}
.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

.loading,
.error {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: #e74c3c;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .summary {
    flex: none;
  }
}

@media (max-width: 600px) {
  .item {
    flex-direction: column;
    text-align: center;
  }
  .itemLink {
    margin-bottom: 1rem;
  }
  .itemActions {
    justify-content: center;
  }
  .itemTotal {
    text-align: center;
  }
}
 
    `,
    title2: "CheckoutDetailPage.module.css",
    css2: `
    .container {
  min-height: 100vh;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* FORM */
.formSection {
  flex: 1;
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #023e8a;
}

.input,
.select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.inputError {
  border-color: #e74c3c;
}

.errorMsg {
  color: #e74c3c;
  font-size: 0.875rem;
}

.row {
  display: flex;
  gap: 1rem;
}

.row > .inputGroup {
  flex: 1;
}

.paymentTitle {
  margin: 2rem 0 1rem;
  font-size: 1.2rem;
  color: #03045e;
}

.paymentOptions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radioLabel {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.radioLabel input {
  cursor: pointer;
}

/* SUMMARY */
.summary {
  flex: 0 0 380px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.summaryItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: #444;
}

.totals {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
}

.totalRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.totalFinal {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 700;
  color: #023e8a;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #eee;
}

.placeOrderBtn {
  width: 100%;
  background: #00b4d8;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s ease;
}

.placeOrderBtn:hover:not(:disabled) {
  background: #0096c7;
}

.placeOrderBtn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}
.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

/* STATES */
.loading,
.error {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: #ffffff;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .summary {
    flex: none;
  }
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}

    `,
    title3: "OrderDetailPgae.module.css",
    css3: `
    .container {
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.header {
  max-width: 1000px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.backLink {
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
}

.backLink:hover {
  text-decoration: underline;
}

.title {
  font-size: 2.5rem;
  color: #03045e;
  margin: 0;
}

/* INFO CARD */
.infoCard {
  max-width: 1000px;
  margin: 0 auto 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.infoRow {
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
}

.statusBadge {
  display: flex;
  justify-content: flex-end;
}

.status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.status.pending { background: #fff3cd; color: #856404; }
.status.processing { background: #d1ecf1; color: #0c5460; }
.status.shipped { background: #d4edda; color: #155724; }
.status.delivered { background: #c3e6cb; color: #155724; }
.status.cancelled { background: #f8d7da; color: #721c24; }

/* MAIN */
.main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
}

/* ITEMS */
.itemsSection {
  flex: 1;
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
}

.items {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.item:last-child {
  border-bottom: none;
}

.itemImage {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.itemDetails {
  flex: 1;
}

.itemName {
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: #03045e;
}

.itemQty, .itemPrice {
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.95rem;
}

.itemTotal {
  font-weight: 700;
  color: #023e8a;
  min-width: 100px;
  text-align: right;
}

/* SUMMARY */
.summarySection {
  flex: 0 0 360px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.summaryCard, .addressCard {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.summaryRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.summaryTotal {
  font-size: 1.3rem;
  font-weight: 700;
  color: #023e8a;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  margin-top: 1rem;
}

.paymentMethod {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #666;
}

.address {
  line-height: 1.6;
  color: #444;
}

/* STATES */
.loading, .error, .empty {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading { color: #0096c7; }
.error { color: #e74c3c; }
.empty { color: #6c757d; }

/* RESPONSIVE */
@media (max-width: 992px) {
  .main { flex-direction: column; }
  .summarySection { flex: none; }
}

@media (max-width: 600px) {
  .infoRow { flex-direction: column; gap: 0.5rem; align-items: flex-start; }
  .statusBadge { justify-content: flex-start; margin-top: 1rem; }
  .item { flex-direction: column; text-align: center; }
  .itemDetails { text-align: center; }
  .itemTotal { text-align: center; }
}
    `,
    title4: "ProductDetailPage.module.css",
    css4: `
    .container {
  min-height: 100vh;
  padding-bottom: 4rem;
}

/* BREADCRUMB */
.breadcrumb {
  padding: 1rem 2rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.breadLink {
  color: #0077b6;
  text-decoration: none;
}

.breadLink:hover {
  text-decoration: underline;
}

.breadSep {
  margin: 0 0.5rem;
  color: #999;
}

.breadCurrent {
  color: #03045e;
  font-weight: 500;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

/* GALLERY */
.gallery {
  flex: 1;
}

.mainImage {
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  background: #f8f9fa;
  margin-bottom: 1rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
}

.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s ease;
}

.thumb:hover {
  border-color: #00b4d8;
}

/* INFO */
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 2.2rem;
  margin: 0;
  color: #03045e;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #e0e0e0;
  font-size: 1.1rem;
}

.starFilled {
  color: #00b4d8;
}

.reviewCount {
  color: #0077b6;
  font-size: 0.95rem;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #023e8a;
}

.description {
  line-height: 1.6;
  color: #444;
  margin: 1rem 0;
}

.stock {
  font-weight: 500;
}

.inStock {
  color: #27ae60;
}

.outOfStock {
  color: #e74c3c;
}

/* ACTIONS */
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.qtyBtn {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.qtyBtn:hover:not(:disabled) {
  background: #e9ecef;
}

.qtyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qtyInput {
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 1rem;
}

.addBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.addBtn:hover:not(:disabled) {
  background: #0096c7;
}

.addBtn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.thumbActive {
  border: 3px solid #00b4d8;
  opacity: 1;
}

/* ———————— REVIEWS SECTION ———————— */
.reviews {
  width: 100%;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.reviews h2 {
  font-size: 1.5rem;
  color: #03045e;
  margin-bottom: 1.5rem;
}

.reviewForm {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.reviewForm > div {
  margin-bottom: 1rem;
}

.reviews > p {
  text-align: left;
  color: #666;
  font-size: 1rem;
  padding: 1rem 0;
}

.reviewForm label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #023e8a;
}

.reviewForm select,
.reviewForm textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
}

.reviewForm textarea {
  resize: vertical;
  min-height: 100px;
}

.reviewForm button {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reviewForm button:hover:not(:disabled) {
  background: #0096c7;
}

.reviewForm button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Review List */
.reviewList {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.review {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #00b4d8;
}

.reviewHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.reviewHeader strong {
  color: #03045e;
  font-size: 1.1rem;
}

.reviewRating {
  color: #00b4d8;
  font-size: 1.1rem;
}

.review p {
  margin: 0.5rem 0;
  color: #444;
  line-height: 1.6;
}

.review small {
  color: #666;
  font-size: 0.85rem;
}

/* Empty state */
.reviews p {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  padding: 2rem;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}

.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

/* RELATED */
.related {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.relatedTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #03045e;
  text-align: center;
}

.relatedGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.comingSoon {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 3rem;
}

/* STATES */
.loading,
.error,
.empty {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: white;
}
.empty {
  color: #6c757d;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .gallery {
    order: -1;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
  .mainImage {
    height: 350px;
  }
  .actions {
    flex-direction: column;
  }
  .quantity {
    width: 100%;
    justify-content: center;
  }
  .addBtn {
    width: 100%;
  }
}

    `,
  },
  {
    taskId: "ecom25",
    title: "AdminDashboard.module.css",
    css: `
    .container {
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #03045e;
}

.welcome {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

/* TABS */
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.tabActive {
  background: #03045e;
  color: white;
}

/* OVERVIEW GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.statCard {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.statCard h3 {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.statNumber {
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
  margin: 0;
}

/* SECTION */
.section {
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: #03045e;
  text-align: center;
}

.tableContainer {
  overflow-x: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table th {
  background: #f8f9fa;
  color: #03045e;
  font-weight: 600;
}

.statusSelect {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.viewBtn, .promoteBtn, .demoteBtn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.viewBtn {
  background: #0077b6;
  color: white;
}

.promoteBtn {
  background: #27ae60;
  color: white;
}

.demoteBtn {
  background: #e74c3c;
  color: white;
}

.loading {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #0096c7;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .tabs { gap: 0.5rem; }
  .tab { padding: 0.5rem 1rem; font-size: 0.9rem; }
}

    `,
    title2: "AuthPage.module.css",
    css2: `
    .container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #03045e 0%, #0077b6 100%);
  padding: 2rem;
}

.card {
  background: white;
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.title {
  font-size: 2.2rem;
  margin: 0 0 0.5rem;
  color: #03045e;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inputGroup {
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #023e8a;
}

.input {
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #00b4d8;
  box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: #666;
}

.checkbox input {
  cursor: pointer;
}

.error {
  background: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
}

.submitBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.submitBtn:hover:not(:disabled) {
  background: #0096c7;
}

.submitBtn:disabled {
  background: #aaa;
  cursor: not-allowed;
}

.footer {
  margin-top: 2rem;
  color: #666;
  font-size: 0.95rem;
}

.link {
  color: #0077b6;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success { background: #27ae60; }

/* RESPONSIVE */
@media (max-width: 480px) {
  .card { padding: 2rem; }
  .title { font-size: 1.9rem; }
}
    `,
    title3: "ProductDetailPage.module.css",
    css3: `
    .container {
  min-height: 100vh;
  padding-bottom: 4rem;
}

/* BREADCRUMB */
.breadcrumb {
  padding: 1rem 2rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.breadLink {
  color: #0077b6;
  text-decoration: none;
}

.breadLink:hover {
  text-decoration: underline;
}

.breadSep {
  margin: 0 0.5rem;
  color: #999;
}

.breadCurrent {
  color: #03045e;
  font-weight: 500;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

/* GALLERY */
.gallery {
  flex: 1;
}

.mainImage {
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  background: #f8f9fa;
  margin-bottom: 1rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
}

.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s ease;
}

.thumb:hover {
  border-color: #00b4d8;
}

/* INFO */
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 2.2rem;
  margin: 0;
  color: #03045e;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #e0e0e0;
  font-size: 1.1rem;
}

.starFilled {
  color: #00b4d8;
}

.reviewCount {
  color: #0077b6;
  font-size: 0.95rem;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #023e8a;
}

.description {
  line-height: 1.6;
  color: #444;
  margin: 1rem 0;
}

.stock {
  font-weight: 500;
}

.inStock {
  color: #27ae60;
}

.outOfStock {
  color: #e74c3c;
}

/* ACTIONS */
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.qtyBtn {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.qtyBtn:hover:not(:disabled) {
  background: #e9ecef;
}

.qtyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qtyInput {
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 1rem;
}

.addBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.addBtn:hover:not(:disabled) {
  background: #0096c7;
}

.addBtn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.thumbActive {
  border: 3px solid #00b4d8;
  opacity: 1;
}

/* ———————— REVIEWS SECTION ———————— */
.reviews {
  width: 100%;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.reviews h2 {
  font-size: 1.5rem;
  color: #03045e;
  margin-bottom: 1.5rem;
}

.reviewForm {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.reviewForm > div {
  margin-bottom: 1rem;
}

.reviews > p {
  text-align: left;
  color: #666;
  font-size: 1rem;
  padding: 1rem 0;
}

.reviewForm label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #023e8a;
}

.reviewForm select,
.reviewForm textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
}

.reviewForm textarea {
  resize: vertical;
  min-height: 100px;
}

.reviewForm button {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reviewForm button:hover:not(:disabled) {
  background: #0096c7;
}

.reviewForm button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Review List */
.reviewList {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.review {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #00b4d8;
}

.reviewHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.reviewHeader strong {
  color: #03045e;
  font-size: 1.1rem;
}

.reviewRating {
  color: #00b4d8;
  font-size: 1.1rem;
}

.review p {
  margin: 0.5rem 0;
  color: #444;
  line-height: 1.6;
}

.review small {
  color: #666;
  font-size: 0.85rem;
}

/* Empty state */
.reviews p {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  padding: 2rem;
}

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    fadeOut 0.3s ease 2.7s forwards;
  z-index: 1000;
}

.toast.success {
  background: #27ae60;
}

.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

/* RELATED */
.related {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.relatedTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #03045e;
  text-align: center;
}

.relatedGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.comingSoon {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 3rem;
}

/* STATES */
.loading,
.error,
.empty {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: white;
}
.empty {
  color: #6c757d;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .gallery {
    order: -1;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
  .mainImage {
    height: 350px;
  }
  .actions {
    flex-direction: column;
  }
  .quantity {
    width: 100%;
    justify-content: center;
  }
  .addBtn {
    width: 100%;
  }
}

    `,
    title4: "ProfilePgae.module.css",
    css4: `
    /* ProfilePage.module.css - Complete & Fixed */

.container {
  min-height: 100vh;
  padding: 2rem;
  background: #f5f7fa;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
  font-weight: 700;
}

.main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* CARD - Personal Information */
.card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.cardTitle {
  font-size: 1.6rem;
  margin: 0;
  color: #03045e;
}

.editBtn {
  background: #00b4d8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.editBtn:hover {
  background: #0096c7;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;
}

.input:focus {
  outline: none;
  border-color: #00b4d8;
  box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
}

.saveBtn {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}

.saveBtn:hover:not(:disabled) {
  background: #219a52;
}

.saveBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.info p {
  margin: 0.75rem 0;
  font-size: 1.1rem;
}

.info strong {
  color: #023e8a;
}

/* ERROR MESSAGE inside form */
.errorMsg {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

ofi .error {
  text-align: center;
  color: #e74c3c;
  font-size: 1.2rem;
  padding: 2.5rem;
  background: #fdf2f2;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 600px;
  border: 1px solid #fcc1c1;
}

/* LOADING STATE */
.loading {
  text-align: center;
  font-size: 1.3rem;
  color: #00b4d8;
  padding: 4rem 2rem;
  font-weight: 500;
  animation: pulse 1.8s infinite;
}

/* ORDER HISTORY SECTION */
.ordersSection {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
  font-weight: 600;
}

.tableContainer {
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table th {
  background: #f8f9fa;
  color: #03045e;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.table tbody tr:hover {
  background: #f8f9fa;
}

/* Status Badges */
.status {
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.status.pending {
  background: #fff3cd;
  color: #856404;
}
.status.processing {
  background: #d1ecf1;
  color: #0c5460;
}
.status.shipped {
  background: #d4edda;
  color: #155724;
}
.status.delivered {
  background: #c3e6cb;
  color: #0f5132;
}
.status.cancelled {
  background: #f8d7da;
  color: #721c24;
}

.viewLink {
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.viewLink:hover {
  color: #00b4d8;
  text-decoration: underline;
}

.empty {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.shopLink {
  color: #00b4d8;
  font-weight: 600;
  text-decoration: none;
}

.shopLink:hover {
  text-decoration: underline;
}

/* TOAST NOTIFICATION */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.4s ease,
    fadeOut 0.4s ease 2.6s forwards;
  z-index: 1000;
  min-width: 200px;
  text-align: center;
}

.toast.success {
  background: #27ae60;
}

/* ANIMATIONS */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .main {
    padding: 0 0.5rem;
  }

  .cardHeader {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .editBtn,
  .saveBtn {
    width: 100%;
  }

  .title {
    font-size: 2rem;
  }

  .tableContainer {
    font-size: 0.9rem;
  }

  .toast {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}

    `,
  },

  {
    taskId: "ecom27",
    title: "AdminDashboard.module.css",
    css: `
     /* client/src/pages/AdminDashboard.module.css */

.container {
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #03045e;
}

.welcome {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

/* TABS */
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.tab:hover {
  background: #e8f4f8;
  color: #03045e;
}

.tabActive {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #03045e;
  color: white;
}

/* OVERVIEW GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.statCard {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.statCard h3 {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.statNumber {
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
  margin: 0;
}

/* SECTION */
.section {
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: #03045e;
  text-align: center;
}

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sectionHeader h2 {
  margin: 0;
  text-align: left;
}

.tableContainer {
  overflow-x: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table th {
  background: #f8f9fa;
  color: #03045e;
  font-weight: 600;
}

.table tbody tr:hover {
  background: #f8f9fa;
}

/* Product Thumbnail */
.productThumb {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

/* Stock Indicators */
.stockGood {
  color: #27ae60;
  font-weight: 600;
}

.stockLow {
  color: #f39c12;
  font-weight: 600;
}

.stockOut {
  color: #e74c3c;
  font-weight: 600;
}

/* Role Badges */
.roleAdmin {
  background: #e8f4f8;
  color: #0077b6;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

.roleUser {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Actions column */
.actions {
  display: flex;
  gap: 0.5rem;
}

.statusSelect {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
}

/* Buttons */
.addBtn {
  background: #0077b6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.addBtn:hover {
  background: #023e8a;
  transform: translateY(-2px);
}

.viewBtn,
.promoteBtn,
.demoteBtn,
.editBtn,
.deleteBtn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.viewBtn {
  background: #0077b6;
  color: white;
}

.viewBtn:hover {
  background: #023e8a;
}

.editBtn {
  background: #27ae60;
  color: white;
}

.editBtn:hover {
  background: #1e8449;
}

.deleteBtn {
  background: #e74c3c;
  color: white;
}

.deleteBtn:hover {
  background: #c0392b;
}

.promoteBtn {
  background: #27ae60;
  color: white;
}

.promoteBtn:hover:not(:disabled) {
  background: #1e8449;
}

.demoteBtn {
  background: #e74c3c;
  color: white;
}

.demoteBtn:hover:not(:disabled) {
  background: #c0392b;
}

.promoteBtn:disabled,
.demoteBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal Styles */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.modalHeader h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #03045e;
  text-align: left;
}

.modalClose {
  background: none;
  border: none;
  font-size: 1.75rem;
  color: #999;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.modalClose:hover {
  background: #f3f4f6;
  color: #333;
}

.modalBody {
  padding: 1.5rem;
}

.modalFooter {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  background: #f8f9fa;
  border-radius: 0 0 16px 16px;
}

/* Form Styles */
.formGroup {
  margin-bottom: 1.25rem;
}

.formGroup label {
  display: block;
  font-weight: 600;
  color: #03045e;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.formRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #0077b6;
  box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
}

.inputError {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  font-size: 1rem;
  background: #fdf2f2;
  box-sizing: border-box;
}

.inputError:focus {
  outline: none;
  border-color: #c0392b;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.errorText {
  display: block;
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.375rem;
}

textarea.input,
textarea.inputError {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

/* Modal Buttons */
.cancelBtn {
  background: white;
  color: #666;
  padding: 0.75rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancelBtn:hover:not(:disabled) {
  background: #f3f4f6;
}

.cancelBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.saveBtn {
  background: #0077b6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.saveBtn:hover:not(:disabled) {
  background: #023e8a;
}

.saveBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Confirm Delete Modal */
.confirmModal {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.confirmModal h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #03045e;
}

.confirmModal p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.confirmActions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.confirmDeleteBtn {
  background: #e74c3c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.confirmDeleteBtn:hover:not(:disabled) {
  background: #c0392b;
}

.confirmDeleteBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  z-index: 1100;
  animation: slideIn 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.toast.success {
  background: #27ae60;
}

.toast.error {
  background: #e74c3c;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.loading {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #0096c7;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .tabs {
    gap: 0.5rem;
  }

  .tab,
  .tabActive {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .sectionHeader {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .sectionHeader h2 {
    text-align: center;
    width: 100%;
  }

  .addBtn {
    width: 100%;
  }

  .formRow {
    grid-template-columns: 1fr;
  }

  .modal {
    margin: 0.5rem;
    max-height: 95vh;
  }

  .actions {
    flex-direction: column;
  }

  .toast {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}

    `,
  },
  {
    taskId: "ecom31",
    title: "StripePaymentForm.module.css",
    css: `
    .form {
  width: 100%;
}

.secureHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #22c55e;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.lockIcon {
  width: 16px;
  height: 16px;
}

.cardGroup {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #374151;
  letter-spacing: 0.01em;
}

.cardInputContainer {
  position: relative;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.875rem 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.cardInputContainer:focus-within {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.stripeInput {
  width: 100%;
}

.cardBrand {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  color: #6b7280;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.submitButton {
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 52px;
}

.submitButton:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
}

.submitButton:active:not(:disabled) {
  transform: translateY(0);
}

.submitButton:disabled {
  background: #d1d5db;
  box-shadow: none;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.cardLogos {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #f3f4f6;
}

.cardLogos img {
  height: 24px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.cardLogos img:hover {
  opacity: 1;
}

.poweredBy {
  text-align: center;
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 1rem;
}

.stripeLogo {
  font-weight: 700;
  background: linear-gradient(135deg, #635bff, #a259ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
} 
    `,
    title2: "CheckoutPage.module.css",
    css2: `
    .container {
  min-height: 100vh;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #03045e;
}

/* MAIN LAYOUT */
.main {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* FORM */
.formSection {
  flex: 1;
}

.sectionTitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
  color: #03045e;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #023e8a;
}

.input,
.select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.inputError {
  border-color: #e74c3c;
}

.errorMsg {
  color: #e74c3c;
  font-size: 0.875rem;
}

.row {
  display: flex;
  gap: 1rem;
}

.row > .inputGroup {
  flex: 1;
}

.paymentTitle {
  margin: 2rem 0 1rem;
  font-size: 1.2rem;
  color: #03045e;
}

.paymentOptions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radioLabel {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.radioLabel input {
  cursor: pointer;
}

/* SUMMARY */
.summary {
  flex: 0 0 380px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.summaryItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: #444;
}

.totals {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
}

.totalRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.totalFinal {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 700;
  color: #023e8a;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #eee;
}

.placeOrderBtn {
  width: 100%;
  background: #00b4d8;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s ease;
}

.placeOrderBtn:hover:not(:disabled) {
  background: #0096c7;
}

.placeOrderBtn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.paymentFormContainer {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease-out;
}

.paymentFormContainer h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
}

.closeBtn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.75rem;
  color: #666;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.closeBtn:hover {
  background: #f0f0f0;
  color: #333;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

 .paymentFormOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.paymentFormTitle {
  font-size: 1.2rem;
  color: #03045e;
  margin: 0 0 1rem;
}



@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

/* STATES */
.loading,
.error {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.loading {
  color: #0096c7;
}
.error {
  color: #ffffff;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .main {
    flex-direction: column;
  }
  .summary {
    flex: none;
  }
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
    `,
  },

  {
    taskId: "ecom34",
    title: "AdminDashboard.module.css",
    css: `
    /* client/src/pages/AdminDashboard.module.css */

.container {
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #03045e;
}

.welcome {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

/* TABS */
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.tab:hover {
  background: #e8f4f8;
  color: #03045e;
}

.tabActive {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #03045e;
  color: white;
}

/* OVERVIEW GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.statCard {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.statCard h3 {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.statNumber {
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
  margin: 0;
}

/* SECTION */
.section {
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: #03045e;
  text-align: center;
}

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sectionHeader h2 {
  margin: 0;
  text-align: left;
}

.tableContainer {
  overflow-x: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table th {
  background: #f8f9fa;
  color: #03045e;
  font-weight: 600;
}

.table tbody tr:hover {
  background: #f8f9fa;
}

/* Product Thumbnail */
.productThumb {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

/* Stock Indicators */
.stockGood {
  color: #27ae60;
  font-weight: 600;
}

.stockLow {
  color: #f39c12;
  font-weight: 600;
}

.stockOut {
  color: #e74c3c;
  font-weight: 600;
}

/* Role Badges */
.roleAdmin {
  background: #e8f4f8;
  color: #0077b6;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

.roleUser {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Actions column */
.actions {
  display: flex;
  gap: 0.5rem;
}

.statusSelect {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
}

/* Buttons */
.addBtn {
  background: #0077b6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.addBtn:hover {
  background: #023e8a;
  transform: translateY(-2px);
}

.viewBtn,
.promoteBtn,
.demoteBtn,
.editBtn,
.deleteBtn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.viewBtn {
  background: #0077b6;
  color: white;
}

.viewBtn:hover {
  background: #023e8a;
}

.editBtn {
  background: #27ae60;
  color: white;
}

.editBtn:hover {
  background: #1e8449;
}

.deleteBtn {
  background: #e74c3c;
  color: white;
}

.deleteBtn:hover {
  background: #c0392b;
}

.promoteBtn {
  background: #27ae60;
  color: white;
}

.promoteBtn:hover:not(:disabled) {
  background: #1e8449;
}

.demoteBtn {
  background: #e74c3c;
  color: white;
}

.demoteBtn:hover:not(:disabled) {
  background: #c0392b;
}

.promoteBtn:disabled,
.demoteBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal Styles */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.modalHeader h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #03045e;
  text-align: left;
}

.modalClose {
  background: none;
  border: none;
  font-size: 1.75rem;
  color: #999;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.modalClose:hover {
  background: #f3f4f6;
  color: #333;
}

.modalBody {
  padding: 1.5rem;
}

.modalFooter {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  background: #f8f9fa;
  border-radius: 0 0 16px 16px;
}

/* Form Styles */
.formGroup {
  margin-bottom: 1.25rem;
}

.formGroup label {
  display: block;
  font-weight: 600;
  color: #03045e;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.formRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #0077b6;
  box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
}

.inputError {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  font-size: 1rem;
  background: #fdf2f2;
  box-sizing: border-box;
}

.inputError:focus {
  outline: none;
  border-color: #c0392b;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.errorText {
  display: block;
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.375rem;
}

textarea.input,
textarea.inputError {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

/* Modal Buttons */
.cancelBtn {
  background: white;
  color: #666;
  padding: 0.75rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancelBtn:hover:not(:disabled) {
  background: #f3f4f6;
}

.cancelBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.saveBtn {
  background: #0077b6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.saveBtn:hover:not(:disabled) {
  background: #023e8a;
}

.saveBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Confirm Delete Modal */
.confirmModal {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.confirmModal h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #03045e;
}

.confirmModal p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.confirmActions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.confirmDeleteBtn {
  background: #e74c3c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.confirmDeleteBtn:hover:not(:disabled) {
  background: #c0392b;
}

.confirmDeleteBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Order Modal Styles */
.orderInfo {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.orderInfoRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.orderInfoRow:not(:last-child) {
  border-bottom: 1px solid #e5e7eb;
}

.orderLabel {
  color: #666;
  font-size: 0.9rem;
}

.orderSection {
  margin-bottom: 1.5rem;
}

.orderSection h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: #03045e;
  font-weight: 600;
}

.orderDetails {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.orderDetails p {
  margin: 0;
  color: #333;
  line-height: 1.6;
}

.orderDetails p:first-child {
  margin-bottom: 0.5rem;
}

.orderItems {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.orderItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 0.75rem;
}

.orderItemImage {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.orderItemDetails {
  flex: 1;
  min-width: 0;
}

.orderItemName {
  margin: 0;
  font-weight: 600;
  color: #03045e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.orderItemMeta {
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
  color: #666;
}

.orderItemTotal {
  margin: 0;
  font-weight: 600;
  color: #023e8a;
  white-space: nowrap;
}

.orderTotalSection {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.orderTotalRow {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #666;
}

.orderGrandTotal {
  border-top: 2px solid #e5e7eb;
  margin-top: 0.5rem;
  padding-top: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: #03045e;
}

/* Order Status Badges */
.statusPending {
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.statusPaid {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.statusShipped {
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.statusDelivered {
  background: #d1fae5;
  color: #065f46;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.statusCanceled {
  background: #fee2e2;
  color: #991b1b;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.loading {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #0096c7;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .tabs {
    gap: 0.5rem;
  }

  .tab,
  .tabActive {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .sectionHeader {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .sectionHeader h2 {
    text-align: center;
    width: 100%;
  }

  .addBtn {
    width: 100%;
  }

  .formRow {
    grid-template-columns: 1fr;
  }

  .modal {
    margin: 0.5rem;
    max-height: 95vh;
  }

  .actions {
    flex-direction: column;
  }

  .orderItem {
    flex-wrap: wrap;
  }

  .orderItemDetails {
    flex: 1 1 calc(100% - 66px);
  }

  .orderItemTotal {
    width: 100%;
    text-align: right;
    padding-top: 0.5rem;
    border-top: 1px dashed #e5e7eb;
    margin-top: 0.5rem;
  }
}
 
    `,
  },
];

export default stylesData;

/*


  {
    taskId: "taskId",
    title: "Title1",
    css: `
     
    `,
    title2: "title2",
    css2: `
    
    `,
     title3: "title3",
    css3: `

    `,
     title4: "title4",
    css4: `

    `
  },
  

  */
