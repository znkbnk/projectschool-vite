const cheatsheetData = [
  {
    taskId: "3D-Interactive-Card",
    content: [
      {
        title: "Components & Hooks",
        subtitle: "App Component",
        details: [
          "Manages theme state and local storage for theme persistence.",
          "Toggles between light and dark themes.",
        ],
      },
      {
        title: "",
        subtitle: "useState Hook",
        details: ["Manages the state of the theme."],
        image: "/images/cheatsheetImages/task1/1.webp",
      },
      {
        title: "",
        subtitle: "useEffect Hook",
        details: [
          "Updates the document class and local storage when the theme changes.",
        ],
        image: "/images/cheatsheetImages/task1/2.webp",
      },
      {
        title: "Functions",
        subtitle: "getStorageTheme",
        details: [
          "Retrieves the current theme from local storage or defaults to 'light-theme'.",
        ],
        image: "/images/cheatsheetImages/task1/4.webp",
      },
      {
        title: "",
        subtitle: "toggleTheme",
        details: ["Toggles between 'light-theme' and 'dark-theme'."],
        image: "/images/cheatsheetImages/task1/6.webp",
      },
    ],
  },
  {
    taskId: "BMI-Tracker",
    content: [
      {
        title: "State Management",
        subtitle: "",
        details: [
          "The useState hook is used to manage state within functional components. Here, we create state variables for weight, height, BMI, and the message to keep track of user inputs and calculation results.",
        ],
        image: "/images/cheatsheetImages/task2/1.webp",
      },
      {
        title: "Handle Input Changes",
        subtitle: "",
        details: [
          "Controlled components in React use state to manage form inputs. The onChange event handlers ensure that the state variables weight and height are updated with the current values of the input fields as the user types.",
        ],
        image: "/images/cheatsheetImages/task2/2.webp",
      },
      {
        title: "Calculate BMI",
        subtitle: "",
        details: [
          "The BMI calculation requires converting height to meters and using the BMI formula. This function handles the computation and ensures that valid inputs are provided before performing the calculation. It also updates the state with the calculated BMI and a message indicating the BMI category.",
        ],
        image: "/images/cheatsheetImages/task2/3.webp",
      },
      {
        title: "Determine BMI Category",
        subtitle: "",
        details: [
          "This function uses the calculated BMI value to determine the user's BMI category based on predefined ranges. It returns a message that categorizes the BMI as underweight, normal, overweight, or other categories.",
        ],
        image: "/images/cheatsheetImages/task2/4.webp",
      },
      {
        title: "Reset Form",
        subtitle: "",
        details: [
          "Providing a reset button allows users to clear all the data from the form and reset the component's state. This enhances user experience by allowing users to quickly start over with new inputs.",
        ],
        image: "/images/cheatsheetImages/task2/5.webp",
      },
    ],
  },
  {
    taskId: "Dark-Light-Mode-Toggle",
    content: [
      {
        title: "State Management",
        subtitle: "",
        details: [
          "State is a way to manage dynamic data in a component. In this case, theme holds the current theme (light or dark).",
          "'useState' initializes theme with a value from local storage using the 'getStorageTheme' function.",
          "'setTheme' is a function to update the state.",
        ],
        image: "/images/cheatsheetImages/task3/1.webp",
      },

      {
        title: "Effect Hook",
        subtitle: "",
        details: [
          "'useEffect' is used for side effects, such as changing the document's class or updating local storage when theme changes.",
          "The second argument, [theme], specifies that the effect runs every time theme changes.",
        ],
        image: "/images/cheatsheetImages/task3/2.webp",
      },

      {
        title: "Event Handling",
        subtitle: "",
        details: [
          "Functions are reusable blocks of code. 'toggleTheme' switches the current theme based on its value.",
          "This function is called when the button is clicked.",
        ],
        image: "/images/cheatsheetImages/task3/3.webp",
      },
      {
        title: "Rendering Articles",
        subtitle: "",
        details: [
          "Mapping over an array to render components is common in React. Here, 'data.map' iterates through data and renders an Article component for each item.",
          "key is a unique identifier for each item in the list, helping React optimize rendering.",
        ],
        image: "/images/cheatsheetImages/task3/4.webp",
      },
      {
        title: "Moment.js for Date Formatting",
        subtitle: "",
        details: [
          "Moment.js is a library for date manipulation. It formats the date prop into a human-readable string.",
          "This enhances the user experience by displaying dates in a more accessible way.",
        ],
        image: "/images/cheatsheetImages/task3/5.webp",
      },
    ],
  },
  {
    taskId: "Sortify-Search-by-Name",
    content: [
      {
        title: "Setting up the State",
        subtitle: "",
        details: [
          "In React, state is used to manage dynamic data in the component. Here, 'search' holds the search query entered by the user, and 'contacts' holds the list of contact data from data.js",
          "A React hook used to initialize state. 'setSearch' and 'setContacts' are functions used to update the 'search' and 'contacts' state, respectively.",
        ],
        image: "/images/cheatsheetImages/task4/1.webp",
      },
      {
        title: "Handling Input Changes",
        subtitle: "",
        details: [
          "A function is used to define a specific task. Here, the 'handleSearchChange' function updates the 'search' state when the user types in the input field.",
          "e.target.value: Captures the current value typed by the user.",
        ],
        image: "/images/cheatsheetImages/task4/2.webp",
      },
      {
        title: "Sorting Contacts by First Name",
        subtitle: "",
        details: [
          "sortName function: This function sorts the contacts alphabetically by first name.",
          "spread operator (...contacts): It creates a copy of the contacts array before sorting, which avoids mutating the original state.",
          "setContacts: Updates the contacts state with the sorted data.",
        ],
        image: "/images/cheatsheetImages/task4/3.webp",
      },
      {
        title: "JSX: Rendering the Form Input and Table",
        subtitle: "",
        details: [
          "Form.Control: A Bootstrap input field to enter the search query. The 'onChange' event handler listens for user input and triggers 'handleSearchChange'.",
        ],
        image: "/images/cheatsheetImages/task4/4.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Button component: A Bootstrap button that calls the 'sortName' function when clicked, sorting the contacts.",
        ],
        image: "/images/cheatsheetImages/task4/5.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Table component: This uses the Bootstrap 'Table' component to render the list of contacts in a tabular format. The 'filter' method is used to display only contacts that match the search input.",
          "map method: It loops through each contact and displays the relevant information in the table rows.",
        ],
        image: "/images/cheatsheetImages/task4/6.webp",
      },
      {
        title: "Filtering Contacts",
        subtitle: "",
        details: [
          "filter method: Filters the contacts based on the search input. If the 'search' string is empty, it returns all contacts. Otherwise, it returns only those contacts whose first name includes the search term.",
        ],
        image: "/images/cheatsheetImages/task4/7.webp",
      },
    ],
  },

  {
    taskId: "Simple-Quiz-App",
    content: [
      {
        title: "State Management",
        subtitle: "",
        details: [
          "State: A way to store and manage dynamic values in React.",
          "'useState': This hook allows you to create a state variable and a function to update it.",
          "'currentQuestion': Tracks the current question index.",
          "'score': Tracks the total score of the quiz.",
          "'correctAnswers': Tracks the number of correct answers.",
          "'incorrectAnswers': Tracks the number of incorrect answers.",
        ],
        image: "/images/cheatsheetImages/task5/1.webp",
      },
      {
        title: "Array of Questions",
        subtitle: "",
        details: [
          "Array: Stores a collection of objects, each containing a 'questionText' and an 'answerOptions' array.",
          "'answerOptions': Each object inside 'answerOptions' holds an answerText and a boolean 'isCorrect' to mark if the answer is correct.",
        ],
        image: "/images/cheatsheetImages/task5/2.webp",
      },
      {
        title: "Rendering Questions and Answers",
        subtitle: "",
        details: [
          "Displaying Questions: Access the 'questionText' of the current question using currentQuestion.",
          "Mapping over answer options: map() iterates over each answer option and renders a button for each one.",
          "onClick Event: When a button is clicked, it calls 'handleAnswerButtonClick', passing whether the selected answer is correct.",
        ],
        image: "/images/cheatsheetImages/task5/3.webp",
      },
      {
        title: "Answer Button Handling",
        subtitle: "",
        details: [
          "Event Handler: Handles what happens when an answer is clicked.",
          "isCorrect: Passed in to check if the selected answer is correct.",
          "State Updates: Increments 'score' and 'correctAnswers' if correct, or 'incorrectAnswers' if incorrect.",
          "Next Question: Moves to the next question or calls 'finishQuiz' if the quiz is over.",
        ],
        image: "/images/cheatsheetImages/task5/4.webp",
      },
      {
        title: "Finishing the Quiz",
        subtitle: "",
        details: [
          "finishQuiz: Updates 'currentQuestion' to a value beyond the number of questions, which triggers the score section to render.",
        ],
        image: "/images/cheatsheetImages/task5/5.webp",
      },
      {
        title: "Conditional Rendering",
        subtitle: "",
        details: [
          "Conditional Rendering: Displays either the score section or the question section based on whether the quiz is finished (currentQuestion >= questions.length).",
        ],
        image: "/images/cheatsheetImages/task5/6.webp",
      },
    ],
  },
  {
    taskId: "FAQ",
    content: [
      {
        title: "useState Hook",
        subtitle:
          "useStat': React's useState hook is used to add state to functional components.",
        details: [
          "Here, 'questions' holds the state of the d'ata, and 'setQuestions' is the function used to update that state.",
          "State is used to store information that changes over time, and it re-renders the component when updated.",
        ],
        image: "/images/cheatsheetImages/task6/1.webp",
      },
      {
        title: "Mapping Over an Array",
        subtitle:
          "map(): The 'map()' function loops over the questions array and renders a Question component for each element.",
        details: [
          "This allows dynamic rendering of multiple 'Question' components based on the 'data'.",
          "'key={question.id}' ensures each item has a unique identifier, which is important for React's reconciliation process to optimize rendering.",
          "'{...question}' passes all properties of the 'question' object (like 'title' and 'info') as props to the 'Question' component.",
        ],
        image: "/images/cheatsheetImages/task6/2.webp",
      },
      {
        title: "Component Props",
        subtitle: "",
        details: [
          "Props are arguments passed from parent components to child components. Here, title and info are destructured from the props object.",
          "Props allow data to be passed from the App component to each Question component.",
        ],
        image: "/images/cheatsheetImages/task6/3.webp",
      },
      {
        title: "Event Handling",
        subtitle:
          "onClick Event: The button listens for a click event, and when clicked, the 'setShowInfo' function toggles the value of 'showInfo' (true/false).",
        details: [
          "Clicking the button switches between showing (true) and hiding (false) the information.",
          "This is a common way to toggle visibility in React using the component's state.",
        ],
        image: "/images/cheatsheetImages/task6/4.webp",
      },
      {
        title: "Conditional Rendering",
        subtitle:
          "Conditional Rendering: This line conditionally renders the <p> element. If 'showInfo' is true, the paragraph containing 'info' is displayed; otherwise, it is hidden.",
        details: [
          "This is used to show or hide the question's details based on the user's interaction.",
        ],
        image: "/images/cheatsheetImages/task6/5.webp",
      },
      {
        title: "Icons for UI Feedback",
        subtitle:
          "Ternary Operator: The ? : syntax is used to display one of two icons based on the state of showInfo. If showInfo is true, it shows the 'minus' icon, otherwise it shows the 'plus' icon.",
        details: [
          "This provides visual feedback to the user, indicating whether the question's details are visible or not.",
        ],
        image: "/images/cheatsheetImages/task6/6.webp",
      },
    ],
  },

  {
    taskId: "Birthday-Reminder",
    content: [
      {
        title: "",
        subtitle: "useState Hook",
        details: [
          "'useState' is used to manage the state of the people array, which holds the list of individuals. 'data' is initially imported and assigned as the default value.",
          "'setPeople([])' clears the list when the 'clear all' button is clicked.",
        ],
        image: "/images/cheatsheetImages/task7/1.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "'onClick' is an event handler that listens for button clicks. When clicked, the state of 'people' is updated to an empty array, clearing the list.",
        ],
        image: "/images/cheatsheetImages/task7/2.webp",
      },
      {
        title: "",
        subtitle: "Rendering Components",
        details: [
          "The List component is responsible for displaying the filtered list of people who have birthdays today, which is calculated using BirthdayLogic.",
        ],
        image: "/images/cheatsheetImages/task7/3.webp",
      },
      {
        title: "",
        subtitle: "Date Manipulation",
        details: [
          "'Date' objects are used to get today's date and format it as MM-DD to compare with each person's date of birth (DOB).",
        ],
        image: "/images/cheatsheetImages/task7/4.webp",
      },
      {
        title: "",
        subtitle: "Filtering an Array",
        details: [
          "The 'filter()' function is used to create a new array, 'birthdaysToday', by checking whether each person's birthday matches today's date.",
        ],
        image: "/images/cheatsheetImages/task7/5.webp",
      },
      {
        title: "",
        subtitle: "Props",
        details: [
          "The 'List' component receives 'people' as props, which contains an array of people who have birthdays today. Props allow data to be passed down from parent components (like App) to child components (like List).",
        ],
        image: "/images/cheatsheetImages/task7/6.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "Conditional rendering is used to display the list only if there are birthdays today (people.length > 0).",
        ],
        image: "/images/cheatsheetImages/task7/7.webp",
      },
      {
        title: "",
        subtitle: "Rendering a List",
        details: [
          "The 'map()' function iterates over the 'people' array and returns JSX for each person, which includes their 'id', 'name', 'age', and 'image'.",
        ],
        image: "/images/cheatsheetImages/task7/8.webp",
      },
    ],
  },

  {
    taskId: "Dynamic-Box-Shadow-Generator",
    content: [
      {
        title: "",
        subtitle: "State Management: useState Hook",
        details: [
          "useState: The useState hook is used to manage component state. shadows and controls are initialized with an empty array and an initial control respectively. The setShadows and setControls functions update these states when changes occur.",
          "shadows: Stores an array of shadow styles as strings. Each string represents one layer of a CSS box-shadow.",
          "controls: Manages the number of ControlBox components dynamically rendered on the UI. Each control corresponds to a box shadow layer.",
        ],
        image: "/images/cheatsheetImages/task8/1.webp",
      },
      {
        title: "",
        subtitle: "Updating Box Shadows: updateShadow Function",
        details: [
          "If the inset property is true, the shadow string will include inset. Otherwise, it's a regular shadow.",
          "The corresponding shadow in the shadows array is updated, and the state is set with setShadows.",
          "s: Object representing shadow properties (x, y, blur, spread, color, and inset).",
          "id: Index of the shadow layer being updated.",
        ],
        image: "/images/cheatsheetImages/task8/2.webp",
      },
      {
        title: "",
        subtitle: "Adding New Shadow Layers: addShadow Function",
        details: [
          "A new control is appended to the controls array, allowing another ControlBox to render.",
          "A blank shadow string is added to the shadows array, ready to be filled in when the user interacts with the new ControlBox.",
        ],
        image: "/images/cheatsheetImages/task8/3.webp",
      },
      {
        title: "",
        subtitle: "Undo Last Shadow Layer: undoAddLayer Function",
        details: [
          "Checks if there is more than one layer present.",
          "Uses pop() to remove the last control and shadow, updating the state with setControls and setShadows.",
        ],
        image: "/images/cheatsheetImages/task8/4.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Control Box Components: ControlBox",
        details: [
          "key={index}: React requires a key prop when rendering lists of elements to uniquely identify each component.",
          "id={index}: The id prop is passed to identify which shadow is being updated.",
          "updateShadow={updateShadow}: Passes the updateShadow function as a prop, allowing ControlBox to update the corresponding shadow in the parent component (App).",
        ],
        image: "/images/cheatsheetImages/task8/5.webp",
      },
      {
        title: "",
        subtitle: "Event Handling for Adding and Undoing Layers",
        details: [
          "The onClick event handler is used to call the respective function. addShadow adds a new shadow layer, and undoAddLayer removes the last one.",
        ],
        image: "/images/cheatsheetImages/task8/6.webp",
      },
    ],
  },
  {
    taskId: "Memory-Game",
    content: [
      {
        title: "App Component",
        subtitle: "State",
        details: [
          "useState(false) creates a 'startAgain' state, which controls when the game should reset.",
        ],
        image: "/images/cheatsheetImages/task9/1.webp",
      },
      {
        title: "",
        subtitle: "Function handleStartAgain",
        details: [
          "When the 'Start Again' button is clicked, the 'startAgain' state is set to 'true', which triggers a reset of the game.",
          "After 100 milliseconds, it resets to false, allowing the user to start the game again.",
        ],
        image: "/images/cheatsheetImages/task9/2.webp",
      },
      {
        title: "",
        subtitle: "Passing Props",
        details: [
          "The 'Cards' component is passed the 'startAgain' prop, which tells it to shuffle and reset the cards when the game restarts.",
        ],
        image: "/images/cheatsheetImages/task9/3.webp",
      },
      {
        title: "Card Component",
        subtitle: "Props",
        details: [
          "The 'Card' component receives 3 props: item, id, and handleClick. Props are used to pass data from the 'Cards' component.",
        ],
        image: "/images/cheatsheetImages/task9/4.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Class",
        details: [
          "The card's class changes based on its status (item.stat). It can be 'correct', 'wrong', or '' (empty).",
        ],
        image: "/images/cheatsheetImages/task9/5.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "onClick={() => handleClick(id)} is an event handler that calls the 'handleClick' function from 'Cards' when a card is clicked.",
        ],
        image: "/images/cheatsheetImages/task9/6.webp",
      },
      {
        title: "Cards Component",
        subtitle: "Shuffling Items",
        details: [
          "setItems([...items].sort(() => Math.random() - 0.5)) shuffles the card array at the beginning and when the game restarts.",
        ],
        image: "/images/cheatsheetImages/task9/7.webp",
      },
      {
        title: "",
        subtitle: "useEffect for Reset",
        details: [
          "useEffect listens for changes in the startAgain prop. When it's true, it resets the items and previous selection.",
        ],
        image: "/images/cheatsheetImages/task9/8.webp",
      },
      {
        title: "",
        subtitle: "State 'prev'",
        details: [
          "'prev' holds the index of the previously clicked card. If no card has been clicked, 'prev' is -1.",
        ],
        image: "/images/cheatsheetImages/task9/9.webp",
      },
      {
        title: "",
        subtitle: "Matching Logic",
        details: [
          "The 'check' function compares the 'id' of the current card with the previous card. If they match, both are marked as 'correct', otherwise, they are temporarily marked 'wrong'.",
        ],
        image: "/images/cheatsheetImages/task9/10.webp",
      },
      {
        title: "",
        subtitle: "Click Handling",
        details: [
          "The handleClick function controls the logic when a card is clicked. If it's the first card, its stat is set to 'active'. If it's the second card, the check function compares them.",
        ],
        image: "/images/cheatsheetImages/task9/11.webp",
      },
    ],
  },

  {
    taskId: "Color-Generator",
    content: [
      {
        title: "App Component",
        subtitle: "Setting up State and Default Color List",
        details: [
          "color: Stores the user's input (the hex code).",
          "error: Boolean state for handling invalid input.",
          "list: Stores a list of shades generated from the input color using the 'Values' library.",
        ],
        image: "/images/cheatsheetImages/task10/1.webp",
      },
      {
        title: "",
        subtitle: "Handling Form Submission and Color Generation",
        details: [
          "e.preventDefault(): Prevents the form from refreshing the page.",
          "new Values(color).all(20): Uses the 'Values' library to generate a color palette with 20 variations of the input color.",
          "setList(colors): Updates the state to hold the new color palette.",
          "setError(true): Displays an error when an invalid color is input.",
          "Use 'try...catch' for error handling when working with external libraries or user inputs.",
        ],
        image: "/images/cheatsheetImages/task10/2.webp",
      },
      {
        title: "",
        subtitle: "Form and User Input",
        details: [
          "The 'input' field captures user input for a hex color code and updates the 'color' state via 'setColor'.",
          "The onSubmit event on the 'form' triggers the 'handleSubmit' function.",
          "{error ? 'error' : null} conditionally adds the error class if the user enters invalid input.",
        ],
        image: "/images/cheatsheetImages/task10/3.webp",
      },
      {
        title: "",
        subtitle: "Displaying the Color List",
        details: [
          "The list state holds the array of colors. The map method iterates through each color, rendering the SingleColor component.",
          "key={index}: A unique key for each item.",
          "{...color}: Destructures and passes all color properties as props.",
          "hexColor: Specific prop for the color's hex value.",
        ],
        image: "/images/cheatsheetImages/task10/4.webp",
      },
      {
        title: "SingleColor Component",
        subtitle: "Managing Single Color Display",
        details: [
          "alert: State to handle when the user copies the hex value to the clipboard.",
          "rgb.join(','): Converts the RGB array into a comma-separated string for the background color.",
          "hexValue: The hex string of the color, prefixed with #.",
          "The 'rgb' and 'hexColor' props are derived from the parent 'App' component and used to display and style the color.",
        ],
        image: "/images/cheatsheetImages/task10/5.webp",
      },
      {
        title: "",
        subtitle: "Clipboard Copy Functionality",
        details: [
          "navigator.clipboard.writeText(hexValue): Copies the hex color code to the clipboard.",
          "setAlert(true): Displays an alert message confirming the color has been copied.",
        ],
        image: "/images/cheatsheetImages/task10/6.webp",
      },
      {
        title: "",
        subtitle: "Rendering Single Color Box",
        details: [
          "The className conditionally adds the color-light class for colors with a light background (based on the index).",
          "The style prop sets the backgroundColor using the RGB values.",
          "onClick={copyToClipboard} triggers the copyToClipboard function when the user clicks the color box.",
        ],
        image: "/images/cheatsheetImages/task10/7.webp",
      },
    ],
  },

  {
    taskId: "Range-Slider",
    content: [
      {
        title: "",
        subtitle: " State Management with useState Hook",
        details: [
          "'useState' is used to manage the state of 'minVal' (left slider) and 'maxVal' (right slider).",
          "Initial state values are set to the 'min' and 'max' props.",
          "'setMinVal' and 'setMaxVal' are used to update the state whenever the slider values change.",
        ],
        image: "/images/cheatsheetImages/task11/1.webp",
      },
      {
        title: "",
        subtitle: "Refs for Direct DOM Manipulation",
        details: [
          "'useRef' is used to directly access and manipulate DOM elements ('leftval', 'rightval', and 'range').",
          "This allows us to move the sliders dynamically by changing their position in the DOM without causing a full re-render of the component.",
        ],
        image: "/images/cheatsheetImages/task11/2.webp",
      },
      {
        title: "",
        subtitle: "Handling Slider Changes",
        details: [
          "<input type='range' />: This creates a slider input. The 'min', 'max', and 'value' attributes control the range limits and current value.",
          "When the slider is moved, the 'onChange' event updates 'minVal' or 'maxVal' using the 'setMinVal' or 'setMaxVal' functions.",
          "The 'Math.min' and 'Math.max' methods ensure that the sliders don't cross over each other by limiting their values.",
        ],
        image: "/images/cheatsheetImages/task11/3.webp",
      },
      {
        title: "",
        subtitle: "Dynamic CSS with useEffect",
        details: [
          "'useEffect' is used to update the slider's CSS based on changes to 'minVal' and 'maxVal'.",
          "The position (left) and the transform properties are dynamically set on the sliders (leftval, rightval) based on the current values.",
          "This ensures the sliders visually move as the user interacts with them.",
        ],
        image: "/images/cheatsheetImages/task11/4.webp",
      },
      {
        title: "",
        subtitle: "'useCallback' to Optimize Performance",
        details: [
          "useCallback memoizes the getPercent function to avoid recalculating the percentage every time the component renders.",
          "This is useful for performance optimization when the same function is used multiple times within useEffect.",
        ],
        image: "/images/cheatsheetImages/task11/5.webp",
      },
      {
        title: "",
        subtitle: "'PropTypes' for Type Checking",
        details: [
          "'PropTypes' is used to ensure the 'min', 'max', and 'onChange' props are passed correctly to the component.",
          "This provides type safety, ensuring that the correct types of data are used.",
        ],
        image: "/images/cheatsheetImages/task11/6.webp",
      },
    ],
  },
  {
    taskId: "Form-Validation-Component",
    content: [
      {
        title: "",
        subtitle: "Setting Up the State",
        details: [
          "Each 'useState' call creates a state variable and a function to update that state.",
          "Use 'useState' to manage and track form data.",
          "Separate state for error messages and styles helps keep the form dynamic.",
        ],
        image: "/images/cheatsheetImages/task12/1.webp",
      },
      {
        title: "",
        subtitle: "Validation Logic",
        details: [
          "e.preventDefault() prevents the default form submission behavior.",
          "Username must be longer than 8 characters.",
          "Email must include @gmail.",
          "Password must be at least 8 characters long.",
          "Password and confirm password must match.",
          "Use conditionals to check input validity.",
          "Dynamically update error messages and border colors for a better user experience.",
        ],
        image: "/images/cheatsheetImages/task12/2.webp",
      },
      {
        title: "",
        subtitle: "Form JSX with Dynamic Styling",
        details: [
          "Each input's border color is dynamically set based on validation (userColor, emailColor, etc.).",
          "Error messages are displayed below each input using conditional rendering (errorUserName, errorEmail, etc.).",
          "The onChange event handler updates the respective state variable whenever the input value changes.",
          "Use inline styles to change the border color dynamically for better visual feedback.",
          "Render error messages conditionally to guide the user if inputs are invalid.",
        ],
      },
      {
        title: "",
        subtitle: "Button Event Handler",
        details: [
          "Always use e.preventDefault() to stop the default form behavior if you are handling form submission via JavaScript.",
        ],
        image: "/images/cheatsheetImages/task12/3.webp",
      },
    ],
  },
  {
    taskId: "Interactive-Power-BI-Bar-Chart",
    content: [
      {
        title: "",
        subtitle: "Imports and Setup",
        details: [
          "'useState' from React is used to manage state in functional components.",
          "The 'Bar' component from 'react-chartjs-2' is used to create a bar chart.",
          "The necessary components from Chart.js are imported and registered to ensure the chart functions correctly.",
          "Always register Chart.js components like 'CategoryScale', 'LinearScale', 'BarElement', 'Tooltip', and 'Legend' before using them in a React component.",
        ],
        image: "/images/cheatsheetImages/taskLive2/1.webp",
      },
      {
        title: "",
        subtitle: "State and Initial Data",
        details: [
          "'ageGroups': An array of age group labels for the x-axis of the bar chart.",
          "'userData': An array representing the number of users for each age group.",
          "'useState(null)': 'filteredData' is used to manage the filtered version of the user data. Initially, it's set to 'null' because no filtering is applied when the page first loads.",
        ],
        image: "/images/cheatsheetImages/taskLive2/2.webp",
      },
      {
        title: "",
        subtitle: "Chart Data Setup",
        details: [
          "'labels': The x-axis labels representing the age groups.",
          "'datasets': This array defines the dataset for the chart. The 'data' property represents the number of users for each age group.",
          "'backgroundColor' and 'borderColor': Define the color scheme for the bars.",
          "'borderWidth': Defines the thickness of the bar borders.",
          "The 'data' object is the main configuration for Chart.js, allowing you to customize labels, datasets, and styles.",
        ],
        image: "/images/cheatsheetImages/taskLive2/3.webp",
      },
      {
        title: "",
        subtitle: "Chart Options with Event Handling",
        details: [
          "'responsive': Ensures the chart adapts to the size of its container.",
          "'plugins.legend.display': Controls whether the legend (key) is displayed.",
          "'onClick': Event handler that captures clicks on a specific bar. It retrieves the index of the clicked bar and uses that to determine which age group was selected.",
          "'handleBarClick': Called when a bar is clicked to apply filtering.",
        ],
        image: "/images/cheatsheetImages/taskLive2/4.webp",
      },
      {
        title: "",
        subtitle: "Handle Bar Click for Filtering",
        details: [
          "'handleBarClick': This function filters the user data based on the selected age group. It loops through the original 'userData' and sets all values to 0 except for the selected age group.",
          "'setFilteredData': Updates the chart with the filtered data, changing the dataset to show only the selected age group in a different color.",
          "You can use 'map' to transform arrays and conditionally filter data. This is useful when dynamically updating charts or UI elements based on user input.",
        ],
        image: "/images/cheatsheetImages/taskLive2/5.webp",
      },
      {
        title: "",
        subtitle: "Return JSX with Chart",
        details: [
          "The 'Bar' component from 'react-chartjs-2' is rendered here, displaying the bar chart. If 'filteredData' is available, the chart will show the filtered dataset; otherwise, it defaults to the original dataset (data).",
          "The chart also uses the 'options' for customization and event handling.",
          "Use conditional rendering (filteredData || data) to ensure your chart displays the correct data, whether it's the original or filtered version.",
        ],
        image: "/images/cheatsheetImages/taskLive2/6.webp",
      },
    ],
  },
  {
    taskId: "Markdown-Preview-App",
    content: [
      {
        title: "",
        subtitle: "State Management with useState",
        details: [
          "'useState': This is a React hook used to manage state in functional components.",
          "'markdown': This is the state variable that holds the current value of the markdown text.",
          "'setMarkdown': This is the function used to update the value of 'markdown'.",
          "'# Markdown Preview:': The initial value for the 'markdown' state.",
          "The state helps React components to keep track of data between renders. When 'setMarkdown' is called, it updates the markd'own value and re-renders the component.",
        ],
        image: "/images/cheatsheetImages/task13/1.webp",
      },
      {
        title: "",
        subtitle: "Handling User Input (textarea)",
        details: [
          "<textarea>: HTML element where the user can type their markdown text.",
          "value={markdown}: Links the value of the textarea to the 'markdown' state, so the content of the textarea reflects the current state.",
          "onChange={(e) => setMarkdown(e.target.value)}: This is an event handler that listens for user input. It triggers when the user types, capturing the new value with 'e.target.value' and updating the 'markdown' state.",
          "Event Handling in React involves passing a function to handle the user interaction (e.g., typing, clicking). The 'onChange' event is used to handle form inputs like 'textarea'.",
        ],
        image: "/images/cheatsheetImages/task13/2.webp",
      },
    ],
  },
  {
    taskId: "Menu-App",
    content: [
      {
        title: "App Component",
        subtitle: "State",
        details: [
          "'menuItems': Holds the list of items to be displayed.",
          "'categories': Stores all the unique categories from 'items' plus 'all'.",
          "The useState hook is used to manage the state of the menuItems and categories.",
        ],
        image: "/images/cheatsheetImages/task14/1.webp",
      },
      {
        title: "Event Handling",
        subtitle: "",
        details: [
          " The filterItems function filters the items based on the selected category.",
          "When the category is 'all', it resets menuItems to the entire items array. Otherwise, it filters items by category.",
        ],
        image: "/images/cheatsheetImages/task14/2.webp",
      },
      {
        title: "Categories Component",
        subtitle: "Props",
        details: [
          "The Categories component accepts categories (array of categories) and filterItems (function to filter menu items) as props.",
        ],
        image: "/images/cheatsheetImages/task14/5.webp",
      },
      {
        title: "",
        subtitle: "State",
        details: ["Manages the currently active category using useState."],
        image: "/images/cheatsheetImages/task14/3.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "The handleCategoryClick function is called when a category button is clicked.",
          "This function triggers the 'filterItems' function from 'App' to update the list of menu items and sets the clicked category as the active one.",
        ],
        image: "/images/cheatsheetImages/task14/4.webp",
      },

      {
        title: "",
        subtitle: "Conditional Styling",
        details: [
          "Adds the 'active' class to the button of the currently selected category.",
        ],
        image: "/images/cheatsheetImages/task14/6.webp",
      },
      {
        title: "Menu Component",
        subtitle: "Props",
        details: [
          "The Menu component receives items as props, which is an array of menu items.",
        ],
        image: "/images/cheatsheetImages/task14/7.webp",
      },
      {
        title: "",
        subtitle: "Rendering Items",
        details: [
          " It uses the .map() method to loop through the 'items' array and display each menu item in a structured format.",
          "Menu item properties like 'id', 'title', 'img', 'desc', and 'price' are destructured for easier use within the JSX.",
        ],
        image: "/images/cheatsheetImages/task14/8.webp",
      },
    ],
  },
  {
    taskId: "Responsive-Navbar",
    content: [
      {
        title: "",
        subtitle: "State Management: useState Hook",
        details: [
          "Initializes a state variable 'showLinks' to control whether the navigation links are displayed or not.",
          "'useState' is used to declare a piece of state in functional components.",
          "'showLinks' holds the current state (either 'true' or 'false').",
          "'setShowLinks' is the function used to update the state.",
          "'useState(false)' means the links will initially be hidden.",
        ],
        image: "/images/cheatsheetImages/task15/1.webp",
      },
      {
        title: "",
        subtitle: "References: useRef Hook",
        details: [
          "'linksContainerRef' and 'linksRef' are references to DOM elements (<div> and <ul> respectively).",
          "'useRef' allows you to directly interact with DOM elements without re-rendering the component.",
          "'useRef' is commonly used when you need direct access to a DOM element.",
          "It's helpful for manipulating element styles or sizes.",
          "The 'useRef' doesn't cause re-renders when its value is changed.",
        ],
        image: "/images/cheatsheetImages/task15/2.webp",
      },
      {
        title: "",
        subtitle: "Event Handling: toggleLinks Function",
        details: [
          "Toggles the state of 'showLinks' between 'true' and 'false' when the menu icon is clicked.",
          "Event handling in React involves creating functions like 'toggleLinks' and assigning them to event listeners (e.g., 'onClick').",
          "Inverting the state with '!showLinks' ensures that every click changes the visibility of the links.",
        ],
        image: "/images/cheatsheetImages/task15/3.webp",
      },
      {
        title: "",
        subtitle: "Side Effects: useEffect Hook",
        details: [
          "Calculates the height of the 'linksRef' (<ul> element) and dynamically sets the height of the 'linksContainerRef' (<div> element) based on whether the links are visible or not.",
          "'useEffect' is used to perform side effects like DOM manipulation after the component has rendered.",
          "The 'useEffect' runs every time 'showLinks' changes, adjusting the height of the container.",
          "Without this, the height transition for the links container would be static or fixed.",
        ],
        image: "/images/cheatsheetImages/task15/4.webp",
      },
      {
        title: "",
        subtitle: "Rendering the JSX Elements",
        details: [
          "Renders a button with an event handler attached to toggle the links when clicked. The 'FaBars' component represents the menu icon.",
          "React components like 'FaBars' from 'react-icons' are reusable pieces of UI, in this case, an icon.",
          "The 'onClick' event triggers the 'toggleLinks' function to show or hide the navigation links.",
          "Use components from libraries like 'react-icons' for scalable and lightweight icons.",
        ],
        image: "/images/cheatsheetImages/task15/5.webp",
      },
      {
        title: "",
        subtitle: "Rendering the Links",
        details: [
          "Renders a list of navigation links dynamically by mapping over the 'links' array.",
          "In React, you can render lists using 'map()' to dynamically create elements based on data.",
          "Each child in a list must have a unique 'key' prop ('id' in this case) to help React optimize rendering.",
          "Use the 'map()' function to easily render multiple elements from an array.",
        ],
        image: "/images/cheatsheetImages/task15/6.webp",
      },
    ],
  },
  {
    taskId: "Pagination-Page",
    content: [
      {
        title: "App.js",
        subtitle: "State Management",
        details: [
          "Manage the app's current state, including the current page and followers.",
          "'useState': Initializes state variables 'page' (current page number) and 'followers' (list of followers to display on the current page).",
        ],
        image: "/images/cheatsheetImages/task16/1.webp",
      },
      {
        title: "",
        subtitle: "useEffect Hook",
        details: [
          "Trigger side effects (e.g., updating followers) when data or page changes.",
          "'useEffect': Runs when 'data', 'loading', or 'page' changes, updating the list of followers for the current page.",
          "",
        ],
        image: "/images/cheatsheetImages/task16/2.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "Navigate between pages and jump to a specific page.",
          "'nextPage': Advances to the next page, looping back to the first if at the end.",
          "'prevPage': Goes to the previous page, looping to the last if at the first.",
          "'handlePage': Jumps to a specific page number.",
        ],
        image: "/images/cheatsheetImages/task16/3.webp",
      },
      {
        title: "",
        subtitle: "Rendering Followers",
        details: [
          "Display followers for the current page.",
          "Renders a list of followers by passing follower data to the Follower component for display.",
        ],
        image: "/images/cheatsheetImages/task16/4.webp",
      },
      {
        title: "Follower.js",
        subtitle: "Follower Component",
        details: [
          "Display a single follower's information.",
          "Receives props (avatar_url, login, html_url) and displays the follower's avatar, username, and profile link.",
          "",
        ],
        image: "/images/cheatsheetImages/task16/5.webp",
      },
      {
        title: "useFetch.js",
        subtitle: "Custom Hook",
        details: [
          "Fetch follower data from the GitHub API and paginate it.",
          "'loading': Tracks whether data is still being fetched.",
          "'data': Stores paginated follower data.",
          "'getProducts': Fetches the follower data and applies pagination.",
          "'useEffect': Ensures getProducts runs when the component mounts.",
        ],
        image: "/images/cheatsheetImages/task16/6.webp",
      },
      {
        title: "utils.js",
        subtitle: "Pagination Logic",
        details: [
          "Paginate the followers into smaller chunks for each page.",
          "Breaks the follower data into smaller arrays, each representing a page with 10 followers.",
          "",
        ],
        image: "/images/cheatsheetImages/task16/7.webp",
      },
    ],
  },

  {
    taskId: "Search-Bar",
    content: [
      {
        title: "App Component",
        subtitle: "Initializing State",
        details: [
          "Initializes an empty array 'results' to store search results.",
          "State is used to store and manage dynamic data (the search results in this case).",
          "Think of 'useState' as a way to make the UI react to changes in data. When 'results' change, the UI will update accordingly.",
        ],
        image: "/images/cheatsheetImages/task17/1.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering of Results",
        details: [
          "This checks if there are any results before rendering the 'SearchResultsList' component.",
          "Prevents rendering the list if no search results exist.",
          "Conditional rendering is useful when you only want to display certain parts of the UI based on specific conditions (e.g., results existing or not).",
        ],
        image: "/images/cheatsheetImages/task17/2.webp",
      },
      {
        title: "",
        subtitle: "Passing Props to Child Components",
        details: [
          "Passes the setResults function as a prop to the SearchBar component.",
          "This allows the SearchBar component to update the search results in the parent component (App).",
          "Props allow parent-child communication in React. You can pass functions or data from a parent to a child to handle logic outside the child component.",
        ],
        image: "/images/cheatsheetImages/task17/3.webp",
      },
      {
        title: "SearchBar Component",
        subtitle: "Handling Input State",
        details: [
          "input stores the value typed by the user into the search bar.",
          "setInput updates the input value when the user types.",
          "State management is essential for handling user input dynamically.",
        ],
        image: "/images/cheatsheetImages/task17/4.webp",
      },
      {
        title: "",
        subtitle: "Fetching Data Based on User Input",
        details: [
          "Fetches user data from an API and filters it based on the 'value' typed by the user.",
          "Retrieves user data that matches the search query.",
          "This is a basic example of fetching data asynchronously and updating the UI based on user input.",
        ],
        image: "/images/cheatsheetImages/task17/5.webp",
      },
      {
        title: "",
        subtitle: "Handling User Typing (Input Change)",
        details: [
          "Updates the input value and triggers the 'fetchData' function to search for matching users.",
          "To fetch data dynamically as the user types.",
          "'handleChange' is an event handler that allows dynamic interaction with the search input.",
        ],
        image: "/images/cheatsheetImages/task17/6.webp",
      },
      {
        title: "",
        subtitle: "Handling Selection",
        details: [
          "Sets the selected result, hides the search results, and clears the search input.",
          "To update the state when a user selects a result and reset the search bar.",
          "This function manages the flow after the user has clicked on a search result, updating the app state and UI accordingly.",
        ],
        image: "/images/cheatsheetImages/task17/8.webp",
      },
      {
        title: "",
        subtitle: "Conditionally Displaying Selected Result",
        details: [
          "Conditionally renders the selected result's details only if a result has been selected.",
          "To display the selected user's information dynamically.",
          "This is another example of conditional rendering, which is essential when handling dynamic data.",
        ],
        image: "/images/cheatsheetImages/task17/9.webp",
      },

      {
        title: "SearchResult Component",
        subtitle: "Displaying Each User Result",
        details: [
          "Displays the name of a user and calls the 'onSelect' function when clicked.",
          "To display a search result and allow the user to select it.",
          "Using the 'onClick' event, we can detect when a user selects a search result and handle the selection.",
        ],
        image: "/images/cheatsheetImages/task17/7.webp",
      },
      {
        title: "SearchResultsList Component",
        subtitle: "Rendering the List of Results",
        details: [
          "Iterates over the 'results' array and renders a 'SearchResult' component for each user.",
          "To render each user result as an individual clickable item.",
          "Always use 'key' props when rendering lists in React to ensure each item is uniquely identified by React for performance optimization.",
        ],
        image: "/images/cheatsheetImages/task17/10.webp",
      },
    ],
  },
  {
    taskId: "Dropdown",
    content: [
      {
        title: "",
        subtitle: "Setting Up State with useState",
        details: [
          "'isOpenSelect' is a state variable that tracks whether the dropdown options are visible.",
          "'setIsOpenSelect' is the function used to update 'isOpenSelect'.",
          "'useState(false)' initializes the dropdown as closed (false).",
          "You can toggle the dropdown's visibility by updating the state ('true' for open, 'false' for closed).",
        ],
        image: "/images/cheatsheetImages/task18/1.webp",
      },
      {
        title: "",
        subtitle: "Using useRef for Uncontrolled Input",
        details: [
          "'languageInput' is a ref that directly references the DOM element (<input>).",
          "Refs are useful when you want to access or manipulate DOM elements without triggering a re-render.",
          "'useRef' is ideal for situations like focusing an input field, or in this case, updating the input value without using state.",
        ],
        image: "/images/cheatsheetImages/task18/2.webp",
      },
      {
        title: "",
        subtitle: "Handling Input Click Event to Toggle Dropdown",
        details: [
          "The input field is used to display the selected language.",
          "'onClick={toggleOptions}' triggers the dropdown to open or close when clicked.",
          "'onBlur={() => setIsOpenSelect(false)}' closes the dropdown when the input loses focus.",
          "'ref={languageInput}' associates the 'input' with the 'useRef' created earlier.",
          "The 'readOnly' attribute prevents the user from typing directly into the input field.",
          "Use 'onBlur' to close the dropdown when clicking outside of the input field.",
        ],
        image: "/images/cheatsheetImages/task18/3.webp",
      },
      {
        title: "",
        subtitle: "Toggling Dropdown Options Visibility",
        details: [
          "This function toggles the state between 'true' and 'false', effectively opening or closing the dropdown.",
          "Use '!isOpenSelect' to switch between the current state ('true' or 'false').",
        ],
        image: "/images/cheatsheetImages/task18/4.webp",
      },
      {
        title: "",
        subtitle: "Rendering the Dropdown Options Conditionally",
        details: [
          "The dropdown list is shown conditionally based on the value of 'isOpenSelect'. If 'true', the 'options' class receives the 'active' class, making the options visible.",
          "'optionsArray' is an array of languages that is mapped to a list of <li> elements.",
          "Each list item triggers the 'selectLanguage' function when clicked, updating the input value.",
          "Use '.map()' to dynamically render a list of items. Attach event listeners (onClick) to handle user interactions.",
        ],
        image: "/images/cheatsheetImages/task18/5.webp",
      },
      {
        title: "",
        subtitle: "Selecting a Language and Updating the Input",
        details: [
          "When an option is clicked, 'e.target.textContent' retrieves the text of the clicked <li> element (the language name).",
          "'languageInput.current.value' sets the input field's value to the selected language.",
          "'setIsOpenSelect(false)' closes the dropdown after selection.",
          "Use 'e.target.textContent' to capture the text of the clicked option.",
        ],
        image: "/images/cheatsheetImages/task18/6.webp",
      },
      {
        title: "",
        subtitle: "Icon Toggling with Conditional Class",
        details: [
          "The <span> contains an icon (faCaretDown) from FontAwesome, which serves as a visual cue for the dropdown.",
          "The 'className' changes based on the 'isOpenSelect' state. When 'active', the icon rotates or changes styling to indicate the dropdown is open.",
          "Use conditional classes to style elements based on component state (e.g., for rotating the caret icon).",
        ],
        image: "/images/cheatsheetImages/task18/7.webp",
      },
    ],
  },
  {
    taskId: "Sidebar",
    content: [
      {
        title: "",
        subtitle: "Props - Passing Data to SidebarItem",
        details: [
          "Key Prop: 'key={index}' helps React optimize rendering by uniquely identifying each list item.",
          "Props: 'item' is passed as a prop to 'SidebarItem', allowing the child component to receive and use data from its parent.",
        ],
        image: "/images/cheatsheetImages/task19/1.webp",
      },
      {
        title: "",
        subtitle: "useState Hook - Managing State in SidebarItem",
        details: [
          "State Management: 'open' holds the state (whether the sidebar item is expanded). 'setOpen' is used to update the state.",
          "useState Hook: Initializes the state to 'false', meaning the sidebar item is collapsed by default.",
        ],
        image: "/images/cheatsheetImages/task19/2.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering - Toggling Sidebar Items",
        details: [
          "Conditional Rendering: Uses a ternary operator to apply different classes based on the 'open' state. When 'open' is 'true', the 'open' class is applied.",
          "Dynamic Classes: The class name changes depending on the component state, affecting the UI styling (e.g., expanding or collapsing the sidebar item).",
        ],
        image: "/images/cheatsheetImages/task19/3.webp",
      },
      {
        title: "",
        subtitle: "Event Handling - Toggling State",
        details: [
          "Event Handling: The 'onClick' event triggers a function to update the 'open' state. When clicked, 'setOpen' toggles the state between 'true' and 'false'.",
          "State Toggle: '!open' inverts the current state (expands or collapses the menu).",
        ],
        image: "/images/cheatsheetImages/task19/4.webp",
      },
      {
        title: "",
        subtitle: "Recursive Rendering - Nested Sidebar Items",
        details: [
          "Recursive Components: If an item has children (item.childrens), it recursively renders 'SidebarItem' for each child, enabling nested submenus.",
          "Mapping: Loops over the children array and renders each child as a 'SidebarItem'.",
        ],
        image: "/images/cheatsheetImages/task19/5.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering - Render Link if No Children",
        details: [
          "No Children: If the item does not have children (!item.childrens), it renders as a clickable link (<a>).",
          "Optional Props: 'item.path' defines the link's URL; 'item.icon' displays an icon if provided.",
        ],
        image: "/images/cheatsheetImages/task19/6.webp",
      },
      {
        title: "",
        subtitle: "Sidebar Component - Mapping Items",
        details: [
          "Mapping: Iterates over the 'items' array from the 'sidebar.json' file and renders a 'SidebarItem' for each element.",
          "Key Prop: Provides a unique 'key' to help React track each item during re-renders.",
        ],
        image: "/images/cheatsheetImages/task19/7.webp",
      },
    ],
  },
  {
    taskId: "Dynamic-Table-with-Sorting-and-Copy-Functionality",
    content: [
      {
        title: "",
        subtitle: "useTable Hook - Creating a Table",
        details: [
          "useTable Hook: 'useTable' is a hook provided by 'react-table' for managing table functionalities like rows and columns.",
          "Destructuring: Functions like 'getTableProps', 'headerGroups', and 'rows' are extracted to manage table rendering, sorting, and row preparation.",
          "useSortBy: Hook used to add sorting capabilities to the table.",
        ],
        image: "/images/cheatsheetImages/task20/1.webp",
      },
      {
        title: "",
        subtitle: "Defining Columns for the Table",
        details: [
          "Columns Definition: Each object inside the array defines a column, with 'Header' being the column name and 'accessor' being the key from the data used to display the corresponding value.",
          "Memoization: 'React.useMemo' is used to optimize performance by memoizing the column structure.",
        ],
        image: "/images/cheatsheetImages/task20/2.webp",
      },
      {
        title: "",
        subtitle: "Memoizing Data",
        details: [
          "Memoizing Data: The useMemo hook is used to avoid recalculating the data on every render.",
          "fakeData: This variable holds mock data (from MOCK_DATA.json), which is then passed into the table as the data source.",
        ],
        image: "/images/cheatsheetImages/task20/3.webp",
      },
      {
        title: "",
        subtitle: "Rendering Table Headers",
        details: [
          "Dynamic Rendering: Uses 'headerGroups.map()' to dynamically render the table headers.",
          "Sorting Indicators: Shows sorting indicators (🔽 for descending and 🔼 for ascending) based on the sorting state.",
          "Sorting Props: 'getSortByToggleProps' adds sorting capabilities to the column headers.",
        ],
        image: "/images/cheatsheetImages/task20/4.webp",
      },
      {
        title: "",
        subtitle: "Rendering Table Body",
        details: [
          "Row Mapping: Loops through 'rows' and calls 'prepareRow(row)' to prepare each row for rendering.",
          "Cell Rendering: For each row, the cells are rendered dynamically with 'row.cells.map(cell => ... )'.",
        ],
        image: "/images/cheatsheetImages/task20/5.webp",
      },
      {
        title: "",
        subtitle: "Cell with Actions - Custom Button",
        details: [
          "Custom Cell Render: The 'Cell' property allows you to define custom content for a cell. In this case, a 'CopyButton' component is rendered, passing the full name as the text.",
          "Accessing Row Data: 'row.original' gives you access to the row's original data (in this case, first_name and last_name).",
        ],
        image: "/images/cheatsheetImages/task20/6.webp",
      },
      {
        title: "",
        subtitle: "CopyButton Component - Copying Text to Clipboard",
        details: [
          "Clipboard API: 'navigator.clipboard.writeText()' copies the provided text to the user's clipboard.",
          "Button Component: This reusable 'CopyButton' displays a button and triggers the 'copyToClipboard' function on click.",
        ],
        image: "/images/cheatsheetImages/task20/7.webp",
      },
      {
        title: "",
        subtitle: "React-Table Sorting Example",
        details: [
          "Sorting Indicator: Shows an arrow indicating whether the column is sorted in ascending or descending order based on the 'isSorted' and 'isSortedDesc' properties.",
        ],
        image: "/images/cheatsheetImages/task20/8.webp",
      },
    ],
  },
  {
    taskId: "Activity-Management-Dashboard",
    content: [
      {
        title: "",
        subtitle: "Display Activity Name",
        details: [
          "Use Material-UI's Typography component for consistent text styling and sizing throughout the application.",
        ],
        image: "/images/cheatsheetImages/taskLive3/1.webp",
      },
      {
        title: "",
        subtitle: "Display List of Records",
        details: [
          "The 'map()' function is essential for rendering lists in React. It ensures that each record is uniquely identified with a 'key' prop, which helps React optimize rendering performance.",
        ],
        image: "/images/cheatsheetImages/taskLive3/2.webp",
      },
      {
        title: "",
        subtitle: "Display User Claims",
        details: [
          "Combining user names with dates in the displayed text provides a clear context for the claims, improving user understanding.",
        ],
        image: "/images/cheatsheetImages/taskLive3/3.webp",
      },
      {
        title: "",
        subtitle: "Display Rules List",
        details: [
          "Using a simple list format for rules enhances readability and helps participants easily find important information.",
        ],
        image: "/images/cheatsheetImages/taskLive3/4.webp",
      },
    ],
  },
  {
    taskId: "To-Do-App",
    content: [
      {
        title: "",
        subtitle: "Managing State with useState",
        details: [
          "'useState' is a React Hook used to manage state in functional components.",
          "Here, 'todos' holds the list of todo items, and 'setTodos' is the function to update this state.",
          "To initialize state, pass the default value as an argument to 'useState'.",
        ],
        image: "/images/cheatsheetImages/task21/1.webp",
      },
      {
        title: "",
        subtitle: "Adding Todos",
        details: [
          "This function adds a new todo item to the 'todos' state.",
          "It creates a new todo object with a unique ID (using uuidv4), a task description, and initial values for 'completed' and 'isEditing'.",
          "Always spread the existing state when updating it to maintain its previous values.",
        ],
        image: "/images/cheatsheetImages/task21/2.webp",
      },
      {
        title: "",
        subtitle: "Deleting Todos",
        details: [
          "This function removes a todo from the list by filtering out the todo with the given ID.",
          "'filter' creates a new array excluding the todo that matches the ID.",
          "Use 'filter' for immutability; it returns a new array instead of modifying the existing state.",
        ],
        image: "/images/cheatsheetImages/task21/3.webp",
      },
      {
        title: "",
        subtitle: "Toggling Completion Status",
        details: [
          "This function toggles the 'completed' status of a todo item by updating the relevant todo's state.",
          "It uses 'map' to create a new array with the updated todo.",
          "Always return a new object when updating state to ensure React can detect changes.",
        ],
        image: "/images/cheatsheetImages/task21/4.webp",
      },
      {
        title: "",
        subtitle: "Editing Todos",
        details: [
          "This function updates the task of a todo and toggles its editing state.",
          "Similar to toggling completion, it uses 'map' to create a new array with the updated todo.",
          "When modifying objects in state, always use spread syntax to preserve immutability.",
        ],
        image: "/images/cheatsheetImages/task21/5.webp",
      },
      {
        title: "",
        subtitle: "Handling Form Submission",
        details: [
          "This function handles the form submission for adding a new todo.",
          "'e.preventDefault()' prevents the default form submission behavior, allowing for custom handling.",
          "It checks if the input value is not empty before calling 'addTodo'.",
        ],
        image: "/images/cheatsheetImages/task21/6.webp",
      },
      {
        title: "",
        subtitle: "Using Props",
        details: [
          "Props allow data to be passed from parent components to child components.",
          "Here, 'editTodo' and 'task' are received as props, enabling the 'EditTodoForm' to access the necessary functionality and data.",
          "Use destructuring to easily access props in functional components.",
        ],
        image: "/images/cheatsheetImages/task21/7.webp",
      },
      {
        title: "",
        subtitle: "Displaying Toast Notifications",
        details: [
          "The application uses 'react-toastify' to display notifications when todos are marked as completed or incomplete.",
          "'toast.success()' creates a success notification.",
          "Notifications improve user experience by providing feedback on actions taken.",
        ],
        image: "/images/cheatsheetImages/task21/8.webp",
      },
    ],
  },
  {
    taskId: "Testimonials",
    content: [
      {
        title: "",
        subtitle: "State Initialization",
        details: [
          "'currentIndex': Tracks which testimonial is currently displayed.",
          "'setCurrentIndex': Updates the value of currentIndex.",
          "'useState(0)': Initializes the state variable 'currentIndex' to 0, meaning the first testimonial will be displayed initially.",
        ],
        image: "/images/cheatsheetImages/task22/4.webp",
      },
      {
        title: "",
        subtitle: "GSAP Animation using useEffect",
        details: [
          "'useEffect': This Hook runs after the component renders. The empty [] ensures it runs only once (on mount).",
          "'gsap.to': Animates the '.testimonials' class by changing the background color over 4 seconds, repeating infinitely (repeat: -1) with a 'yoyo' effect (reverses the animation).",
          "GSAP is highly customizable for adding animations and transitions.",
        ],
        image: "/images/cheatsheetImages/task22/1.webp",
      },
      {
        title: "",
        subtitle: "Navigation Functions",
        details: [
          "'handlePrevClick': Decreases the current index to show the previous testimonial. Uses modulus (%) to loop back to the last item when reaching the beginning.",
          "'handleNextClick': Increases the current index to show the next testimonial. Loops back to the first item when reaching the end.",
          "Using 'modulus' (%) is a common trick for creating circular navigation.",
        ],
        image: "/images/cheatsheetImages/task22/2.webp",
      },
      {
        title: "",
        subtitle: "Rendering the Testimonials",
        details: [
          "'testimonials[currentIndex]': Displays the current testimonial's quote and author based on the 'currentIndex' state.",
        ],
        image: "/images/cheatsheetImages/task22/3.webp",
      },
    ],
  },
  {
    taskId: "Voice-to-Text",
    content: [
      {
        title: "",
        subtitle: "Component Setup",
        details: [
          "'regenerator-runtime': Required for async functions (like 'SpeechRecognition') in environments that don't support them natively.",
          "'useSpeechRecognition': A hook from 'react-speech-recognition' that converts speech to text.",
          "'useClipboard': A hook from 'react-use-clipboard' that handles copying text to the clipboard.",
        ],
        image: "/images/cheatsheetImages/task23/1.webp",
      },
      {
        title: "",
        subtitle: "State Initialization",
        details: [
          "'textToCopy': Stores the text to be copied to the clipboard.",
          "'setTextToCopy': Updates the 'textToCopy' value.",
          "'useClipboard': Takes two parameters: the text to copy (textToCopy) and an optional settings object (successDuration: 1000), which defines how long the 'Copied!' message will be displayed.",
          "'isCopied': A boolean value that becomes 'true' when the text is successfully copied.",
        ],
        image: "/images/cheatsheetImages/task23/2.webp",
      },
      {
        title: "",
        subtitle: "Speech Recognition Hook",
        details: [
          "'startListening': A function that starts listening for speech input using the 'SpeechRecognition.startListening' method.",
          "'continuous: true': Ensures the speech input continues until manually stopped.",
          "'language: 'en-IN'': Specifies the input language (English - India in this case).",
          "'transcript': Holds the text converted from speech.",
          "'browserSupportsSpeechRecognition': Boolean that indicates if the user's browser supports speech recognition.",
        ],
        image: "/images/cheatsheetImages/task23/3.webp",
      },
      {
        title: "",
        subtitle: "Rendering the App UI",
        details: [
          "Start Listening Button: Starts speech recognition using 'startListening()'.",
          "Stop Listening Button: Stops speech recognition with 'SpeechRecognition.stopListening()'.",
        ],
        image: "/images/cheatsheetImages/task23/4.webp",
      },
    ],
  },
  {
    taskId: "Text-to-Voice",
    content: [
      {
        title: "Event Handlers",
        subtitle: "Handling Input Changes",
        details: [
          "Updates 'inputText' when the user types in the textarea.",
          "'event' Object: Contains information about the event, such as the current value of the input.",
          "Event Handling allows your application to respond to user interactions.",
          "Always extract necessary data from the event object to update the state accordingly.",
        ],
        image: "/images/cheatsheetImages/task24/1.webp",
      },
      {
        title: "",
        subtitle: "Handling the Speak Action",
        details: [
          "Checks if 'inputText' is not empty or just whitespace.",
          "'SpeechSynthesisUtterance': Creates a speech request with the provided text.",
          "'speechSynthesis.speak': Initiates the speech.",
          "Conditional Logic ensures that actions are performed only when appropriate.",
          "Always validate user input before performing actions to enhance user experience and prevent errors.",
        ],
        image: "/images/cheatsheetImages/task24/2.webp",
      },
      {
        title: "",
        subtitle: "Speech Synthesis API",
        details: [
          "'SpeechSynthesisUtterance': An interface representing a speech request.",
          "'speechSynthesis': The controller interface for the Speech Synthesis API.",
          "Web APIs can be integrated with React to add advanced functionalities.",
          "Familiarize yourself with browser APIs to extend the capabilities of your React applications.",
        ],
        image: "/images/cheatsheetImages/task24/3.webp",
      },
    ],
  },
  {
    taskId: "Course-Finder",
    content: [
      {
        title: "",
        subtitle: "State Management with Hooks",
        details: [
          "State management is crucial for managing and tracking dynamic data in a React application. It allows components to respond to user input and render updated information.",
          "React provides the 'useState' hook to manage state in functional components. When you call 'useState', it returns a pair: the current state value and a function that lets you update it. Every time the state updates, React re-renders the component with the new state.",
          "Use meaningful names for state variables to reflect their purpose.",
          "Avoid mutating state directly; always use the setter function provided by 'useState'.",
        ],
        image: "/images/cheatsheetImages/task25/1.webp",
      },
      {
        title: "",
        subtitle: "Component Composition",
        details: [
          "Component composition allows you to build complex UIs from simple components. This approach promotes code reusability and maintainability.",
          "In React, components can be nested within one another, allowing you to break down the UI into smaller, manageable pieces. This separation of concerns makes it easier to manage the application.",
          "Keep components small and focused on a single responsibility.",
          "Use props to pass data and functions down to child components.",
        ],
        image: "/images/cheatsheetImages/task25/2.webp",
      },
      {
        title: "",
        subtitle: "Handling Events",
        details: [
          "Handling events is essential for creating interactive user interfaces. React provides a way to handle events in a declarative manner.",
          "You can add event listeners to JSX elements directly, similar to how you would in regular HTML. React normalizes events so that they behave consistently across different browsers.",
          "Use arrow functions or bind methods to avoid losing context for this.",
          "Consider using useCallback for optimizing performance with event handlers.",
        ],
        image: "/images/cheatsheetImages/task25/3.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "Conditional rendering allows you to render different UI elements based on the state of your application, enhancing user experience.",
          "You can use JavaScript expressions to conditionally render elements in React. This can be done using logical operators or ternary expressions.",
          "Keep conditional logic simple; consider creating separate components for complex conditions.",
          "Use short-circuit evaluation for cleaner code.",
        ],
        image: "/images/cheatsheetImages/task25/4.webp",
      },
      {
        title: "",
        subtitle: "Lifting State Up",
        details: [
          "Lifting state up helps manage shared state between components, ensuring data consistency across the application.",
          "When multiple components need to share state, you can lift the state up to their closest common ancestor. This ancestor component will then pass the state down as props.",
          "Only lift state up when necessary to avoid prop drilling.",
          "Use context or state management libraries for deep component trees.",
        ],
        image: "/images/cheatsheetImages/task25/5.webp",
      },
      {
        title: "",
        subtitle: "Using Effect Hook",
        details: [
          "The useEffect hook manages side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
          "The useEffect hook runs after the render, allowing you to perform operations that might not be directly related to rendering. You can also clean up effects when components unmount.",
          "Always clean up effects that subscribe to external data sources to prevent memory leaks.",
          "Use dependencies in the effect array wisely to control when the effect runs.",
        ],
        image: "/images/cheatsheetImages/task25/6.webp",
      },
      {
        title: "",
        subtitle: "Managing Styles",
        details: [
          "Styling components properly enhances user experience and improves the visual appeal of your application.",
          "React supports various ways to style components, including CSS stylesheets, inline styles, CSS modules, and styled-components. Choose a method that suits your project's needs.",
          "Use BEM (Block Element Modifier) methodology for class naming to maintain clarity.",
          "Consider using a CSS-in-JS library for dynamic styling based on props.",
        ],
        image: "/images/cheatsheetImages/task25/7.webp",
      },
      {
        title: "",
        subtitle: "PropTypes for Type Checking",
        details: [
          "PropTypes help ensure that components receive the correct data types, making your code more robust and easier to debug.",
          "React's prop-types library allows you to define the expected data types for props. This feature helps catch bugs by warning you when the wrong data types are passed.",
          "Use default props for optional props.",
          "Consider TypeScript for more advanced type checking in larger applications.",
        ],
        image: "/images/cheatsheetImages/task25/8.webp",
      },
    ],
  },
  {
    taskId: "React-Firebase-Application-with-ML-and-Payments",
    content: [
      {
        title: "Project Setup",
        subtitle: "Creating a React App",
        details: [
          "Create a new React app using 'npx RSPack'.",
          "This command sets up a new React application with a default configuration, including a basic file structure, development server, and build tools.",
          "npx runs the package directly without installing it globally. This command creates a directory named your-app-name and initializes a new React app inside it.",
          "Choose a meaningful app name to reflect the functionality or purpose of the app.",
        ],
      },
      {
        title: "Firebase Configuration",
        subtitle: "",
        details: [
          "This code initializes Firebase in your application, allowing access to Firebase services.",
          "You import Firebase and specific services (Auth, Firestore, Storage). The firebaseConfig object contains your project-specific configuration values obtained from the Firebase Console. Calling firebase.initializeApp(firebaseConfig) connects your app to Firebase.",
          "Ensure you include all necessary Firebase services according to your application needs.",
        ],
        image: "/images/cheatsheetImages/taskLive5/1.webp",
      },
      {
        title: "Authentication with Firebase",
        subtitle: "User Registration",
        details: [
          "This function handles user registration via Firebase Authentication.",
          "The createUserWithEmailAndPassword method creates a new user account with the provided email and password. If successful, a success message is logged; if an error occurs, it is caught and logged.",
          "Implement input validation for email and password to enhance security and user experience.",
        ],
        image: "/images/cheatsheetImages/taskLive5/2.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "This function handles the form submission event.",
          "'e.preventDefault()' prevents the default form submission behavior, allowing you to handle the registration logic programmatically. It calls the registerUser function with the email and password values.",
          "Bind event handlers to component state to dynamically update the UI based on user input.",
        ],
        image: "/images/cheatsheetImages/taskLive5/3.webp",
      },
      {
        title: "Firestore Database Operations",
        subtitle: "Adding Data",
        details: [
          "This function adds a new document to a Firestore collection.",
          "It uses the Firestore instance to access a specified collection and adds a new document with the data passed as an argument. If successful, a success message is logged; otherwise, it catches and logs any errors.",
          "Structure your data logically to optimize query performance and ensure ease of use in the application.",
        ],
        image: "/images/cheatsheetImages/taskLive5/4.webp",
      },
      {
        title: "",
        subtitle: "Fetching Data",
        details: [
          "This function retrieves all documents from a Firestore collection.",
          "The 'get()' method retrieves the documents, and snapshot.docs.map() transforms the documents into a more usable format by extracting the data and adding the document ID. This array is then logged to the console.",
          "Handle loading states to improve user experience while data is being fetched; consider using local state to manage this.",
        ],
        image: "/images/cheatsheetImages/taskLive5/5.webp",
      },
      {
        title: "Handling File Uploads with Firebase Storage",
        subtitle: "",
        details: [
          "This function uploads files to Firebase Storage.",
          "The put() method uploads the specified file to the storage reference created with storageRef.child(file.name). If successful, a success message is logged; if an error occurs, it is caught and logged.",
          "Implement file type and size validation before uploads to ensure compatibility and provide user feedback for better interaction.",
        ],
        image: "/images/cheatsheetImages/taskLive5/6.webp",
      },
      {
        title: "Using State and Props",
        subtitle: "State Management",
        details: [
          "The useState hook allows functional components to manage local state.",
          "useState(0) initializes the count state variable to 0. The incrementCount function updates the state when called, triggering a re-render with the new count.",
          "Keep state updates functional to avoid stale state issues, especially in asynchronous operations.",
        ],
        image: "/images/cheatsheetImages/taskLive5/7.webp",
      },
      {
        title: "",
        subtitle: "Using Props",
        details: [
          "Props are used to pass data and event handlers from parent to child components.",
          "The Greeting component receives a name prop and renders a greeting message. This allows for dynamic content based on the passed prop.",
          "Validate props using PropTypes to catch issues early in development and ensure the component receives the expected data type.",
        ],
        image: "/images/cheatsheetImages/taskLive5/8.webp",
      },
      {
        title: "Event Handling",
        subtitle: "",
        details: [
          "Controlled components keep form inputs in sync with component state.",
          "The onChange event handler updates the email state with the current input value, ensuring the input reflects the state.",
          "Consider using useEffect to perform side effects based on state changes, such as validation or API calls.",
        ],
        image: "/images/cheatsheetImages/taskLive5/9.webp",
      },
      {
        title: "Testing and Deployment",
        subtitle: "Testing Functionality",
        details: [
          "Ensure each feature works as intended before going live to provide a smooth user experience.",
          "Use browser developer tools to monitor console logs, network requests, and state changes during development.",
        ],
      },
      {
        title: "",
        subtitle: "Deployment",
        details: [
          "Firebase Hosting provides a simple way to deploy web apps globally.",
          "Running the firebase deploy command uploads your app files to Firebase and makes them accessible via a hosting URL.",
          "Set up environment variables for sensitive information (like API keys) during deployment to enhance security.",
        ],
      },
    ],
  },
  {
    taskId: "Course-Shop",
    content: [
      {
        title: "",
        subtitle: "Props",
        details: [
          "Props (short for properties) allow components to receive data from parent components, enabling dynamic and reusable UI elements.",
          "Props are immutable, meaning that a component cannot change its own props. This ensures that data flows in one direction, making the app easier to debug and reason about.",
        ],
        image: "/images/cheatsheetImages/task26/1.webp",
      },
      {
        title: "",
        subtitle: "State",
        details: [
          "State is used to manage dynamic data within a component, allowing components to react and re-render when data changes.",
          "State is mutable and is typically managed using the useState hook in functional components. Changing the state triggers a re-render of the component.",
        ],
        image: "/images/cheatsheetImages/task26/2.webp",
      },
      {
        title: "",
        subtitle: "Context API",
        details: [
          "The Context API allows sharing state across the component tree without having to pass props down manually at every level (prop drilling).",
          "Using the Context API helps manage global state, such as user authentication or themes, making the code cleaner and easier to maintain.",
        ],
        image: "/images/cheatsheetImages/task26/3.webp",
      },
      {
        title: "",
        subtitle: "React Router",
        details: [
          "React Router enables navigation between different components based on the URL, allowing for a multi-page experience in single-page applications (SPAs).",
          "By defining routes, you can control what components render based on the browser's address, enhancing user experience through client-side routing.",
        ],
        image: "/images/cheatsheetImages/task26/4.webp",
      },
      {
        title: "",
        subtitle: "Hooks",
        details: [
          "Hooks allow functional components to manage state and side effects, providing the ability to use state and lifecycle features without class components.",
          "The useEffect hook is particularly powerful for handling side effects like data fetching or subscriptions, running the provided effect after the component renders.",
        ],
        image: "/images/cheatsheetImages/task26/5.webp",
      },
      {
        title: "",
        subtitle: "Managing Forms",
        details: [
          "Managing forms is crucial for handling user inputs, validations, and submitting data to APIs or other services.",
          "React makes it easy to create controlled components where form data is handled by state, ensuring that the displayed data is always in sync with the state.",
        ],
        image: "/images/cheatsheetImages/task26/7.webp",
      },
      {
        title: "",
        subtitle: "Error Boundaries",
        details: [
          "Error boundaries catch JavaScript errors in child components and provide a fallback UI, improving user experience by preventing the entire app from crashing.",
          "Error boundaries are implemented using lifecycle methods in class components. They can handle errors gracefully and log errors for further investigation.",
        ],
        image: "/images/cheatsheetImages/task26/8.webp",
      },
    ],
  },
  {
    taskId: "MATERIALIZECSS-Portfolio",
    content: [
      {
        title: "",
        subtitle: "Importing Dependencies",
        details: [
          "import React from 'react';: This imports the React library, which is essential for creating React components and managing the component lifecycle.",
          "import 'materialize-css/dist/css/materialize.min.css': This imports the CSS file for Materialize, a modern responsive front-end framework. It provides predefined styles and components for building user interfaces.",
          "import 'material-icons/iconfont/material-icons.css': This imports Material Icons, which allows you to use a variety of icons in your app.",
          "import M from 'materialize-css': This imports the JavaScript functionalities of Materialize CSS, enabling you to use its JavaScript components, such as parallax and sidenav.",
        ],
        image: "/images/cheatsheetImages/task27/0.webp",
      },
      {
        title: "",
        subtitle: "useEffect for Initializing Materialize CSS",
        details: [
          "'useEffect' is used to initialize Materialize CSS components (Parallax and Sidenav) after the component is rendered. The empty array [] ensures this only happens once, mimicking componentDidMount in class components.",
          "'useEffect' is great for initializing third-party libraries or performing side effects when the component first mounts.",
        ],
        image: "/images/cheatsheetImages/task27/1.webp",
      },
      {
        title: "",
        subtitle: "Event Handling for Smooth Scrolling",
        details: [
          "This function prevents the default behavior of links and uses 'window.scrollTo' to smoothly scroll to the targeted section of the page. The 'section' parameter determines which part of the page to scroll to.",
          "Use event handling with 'window.scrollTo' for smooth navigation between sections. event.preventDefault() prevents reloading the page when a button is clicked.",
        ],
        image: "/images/cheatsheetImages/task27/2.webp",
      },
    ],
  },
  {
    taskId: "MaterializeCSS-Web-Toolkit",
    content: [
      {
        title: "",
        subtitle: "Setup and Initialization",
        details: [
          "The 'M' object is imported from the Materialize CSS library, giving access to its JavaScript components (such as collapsibles).",
          "The CSS file is imported to style the collapsible elements and other Materialize components.",
          "Ensure 'materialize-css' is installed via 'npm' or 'yarn' for the imports to work.",
        ],
        image: "/images/cheatsheetImages/task28/1.webp",
      },
      {
        title: "",
        subtitle: "Collapsible Initialization with useEffect",
        details: [
          "'useEffect' is a React hook that runs after the component mounts. Here, it's used to ensure that the collapsibles are initialized after the DOM elements are rendered.",
          "document.querySelectorAll(.collapsible): Selects all elements with the class '.collapsible' to apply Materialize's collapsible functionality.",
          "M.Collapsible.init: Initializes the collapsible components, applying the following options: 'accordion: false', 'inDuration', 'outDuration.'",
        ],
        image: "/images/cheatsheetImages/task28/2.webp",
      },
    ],
  },

  {
    taskId: "Cube-Image-Gallery",
    content: [
      {
        title: "",
        subtitle: "State Management",
        details: [
          "This state will control which cube face image is currently visible.",
        ],
        image: "/images/cheatsheetImages/task30/1.webp",
      },
      {
        title: "",
        subtitle: "Event Handler Function",
        details: [
          "This function handles image click events.",
          "It checks if the clicked image class (targetClass) is different from the current cubeImageClass.",
          "If they are different, it logs the image number and updates the state to show the selected image.",
        ],
        image: "/images/cheatsheetImages/task30/2.webp",
      },
      {
        title: "",
        subtitle: "Cube Image Display",
        details: [
          "A 'div' with a dynamic class name that includes both a static class (initial-position) and a state-driven class (cubeImageClass).",
          "The 'img' tags represent each face of the cube. The images will rotate based on the current class set in the state.",
        ],
        image: "/images/cheatsheetImages/task30/3.webp",
      },
      {
        title: "",
        subtitle: "Image Thumbnails",
        details: [
          "Renders a series of image inputs as buttons. Each button: Is of type image, displaying a thumbnail of the cube faces.",
          "Has an onClick event that triggers the handleImageClick function with the respective class name.",
          "This allows users to click thumbnails to change the visible cube face.",
        ],
        image: "/images/cheatsheetImages/task30/4.webp",
      },
    ],
  },
  {
    taskId: "Analog-Clock",
    content: [
      {
        title: "",
        subtitle: "useEffect Hook",
        details: [
          "Sets up the clock to update every second.",
          "'getCurrentTime' Function: Retrieves the current time from the system and converts it into degrees for the clock hands.",
          "seconds * 6: Converts seconds to degrees (360 degrees / 60 seconds = 6 degrees per second).",
          "(minutes + seconds / 60) * 6: Converts minutes to degrees.",
          "(hours + (minutes + seconds / 60) / 60) * 30: Converts hours to degrees (360 degrees / 12 hours = 30 degrees per hour).",
        ],
        image: "/images/cheatsheetImages/task31/1.webp",
      },
      {
        title: "",
        subtitle: "Interval Setup",
        details: [
          "'setInterval': Calls a function every 1000 milliseconds (1 second).",
          "Uses the previous state (prevTime) to increment the angles for each hand",
          "prevTime.seconds + 6: Updates seconds.",
          "prevTime.minutes + 6 / 60: Updates minutes.",
          "prevTime.hours + 30 / 3600: Updates hours.",
        ],
        image: "/images/cheatsheetImages/task31/2.webp",
      },
      {
        title: "",
        subtitle: "Cleanup Function",
        details: [
          "Clears the interval when the component unmounts to prevent memory leaks.",
        ],
        image: "/images/cheatsheetImages/task31/3.webp",
      },
    ],
  },
  {
    taskId: "Dynamic-Menu-Highlighter",
    content: [
      {
        title: "",
        subtitle: "Refs for DOM Manipulation",
        details: [
          "'menuRef': A reference to the menu DOM element for direct manipulation.",
          "'borderRef': A reference for the menu border to animate its position.",
        ],
        image: "/images/cheatsheetImages/task32/1.webp",
      },
      {
        title: "",
        subtitle: "Click Event Handler",
        details: [
          "'clickItem': A function that handles the click events on menu items.",
          "'setActiveIndex': Updates the state to the clicked index.",
          "Dynamically changes the body background color based on the selected menu item.",
          "'offsetMenuBorder': Adjusts the position of the menu border according to the active item.",
        ],
        image: "/images/cheatsheetImages/task32/2.webp",
      },
      {
        title: "",
        subtitle: "Positioning the Menu Border",
        details: [
          "'getBoundingClientRect': Provides the size of an element and its position relative to the viewport.",
          "Calculating Left Position: Computes the left offset for the menu border so that it is centered under the active menu item.",
          "Uses CSS transform to animate the border position.",
        ],
        image: "/images/cheatsheetImages/task32/3.webp",
      },
      {
        title: "",
        subtitle: "Effect Hook for Resize Handling",
        details: [
          "'useEffect': Runs the 'offsetMenuBorder' function when the component mounts and whenever the 'activeIndex' changes.",
          "'handleResize': Updates the border position on window resize events.",
          "Returns a function to remove the event listener when the component unmounts to prevent memory leaks.",
        ],
        image: "/images/cheatsheetImages/task32/4.webp",
      },
    ],
  },
  {
    taskId: "Order-Tracker-Mobile-App",
    content: [
      {
        title: "",
        subtitle: "Using useRef for DOM Manipulation",
        details: [
          "useRef Hook: This hook creates mutable objects that persist for the full lifetime of the component. 'ctaRef' and 'drawerRef' are references to specific DOM elements.",
          "Useful for directly manipulating DOM elements without causing re-renders.",
        ],
        image: "/images/cheatsheetImages/task33/1.webp",
      },
      {
        title: "",
        subtitle: "Side Effects with useEffect",
        details: [
          "useEffect Hook: Used to perform side effects in function components, such as setting initial styles with GSAP.",
          "The empty array [] ensures this effect runs only once when the component mounts.",
        ],
        image: "/images/cheatsheetImages/task33/2.webp",
      },
      {
        title: "",
        subtitle: "Animating Elements with GSAP",
        details: [
          "This function animates the CTA button and text, changing their position and opacity.",
          "y: Vertical position.",
          "opacity: Visibility.",
          "duration: Duration of the animation.",
          "ease: Easing function for smoothness.",
          "stagger: Creates a delay between animations of multiple elements.",
          "onComplete: Callback function triggered after the animation completes.",
        ],
        image: "/images/cheatsheetImages/task33/3.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          " The 'onClick' prop is used to specify a function (hideCTA) to run when the button is clicked. Event handlers are crucial for user interactions.",
        ],
        image: "/images/cheatsheetImages/task33/4.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering and Logic",
        details: [
          "This logic checks if the 'drawerOpen' state is true and executes the 'slideDown' function if so. This pattern can help manage what to render based on component state.",
        ],
        image: "/images/cheatsheetImages/task33/5.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Classes and Styles",
        details: [
          "Using classList.add() to change the classes of a DOM element dynamically based on interactions or state. This allows for more complex styles and behaviors.",
        ],
        image: "/images/cheatsheetImages/task33/6.webp",
      },
    ],
  },
  {
    taskId: "Timer-App",
    content: [
      {
        title: "",
        subtitle: "Initializing State",
        details: [
          "This block initializes the state for the timer (time) and the timer's active status (isActive). The timer is set to 600 seconds (10 minutes).",
          "'setTime' and 'setIsActive' are functions that update the respective state variables.",
          "Adjust the initial value of 'time' as needed for different countdown durations.",
        ],
        image: "/images/cheatsheetImages/task34/1.webp",
      },
      {
        title: "",
        subtitle: "Setting Up the Effect Hook",
        details: [
          "This block manages the timer's countdown logic. It sets up an interval that decrements the timer every second when active. It also cleans up the interval to avoid memory leaks when the component unmounts or when the timer is paused.",
          "The dependency array ([isActive, time]) ensures that the effect runs only when these values change.",
          "Be careful to clear the interval to prevent multiple intervals from running simultaneously.",
        ],
        image: "/images/cheatsheetImages/task34/2.webp",
      },
      {
        title: "Timer Control Functions",
        subtitle: "Start Timer",
        details: [
          "Activates the timer, allowing it to start counting down.",
          "This function can be linked to a button click to enable user control over the timer.",
        ],
        image: "/images/cheatsheetImages/task34/3.webp",
      },
      {
        title: "",
        subtitle: "Pause Timer",
        details: [
          "Pauses the timer, stopping the countdown without resetting the time.",
          "This function helps users take breaks without losing their progress.",
        ],
        image: "/images/cheatsheetImages/task34/4.webp",
      },
      {
        title: "",
        subtitle: "Reset Timer",
        details: [
          "Stops the timer and resets the countdown back to the initial state (10 minutes).",
          "Reset functionality is essential for user experience, allowing users to restart the timer easily",
        ],
        image: "/images/cheatsheetImages/task34/5.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Converts the time in seconds to a string formatted as 'MM' for easier readability.",
          "'padStart(2, '0')' ensures that single-digit minutes or seconds are displayed with a leading zero.",
          "This formatting enhances user experience by providing a familiar time display.",
        ],
        image: "/images/cheatsheetImages/task34/6.webp",
      },
    ],
  },
  {
    taskId: "Portfolio-Website",
    content: [
      {
        title: "Header.js Component",
        subtitle: "Defining the Functional Component and State",
        details: [
          "To define the Header component and initialize the state variable isNavOpen to manage the navigation menu's open or closed status.",
          "Use descriptive state names to enhance code readability.",
          "Initialize state with a relevant default value.",
        ],
        image: "/images/cheatsheetImages/task35/1.webp",
      },
      {
        title: "",
        subtitle: "Toggle Navigation Function",
        details: [
          "To define a function that toggles the value of isNavOpen, allowing the navigation menu to open or close.",
          "Keep functions concise to improve maintainability.",
          "Consider using 'useCallback' for optimization in larger components.",
        ],
        image: "/images/cheatsheetImages/task35/2.webp",
      },
      {
        title: "",
        subtitle: "Structuring the Header Layout",
        details: [
          "To create the main structure of the header, including the logo and a conditional class based on the navigation state.",
          "Use semantic elements like <header> for better accessibility.",
          "Utilize conditional classes to manage styles dynamically.",
        ],
        image: "/images/cheatsheetImages/task35/3.webp",
      },
      {
        title: "Portfolio.js Component",
        subtitle: "Defining the Functional Component and State",
        details: [
          "To define the Portfolio component and initialize the state variable currentFilter to track the active filter.",
          "Use descriptive state names to clarify their purpose in the component.",
          "Initialize state with a relevant default value.",
        ],
        image: "/images/cheatsheetImages/task35/4.webp",
      },
      {
        title: "",
        subtitle: "Filter Click Handler",
        details: [
          "To define a function that updates the 'currentFilter' state based on user interaction.",
          "Keep the handler function concise and focused on a single task.",
          "Use arrow functions for cleaner syntax.",
        ],
        image: "/images/cheatsheetImages/task35/5.webp",
      },
      {
        title: "",
        subtitle: "Filter Button Group",
        details: [
          "To create a group of buttons for filtering portfolio items by category, highlighting the active filter.",
          "Use conditional class names for dynamic styling based on the state.",
          "Ensure button elements are keyboard accessible for improved usability.",
        ],
        image: "/images/cheatsheetImages/task35/6.webp",
      },
    ],
  },
  {
    taskId: "Materialize-Portfolio",
    content: [
      {
        title: "",
        subtitle: "Setting Up Materialize CSS",
        details: [
          "The Materialize CSS library is imported for easy access to pre-designed components and JavaScript functionality, helping us style the app without extensive custom CSS.",
        ],
        image: "/images/cheatsheetImages/task37/1.webp",
      },
      {
        title: "",
        subtitle: "Initializing Materialize",
        details: [
          "'useEffect' is a React hook that runs code after the component renders. Here, it initializes Materialize components when the app loads using 'M.AutoInit()'.",
          "This auto-initializes any Materialize elements used in the app, saving manual initialization of individual components.",
        ],
        image: "/images/cheatsheetImages/task37/2.webp",
      },
      {
        title: "",
        subtitle: "Handling Button Clicks and Smooth Scrolling",
        details: [
          "'handleDirectionsClick' is a function triggered when the button is clicked. It uses 'scrollIntoView' to smoothly scroll to the element with the id='googleMapIframe'.",
          "Use scrollIntoView to focus on specific sections. Great for user experience in single-page apps.",
        ],
        image: "/images/cheatsheetImages/task37/3.webp",
      },
    ],
  },

  {
    taskId: "File-Uploader",
    content: [
      {
        title: "",
        subtitle: "Setting Up Component State",
        details: [
          "Initializes a state variable filesData as an empty array.",
          "Stores metadata for each uploaded file, like its name and URL, which are needed to display the file information and enable download.",
          "You can update this array to add or remove files as they're selected or deleted.",
        ],
        image: "/images/cheatsheetImages/task38/1.webp",
      },
      {
        title: "",
        subtitle: "Creating a Reference for the File Input",
        details: [
          "Creates a 'ref' for the file input element.",
          "Allows control over the <input> element without using the DOM directly.",
          "Using refs can be helpful when you need direct access to an element (e.g., to trigger a click programmatically).",
        ],
        image: "/images/cheatsheetImages/task38/2.webp",
      },
      {
        title: "",
        subtitle: "File Upload Button Handler",
        details: [
          "This function triggers a click on the file input.",
          "Opens the file dialog without the need for a visible input field.",
          "This approach improves the user interface by using a custom button instead of a standard file input.",
        ],
        image: "/images/cheatsheetImages/task38/3.webp",
      },
      {
        title: "",
        subtitle: "Handling File Selection and Updating State",
        details: [
          "This function handles file selection by:",
          "Reading selected files from the input.",
          "Mapping each file to an object with 'name' and a 'url' for preview/download.",
          "Updating 'filesData' state with the new files, preserving any previously selected files.",
          "URL.createObjectURL(file): Generates a temporary URL for the file, allowing it to be displayed or downloaded.",
          "...prevFilesData: Ensures previous files are not overwritten by new selections.",
        ],
        image: "/images/cheatsheetImages/task38/4.webp",
      },
      {
        title: "",
        subtitle: "Deleting a File",
        details: [
          "Removes a file from 'filesData' by filtering it out based on its index.",
          "Updating the state this way ensures React re-renders the component without the deleted file.",
        ],
        image: "/images/cheatsheetImages/task38/5.webp",
      },
      {
        title: "",
        subtitle: "Rendering the Component UI",
        details: [
          "The <input type='file' multiple> allows multiple files to be selected.",
          "'onChange' triggers 'handleFileChange', updating 'filesData' whenever files are selected.",
          "Set multiple to allow multiple file selection at once.",
        ],
        image: "/images/cheatsheetImages/task38/6.webp",
      },
      {
        title: "",
        subtitle: "Displaying Download Links and Delete Button",
        details: [
          "Download Link: Uses the 'file.url' and 'file.name' for each file to create a download link.",
          "Delete Button: Triggers handleFileDelete, removing the file from filesData.",
          "Each file requires a unique key (index is used here) to help React efficiently re-render only the updated items.",
        ],
        image: "/images/cheatsheetImages/task38/7.webp",
      },
    ],
  },
  {
    taskId: "Cake-Website",
    content: [
      {
        title: "",
        subtitle: "State Management",
        details: [
          "The 'useState' hook initializes 'count' with a default value of 0. The 'count' variable holds the current state, and 'setCount' is the function to update this state.",
          "The 'increment' function calls 'setCount' to update the 'count' state by 1",
          "State is used to store and manage dynamic data in functional components, which re-renders the component when updated.",
        ],
        image: "/images/cheatsheetImages/task39/1.webp",
      },
      {
        title: "",
        subtitle: "Props (Passing Data)",
        details: [
          "Props allow you to pass data from one component to another. Here, 'name' is passed as a prop to the Greeting component.",
          "Props are read-only and cannot be modified by the receiving component. They are commonly used to customize components by passing in values from parent components.",
        ],
        image: "/images/cheatsheetImages/task39/2.webp",
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "The onClick attribute is used to handle button clicks. 'handleClick' is the event handler function, which displays an alert when the button is clicked.",
          "React uses camelCase syntax for event handlers (e.g., onClick, onChange). Events in React are wrapped in a synthetic event system to provide consistent behavior across browsers.",
        ],
        image: "/images/cheatsheetImages/task39/3.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "This example uses the ternary operator to render different messages based on the 'isLoggedIn' prop.",
          "You can conditionally render components or content using JavaScript expressions, like ternary operators or && for short-circuit evaluation.",
        ],
        image: "/images/cheatsheetImages/task39/4.webp",
      },
      {
        title: "",
        subtitle: "Lists and Keys",
        details: [
          "Keys are a special prop required when rendering lists to help React identify each element uniquely. Here, 'item.id' is used as the 'key' prop.",
          "Always provide unique keys for list items to avoid performance issues or unexpected behavior. Keys should be stable and unique across each render.",
        ],
        image: "/images/cheatsheetImages/task39/5.webp",
      },
      {
        title: "",
        subtitle: "Form Handling",
        details: [
          "The form input is controlled by React state. 'name' represents the current input value, which updates as the user types.",
          "The 'onChange' event updates the input field's state, and the 'onSubmit' event prevents default form submission behavior, triggering an alert instead.",
          "Controlled inputs maintain their state in React, which gives you more control over form behavior and validation.",
        ],
        image: "/images/cheatsheetImages/task39/6.webp",
      },
      {
        title: "",
        subtitle: "Component Lifecycle (Using useEffect)",
        details: [
          "'useEffect' is a hook that runs side effects in functional components. Here, it's used to increment the 'seconds' state every second.",
          "The 'clearInterval' function prevents memory leaks by stopping the interval when the component unmounts.",
          "Use 'useEffect' with an empty dependency array to run the effect once on mount. Add dependencies to re-run the effect when specific values change.",
        ],
        image: "/images/cheatsheetImages/task39/7.webp",
      },
      {
        title: "",
        subtitle: "Default Props",
        details: [
          "Setting default values for props ensures a fallback when no value is passed. Here, 'name' defaults to 'Guest' if not provided.",
          "Use default props to prevent errors or unexpected behavior when props are missing.",
        ],
        image: "/images/cheatsheetImages/task39/8.webp",
      },
    ],
  },
  {
    taskId: "Interactive-3D-Card-Viewer",
    content: [
      {
        title: "",
        subtitle: "Event Handlers for Mouse and Touch Movements",
        details: [
          "Handles both mouse and touch events to apply 3D rotation on the .card element based on user input coordinates. e.pageX, e.pageY, e.touches[0].pageX, and e.touches[0].pageY retrieve cursor/finger positions for dynamic styling. useEffect is helpful here to manage DOM manipulation in functional components.",
        ],
        image: "/images/cheatsheetImages/task40/1.webp",
      },
      {
        title: "",
        subtitle: "Adding and Removing Event Listeners",
        details: [
          "Adds mousemove and touchmove listeners on component mount to allow interaction with the card element. The return cleanup function removes these listeners on unmount, preventing potential memory leaks. When working with useEffect, cleanup is essential to avoid side effects when the component lifecycle ends.",
        ],
        image: "/images/cheatsheetImages/task40/2.webp",
      },
    ],
  },
  {
    taskId: "Dev-Portfolio",
    content: [
      {
        title: "",
        subtitle: "React Router Basics",
        details: [
          "'Router' provides routing capabilities, allowing navigation between pages. 'Route' defines the path and the component to render for each route.",
          "Use 'Routes' to wrap all 'Route' components for React Router v6. Paths like /about, /portfolio, and /contact correspond to the URL paths that render specific components.",
        ],
        image: "/images/cheatsheetImages/task41/1.webp",
      },
      {
        title: "",
        subtitle: "Components Structure and Layout",
        details: [
          "This structure allows navigation through Navbar and Routes. Components like Home, About, etc., are loaded based on the path.",
          "Placing Navbar and Footer outside Routes keeps them static across all pages, while content changes dynamically within Routes.",
        ],
        image: "/images/cheatsheetImages/task41/2.webp",
      },
      {
        title: "",
        subtitle: "State and Event Handling",
        details: [
          "'useState' initializes 'formData' as an object with fields 'name', 'email', and 'message'. 'setFormData' updates this data.",
          "'useState' to store and manage form data. When the form changes, 'setFormData' is called with the updated field values.",
        ],
        image: "/images/cheatsheetImages/task41/3.webp",
      },
      {
        title: "",
        subtitle: "Form Submission",
        details: [
          "'handleSubmit' prevents the page from refreshing and logs the form data when the form is submitted.",
          "'e.preventDefault()' is crucial to avoid page reloads. It keeps the user on the same page and allows data handling within React.",
        ],
        image: "/images/cheatsheetImages/task41/4.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "If 'filter' is set to 'all', it displays all projects; otherwise, it filters based on category.",
          "Use JavaScript array methods like 'filter' to control which data appears based on user actions.",
        ],
        image: "/images/cheatsheetImages/task41/5.webp",
      },
      {
        title: "",
        subtitle: "Event Listeners and Scroll Handling",
        details: [
          "'isScrolled' is updated based on the window's scroll position. If 'scrolled' past 50px, 'isScrolled' becomes 'true', triggering the 'scrolled' CSS class.",
          "Use 'useEffect' with event listeners for dynamic behaviors like updating 'isScrolled' based on scroll.",
        ],
        image: "/images/cheatsheetImages/task41/6.webp",
      },
      {
        title: "",
        subtitle: "Passing Props",
        details: [
          "'skills' is an array that holds skill names. Using 'map', each 'skill' is rendered in an <li>.",
          "Use 'key' props for lists to help React track elements. Avoid using array indices as keys for large or dynamic lists.",
        ],
        image: "/images/cheatsheetImages/task41/7.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "<Link> is used for in-app navigation without reloading the page, unlike <a>, which triggers a full reload.",
          "Use <Link> with 'to' attributes to define the path. It's essential for a smooth single-page app (SPA) experience.",
        ],
        image: "/images/cheatsheetImages/task41/8.webp",
      },
    ],
  },
  {
    taskId: "Fruit-Carousel",
    content: [
      {
        title: "",
        subtitle: "Updating the Visible Items",
        details: [
          "This function calculates the previous, current, and next items to display based on the activeIndex.",
          "(index - 1 + items.length) % items.length: This ensures the carousel wraps around when reaching the beginning of the array.",
          "setVisibleItems([...]): Updates the visibleItems state with the three items to display.",
          "'useCallback': Memoizes the 'updateVisibleItems' function, ensuring that it doesn't get recreated on every render, improving performance.",
        ],
        image: "/images/cheatsheetImages/task42/1.webp",
      },
      {
        title: "",
        subtitle: "Setting up useEffect for Initial and Re-render Updates",
        details: [
          "'useEffect': Runs the updateVisibleItems function whenever activeIndex changes, ensuring that the visible items are updated.",
          " It depends on activeIndex and updateVisibleItems to avoid unnecessary re-renders.",
        ],
        image: "/images/cheatsheetImages/task42/2.webp",
      },
      {
        title: "",
        subtitle: "Next and Previous Slide Handlers",
        details: [
          "Functions to move to the next or previous carousel item.",
          "'setActiveIndex': Updates the 'activeIndex' state, cycling through items by using modulo (%).",
          "'useCallback': Ensures the slide functions are not recreated on every render, improving performance.",
        ],
        image: "/images/cheatsheetImages/task42/3.webp",
      },
      {
        title: "",
        subtitle: "Handling Mouse Wheel Scroll for Navigation",
        details: [
          "Listens for mouse wheel events to navigate through slides.",
          "event.deltaY: A positive value indicates scrolling down (next slide), while a negative value indicates scrolling up (previous slide).",
          "nextSlide() & prevSlide(): Calls the corresponding slide functions to update the carousel.",
        ],
        image: "/images/cheatsheetImages/task42/4.webp",
      },
      {
        title: "",
        subtitle: "Adding Event Listeners with useEffect",
        details: [
          "'useEffect': Sets up the event listener when the component mounts and cleans it up when the component unmounts to avoid memory leaks.",
          "addEventListener('wheel', handleScroll): Listens for the mouse wheel event on the carousel container.",
          "'removeEventListener': Ensures the event listener is removed when the component is removed from the DOM.",
        ],
        image: "/images/cheatsheetImages/task42/5.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "'handleItemClick': A function to update the active slide when a carousel item is clicked.",
          "'setActiveIndex(index)': Sets the clicked item as the active one by updating the 'activeIndex'.",
        ],
        image: "/images/cheatsheetImages/task42/6.webp",
      },
    ],
  },
  {
    taskId: "FitLife-Website",
    content: [
      {
        title: "",
        subtitle: "State Management with useState Hook",
        details: [
          "State is used to store and manage dynamic data that will change over time.",
          "'useState' is used to declare state variables.",
          "'formData' is the state object holding the form fields (name, email, message).",
          "'setFormData' is the function used to update formData.",
          "The 'useState' hook returns an array: the first element is the state value, and the second is the function to update that state.",
        ],
        image: "/images/cheatsheetImages/task43/1.webp",
      },
      {
        title: "",
        subtitle: "Handling Form Inputs",
        details: [
          "To update the state based on user input, you use onChange handlers that call state-updating functions.",
          "The 'handleChange' function updates the 'formData' state whenever an input changes.",
          "It uses the spread operator (...formData) to retain previous values and updates only the relevant field (name, email, or message) based on e.target.name.",
          "To manage multiple form fields with the same 'onChange' handler, use dynamic keys (e.g., e.target.name).",
        ],
        image: "/images/cheatsheetImages/task43/2.webp",
      },
      {
        title: "",
        subtitle: "Event Handling with onSubmit",
        details: [
          "Form submission can trigger events, like sending data to a server.",
          "'handleSubmit' prevents the default form submission (e.preventDefault()).",
          "After logging the form data, it triggers 'setIsSubmitted(true)', which could show a success message.",
          "Always prevent the default behavior of forms using 'e.preventDefault()' when handling form submissions in React.",
        ],
        image: "/images/cheatsheetImages/task43/3.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "React allows conditionally rendering parts of the UI based on state values.",
          "The 'isSubmitted' state is used to conditionally render either the success message or the form.",
          "If 'isSubmitted' is 'true', a success message is shown. Otherwise, the form is displayed.",
          "Use ternary operators for conditional rendering of components based on state.",
        ],
        image: "/images/cheatsheetImages/task43/4.webp",
      },
      {
        title: "",
        subtitle: "Props for Passing Data",
        details: [
          "Props are used to pass data from a parent component to a child component.",
          "Link is a component from 'react-scroll', and it receives props like 'to', 'smooth', and 'duration'.",
          "These props are used to scroll smoothly to a section on the page (e.g., 'contact').",
          "Props are immutable inside the child component. The parent is responsible for passing them down.",
        ],
        image: "/images/cheatsheetImages/task43/5.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Class Names Based on State",
        details: [
          "You can apply different class names dynamically based on state or other conditions.",
          "The 'navbar' class is conditionally combined with the 'scrolled' class if the page has been scrolled.",
          "'isScrolled' is managed by a scroll event handler that updates state when the page is scrolled.",
          "Conditional class names help you apply styles dynamically based on component states or conditions.",
        ],
        image: "/images/cheatsheetImages/task43/6.webp",
      },
      {
        title: "",
        subtitle: "UseEffect Hook for Side Effects",
        details: [
          "The 'useEffect' hook runs side effects like fetching data or subscribing to events.",
          "The 'useEffect' hook listens for scroll events and updates 'isScrolled' when the page is scrolled past 50 pixels.",
          "The return function inside 'useEffect' cleans up the event listener when the component is unmounted.",
          "The second argument ([]) to 'useEffect' ensures the effect only runs once, similar to 'componentDidMount' in class components.",
        ],
        image: "/images/cheatsheetImages/task43/7.webp",
      },
    ],
  },
  {
    taskId: "FAQ-Toggle",
    content: [
      {
        title: "",
        subtitle: "State Initialization with useState",
        details: [
          "'activeIndex' is the state variable used to store the index of the currently active (expanded) FAQ item.",
          "'setActiveIndex' is the function that updates the 'activeIndex' state.",
          "'useState(null)' initializes it to 'null' (meaning no item is active initially).",
          "State is used to manage dynamic data within the component. In this case, it controls which FAQ answer is shown.",
        ],
        image: "/images/cheatsheetImages/task44/1.webp",
      },
      {
        title: "",
        subtitle: "Toggling Active FAQ",
        details: [
          "'toggleFAQ' is a function that toggles the active state when a user clicks on a FAQ question.",
          "activeIndex === index ? null : index: If the clicked FAQ is already active (i.e., its index is equal to activeIndex), the function will set it to 'null' (closing it). Otherwise, it sets activeIndex to the clicked index (opening it).",
          "Event handlers like 'toggleFAQ' allow interaction with the component. In this case, it controls which FAQ answer is visible based on user clicks.",
        ],
        image: "/images/cheatsheetImages/task44/2.webp",
      },
      {
        title: "",
        subtitle: "Mapping FAQ Data to Render List",
        details: [
          "faqData.map() iterates through the 'faqData' array and renders a list item (<li>) for each FAQ question and answer.",
          "key={index}: React requires a unique 'key' prop for each item in a list to efficiently update and render components.",
          "The 'active' class is conditionally applied to the FAQ item if its index matches 'activeIndex'.",
          "Props are used in lists like this to map over data and generate multiple elements. Here, 'faqData' is the list of FAQs being passed into the component.",
        ],
        image: "/images/cheatsheetImages/task44/3.webp",
      },
      {
        title: "",
        subtitle: " CSS Class Application Based on State",
        details: [
          "Dynamically adds the active class to the FAQ item when its index matches activeIndex. This allows for conditional styling (e.g., showing or hiding the FAQ answer) when the item is active.",
          "React allows you to dynamically set class names based on state or props. This is useful for applying styles conditionally.",
        ],
        image: "/images/cheatsheetImages/task44/4.webp",
      },
    ],
  },
  {
    taskId: "Pomodoro-Focus-Timer",
    content: [
      {
        title: "",
        subtitle: "Managing State with useState",
        details: [
          "'workTime': Time in minutes for the work session (default is 25 minutes).",
          "'breakTime': Time in minutes for the break session (default is 5 minutes).",
          "'seconds': Time in seconds, which is used for countdown logic (converted from 'workTime' or 'breakTime').",
          "'isActive': A boolean that tracks whether the timer is active or paused.",
          "'isRotating': A boolean to handle animation state for a rotating clock.",
          "Initializes and updates the state variables. It takes two arguments: the initial state and a function to update that state (setWorkTime, setSeconds, etc.).",
        ],
        image: "/images/cheatsheetImages/task45/1.webp",
      },
      {
        title: "",
        subtitle: "Using useEffect for Side Effects (Timer Countdown)",
        details: [
          "This effect starts a countdown when the timer is active (isActive is true). The 'setInterval' function updates the 'seconds' state every second. When the timer reaches 0, it stops and resets the state.",
          "The effect runs whenever 'isActive' or 'seconds' change, ensuring the countdown updates correctly.",
        ],
        image: "/images/cheatsheetImages/task45/2.webp",
      },
      {
        title: "",
        subtitle: "Starting a Countdown with 'startCountdown'",
        details: [
          "This function starts the countdown by setting the 'seconds' based on the given 'duration' (in minutes).",
          "It resets and triggers the rotation animation (isRotating).",
        ],
        image: "/images/cheatsheetImages/task45/3.webp",
      },
      {
        title: "",
        subtitle: "Starting the Work and Break Timers",
        details: [
          "These functions call 'startCountdown' with the respective time ('workTime' for work sessions and 'breakTime' for breaks).",
        ],
        image: "/images/cheatsheetImages/task45/4.webp",
      },
      {
        title: "",
        subtitle: "Resetting the Timer",
        details: [
          "The reset function stops the timer and resets the state to the initial values (work session time in seconds).",
        ],
        image: "/images/cheatsheetImages/task45/5.webp",
      },
      {
        title: "",
        subtitle: "Formatting the Timer Display",
        details: [
          "This helper function formats the time into a MM:SS format for displaying the countdown.",
          "'Math.floor(seconds / 60)' gives the total minutes.",
          "'seconds % 60' gives the remaining seconds.",
        ],
        image: "/images/cheatsheetImages/task45/6.webp",
      },
    ],
  },
  {
    taskId: "Profolio",
    content: [
      {
        title: "",
        subtitle: "Framer Motion",
        details: [
          "Adds a fade-in animation to the entire app on load, with opacity transitioning from 0 to 1.",
          "Use Framer Motion's motion.div for easy animations on component load.",
        ],
        image: "/images/cheatsheetImages/task46/1.webp",
      },
      {
        title: "",
        subtitle: "Component Rendering",
        details: [
          "Renders each section of the webpage by using individual components (Navbar, Header, About, etc.).",
          "Organizing each section as separate components keeps the code modular and easier to maintain.",
        ],
        image: "/images/cheatsheetImages/task46/2.webp",
      },
      {
        title: "",
        subtitle: "State Management",
        details: [
          "Uses 'useState' to control the visibility of additional text. Clicking the button toggles the 'showMore' state, causing conditional rendering of extra content.",
          "'useState' is useful for handling dynamic UI elements based on user interaction.",
        ],
        image: "/images/cheatsheetImages/task46/3.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "Conditionally displays the additional text only if showMore is true.",
          "Combine state and conditional rendering to show or hide specific content based on user actions.",
        ],
        image: "/images/cheatsheetImages/task46/4.webp",
      },
      {
        title: "",
        subtitle: "Animated Button",
        details: [
          "A button that toggles between “More” and “Less” text based on 'showMore'. Adds hover and tap animations.",
          "Framer Motion provides 'whileHover' and 'whileTap' props for adding subtle animations that enhance the user experience.",
        ],
        image: "/images/cheatsheetImages/task46/5.webp",
      },
      {
        title: "",
        subtitle: "Event Handler",
        details: [
          "Handles clicking on a navbar item to set it as active, update the background color, and smoothly scroll to the target section.",
          "Use 'window.scrollTo' with an offset for smooth scrolling; 'getBoundingClientRect()' helps adjust for any fixed headers.",
        ],
        image: "/images/cheatsheetImages/task46/6.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Menu Border Animation",
        details: [
          "Positions the animated border underneath the active menu item.",
          "'transform': 'translate3d' provides smooth, efficient animations.",
        ],
        image: "/images/cheatsheetImages/task46/7.webp",
      },
      {
        title: "",
        subtitle: "Rendering Menu Items with Icons",
        details: [
          "Maps over the 'icons' array to render each icon in the navbar. Each item changes color when active, using dynamic background color and an 'active' class.",
          "Use 'map' for dynamic content rendering based on an array; this pattern keeps code clean and manageable for components with repeated structures.",
        ],
        image: "/images/cheatsheetImages/task46/8.webp",
      },
    ],
  },
  {
    taskId: "Animated-Progress-Loader",
    content: [
      {
        title: "",
        subtitle: "App Setup",
        details: [
          " Sets up core dependencies. 'useState' and 'useEffect' help manage component states and lifecycle events, while 'AnimatePresence' and 'motion' enable smooth animations.",
        ],
        image: "/images/cheatsheetImages/task47/1.webp",
      },
      {
        title: "",
        subtitle: "State Management",
        details: [
          "'loading': Controls whether the loading screen or main content is displayed.",
          "'progress': Tracks the progress of the loading animation, updating it from 0 to 100.",
          "'useState' allows you to define and update component-specific values (e.g., 'loading' and 'progress') over time.",
        ],
        image: "/images/cheatsheetImages/task47/2.webp",
      },
      {
        title: "",
        subtitle: "Progress Update Logic with useEffect",
        details: [
          "This hook triggers the loading animation by periodically updating 'progress' until it reaches 100.",
          "'setInterval' is used to increment progress every 30 ms.",
          "'clearInterval' stops the interval once progress reaches 100, and setLoading(false) displays the main content.",
          "Dependency Array ([]): Ensures 'useEffect' only runs once when the component mounts.",
          "'useEffect' is a powerful hook for running side effects, such as setting intervals or fetching data when the component loads.",
        ],
        image: "/images/cheatsheetImages/task47/3.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering with AnimatePresence",
        details: [
          "Uses conditional rendering to show the loader animation while 'loading' is 'true', then switches to main content.",
          "Handles animations on elements entering and leaving the DOM, adding a smooth transition when switching from the loader to content.",
          "'AnimatePresence' helps manage exit animations for conditional components, improving the visual flow.",
        ],
        image: "/images/cheatsheetImages/task47/4.webp",
      },
      {
        title: "",
        subtitle: "Main Content Display After Loading Completes",
        details: [
          "Displays main content with a fade-in and upward motion once loading is complete.",
          "'initial': Starts 20px down with opacity 0.",
          "'animate': Fades in and moves into position.",
          "'transition': Controls animation duration.",
          "'transition' allows for fine-tuning animation speed and timing, creating a smooth experience.",
        ],
        image: "/images/cheatsheetImages/task47/5.webp",
      },
    ],
  },
  {
    taskId: "Dynamic-Loader",
    content: [
      {
        title: "",
        subtitle: "State Management",
        details: [
          "'loading': A boolean state that toggles between loading and content display.",
          "'progress': Tracks the loading progress percentage.",
        ],
        image: "/images/cheatsheetImages/task48/1.webp",
      },
      {
        title: "",
        subtitle: "useEffect with setInterval",
        details: [
          "Automatically increases 'progress' by 1 every 30ms.",
          "Once 'progress' reaches 100, the interval stops, and 'loading' is set to fals'e.",
          "The use of 'clearInterval' within the condition prevents memory leaks by stopping the interval when no longer needed.",
        ],
        image: "/images/cheatsheetImages/task48/2.webp",
      },
    ],
  },
  {
    taskId: "Speech-Synth",
    content: [
      {
        title: "",
        subtitle: "Setting Up State and Managing Input Changes",
        details: [
          "'inputText': Holds the text the user types in.",
          "'loading': Controls the button state, showing when speech generation is in progress.",
          "'symbolCount': Tracks the number of characters (symbols) in 'inputText'.",
        ],
        image: "/images/cheatsheetImages/task49/1.webp",
      },
      {
        title: "",
        subtitle: "Updating Symbol Count with useEffect",
        details: [
          "'useEffect' listens for changes in 'inputText'. Whenever 'inputText' changes, it updates 'symbolCount' with the length of the text.",
          "This ensures 'symbolCount' always reflects the latest number of characters, providing real-time feedback to the user.",
        ],
        image: "/images/cheatsheetImages/task49/2.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "'handleInputChange' updates inputText state based on user input.",
          "By passing 'event.target.value', this function ensures 'inputText' reflects the current textarea content.",
        ],
        image: "/images/cheatsheetImages/task49/3.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "'handleSpeak' makes a POST request to the server with the input text to generate speech.",
          "The server response (audio file) is temporarily saved as a URL, allowing the user to download it.",
          "The 'responseType: 'blob'' specifies that we expect binary data (an audio file) in the response, suitable for downloading files.",
        ],
        image: "/images/cheatsheetImages/task49/4.webp",
      },
      {
        title: "",
        subtitle: "Express Server Setup",
        details: [
          "Sets up an Express server to handle requests. cors allows cross-origin requests from the React frontend.",
          "Define the port the server listens on (3001) to avoid conflicts with the frontend.",
        ],
        image: "/images/cheatsheetImages/task49/5.webp",
      },
      {
        title: "",
        subtitle: " Text-to-Speech Synthesis Endpoint",
        details: [
          "Receives the text input and uses 'gTTS' to convert it to speech.",
          "Saves the speech file as 'output.mp3' and sends it back to the frontend for download.",
          "The 'fs.unlink' function deletes the file after it's sent, keeping storage clean.",
        ],
        image: "/images/cheatsheetImages/task49/6.webp",
      },
    ],
  },
  {
    taskId: "Smooth-Scroll-Navigator",
    content: [
      {
        title: "",
        subtitle: "Managing State with useState",
        details: [
          "'activeIndex': Tracks the index of the currently active section. Updates when scrolling or clicking navigation buttons.",
          "'scrollY': Stores the current vertical scroll position (window.scrollY).",
          "Use 'useState' for values that dynamically change based on user actions.",
        ],
        image: "/images/cheatsheetImages/task50/1.webp",
      },
      {
        title: "",
        subtitle: "Scrolling Event Listener with useEffect",
        details: [
          "Tracks the user's scroll position to update the active section dynamically.",
          "Adds a 'scroll' event listener when the component mounts and removes it during cleanup.",
          "Updates 'scrollY' and determines 'activeIndex' based on the position of each section.",
          "Always clean up event listeners in 'useEffect' to prevent memory leaks.",
        ],
        image: "/images/cheatsheetImages/task50/2.webp",
      },
      {
        title: "",
        subtitle: "Handling Navigation Button Clicks",
        details: [
          "Sets 'activeIndex' to the clicked button's index.",
          "Smoothly scrolls to the target section using the 'react-scroll' library.",
          "The 'offset' adjusts the scroll position to account for a fixed header or margin.",
        ],
        image: "/images/cheatsheetImages/task50/3.webp",
      },
    ],
  },
  {
    taskId: "Tesla-Experience",
    content: [
      {
        title: "",
        subtitle: "Routing with React Router",
        details: [
          "Router: Wraps the entire app to enable routing.",
          "Routes: Defines a collection of Route components.",
          "Route: Maps a URL path to a React component.",
          "models.map: Dynamically generates routes for each model defined in models.js.",
          "Use useParams from react-router-dom to access dynamic route parameters if needed.",
        ],
        image: "/images/cheatsheetImages/task51/1.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Routing with Props",
        details: [
          "Dynamically creates a route for each model.",
          "Passes the properties of each model (e.g., modelName, speed) to the Model component using the spread operator ...model.",
          "To debug, log model to check the properties being passed to Model.",
        ],
        image: "/images/cheatsheetImages/task51/2.webp",
      },
      {
        title: "",
        subtitle: "Framer Motion Animations",
        details: [
          "initial: The starting state of the animation.",
          "animate: The final state after animation.",
          "transition: Defines the duration and easing.",
          "Use Framer Motion to enhance the user experience with smooth animations.",
        ],
        image: "/images/cheatsheetImages/task51/3.webp",
      },
      {
        title: "",
        subtitle: "Home Component Animation with useAnimation",
        details: [
          "useAnimation: Hook from Framer Motion for controlling animations programmatically.",
          "useEffect: Ensures the animation starts when the component mounts.",
          "This setup is ideal for triggering animations based on user interactions or lifecycle events.",
        ],
        image: "/images/cheatsheetImages/task51/4.webp",
      },
    ],
  },
  {
    taskId: "Dynamic-Dashboard",
    content: [
      {
        title: "",
        subtitle: "",
        details: [
          "'useState' manages whether the sidebar menu is open (menuOpen).",
          "'toggleMenu' toggles the menu state, and 'closeMenu' ensures it closes.",
        ],
        image: "/images/cheatsheetImages/task52/1.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Receives 'menuOpen' to toggle the sidebar and 'closeMenu' to handle link clicks.",
          "'motion.aside' (from framer-motion) adds smooth sidebar transitions.",
        ],
        image: "/images/cheatsheetImages/task52/2.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "'generateData' creates a table dynamically with 5 rows and 5 columns.",
          "Adds smooth fade-in effects using 'motion.table'.",
          "Utilizes <thead> for headers and <tbody> for data rows.",
        ],
        image: "/images/cheatsheetImages/task52/3.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Uses 'useState' to track loading and fetched data.",
          "'useEffect' simulates fetching data with a 'setTimeout'.",
          "Displays a loading spinner while fetching data.",
        ],
        image: "/images/cheatsheetImages/task52/4.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Holds a list of users and loading state.",
          "Maps over the users array to display each user.",
        ],
        image: "/images/cheatsheetImages/task52/5.webp",
      },
    ],
  },
  {
    taskId: "Quiz-Master",
    content: [
      {
        title: "",
        subtitle: " State Management with useState",
        details: [
          "State in React is used to store data that will change over time. In this quiz app, the state is used to manage the current question, score, selected option, and timing.",
          "currentQuestion: Tracks which question the user is on (starts at 0).",
          "score: Tracks the user's score (number of correct answers).",
          "selectedOption: Stores the index of the option the user selects",
          "startTime: Marks the time when a question starts",
          "questionTimes: Stores the time taken for each question and whether it was answered correctly",
          "quizFinished: Tracks whether the quiz is finished.",
        ],
        image: "/images/cheatsheetImages/task53/1.webp",
      },
      {
        title: "",
        subtitle: " Effect Hook for Timing",
        details: [
          "'useEffect' is used to update the sta'rtTime whenever the question changes and to prevent re-setting it once the quiz is finished.",
          "This 'useEffect' runs every time 'currentQuestion' changes (i.e., when a user answers a question).",
          "If the quiz is finished ('quizFinished' is 'true'), it stops updating the start time.",
        ],
        image: "/images/cheatsheetImages/task53/2.webp",
      },
      {
        title: "",
        subtitle: "Prevent Multiple Selections & Track Time",
        details: [
          "The check prevents the user from selecting more than one option or interacting with the quiz once it is finished.",
          "'timeTaken' measures how long the user took to answer the current question by calculating the difference between 'endTime' and 'startTime'.",
          "The answer is marked as correct if the selected option's index matches the correct answer.",
          "'setQuestionTimes': This stores information about the current question, how long it took to answer, and whether the answer was correct, allowing later analysis of the quiz results.",
        ],
        image: "/images/cheatsheetImages/task53/3.webp",
      },
      {
        title: "",
        subtitle: "Handle Option Selection & Transition",
        details: [
          "'setSelectedOption(index)' highlights the selected option, which helps with UI styling and feedback.",
          "After a brief delay (500ms), the quiz either moves to the next question or ends. If there are more questions, the currentQuestion state is incremented. If all questions have been answered, 'setQuizFinished(true)' ends the quiz and shows the results.",
        ],
        image: "/images/cheatsheetImages/task53/4.webp",
      },
      {
        title: "",
        subtitle: "Restarting the Quiz",
        details: [
          "The 'restartQuiz' function resets the state to allow the user to play the quiz again.",
          "All relevant states (currentQuestion, score, selectedOption, questionTimes, quizFinished) are reset to their initial values.",
        ],
        image: "/images/cheatsheetImages/task53/5.webp",
      },
    ],
  },
  {
    taskId: "Profile-Popup-Animation",
    content: [
      {
        title: "",
        subtitle: "Using State with useState",
        details: [
          "The 'useState' hook is used to manage the state of the popup.",
          "'showPopup' holds the current state (true/false) of the popup.",
          "'setShowPopup' is a function to update the state.",
          "Use 'useState' whenever you need to toggle or store a value that changes dynamically.",
        ],
        image: "/images/cheatsheetImages/task54/1.webp",
      },
      {
        title: "",
        subtitle: "Event Handling in React",
        details: [
          "This function toggles the 'showPopup' state between true and false.",
          "Used as the 'onClick' handler for buttons.",
          "Define event handler functions for better reusability and clarity.",
        ],
        image: "/images/cheatsheetImages/task54/2.webp",
      },
      {
        title: "",
        subtitle: "Motion Components from Framer Motion",
        details: [
          "'motion.button' is a Framer Motion component that adds animations.",
          "'whileHover' and 'whileTap' define animations for hover and click states.",
          "Use Framer Motion to add smooth animations easily.",
        ],
        image: "/images/cheatsheetImages/task54/3.webp",
      },
      {
        title: "",
        subtitle: "Conditional Rendering with AnimatePresence",
        details: [
          "'AnimatePresence' ensures animations play when elements are added or removed.",
          "The 'showPopup' condition controls the visibility of the popup.",
          "Wrap components that enter/exit with animations inside 'AnimatePresence'.",
        ],
        image: "/images/cheatsheetImages/task54/4.webp",
      },
      {
        title: "",
        subtitle: "Animating Components",
        details: [
          "'initial', 'animate', and 'exit' define animation states for entry and exit.",
          "'transition' specifies animation timing and behavior.",
          "Use 'spring' transitions for bouncy effects.",
        ],
        image: "/images/cheatsheetImages/task54/5.webp",
      },
      {
        title: "",
        subtitle: "Close Button with FontAwesome Icon",
        details: [
          "The close button uses FontAwesome for the 'X' icon.",
          "Animations make the close interaction more engaging.",
          "Use consistent styles and animations for better UX.",
        ],
        image: "/images/cheatsheetImages/task54/6.webp",
      },
      {
        title: "",
        subtitle: "Styling with External CSS",
        details: [
          "Styles are defined in the styles.css file.",
          "Organized CSS ensures a clean layout and appearance.",
          "Use classes to keep styles modular and reusable.",
        ],
        image: "/images/cheatsheetImages/task54/7.webp",
      },
      {
        title: "",
        subtitle: "Component Structure and Return Statement",
        details: [
          "The return statement defines the structure of the UI.",
          "Components like 'table', 'motion.button', and 'motion.div' are composed hierarchically.",
          "Keep the structure simple and readable for easy maintenance.",
        ],
        image: "/images/cheatsheetImages/task54/8.webp",
      },
    ],
  },
  {
    taskId: "Movies4u",
    content: [
      {
        title: "Header Component",
        subtitle: "State Management",
        details: [
          "'mobileMenuOpen': Tracks if the mobile menu is open.",
          "'searchQuery': Stores the user's input for the search bar.",
        ],
        image: "/images/cheatsheetImages/task55/1.webp",
      },
      {
        title: "",
        subtitle: "Props and Event Handling",
        details: [
          "'onSearch': A function passed as a prop to handle the search query.",
          "React event 'onChange' is used to detect changes in the search input.",
        ],
        image: "/images/cheatsheetImages/task55/2.webp",
      },
      {
        title: "",
        subtitle: "Rendering Dynamic Content",
        details: ["Maps through menuItems array to create navigation links."],
        image: "/images/cheatsheetImages/task55/3.webp",
      },
      {
        title: "Modal Component",
        subtitle: "Conditional Rendering",
        details: ["Prevents rendering the modal if it's not open."],
        image: "/images/cheatsheetImages/task55/5.webp",
      },
      {
        title: "",
        subtitle: "Event Propagation",
        details: [
          "Prevents click events on the modal content from propagating to the overlay.",
        ],
        image: "/images/cheatsheetImages/task55/6.webp",
      },
      {
        title: "Slider Component",
        subtitle: "State Management",
        details: [
          "'activeIndex': Tracks the currently active slide.",
          "'filteredImages': Stores the filtered images based on the search query.",
        ],
        image: "/images/cheatsheetImages/task55/7.webp",
      },
      {
        title: "",
        subtitle: "Lifecycle Methods with useEffect",
        details: ["Automatically transitions slides every 5 seconds."],
        image: "/images/cheatsheetImages/task55/8.webp",
      },
      {
        title: "",
        subtitle: "Search Filtering",
        details: [
          "Filters images based on searchQuery and resets the active slide.",
        ],
        image: "/images/cheatsheetImages/task55/9.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Content",
        details: ["Maps through filteredImages to create slides."],
        image: "/images/cheatsheetImages/task55/10.webp",
      },
      {
        title: "",
        subtitle: "Modal Integration",
        details: [
          "Opens a modal with detailed information about the currently active slide.",
        ],
        image: "/images/cheatsheetImages/task55/11.webp",
      },
    ],
  },
  {
    taskId: "Natures-Beauty",
    content: [
      {
        title: "Navbar Component",
        subtitle: "toggleMenu function",
        details: [
          "Handles the menu toggle event. It uses document.querySelector to find the .container element and toggles the active class.",
        ],
        image: "/images/cheatsheetImages/task56/1.webp",
      },
      {
        title: "Links Component",
        subtitle: "CSS Variables",
        details: [
          "The style prop defines a custom CSS variable --i for each link, which can be used to create delay effects in animations.",
        ],
        image: "/images/cheatsheetImages/task56/2.webp",
      },
    ],
  },
  {
    taskId: "Captcha-Guard",
    content: [
      {
        title: "",
        subtitle: "State Variables",
        details: [
          "'captcha': Stores the randomly generated captcha string.",
          "'userInput': Holds the user-entered captcha.",
          "'message': Provides feedback to the user (e.g., success or error messages).",
          "'isSuccess': Boolean indicating whether the captcha matched.",
          "Use 'useState' for reactive state management in functional components.",
        ],
        image: "/images/cheatsheetImages/task57/1.webp",
      },
      {
        title: "",
        subtitle: "Generating a Captcha",
        details: [
          "Creates a 6-character random captcha using letters and numbers.",
          "Resets feedback and input fields when a new captcha is generated.",
          "Use 'Math.random' and 'Math.floor' to randomly pick characters from an array.",
        ],
        image: "/images/cheatsheetImages/task57/2.webp",
      },
      {
        title: "",
        subtitle: "Checking Captcha",
        details: [
          "Compares user input with the generated captcha (ignoring spaces).",
          "Sets appropriate feedback messages and triggers a new captcha on success.",
          "Use 'setTimeout' for delayed actions like refreshing the captcha.",
        ],
        image: "/images/cheatsheetImages/task57/3.webp",
      },
      {
        title: "",
        subtitle: "Lifecycle Hook: useEffect",
        details: [
          "Runs 'generateCaptcha' when the component mounts (empty dependency array).",
          "Use 'useEffect' for initialization logic in functional components.",
        ],
        image: "/images/cheatsheetImages/task57/4.webp",
      },
    ],
  },
  {
    taskId: "Calculator",
    content: [
      {
        title: "",
        subtitle: "Managing State with useState",
        details: [
          "State Variable (display): Holds the current value displayed on the calculator.",
          "State Setter Function (setDisplay): Updates the 'display' value.",
          "Initial State: The display starts with an empty string.",
          "Use 'useState' to create reactive data that updates the UI automatically when changed.",
        ],
        image: "/images/cheatsheetImages/task58/1.webp",
      },
      {
        title: "",
        subtitle: "Showing Button Values",
        details: [
          "Concatenates the value of the pressed button to the current 'display' value.",
          "Event Handling: Triggered when a button is clicked.",
          "Event handlers like 'onClick' can call custom functions to update the state.",
        ],
        image: "/images/cheatsheetImages/task58/2.webp",
      },
      {
        title: "",
        subtitle: "Calculating the Result",
        details: [
          "Uses the 'evaluate' function to compute the mathematical expression in the 'display'.",
          "Error Handling: If the calculation fails, it displays 'Error'.",
          "Wrap calculations in a 'try-catch' block to gracefully handle invalid inputs.",
        ],
        image: "/images/cheatsheetImages/task58/3.webp",
      },
      {
        title: "",
        subtitle: "Resetting the Display",
        details: [
          "Resets the calculator by clearing the 'display'.",
          "Use this function to return the calculator to its initial state.",
        ],
        image: "/images/cheatsheetImages/task58/4.webp",
      },
      {
        title: "",
        subtitle: "Deleting the Last Character",
        details: [
          "Removes the last character from the 'display' using 'slice'.",
          "Useful for correcting input errors without clearing everything.",
        ],
        image: "/images/cheatsheetImages/task58/5.webp",
      },
    ],
  },
  {
    taskId: "Copy-To-Clipboard",
    content: [
      {
        title: "",
        subtitle: "Setting Up State",
        details: [
          "'copied' tracks whether the text was successfully copied to the clipboard.",
          "'setCopied' is the function to update the 'copied' state.",
          "Use 'copied' to dynamically update the button label.",
        ],
        image: "/images/cheatsheetImages/task59/1.webp",
      },
      {
        title: "",
        subtitle: "Referencing the TextArea",
        details: [
          "'useRef' creates a mutable reference to the <textarea> DOM element.",
          "This reference is used to fetch the value of the text to copy.",
          "Use 'textAreaRef.current.value' to access the text inside the textarea.",
        ],
        image: "/images/cheatsheetImages/task59/2.webp",
      },
      {
        title: "",
        subtitle: "Initializing Clipboard.js",
        details: [
          "Clipboard listens for a button click and copies the referenced text.",
          "clipboard.on('success'): Sets 'copied' to 'true' when the text is successfully copied, with a 2-second delay to reset.",
          "clipboard.on('error'): Logs an error if the copy action fails.",
          "clipboard.destroy(): Cleans up the Clipboard instance on component unmount.",
          "Always clean up side effects in 'useEffect' to prevent memory leaks.",
        ],
        image: "/images/cheatsheetImages/task59/3.webp",
      },
    ],
  },
  {
    taskId: "English-Dictionary",
    content: [
      {
        title: "",
        subtitle: "Setting Up State with useState",
        details: [
          "word: Stores the word entered by the user.",
          "result: Holds the data returned from the API (e.g., word meaning, example, etc.).",
          "infoText: Displays information or status messages to the user.",
          "Use useState to manage dynamic data that changes with user interaction.",
        ],
        image: "/images/cheatsheetImages/task60/1.webp",
      },
      {
        title: "",
        subtitle: "Searching for a Word",
        details: ["Validates the input and initiates the API call if valid."],
        image: "/images/cheatsheetImages/task60/2.webp",
      },
      {
        title: "",
        subtitle: "Clearing Input and Results",
        details: [
          "Resets the search bar, result data, and informational text.",
          "Use event handlers to respond to user actions like clicks or input changes.",
        ],
        image: "/images/cheatsheetImages/task60/3.webp",
      },
      {
        title: "",
        subtitle: "Rendering Conditional Content",
        details: [
          "Conditionally renders the result only if data is available.",
          "Use conditional rendering to show or hide UI elements based on state.",
        ],
        image: "/images/cheatsheetImages/task60/4.webp",
      },
      {
        title: "",
        subtitle: "Input Handling",
        details: [
          "Captures user input and updates the 'word' state dynamically.",
          "Use 'onChange' to track changes in form fields.",
        ],
        image: "/images/cheatsheetImages/task60/5.webp",
      },
    ],
  },
  {
    taskId: "day7",
    content: [
      {
        title: "Setting Up the Environment",
        subtitle: "Environment Variables",
        details: [
          "'dotenv.config()' loads environment variables from a .env file into process.env. This is used to securely store sensitive information, such as database connection strings or API keys, which you don't want to hard-code into your application.",
        ],
      },
      {
        title: "Initializing the Express App",
        subtitle: "",
        details: [
          "A minimal web framework for building RESTful APIs and web applications.",
          "'express()' initializes the server instance.",
          "cors(): Enables Cross-Origin Resource Sharing, which is necessary for APIs to handle requests from different domains.",
          "express.json(): Parses incoming JSON requests and makes the data accessible in req.body.",
        ],
      },
      {
        title: "Database Connection",
        subtitle: "",
        details: [
          "A NoSQL database that stores data in JSON-like format. It's highly scalable and flexible for modern applications.",
          "mongoose.connect() establishes a connection to MongoDB using the URI provided in the .env file.",
          "If the connection fails, the catch block captures the error and logs it to the console.",
          "process.exit(1) ensures the application exits gracefully with a failure code.",
        ],
      },
      {
        title: "Creating a Test API Endpoint",
        subtitle: "GET / Route",
        details: [
          "Responds with a simple message ('API is running...') to verify that the server is working.",
        ],
      },
      {
        title: " Starting the Server",
        subtitle: "",
        details: [
          "The PORT is taken from the .env file or defaults to 5000 if not specified.",
          "app.listen(PORT, callback) starts the server and listens for incoming requests on the specified port.",
        ],
      },
      {
        title: "Code Execution Flow",
        subtitle: "",
        details: [
          "dotenv reads the .env file and populates process.env.",
          "The Express app is created, and middleware is applied.",
          "The connectDB function attempts to establish a MongoDB connection.",
          "A test route (GET /) is set up to ensure the API is functional.",
          "The app begins listening for requests on the specified port.",
        ],
      },
      {
        title: "Best Practices",
        subtitle: "",
        details: [
          "Keep your database connection logic (connectDB) in a separate file for modularity and reusability.",
          "Use try-catch blocks to handle runtime errors gracefully.",
          "Never hard-code sensitive credentials into your codebase. Use .env files and ensure they're excluded from version control using .gitignore.",
        ],
      },
    ],
  },
  {
    taskId: "day8",
    content: [
      {
        title: "What is a Schema?",
        subtitle: "",
        details: [
          "A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection. It acts as a blueprint for your data, ensuring consistency and applying validations.",
          "A User schema might define fields like name, email, and password.",
          "You can specify data types, required fields, default values, and more.",
        ],
      },
      {
        title: "What is a Model?",
        subtitle: "",
        details: [
          "A model is a compiled version of a schema. It provides an interface to interact with the database, allowing you to perform operations like creating, reading, updating, and deleting documents.",
        ],
      },
      {
        title: "Data Types",
        subtitle: "Mongoose provides various data types for schema fields:",
        details: [
          "String: For text values (e.g., name, email).",
          "Number: For numeric values (e.g., price, rating).",
          "Boolean: For true/false values (e.g., isActive, approved).",
          "Date: For timestamps (e.g., createdAt, birthDate).",
          "Array: For lists of values (e.g., tags, skills).",
          "ObjectId: For references to other documents.",
        ],
      },
      {
        title: "Validations",
        subtitle: "Validations ensure data integrity by applying rules:",
        details: [
          "required: true: Ensures the field must have a value.",
          "unique: true: Prevents duplicate values (e.g., for email).",
          "min and max: Define numeric or string length constraints.",
        ],
      },
      {
        title: "Default Values",
        subtitle: "Fields can have default values if none are provided:",
        details: ["createdAt: { type: Date, default: Date.now }."],
      },
      {
        title: "Relationships with ref",
        subtitle:
          "Schemas can reference documents from other collections using 'ObjectId' and 'ref':",
        details: [
          "A BlogPost schema's author field references the User schema.",
        ],
      },
      {
        title: "Enumerations (enum)",
        subtitle: "Restrict a field to specific values:",
        details: [
          "role: { type: String, enum: ['Student', 'Teacher', 'Admin'] }.",
        ],
      },
      {
        title: "Tips for Schema Design",
        subtitle: "",
        details: [
          "Normalize Relationships: Use references (ref) to connect related documents, ensuring scalability. For example: A LessonSchedule references User for both teacher and student.",
          "Embed Data When Needed: For small, unchanging data, you can embed it directly instead of using references. For example, tags in a BlogPost.",
          "Use Timestamps: Add { timestamps: true } to schemas to automatically manage createdAt and updatedAt fields.",
          "Optimize Queries with Indexes: For frequently queried fields (e.g., email), add an index to improve query performance: Example: email: { type: String, unique: true, index: true }.",
        ],
      },
    ],
  },
  {
    taskId: "day9",
    content: [
      {
        title: "Direct Code Implementation",
        subtitle: "Load Environment Variables",
        details: [
          "Sensitive data like database URIs should never be hardcoded. Using environment variables keeps your application secure and allows easy configuration across environments (development, staging, production).",
        ],
      },
      {
        title: "",
        subtitle: "Check for Missing Environment Variables",
        details: [
          "Missing or incorrect environment variables can lead to runtime errors. Checking and handling these early ensures smoother operations and avoids debugging issues later.",
        ],
      },
      {
        title: "",
        subtitle: "Set Up MongoDB Connection",
        details: [
          "Connecting to MongoDB is essential to perform CRUD (Create, Read, Update, Delete) operations. Using mongoose.connect() establishes a reliable connection and allows interaction with the database.",
        ],
      },
      {
        title: "",
        subtitle: "Create a New User Object",
        details: [
          "The user object defines the data structure in line with the database schema. This ensures data consistency and validation before saving to MongoDB.",
        ],
      },
      {
        title: "",
        subtitle: "Save the User to the Database",
        details: [
          "Persisting the user data in MongoDB allows it to be retrieved later for authentication, display, or other operations. Calling .save() writes the data to the database.",
        ],
      },
      {
        title: "",
        subtitle: "Optional Cleanup",
        details: [
          "For testing purposes, developers may want to remove the test data after verifying functionality to keep the database clean. This step highlights how to remove the saved data if necessary.",
        ],
      },
      {
        title: "",
        subtitle: "Disconnect from MongoDB",
        details: [
          "Closing the database connection once operations are complete prevents resource leaks and ensures the application runs efficiently.",
        ],
      },
      {
        title: "",
        subtitle: "Error Handling",
        details: [
          "Errors during database connection, schema validation, or operations can disrupt the application. A try-catch block ensures graceful error handling and helps in debugging.",
        ],
      },
      {
        title: "Using Postman",
        subtitle: "Start Your Server",
        details: [
          "To test the API, the server needs to be running and listening for requests. This ensures the API is ready to handle incoming requests from Postman.",
        ],
      },
      {
        title: "",
        subtitle: "Open Postman",
        details: [
          "Postman is an effective tool for API testing, allowing you to send requests, check responses, and debug errors with ease.",
        ],
      },
      {
        title: "",
        subtitle: "Set Up the POST Request",
        details: [
          "Configuring a POST request lets you send data to the API to create a new resource (user). The API endpoint URL defines the route where the request will be handled.",
        ],
      },
      {
        title: "",
        subtitle: "Add Request Body (User Data)",
        details: [
          "The request body contains the data for the new user, such as name, email, and password. Sending it in JSON format ensures compatibility with modern APIs.",
        ],
      },
      {
        title: "",
        subtitle: "Send the Request",
        details: [
          "This action triggers the server to process the user data, validate it, and save it to the database. It confirms if the API works as intended.",
        ],
      },
      {
        title: "",
        subtitle: "Check the Response",
        details: [
          "The response from the server provides feedback on whether the operation was successful. A successful response confirms that the user was created and saved in the database.",
        ],
      },
      {
        title: "",
        subtitle: "Verify the User in the Database",
        details: [
          "This step ensures the data was stored correctly and can be retrieved as needed. It acts as a final validation step for the API functionality.",
        ],
      },
      {
        title: "",
        subtitle: "Handle Errors",
        details: [
          "Testing edge cases like missing fields or duplicate entries ensures that the API behaves predictably and returns appropriate error messages.",
        ],
      },
    ],
  },
  {
    taskId: "day10",
    content: [
      {
        title: "Backend Development Basics",
        subtitle: "Node.js",
        details: [
          "Node.js is a JavaScript runtime that executes code outside of the browser, typically used for building server-side applications.",
          "Non-blocking I/O: Handles multiple requests simultaneously without waiting for one to complete.",
          "Event-driven: Executes operations asynchronously using event loops.",
        ],
      },
      {
        title: "",
        subtitle: "Express.js",
        details: [
          "A minimal and flexible framework for Node.js, used to build web applications and APIs.",
          "Middleware: Functions that run during the request/response cycle.",
          "Routing: Maps URLs to functions (e.g., /users to a function that fetches user data).",
          "Error handling: Built-in support for managing errors.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/1.webp",
      },
      {
        title: "RESTful API Design",
        subtitle: "What is REST?",
        details: [
          "REST (Representational State Transfer) is an architectural style for designing web services.",
          "RESTful APIs allow interaction with resources (like users, posts) using standard HTTP methods.",
          "Resources are identified by URIs (e.g., /users for a collection of users, /users/:id for a single user).",
        ],
      },
      {
        title: "",
        subtitle: "Key Principles of REST",
        details: [
          "Statelessness: Each request from the client contains all the information needed to process the request (no reliance on stored session data on the server).",
          "Resource-Based: Everything is a resource, and each resource is identified by a unique URI.",
          "HTTP Methods: Specific operations (CRUD) are mapped to HTTP methods: GET: Retrieve data, POST: Create data, PUT: Update data, DELETE: Remove data.",
          "Uniform Interface: Consistent and predictable structure (e.g., /users always refers to the users resource).",
        ],
      },
      {
        title: "",
        subtitle: "RESTful API Example",
        details: [
          "Scenario: You have a users resource, and you need to perform CRUD operations.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/2.webp",
      },
      {
        title: "",
        subtitle: "Example with Express.js",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/3.webp",
      },
      {
        title: "Database Integration",
        subtitle: "MongoDB",
        details: [
          "A NoSQL database that stores data in collections of documents (similar to JSON objects).",
          "Schema-less: Flexible structure, no predefined schema needed.",
          "Scalable: Ideal for applications with large data volumes.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose",
        details: [
          "An ODM (Object Data Modeling) library for MongoDB.",
          "Defines schemas and provides a way to interact with MongoDB using JavaScript objects.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/4.webp",
      },
      {
        title: "Data Validation and Modeling",
        subtitle: "Why Validation Matters",
        details: [
          "Ensures data integrity.",
          "Prevents invalid data from being stored in the database.",
          "Improves application security.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose Validation Example",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/5.webp",
      },
      {
        title: "Asynchronous Programming",
        subtitle: "What is Asynchronous Programming?",
        details: [
          "A programming paradigm where tasks run independently of the main application flow.",
          "Helps handle time-consuming operations (e.g., database queries) without blocking the application.",
          "A Promise represents the eventual result of an asynchronous operation.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/6.webp",
      },
      {
        title: "",
        subtitle: "Async/Await Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/7.webp",
      },
      {
        title: "Error Handling",
        subtitle: "Why It's Important",
        details: [
          "Improves user experience by providing meaningful error messages.",
          "Prevents crashes from unhandled errors.",
        ],
      },
      {
        title: "",
        subtitle: "Using Try-Catch:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/8.webp",
      },
      {
        title: "Middleware in Express",
        subtitle: "What is Middleware?",
        details: [
          "Middleware is a function in Express.js that has access to the request (req), response (res), and the next middleware in the stack.",
          "It can modify the request and response objects, end the request-response cycle, call the next middleware, or trigger an error.",
        ],
      },
      {
        title: "",
        subtitle: "Types of Middleware",
        details: [
          "express.json(): Parses incoming JSON payloads.",
          "express.static(): Serves static files like images or CSS.",
          "'cors' for handling cross-origin requests, helmet for securing HTTP headers.",
          "Your own functions for logging, validation, or authentication.",
        ],
        image: "/images/cheatsheetImages/task/.webp",
      },
      {
        title: "",
        subtitle: "Middleware Flow Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/9.webp",
      },
      {
        title: "",
        subtitle: "Practical Middleware Use Cases:",
        details: ["Log every request to the console."],
        image: "/images/musicAcademyCheatsheet/day10/10.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Catch errors and send a generic error message."],
        image: "/images/musicAcademyCheatsheet/day10/11.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Verify if the user is logged in."],
        image: "/images/musicAcademyCheatsheet/day10/12.webp",
      },
      {
        title: "HTTP Routing",
        subtitle: "What is Routing?",
        details: [
          "Routing in Express defines how the server responds to specific client requests.",
          "Routes are matched based on the request method and URL path.",
          "Each route can have multiple handlers (middleware functions).",
        ],
      },
      {
        title: "",
        subtitle: "Each route is associated with:",
        details: [
          "HTTP Method: Defines the operation (GET, POST, etc.).",
          "Path/Endpoint: The URL or part of it (e.g., /users).",
          "Handler Function: The logic to execute when the route is matched.",
        ],
      },
      {
        title: "",
        subtitle: "Basic Route:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/13.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Route:",
        details: ["Capture parameters from the URL using :parameterName."],
        image: "/images/musicAcademyCheatsheet/day10/14.webp",
      },
      {
        title: "",
        subtitle: "Chaining Routes",
        details: ["Use the same route path with different HTTP methods."],
        image: "/images/musicAcademyCheatsheet/day10/15.webp",
      },
      {
        title: "",
        subtitle: "Router Example (Organizing Routes)",
        details: [
          "Use express.Router to modularize routes for better maintainability.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/16.webp",
      },
      {
        title: "",
        subtitle: "Query Parameters",
        details: [
          "Use req.query to handle optional query strings like /search?name=John.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/17.webp",
      },
      {
        title: "",
        subtitle: "Middleware in Routes",
        details: ["Apply middleware to specific routes."],
        image: "/images/musicAcademyCheatsheet/day10/18.webp",
      },
      {
        title: "",
        subtitle: "404 Handling",
        details: ["Catch-all route for undefined endpoints."],
        image: "/images/musicAcademyCheatsheet/day10/19.webp",
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "Keep sensitive data (e.g., database URIs, API keys) out of your codebase.",
          "Use environment variables to store configuration values.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Load .env variables using dotenv"],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Authentication",
        details: [
          "Verifies the identity of a user (e.g., logging in with a username and password).",
          "Creates a session or token to maintain the user's authenticated state.",
          "Common methods include JWT (JSON Web Tokens) or sessions with cookies.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          "Ensures a user has the necessary permissions to access a resource.",
          "Roles and permissions are used to control access to specific routes or actions.",
          "Middleware functions can check the user's role before allowing access.",
        ],
      },
    ],
  },
  {
    taskId: "day11",
    content: [
      {
        title: "Backend Development Basics",
        subtitle: "Node.js",
        details: [
          "Node.js is a JavaScript runtime that executes code outside of the browser, typically used for building server-side applications.",
          "Non-blocking I/O: Handles multiple requests simultaneously without waiting for one to complete.",
          "Event-driven: Executes operations asynchronously using event loops.",
        ],
      },
      {
        title: "",
        subtitle: "Express.js",
        details: [
          "A minimal and flexible framework for Node.js, used to build web applications and APIs.",
          "Middleware: Functions that run during the request/response cycle.",
          "Routing: Maps URLs to functions (e.g., /users to a function that fetches user data).",
          "Error handling: Built-in support for managing errors.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/1.webp",
      },
      {
        title: "RESTful API Design",
        subtitle: "What is REST?",
        details: [
          "REST (Representational State Transfer) is an architectural style for designing web services.",
          "RESTful APIs allow interaction with resources (like users, posts) using standard HTTP methods.",
          "Resources are identified by URIs (e.g., /users for a collection of users, /users/:id for a single user).",
        ],
      },
      {
        title: "",
        subtitle: "Key Principles of REST",
        details: [
          "Statelessness: Each request from the client contains all the information needed to process the request (no reliance on stored session data on the server).",
          "Resource-Based: Everything is a resource, and each resource is identified by a unique URI.",
          "HTTP Methods: Specific operations (CRUD) are mapped to HTTP methods: GET: Retrieve data, POST: Create data, PUT: Update data, DELETE: Remove data.",
          "Uniform Interface: Consistent and predictable structure (e.g., /users always refers to the users resource).",
        ],
      },
      {
        title: "",
        subtitle: "RESTful API Example",
        details: [
          "Scenario: You have a users resource, and you need to perform CRUD operations.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/2.webp",
      },
      {
        title: "",
        subtitle: "Example with Express.js",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/3.webp",
      },
      {
        title: "Database Integration",
        subtitle: "MongoDB",
        details: [
          "A NoSQL database that stores data in collections of documents (similar to JSON objects).",
          "Schema-less: Flexible structure, no predefined schema needed.",
          "Scalable: Ideal for applications with large data volumes.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose",
        details: [
          "An ODM (Object Data Modeling) library for MongoDB.",
          "Defines schemas and provides a way to interact with MongoDB using JavaScript objects.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/4.webp",
      },
      {
        title: "Data Validation and Modeling",
        subtitle: "Why Validation Matters",
        details: [
          "Ensures data integrity.",
          "Prevents invalid data from being stored in the database.",
          "Improves application security.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose Validation Example",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/5.webp",
      },
      {
        title: "Asynchronous Programming",
        subtitle: "What is Asynchronous Programming?",
        details: [
          "A programming paradigm where tasks run independently of the main application flow.",
          "Helps handle time-consuming operations (e.g., database queries) without blocking the application.",
          "A Promise represents the eventual result of an asynchronous operation.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/6.webp",
      },
      {
        title: "",
        subtitle: "Async/Await Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/7.webp",
      },
      {
        title: "Error Handling",
        subtitle: "Why It's Important",
        details: [
          "Improves user experience by providing meaningful error messages.",
          "Prevents crashes from unhandled errors.",
        ],
      },
      {
        title: "",
        subtitle: "Using Try-Catch:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/8.webp",
      },
      {
        title: "Middleware in Express",
        subtitle: "What is Middleware?",
        details: [
          "Middleware is a function in Express.js that has access to the request (req), response (res), and the next middleware in the stack.",
          "It can modify the request and response objects, end the request-response cycle, call the next middleware, or trigger an error.",
        ],
      },
      {
        title: "",
        subtitle: "Types of Middleware",
        details: [
          "express.json(): Parses incoming JSON payloads.",
          "express.static(): Serves static files like images or CSS.",
          "'cors' for handling cross-origin requests, helmet for securing HTTP headers.",
          "Your own functions for logging, validation, or authentication.",
        ],
        image: "/images/cheatsheetImages/task/.webp",
      },
      {
        title: "",
        subtitle: "Middleware Flow Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/9.webp",
      },
      {
        title: "",
        subtitle: "Practical Middleware Use Cases:",
        details: ["Log every request to the console."],
        image: "/images/musicAcademyCheatsheet/day10/10.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Catch errors and send a generic error message."],
        image: "/images/musicAcademyCheatsheet/day10/11.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Verify if the user is logged in."],
        image: "/images/musicAcademyCheatsheet/day10/12.webp",
      },
      {
        title: "HTTP Routing",
        subtitle: "What is Routing?",
        details: [
          "Routing in Express defines how the server responds to specific client requests.",
          "Routes are matched based on the request method and URL path.",
          "Each route can have multiple handlers (middleware functions).",
        ],
      },
      {
        title: "",
        subtitle: "Each route is associated with:",
        details: [
          "HTTP Method: Defines the operation (GET, POST, etc.).",
          "Path/Endpoint: The URL or part of it (e.g., /users).",
          "Handler Function: The logic to execute when the route is matched.",
        ],
      },
      {
        title: "",
        subtitle: "Basic Route:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/13.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Route:",
        details: ["Capture parameters from the URL using :parameterName."],
        image: "/images/musicAcademyCheatsheet/day10/14.webp",
      },
      {
        title: "",
        subtitle: "Chaining Routes",
        details: ["Use the same route path with different HTTP methods."],
        image: "/images/musicAcademyCheatsheet/day10/15.webp",
      },
      {
        title: "",
        subtitle: "Router Example (Organizing Routes)",
        details: [
          "Use express.Router to modularize routes for better maintainability.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/16.webp",
      },
      {
        title: "",
        subtitle: "Query Parameters",
        details: [
          "Use req.query to handle optional query strings like /search?name=John.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/17.webp",
      },
      {
        title: "",
        subtitle: "Middleware in Routes",
        details: ["Apply middleware to specific routes."],
        image: "/images/musicAcademyCheatsheet/day10/18.webp",
      },
      {
        title: "",
        subtitle: "404 Handling",
        details: ["Catch-all route for undefined endpoints."],
        image: "/images/musicAcademyCheatsheet/day10/19.webp",
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "Keep sensitive data (e.g., database URIs, API keys) out of your codebase.",
          "Use environment variables to store configuration values.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Load .env variables using dotenv"],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Authentication",
        details: [
          "Verifies the identity of a user (e.g., logging in with a username and password).",
          "Creates a session or token to maintain the user's authenticated state.",
          "Common methods include JWT (JSON Web Tokens) or sessions with cookies.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          "Ensures a user has the necessary permissions to access a resource.",
          "Roles and permissions are used to control access to specific routes or actions.",
          "Middleware functions can check the user's role before allowing access.",
        ],
      },
    ],
  },
  {
    taskId: "day12",
    content: [
      {
        title: "Backend Development Basics",
        subtitle: "Node.js",
        details: [
          "Node.js is a JavaScript runtime that executes code outside of the browser, typically used for building server-side applications.",
          "Non-blocking I/O: Handles multiple requests simultaneously without waiting for one to complete.",
          "Event-driven: Executes operations asynchronously using event loops.",
        ],
      },
      {
        title: "",
        subtitle: "Express.js",
        details: [
          "A minimal and flexible framework for Node.js, used to build web applications and APIs.",
          "Middleware: Functions that run during the request/response cycle.",
          "Routing: Maps URLs to functions (e.g., /users to a function that fetches user data).",
          "Error handling: Built-in support for managing errors.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/1.webp",
      },
      {
        title: "RESTful API Design",
        subtitle: "What is REST?",
        details: [
          "REST (Representational State Transfer) is an architectural style for designing web services.",
          "RESTful APIs allow interaction with resources (like users, posts) using standard HTTP methods.",
          "Resources are identified by URIs (e.g., /users for a collection of users, /users/:id for a single user).",
        ],
      },
      {
        title: "",
        subtitle: "Key Principles of REST",
        details: [
          "Statelessness: Each request from the client contains all the information needed to process the request (no reliance on stored session data on the server).",
          "Resource-Based: Everything is a resource, and each resource is identified by a unique URI.",
          "HTTP Methods: Specific operations (CRUD) are mapped to HTTP methods: GET: Retrieve data, POST: Create data, PUT: Update data, DELETE: Remove data.",
          "Uniform Interface: Consistent and predictable structure (e.g., /users always refers to the users resource).",
        ],
      },
      {
        title: "",
        subtitle: "RESTful API Example",
        details: [
          "Scenario: You have a users resource, and you need to perform CRUD operations.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/2.webp",
      },
      {
        title: "",
        subtitle: "Example with Express.js",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/3.webp",
      },
      {
        title: "Database Integration",
        subtitle: "MongoDB",
        details: [
          "A NoSQL database that stores data in collections of documents (similar to JSON objects).",
          "Schema-less: Flexible structure, no predefined schema needed.",
          "Scalable: Ideal for applications with large data volumes.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose",
        details: [
          "An ODM (Object Data Modeling) library for MongoDB.",
          "Defines schemas and provides a way to interact with MongoDB using JavaScript objects.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/4.webp",
      },
      {
        title: "Data Validation and Modeling",
        subtitle: "Why Validation Matters",
        details: [
          "Ensures data integrity.",
          "Prevents invalid data from being stored in the database.",
          "Improves application security.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose Validation Example",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/5.webp",
      },
      {
        title: "Asynchronous Programming",
        subtitle: "What is Asynchronous Programming?",
        details: [
          "A programming paradigm where tasks run independently of the main application flow.",
          "Helps handle time-consuming operations (e.g., database queries) without blocking the application.",
          "A Promise represents the eventual result of an asynchronous operation.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/6.webp",
      },
      {
        title: "",
        subtitle: "Async/Await Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/7.webp",
      },
      {
        title: "Error Handling",
        subtitle: "Why It's Important",
        details: [
          "Improves user experience by providing meaningful error messages.",
          "Prevents crashes from unhandled errors.",
        ],
      },
      {
        title: "",
        subtitle: "Using Try-Catch:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/8.webp",
      },
      {
        title: "Middleware in Express",
        subtitle: "What is Middleware?",
        details: [
          "Middleware is a function in Express.js that has access to the request (req), response (res), and the next middleware in the stack.",
          "It can modify the request and response objects, end the request-response cycle, call the next middleware, or trigger an error.",
        ],
      },
      {
        title: "",
        subtitle: "Types of Middleware",
        details: [
          "express.json(): Parses incoming JSON payloads.",
          "express.static(): Serves static files like images or CSS.",
          "'cors' for handling cross-origin requests, helmet for securing HTTP headers.",
          "Your own functions for logging, validation, or authentication.",
        ],
        image: "/images/cheatsheetImages/task/.webp",
      },
      {
        title: "",
        subtitle: "Middleware Flow Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/9.webp",
      },
      {
        title: "",
        subtitle: "Practical Middleware Use Cases:",
        details: ["Log every request to the console."],
        image: "/images/musicAcademyCheatsheet/day10/10.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Catch errors and send a generic error message."],
        image: "/images/musicAcademyCheatsheet/day10/11.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Verify if the user is logged in."],
        image: "/images/musicAcademyCheatsheet/day10/12.webp",
      },
      {
        title: "HTTP Routing",
        subtitle: "What is Routing?",
        details: [
          "Routing in Express defines how the server responds to specific client requests.",
          "Routes are matched based on the request method and URL path.",
          "Each route can have multiple handlers (middleware functions).",
        ],
      },
      {
        title: "",
        subtitle: "Each route is associated with:",
        details: [
          "HTTP Method: Defines the operation (GET, POST, etc.).",
          "Path/Endpoint: The URL or part of it (e.g., /users).",
          "Handler Function: The logic to execute when the route is matched.",
        ],
      },
      {
        title: "",
        subtitle: "Basic Route:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/13.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Route:",
        details: ["Capture parameters from the URL using :parameterName."],
        image: "/images/musicAcademyCheatsheet/day10/14.webp",
      },
      {
        title: "",
        subtitle: "Chaining Routes",
        details: ["Use the same route path with different HTTP methods."],
        image: "/images/musicAcademyCheatsheet/day10/15.webp",
      },
      {
        title: "",
        subtitle: "Router Example (Organizing Routes)",
        details: [
          "Use express.Router to modularize routes for better maintainability.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/16.webp",
      },
      {
        title: "",
        subtitle: "Query Parameters",
        details: [
          "Use req.query to handle optional query strings like /search?name=John.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/17.webp",
      },
      {
        title: "",
        subtitle: "Middleware in Routes",
        details: ["Apply middleware to specific routes."],
        image: "/images/musicAcademyCheatsheet/day10/18.webp",
      },
      {
        title: "",
        subtitle: "404 Handling",
        details: ["Catch-all route for undefined endpoints."],
        image: "/images/musicAcademyCheatsheet/day10/19.webp",
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "Keep sensitive data (e.g., database URIs, API keys) out of your codebase.",
          "Use environment variables to store configuration values.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Load .env variables using dotenv"],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Authentication",
        details: [
          "Verifies the identity of a user (e.g., logging in with a username and password).",
          "Creates a session or token to maintain the user's authenticated state.",
          "Common methods include JWT (JSON Web Tokens) or sessions with cookies.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          "Ensures a user has the necessary permissions to access a resource.",
          "Roles and permissions are used to control access to specific routes or actions.",
          "Middleware functions can check the user's role before allowing access.",
        ],
      },
    ],
  },
  {
    taskId: "day13",
    content: [
      {
        title: "Backend Development Basics",
        subtitle: "Node.js",
        details: [
          "Node.js is a JavaScript runtime that executes code outside of the browser, typically used for building server-side applications.",
          "Non-blocking I/O: Handles multiple requests simultaneously without waiting for one to complete.",
          "Event-driven: Executes operations asynchronously using event loops.",
        ],
      },
      {
        title: "",
        subtitle: "Express.js",
        details: [
          "A minimal and flexible framework for Node.js, used to build web applications and APIs.",
          "Middleware: Functions that run during the request/response cycle.",
          "Routing: Maps URLs to functions (e.g., /users to a function that fetches user data).",
          "Error handling: Built-in support for managing errors.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/1.webp",
      },
      {
        title: "RESTful API Design",
        subtitle: "What is REST?",
        details: [
          "REST (Representational State Transfer) is an architectural style for designing web services.",
          "RESTful APIs allow interaction with resources (like users, posts) using standard HTTP methods.",
          "Resources are identified by URIs (e.g., /users for a collection of users, /users/:id for a single user).",
        ],
      },
      {
        title: "",
        subtitle: "Key Principles of REST",
        details: [
          "Statelessness: Each request from the client contains all the information needed to process the request (no reliance on stored session data on the server).",
          "Resource-Based: Everything is a resource, and each resource is identified by a unique URI.",
          "HTTP Methods: Specific operations (CRUD) are mapped to HTTP methods: GET: Retrieve data, POST: Create data, PUT: Update data, DELETE: Remove data.",
          "Uniform Interface: Consistent and predictable structure (e.g., /users always refers to the users resource).",
        ],
      },
      {
        title: "",
        subtitle: "RESTful API Example",
        details: [
          "Scenario: You have a users resource, and you need to perform CRUD operations.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/2.webp",
      },
      {
        title: "",
        subtitle: "Example with Express.js",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/3.webp",
      },
      {
        title: "Database Integration",
        subtitle: "MongoDB",
        details: [
          "A NoSQL database that stores data in collections of documents (similar to JSON objects).",
          "Schema-less: Flexible structure, no predefined schema needed.",
          "Scalable: Ideal for applications with large data volumes.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose",
        details: [
          "An ODM (Object Data Modeling) library for MongoDB.",
          "Defines schemas and provides a way to interact with MongoDB using JavaScript objects.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/4.webp",
      },
      {
        title: "Data Validation and Modeling",
        subtitle: "Why Validation Matters",
        details: [
          "Ensures data integrity.",
          "Prevents invalid data from being stored in the database.",
          "Improves application security.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose Validation Example",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/5.webp",
      },
      {
        title: "Asynchronous Programming",
        subtitle: "What is Asynchronous Programming?",
        details: [
          "A programming paradigm where tasks run independently of the main application flow.",
          "Helps handle time-consuming operations (e.g., database queries) without blocking the application.",
          "A Promise represents the eventual result of an asynchronous operation.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/6.webp",
      },
      {
        title: "",
        subtitle: "Async/Await Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/7.webp",
      },
      {
        title: "Error Handling",
        subtitle: "Why It's Important",
        details: [
          "Improves user experience by providing meaningful error messages.",
          "Prevents crashes from unhandled errors.",
        ],
      },
      {
        title: "",
        subtitle: "Using Try-Catch:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/8.webp",
      },
      {
        title: "Middleware in Express",
        subtitle: "What is Middleware?",
        details: [
          "Middleware is a function in Express.js that has access to the request (req), response (res), and the next middleware in the stack.",
          "It can modify the request and response objects, end the request-response cycle, call the next middleware, or trigger an error.",
        ],
      },
      {
        title: "",
        subtitle: "Types of Middleware",
        details: [
          "express.json(): Parses incoming JSON payloads.",
          "express.static(): Serves static files like images or CSS.",
          "'cors' for handling cross-origin requests, helmet for securing HTTP headers.",
          "Your own functions for logging, validation, or authentication.",
        ],
        image: "/images/cheatsheetImages/task/.webp",
      },
      {
        title: "",
        subtitle: "Middleware Flow Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/9.webp",
      },
      {
        title: "",
        subtitle: "Practical Middleware Use Cases:",
        details: ["Log every request to the console."],
        image: "/images/musicAcademyCheatsheet/day10/10.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Catch errors and send a generic error message."],
        image: "/images/musicAcademyCheatsheet/day10/11.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Verify if the user is logged in."],
        image: "/images/musicAcademyCheatsheet/day10/12.webp",
      },
      {
        title: "HTTP Routing",
        subtitle: "What is Routing?",
        details: [
          "Routing in Express defines how the server responds to specific client requests.",
          "Routes are matched based on the request method and URL path.",
          "Each route can have multiple handlers (middleware functions).",
        ],
      },
      {
        title: "",
        subtitle: "Each route is associated with:",
        details: [
          "HTTP Method: Defines the operation (GET, POST, etc.).",
          "Path/Endpoint: The URL or part of it (e.g., /users).",
          "Handler Function: The logic to execute when the route is matched.",
        ],
      },
      {
        title: "",
        subtitle: "Basic Route:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/13.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Route:",
        details: ["Capture parameters from the URL using :parameterName."],
        image: "/images/musicAcademyCheatsheet/day10/14.webp",
      },
      {
        title: "",
        subtitle: "Chaining Routes",
        details: ["Use the same route path with different HTTP methods."],
        image: "/images/musicAcademyCheatsheet/day10/15.webp",
      },
      {
        title: "",
        subtitle: "Router Example (Organizing Routes)",
        details: [
          "Use express.Router to modularize routes for better maintainability.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/16.webp",
      },
      {
        title: "",
        subtitle: "Query Parameters",
        details: [
          "Use req.query to handle optional query strings like /search?name=John.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/17.webp",
      },
      {
        title: "",
        subtitle: "Middleware in Routes",
        details: ["Apply middleware to specific routes."],
        image: "/images/musicAcademyCheatsheet/day10/18.webp",
      },
      {
        title: "",
        subtitle: "404 Handling",
        details: ["Catch-all route for undefined endpoints."],
        image: "/images/musicAcademyCheatsheet/day10/19.webp",
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "Keep sensitive data (e.g., database URIs, API keys) out of your codebase.",
          "Use environment variables to store configuration values.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Load .env variables using dotenv"],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Authentication",
        details: [
          "Verifies the identity of a user (e.g., logging in with a username and password).",
          "Creates a session or token to maintain the user's authenticated state.",
          "Common methods include JWT (JSON Web Tokens) or sessions with cookies.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          "Ensures a user has the necessary permissions to access a resource.",
          "Roles and permissions are used to control access to specific routes or actions.",
          "Middleware functions can check the user's role before allowing access.",
        ],
      },
    ],
  },
  {
    taskId: "day14",
    content: [
      {
        title: "Backend Development Basics",
        subtitle: "Node.js",
        details: [
          "Node.js is a JavaScript runtime that executes code outside of the browser, typically used for building server-side applications.",
          "Non-blocking I/O: Handles multiple requests simultaneously without waiting for one to complete.",
          "Event-driven: Executes operations asynchronously using event loops.",
        ],
      },
      {
        title: "",
        subtitle: "Express.js",
        details: [
          "A minimal and flexible framework for Node.js, used to build web applications and APIs.",
          "Middleware: Functions that run during the request/response cycle.",
          "Routing: Maps URLs to functions (e.g., /users to a function that fetches user data).",
          "Error handling: Built-in support for managing errors.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/1.webp",
      },
      {
        title: "RESTful API Design",
        subtitle: "What is REST?",
        details: [
          "REST (Representational State Transfer) is an architectural style for designing web services.",
          "RESTful APIs allow interaction with resources (like users, posts) using standard HTTP methods.",
          "Resources are identified by URIs (e.g., /users for a collection of users, /users/:id for a single user).",
        ],
      },
      {
        title: "",
        subtitle: "Key Principles of REST",
        details: [
          "Statelessness: Each request from the client contains all the information needed to process the request (no reliance on stored session data on the server).",
          "Resource-Based: Everything is a resource, and each resource is identified by a unique URI.",
          "HTTP Methods: Specific operations (CRUD) are mapped to HTTP methods: GET: Retrieve data, POST: Create data, PUT: Update data, DELETE: Remove data.",
          "Uniform Interface: Consistent and predictable structure (e.g., /users always refers to the users resource).",
        ],
      },
      {
        title: "",
        subtitle: "RESTful API Example",
        details: [
          "Scenario: You have a users resource, and you need to perform CRUD operations.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/2.webp",
      },
      {
        title: "",
        subtitle: "Example with Express.js",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/3.webp",
      },
      {
        title: "Database Integration",
        subtitle: "MongoDB",
        details: [
          "A NoSQL database that stores data in collections of documents (similar to JSON objects).",
          "Schema-less: Flexible structure, no predefined schema needed.",
          "Scalable: Ideal for applications with large data volumes.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose",
        details: [
          "An ODM (Object Data Modeling) library for MongoDB.",
          "Defines schemas and provides a way to interact with MongoDB using JavaScript objects.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/4.webp",
      },
      {
        title: "Data Validation and Modeling",
        subtitle: "Why Validation Matters",
        details: [
          "Ensures data integrity.",
          "Prevents invalid data from being stored in the database.",
          "Improves application security.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose Validation Example",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/5.webp",
      },
      {
        title: "Asynchronous Programming",
        subtitle: "What is Asynchronous Programming?",
        details: [
          "A programming paradigm where tasks run independently of the main application flow.",
          "Helps handle time-consuming operations (e.g., database queries) without blocking the application.",
          "A Promise represents the eventual result of an asynchronous operation.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/6.webp",
      },
      {
        title: "",
        subtitle: "Async/Await Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/7.webp",
      },
      {
        title: "Error Handling",
        subtitle: "Why It's Important",
        details: [
          "Improves user experience by providing meaningful error messages.",
          "Prevents crashes from unhandled errors.",
        ],
      },
      {
        title: "",
        subtitle: "Using Try-Catch:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/8.webp",
      },
      {
        title: "Middleware in Express",
        subtitle: "What is Middleware?",
        details: [
          "Middleware is a function in Express.js that has access to the request (req), response (res), and the next middleware in the stack.",
          "It can modify the request and response objects, end the request-response cycle, call the next middleware, or trigger an error.",
        ],
      },
      {
        title: "",
        subtitle: "Types of Middleware",
        details: [
          "express.json(): Parses incoming JSON payloads.",
          "express.static(): Serves static files like images or CSS.",
          "'cors' for handling cross-origin requests, helmet for securing HTTP headers.",
          "Your own functions for logging, validation, or authentication.",
        ],
        image: "/images/cheatsheetImages/task/.webp",
      },
      {
        title: "",
        subtitle: "Middleware Flow Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/9.webp",
      },
      {
        title: "",
        subtitle: "Practical Middleware Use Cases:",
        details: ["Log every request to the console."],
        image: "/images/musicAcademyCheatsheet/day10/10.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Catch errors and send a generic error message."],
        image: "/images/musicAcademyCheatsheet/day10/11.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Verify if the user is logged in."],
        image: "/images/musicAcademyCheatsheet/day10/12.webp",
      },
      {
        title: "HTTP Routing",
        subtitle: "What is Routing?",
        details: [
          "Routing in Express defines how the server responds to specific client requests.",
          "Routes are matched based on the request method and URL path.",
          "Each route can have multiple handlers (middleware functions).",
        ],
      },
      {
        title: "",
        subtitle: "Each route is associated with:",
        details: [
          "HTTP Method: Defines the operation (GET, POST, etc.).",
          "Path/Endpoint: The URL or part of it (e.g., /users).",
          "Handler Function: The logic to execute when the route is matched.",
        ],
      },
      {
        title: "",
        subtitle: "Basic Route:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/13.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Route:",
        details: ["Capture parameters from the URL using :parameterName."],
        image: "/images/musicAcademyCheatsheet/day10/14.webp",
      },
      {
        title: "",
        subtitle: "Chaining Routes",
        details: ["Use the same route path with different HTTP methods."],
        image: "/images/musicAcademyCheatsheet/day10/15.webp",
      },
      {
        title: "",
        subtitle: "Router Example (Organizing Routes)",
        details: [
          "Use express.Router to modularize routes for better maintainability.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/16.webp",
      },
      {
        title: "",
        subtitle: "Query Parameters",
        details: [
          "Use req.query to handle optional query strings like /search?name=John.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/17.webp",
      },
      {
        title: "",
        subtitle: "Middleware in Routes",
        details: ["Apply middleware to specific routes."],
        image: "/images/musicAcademyCheatsheet/day10/18.webp",
      },
      {
        title: "",
        subtitle: "404 Handling",
        details: ["Catch-all route for undefined endpoints."],
        image: "/images/musicAcademyCheatsheet/day10/19.webp",
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "Keep sensitive data (e.g., database URIs, API keys) out of your codebase.",
          "Use environment variables to store configuration values.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Load .env variables using dotenv"],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Authentication",
        details: [
          "Verifies the identity of a user (e.g., logging in with a username and password).",
          "Creates a session or token to maintain the user's authenticated state.",
          "Common methods include JWT (JSON Web Tokens) or sessions with cookies.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          "Ensures a user has the necessary permissions to access a resource.",
          "Roles and permissions are used to control access to specific routes or actions.",
          "Middleware functions can check the user's role before allowing access.",
        ],
      },
    ],
  },
  {
    taskId: "day15",
    content: [
      {
        title: "Backend Development Basics",
        subtitle: "Node.js",
        details: [
          "Node.js is a JavaScript runtime that executes code outside of the browser, typically used for building server-side applications.",
          "Non-blocking I/O: Handles multiple requests simultaneously without waiting for one to complete.",
          "Event-driven: Executes operations asynchronously using event loops.",
        ],
      },
      {
        title: "",
        subtitle: "Express.js",
        details: [
          "A minimal and flexible framework for Node.js, used to build web applications and APIs.",
          "Middleware: Functions that run during the request/response cycle.",
          "Routing: Maps URLs to functions (e.g., /users to a function that fetches user data).",
          "Error handling: Built-in support for managing errors.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/1.webp",
      },
      {
        title: "RESTful API Design",
        subtitle: "What is REST?",
        details: [
          "REST (Representational State Transfer) is an architectural style for designing web services.",
          "RESTful APIs allow interaction with resources (like users, posts) using standard HTTP methods.",
          "Resources are identified by URIs (e.g., /users for a collection of users, /users/:id for a single user).",
        ],
      },
      {
        title: "",
        subtitle: "Key Principles of REST",
        details: [
          "Statelessness: Each request from the client contains all the information needed to process the request (no reliance on stored session data on the server).",
          "Resource-Based: Everything is a resource, and each resource is identified by a unique URI.",
          "HTTP Methods: Specific operations (CRUD) are mapped to HTTP methods: GET: Retrieve data, POST: Create data, PUT: Update data, DELETE: Remove data.",
          "Uniform Interface: Consistent and predictable structure (e.g., /users always refers to the users resource).",
        ],
      },
      {
        title: "",
        subtitle: "RESTful API Example",
        details: [
          "Scenario: You have a users resource, and you need to perform CRUD operations.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/2.webp",
      },
      {
        title: "",
        subtitle: "Example with Express.js",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/3.webp",
      },
      {
        title: "Database Integration",
        subtitle: "MongoDB",
        details: [
          "A NoSQL database that stores data in collections of documents (similar to JSON objects).",
          "Schema-less: Flexible structure, no predefined schema needed.",
          "Scalable: Ideal for applications with large data volumes.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose",
        details: [
          "An ODM (Object Data Modeling) library for MongoDB.",
          "Defines schemas and provides a way to interact with MongoDB using JavaScript objects.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/4.webp",
      },
      {
        title: "Data Validation and Modeling",
        subtitle: "Why Validation Matters",
        details: [
          "Ensures data integrity.",
          "Prevents invalid data from being stored in the database.",
          "Improves application security.",
        ],
      },
      {
        title: "",
        subtitle: "Mongoose Validation Example",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/5.webp",
      },
      {
        title: "Asynchronous Programming",
        subtitle: "What is Asynchronous Programming?",
        details: [
          "A programming paradigm where tasks run independently of the main application flow.",
          "Helps handle time-consuming operations (e.g., database queries) without blocking the application.",
          "A Promise represents the eventual result of an asynchronous operation.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/6.webp",
      },
      {
        title: "",
        subtitle: "Async/Await Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/7.webp",
      },
      {
        title: "Error Handling",
        subtitle: "Why It's Important",
        details: [
          "Improves user experience by providing meaningful error messages.",
          "Prevents crashes from unhandled errors.",
        ],
      },
      {
        title: "",
        subtitle: "Using Try-Catch:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/8.webp",
      },
      {
        title: "Middleware in Express",
        subtitle: "What is Middleware?",
        details: [
          "Middleware is a function in Express.js that has access to the request (req), response (res), and the next middleware in the stack.",
          "It can modify the request and response objects, end the request-response cycle, call the next middleware, or trigger an error.",
        ],
      },
      {
        title: "",
        subtitle: "Types of Middleware",
        details: [
          "express.json(): Parses incoming JSON payloads.",
          "express.static(): Serves static files like images or CSS.",
          "'cors' for handling cross-origin requests, helmet for securing HTTP headers.",
          "Your own functions for logging, validation, or authentication.",
        ],
        image: "/images/cheatsheetImages/task/.webp",
      },
      {
        title: "",
        subtitle: "Middleware Flow Example:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/9.webp",
      },
      {
        title: "",
        subtitle: "Practical Middleware Use Cases:",
        details: ["Log every request to the console."],
        image: "/images/musicAcademyCheatsheet/day10/10.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Catch errors and send a generic error message."],
        image: "/images/musicAcademyCheatsheet/day10/11.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Verify if the user is logged in."],
        image: "/images/musicAcademyCheatsheet/day10/12.webp",
      },
      {
        title: "HTTP Routing",
        subtitle: "What is Routing?",
        details: [
          "Routing in Express defines how the server responds to specific client requests.",
          "Routes are matched based on the request method and URL path.",
          "Each route can have multiple handlers (middleware functions).",
        ],
      },
      {
        title: "",
        subtitle: "Each route is associated with:",
        details: [
          "HTTP Method: Defines the operation (GET, POST, etc.).",
          "Path/Endpoint: The URL or part of it (e.g., /users).",
          "Handler Function: The logic to execute when the route is matched.",
        ],
      },
      {
        title: "",
        subtitle: "Basic Route:",
        details: [],
        image: "/images/musicAcademyCheatsheet/day10/13.webp",
      },
      {
        title: "",
        subtitle: "Dynamic Route:",
        details: ["Capture parameters from the URL using :parameterName."],
        image: "/images/musicAcademyCheatsheet/day10/14.webp",
      },
      {
        title: "",
        subtitle: "Chaining Routes",
        details: ["Use the same route path with different HTTP methods."],
        image: "/images/musicAcademyCheatsheet/day10/15.webp",
      },
      {
        title: "",
        subtitle: "Router Example (Organizing Routes)",
        details: [
          "Use express.Router to modularize routes for better maintainability.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/16.webp",
      },
      {
        title: "",
        subtitle: "Query Parameters",
        details: [
          "Use req.query to handle optional query strings like /search?name=John.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/17.webp",
      },
      {
        title: "",
        subtitle: "Middleware in Routes",
        details: ["Apply middleware to specific routes."],
        image: "/images/musicAcademyCheatsheet/day10/18.webp",
      },
      {
        title: "",
        subtitle: "404 Handling",
        details: ["Catch-all route for undefined endpoints."],
        image: "/images/musicAcademyCheatsheet/day10/19.webp",
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "Keep sensitive data (e.g., database URIs, API keys) out of your codebase.",
          "Use environment variables to store configuration values.",
        ],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "",
        subtitle: "",
        details: ["Load .env variables using dotenv"],
        image: "/images/musicAcademyCheatsheet/day10/20.webp",
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Authentication",
        details: [
          "Verifies the identity of a user (e.g., logging in with a username and password).",
          "Creates a session or token to maintain the user's authenticated state.",
          "Common methods include JWT (JSON Web Tokens) or sessions with cookies.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          "Ensures a user has the necessary permissions to access a resource.",
          "Roles and permissions are used to control access to specific routes or actions.",
          "Middleware functions can check the user's role before allowing access.",
        ],
      },
    ],
  },
  {
    taskId: "day16",
    content: [
      {
        title: "Authentication vs. Authorization",
        subtitle: "Authentication",
        details: [
          "The process of verifying a user's identity (e.g., through email and password). It answers the question, 'Who are you?'",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          " The process of determining what an authenticated user is allowed to do. It answers the question, 'What are you allowed to do?'",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "In this API, authentication is handled during login (via JWT), while authorization is managed by checking the user's role (e.g., admin, user) in protected routes.",
        ],
      },
      {
        title: "JSON Web Tokens (JWT)",
        subtitle:
          "A JWT is a compact, URL-safe token that consists of three parts:",
        details: ["A JWT typically looks like this:"],
        image: "/images/musicAcademyCheatsheet/day16/1.webp",
      },
      {
        title: "",
        subtitle: "Header",
        details: [
          "Contains metadata about the token, such as the signing algorithm.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/2.webp",
      },
      {
        title: "",
        subtitle: "Payload",
        details: ["Contains claims (e.g., user ID, role, expiration time)."],
        image: "/images/musicAcademyCheatsheet/day16/3.webp",
      },
      {
        title: "",
        subtitle: "Signature",
        details: [
          "Ensures the token's integrity by combining the header, payload, and a secret key.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "WTs are stateless, meaning the server does not need to store session data. Instead, the token itself contains all the necessary information for authentication.",
        ],
      },
      {
        title: "Password Hashing",
        subtitle: "Why Hash Passwords?",
        details: [
          "Storing plain-text passwords is a security risk. If the database is compromised, attackers can easily access user credentials.",
          "Hashing converts passwords into a fixed-length string of characters, making it nearly impossible to reverse-engineer the original password.",
        ],
      },
      {
        title: "",
        subtitle: "Salt",
        details: [
          "A random string added to the password before hashing. It ensures that even if two users have the same password, their hashed values will be different.",
        ],
      },
      {
        title: "",
        subtitle: "bcrypt",
        details: [
          "A popular hashing algorithm that automatically handles salting and is computationally intensive, making it resistant to brute-force attacks.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/4.webp",
      },
      {
        title: "Middleware in Authentication",
        subtitle: "",
        details: ["Middleware functions act as gatekeepers for your routes."],
      },
      {
        title: "",
        subtitle: "Protect Middleware",
        details: [
          "Verifies the JWT sent by the client.",
          "Decodes the token to extract the user's ID and role.",
          "Attaches the user's information to the req object, making it available to subsequent route handlers.",
          "If the token is invalid or expired, the middleware denies access and returns an error response.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Middleware ensures that authentication logic is centralized and reusable across multiple routes.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/5.webp",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        subtitle: "",
        details: [
          "RBAC is a method of restricting system access based on user roles.",
          "In this API, the role field in the user schema determines what actions a user can perform.",
        ],
      },
      {
        title: "",
        subtitle: "For example:",
        details: [
          "An admin might have access to all routes.",
          "A user might only have access to their own profile or limited resources.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Protected routes can use the user's role (from the JWT payload) to enforce these restrictions.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/6.webp",
      },
      {
        title: "Environment Variables and Security",
        subtitle: "Why Use Environment Variables?",
        details: [
          "They keep sensitive information (e.g., API keys, database credentials) out of the codebase.",
          "They allow configuration to vary between environments (e.g., development, production) without changing the code.",
        ],
      },
      {
        title: "",
        subtitle: "Security Best Practices:",
        details: [
          "Never hardcode secrets in your code.",
          "Use a .env file for local development but ensure it is added to .gitignore to avoid exposing secrets in version control.",
          "In production, use secure methods (e.g., cloud provider secrets manager) to manage environment variables.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/7.webp",
      },
      {
        title: "Error Handling",
        subtitle:
          "Proper error handling ensures that the API responds gracefully to issues such as:",
        details: [
          "Invalid user input (e.g., missing fields, incorrect email format).",
          "Database errors (e.g., connection issues, duplicate entries).",
          "Authentication failures (e.g., invalid credentials, expired tokens).",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Error responses should include a clear message and an appropriate HTTP status code (e.g., 400 for bad requests, 401 for unauthorized access).",
        ],
        image: "/images/musicAcademyCheatsheet/day16/8.webp",
      },
      {
        title: "Scalability and Modularity",
        subtitle: "Scalability",
        details: [
          "The API should be designed to handle increasing numbers of users and requests. Techniques like caching, load balancing, and database optimization can help.",
        ],
      },
      {
        title: "",
        subtitle: "Modularity",
        details: [
          "Breaking the application into smaller, reusable components (e.g., routes, middleware, models) makes the codebase easier to maintain and extend.",
        ],
      },
      {
        title: "Statelessness in REST APIs",
        subtitle: "",
        details: [
          "REST APIs are stateless, meaning each request from the client must contain all the information needed to process it.",
          "JWTs align with this principle because they contain all the necessary authentication data, eliminating the need for server-side session storage.",
        ],
      },
      {
        title: "Security Considerations",
        subtitle: "HTTPS",
        details: [
          "Always use HTTPS to encrypt data transmitted between the client and server.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/9.webp",
      },
      {
        title: "",
        subtitle: "Token Expiry",
        details: [
          "JWTs should have an expiration time (e.g., 1 hour) to limit their validity and reduce the risk of misuse.",
        ],
      },
      {
        title: "",
        subtitle: "Password Policies",
        details: [
          "Enforce strong password requirements (e.g., minimum length, special characters) to enhance security.",
        ],
      },
      {
        title: "",
        subtitle: "Rate Limiting",
        details: [
          "Prevent brute-force attacks by limiting the number of login attempts from a single IP address.",
        ],
      },
      {
        title: "Real-World Flow",
        subtitle: "Registration",
        details: [
          "User provides name, email, password, and role.",
          "Server hashes the password and saves the user to the database.",
          "Response: 201 Created with user details (excluding password).",
        ],
      },
      {
        title: "",
        subtitle: "Login",
        details: [
          "User provides email and password.",
          "Server verifies credentials and generates a JWT.",
          "Response: 200 OK with the JWT.",
        ],
      },
      {
        title: "",
        subtitle: "Protected Route",
        details: [
          "User includes the JWT in the Authorization header.",
          "Server verifies the token and grants access if valid.",
          "Response: 200 OK with the requested data.",
        ],
      },
      {
        title: "Diagrams",
        subtitle: "Authentication Flow Diagram",
        details: [],
        image: "/images/musicAcademyCheatsheet/day16/10.webp",
      },
    ],
  },
  {
    taskId: "day17",
    content: [
      {
        title: "Authentication vs. Authorization",
        subtitle: "Authentication",
        details: [
          "The process of verifying a user's identity (e.g., through email and password). It answers the question, 'Who are you?'",
        ],
      },
      {
        title: "",
        subtitle: "Authorization",
        details: [
          " The process of determining what an authenticated user is allowed to do. It answers the question, 'What are you allowed to do?'",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "In this API, authentication is handled during login (via JWT), while authorization is managed by checking the user's role (e.g., admin, user) in protected routes.",
        ],
      },
      {
        title: "JSON Web Tokens (JWT)",
        subtitle:
          "A JWT is a compact, URL-safe token that consists of three parts:",
        details: ["A JWT typically looks like this:"],
        image: "/images/musicAcademyCheatsheet/day16/1.webp",
      },
      {
        title: "",
        subtitle: "Header",
        details: [
          "Contains metadata about the token, such as the signing algorithm.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/2.webp",
      },
      {
        title: "",
        subtitle: "Payload",
        details: ["Contains claims (e.g., user ID, role, expiration time)."],
        image: "/images/musicAcademyCheatsheet/day16/3.webp",
      },
      {
        title: "",
        subtitle: "Signature",
        details: [
          "Ensures the token's integrity by combining the header, payload, and a secret key.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "WTs are stateless, meaning the server does not need to store session data. Instead, the token itself contains all the necessary information for authentication.",
        ],
      },
      {
        title: "Password Hashing",
        subtitle: "Why Hash Passwords?",
        details: [
          "Storing plain-text passwords is a security risk. If the database is compromised, attackers can easily access user credentials.",
          "Hashing converts passwords into a fixed-length string of characters, making it nearly impossible to reverse-engineer the original password.",
        ],
      },
      {
        title: "",
        subtitle: "Salt",
        details: [
          "A random string added to the password before hashing. It ensures that even if two users have the same password, their hashed values will be different.",
        ],
      },
      {
        title: "",
        subtitle: "bcrypt",
        details: [
          "A popular hashing algorithm that automatically handles salting and is computationally intensive, making it resistant to brute-force attacks.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/4.webp",
      },
      {
        title: "Middleware in Authentication",
        subtitle: "",
        details: ["Middleware functions act as gatekeepers for your routes."],
      },
      {
        title: "",
        subtitle: "Protect Middleware",
        details: [
          "Verifies the JWT sent by the client.",
          "Decodes the token to extract the user's ID and role.",
          "Attaches the user's information to the req object, making it available to subsequent route handlers.",
          "If the token is invalid or expired, the middleware denies access and returns an error response.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Middleware ensures that authentication logic is centralized and reusable across multiple routes.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/5.webp",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        subtitle: "",
        details: [
          "RBAC is a method of restricting system access based on user roles.",
          "In this API, the role field in the user schema determines what actions a user can perform.",
        ],
      },
      {
        title: "",
        subtitle: "For example:",
        details: [
          "An admin might have access to all routes.",
          "A user might only have access to their own profile or limited resources.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Protected routes can use the user's role (from the JWT payload) to enforce these restrictions.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/6.webp",
      },
      {
        title: "Environment Variables and Security",
        subtitle: "Why Use Environment Variables?",
        details: [
          "They keep sensitive information (e.g., API keys, database credentials) out of the codebase.",
          "They allow configuration to vary between environments (e.g., development, production) without changing the code.",
        ],
      },
      {
        title: "",
        subtitle: "Security Best Practices:",
        details: [
          "Never hardcode secrets in your code.",
          "Use a .env file for local development but ensure it is added to .gitignore to avoid exposing secrets in version control.",
          "In production, use secure methods (e.g., cloud provider secrets manager) to manage environment variables.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/7.webp",
      },
      {
        title: "Error Handling",
        subtitle:
          "Proper error handling ensures that the API responds gracefully to issues such as:",
        details: [
          "Invalid user input (e.g., missing fields, incorrect email format).",
          "Database errors (e.g., connection issues, duplicate entries).",
          "Authentication failures (e.g., invalid credentials, expired tokens).",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Error responses should include a clear message and an appropriate HTTP status code (e.g., 400 for bad requests, 401 for unauthorized access).",
        ],
        image: "/images/musicAcademyCheatsheet/day16/8.webp",
      },
      {
        title: "Scalability and Modularity",
        subtitle: "Scalability",
        details: [
          "The API should be designed to handle increasing numbers of users and requests. Techniques like caching, load balancing, and database optimization can help.",
        ],
      },
      {
        title: "",
        subtitle: "Modularity",
        details: [
          "Breaking the application into smaller, reusable components (e.g., routes, middleware, models) makes the codebase easier to maintain and extend.",
        ],
      },
      {
        title: "Statelessness in REST APIs",
        subtitle: "",
        details: [
          "REST APIs are stateless, meaning each request from the client must contain all the information needed to process it.",
          "JWTs align with this principle because they contain all the necessary authentication data, eliminating the need for server-side session storage.",
        ],
      },
      {
        title: "Security Considerations",
        subtitle: "HTTPS",
        details: [
          "Always use HTTPS to encrypt data transmitted between the client and server.",
        ],
        image: "/images/musicAcademyCheatsheet/day16/9.webp",
      },
      {
        title: "",
        subtitle: "Token Expiry",
        details: [
          "JWTs should have an expiration time (e.g., 1 hour) to limit their validity and reduce the risk of misuse.",
        ],
      },
      {
        title: "",
        subtitle: "Password Policies",
        details: [
          "Enforce strong password requirements (e.g., minimum length, special characters) to enhance security.",
        ],
      },
      {
        title: "",
        subtitle: "Rate Limiting",
        details: [
          "Prevent brute-force attacks by limiting the number of login attempts from a single IP address.",
        ],
      },
      {
        title: "Real-World Flow",
        subtitle: "Registration",
        details: [
          "User provides name, email, password, and role.",
          "Server hashes the password and saves the user to the database.",
          "Response: 201 Created with user details (excluding password).",
        ],
      },
      {
        title: "",
        subtitle: "Login",
        details: [
          "User provides email and password.",
          "Server verifies credentials and generates a JWT.",
          "Response: 200 OK with the JWT.",
        ],
      },
      {
        title: "",
        subtitle: "Protected Route",
        details: [
          "User includes the JWT in the Authorization header.",
          "Server verifies the token and grants access if valid.",
          "Response: 200 OK with the requested data.",
        ],
      },
      {
        title: "Diagrams",
        subtitle: "Authentication Flow Diagram",
        details: [],
        image: "/images/musicAcademyCheatsheet/day16/10.webp",
      },
    ],
  },
  {
    taskId: "day19",
    content: [
      {
        title: "User Authentication Basics",
        subtitle: "What is Authentication?",
        details: [
          "Authentication is the process of verifying a user's identity (e.g., through login and password). It ensures that only authorized users can access certain parts of an application.",
        ],
      },
      {
        title: "",
        subtitle: "Why is it Important?",
        details: [
          "Authentication protects sensitive data and ensures that only legitimate users can perform actions like accessing profiles, making purchases, or posting content.",
        ],
      },
      {
        title: "Persistent Login with localStorage",
        subtitle: "What is Persistent Login?",
        details: [
          "Persistent login allows users to stay logged in even after refreshing the page or closing the browser. This is achieved by storing a token (e.g., JWT) in the browser's localStorage.",
        ],
      },
      {
        title: "",
        subtitle: "How Does It Work?",
        details: [
          "When a user logs in, the server sends a token, which is stored in localStorage. On page reload, the app checks for this token and automatically logs the user in by fetching their data from the server.",
        ],
      },
      {
        title: "Protected Routes",
        subtitle: "What are Protected Routes?",
        details: [
          "Protected routes are pages or components that only authenticated users can access. If a user is not logged in, they are redirected to a login page.",
        ],
      },
      {
        title: "",
        subtitle: "How to Implement?",
        details: ["Use conditional rendering in React Router."],
      },
      {
        title: "Role of useEffect in Authentication",
        subtitle: "What is useEffect?",
        details: [
          "useEffect is a React hook that runs side effects (e.g., fetching data) when the component mounts or when specific dependencies change.",
        ],
      },
      {
        title: "",
        subtitle: "How is it Used Here?",
        details: [
          "On app load, useEffect checks for a token in localStorage. If a token exists, it fetches the user's data from the server to log them in automatically.",
        ],
      },
      {
        title: "Handling User Registration and Login",
        subtitle: "Registration",
        details: [
          "When a user registers, their details (name, email, password, role) are sent to the server. The server creates a new user and returns a token for authentication.",
        ],
      },
      {
        title: "",
        subtitle: "Login",
        details: [
          "When a user logs in, their credentials (email and password) are sent to the server. If valid, the server returns a token, which is stored in localStorage.",
        ],
      },
      {
        title: "Logout Functionality",
        subtitle: "What Happens During Logout?",
        details: [
          "Logout clears the user's session by removing the token from localStorage and resetting the user state to null.",
        ],
      },
      {
        title: "",
        subtitle: "Why Clear localStorage?",
        details: [
          "Clearing localStorage ensures that the user is fully logged out and cannot access protected routes without re-authenticating.",
        ],
      },
      {
        title: "Profile Setup",
        subtitle: "What is Profile Setup?",
        details: [
          "After registration or login, users may need to complete their profile (e.g., add a profile picture, bio, or preferences). This is often done on a dedicated /profile-setup page.",
        ],
      },
      {
        title: "",
        subtitle: "How to Implement?",
        details: [
          "Create a ProfileSetup component that is only accessible to logged-in users. Pass the user data as a prop to pre-fill or customize the form.",
        ],
      },
      {
        title: "Error Handling",
        subtitle: "Why is Error Handling Important?",
        details: [
          "Errors (e.g., invalid credentials, server issues) can disrupt the user experience. Proper error handling ensures users receive clear feedback and the app remains stable.",
        ],
      },
      {
        title: "",
        subtitle: "How to Handle Errors?",
        details: [
          "Use a state variable (e.g., error) to store error messages. Display these messages conditionally in the UI to inform the user.",
        ],
      },
      {
        title: "Security Considerations",
        subtitle: "Token Security",
        details: [
          "Always use HTTPS to encrypt data sent between the client and server. Avoid storing sensitive data (e.g., passwords) in localStorage.",
        ],
      },
      {
        title: "",
        subtitle: "Input Validation",
        details: [
          "Validate user inputs (e.g., email format, password strength) on both the client and server to prevent invalid or malicious data.",
        ],
      },
      {
        title: "Testing Your Authentication System",
        subtitle: "What to Test?",
        details: [
          "Login and registration functionality.",
          "Persistent login after page refresh.",
          "Access to protected routes for logged-in and non-logged-in users.",
          "Logout functionality.",
        ],
      },
      {
        title: "",
        subtitle: "Tools to Use",
        details: [
          "Manual testing in the browser.",
          "Automated testing with tools like Jest and React Testing Library.",
        ],
      },
      {
        title: "Key Takeaways",
        subtitle: "",
        details: [
          "Authentication is essential for securing user data and restricting access to certain parts of your app.",
          "Use localStorage to persist login sessions and useEffect to fetch user data on app load.",
          "Protect routes using conditional rendering in React Router.",
          "Handle errors gracefully to improve user experience.",
          "Always prioritize security by validating inputs and using HTTPS.",
        ],
      },
    ],
  },
  {
    taskId: "day20",
    content: [
      {
        title: "The Purpose of the Component",
        subtitle: "",
        details: [
          "The ProfileSetup component is designed to allow users to update their profile information dynamically based on their role (Teacher or Student).",
        ],
      },
      {
        title: "",
        subtitle: " It's a form-based component that handles:",
        details: [
          "Common Fields: Information applicable to all users (e.g., name, contact details).",
          "Role-Specific Fields: Custom data for Teachers (e.g., expertise, availability) and Students (e.g., enrolled lessons).",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "This component is a great example of how to build dynamic, role-based UIs in React, which is a common requirement in real-world applications.",
        ],
      },
      {
        title: "Core Concepts Behind the Component",
        subtitle: "State Management in React",
        details: [
          "Why State?: State is used to store and manage the form data dynamically as the user interacts with the inputs.",
          "Single Source of Truth: Instead of managing multiple state variables, we use a single state object (formData) to store all form data. This makes it easier to manage and update nested fields (e.g., teacherDetails).",
          "Nested State: For role-specific data (e.g., teacherDetails.availability), we use nested objects and arrays. This requires careful state updates to avoid overwriting existing data.",
        ],
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "Role-Based UI: The component displays different fields based on the user's role (Teacher or Student). This is achieved using conditional rendering (if statements or ternary operators).",
          "Dynamic Forms: For fields like availability, the form can grow or shrink based on user input. This is handled by dynamically adding or removing entries from the state.",
        ],
      },
      {
        title: "",
        subtitle: "Event Handling",
        details: [
          "onChange Events: Every input field in the form has an onChange handler to update the state as the user types.",
          "Parsing Inputs: For fields like expertise (comma-separated values) and availability (day and time slots), we parse the input strings into arrays or objects for easier storage and processing.",
        ],
      },
      {
        title: "",
        subtitle: "Form Submission and API Integration",
        details: [
          "Preventing Default Behavior: When the form is submitted, we use e.preventDefault() to stop the page from reloading.",
          "Sending Data to the Backend: The updated form data is sent to the server using a PUT request. This involves: adding an authentication token to the request headers. Handling the server's response (success or error) and providing feedback to the user.",
        ],
      },
      {
        title: "",
        subtitle: "Validation and Error Handling",
        details: [
          "Frontend Validation: Before submitting the form, we ensure required fields are filled and inputs are in the correct format (e.g., valid URLs for profile pictures).",
          "Backend Error Handling: If the server returns an error (e.g., invalid data), we display a user-friendly message.",
        ],
      },
      {
        title: "Why PropTypes Are Important",
        subtitle: "",
        details: [
          "What Are PropTypes?: PropTypes are a way to validate the data passed to a component via props. They ensure that the component receives the correct data types and structure.",
        ],
      },
      {
        title: "",
        subtitle: "Why Use Them?",
        details: [
          "Error Prevention: If the user prop doesn't match the expected structure, React will log a warning in the console.",
          "Self-Documenting Code: PropTypes act as documentation, making it clear what data the component expects.",
          "Easier Debugging: Clear error messages help identify issues with props early in development.",
        ],
      },
      {
        title: "Real-World Applications",
        subtitle: "",
        details: [
          "Freelancing Platforms: Similar forms are used on platforms like Freelancer.com, where users (e.g., freelancers or clients) have role-specific profiles.",
          "E-Learning Platforms: Teachers and students often have different profile requirements, making role-based forms essential.",
          "Job Portals: Job seekers and employers have different profile fields, requiring dynamic form handling.",
        ],
      },
      {
        title: "Best Practices for Building Dynamic Forms",
        subtitle: "Keep State Organized",
        details: [
          "Use a single state object for all form data.",
          "Use nested objects for role-specific fields to keep the state clean and manageable.",
        ],
      },
      {
        title: "",
        subtitle: "Use Conditional Rendering Wisely",
        details: [
          "Only render fields that are relevant to the user's role.",
          "Avoid unnecessary complexity by keeping the logic simple and readable.",
        ],
      },
      {
        title: "",
        subtitle: "Validate Inputs",
        details: [
          "Use frontend validation to ensure data is correct before sending it to the server.",
          "Provide clear error messages to guide the user.",
        ],
      },
      {
        title: "",
        subtitle: "Optimize Performance",
        details: [
          "Avoid unnecessary re-renders by using useState and useEffect effectively.",
          "Memoize expensive calculations or functions if needed.",
        ],
      },
      {
        title: "",
        subtitle: "Test Thoroughly",
        details: [
          "Test common fields, role-specific fields, and edge cases (e.g., empty inputs, invalid data).",
          "Use debugging tools to identify and fix issues.",
        ],
      },
    ],
  },
  {
    taskId: "day21",
    content: [
      {
        title: "What is Authentication and Why Does It Matter?",
        subtitle: "",
        details: [
          "Authentication is the process of verifying a user's identity. It's the gateway that allows users to access protected resources, such as their profile, settings, or personalized content. Without authentication, applications would be open to misuse, data breaches, and unauthorized access.",
        ],
      },
      {
        title: "",
        subtitle: "Why is it important?",
        details: [
          "Security: Protects sensitive user data from unauthorized access.",
          "Personalization: Enables users to have a customized experience based on their preferences and actions.",
          "Trust: Builds user confidence in the application, knowing their information is safe.",
          "Compliance: Ensures the application meets legal and regulatory requirements for data protection.",
        ],
      },
      {
        title: "Core Concepts of Authentication",
        subtitle: "",
        details: [
          "To understand authentication, let's break it down into its core components:",
        ],
      },
      {
        title: "",
        subtitle: "User Registration",
        details: [
          "The process of creating a new account.",
          "Involves collecting user information (e.g., name, email, password) and storing it securely in a database.",
        ],
      },
      {
        title: "",
        subtitle: "User Login",
        details: [
          "The process of verifying a user's credentials (e.g., email and password).",
          "If successful, the server generates a JWT (JSON Web Token) to represent the user's session.",
        ],
      },
      {
        title: "",
        subtitle: "Token-Based Authentication",
        details: [
          "JWTs are used to securely transmit user information between the client and server.",
          "The token is stored on the client side (e.g., in localStorage) and sent with every request to authenticate the user.",
        ],
      },
      {
        title: "",
        subtitle: "Protected Routes",
        details: [
          "Routes that are only accessible to authenticated users.",
          "If a user tries to access a protected route without being logged in, they are redirected to the login page.",
        ],
      },
      {
        title: "",
        subtitle: "Logout",
        details: [
          "The process of ending a user's session.",
          "Involves removing the token from localStorage and clearing the user's state in the application.",
        ],
      },
      {
        title: "How Authentication Works in a React Application",
        subtitle: "",
        details: [
          "In a React application, authentication is typically implemented using the following workflow:",
        ],
      },
      {
        title: "",
        subtitle: "User Registration",
        details: [
          "The user fills out a registration form.",
          "The data is sent to the backend, where it is validated and stored in the database.",
          "A JWT is generated and sent back to the client.",
        ],
      },
      {
        title: "",
        subtitle: "User Login",
        details: [
          "The user enters their credentials (e.g., email and password).",
          "The backend verifies the credentials and generates a JWT.",
          "The token is stored in localStorage and used to authenticate future requests.",
        ],
      },
      {
        title: "",
        subtitle: "Fetching User Data",
        details: [
          "On app load, the frontend checks for a stored token.",
          "If a token exists, the frontend sends a request to the backend to fetch the user's data.",
          "The user's data is stored in the application state and used to personalize the UI.",
        ],
      },
      {
        title: "",
        subtitle: "Protected Routes",
        details: [
          "Routes like /profile or /dashboard are protected.",
          "If the user is not authenticated, they are redirected to the login page.",
        ],
      },
      {
        title: "",
        subtitle: "Logout",
        details: [
          "The token is removed from localStorage.",
          "The user's state is cleared, and they are redirected to the home page or login page.",
        ],
      },
      {
        title: "The Role of Error Handling in Authentication",
        subtitle: "",
        details: [
          "Error handling is a critical part of any authentication system. It ensures that the application can gracefully handle issues like:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Invalid credentials: Displaying a message like “Incorrect email or password.”",
          "Network errors: Showing a message like “Unable to connect to the server.”",
          "Expired tokens: Redirecting the user to the login page.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "By handling errors effectively, you can provide a better user experience and prevent the application from crashing.",
        ],
      },
      {
        title: "",
        subtitle: "Why This Matters for Your Project",
        details: [
          "In your project, AuthFlow Pro, you're building a professional-grade authentication system. This system will:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Secure user data: Protect sensitive information like passwords and personal details.",
          "Enhance user experience: Provide a seamless and personalized experience for logged-in users.",
          "Ensure scalability: Lay the foundation for future features like role-based access control (e.g., admin vs. regular user).",
          "Build trust: Show users that their data is safe and their privacy is respected.",
        ],
      },
      {
        title: "The Bigger Picture",
        subtitle: "",
        details: [
          "Authentication is more than just a technical requirement—it's a way to build trust and engagement with your users. By implementing a robust authentication system, you're not only protecting your application but also creating a foundation for features like:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "User profiles: Allow users to manage their information and preferences.",
          "Role-based access: Restrict certain features to specific user roles (e.g., admin, teacher, student).",
          "Analytics: Track user behavior to improve the application.",
        ],
      },
      {
        title: "Conclusion",
        subtitle: "",
        details: [
          "Authentication is the backbone of modern web applications. It ensures security, enables personalization, and builds trust with users. By understanding the principles behind authentication and implementing them in your project, you're taking a crucial step toward building professional, scalable, and user-friendly applications. Keep these concepts in mind as you work on AuthFlow Pro, and you'll create a system that users can rely on! ",
        ],
      },
    ],
  },
  {
    taskId: "day22",
    content: [
      {
        title: "Deployment Tool: Render",
        subtitle: "",
        details: [
          "What it is: Render is a cloud platform for deploying backend services, static sites, and databases ( FREE ).",
          "Why use it: Render simplifies the deployment process by handling infrastructure, scaling, and SSL certificates. It's beginner-friendly and offers a free tier for small projects.",
        ],
      },
      {
        title: "",
        subtitle: "Key Features:",
        details: [
          "Automatic deployments from GitHub.",
          "Built-in support for environment variables.",
          "Custom domains and HTTPS.",
        ],
      },
      {
        title: "Deployment Tool: Netlify",
        subtitle: "",
        details: [
          "What it is: Netlify is a platform for deploying and hosting static websites and single-page applications (SPAs).",
          "Why use it: Netlify is optimized for modern web development workflows, offering continuous deployment, serverless functions, and a global CDN.",
        ],
      },
      {
        title: "",
        subtitle: "Key Features:",
        details: [
          "Automatic deployments from GitHub.",
          "Support for client-side routing with a _redirects file.",
          "Free tier for small projects.",
        ],
      },
      {
        title: "Environment Variables",
        subtitle: "",
        details: [
          "What they are: Environment variables are key-value pairs used to configure your application. They are typically stored in a .env file or directly in the deployment platform.",
          "Why use them: Environment variables keep sensitive data (e.g., API keys, database URLs) out of your codebase and allow you to configure your app for different environments (e.g., development, production).",
          "",
        ],
      },
      {
        title: "",
        subtitle: "Examples:",
        details: [
          "MONGO_URI: The connection string for your MongoDB database.",
          "JWT_SECRET: A secret key for signing JSON Web Tokens.",
          "REACT_APP_API_URL: The URL of your deployed backend.",
        ],
      },
      {
        title: "Common Errors and Solutions",
        subtitle: "Error: Failed to load resource: net::ERR_CONNECTION_REFUSED",
        details: ["What it means: The frontend cannot connect to the backend."],
      },
      {
        title: "",
        subtitle: "Causes:",
        details: [
          "The backend URL is incorrect (e.g., still pointing to localhost).",
          "The backend is not running or accessible.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Ensure the frontend uses the correct REACT_APP_API_URL ( not the hardcoded localhost URL ).",
          "Check the backend logs on Render for errors.",
        ],
      },
      {
        title: "",
        subtitle: "Error: 404 Not Found on Page Refresh",
        details: ["What it means: Netlify cannot find the requested resource."],
      },
      {
        title: "",
        subtitle: "Causes:",
        details: [
          "React Router handles routing on the client side, but Netlify expects server-side routes.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Add a _redirects file in the public folder with /* /index.html 200.",
        ],
      },
      {
        title: "",
        subtitle: "Error: Cannot find package 'express'",
        details: ["What it means: Dependencies are not installed."],
      },
      {
        title: "",
        subtitle: "Causes:",
        details: [
          "The node_modules folder is missing or dependencies are not listed in package.json.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Run npm install in the backend folder.",
          "Ensure all dependencies are listed in package.json.",
        ],
      },
      {
        title: "",
        subtitle: "Error: Error connecting to MongoDB",
        details: ["What it means: The backend cannot connect to the database."],
      },
      {
        title: "",
        subtitle: "Causes:",
        details: [
          "The MONGO_URI is incorrect or MongoDB Atlas is blocking the connection.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Verify the MONGO_URI in your .env file.",
          "Whitelist Render's IP address in MongoDB Atlas.",
        ],
      },
      {
        title: "Best Practices",
        subtitle: "Frontend",
        details: [
          "Store the backend URL in REACT_APP_API_URL.",
          "Display user-friendly error messages for failed API calls.",
          "Use lazy loading for components.",
          "Minimize unnecessary re-renders with React.memo.",
        ],
      },
      {
        title: "",
        subtitle: "Backend",
        details: [
          "Check user input (e.g., email, password) before processing.",
          "Implement cors to allow frontend requests.",
          "Use authMiddleware to protect sensitive routes.",
          "Use HTTPS for all API calls.",
          "Store sensitive data (e.g., JWT) securely.",
        ],
      },
      {
        title: "",
        subtitle: "Deployment",
        details: [
          "Ensure the app works on localhost before deploying.",
          "Check Render and Netlify logs for errors.",
          "Automate testing and deployment with GitHub Actions.",
        ],
      },
    ],
  },
  {
    taskId: "day23",
    content: [
      {
        title: "Why Do We Need Database Seeding?",
        subtitle:
          "Database seeding is the process of populating a database with initial or sample data. It serves several key purposes:",
        details: [],
      },
      {
        title: "",
        subtitle: "Development Efficiency:",
        details: [
          "Developers need a consistent dataset to build and test features. Without seeding, they'd have to manually enter data every time they set up a new environment, which is time-consuming and error-prone.",
          "Seeding ensures that everyone on the team works with the same data, reducing inconsistencies.",
        ],
      },
      {
        title: "",
        subtitle: "Testing and Debugging:",
        details: [
          "Automated tests require predictable data to verify functionality. Seeding provides a controlled dataset for unit tests, integration tests, and end-to-end tests.",
          "Debugging is easier when you can reproduce issues with the same data every time.",
        ],
      },
      {
        title: "",
        subtitle: "Testing and Debugging:",
        details: [
          "Automated tests require predictable data to verify functionality. Seeding provides a controlled dataset for unit tests, integration tests, and end-to-end tests.",
          "Debugging is easier when you can reproduce issues with the same data every time.",
        ],
      },
      {
        title: "",
        subtitle: "Demonstrations and Onboarding:",
        details: [
          "A pre-populated database allows you to showcase your application with realistic data during demos.",
          "New team members can quickly understand the data structure and relationships by exploring seeded data.",
        ],
      },
      {
        title: "",
        subtitle: "Data Relationships and Integrity:",
        details: [
          "Seeding helps you test and validate relationships between tables or collections (e.g., a User has many BlogPosts).",
          "It ensures that your database schema and constraints (e.g., foreign keys, unique indexes) are working as expected.",
        ],
      },
      {
        title: "Why Clear Existing Data Before Seeding?",
        subtitle: "If you don't clear existing data before seeding, you risk:",
        details: [],
      },
      {
        title: "",
        subtitle: "Duplicate Records:",
        details: [
          "The same data might be inserted multiple times, leading to conflicts or unexpected behavior.",
        ],
      },
      {
        title: "",
        subtitle: "Inconsistent State:",
        details: [
          "Existing data might not match the structure or relationships defined in your seed data, causing errors.",
        ],
      },
      {
        title: "",
        subtitle: "Why Clearing is Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Fresh Start:",
        details: [
          "Clearing data ensures that your database starts with a clean slate, free from outdated or irrelevant records.",
        ],
      },
      {
        title: "",
        subtitle: "Predictable Results:",
        details: [
          "You can be confident that the seeded data is the only data in the database, making it easier to test and debug.",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Data Loss:",
        details: [
          "Clearing data deletes all existing records, which might not be desirable in a production environment.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Use conditional logic to skip clearing in production or use a separate database for development and testing.",
        ],
      },
      {
        title: "Why Use Environment Variables for Database Connection?",
        subtitle: "The Problem with Hardcoding",
        details: [
          "Hardcoding sensitive information like database URIs in your codebase is a security risk. If your code is exposed (e.g., in a public repository), attackers can gain access to your database.",
        ],
      },
      {
        title: "",
        subtitle: "Why Environment Variables are Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Security:",
        details: [
          "Environment variables keep sensitive information out of your codebase.",
        ],
      },
      {
        title: "",
        subtitle: "Flexibility:",
        details: [
          "You can easily switch between different databases (e.g., local, staging, production) without modifying your code.",
        ],
      },
      {
        title: "",
        subtitle: "Best Practice:",
        details: [
          "Using environment variables aligns with the 12-factor app methodology, which recommends storing configuration in the environment.",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Complexity:",
        details: [
          "Managing environment variables can be tricky, especially in large teams or distributed systems.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Use tools like .env files (with dotenv) or secret management services (e.g., AWS Secrets Manager).",
        ],
      },
      {
        title: "Why Define Data Models Before Seeding?",
        subtitle: "The Problem with Ad-Hoc Data",
        details: [],
      },
      {
        title: "",
        subtitle: "Without well-defined models, your seed data might:",
        details: [
          "Lack consistency (e.g., missing required fields).",
          "Fail to enforce relationships (e.g., a LessonSchedule without a teacherId).",
          "Violate database constraints (e.g., unique indexes, foreign keys).",
        ],
      },
      {
        title: "",
        subtitle: "Why Data Models are Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Structure:",
        details: [
          "Models define the shape of your data, ensuring that all required fields are present and valid.",
        ],
      },
      {
        title: "",
        subtitle: "Relationships:",
        details: [
          "Models make it easy to establish and enforce relationships between collections or tables.",
        ],
      },
      {
        title: "",
        subtitle: "Validation:",
        details: [
          "Models can include validation rules (e.g., email format, required fields) to ensure data integrity.",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Overhead:",
        details: [
          "Defining models requires upfront effort, which might feel unnecessary for small projects.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Use lightweight ORMs or schema-less databases for small projects, but always define models for larger applications.",
        ],
      },
      {
        title: "Why Link Data Between Collections/Tables?",
        subtitle: "The Problem with Isolated Data",
        details: [],
      },
      {
        title: "",
        subtitle:
          "If you don't link data, your application won't reflect real-world relationships. For example:",
        details: [
          "A LessonSchedule without a teacher or student is meaningless.",
          "A BlogPost without an author lacks context.",
        ],
      },
      {
        title: "",
        subtitle: "Why Linking is Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Realism:",
        details: [
          "Linked data mirrors real-world scenarios, making your application more realistic and easier to test.",
        ],
      },
      {
        title: "",
        subtitle: "Functionality:",
        details: [
          "Relationships enable features like fetching all lessons for a specific teacher or all blog posts by a specific author.",
        ],
      },
      {
        title: "",
        subtitle: "Data Integrity:",
        details: [
          "Linking ensures that related records exist and are valid (e.g., a LessonSchedule cannot reference a non-existent User).",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Complexity:",
        details: [
          "Managing relationships adds complexity to your seed data and queries.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Use tools like Mongoose's populate() or SQL joins to simplify working with relationships.",
        ],
      },
      {
        title: "Why Use Logging During Seeding?",
        subtitle: "The Problem with Silent Failures",
        details: [],
      },
      {
        title: "",
        subtitle: "Without logging, you might not know if:",
        details: [
          "The seeding process completed successfully.",
          "Certain records failed to insert due to validation errors.",
          "Relationships were correctly established.",
        ],
      },
      {
        title: "",
        subtitle: "Why Logging is Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Transparency:",
        details: [
          "Logging provides visibility into the seeding process, helping you identify and fix issues.",
        ],
      },
      {
        title: "",
        subtitle: "Debugging:",
        details: [
          "Detailed logs make it easier to debug problems (e.g., why a specific record failed to insert).",
        ],
      },
      {
        title: "",
        subtitle: "Verification:",
        details: [
          "Logs allow you to verify that the correct data was inserted and relationships were established.",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Noise:",
        details: [
          "Excessive logging can clutter the console and make it harder to spot important information.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Use different log levels (e.g., info, error) and only log essential details.",
        ],
      },
      {
        title: "Why Avoid Hardcoding Sensitive Data?",
        subtitle:
          "Hardcoding sensitive data like passwords or API keys in your seed data is a security risk. If your code is exposed, attackers can misuse this information.",
        details: [],
      },
      {
        title: "",
        subtitle: "Why Environment Variables or Dummy Data are Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Security:",
        details: ["Sensitive information is kept out of your codebase."],
      },
      {
        title: "",
        subtitle: "Flexibility:",
        details: [
          "You can easily switch between different datasets (e.g., development, testing) without modifying your code.",
        ],
      },
      {
        title: "",
        subtitle: "Best Practice:",
        details: [
          "Using dummy data for development and testing aligns with security best practices.",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Convenience:",
        details: [
          "Hardcoding might feel easier in the short term, but it's not worth the security risks.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Use tools like faker.js to generate realistic but fake data for development and testing.",
        ],
      },
      {
        title: "Why Automate and Document the Seeding Process?",
        subtitle: "Manual seeding is:",
        details: [
          "Time-consuming.",
          "Error-prone.",
          "Inconsistent across environments.",
        ],
      },
      {
        title: "",
        subtitle: "Why Automation and Documentation are Better",
        details: [],
      },
      {
        title: "",
        subtitle: "Consistency:",
        details: [
          "Automated seeding ensures that everyone on the team works with the same data.",
        ],
      },
      {
        title: "",
        subtitle: "Efficiency:",
        details: [
          "Running a script is faster and more reliable than manually entering data.",
        ],
      },
      {
        title: "",
        subtitle: "Onboarding:",
        details: [
          "Documentation helps new team members understand how to set up and use the seeding component.",
        ],
      },
      {
        title: "",
        subtitle: "Trade-Offs",
        details: [],
      },
      {
        title: "",
        subtitle: "Upfront Effort:",
        details: [
          "Writing scripts and documentation requires time and effort.",
        ],
      },
      {
        title: "",
        subtitle: "Solution:",
        details: [
          "Treat seeding as a core part of your development process, not an afterthought.",
        ],
      },
      {
        title: "Conclusion",
        subtitle: "",
        details: [
          "Building a database seeding component is more than just writing code—it's about understanding the why behind each decision and choosing the best approach for your application. By following these theoretical principles, you can create a seeding system that is secure, efficient, and scalable, while avoiding common pitfalls like hardcoding sensitive data or neglecting relationships.",
          "Remember, the goal of seeding is to make your life easier as a developer, so invest the time to do it right!",
        ],
      },
    ],
  },
  {
    taskId: "day24",
    content: [
      {
        title: "What Are Routes?",
        subtitle: "Definition",
        details: [
          "Routes are endpoints in a web application that handle specific HTTP requests (e.g., GET, POST, PUT, DELETE).",
          "They define how the server responds to client requests for specific URLs.",
        ],
      },
      {
        title: "",
        subtitle: "Purpose of Routes",
        details: [
          "Serve Data: Fetch data from the database (e.g., a list of teachers or blog posts).",
          "Perform Actions: Execute operations like creating, updating, or deleting resources.",
          "Structure the API: Define the API's structure and make it predictable for clients.",
        ],
      },
      {
        title: "",
        subtitle: "Why Are Routes Important?",
        details: [
          "They are the foundation of any web application.",
          "They enable communication between the client (frontend) and server (backend).",
          "They define the API's functionality and structure.",
        ],
      },
      {
        title: "Middleware: The Backbone of Express Applications",
        subtitle: "What Is Middleware?",
        details: [
          "Middleware are functions that execute during the request-response cycle.",
          "They sit between the incoming request and the final route handler.",
        ],
      },
      {
        title: "",
        subtitle: "How Middleware Works",
        details: [
          "Request Comes In: The server receives an HTTP request.",
          "Middleware Executes: Middleware functions process the request (e.g., check authentication, validate data).",
          "Route Handler Executes: The final route handler processes the request and sends a response.",
        ],
      },
      {
        title: "Types of Middleware",
        subtitle: "Authentication Middleware",
        details: [
          "Verifies if the user is logged in (e.g., by checking a JWT token).",
          "Example: protect middleware.",
        ],
      },
      {
        title: "",
        subtitle: "Authorization Middleware",
        details: [
          "Checks if the user has the required permissions or role (e.g., Admin).",
          "Example: admin middleware.",
        ],
      },
      {
        title: "",
        subtitle: "Validation Middleware",
        details: [
          "Ensures the request data is valid (e.g., checking if required fields are present).",
        ],
      },
      {
        title: "",
        subtitle: "Error-Handling Middleware",
        details: ["Catches and handles errors gracefully."],
      },
      {
        title: "",
        subtitle: "Why Use Middleware?",
        details: [
          "Modularity: Keeps code organized and reusable.",
          "Security: Ensures requests are authenticated and authorized before processing.",
          "Validation: Prevents invalid or malicious data from being processed.",
          "Error Handling: Catches errors and provides meaningful responses.",
        ],
      },
      {
        title: "Role-Based Access Control (RBAC)",
        subtitle: "What Is RBAC?",
        details: [
          "RBAC is a security model that restricts access to resources based on user roles.",
          "Example roles: Student, Teacher, Admin.",
        ],
      },
      {
        title: "",
        subtitle: "How RBAC Works",
        details: [
          "Assign Roles: Each user is assigned a role (e.g., Admin, Teacher).",
          "Protect Routes: Use middleware to check the user's role before allowing access to a route.",
          "Example: Only Admin users can create or delete users.",
          "Enforce Permissions: Ensure users can only perform actions relevant to their role.",
        ],
      },
      {
        title: "",
        subtitle: "Why Use RBAC?",
        details: [
          "Security: Prevents unauthorized access to sensitive data or actions.",
          "Scalability: Makes it easy to add new roles or permissions.",
          "Clarity: Clearly defines what each role can and cannot do.",
        ],
      },
      {
        title: "Securing Routes",
        subtitle: "Public Routes",
        details: [
          "Accessible to everyone.",
          "Example: Fetching blog posts or testimonials.",
          "Public Routes provide access to non-sensitive data.",
          "Public Routes allow unauthenticated users to interact with the application.",
        ],
      },
      {
        title: "",
        subtitle: "Protected Routes",
        details: [
          "Require authentication (e.g., a valid JWT token).",
          "Example: Updating a user profile or booking a lesson.",
          "Protected Routes ensure only authenticated users can access sensitive data or actions.",
          "Protected Routes prevent unauthorized access.",
          "",
        ],
      },
      {
        title: "",
        subtitle: "Admin-Only Routes",
        details: [
          "Require both authentication and admin privileges.",
          "Example: Creating or deleting users.",
          "Admin-Only Routes restrict sensitive actions to trusted users.",
          "Admin-Only Routes prevent unauthorized users from performing critical operations.",
        ],
      },
      {
        title: "",
        subtitle: "Best Practices for Securing Routes",
        details: [
          "Use HTTPS: Encrypt data in transit to prevent eavesdropping.",
          "Validate Input: Ensure request data is valid and sanitized.",
          "Limit Access: Use RBAC to restrict access to sensitive routes.",
          "Handle Errors Gracefully: Return meaningful error messages without exposing sensitive information.",
        ],
      },
      {
        title: "Error Handling",
        subtitle: "What Is Error Handling?",
        details: [
          "Error handling is the process of catching and responding to errors that occur during the execution of your application.",
        ],
      },
      {
        title: "",
        subtitle: "Why Is Error Handling Important?",
        details: [
          "Prevents the server from crashing.",
          "Provides meaningful feedback to the client.",
          "Improves the user experience.",
        ],
      },
      {
        title: "How to Handle Errors",
        subtitle: "Use try...catch Blocks",
        details: ["Wrap asynchronous code in try...catch to catch errors."],
      },
      {
        title: "",
        subtitle: "Centralized Error Handling",
        details: [
          "Use error-handling middleware to catch and process errors globally.",
        ],
      },
      {
        title: "",
        subtitle: "Return Meaningful Responses",
        details: ["nclude an error message and status code in the response."],
      },
      {
        title: "Validation",
        subtitle: "What Is Validation?",
        details: [
          "Validation is the process of ensuring that the request data is valid and safe to process.",
        ],
      },
      {
        title: "",
        subtitle: "Why Validate Data?",
        details: [
          "Prevents invalid or malicious data from being processed.",
          "Ensures data integrity and consistency.",
          "Improves security by preventing injection attacks.",
        ],
      },
      {
        title: "How to Validate Data",
        subtitle: "Use Schema Validations",
        details: ["Define validation rules in your Mongoose schemas."],
      },
      {
        title: "",
        subtitle: "Use Middleware",
        details: [
          "Add validation middleware to check request data before processing it.",
          "Example: Use a library like express-validator.",
        ],
      },
      {
        title: "",
        subtitle: "Sanitize Input",
        details: ["Remove or escape harmful characters from user input."],
      },
      {
        title: "One-Time Scripts",
        subtitle: "What Are One-Time Scripts?",
        details: [
          "Scripts that perform a specific task once (e.g., creating an initial admin user).",
          "Example: A createAdmin script to generate the first admin account.",
        ],
      },
      {
        title: "",
        subtitle: "Why Use One-Time Scripts?",
        details: [
          "Automates repetitive or sensitive tasks.",
          "Ensures consistency and reduces human error.",
        ],
      },
      {
        title: "",
        subtitle: "Best Practices for One-Time Scripts",
        details: [
          "Use Only Once: Run the script once and then disable or delete it.",
          "Never Commit to Git: Avoid exposing sensitive functionality in version control.",
          "Use Environment Variables: Store sensitive information (e.g., admin credentials) in environment variables.",
          "Disable in Production: Remove or disable the script after use in production.",
        ],
      },
      {
        title: "Best Practices for Building Secure APIs",
        subtitle: "",
        details: [
          "Use HTTPS: Encrypt data in transit.",
          "Validate and Sanitize Input: Prevent injection attacks.",
          "Use RBAC: Restrict access based on user roles.",
          "Handle Errors Gracefully: Provide meaningful error messages.",
          "Use Environment Variables: Store sensitive information securely.",
          "Disable Debugging in Production: Avoid exposing sensitive information.",
          "Monitor Logs: Keep an eye on requests and errors.",
        ],
      },
    ],
  },
  {
    taskId: "day25",
    content: [
      {
        title:
          "From Tokens to Cookies: A Secure Transition for Modern Web Applications",
        subtitle: "",
        details: [
          "In modern web development, authentication is a critical component that ensures users can securely access their accounts and data. Traditionally, many applications have relied on token-based authentication, where a JSON Web Token (JWT) is stored in the browser's localStorage or sessionStorage and sent with each request via the Authorization header. However, as security standards evolve, cookie-based authentication has emerged as a more secure and user-friendly alternative.",
          "In this cheatsheet, we'll explore the key differences between token-based and cookie-based authentication, the steps to transition from one to the other, and why this change is essential for building secure and scalable web applications.",
        ],
      },
      {
        title: "Token-Based Authentication: The Old Way",
        subtitle: "Token Generation",
        details: [
          "When a user logs in, the backend generates a JWT and sends it to the frontend.",
          "The token typically contains the user's ID, role, and an expiration time.",
        ],
      },
      {
        title: "",
        subtitle: "Token Storage",
        details: [
          "The frontend stores the token in 'localStorage' or 'sessionStorage'.",
        ],
      },
      {
        title: "",
        subtitle: "Token Usage",
        details: [
          "For every authenticated request, the frontend includes the token in the Authorization header (e.g., Authorization: Bearer <token>).",
        ],
      },
      {
        title: "",
        subtitle: "Token Verification",
        details: [
          "The backend verifies the token's validity and extracts the user's information.",
        ],
      },
      {
        title: "",
        subtitle: "Pros:",
        details: ["Simple to implement.", "Works well with stateless APIs."],
      },
      {
        title: "",
        subtitle: "Cons:",
        details: [
          "Security Risks: Tokens stored in localStorage are vulnerable to XSS (Cross-Site Scripting) attacks.",
          "Manual Management: The frontend must manually include the token in every request.",
          "Scalability Issues: Managing token expiration and renewal can become complex.",
        ],
      },
      {
        title: "Cookie-Based Authentication: The New Way",
        subtitle: "Token Generation",
        details: [
          "When a user logs in, the backend generates a JWT and sets it in an HTTP-only cookie.",
        ],
      },
      {
        title: "",
        subtitle: "Cookie Storage",
        details: [
          "The cookie is automatically stored in the browser and sent with every request to the backend.",
        ],
      },
      {
        title: "",
        subtitle: "Cookie Usage",
        details: [
          "The frontend includes credentials: 'include' in fetch requests to ensure cookies are sent.",
        ],
      },
      {
        title: "",
        subtitle: "Cookie Verification",
        details: [
          "The backend verifies the token from the cookie and extracts the user's information.",
        ],
      },
      {
        title: "",
        subtitle: "Pros:",
        details: [
          "Enhanced Security: HTTP-only cookies are inaccessible to JavaScript, reducing the risk of XSS attacks.",
          "Automatic Handling: Cookies are automatically sent with every request, simplifying frontend logic.",
          "Built-In Expiry: Cookies can be configured with expiration times, simplifying token management.",
        ],
      },
      {
        title: "",
        subtitle: "Cons:",
        details: [
          "Slightly more complex to implement (e.g., configuring CORS and cookie settings).",
          "Requires careful handling of sameSite and secure flags for cross-site and HTTPS compatibility.",
        ],
      },
      {
        title: "Why Transition to Cookie-Based Authentication?",
        subtitle: "Improved Security",
        details: [
          "HTTP-only cookies are immune to XSS attacks, as they cannot be accessed via JavaScript.",
          "The secure flag ensures cookies are only sent over HTTPS, protecting against man-in-the-middle attacks.",
          "The sameSite flag prevents cookies from being sent in cross-site requests, mitigating CSRF (Cross-Site Request Forgery) attacks.",
        ],
      },
      {
        title: "",
        subtitle: "Simplified Frontend Logic",
        details: [
          "The frontend no longer needs to manually manage tokens or include them in request headers.",
          "Cookies are automatically sent with every request, reducing boilerplate code.",
        ],
      },
      {
        title: "",
        subtitle: "Better User Experience",
        details: [
          "Cookies can be configured to persist across sessions, allowing users to stay logged in longer.",
          "Token expiration and renewal are handled seamlessly by the backend.",
        ],
      },
      {
        title: "Steps to Transition from Tokens to Cookies",
        subtitle: "Backend Changes:",
      },
      {
        title: "",
        subtitle: "Set the Token in a Cookie",
        details: [
          "Use res.cookie() to set the token in an HTTP-only cookie with secure settings (httpOnly, secure, sameSite).",
        ],
      },
      {
        title: "",
        subtitle: "Update Middleware",
        details: [
          "Modify your authentication middleware to check for the token in cookies instead of the Authorization header.",
        ],
      },
      {
        title: "",
        subtitle: "Handle Logout",
        details: ["Implement a /logout endpoint that clears the token cookie."],
      },
      {
        title: "",
        subtitle: "Configure CORS",
        details: [
          "Ensure your backend allows credentials (cookies) from the frontend by setting credentials: true in your CORS configuration.",
        ],
      },
      {
        title: "",
        subtitle: "Frontend Changes",
      },
      {
        title: "",
        subtitle: "Remove Token Storage",
        details: ["Stop storing tokens in localStorage or sessionStorage."],
      },
      {
        title: "",
        subtitle: "Include Credentials in Requests",
        details: [
          "Add credentials: 'include' to all fetch requests that require authentication.",
        ],
      },
      {
        title: "",
        subtitle: "Update Authentication Logic",
        details: [
          "Modify your login and registration flows to rely on cookies instead of tokens.",
        ],
      },
      {
        title: "",
        subtitle: "Test Thoroughly",
        details: [
          "Verify that cookies are being set, sent, and cleared correctly.",
          "Test edge cases (e.g., expired tokens, invalid cookies) to ensure proper error handling.",
        ],
      },
      {
        title: "Best Practices for Cookie-Based Authentication",
        subtitle: "Use HTTP-Only Cookies",
        details: ["Prevent client-side JavaScript from accessing the cookie."],
      },
      {
        title: "",
        subtitle: "Enable Secure Cookies in Production",
        details: [
          "Ensure cookies are only sent over HTTPS by setting the secure flag.",
        ],
      },
      {
        title: "",
        subtitle: "Set SameSite Attribute",
        details: [
          "Use sameSite: 'strict' or sameSite: 'lax' to prevent CSRF attacks.",
        ],
      },
      {
        title: "",
        subtitle: "Monitor Cookie Expiry",
        details: [
          "Set reasonable expiration times for cookies to balance security and user convenience.",
        ],
      },
      {
        title: "",
        subtitle: "Test Across Browsers",
        details: [
          "Ensure your implementation works consistently across different browsers and devices.",
        ],
      },
      {
        title: "Conclusion",
        subtitle: "",
        details: [
          "Transitioning from token-based authentication to cookie-based authentication is a significant step toward building more secure and user-friendly web applications. By leveraging HTTP-only cookies, you can protect your users' data from common vulnerabilities like XSS and CSRF while simplifying frontend logic and improving the overall user experience.",
          "Whether you're building a new application or updating an existing one, following the steps and best practices outlined in this post will help you implement cookie-based authentication with confidence.",
        ],
      },
    ],
  },
  {
    taskId: "day26",
    content: [
      {
        title: "Building an Admin Dashboard with React: A Theoretical Guide",
        subtitle: "",
        details: [
          "In modern web development, Admin Dashboards are essential tools for managing and controlling the backend of applications. They provide a centralized interface for administrators to perform tasks such as managing users, content, and settings. In this guide, we'll explore the theoretical foundations of building an Admin Dashboard using React, focusing on state management, conditional rendering, and component composition. By the end, you'll have a clear understanding of the principles and best practices involved in creating a scalable and maintainable dashboard.",
        ],
      },
      {
        title: "The Role of an Admin Dashboard",
        subtitle: "",
        details: [
          "An Admin Dashboard serves as the control panel for an application, allowing administrators to:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Manage Content: Create, update, and delete blog posts, products, or other content.",
          "Monitor Activity: View analytics, user activity, and system performance.",
          "Control Access: Restrict certain features to authorized users (e.g., admins).",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "In this guide, we'll focus on building a Blog Management System within an Admin Dashboard, where admins can manage blog posts efficiently.",
        ],
      },
      {
        title: "Organizing Your Project: Folder Structure",
        subtitle: "",
        details: [
          "Before writing any code, it's crucial to organize your project in a way that promotes scalability and maintainability. Here's why folder structure matters:",
        ],
      },
      {
        title: "",
        subtitle: "Why Use a Dedicated admin Folder?",
        details: [
          "Separation of Concerns: By placing admin-related components in a separate folder (e.g., pages/admin), you keep your codebase organized and modular.",
          "Scalability: As your application grows, you can easily add more admin-related features (e.g., user management, analytics) without cluttering the main codebase.",
        ],
      },
      {
        title: "",
        subtitle: "Best Practices for Folder Structure",
        details: [
          "Place the AdminDashboard component inside the admin folder.",
          "Create subfolders for related components (e.g., BlogManagement, UserManagement).",
          "Use an index.js file in each folder to simplify imports.",
        ],
      },
      {
        title: "State Management with useState",
        subtitle: "",
        details: [
          "State management is at the core of any dynamic React application. In the context of an Admin Dashboard, state is used to track the active tab, user authentication, and other dynamic data.",
        ],
      },
      {
        title: "",
        subtitle: "Why Use useState?",
        details: [
          "Simplicity: The useState hook is the simplest way to manage state in functional components.",
          "Reactivity: When the state changes, React automatically re-renders the component to reflect the new state.",
        ],
      },
      {
        title: "",
        subtitle: "Example: Tracking the Active Tab",
        details: [
          "In the AdminDashboard component, we use useState to track the currently active tab (e.g., 'blogs'). This allows us to conditionally render the appropriate component based on the user's selection.",
        ],
      },
      {
        title: "Conditional Rendering",
        subtitle: "",
        details: [
          "Conditional rendering is a powerful feature in React that allows you to display different components based on certain conditions. In an Admin Dashboard, this is particularly useful for:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Displaying the appropriate section (e.g., blog management, user management) based on the active tab.",
          "Restricting access to certain features based on the user's role.",
        ],
      },
      {
        title: "",
        subtitle: "How It Works",
        details: [
          "Use a conditional statement (e.g., if or ternary operator) to check the value of a state variable (e.g., activeTab).",
          "Render the corresponding component if the condition is met.",
        ],
      },
      {
        title: "",
        subtitle: "Example: Rendering the BlogManagement Component",
        details: [
          "If the activeTab state is 'blogs', the BlogManagement component is rendered. This ensures that only the relevant content is displayed, improving the user experience.",
        ],
      },
      {
        title: "Component Composition",
        subtitle: "",
        details: [
          "Component composition is the practice of breaking down a complex UI into smaller, reusable components. In the context of an Admin Dashboard, this means:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Creating separate components for each section (e.g., BlogManagement, UserManagement).",
          "Combining these components in the AdminDashboard component to build the complete interface.",
        ],
      },
      {
        title: "",
        subtitle: "Benefits of Component Composition",
        details: [
          "Reusability: Components like BlogManagement can be reused in other parts of the application.",
          "Maintainability: Smaller components are easier to test, debug, and update.",
          "Scalability: Adding new features (e.g., analytics) is as simple as creating a new component and adding it to the dashboard.",
        ],
      },
      {
        title: "Tab Navigation",
        subtitle: "",
        details: [
          "Tab navigation is a common UI pattern in dashboards, allowing users to switch between different sections. Here's how it works in the AdminDashboard component:",
        ],
      },
      {
        title: "",
        subtitle: "Implementing Tab Navigation",
        details: [
          "Use buttons to represent each tab (e.g., 'Blogs').",
          "Update the activeTab state when a button is clicked.",
          "Use inline styles to highlight the active tab (e.g., bold font weight).",
        ],
      },
      {
        title: "",
        subtitle: "Why Use Inline Styles?",
        details: [
          "Dynamic Styling: Inline styles allow you to apply styles conditionally based on the state.",
          "Simplicity: For small, state-dependent styles, inline styles are often more convenient than CSS classes.",
        ],
      },
      {
        title: "Role-Based Access Control",
        subtitle: "",
        details: [
          "In a real-world application, it's important to restrict access to the Admin Dashboard to authorized users (e.g., admins). This can be achieved using role-based access control (RBAC).",
        ],
      },
      {
        title: "",
        subtitle: "How It Works",
        details: [
          "Store the user's role (e.g., 'Admin', 'User') in the state or context.",
          "Use a ProtectedRoute component to check the user's role before rendering admin-specific routes.",
          "Redirect unauthorized users to a login page or home page.",
        ],
      },
      {
        title: "Best Practices for Building Admin Dashboards",
        subtitle: "",
        details: [
          "Here are some best practices to keep in mind when building an Admin Dashboard:",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Modular Design: Break down the UI into smaller, reusable components.",
          "State Management: Use state effectively to manage dynamic data and user interactions.",
          "Conditional Rendering: Display content based on conditions (e.g., active tab, user role).",
          "Security: Implement role-based access control to protect sensitive features.",
          "Scalability: Design the dashboard with future features in mind.",
        ],
      },
      {
        title: "Conclusion",
        subtitle: "",
        details: [
          "Building an Admin Dashboard with React involves a combination of state management, conditional rendering, and component composition. By organizing your project effectively and following best practices, you can create a scalable and maintainable dashboard that meets the needs of your application. Whether you're managing blog posts, users, or analytics, these principles will help you build a powerful and user-friendly interface.",
          "In the next part of this guide, we'll dive deeper into implementing role-based access control and connecting the dashboard to a backend API. Stay tuned!",
        ],
      },
    ],
  },
  {
    taskId: "day27",
    content: [
      {
        title: "Side Effects with useEffect",
        subtitle: "What are Side Effects?",
        details: [
          "Side effects are operations that interact with the outside world, such as fetching data from an API, updating the DOM, or setting up subscriptions.",
          "In React, side effects are handled using the useEffect hook.",
        ],
      },
      {
        title: "",
        subtitle: "How Does useEffect Work?",
        details: [
          "The useEffect hook takes two arguments:",
          "A function that contains the side effect logic.",
          "A dependency array that specifies when the effect should run.",
          "In the example below, fetchBlogs runs whenever the refreshBlogs value changes.",
        ],
        image: "/images/cheatsheetImages/task27music/1.webp",
      },
      {
        title: "",
        subtitle: "Common Use Cases",
        details: [
          "Fetching data from an API when the component mounts.",
          "Updating the DOM in response to state or prop changes.",
          "Cleaning up resources (e.g., unsubscribing from events) when the component unmounts.",
        ],
      },
      {
        title: "",
        subtitle: "Key Notes",
        details: [
          "If the dependency array is empty ([]), the effect runs only once (on mount).",
          "If the dependency array includes variables, the effect runs whenever those variables change.",
          "Always clean up side effects (e.g., cancel API requests) to avoid memory leaks.",
        ],
      },
      {
        title: "Fetching Data from an API",
        subtitle: "What is an API?",
        details: [
          "An API (Application Programming Interface) is a set of rules that allows your application to communicate with a server.",
          "APIs are used to fetch data (e.g., blog posts) or send data (e.g., creating a new blog).",
        ],
      },
      {
        title: "",
        subtitle: "How to Fetch Data in React?",
        details: [
          "Use the fetch function or libraries like axios to make HTTP requests.",
          "Example:",
        ],
        image: "/images/cheatsheetImages/task27music/2.webp",
      },
      {
        title: "",
        subtitle: "Key Points",
        details: [
          "Always handle errors using try-catch blocks.",
          "Use async/await for cleaner and more readable code.",
          "Include credentials (e.g., cookies) if the API requires authentication.",
        ],
      },
      {
        title: "Handling Forms in React",
        subtitle: "What are Controlled Components?",
        details: [
          "Controlled components are form elements (e.g., inputs, textareas) whose values are controlled by React state.",
          "Example:",
        ],
        image: "/images/cheatsheetImages/task27music/3.webp",
      },
      {
        title: "",
        subtitle: "How to Handle Form Submission?",
        details: [
          "Use the onSubmit event to handle form submission.",
          "Example:",
        ],
        image: "/images/cheatsheetImages/task27music/4.webp",
      },
      {
        title: "",
        subtitle: "Key Points",
        details: [
          "Use FormData for handling file uploads and other form data.",
          "Always reset the form after successful submission.",
          "Validate inputs before submitting the form.",
        ],
      },
      {
        title: "Props and Prop Drilling",
        subtitle: "What are Props?",
        details: [
          "Props (short for properties) are used to pass data from a parent component to a child component.",
          "Example:",
        ],
        image: "/images/cheatsheetImages/task27music/5.webp",
      },
      {
        title: "",
        subtitle: "What is Prop Drilling?",
        details: [
          "Prop drilling occurs when props are passed through multiple levels of components.",
          "Example: BlogManagement passes refreshBlogs to BlogListTable.",
          "Example: If BlogListTable had a child component, it would pass refreshBlogs further down.",
        ],
      },
      {
        title: "",
        subtitle: "Key Points",
        details: [
          "Props are read-only and cannot be modified by the child component.",
          "Prop drilling can make code harder to maintain. In larger applications, consider using state management libraries like Redux or Context API.",
        ],
      },
      {
        title: "Event Handling",
        subtitle: "What are Events?",
        details: [
          "Events are actions triggered by the user, such as clicking a button, typing in an input, or submitting a form.",
          "In React, events are handled using event handlers.",
        ],
      },
      {
        title: "",
        subtitle: "How to Handle Events?",
        details: [
          "Define event handler functions and attach them to event listeners.",
          "Example:",
        ],
        image: "/images/cheatsheetImages/task27music/6.webp",
      },
      {
        title: "",
        subtitle: "Key Points",
        details: [
          "Use arrow functions to pass arguments to event handlers (e.g., onClick={() => handleDelete(blog._id)}).",
          "Always handle errors gracefully and provide feedback to the user (e.g., alerts).",
        ],
      },
      {
        title: "Why These Concepts Matter",
        subtitle: "",
        details: [
          "useEffect: Essential for managing side effects like data fetching and DOM updates.",
          "API Calls: Critical for interacting with backend services and retrieving dynamic data.",
          "Forms: A common feature in web applications for user input and data submission.",
          "Props: The primary way to share data between components in React.",
          "Events: Enable interactivity and user-driven actions in your application.",
        ],
      },
    ],
  },
  {
    taskId: "day28",
    content: [
      {
        title: "Serving Static Files in Express",
        subtitle: "What It Is:",
        details: [
          "Static files are assets like images, CSS files, JavaScript files, or documents that don't change dynamically. Serving these files efficiently is a fundamental part of building web applications.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters:",
        details: [
          "Performance: Serving static files separately from dynamic content improves load times.",
          "Scalability: Reduces the load on your server by offloading static file handling to optimized middleware.",
          "Organization: Keeps your project clean and maintainable by separating static assets from application logic.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts:",
        details: [
          "express.static: A built-in Express middleware that serves static files from a specified directory. For example, app.use('/uploads', express.static('uploads')) serves files from the 'uploads' folder.",
          "File Paths: Use the 'path' module to handle file paths consistently across different operating systems. For example, path.join(__dirname, 'uploads') ensures the correct path is used regardless of the OS.",
          "Security: Always sanitize file names and restrict access to sensitive files (e.g., configuration files).",
        ],
      },
      {
        title: "",
        subtitle: "Example:",
        details: [],
        image: "/images/cheatsheetImages/task28music/1.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "This serves files from the 'uploads' folder when accessed via /uploads/filename.",
          "Pro Tip: Use a CDN (Content Delivery Network) for serving static files in production to further improve performance.",
        ],
      },
      {
        title: "Schema Design in MongoDB",
        subtitle: "What It Is:",
        details: [
          "A schema defines the structure of your data in a MongoDB collection. It acts as a blueprint, specifying what fields each document should have and their data types.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters:",
        details: [
          "Data Consistency: Ensures all documents in a collection follow the same structure.",
          "Validation: Prevents invalid data from being saved to the database.",
          "Readability: Makes it easier to understand and work with your data.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts:",
        details: [
          "Fields: Define the properties of your data (e.g., title, content, thumbnail).",
          "Data Types: Specify the type of each field (e.g., String, Boolean, Date).",
          "Optional vs. Required Fields: Use required: true for mandatory fields (e.g., title) and leave others optional (e.g., thumbnail).",
          "Timestamps: Use { timestamps: true } to automatically add 'createdAt' and 'updatedAt' fields to your documents.",
        ],
      },
      {
        title: "",
        subtitle: "Example:",
        details: [],
        image: "/images/cheatsheetImages/task28music/2.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Pro Tip: Use Mongoose's built-in validation (e.g., minlength, maxlength) to enforce additional rules on your data.",
        ],
      },
      {
        title: "Authentication and Cookies",
        subtitle: "What It Is:",
        details: [
          "Authentication verifies a user's identity, while cookies are used to store session information securely in the user's browser.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters:",
        details: [
          "Security: Protects sensitive user data and prevents unauthorized access.",
          "User Experience: Maintains user sessions, so users don't have to log in repeatedly.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts:",
        details: [
          "Cookies: Small pieces of data stored in the user's browser. They are sent back to the server with every request.",
          "secure Flag: Ensures cookies are only sent over HTTPS. Use false in development and true in production.",
          "sameSite Policy: Controls how cookies are sent with cross-site requests. Use 'lax' for development and 'none' for production.",
          "Token-Based Authentication: Use JSON Web Tokens (JWT) to securely store user information.",
        ],
      },
      {
        title: "",
        subtitle: "Example:",
        details: [],
        image: "/images/cheatsheetImages/task28music/3.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Pro Tip: Always hash passwords using libraries like bcrypt before storing them in the database.",
        ],
      },
      {
        title: "File Uploads with Multer",
        subtitle: "What It Is:",
        details: [
          "Multer is a middleware for handling file uploads in Express. It simplifies the process of receiving and storing files on the server.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters:",
        details: [
          "User Engagement: Allows users to upload files like profile pictures or blog thumbnails.",
          "Security: Ensures files are validated and stored securely.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts:",
        details: [
          "Storage: Configure where files are saved (e.g., uploads/ folder).",
          "File Filtering: Restrict file types (e.g., only images).",
          "File Size Limits: Prevent large uploads that could overwhelm the server.",
        ],
      },
      {
        title: "",
        subtitle: "Example:",
        details: [],
        image: "/images/cheatsheetImages/task28music/4.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Pro Tip: Always sanitize file names to avoid security issues (e.g., using timestamps or UUIDs).",
        ],
      },
      {
        title: "Dynamic Data Fetching in React",
        subtitle: "What It Is:",
        details: [
          "Fetching data dynamically from a backend API instead of using hardcoded data.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters:",
        details: [
          "Real-Time Updates: Makes your application more interactive and up-to-date.",
          "Scalability: Reduces the need to redeploy the frontend when data changes.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts:",
        details: [
          "useState: Manages state in functional components (e.g., storing fetched data).",
          "useEffect: Handles side effects like fetching data when the component loads.",
          "API Calls: Use 'fetch' or 'axios' to request data from the backend.",
        ],
      },
      {
        title: "",
        subtitle: "Example:",
        details: [],
        image: "/images/cheatsheetImages/task28music/5.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Pro Tip: Always handle loading and error states to improve the user experience.",
        ],
      },
      {
        title: "Rendering Dynamic Content",
        subtitle: "What It Is:",
        details: [
          "Displaying data fetched from an API in your React components.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters:",
        details: [
          "Dynamic UI: Makes your application responsive to changes in data.",
          "User Experience: Provides real-time updates without requiring page reloads.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts:",
        details: [
          "Mapping Data: Use .map() to loop through an array and render components for each item.",
          "Conditional Rendering: Show placeholders or error messages if data is loading or unavailable.",
          "Formatting Data: Use JavaScript methods like toLocaleDateString() to format dates or substring() to truncate text.",
        ],
      },
      {
        title: "",
        subtitle: "Example:",
        details: [],
        image: "/images/cheatsheetImages/task28music/6.webp",
      },
      {
        title: "",
        subtitle: "",
        details: [
          "Pro Tip: Use keys (e.g., blog._id) when rendering lists to help React identify which items have changed.",
        ],
      },
      {
        title: "Final Thought",
        subtitle: "",
        details: [
          "By mastering these concepts, you're not just building a web application—you're developing a deep understanding of how modern web development works. From handling file uploads to designing schemas and fetching data dynamically, these skills will empower you to tackle more complex projects with confidence.",
        ],
      },
    ],
  },
  {
    taskId: "day32",
    content: [
      {
        title:
          "Understanding Core React Concepts Through a Testimonial Management System: A Theoretical Guide",
        subtitle: "",
        details: [
          "React has become one of the most popular libraries for building dynamic and interactive user interfaces. Its component-based architecture, paired with powerful features like hooks, makes it an excellent choice for developing modern web applications. In this theoretical blog post, we'll explore the key concepts of React by breaking down a testimonial management system—a practical example that involves creating, editing, viewing, and deleting testimonials. This system touches on several fundamental React topics, providing a perfect opportunity to learn and apply core skills.",
          "We'll focus on five key learning outcomes: state management with hooks, fetching and manipulating data from a backend API, component composition through props and events, form handling, and error handling with user feedback. By the end of this post, you'll have a solid understanding of these concepts and how they come together to create a functional React application.",
        ],
      },
      {
        title: "1. Managing State in React Using Hooks",
        subtitle: "What is State in React?",
        details: [
          "State refers to data that a component can hold and manage over time. Unlike props, which are passed to a component and are immutable within that component, state is internal and can be updated by the component itself. Changes to state typically trigger a re-render, allowing the UI to reflect the updated data.",
        ],
      },
      {
        title: "",
        subtitle: "Why Use Hooks for State Management?",
        details: [
          "Before hooks were introduced in React 16.8, state management was primarily handled using class components and this.setState. Hooks, such as useState and useEffect, allow functional components to manage state and side effects, leading to cleaner and more reusable code.",
        ],
      },
      {
        title: "",
        subtitle: "Applying State Management in a Testimonial System",
        details: [
          "Form Inputs: A form for creating or editing testimonials needs to store user input (e.g., the testimonial content, rating, and approval status) in state. As the user types or selects options, the state updates dynamically.",
          "List of Testimonials: The list of testimonials fetched from the backend is stored in state so it can be displayed in a table and updated when a testimonial is created, edited, or deleted.",
          "Refresh Trigger: A boolean state can be used to trigger a refetch of testimonials when changes occur, ensuring the UI stays in sync with the backend.",
        ],
      },
      {
        title: "",
        subtitle: "How Hooks Help",
        details: [
          "useState: Used to initialize and update state for form inputs, testimonial lists, and other dynamic data.",
          "useEffect: Used to perform side effects, such as fetching data from the backend when the component mounts or when a specific state changes (e.g., a refresh trigger).",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Understanding state management with hooks allows you to create dynamic and responsive applications. It's the foundation for handling user interactions and ensuring the UI reflects the current application state.",
        ],
      },
      {
        title: "2. Fetching and Manipulating Data from a Backend API",
        subtitle: "Why Integrate with a Backend API?",
        details: [
          "Most real-world applications rely on a backend to store and manage data persistently. In a testimonial system, the backend provides endpoints to fetch users (for assigning testimonials), fetch testimonials, and handle CRUD (Create, Read, Update, Delete) operations.",
        ],
      },
      {
        title: "",
        subtitle: "Fetching Data in React",
        details: [
          "React itself doesn't provide built-in tools for making HTTP requests, but you can use the native fetch API or libraries like axios to communicate with a backend. Typically, you'll fetch data when a component mounts or when certain conditions change (e.g., after creating a new testimonial).",
        ],
      },
      {
        title: "",
        subtitle: "Applying API Integration in a Testimonial System",
        details: [
          "In the testimonial management system, several API interactions are required:",
          "Fetch Users: When the form component loads, it needs to fetch a list of users to populate a dropdown menu for selecting the testimonial's author.",
          "Fetch Testimonials: The table component fetches all testimonials to display them in a list.",
          "Create/Update Testimonials: The form sends a POST request to create a new testimonial or a PUT request to update an existing one.",
          "Delete Testimonials: The table sends a DELETE request to remove a testimonial.",
        ],
      },
      {
        title: "",
        subtitle: "Using useEffect for API Calls",
        details: [
          "The useEffect hook is ideal for fetching data because it allows you to run side effects (like HTTP requests) when a component mounts or when specific dependencies change. For example:",
          "Fetch users when the form component mounts.",
          "Refetch testimonials when a “refresh” state changes (e.g., after creating or deleting a testimonial).",
        ],
      },
      {
        title: "",
        subtitle: "Manipulating Data",
        details: [
          "Once data is fetched, it's stored in state and can be manipulated as needed. For example, you might filter testimonials based on their approval status or truncate long content for display purposes.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Learning to fetch and manipulate data from a backend API is essential for building full-stack applications. It bridges the gap between the frontend and backend, enabling dynamic data-driven experiences.",
        ],
      },
      {
        title:
          "3. Component Composition: Passing Props and Handling Events Between Components",
        subtitle: "What is Component Composition?",
        details: [
          "React's component-based architecture allows you to break down your UI into reusable, independent pieces called components. Component composition refers to combining these components to build a larger application, often by passing data (via props) and handling interactions (via event handlers) between them.",
        ],
      },
      {
        title: "",
        subtitle: "Parent-Child Communication",
        details: [
          "In React, data typically flows from parent components to child components through props. Conversely, child components can communicate with parents by invoking callback functions passed as props.",
        ],
      },
      {
        title: "",
        subtitle: "Applying Component Composition in a Testimonial System",
        details: [
          "The testimonial management system consists of three main components:",
          "Parent Component: Orchestrates the overall flow, managing state for refreshing the testimonial list and tracking the testimonial being edited.",
          "Form Component: Handles creating and editing testimonials, receiving props like the testimonial to edit and a callback to notify the parent when a testimonial is created.",
          "Table Component: Displays the list of testimonials, receiving props like a refresh trigger and a callback to set the testimonial to edit.",
        ],
      },
      {
        title: "",
        subtitle: "Passing Props",
        details: [
          "The parent passes a refreshTestimonials boolean to the table component to trigger refetching.",
          "The parent passes a testimonialToEdit object to the form component to populate it for editing.",
          "The parent passes callback functions like onTestimonialCreated and onEditTestimonial to the form and table components, respectively.",
        ],
      },
      {
        title: "",
        subtitle: "Handling Events",
        details: [
          "When a testimonial is created or updated, the form component calls the onTestimonialCreated callback to notify the parent, which toggles the refresh state.",
          "When the “Edit” button is clicked in the table, the table component calls the onEditTestimonial callback to pass the selected testimonial to the parent, which updates the edit state.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Component composition allows you to create modular, reusable code. Understanding how to pass props and handle events between components ensures smooth communication and coordination within your application.",
        ],
      },
      {
        title:
          "4. Form Handling: Creating, Updating, and Validating User Input",
        subtitle: "Why is Form Handling Important?",
        details: [
          "Forms are a primary way users interact with web applications. In React, form handling involves managing user input, validating it, and submitting it to perform actions like saving data to a backend.",
        ],
      },
      {
        title: "",
        subtitle: "Controlled Components",
        details: [
          "In React, forms are typically managed using controlled components, where form inputs are tied to state. The value of each input is stored in state, and an onChange handler updates the state as the user types.",
        ],
      },
      {
        title: "",
        subtitle: "Applying Form Handling in a Testimonial System",
        details: [
          "The form component in the testimonial system handles creating and editing testimonials. Here's how it works:",
          "Initialize Form State: Use useState to store the form data (e.g., user, title, content, rating, approved status).",
          "Update State on Change: Write a change handler to update the state whenever the user interacts with an input, select, or checkbox.",
          "Populate Form for Editing: When editing a testimonial, use useEffect to set the form state based on the testimonial being edited.",
          "Submit the Form: Write a submit handler to send the form data to the backend via a POST or PUT request, depending on whether the user is creating or updating a testimonial.",
        ],
      },
      {
        title: "",
        subtitle: "Validating Input",
        details: [
          "Validation ensures that user input meets certain criteria before submission:",
          "Required fields (e.g., content) should not be empty.",
          "The rating should be within a valid range (e.g., 1 to 5).",
          "Validation can be performed before submitting the form, displaying error messages if necessary.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Mastering form handling in React allows you to create interactive and user-friendly applications. It teaches you how to manage user input effectively and ensure data integrity before sending it to the backend.",
        ],
      },
      {
        title: "5. Error Handling and Providing User Feedback",
        subtitle: "Why Handle Errors?",
        details: [
          "Errors are inevitable in web applications—network failures, invalid user input, or backend issues can all cause problems. Proper error handling ensures that your application doesn't crash and provides meaningful feedback to users.",
        ],
      },
      {
        title: "",
        subtitle: "Applying Error Handling in a Testimonial System",
        details: [
          "In the testimonial system, errors can occur during API requests (e.g., fetching users, creating testimonials) or form submission. Here's how to handle them:",
          "Wrap API Calls in Try-Catch: Use try-catch blocks to catch errors during fetch requests. Log errors to the console for debugging and display user-friendly messages (e.g., via alerts).",
          "Provide Feedback on Form Submission: If creating or updating a testimonial fails, show an alert with the error message. If successful, show a success message and reset the form.",
          "Handle Edge Cases: If the backend returns an empty list of testimonials, display a message like “No testimonials found.” If a user cannot be fetched, disable the form or show an error.",
        ],
      },
      {
        title: "",
        subtitle: "Enhancing User Feedback",
        details: [
          "Beyond error messages, you can improve the user experience with:",
          "Loading States: Show a spinner or loading message while fetching data.",
          "Success Messages: Notify the user when a testimonial is created, updated, or deleted successfully.",
          "Validation Feedback: Highlight invalid fields and provide instructions for correction.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Effective error handling and user feedback make your application more robust and user-friendly. They help users understand what went wrong and how to proceed, improving the overall experience.",
        ],
      },
      {
        title: "Bringing It All Together: Why These Concepts Matter",
        subtitle: "",
        details: [
          "The testimonial management system demonstrates how these core React concepts—state management, API integration, component composition, form handling, and error handling—work together to create a functional application. Each concept builds on the others:",
          "State management enables dynamic updates to the UI.",
          "API integration brings real-world data into the application.",
          "Component composition ensures modularity and reusability.",
          "Form handling facilitates user interaction.",
          "Error handling keeps the application stable and informative.",
        ],
      },
      {
        title: "",
        subtitle: "",
        details: [
          "By mastering these concepts, you'll be well-equipped to tackle more complex React projects. Whether you're building a simple CRUD app or a large-scale enterprise application, these foundational skills will serve as the building blocks for success.",
        ],
      },
    ],
  },
  {
    taskId: "day34",
    content: [
      {
        title: "Theory Guide to Implementing Socket.IO for Real-Time Messaging",
        subtitle: "",
        details: [
          "Socket.IO is a powerful library that enables real-time, bidirectional communication between a backend server and frontend clients. It's commonly used for features like chat applications, live notifications, or collaborative tools. In this guide, we'll break down the process of setting up Socket.IO in a full-stack application (Node.js backend with Express and a React frontend) by explaining the concepts behind each step. Our goal is to help beginners understand why these steps are necessary and how they fit into the bigger picture of building a real-time messaging system.",
        ],
      },
      {
        title:
          "Understanding the Backend: Building the Foundation for Real-Time Communication",
        subtitle: "",
        details: [
          "The backend is responsible for managing connections, handling messages, and broadcasting them to the right users in real time. Let's dive into the concepts behind the backend steps.",
        ],
      },
      {
        title: "Setting Up the Backend Environment",
        subtitle: "",
        details: [
          "Before you can use Socket.IO, you need to prepare your backend environment. This involves installing the necessary tools (dependencies) to enable real-time communication. In Node.js, dependencies are managed using npm (Node Package Manager), which downloads libraries like Socket.IO for you.",
        ],
      },
      {
        title: "",
        subtitle: "Why Dependencies Matter",
        details: [
          "Socket.IO isn't built into Node.js, so you need to install it as an external library. It provides the functionality to create WebSocket connections, which allow for continuous, two-way communication between the server and clients (unlike traditional HTTP requests, which are one-off).",
        ],
      },
      {
        title: "",
        subtitle: "What's http?",
        details: [
          "Node.js includes a built-in module called http, which you'll use to create an HTTP server. Socket.IO needs this HTTP server as a foundation to establish WebSocket connections.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Dependencies: Libraries like Socket.IO extend Node.js functionality.",
          "WebSockets: A protocol for real-time communication, unlike HTTP, which is request-response based.",
          "Node.js Modules: Built-in modules like http don't need installation, but external ones like Socket.IO do.",
        ],
      },
      {
        title: "Creating an HTTP Server",
        subtitle: "",
        details: [
          "Socket.IO relies on an HTTP server to establish WebSocket connections. If you're using Express (a popular Node.js framework for handling HTTP requests), you can integrate it with the HTTP server to handle both traditional HTTP routes and WebSocket communication.",
        ],
      },
      {
        title: "",
        subtitle: "Why an HTTP Server?",
        details: [
          "WebSockets start with an HTTP handshake (a special request to 'upgrade' the connection). The http module in Node.js lets you create this server, and Socket.IO builds on top of it.",
        ],
      },
      {
        title: "",
        subtitle: "Why Integrate with Express?",
        details: [
          "Express makes it easier to handle HTTP routes (like /api/users) and middleware (like parsing JSON). By combining Express with the HTTP server, you can use both for different purposes in the same app.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "HTTP Server: A foundation for handling HTTP requests and WebSocket upgrades.",
          "Express App: A framework that simplifies routing and middleware in Node.js.",
          "Integration: Combining Express with an HTTP server lets you handle both HTTP and WebSocket communication.",
        ],
      },
      {
        title: "Initializing Socket.IO",
        subtitle: "",
        details: [
          "Once you have an HTTP server, you can initialize Socket.IO to enable real-time communication. This involves creating a Socket.IO instance and configuring settings like CORS (Cross-Origin Resource Sharing) to allow your frontend to connect.",
        ],
      },
      {
        title: "",
        subtitle: "What's Socket.IO Doing?",
        details: [
          "It wraps the HTTP server with additional functionality, like WebSocket support and fallback mechanisms (e.g., polling if WebSockets aren't available). This lets clients connect and exchange messages in real time.",
        ],
      },
      {
        title: "",
        subtitle: "Why CORS?",
        details: [
          "Browsers enforce security rules that block requests between different origins (e.g., localhost:3000 frontend to localhost:5000 backend). CORS settings tell the server which origins (like your frontend URL) are allowed to connect, what HTTP methods (like GET or POST) are permitted, and whether credentials (like cookies) can be sent.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Socket.IO Instance: A server-side object that manages all WebSocket connections and events.",
          "CORS: A security mechanism to control cross-origin requests.",
          "Origins and Methods: Specifying allowed URLs and HTTP methods ensures secure communication.",
        ],
      },
      {
        title: "Handling Client Connections",
        subtitle: "",
        details: [
          "When a client (like a browser) connects to your backend via Socket.IO, the server needs to handle the connection and prepare for events like joining rooms or sending messages. Socket.IO uses 'event listeners' to respond to actions from clients.",
        ],
      },
      {
        title: "",
        subtitle: "What's a Connection?",
        details: [
          "When a client connects, Socket.IO creates a unique socket object representing that connection. You can listen for a 'connection' event to know when this happens.",
        ],
      },
      {
        title: "",
        subtitle: "What Are Rooms?",
        details: [
          "Rooms are a Socket.IO feature that lets you group sockets (clients) together. For example, you might create a room for each user (named after their ID) so you can send messages to specific users later.",
        ],
      },
      {
        title: "",
        subtitle: "Why Listen for Events?",
        details: [
          "Clients can send custom events (like 'join') to the server. By listening for these events, you can execute code—like joining a room—when the event occurs.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Socket Object: Represents a single client connection.",
          "Rooms: A way to group clients for targeted messaging.",
          "Event Listeners: Functions that run when specific events (like 'connection' or 'join') occur.",
        ],
      },
      {
        title: "Handling Messages",
        subtitle: "",
        details: [
          "Real-time messaging involves receiving messages from one client, saving them (e.g., to a database), and broadcasting them to other clients. This step focuses on handling a 'sendMessage' event, processing the message, and emitting it to the right users.",
        ],
      },
      {
        title: "",
        subtitle: "Why Save Messages?",
        details: [
          "Storing messages in a database (like MongoDB) ensures they're persistent, so users can see their chat history even after disconnecting.",
        ],
      },
      {
        title: "",
        subtitle: "What's Broadcasting?",
        details: [
          "After saving a message, you can use Socket.IO to send it to specific clients (e.g., the sender and receiver) by targeting their rooms. This is done with an 'emit' action.",
        ],
      },
      {
        title: "",
        subtitle: "Why Use Try-Catch?",
        details: [
          "Saving to a database or broadcasting can fail (e.g., due to network issues). A try-catch block lets you handle errors gracefully and notify the client if something goes wrong.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Event Handling: Listening for custom events (like 'sendMessage') to process messages.",
          "Database Operations: Saving and retrieving data (e.g., messages) for persistence.",
          "Broadcasting: Sending messages to specific clients using rooms.",
          "Error Handling: Using try-catch to manage failures and inform the client.",
        ],
      },
      {
        title: "Handling Disconnections",
        subtitle: "",
        details: [
          "When a client disconnects (e.g., closes their browser), Socket.IO triggers a 'disconnect' event. Handling this event ensures the server cleans up resources or logs the disconnection.",
        ],
      },
      {
        title: "",
        subtitle: "Why Handle Disconnections?",
        details: [
          "Knowing when a client leaves helps you manage server resources (like memory) and update other users if needed (e.g., showing a user as offline).",
        ],
      },
      {
        title: "",
        subtitle: "What Happens?",
        details: [
          "Socket.IO automatically closes the WebSocket connection, but you can add custom logic (like logging or updating a user's status) when this happens.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Resource Management: Cleaning up after a client to keep the server efficient.",
          "Disconnect Event: An event triggered when a client leaves.",
        ],
      },
      {
        title:
          "Understanding the Frontend: Connecting and Managing Real-Time Messages",
        subtitle: "",
        details: [
          "The frontend connects to the backend using the Socket.IO client library, sends messages, and updates the UI when new messages arrive. Let's explore the concepts behind the frontend steps.",
        ],
      },
      {
        title: "Preparing the Frontend Environment",
        subtitle: "",
        details: [
          "To connect your frontend to the backend, you need the Socket.IO client library. This library lets your React app establish a WebSocket connection and communicate with the backend.",
        ],
      },
      {
        title: "",
        subtitle: "Why a Client Library?",
        details: [
          "The Socket.IO client handles the WebSocket connection and simplifies sending/receiving events. It's the counterpart to the Socket.IO server library.",
        ],
      },
      {
        title: "",
        subtitle: "What's the Setup Like?",
        details: [
          "Installing the client library with npm adds it to your React project, so you can import and use it in your components.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Socket.IO Client: A library for connecting the frontend to the backend.",
          "Installation: Using npm to add external libraries to a project.",
        ],
      },
      {
        title: "Managing State and References",
        subtitle: "",
        details: [
          "To handle real-time messaging, your component needs to track data (like messages) and maintain a reference to the Socket.IO connection. React provides useState for state and useRef for references.",
        ],
      },
      {
        title: "",
        subtitle: "Why State?",
        details: [
          "State variables (like messages or newMessage) let you store and update data that affects the UI, like the list of messages or the text in an input field.",
        ],
      },
      {
        title: "",
        subtitle: "Why References?",
        details: [
          "A reference (useRef) is useful for storing the Socket.IO instance because it persists across renders without causing re-renders (unlike state).",
        ],
      },
      {
        title: "",
        subtitle: "What Data to Track?",
        details: [
          "You'll track messages, the current conversation, errors, and the Socket.IO connection.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "State (useState): For data that changes and affects the UI.",
          "References (useRef): For data that persists but doesn't trigger re-renders.",
          "Dynamic UI: Updating state causes React to re-render the component with new data.",
        ],
      },
      {
        title: "Synchronizing Data with Side Effects",
        subtitle: "",
        details: [
          "Sometimes, you need to update data (like a reference) when state changes. In React, useEffect lets you run side effects (like updating a reference) in response to changes.",
        ],
      },
      {
        title: "",
        subtitle: "Why a Side Effect?",
        details: [
          "When the selected conversation changes, you might need to update a reference to it so other parts of your code (like event handlers) can access the latest value.",
        ],
      },
      {
        title: "",
        subtitle: "How Does useEffect Work?",
        details: [
          "It runs a function whenever specific dependencies (like the selected conversation) change.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Side Effects (useEffect): Running code in response to state or prop changes.",
          "Dependencies: Values that useEffect watches to decide when to run.",
          "Synchronization: Keeping references or other data in sync with state.",
        ],
      },
      {
        title: "Establishing a Socket.IO Connection",
        subtitle: "",
        details: [
          "Your frontend needs to connect to the backend when the component mounts (i.e., when it's added to the UI). This involves initializing the Socket.IO client, handling connection events, and joining a room.",
        ],
      },
      {
        title: "",
        subtitle: "Why Connect on Mount?",
        details: [
          "Using useEffect with an empty dependency array ensures the connection happens once when the component loads.",
        ],
      },
      {
        title: "",
        subtitle: "What's Involved?",
        details: [
          "You'll initialize the Socket.IO client with the backend URL, set options (like credentials), and listen for events like 'connect' or 'connect_error'.",
        ],
      },
      {
        title: "",
        subtitle: "Why Join a Room?",
        details: [
          "Emitting a 'join' event with the user's ID tells the backend to add the client to a room, so it can receive messages targeted to that user.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Socket.IO Client Initialization: Creating a connection to the backend.",
          "Connection Events: Handling success ('connect') or failure ('connect_error').",
          "Rooms: Joining a user-specific room for targeted messaging.",
        ],
      },
      {
        title: "Receiving Messages",
        subtitle: "",
        details: [
          "When the backend sends a message (via a 'receiveMessage' event), your frontend needs to update the UI. This involves listening for the event and updating state with the new message.",
        ],
      },
      {
        title: "",
        subtitle: "Why Listen for Events?",
        details: [
          "Socket.IO lets the backend push messages to the frontend in real time, so you don't need to poll the server.",
        ],
      },
      {
        title: "",
        subtitle: "How to Update the UI?",
        details: [
          "Add the new message to the messages state, but only if it's not already there (to avoid duplicates). If the message belongs to the current conversation, update the conversation's message list too.",
        ],
      },
      {
        title: "",
        subtitle: "Why Check the Conversation?",
        details: [
          "You only want to update the UI for messages relevant to the currently selected chat.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Event Listeners: Listening for backend events (like 'receiveMessage') to process incoming data.",
          "State Updates: Adding new messages to state to update the UI.",
          "Conditional Logic: Checking if a message belongs to the current conversation before updating.",
        ],
      },
      {
        title: "Cleaning Up Connections",
        subtitle: "",
        details: [
          "When the component unmounts (i.e., is removed from the UI), you should disconnect the Socket.IO client to free up resources and avoid memory leaks.",
        ],
      },
      {
        title: "",
        subtitle: "Why Clean Up?",
        details: [
          "Leaving connections open can waste server resources and cause unexpected behavior (like receiving messages after leaving a chat).",
        ],
      },
      {
        title: "",
        subtitle: "How Does Cleanup Work?",
        details: [
          "In useEffect, you can return a cleanup function that runs when the component unmounts. This function can disconnect the Socket.IO client.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Cleanup (useEffect Return): Running code when a component unmounts.",
          "Resource Management: Disconnecting to free up server and client resources.",
          "Memory Leaks: Preventing issues caused by lingering connections.",
        ],
      },
      {
        title: "Sending Messages",
        subtitle: "",
        details: [
          "To send a message, the frontend emits a 'sendMessage' event to the backend with the message data (like sender, receiver, and content). You also need to manage state for the input field and loading status.",
        ],
      },
      {
        title: "",
        subtitle: "Why Emit an Event?",
        details: [
          "The 'sendMessage' event tells the backend to process and broadcast the message. This is how the frontend communicates actions to the backend.",
        ],
      },
      {
        title: "",
        subtitle: "Why Track Loading?",
        details: [
          "A loading state lets you show a spinner or disable a button while the message is being sent, improving the user experience.",
        ],
      },
      {
        title: "",
        subtitle: "Why Handle Errors?",
        details: [
          "If sending fails (e.g., due to a network issue), you can display an error message to the user.",
        ],
      },
      {
        title: "",
        subtitle: "Key Concepts",
        details: [
          "Event Emission: Sending data to the backend via Socket.IO.",
          "State Management: Tracking input text and loading status.",
          "Error Handling: Using try-catch to manage failures and inform the user.",
        ],
      },
      {
        title: "Putting It All Together: How It Works",
        subtitle:
          "Here's a high-level overview of how the backend and frontend work together:",
      },
      {
        title: "",
        subtitle: "Backend Setup",
        details: [
          "The backend creates an HTTP server, initializes Socket.IO, and listens for client connections. It handles events like 'join' (to assign clients to rooms) and 'sendMessage' (to save and broadcast messages).",
        ],
      },
      {
        title: "",
        subtitle: "Frontend Setup",
        details: [
          "The frontend installs the Socket.IO client, connects to the backend when the messaging component mounts, and joins a user-specific room.",
        ],
      },
      {
        title: "",
        subtitle: "Real-Time Messaging",
        details: [
          "When a user sends a message, the frontend emits a 'sendMessage' event to the backend.",
          "The backend saves the message to a database and broadcasts it to the sender and receiver using their rooms.",
          "The frontend listens for the 'receiveMessage' event and updates the UI with the new message.",
        ],
      },
      {
        title: "",
        subtitle: "Cleanup",
        details: [
          "When the user leaves the chat or the component unmounts, the frontend disconnects from Socket.IO, and the backend logs the disconnection.",
        ],
      },
      {
        title: "Key Takeaways",
        subtitle: "",
        details: [
          "Real-Time Communication: Socket.IO uses WebSockets to enable instant messaging without constant polling.",
          "Client-Server Interaction: The backend listens for events from clients (like sending a message), processes them, and emits events back to update clients.",
          "State and Side Effects: In the frontend, React hooks like useState and useEffect manage data and handle real-time updates.",
          "Error Handling: Both backend and frontend should handle errors (e.g., failed connections or database issues) to keep the app reliable.",
          "Rooms and Events: Socket.IO's rooms and custom events make it easy to target specific users and handle different actions (like joining or messaging).",
        ],
      },
    ],
  },
  {
    taskId: "day35",
    content: [
      {
        title: "Messaging App Theory Blog Cheatsheet: Understanding 'Day 35'",
        subtitle: "",
        details: [
          "So, you've tackled 'Day 34' and got real-time messaging working with Socket.IO—pretty cool, right? Now, 'Day 35' takes that foundation and builds the rest of the messaging app, adding a slick UI and some key features. This cheatsheet breaks down the big ideas behind 'Day 35', explaining what's going on under the hood so you can see the 'why' behind the code.",
        ],
      },
      {
        title: "The Big Picture: What's 'Day 35' Doing?",
        subtitle: "",
        details: [
          "'Day 35' is all about finishing your messaging app. While 'Day 34' handled the live chat magic (sending and receiving messages instantly), 'Day 35' adds the interface you see and interact with—think sidebars, chat windows, and search bars—plus some extra logic to fetch old messages, manage conversations, and handle user navigation. It's like putting a friendly face on the techy stuff from 'Day 34'!",
        ],
      },
      {
        title: "State: The App's Memory",
        subtitle: "What's Happening",
        details: [
          "'Day 35' adds new 'state' variables to track things like whether the app is loading, what you're typing in a search, or if a new message form is showing. These build on the state from 'Day 34' (like the message list or the current conversation).",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "State is like the app's brain—it remembers what's going on so the UI can react. For example, when you type in a search bar, the state updates, and the app knows to show matching users. It's how React keeps everything in sync!",
        ],
      },
      {
        title: "References: Pointing to the Chat's Bottom",
        subtitle: "What's Happening",
        details: [
          "There's a new 'reference' added to track the bottom of the chat window, alongside the ones from 'Day 34' for Socket.IO and the selected conversation.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "References are like bookmarks in the UI. This one helps the app scroll to the latest message automatically—super handy when chats get long! It's a way to control parts of the screen without messing with state.",
        ],
      },
      {
        title: "Backend URL: Talking to the Server",
        subtitle: "What's Happening",
        details: [
          "'Day 35' sets up a constant for the backend URL (e.g., http://localhost:5001), which wasn't explicitly defined in 'Day 34'.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "This is the address your app uses to chat with the server. It's like giving your app a phone number to call for messages or user searches—without it, the frontend and backend can't connect!",
        ],
      },
      {
        title: "Navigation and Prop Types: Safety First",
        subtitle: "What's Happening",
        details: [
          "New imports let the app redirect you to a login page if you're not signed in, and 'prop types' define what the user data should look like.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Navigation keeps the app secure—if you're not logged in, it sends you back to sign in. Prop types are like a rulebook, making sure the user info (like ID or name) is correct so the app doesn't break.",
        ],
      },
      {
        title: "Side Effects: Reacting to Changes",
        subtitle: "What's Happening",
        details: [
          "'Day 35' tweaks the Socket.IO side effect from 'Day 34' to check if you're logged in, then adds new ones to fetch messages and scroll the chat.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Side effects (with useEffect) are React's way of doing stuff when something changes—like loading messages when you open the app or scrolling when you switch conversations. They tie the app's actions to its state, keeping everything smooth.",
        ],
      },
      {
        title: "Fetching Messages: Loading the Past",
        subtitle: "What's Happening",
        details: [
          "The app grabs all your old messages from the server when it starts.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Socket.IO in 'Day 34' handles new messages, but what about ones sent before? Fetching fills in the history so you don't miss anything—it's like checking your chat log when you open WhatsApp.",
        ],
      },
      {
        title: "Searching Users: Finding Friends",
        subtitle: "What's Happening",
        details: [
          "You can type a name or email to find someone to message, and the app fetches a list from the server.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "This lets you start new chats easily. It's a mini search engine inside your app—type, see results, click, and boom, you're chatting!",
        ],
      },
      {
        title: "Conversations: Grouping Messages",
        subtitle: "What's Happening",
        details: [
          "The app organizes messages into conversations by user, sorting them by the latest message.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Instead of a messy list of messages, you get a tidy sidebar with one entry per person. It's how you see who you're talking to and what was said last—like your phone's chat list.",
        ],
      },
      {
        title: "Marking as Read: Keeping Track",
        subtitle: "What's Happening",
        details: [
          "When you click a conversation, unread messages get marked as read on the server.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "This mimics real apps—once you see a message, it's not “unread” anymore. It's a small touch that makes the app feel polished.",
        ],
      },
      {
        title: "UI Rendering: What You See",
        subtitle: "What's Happening",
        details: [
          "'Day 35' builds the whole interface—sidebar with conversations, chat window with messages, input field, and a search form.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "This is the app's face! Without it, 'Day 34''s code would just be invisible magic. The UI turns data (messages, users) into something you can click and read.",
        ],
      },
      {
        title: "Styling: Making It Pretty",
        subtitle: "What's Happening",
        details: [
          "CSS rules shape the layout—side-by-side sidebar and chat, bubbly messages, and neat buttons.",
        ],
      },
      {
        title: "",
        subtitle: "Why It Matters",
        details: [
          "Good styling isn't just looks—it makes the app easy to use. Left-aligned messages from others, right-aligned from you—it's intuitive and fun!",
        ],
      },
      {
        title: "How It Ties to 'Day 34'",
        subtitle: "Socket.IO Connection",
        details: [
          "'Day 34' set up real-time messaging, and 'Day 35' uses that to show new messages instantly in the UI.",
        ],
      },
      {
        title: "",
        subtitle: "State Sharing",
        details: [
          "Both lessons use the same messages and selectedConversation states—'Day 35' just adds more to manage the UI.",
        ],
      },
      {
        title: "",
        subtitle: "Sending Messages",
        details: [
          "The sendMessage function from 'Day 34' gets a shiny input field and button in 'Day 35'.",
        ],
      },
      {
        title: "",
        subtitle: "Backend Link",
        details: [
          "'Day 34''s server powers 'Day 35''s fetching and searching—it's one big team!",
        ],
      },
      {
        title: "Why This Works for Beginners",
        subtitle: "Step-by-Step Logic",
        details: [
          "Each piece (state, effects, UI) builds on the last, like stacking blocks.",
        ],
      },
      {
        title: "",
        subtitle: "Real-World Feel",
        details: [
          "It's not just code—it's a chat app you'd actually use, with search, scrolling, and live updates.",
        ],
      },
      {
        title: "",
        subtitle: "Error Handling",
        details: [
          "Loading and error messages mean the app won't just crash—it tells you what's wrong.",
        ],
      },
      {
        title: "Fun Takeaway",
        subtitle: "",
        details: [
          "Think of 'Day 35' as decorating a house 'Day 34' built. 'Day 34' laid the pipes (Socket.IO) and wired the lights (real-time messaging). 'Day 35' paints the walls (UI), adds furniture (conversations), and puts in a doorbell (search)—now it's a home you can live in! You've gone from techy backend stuff to a full app you can show off. Pretty awesome, huh?",
        ],
      },
    ],
  },
  {
    taskId: "day51",
    content: [
      {
        title: "Task 1: Implement Dark Mode Toggle",
        image: "/images/musicAcademyCheatsheet/day51/1.webp",
      },
      {
        title: "Task 2: Enhance CalendarView with Lesson Booking",

        image: "/images/musicAcademyCheatsheet/day51/2.webp",
      },
      {
        title: "Task 3: Add Notifications System",

        image: "/images/musicAcademyCheatsheet/day51/3.webp",
      },
      {
        title: "Task 4: Improve Messages Component with File Attachments",

        image: "/images/musicAcademyCheatsheet/day51/4.webp",
      },
      {
        title: "Task 5: Add Search and Filter to Services Page",

        image: "/images/musicAcademyCheatsheet/day51/5.webp",
      },
      {
        title: "Task 6: Optimize Performance with Lazy Loading",

        image: "/images/musicAcademyCheatsheet/day51/6.webp",
      },
      {
        title: "Task 7: Add Offline Support with Service Workers",

        image: "/images/musicAcademyCheatsheet/day51/7.webp",
      },
      {
        title: "Task 8: Add Accessibility Improvements",

        image: "/images/musicAcademyCheatsheet/day51/8.webp",
      },
    ],
  },

  {
    taskId: "day52",
    content: [
      {
        title: "Task 1:  Implement Rate Limiting for API Endpoints",
        image: "/images/musicAcademyCheatsheet/day52/1.webp",
      },
      {
        title: "Task 2: Add Lesson Availability Validation",

        image: "/images/musicAcademyCheatsheet/day52/2.webp",
      },
      {
        title: "Task 3: Implement Notification System",

        image: "/images/musicAcademyCheatsheet/day52/3.webp",
      },
      {
        title: "Task 4: Enhance Message File Attachments",

        image: "/images/musicAcademyCheatsheet/day52/4.webp",
      },
      {
        title: "Task 5: Add Search and Filter for Lessons Endpoint",

        image: "/images/musicAcademyCheatsheet/day52/5.webp",
      },
      {
        title: "Task 6: Optimize Database Queries with Indexing",

        image: "/images/musicAcademyCheatsheet/day52/6.webp",
      },
      {
        title: "Task 7: Add API Documentation with Swagger",

        image: "/images/musicAcademyCheatsheet/day52/7.webp",
      },
      {
        title: "Task 8: Implement Error Logging and Monitoring",

        image: "/images/musicAcademyCheatsheet/day52/8.webp",
      },
    ],
  },
  {
    taskId: "ecom1",
    content: [
      {
        title: "",
        subtitle: "The project structure:",

        image: "/images/ecommerce/cheatsheet1.webp",
      },
      {
        title: "",
        subtitle: "client/package.json (frontend)",

        code: `
          "name": "client",
          "version": "1.0.0",
          "type": "module",
          "scripts": {
            "dev": "rspack dev",
            "build": "rspack build",
            "preview": "rspack preview"
          }
          `,
      },
      {
        title: "",
        subtitle: "server/package.json (backend)",

        code: `
          "name": "server",
          "version": "1.0.0",
          "type": "module",
          "scripts": {
            "dev": "nodemon server.js",
            "start": "node server.js"
          }
          `,
      },
      {
        title: "",
        subtitle: "root package.json (root folder)",
        code: `
          "name": "ecom",
          "private": true,
          "version": "1.0.0",
          "scripts": {
            "install-all": "npm install --prefix server && npm install --prefix client",
            "dev": "concurrently \\"npm run dev --prefix server\\" \\"npm run dev --prefix client\\""
          },
          "dependencies": {
            "concurrently": "^9.2.0"
          }
          `,
      },
      {
        title: "",
        subtitle: "rspack.config.mjs (root folder)",
        code: `
          import { dirname, join } from 'node:path';
          import { fileURLToPath } from 'node:url';
          import { defineConfig } from '@rspack/cli';
          import { rspack } from '@rspack/core';
          import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh';

          const __dirname = dirname(fileURLToPath(import.meta.url));
          const isDev = process.env.NODE_ENV === 'development';

          const targets = ['last 2 versions', '> 0.2%', 'not dead', 'Firefox ESR'];

          export default defineConfig({
            context: __dirname,
            entry: {
              main: './src/main.jsx',
            },
            resolve: {
              extensions: ['...', '.ts', '.tsx', '.jsx', '.css'],
            },
            module: {
              rules: [
                {
                  test: /\\.svg$/,
                  type: 'asset',
                },
                {
                  test: /\\.(jsx?|tsx?)$/,
                  use: [
                    {
                      loader: 'builtin:swc-loader',
                      options: {
                        jsc: {
                          parser: {
                            syntax: 'typescript',
                            tsx: true,
                          },
                          transform: {
                            react: {
                              runtime: 'automatic',
                              development: isDev,
                              refresh: isDev,
                            },
                          },
                        },
                        env: { targets },
                      },
                    },
                  ],
                },
              ],
            },
            plugins: [
              new rspack.HtmlRspackPlugin({
                template: join(__dirname, '../index.html'),
              }),
              isDev ? new ReactRefreshRspackPlugin() : null,
            ].filter(Boolean),
            optimization: {
              minimizer: [
                new rspack.SwcJsMinimizerRspackPlugin(),
                new rspack.LightningCssMinimizerRspackPlugin({
                  minimizerOptions: { targets },
                }),
              ],
            },
            experiments: {
              css: true,
            },
          });
          `,
      },
    ],
  },
  {
    taskId: "ecom3",
    content: [
      {
        title: "",
        subtitle: "server/server.js (backend folder)",

        code: `
          /* eslint-disable no-undef */
          // server/server.js
          import dotenv from 'dotenv';
          import express from 'express';
          import cors from 'cors';
          import connectDB from './config/db.js';

          dotenv.config();

          connectDB();

          const app = express();

          app.use(cors());
          app.use(express.json());

          app.get('/', (req, res) => {
            res.send('Server is running!');
          });

          const PORT = process.env.PORT || 5001;
          app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
          `,
      },
      {
        title: "",
        subtitle: "server/config/db.js",
        code: `
          /* eslint-disable no-undef */
          import mongoose from 'mongoose';

          const connectDB = async () => {
            try {
              await mongoose.connect(process.env.MONGO_URI);
              console.log('✅ MongoDB Connected Successfully');
            } catch (error) {
              console.error('❌ MongoDB Connection Failed:', error.message);
              process.exit(1); // exit process if connection fails
            }
          };

          export default connectDB;  
          `,
      },
      {
        title: "",
        subtitle: "Example of your Connection String (URI)",

        code: `
          mongodb+srv://myUser:<password>@ecom-cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
          `,
      },
    ],
  },
  {
    taskId: "ecom4",
    content: [
      {
        title: "Plan the Schema Design",
        subtitle: "Structure the User schema for e-commerce",
        details: [
          "Define User as the core entity for customers and admins.",
          "Include fields: name, email, password, role, addresses, orderHistory.",
          "Use embedding for addresses and referencing for orders.",
        ],
        text: "Schema design is the foundation of a MongoDB-based application. For an e-commerce platform, the User schema must capture essential user details while supporting relationships like addresses (embedded for quick access) and order history (referenced for scalability). Plan for security (password hashing) and auditing (timestamps) early to ensure a robust model.",
        moreText:
          "Consider trade-offs: embedding addresses reduces queries but increases document size, while referencing orders keeps the User document lean but requires population for data retrieval. Use indexes on frequently queried fields like email to boost performance. Validate requirements (e.g., unique email) to prevent data duplication.",
      },
      {
        title: "Create a Models Folder",
        subtitle: "Organize schemas for modularity",
        details: [
          "Create a 'models' folder in the project root.",
          "Add 'User.js' to store the User schema.",
          "Separate schemas for User, Order, and Product.",
        ],
        text: "A modular project structure enhances maintainability in Node.js applications. By placing schemas in a dedicated 'models' folder, you isolate data logic from routes and controllers, following MVC principles. This organization supports scalability and team collaboration.",
        moreText:
          "Use consistent naming (e.g., 'User.js' for User model) and ES modules for imports/exports. This setup allows easy addition of new models (e.g., Product, Cart) without cluttering the codebase. Ensure the folder is in the project root for easy access by other modules.",
      },
      {
        title: "Add ESLint Directive",
        subtitle: "Manage linting for clean code",
        details: [
          "Add '/* eslint-disable no-undef */' at the top of User.js.",
          "Prevents warnings for globals like mongoose and bcrypt.",
          "Use directives only when necessary.",
        ],
        text: "ESLint ensures code quality by catching errors and enforcing style. The 'no-undef' directive disables warnings for undefined variables (e.g., mongoose, bcrypt) that are globally available in Node.js but not explicitly defined in the file.",
        moreText:
          "While directives are useful, prefer configuring .eslintrc to recognize globals or use proper imports. Overusing directives can mask real issues, so apply them judiciously. Regularly review ESLint rules to align with team coding standards.",
      },
      {
        title: "Import Required Modules",
        subtitle: "Set up dependencies for schema creation",
        details: [
          "Import mongoose for MongoDB schema management.",
          "Import bcrypt for secure password hashing.",
          "Use ES modules for modern imports.",
        ],
        text: "Mongoose provides an Object-Document Mapping (ODM) layer for MongoDB, enabling schema definitions, validation, and queries. Bcrypt secures passwords with salted hashing, critical for user authentication in e-commerce applications.",
        moreText:
          "Use `import mongoose from 'mongoose'` and `import bcrypt from 'bcrypt'` for modularity. Ensure dependencies are listed in package.json. For high-traffic apps, consider async bcrypt methods to avoid blocking the event loop.",
      },
      {
        title: "Define Address Sub-Schema",
        subtitle: "Create embedded schema for addresses",
        details: [
          "Define AddressSchema with fields like label, fullName, street.",
          "Set '_id: false' to avoid unnecessary IDs.",
          "Include required and optional fields for flexibility.",
        ],
        text: "Sub-schemas model nested data like addresses, which are tightly coupled to users. Embedding addresses in the User schema reduces query overhead, as they're fetched together. Setting '_id: false' keeps sub-documents lightweight.",
        moreText:
          "Fields like fullName, street, city, and country are required for shipping, while state, postalCode, and phone are optional for flexibility. Use defaults (e.g., label: 'home') to simplify user input. Avoid embedding large or independent data to prevent document bloat.",
      },
      {
        title: "Define User Schema",
        subtitle: "Build the main User schema",
        details: [
          "Define fields: name, email, password, role, addresses, orderHistory.",
          "Use modifiers: required, unique, lowercase, select: false.",
          "Add timestamps for creation/update tracking.",
        ],
        text: "The User schema defines the structure for user data, enforcing validation and relationships. Modifiers like `unique` (email) and `select: false` (password) enhance security and data integrity. Timestamps track user activity for auditing.",
        moreText:
          "Use `enum` for role to restrict values to 'user' or 'admin' for RBAC. Embed addresses as an array of AddressSchema; reference orderHistory with ObjectIds for scalability. Indexes on email improve query speed but increase write overhead.",
      },
      {
        title: "Add Password Hashing Middleware",
        subtitle: "Secure passwords before saving",
        details: [
          "Use pre('save') middleware to hash modified passwords.",
          "Hash with bcrypt using salt rounds from env.",
          "Call next() to continue the save process.",
        ],
        text: "Mongoose middleware automates tasks like password hashing before saving a user. Bcrypt’s salted hashing protects against brute-force and rainbow table attacks, ensuring secure storage of sensitive data.",
        moreText:
          "Check `this.isModified('password')` to avoid re-hashing unchanged passwords, improving performance. Store salt rounds in an environment variable (default 10) for flexibility. Use async/await with bcrypt to handle I/O non-blocking.",
      },
      {
        title: "Add Password Comparison Method",
        subtitle: "Enable secure authentication",
        details: [
          "Add comparePassword method to userSchema.",
          "Use bcrypt.compare to verify candidate password.",
          "Return boolean for authentication logic.",
        ],
        text: "Schema methods add custom behavior to models, encapsulating logic like password verification. The comparePassword method uses bcrypt to securely compare a provided password against the stored hash, enabling login functionality.",
        moreText:
          "Integrate with auth routes (e.g., for JWT generation). Use async bcrypt.compare to avoid blocking. Combine with rate-limiting middleware to prevent brute-force attacks on login endpoints.",
      },
      {
        title: "Compile and Export User Model",
        subtitle: "Finalize the model for use",
        details: [
          "Compile userSchema into 'User' model.",
          "Export using 'export default' for modularity.",
          "Collection name auto-derived as 'users'.",
        ],
        text: "Compiling the schema into a model creates a reusable interface for MongoDB operations (e.g., User.find()). Exporting allows the model to be imported in routes or services, promoting modular design.",
        moreText:
          "Use `mongoose.model('User', userSchema)` to register the model. Test model functionality (e.g., CRUD, population) independently. Use population for orderHistory references (e.g., `User.find().populate('orderHistory')`) to fetch related data.",
      },
    ],
  },
  {
    taskId: "ecom5",
    content: [
      {
        title: "Plan the Schema Design",
        subtitle: "Define Product and Order schemas",
        details: [
          "Product entity: items for sale with details like name, price.",
          "Order entity: customer purchases with items, shipping, payment.",
          "Use embedding (ratings, order items) and referencing (User, Product).",
        ],
        text: "Schema design for Product and Order ensures efficient data modeling for e-commerce. Products need details like price and stock, plus ratings for reviews. Orders link users, products, and shipping/payment details, using embedded and referenced relationships to balance query performance and scalability.",
        moreText:
          "Embedding ratings in Product and order items in Order reduces query complexity for frequent reads. Referencing User and Product in Order supports scalability for large datasets. Plan indexes (e.g., text for Product, createdAt for Order) to optimize search and sorting.",
      },
      {
        title: "Create a Models Folder",
        subtitle: "Organize schema definitions",
        details: [
          "Ensure 'models' folder exists in project root.",
          "Create 'Product.js' and 'Order.js' for schemas.",
          "Keep schemas modular, separate from other models.",
        ],
        text: "A dedicated 'models' folder promotes modular design, aligning with MVC principles. Separating Product and Order schemas into distinct files (Product.js, Order.js) enhances maintainability and supports team collaboration in e-commerce projects.",
        moreText:
          "Use consistent file naming (e.g., 'Product.js' for Product model) and ES modules for imports/exports. This structure allows easy addition of new models (e.g., Category, Cart) and integrates well with version control systems.",
      },
      {
        title: "Import Mongoose",
        subtitle: "Set up Mongoose for schemas",
        details: [
          "Import mongoose in Product.js for schema creation.",
          "Import mongoose in Order.js for schema creation.",
          "Use ES modules for modern dependency management.",
        ],
        text: "Mongoose, a MongoDB ODM, simplifies schema creation, validation, and querying. Importing it in both Product.js and Order.js enables structured data modeling for the e-commerce backend, ensuring consistency and type safety.",
        moreText:
          "Use `import mongoose from 'mongoose'` in both files. Verify mongoose is in package.json. For performance, avoid unnecessary imports and consider connection pooling for high-traffic apps.",
      },
      {
        title: "Define Rating Sub-Schema",
        subtitle: "Create RatingSchema for product reviews",
        details: [
          "Define RatingSchema with user, rating, comment, createdAt.",
          "Set rating as Number (1-5), user as User reference.",
          "Use default _id: true for unique review IDs.",
        ],
        text: "RatingSchema, embedded in Product, captures user reviews with ratings and comments. Referencing User via ObjectId links reviews to users, while createdAt tracks review timing, enabling sorted display in product listings.",
        moreText:
          "Restrict rating to 1-5 with min/max validators for data integrity. Keep _id: true to allow querying or updating specific reviews. Optional comment field adds flexibility for detailed feedback.",
      },
      {
        title: "Define Product Schema",
        subtitle: "Build the main Product schema",
        details: [
          "Include fields: name, price, stock, category, ratings.",
          "Set validators: required, min 0, indexed fields.",
          "Add timestamps for createdAt/updatedAt tracking.",
        ],
        text: "The Product schema defines sellable items with essential fields (name, price, stock) and embedded ratings for reviews. Indexes on name and category improve query performance, while timestamps track product updates for auditing.",
        moreText:
          "Use `min: 0` for price/stock to prevent negative values. Embed ratings for fast access in product views. Track averageRating and numReviews for quick summary displays without recalculating.",
      },
      {
        title: "Add Text Index for Product",
        subtitle: "Enable full-text search",
        details: [
          "Add text index on name, description, category.",
          "Use productSchema.index for search functionality.",
          "Supports efficient product searches in e-commerce.",
        ],
        text: "Text indexes in MongoDB enable full-text search on fields like name, description, and category, critical for e-commerce product search. This improves user experience by allowing keyword-based product discovery.",
        moreText:
          "Use `productSchema.index({ name: 'text', description: 'text', category: 'text' })`. Test search queries with `$text` operator. Be cautious with index size, as text indexes can increase storage requirements.",
      },
      {
        title: "Compile and Export Product Model",
        subtitle: "Finalize Product model",
        details: [
          "Compile productSchema into 'Product' model.",
          "Export using 'export default' for reuse.",
          "Collection name auto-derived as 'products'.",
        ],
        text: "Compiling the Product schema into a model creates a reusable interface for MongoDB operations (e.g., Product.find()). Exporting allows integration with routes and services, supporting modular e-commerce development.",
        moreText:
          "Use `mongoose.model('Product', productSchema)` to register the model. Test CRUD operations and population (e.g., ratings.user). Ensure indexes are applied post-compilation for search/sort efficiency.",
      },
      {
        title: "Define Order Item Sub-Schema",
        subtitle: "Create OrderItemSchema for order items",
        details: [
          "Define fields: productId, name, image, price, quantity.",
          "Set productId as Product reference, _id: false.",
          "Embed in Order for purchased products.",
        ],
        text: "OrderItemSchema, embedded in Order, captures details of purchased products (e.g., name, price) to avoid fetching Product documents for every order view. Setting '_id: false' keeps sub-documents lightweight.",
        moreText:
          "Store product details (name, image, price) in OrderItemSchema to preserve order state if Product changes (e.g., price updates). Reference productId for population if needed. Validate quantity to ensure positive values.",
      },
      {
        title: "Define Order Schema",
        subtitle: "Build the main Order schema",
        details: [
          "Include fields: user, items, shippingAddress, totalAmount.",
          "Use enums for status, paymentMethod, paymentStatus.",
          "Add timestamps for creation/update tracking.",
        ],
        text: "The Order schema models customer purchases, linking to User and embedding order items and shipping details. Enums for status and payment fields ensure valid states, while timestamps track order lifecycle for auditing.",
        moreText:
          "Index user and status for fast queries (e.g., user order history). Embed shippingAddress to avoid separate collections. Validate totalAmount to match item prices and quantities for consistency.",
      },
      {
        title: "Add Index for Order Sorting",
        subtitle: "Enable efficient order sorting",
        details: [
          "Add index on createdAt field (ascending).",
          "Use orderSchema.index for sorting performance.",
          "Supports order history and tracking queries.",
        ],
        text: "Indexing createdAt in ascending order optimizes sorting for order history and tracking queries, common in e-commerce dashboards. This ensures fast retrieval of recent or historical orders.",
        moreText:
          "Use `orderSchema.index({ createdAt: 1 })`. Consider additional indexes (e.g., status) for frequent filters. Test index performance with large datasets to avoid excessive storage overhead.",
      },
      {
        title: "Compile and Export Order Model",
        subtitle: "Finalize Order model",
        details: [
          "Compile orderSchema into 'Order' model.",
          "Export using 'export default' for reuse.",
          "Collection name auto-derived as 'orders'.",
        ],
        text: "Compiling the Order schema into a model enables MongoDB operations (e.g., Order.find()). Exporting supports integration with routes for order processing, tracking, and user history in the e-commerce backend.",
        moreText:
          "Use `mongoose.model('Order', orderSchema)` to register the model. Test population (e.g., user, productId) for related data retrieval. Ensure indexes are applied for query efficiency in high-traffic scenarios.",
      },
    ],
  },
  {
    taskId: "ecom6",
    content: [
      {
        title: "Plan the Schema Design",
        subtitle: "Structure the Cart schema for e-commerce",
        details: [
          "Cart entity represents a user’s shopping cart.",
          "Include user reference and embedded cart items.",
          "Use unique user field and manual updatedAt tracking.",
        ],
        text: "The Cart schema models a user’s shopping cart, storing product selections temporarily before checkout. Referencing the User model ensures one cart per user, while embedding CartItemSchema keeps product details (productId, quantity) accessible in a single query. Manual updatedAt management tracks cart modifications without full timestamps.",
        moreText:
          "A unique user field prevents duplicate carts, with an index for fast lookups. Embedding items avoids separate collections, optimizing read performance. Omitting createdAt and using manual updatedAt suits carts, which are transient and frequently updated.",
      },
      {
        title: "Create a Models Folder",
        subtitle: "Organize schema definitions",
        details: [
          "Ensure 'models' folder exists in project root.",
          "Create 'Cart.js' for the Cart schema.",
          "Keep schemas modular with User, Product, Order.",
        ],
        text: "A modular 'models' folder organizes schema definitions, aligning with MVC principles for maintainability. Placing Cart.js alongside other models (User, Product, Order) supports scalability and clear separation of concerns in the e-commerce backend.",
        moreText:
          "Use ES modules for imports/exports in Cart.js for modern JavaScript compatibility. A consistent folder structure simplifies adding new models (e.g., Wishlist) and integrates with version control for team workflows.",
      },
      {
        title: "Import Mongoose",
        subtitle: "Set up Mongoose for schema creation",
        details: [
          "Import mongoose in Cart.js.",
          "Use for defining CartItemSchema and cartSchema.",
          "Ensure mongoose is in package.json.",
        ],
        text: "Mongoose, as a MongoDB ODM, provides structured schema creation and validation. Importing it in Cart.js enables the definition of CartItemSchema and cartSchema, ensuring type safety and query efficiency for the shopping cart functionality.",
        moreText:
          "Use `import mongoose from 'mongoose'` for modularity. Verify mongoose is listed in package.json dependencies. For high-traffic e-commerce apps, configure mongoose connection pooling to handle concurrent cart operations efficiently.",
      },
      {
        title: "Define Cart Item Sub-Schema",
        subtitle: "Create CartItemSchema for cart items",
        details: [
          "Define fields: productId, quantity, addedAt.",
          "Set productId as Product reference, _id: false.",
          "Ensure quantity is required, minimum 1.",
        ],
        text: "CartItemSchema, embedded in Cart, captures product selections with productId (referencing Product) and quantity. Setting '_id: false' keeps sub-documents lightweight, while addedAt tracks when items are added, aiding cart management.",
        moreText:
          "Reference productId for population if product details are needed (e.g., name, price). Validate quantity with `min: 1` to prevent invalid entries. Consider adding a max limit for quantity based on stock availability in future validations.",
      },
      {
        title: "Define Cart Schema",
        subtitle: "Build the main Cart schema",
        details: [
          "Include fields: user, items, updatedAt.",
          "Set user as unique, indexed User reference.",
          "Manually manage updatedAt without timestamps.",
        ],
        text: "The Cart schema defines a user’s shopping cart with a unique user reference, embedded items, and a manually updated timestamp. The unique and indexed user field ensures one cart per user and fast queries, critical for e-commerce cart operations.",
        moreText:
          "Use `unique: true` and `index: true` on user for performance and data integrity. Embedding items optimizes read operations for cart displays. Omitting `{ timestamps: true }` avoids unnecessary createdAt, as carts are transient and only need update tracking.",
      },
      {
        title: "Add Pre-Save Middleware",
        subtitle: "Update timestamp before saving",
        details: [
          "Add pre('save') middleware to cartSchema.",
          "Set updatedAt to Date.now().",
          "Call next() to continue saving.",
        ],
        text: "Pre-save middleware automates updating the updatedAt field before saving the cart, ensuring accurate tracking of cart modifications. This manual approach replaces automatic timestamps, aligning with the schema’s design to omit createdAt.",
        moreText:
          "Use `this.updatedAt = Date.now()` for simplicity. Ensure middleware is lightweight to avoid save delays. Test middleware with various cart updates (e.g., adding/removing items) to verify updatedAt reflects changes accurately.",
      },
      {
        title: "Compile and Export Cart Model",
        subtitle: "Finalize Cart model",
        details: [
          "Compile cartSchema into 'Cart' model.",
          "Export using 'export default'.",
          "Collection name auto-derived as 'carts'.",
        ],
        text: "Compiling the Cart schema into a model creates a reusable interface for MongoDB operations (e.g., Cart.findOne()). Exporting allows integration with routes for cart management, supporting modular e-commerce functionality.",
        moreText:
          "Use `mongoose.model('Cart', cartSchema)` to register the model. Test queries like `Cart.findOne({ user: userId }).populate('items.productId')` for retrieving cart data with product details. Ensure the unique index on user is enforced post-compilation.",
      },
    ],
  },
  {
    taskId: "ecom2",
    content: [
      [
        {
          title: "Hook + Lesson Intro",
          subtitle: "Understand the importance of Git setup",
          details: [
            "GitHub stores version history and enables collaboration.",
            "Set up a MERN monorepo with client and server.",
            "Ensure sensitive files like .env are never pushed.",
          ],
          text: "GitHub is essential for version control, backups, and team collaboration in a MERN e-commerce project. Proper setup ensures a clean repository for your monorepo (root, client, server) while protecting sensitive data like API keys in .env files, establishing a reusable workflow for future projects.",
          moreText:
            "A monorepo keeps client and server code in one repo, simplifying dependency management and deployments. Excluding sensitive files early prevents leaks. This setup prepares you for scalable development, CI/CD pipelines, and collaborative workflows with pull requests.",
        },
        {
          title: "Create a GitHub Repository",
          subtitle: "Set up a remote repository on GitHub",
          details: [
            "Create a new repository on github.com.",
            "Name it e.g., 'react-ecommerce-foundation'.",
            "Avoid initializing with README or .gitignore.",
          ],
          text: "Creating a GitHub repository provides a remote home for your MERN project’s code. Choosing a descriptive name and avoiding initial files (README, .gitignore) prevents merge conflicts when pushing from a local repo, ensuring a smooth setup.",
          moreText:
            "Select Public for open-source learning or Private for personal projects. Keep the GitHub tab open to copy connection commands (remote add/push). Use clear descriptions to make the repo’s purpose obvious to collaborators or future self.",
        },
        {
          title: "Initialize Git Locally",
          subtitle: "Turn your project into a Git repository",
          details: [
            "Run 'git init' in the project root (ecom/).",
            "Set global user.name and user.email if needed.",
            "Ensure .git folder is only in root, not client/server.",
          ],
          text: "Initializing Git locally with `git init` creates a .git folder in the project root, enabling version tracking for your MERN monorepo. Setting user details ensures commits are attributed correctly, critical for collaboration and audit trails.",
          moreText:
            "Run `git config --global user.name 'Your Name'` and `user.email` once per machine. If .git folders appear in client/ or server/, delete them to keep the monorepo unified under the root. This avoids fragmented version control.",
        },
        {
          title: "Add .gitignore",
          subtitle: "Exclude sensitive and generated files",
          details: [
            "Create .gitignore in project root.",
            "Ignore node_modules, .env, build folders.",
            "Remove cached secrets with git rm --cached.",
          ],
          text: "A .gitignore file prevents committing sensitive files (e.g., .env with API keys) and generated files (e.g., node_modules, build). This keeps the repository clean, secure, and lightweight, focusing on source code for the MERN project.",
          moreText:
            "Include patterns like `node_modules/`, `client/.env`, `server/build/` to cover monorepo subdirectories. If secrets are accidentally committed, use `git rm -r --cached` and rotate keys immediately. Regularly review .gitignore for new generated files.",
        },
        {
          title: "Make Your First Commit",
          subtitle: "Snapshot your initial project state",
          details: [
            "Stage files with 'git add .'.",
            "Commit with 'git commit -m \"chore: initial setup\"'.",
            "Use conventional commit messages for clarity.",
          ],
          text: "The first commit captures your MERN project’s initial state (root, client, server). Staging with `git add .` includes all non-ignored files, and a clear commit message (using conventional prefixes like 'chore') makes the history readable and professional.",
          moreText:
            "Conventional commits (e.g., feat, fix, chore) improve collaboration and changelog generation. Use VS Code’s Source Control panel for convenience, but ensure commands run in the root. Verify staged files with `git status` to avoid missing or extra files.",
        },
        {
          title: "Connect Local Repo to GitHub",
          subtitle: "Link and push to remote repository",
          details: [
            "Add remote with 'git remote add origin <url>'.",
            "Set main branch with 'git branch -M main'.",
            "Push with 'git push -u origin main'.",
          ],
          text: "Connecting your local Git repo to GitHub enables remote storage and collaboration. The `git remote add` command links to your GitHub repo, `git branch -M main` sets the primary branch, and `git push -u` uploads the code, setting up tracking for future pushes.",
          moreText:
            "Use `git remote -v` to verify the remote URL. For auth issues, configure `credential.helper` or use GitHub Desktop. The `-u` flag simplifies future `git push` commands. If the wrong folder was pushed, reinitialize Git in the root and retry.",
        },
        {
          title: "Verify Online and Layout",
          subtitle: "Check your repository on GitHub",
          details: [
            "Refresh GitHub to see client/, server/, configs.",
            "Use 'git remote -v' and 'git status' for status.",
            "Ensure root-level push, not client/server.",
          ],
          text: "Verifying your GitHub repository ensures all files (client/, server/, package.json) are correctly uploaded. Commands like `git remote -v` and `git status` confirm the remote connection and local state, ensuring the monorepo is properly set up.",
          moreText:
            "If client/ or server/ are missing, check if Git was initialized in a subdirectory; reinitialize at root if needed. Regularly check `git status` before commits to avoid untracked changes. This step confirms your monorepo structure is intact online.",
        },
        {
          title: "Protect Main and Plan Branching",
          subtitle: "Secure main branch and organize workflow",
          details: [
            "Protect main in GitHub Settings to require PRs.",
            "Use branches: main (stable), dev, feature/<name>.",
            "Create dev branch with 'git checkout -b dev'.",
          ],
          text: "Protecting the main branch prevents direct pushes, ensuring stability for production-ready code. A branching model (main, dev, feature branches) organizes development, with pull requests (PRs) facilitating code reviews for the MERN project.",
          moreText:
            "Set up branch protection in GitHub Settings under Branches. Use `git checkout -b dev` and push to create an integration branch. Feature branches (e.g., feature/auth) keep work isolated. Merge via PRs to maintain clean history and catch errors early.",
        },
        {
          title: "Daily Workflow and Fixes",
          subtitle: "Establish routine and troubleshoot",
          details: [
            "Daily: pull, code, add, commit, push.",
            "Fix conflicts with 'git pull' or 'git stash'.",
            "Remove secrets with 'git rm --cached .env'.",
          ],
          text: "A daily Git workflow (pull, code, commit, push) keeps your MERN monorepo synced and progress tracked. Common fixes like `git stash` for temporary saves or `git rm --cached` for secrets ensure smooth development and security.",
          moreText:
            "Run `git pull` before coding to avoid conflicts; resolve them manually if they occur. Use `git stash` for quick work saves without committing. For monorepos, always run Git commands in the root to keep client/server in sync. Rotate keys immediately if secrets are leaked.",
        },
      ],
    ],
  },
  {
    taskId: "ecom7",
    content: [
      {
        title: "Understanding JWT Authentication",
        subtitle: "What Makes JWTs Different?",
        details: ["Traditional Session-Based Authentication: Think of this like checking into a hotel. The server gives you a room key (session ID) and keeps a record at the front desk of who has which key. Every time you want room service, they check their records to see if your key is valid.", "JWT-Based Authentication: This is like having a driver's license. All the information needed to verify who you are is encoded right on the card itself. No need to call the DMV every time someone needs to verify your identity."],
       
        text: "",
        moreText: "",
      },
      {
        title: "",
        subtitle: "The Two-Token Strategy Explained",
        details: ["Why Not Just One Token? Imagine if your driver's license expired every 15 minutes - secure but incredibly annoying. Now imagine if it never expired - convenient but a security nightmare if stolen. The two-token system solves this dilemma."],
        text: "",
        moreText: "",
      },
      {
        title: "",
        subtitle: "",
        text: "Access Token Philosophy:",

        details: ["Short-lived (15 minutes): Like a temporary visitor badge",
           "Contains more information: User ID, role, permissions",
            "Used frequently: Every API request includes this",
          "Low security risk: Even if stolen, expires quickly"],
        moreText: "",
      },
      {
        title: "",
        subtitle: "",
        text: "Refresh Token Philosophy:",

        details: ["Long-lived (7 days): Like your house key",
           "Contains minimal information: Just user ID",
            "Used rarely: Only when access token expires",
          "Higher security risk: Stored more securely (HTTP-only cookies)"],
        "code": `
        // Environment variables for different secrets
        JWT_SECRET=your-access-token-secret
        JWT_REFRESH_SECRET=different-refresh-token-secret 
          `,
          moreText: "",
      },
    {
          title: "",
          subtitle: "Storage Location Strategy:",
          details: [
            "Access tokens: Stored in frontend memory (JavaScript variables)",
            "Refresh tokens: Stored in HTTP-only cookies (inaccessible to JavaScript)",
          ],
          moreText: 'This separation means even if malicious JavaScript runs on your site (XSS attack), it can`t steal the refresh token.',

        },
           {
          title: "Node.js Architecture Concepts",
          subtitle: "Asynchronous Programming Philosophy",
          text: '',
          details: [
            "Why Everything is Async: Node.js is like a single waiter serving an entire restaurant. If that waiter had to wait for the kitchen to prepare each dish before taking the next order, service would be terrible. Instead, they take an order, hand it to the kitchen, and immediately move to the next table while the kitchen works.",
            "The Promise Chain Problem: Before async/await, handling multiple asynchronous operations created 'callback hell' - like giving increasingly complex instructions to that waiter: 'After you get table 1's drink, then ask table 2 what they want, then after table 1's food is ready, bring it over, then...",
            "Async/Await Solution: This syntax makes asynchronous code read like regular instructions: 'Get table 1's drink. Ask table 2 what they want. Bring table 1's food.' Much cleaner and easier to follow.",
          ],
          moreText: '',
        },
            {
          title: "",
          subtitle: "Error Handling Philosophy",
          text: '',
          details: [
            "Fail Fast Principle: Like checking your ingredients before starting to cook, validate all inputs at the beginning of your function. If something's wrong, stop immediately rather than continuing with bad data.",
            "Centralized Error Handling: Instead of handling errors differently in every function, funnel all errors to one place that knows how to respond appropriately. This is like having a customer service desk that handles all complaints consistently.",
          ],
          moreText: '',
        },
            {
          title: "",
          subtitle: "",
          text: 'Error Information Levels:',
          details: [
            "Development: Show detailed error information to help debugging",
            "Production: Show generic messages to avoid revealing system internals",
            "Logging: Record detailed information for developers without exposing it to users",
          ],
          moreText: '',
        },
         {
      "title": "Security Mindset",
      "subtitle": "Defense in Depth",
      "text": "",
      "details": [
        "Multiple Security Layers: Like a medieval castle with multiple walls, drawbridges, and guard posts, don't rely on just one security measure. If attackers get past one defense, others should still protect you.",
        "Input Validation Layers: Frontend validation: User experience (helps users enter correct data), API validation: Security boundary (never trust data from outside your system), Database validation: Final integrity check (ensures data consistency)"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "The Principle of Least Privilege",
      "text": "",
      "details": [
        "Token Payload Design: Only include information that's absolutely necessary. Access tokens need user ID and role for authorization decisions. Refresh tokens only need user ID for generating new access tokens.",
        "Cookie Security Settings: httpOnly: Prevents XSS attacks from stealing tokens, secure: Ensures tokens only travel over encrypted connections, sameSite: Prevents CSRF attacks from malicious websites"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Security vs Usability Balance",
      "text": "",
      "details": [
        "Token Expiration Strategy: Too short: Users constantly interrupted for re-authentication, Too long: Stolen tokens remain valid for extended periods, The sweet spot: Short enough for security, long enough for good user experience",
        "Password Security Balance: Stronger hashing: More secure but slower server response, Weaker hashing: Faster but less secure, Modern standard: Use strong hashing (bcrypt with 12+ rounds) and optimize elsewhere"
      ],
      "moreText": ""
    },
    {
      "title": "System Architecture Thinking",
      "subtitle": "Separation of Concerns",
      "text": "",
      "details": [
        "Why Separate Controllers, Models, and Routes: Think of building a house. You wouldn't want the electrician, plumber, and carpenter all working on the same wall at once. Each has their expertise and responsibilities.",
        "Controller Responsibilities: Handle HTTP communication (requests and responses), Validate input data, Orchestrate business logic, Format output data",
        "Model Responsibilities: Define data structure and relationships, Implement business rules and constraints, Handle database interactions, Ensure data integrity",
        "Route Responsibilities: Map URLs to appropriate controllers, Apply middleware (authentication, logging, etc.), Define API structure"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Scalability Considerations",
      "text": "",
      "details": [
        "Stateless Design Benefits: Like a restaurant where any waiter can serve any table because all order information is written on the ticket, stateless authentication means any server can handle any request because all necessary information is in the token.",
        "Database Design Implications: Indexing strategy: Like a library's card catalog, indexes speed up finding specific records, Query optimization: Design your queries to fetch only necessary data, Connection management: Database connections are expensive resources to be managed carefully"
      ],
      "moreText": ""
    },
    {
      "title": "HTTP Communication Principles",
      "subtitle": "Status Code Psychology",
      "text": "",
      "details": [
        "Why Specific Status Codes Matter: HTTP status codes are like different types of responses in conversation. 'I don't understand' (400) is different from 'I understand but won't do it' (403), which is different from 'I can't do it right now' (503).",
        "Client Behavior Implications: 4xx errors: Client should not retry without changes, 5xx errors: Client might retry after a delay, 2xx success: Operation completed successfully"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "RESTful API Design",
      "text": "",
      "details": [
        "Resource-Oriented Thinking: Think of your API as managing resources (users, products, orders) rather than actions. Instead of 'createUser' and 'deleteUser' endpoints, have a 'users' resource that supports different HTTP methods.",
        "Predictable URL Structure: Like a well-organized filing system, your API structure should be intuitive. Users expect /users/123 to refer to user 123, and /users to refer to the collection of all users."
      ],
      "moreText": ""
    },
    {
      "title": "Common Pitfalls & Mental Models",
      "subtitle": "Variable Naming and Code Clarity",
      "text": "",
      "details": [
        "Code as Communication: Your code is a conversation with future developers (including yourself). Variable names like u, usr, or data are like mumbling - technically functional but hard to understand.",
        "Consistency as a Mental Framework: Like following grammar rules in writing, consistent naming conventions reduce cognitive load. Your brain doesn't have to guess whether it's userId or user_id or userID."
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Database Thinking",
      "text": "",
      "details": [
        "Relational vs Document Thinking: SQL databases: Think in terms of normalized tables and relationships, NoSQL databases: Think in terms of documents and embedded data, Choose your approach based on how your data naturally clusters",
        "Query Performance Mindset: Every database query is like asking someone to find information. The more specific your request and the better organized their filing system (indexes), the faster they can respond."
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Memory and Performance Awareness",
      "text": "",
      "details": [
        "Memory Management Philosophy: JavaScript's garbage collection is like having a cleaning service, but you still shouldn't leave trash everywhere. Be mindful of creating objects unnecessarily or keeping references to data you no longer need.",
        "Performance vs Readability Trade-offs: Sometimes the most readable code isn't the fastest, and the fastest code isn't the most readable. Make deliberate choices based on your application's needs."
      ],
      "moreText": ""
    },
    {
      "title": "Implementation Strategy",
      "subtitle": "Planning Before Coding",
      "text": "",
      "details": [
        "Requirements Analysis: Before writing any code, clearly understand: What data needs to be collected and validated, How errors should be communicated to users, What security requirements must be met, How the system should behave under various conditions",
        "Architecture Decisions: How will components communicate with each other?, Where will different types of data be stored?, How will errors be handled consistently?, What happens when things go wrong?"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Testing Mindset",
      "text": "",
      "details": [
        "Test-Driven Thinking: Before implementing a feature, think about how you'll know it works correctly. What are the success cases? What are the failure cases? How will you verify each scenario?",
        "Edge Case Consideration: Think about unusual but possible scenarios: What if the database is unavailable?, What if a user submits malformed data?, What if the same email is submitted simultaneously from different requests?"
      ],
      "code": `
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: 'Email already exists' });
        }
        // Continue with registration...
      } catch (error) {
        if (error.code === 11000) { // Duplicate key error (race condition)
          return res.status(409).json({ message: 'Email already exists' });
        }
        next(error); // Other database errors
      }
      `,
      "moreText": ""
    },
    {
      "title": "Production Readiness Thinking",
      "subtitle": "Environment Awareness",
      "text": "",
      "details": [
        "Development vs Production Mindset: Development environments are like a practice kitchen where mistakes are learning opportunities. Production environments are like a restaurant kitchen where mistakes affect real customers.",
        "Configuration Management: Different environments need different settings, but the code should be the same. This is like having the same recipe but adjusting ingredient quantities based on how many people you're serving."
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Monitoring and Observability",
      "text": "",
      "details": [
        "Proactive vs Reactive Monitoring: Don't wait for users to tell you something's broken. Implement logging and monitoring that helps you identify problems before they affect users.",
        "Debugging Information Strategy: Log enough information to diagnose problems, but not so much that you overwhelm yourself or expose sensitive data. It's like taking notes during a phone call - capture the important details without writing down everything."
      ],
      "code": `
      const logger = {
        info: (message, meta) => console.log(JSON.stringify({ level: 'info', message, ...meta })),
        error: (message, error) => console.error(JSON.stringify({ 
          level: 'error', 
          message, 
          stack: error.stack,
          timestamp: new Date().toISOString()
        }))
      };

      // In your controller
      logger.info('User registration attempt', { email: req.body.email });
      // Never log: passwords, tokens, sensitive data
      `,
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Scalability Preparation",
      "text": "",
      "details": [
        "Growth Planning: Design your system assuming it will grow. This doesn't mean over-engineering everything, but making choices that won't require complete rewrites when you have more users.",
        "Bottleneck Identification: Understand where your system is likely to slow down first: Database queries, External API calls, CPU-intensive operations, Memory usage"
      ],
      "moreText": ""
    },
    {
      "title": "Key Takeaways",
      "subtitle": "Security First Mindset",
      "text": "",
      "details": [
        "Never trust input from outside your system",
        "Use multiple layers of validation and verification",
        "Keep sensitive data (like passwords) secure at all times",
        "Plan for the worst-case scenario (data breaches, system compromise)"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Code Quality Principles",
      "text": "",
      "details": [
        "Write code that tells a story (clear variable names, logical flow)",
        "Separate concerns (each function/module has one responsibility)",
        "Handle errors gracefully (plan for things to go wrong)",
        "Be consistent in your approaches and conventions"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "System Design Thinking",
      "text": "",
      "details": [
        "Design for the user experience (fast, reliable, secure)",
        "Plan for scale (even if you don't need it immediately)",
        "Make debugging and maintenance easier for your future self",
        "Document your decisions and reasoning"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Continuous Learning Approach",
      "text": "",
      "details": [
        "Understand the 'why' behind best practices, not just the 'how'",
        "Stay curious about new approaches and technologies",
        "Learn from others' mistakes and experiences",
        "Practice implementing these concepts in different contexts"
      ],
      "moreText": ""
    },
    {
      "title": "Beyond This Exercise",
      "subtitle": "Next Level Concepts to Explore",
      "text": "",
      "details": [
        "Rate limiting: Protecting your API from abuse",
        "Token rotation: Advanced security through changing tokens",
        "Role-based access control: Fine-grained permission systems",
        "OAuth integration: Allowing users to login with third-party services",
        "Multi-factor authentication: Adding extra security layers",
        "Session management: Handling multiple device logins",
        "API versioning: Managing changes without breaking existing clients"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Real-World Considerations",
      "text": "",
      "details": [
        "Compliance requirements: GDPR, CCPA, and other privacy regulations",
        "Accessibility: Making your authentication work for all users",
        "Internationalization: Supporting users in different countries and languages",
        "Analytics and metrics: Understanding how your authentication system performs",
        "Business logic: Integrating authentication with subscription models, user roles, etc."
      ],
      "moreText": "This exercise is a foundation. The concepts you learn here apply to much more than just user registration - they're fundamental to building secure, scalable web applications."
    }
    ],
  },
{
  "taskId": "ecom8",
  "content": [
    {
      "title": "Express Middleware Pipeline Architecture",
      "subtitle": "Understanding Request Processing Flow",
      "details": [
        "Sequential Execution Model: Think of middleware like airport security checkpoints. Every passenger (HTTP request) must pass through each checkpoint in order: ticket verification, security scan, gate check. If any checkpoint fails, the passenger doesn't continue.",
        "Control Flow Mechanism: Each middleware function receives three parameters: req (request data), res (response object), and next (continuation function). Calling next() passes control to the next middleware, while sending a response ends the pipeline.",
        "Order Dependency Critical: Middleware order matters because each function can modify the request object for subsequent middleware. Body parsing must happen before route handlers need req.body, and error handlers must be last to catch all failures."
      ],
      "text": "",
      "moreText": "Understanding this pipeline is crucial because improper ordering causes subtle bugs that are hard to debug in production."
    },
    {
      "title": "",
      "subtitle": "Middleware Types and Their Purposes",
      "details": [
        "Application-level middleware: Runs for every request to the application, handles cross-cutting concerns like CORS, logging, and body parsing",
        "Router-level middleware: Attached to specific routes or route groups, handles authentication, validation, and route-specific logic",
        "Built-in middleware: Express provides cors(), express.json(), express.static() for common functionality",
        "Third-party middleware: External packages like morgan for logging, helmet for security headers"
      ],
      "text": "",
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "",
      "text": "URL Encoding Deep Dive:",
      "details": [
        "Form Data Format: HTML forms send data as 'name=John%20Doe&email=john%40test.com' where %20 is space and %40 is @",
        "Extended vs Simple: extended: true uses qs library supporting nested objects, extended: false uses querystring for flat data only",
        "Memory Implications: URL-encoded parsing creates JavaScript objects in memory, consider payload size limits for large forms",
        "Security Considerations: Always validate parsed form data as it comes from untrusted client sources"
      ],
      "code": `
      app.use(express.urlencoded({ extended: true, limit: '10mb' }));
      `,
      "moreText": ""
    },
    {
      "title": "MVC Architecture Philosophy",
      "subtitle": "Separation of Concerns in Practice",
      "text": "",
      "details": [
        "Model Responsibilities: Define data structure, implement business rules, handle database operations, ensure data integrity and validation",
        "View Responsibilities: In API context, this is the JSON response format and structure sent to frontend clients",
        "Controller Responsibilities: Handle HTTP communication, orchestrate business logic, validate input, format responses, manage error flow",
        "Why Separation Matters: Each layer can be tested independently, team members can work on different parts simultaneously, changes in one layer don't require changes in others"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "File Organization Strategy",
      "text": "",
      "details": [
        "Modular File Structure: Each feature gets its own directory with routes, controllers, and models grouped logically",
        "Import/Export Patterns: Use ES6 modules with explicit file extensions for Node.js compatibility",
        "Dependency Management: Controllers import models, routes import controllers, main app imports routes"
      ],
      "code": `
      // routes/authRoutes.js
      import express from 'express';
      import { register, login } from '../controllers/authController.js';

      const router = express.Router();
      router.post('/register', register);
      router.post('/login', login);

      export default router;
`,
      "moreText": ""
    },
    {
      "title": "Error Handling Architecture",
      "subtitle": "Centralized Error Management",
      "text": "",
      "details": [
        "Express Error Handling: Error middleware must have exactly four parameters (err, req, res, next) and be placed after all other middleware and routes",
        "Error Propagation: Use next(error) to pass errors to the error handler, never throw errors directly in async middleware",
        "Error Classification: Distinguish between operational errors (expected, like validation failures) and programmer errors (bugs in code)"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Production Error Strategies",
      "text": "",
      "details": [
        "Development vs Production: Show detailed stack traces in development, generic messages in production to avoid information leakage",
        "Logging Strategy: Log all errors with context (user ID, request ID, timestamp) but never log sensitive data like passwords or tokens",
        "Error Recovery: Implement graceful degradation where possible, return meaningful HTTP status codes"
      ],
      "code": `
      const errorHandler = (err, req, res, next) => {
        console.error('Error:', err.stack);
        
        if (process.env.NODE_ENV === 'production') {
          res.status(500).json({ message: 'Internal server error' });
        } else {
          res.status(500).json({ message: err.message, stack: err.stack });
        }
      };
      `,
      "moreText": ""
    },
    {
      "title": "API Testing Methodology",
      "subtitle": "Professional Development Workflow",
      "text": "",
      "details": [
        "Testing Pyramid: Unit tests (individual functions), Integration tests (API endpoints), End-to-end tests (complete user workflows)",
        "Manual Testing Tools: Thunder Client, Postman, or curl for immediate feedback during development",
        "Test Data Management: Use separate test databases, create reproducible test scenarios, clean up test data after runs"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "HTTP Status Code Psychology",
      "text": "",
      "details": [
        "2xx Success Codes: 200 (OK for GET), 201 (Created for POST), 204 (No Content for DELETE)",
        "4xx Client Errors: 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 409 (Conflict)",
        "5xx Server Errors: 500 (Internal Server Error), 503 (Service Unavailable)"
      ],
      "code": `
      // Testing with Thunder Client
      // POST localhost:5001/api/auth/register
      // Headers: Content-Type: application/json
      // Body: {
      //   "name": "John Doe",
      //   "email": "john@test.com",
      //   "password": "secure123"
      // }
      `,
      "moreText": ""
    },
    {
      "title": "Database Integration Patterns",
      "subtitle": "MongoDB with Mongoose ODM",
      "text": "",
      "details": [
        "Connection Management: Establish single connection pool, handle connection errors gracefully, implement reconnection logic",
        "Schema Design: Define clear data types, implement validation rules, use appropriate indexes for query performance",
        "Query Optimization: Use projection to fetch only needed fields, implement pagination for large datasets, monitor slow queries"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Validation Strategy",
      "text": "",
      "details": [
        "Client-side Validation: User experience enhancement, provides immediate feedback, should never be trusted for security",
        "Server-side Validation: Security boundary, validate all input data, sanitize to prevent injection attacks",
        "Database Validation: Final integrity check, enforce business rules, handle constraint violations"
      ],
      "code": `
      const userSchema = new mongoose.Schema({
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
          lowercase: true,
          validate: [validator.isEmail, 'Invalid email format']
        }
      });
      `,
      "moreText": ""
    },
    {
      "title": "Security Fundamentals",
      "subtitle": "Defense in Depth Strategy",
      "text": "",
      "details": [
        "Input Validation: Never trust data from clients, validate data types and formats, sanitize input to prevent injection attacks",
        "Authentication vs Authorization: Authentication verifies identity ('who are you?'), Authorization controls access ('what can you do?')",
        "Password Security: Never store plain text passwords, use strong hashing algorithms like bcrypt with appropriate salt rounds"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "HTTPS and Transport Security",
      "text": "",
      "details": [
        "Encryption in Transit: All authentication data must travel over HTTPS, certificates must be valid and up-to-date",
        "Security Headers: Implement CORS properly, use helmet middleware for security headers, set appropriate content security policies",
        "Cookie Security: Use httpOnly flags to prevent XSS, secure flag for HTTPS-only, sameSite to prevent CSRF"
      ],
      "moreText": ""
    },
    {
      "title": "Asynchronous Programming Patterns",
      "subtitle": "Managing Async Operations",
      "text": "",
      "details": [
        "Promise vs Async/Await: Promises chain with .then(), async/await provides cleaner syntax, both handle asynchronous operations",
        "Error Handling in Async Code: Use try-catch blocks with async/await, handle both synchronous and asynchronous errors",
        "Concurrency Control: Be careful with Promise.all() for parallel operations, understand when operations need to be sequential"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Memory and Performance Considerations",
      "text": "",
      "details": [
        "Memory Management: JavaScript garbage collection is automatic but not immediate, avoid memory leaks by clearing references",
        "Database Connection Pooling: Reuse connections instead of creating new ones, monitor connection pool size and usage",
        "Response Time Optimization: Minimize database queries, use appropriate indexes, implement caching where beneficial"
      ],
      "code": `
      // Efficient database query
      const user = await User.findOne({ email }).select('-password -__v');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      `,
      "moreText": ""
    },
    {
      "title": "Environment Configuration",
      "subtitle": "Development vs Production Settings",
      "text": "",
      "details": [
        "Environment Variables: Store sensitive configuration outside source code, use different values for different environments",
        "Configuration Management: Load environment variables at application startup, validate required configuration exists",
        "Security Secrets: Use strong, unique secrets for different environments, rotate secrets regularly"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Deployment Considerations",
      "text": "",
      "details": [
        "Process Management: Use process managers like PM2 for production, implement graceful shutdown handling",
        "Logging Strategy: Structured logging with appropriate levels, log rotation to prevent disk space issues",
        "Monitoring and Alerting: Track application performance, monitor error rates, set up alerts for critical issues"
      ],
      "code": `
      // Environment variable usage
      const PORT = process.env.PORT || 5001;
      const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/myapp';
      const JWT_SECRET = process.env.JWT_SECRET;

      if (!JWT_SECRET) {
        throw new Error('JWT_SECRET environment variable is required');
      }
      `,
      "moreText": ""
    },
    {
      "title": "Code Quality and Maintainability",
      "subtitle": "Writing Professional Code",
      "text": "",
      "details": [
        "Naming Conventions: Use descriptive variable names, be consistent across the codebase, follow JavaScript naming conventions",
        "Function Design: Keep functions small and focused, use pure functions where possible, minimize side effects",
        "Code Documentation: Comment complex logic, document API endpoints, maintain README files"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Team Development Practices",
      "text": "",
      "details": [
        "Version Control: Use meaningful commit messages, create feature branches, review code before merging",
        "Code Standards: Implement linting rules, use consistent formatting, establish coding conventions",
        "Testing Culture: Write tests for critical paths, maintain test coverage, automate testing in CI/CD"
      ],
      "moreText": ""
    },
    {
      "title": "Scalability Planning",
      "subtitle": "Designing for Growth",
      "text": "",
      "details": [
        "Stateless Design: Don't store user session data in server memory, use databases or external caches for shared state",
        "Database Scaling: Implement proper indexing strategies, consider read replicas for read-heavy workloads, plan for data partitioning",
        "API Design: Version your APIs for backward compatibility, implement rate limiting to prevent abuse, design consistent response formats"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Performance Optimization",
      "text": "",
      "details": [
        "Database Query Optimization: Use indexes effectively, implement pagination for large datasets, monitor slow query logs",
        "Response Time Management: Set appropriate timeout values, implement caching strategies, minimize data transfer",
        "Resource Management: Monitor memory usage, implement connection pooling, handle resource cleanup properly"
      ],
      "code": `
      // Pagination implementation
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const users = await User.find({})
        .select('-password')
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });
      `,
      "moreText": ""
    },
    {
      "title": "Common Pitfalls and Solutions",
      "subtitle": "Learning from Mistakes",
      "text": "",
      "details": [
        "Callback Hell: Use async/await instead of nested callbacks, implement proper error handling for async operations",
        "Memory Leaks: Clear event listeners, close database connections, avoid circular references",
        "Security Vulnerabilities: Validate all input, use parameterized queries, implement rate limiting"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Debugging Strategies",
      "text": "",
      "details": [
        "Logging Best Practices: Log at appropriate levels, include context information, avoid logging sensitive data",
        "Error Tracking: Use error monitoring tools, implement structured error reporting, maintain error documentation",
        "Development Tools: Use debugger effectively, implement health check endpoints, monitor application metrics"
      ],
      "code": `
      // Structured error logging
      const logError = (error, context = {}) => {
        console.error({
          timestamp: new Date().toISOString(),
          level: 'error',
          message: error.message,
          stack: error.stack,
          ...context
        });
      };
      `,
      "moreText": ""
    },
    {
      "title": "Next Level Concepts",
      "subtitle": "Advanced Authentication Features",
      "text": "",
      "details": [
        "JWT Token Management: Implement refresh token rotation, handle token expiration gracefully, implement logout functionality",
        "Role-based Access Control: Design permission systems, implement middleware for authorization, handle complex permission scenarios",
        "OAuth Integration: Understand OAuth 2.0 flow, implement third-party authentication, handle OAuth security considerations",
        "Multi-factor Authentication: Implement TOTP or SMS verification, design backup authentication methods"
      ],
      "moreText": ""
    },
    {
      "title": "",
      "subtitle": "Production Authentication Systems",
      "text": "",
      "details": [
        "Session Management: Handle multiple device logins, implement session invalidation, track active sessions",
        "Account Security: Implement account lockout policies, password reset workflows, security audit logs",
        "Compliance Considerations: Understand GDPR requirements, implement data retention policies, handle user data deletion requests"
      ],
      "moreText": "These advanced concepts build on the foundation you're learning now. Master the basics first, then gradually add complexity."
    }
  ]
},
{
  "taskId": "ecom9",
  "content": [
    {
      "title": "Login Endpoint Fundamentals",
      "subtitle": "Understanding User Authentication",
      "details": [
        "Core Concept: The login endpoint verifies user identity using email and password, issuing JSON Web Tokens (JWTs) for secure API access.",
        "Authentication Flow: Validate input, verify credentials against stored data, generate tokens, and securely store a refresh token in a cookie.",
        "Key Components: User model with bcrypt password hashing, JWT for token generation, Express for routing, and MongoDB for data storage.",
        "Why It Matters: Secure authentication ensures only authorized users access protected resources, critical for e-commerce platforms."
      ],
      "text": "",
      "moreText": "This endpoint builds on the registration system, reusing the generateTokens function for consistency and security."
    },
    {
      "title": "",
      "subtitle": "Input Validation Essentials",
      "details": [
        "Purpose: Ensure email and password are provided to prevent incomplete or malicious requests.",
        "Implementation: Destructure email and password from req.body and check for their presence.",
        "Error Handling: Return a 400 Bad Request status with a clear message if validation fails.",
        "Security Note: Input validation is the first line of defense against injection attacks and bad data."
      ],
      "code": `
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
      `,
      "moreText": "Always validate inputs early to avoid unnecessary database queries."
    },
    {
      "title": "",
      "subtitle": "Credential Verification with Bcrypt",
      "details": [
        "User Lookup: Use Mongoose’s findOne({ email }).select('+password') to retrieve the user and their hashed password.",
        "Password Comparison: Leverage bcrypt’s comparePassword method to securely compare the input password with the stored hash.",
        "Error Response: Return a 401 Unauthorized status if the user doesn’t exist or the password is incorrect.",
        "Why .select('+password')?: The User schema typically hides the password field (select: false), so this explicitly includes it."
      ],
      "code": `
      const user = await User.findOne({ email }).select('+password');
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      `,
      "moreText": "Bcrypt’s comparePassword method is secure because it uses constant-time comparison to prevent timing attacks."
    },
    {
      "title": "JWT Token Generation",
      "subtitle": "Secure Token Creation",
      "details": [
        "Purpose: Generate access and refresh tokens to authenticate and maintain user sessions.",
        "Access Token: Contains user ID and role, signed with JWT_SECRET, expires in 15 minutes.",
        "Refresh Token: Contains only user ID, signed with JWT_REFRESH_SECRET, expires in 7 days.",
        "Implementation: Reuse the generateTokens function from the registration endpoint for consistency."
      ],
      "code": `
      const { accessToken, refreshToken } = generateTokens(user);
      `,
      "moreText": "Separate secrets for access and refresh tokens enhance security by limiting the impact of a compromised key."
    },
    {
      "title": "",
      "subtitle": "Secure Cookie Configuration",
      "details": [
        "Purpose: Store the refresh token in a cookie to securely maintain user sessions.",
        "Settings: Use httpOnly: true to prevent JavaScript access, secure: true in production for HTTPS, sameSite: 'strict' to prevent CSRF, and maxAge for 7 days.",
        "Security Benefit: HTTP-only cookies protect against cross-site scripting (XSS) attacks.",
        "Consistency: Match cookie settings with the registration endpoint for uniformity."
      ],
      "code": `
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
      });
      `,
      "moreText": "Cookies are a secure way to store refresh tokens, as they’re inaccessible to client-side scripts."
    },
    {
      "title": "Response Structure",
      "subtitle": "Crafting a Secure API Response",
      "details": [
        "Status Code: Use 200 OK to indicate a successful login.",
        "Response Body: Return accessToken and a user object with non-sensitive fields (id, name, email, role, addresses).",
        "Security Practice: Exclude sensitive data like passwords from the response to prevent accidental leakage.",
        "User Experience: Provide clear, structured data for the frontend to consume."
      ],
      "code": `
      res.json({
        accessToken,
        user: {
          id: user._id,
          name: user.name,
          email,
          role: user.role,
          addresses: user.addresses
        }
      });
      `,
      "moreText": "Structured responses improve frontend integration and maintain API consistency."
    },
    {
      "title": "",
      "subtitle": "Error Handling Best Practices",
      "details": [
        "Try-Catch Block: Encapsulate login logic to catch database or token generation errors.",
        "Error Propagation: Use next(error) to pass errors to the centralized error handler in server.js.",
        "Common Errors: Handle validation errors (400), authentication failures (401), and server issues (500).",
        "Debugging Tip: Log errors server-side but avoid exposing sensitive details in production responses."
      ],
      "code": `
      try {
        // login logic
      } catch (error) {
        next(error);
      }
      `,
      "moreText": "Centralized error handling simplifies debugging and ensures consistent error responses."
    },
    {
      "title": "Routing Setup",
      "subtitle": "Integrating the Login Endpoint",
      "details": [
        "Route File: Add the login route to server/routes/authRoutes.js to handle POST /api/auth/login.",
        "Import Strategy: Import the login function from authController.js using ES modules.",
        "Route Consistency: Ensure the /login route aligns with the existing /register route under /api/auth.",
        "Purpose: Modular routing keeps the codebase organized and maintainable."
      ],
      "code": `
      import express from 'express';
      import { register, login } from '../controllers/authController.js';
      const router = express.Router();
      router.post('/register', register);
      router.post('/login', login);
      export default router;
      `,
      "moreText": "Mount routes in server.js with app.use('/api/auth', authRoutes) for a clean API structure."
    },
    {
      "title": "Testing Strategy",
      "subtitle": "Validating the Login Endpoint",
      "details": [
        "Tool: Use Thunder Client in VS Code for quick, interactive API testing.",
        "Success Test: Send a POST request with valid credentials to http://localhost:5001/api/auth/login.",
        "Error Tests: Verify 400 for missing fields and 401 for invalid credentials.",
        "Cookie Verification: Check that the refreshToken cookie is set with correct attributes (7-day expiry, HTTP-only)."
      ],
      "code": `
      // Thunder Client POST http://localhost:5001/api/auth/login
      // Headers: Content-Type: application/json
      // Body: {
      //   "email": "test@example.com",
      //   "password": "password123"
      // }
      `,
      "moreText": "Test with a registered user to ensure the endpoint works as expected."
    },
    {
      "title": "",
      "subtitle": "Environment Configuration",
      "details": [
        "Environment Variables: Define PORT, MONGO_URI, JWT_SECRET, JWT_REFRESH_SECRET, and BCRYPT_SALT_ROUNDS in .env.",
        "Secret Generation: Use 'openssl rand -base64 32' for secure, unique JWT secrets.",
        "Loading Variables: Import dotenv in server.js to load .env at startup.",
        "Security Practice: Add .env to .gitignore to protect sensitive configuration."
      ],
      "code": `
      PORT=5001
      MONGO_URI=<your-mongodb-uri>
      JWT_SECRET=your_jwt_secret_here
      JWT_REFRESH_SECRET=your_refresh_secret_here
      BCRYPT_SALT_ROUNDS=10
      `,
      "moreText": "Secure environment variables are critical for protecting sensitive data."
    },
    {
      "title": "Troubleshooting Tips",
      "subtitle": "Resolving Common Issues",
      "details": [
        "404 Not Found: Ensure /login route is defined in authRoutes.js and mounted in server.js.",
        "401 Unauthorized: Confirm user exists in the database and .select('+password') is included.",
        "500 Server Error: Verify JWT secrets in .env and MongoDB connection via MONGO_URI.",
        "Debugging Strategy: Check server logs for detailed error messages and stack traces."
      ],
      "text": "",
      "moreText": "Consistent logging and testing help identify issues quickly during development."
    },
    {
      "title": "Security Considerations",
      "subtitle": "Protecting the Login Endpoint",
      "details": [
        "Password Security: Use bcrypt for secure password hashing and comparison to prevent brute-force attacks.",
        "Token Security: Store refresh tokens in HTTP-only cookies to mitigate XSS risks.",
        "Rate Limiting: Consider adding rate limiting to prevent brute-force login attempts.",
        "HTTPS: Ensure the endpoint is served over HTTPS in production to encrypt data in transit."
      ],
      "text": "",
      "moreText": "Layered security practices protect user data and maintain trust in the application."
    },
    {
      "title": "",
      "subtitle": "Performance Optimization",
      "details": [
        "Efficient Queries: Use .select('+password') to fetch only necessary fields from MongoDB.",
        "Minimize Overhead: Validate inputs early to avoid unnecessary database calls.",
        "Connection Management: Reuse MongoDB connection pool to reduce latency.",
        "Scalability Tip: Implement indexing on the email field for faster user lookups."
      ],
      "code": `
      // Example index in User schema
      userSchema.index({ email: 1 }, { unique: true });
      `,
      "moreText": "Optimizing database queries improves response times for high-traffic endpoints."
    }
  ]
},
{
  "taskId": "ecom10",
  "content": [
    {
      "title": "Understanding Middleware in Express",
      "subtitle": "The Backbone of Request Processing",
      "details": [
        "Definition: Middleware functions in Express process HTTP requests before route handlers, enabling tasks like authentication, logging, or input validation.",
        "How It Works: Middleware takes req (request), res (response), and next (to pass control) parameters, executing in a defined order.",
        "Use Cases: Verify user identity, check permissions, log requests, or modify response headers.",
        "Why It Matters: Middleware promotes modularity, keeping logic reusable and separate from business logic in controllers."
      ],
      "code": `
      // Example: Simple logging middleware
      const logger = (req, res, next) => {
        console.log(\`\${req.method} \${req.url}\`);
        next();
      };
      `,
      "moreText": "Middleware acts as a gatekeeper, preprocessing requests to ensure security and consistency in your API."
    },
    {
      "title": "",
      "subtitle": "JWT Authentication Basics",
      "details": [
        "What is JWT?: JSON Web Tokens are compact tokens with a header (algorithm), payload (user data), and signature for secure data exchange.",
        "Structure: Encoded as three base64 strings (header.payload.signature), signed with a secret key.",
        "Purpose: Enables stateless authentication, where the server verifies tokens without storing sessions, ideal for scalable APIs.",
        "Security Note: Short-lived access tokens reduce risk; refresh tokens allow secure session renewal."
      ],
      "code": `
      // Example: Generating a JWT
      const jwt = require('jsonwebtoken');
      const token = jwt.sign({ id: 'user123' }, 'secret-key', { expiresIn: '15m' });
      `,
      "moreText": "JWTs are a cornerstone of modern APIs, enabling secure, stateless authentication for e-commerce apps."
    },
    {
      "title": "",
      "subtitle": "Role-Based Access Control (RBAC)",
      "details": [
        "Definition: RBAC restricts access based on user roles (e.g., 'user' or 'admin'), ensuring users only perform authorized actions.",
        "Implementation: Store roles in the database and check them in middleware after verifying user identity.",
        "Benefits: Separates authentication (identity) from authorization (permissions), following the principle of least privilege.",
        "Example: Admins can manage products, while users can only view their orders."
      ],
      "code": `
      // Example: Role check
      const checkRole = (role) => (req, res, next) => {
        if (req.user.role !== role) {
          return res.status(403).json({ message: 'Access denied' });
        }
        next();
      };
      `,
      "moreText": "RBAC ensures sensitive operations, like admin tasks, are protected in e-commerce platforms."
    },
    {
      "title": "Token Verification Process",
      "subtitle": "Ensuring Secure Authentication",
      "details": [
        "Process: Middleware checks the Authorization header for a JWT, verifies its signature, and extracts user data (e.g., ID, role).",
        "Key Steps: Validate header format ('Bearer <token>'), verify token with secret key, and attach data to the request.",
        "Error Handling: Return 401 Unauthorized for missing or invalid tokens to prevent unauthorized access.",
        "Security Practice: Store secrets in environment variables, not in code, to prevent exposure."
      ],
      "code": `
      // Example: Basic token verification
      const verifyToken = (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: 'No token' });
        // Verify logic would go here
        next();
      };
      `,
      "moreText": "Token verification is the first step in securing API routes, ensuring only valid users proceed."
    },
    {
      "title": "",
      "subtitle": "Authorization with Roles",
      "details": [
        "Purpose: Restrict routes to users with specific roles, such as admins for managing sensitive data.",
        "Mechanism: After token verification, middleware checks the user’s role and grants or denies access.",
        "Error Handling: Use 403 Forbidden to indicate authenticated users lack sufficient permissions.",
        "Best Practice: Ensure authentication middleware runs before role checks to provide user data."
      ],
      "code": `
      // Example: Admin-only middleware
      const restrictToAdmin = (req, res, next) => {
        if (!req.user || req.user.role !== 'admin') {
          return res.status(403).json({ message: 'Admin access required' });
        }
        next();
      };
      `,
      "moreText": "Role-based checks add a critical layer of security for sensitive API operations."
    },
    {
      "title": "Middleware in the Request Pipeline",
      "subtitle": "How Middleware Fits In",
      "details": [
        "Pipeline Flow: Middleware executes sequentially before route handlers, allowing layered checks (e.g., authentication then authorization).",
        "Modularity: Store middleware in separate files (e.g., server/middleware/) to reuse across routes and keep controllers focused.",
        "Order Matters: Authentication middleware must run before role-based middleware to populate user data.",
        "Example: A user profile route uses authentication middleware, while an admin dashboard uses both."
      ],
      "code": `
      // Example: Applying middleware to a route
      app.get('/protected', verifyToken, (req, res) => {
        res.json({ message: 'Accessed protected route' });
      });
      `,
      "moreText": "A well-organized middleware pipeline enhances code clarity and API scalability."
    },
    {
      "title": "",
      "subtitle": "Security Best Practices",
      "details": [
        "HTTPS: Serve APIs over HTTPS to encrypt token transmission and prevent interception.",
        "Secure Secrets: Store JWT secrets in environment variables (e.g., .env) and exclude from version control.",
        "Token Expiry: Use short-lived access tokens (e.g., 15 minutes) to limit exposure if compromised.",
        "Rate Limiting: Apply rate limiting to protected routes to mitigate brute-force attacks."
      ],
      "code": `
      // Example: Loading environment variables
      require('dotenv').config();
      const secret = process.env.JWT_SECRET;
      `,
      "moreText": "Layered security practices protect user data and maintain trust in your application."
    },
    {
      "title": "",
      "subtitle": "Testing Middleware",
      "details": [
        "Purpose: Validate middleware to ensure it correctly handles tokens and role restrictions.",
        "Approach: Use API testing tools to send requests with valid, invalid, or missing tokens.",
        "Test Cases: Check for 200 OK (valid tokens), 401 (invalid/missing tokens), and 403 (insufficient permissions).",
        "Best Practice: Create test routes to isolate middleware behavior during development."
      ],
      "code": `
      // Example: Test route for middleware
      app.get('/test', verifyToken, (req, res) => {
        res.json({ user: req.user });
      });
      `,
      "moreText": "Testing ensures middleware enforces security reliably across all scenarios."
    },
    {
      "title": "",
      "subtitle": "Troubleshooting Middleware",
      "details": [
        "401 Unauthorized: Verify the Authorization header format and ensure the secret key matches the one used for token generation.",
        "403 Forbidden: Confirm authentication middleware runs first and the user’s role matches the required permission.",
        "Configuration Errors: Check that environment variables are loaded and dependencies are installed.",
        "Debugging Tip: Log errors server-side with timestamps and context for easier issue resolution."
      ],
      "code": `
      // Example: Logging errors
      console.error('Error:', { message: error.message, timestamp: new Date() });
      `,
      "moreText": "Effective debugging keeps middleware robust and production-ready."
    },
    {
      "title": "",
      "subtitle": "Performance Considerations",
      "details": [
        "Stateless Authentication: JWTs eliminate server-side session storage, reducing memory usage and scaling well.",
        "Efficient Verification: Token verification is lightweight, avoiding database queries for authentication.",
        "Database Optimization: Index fields like email in related schemas to speed up queries in other parts of the app.",
        "Scalability Tip: Combine middleware with caching or load balancing for high-traffic APIs."
      ],
      "code": `
      // Example: Indexing a schema field
      userSchema.index({ email: 1 }, { unique: true });
      `,
      "moreText": "Optimizing middleware ensures your API performs well under heavy load."
    }
  ]
},
{
  "taskId": "ecom11",
  "content": [
    {
      "title": "User Profile Endpoint",
      "subtitle": "Retrieving Authenticated User Data",
      "details": [
        "Purpose: Allows users to fetch their profile (name, email, addresses) using a valid JWT.",
        "Mechanics: Queries the database by user ID from the JWT, excluding sensitive data like passwords.",
        "Security: Protected by middleware to verify the JWT, ensuring only authenticated users access it.",
        "Response: Returns a JSON object with user details, matching the format of registration responses."
      ],
      "code": `
      // Example: Fetch user data
      const user = await User.findById(userId).select('-password');
      res.json({ user });
      `,
      "moreText": "Profile endpoints enable personalized user experiences in e-commerce apps, like displaying account details."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Creates secure keys for signing JWTs to ensure token integrity.",
        "Mechanics: Uses a cryptographic function to generate random, unique strings for access and refresh tokens.",
        "Security: Keys must be long, random, and stored in environment variables to prevent exposure.",
        "Importance: Ensures tokens can’t be forged, protecting user authentication."
      ],
      "code": `
      // Example: Generate a secret key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(32).toString('hex');
      `,
      "moreText": "Secure JWT keys are the foundation of safe authentication in API-driven applications."
    },
    {
      "title": "",
      "subtitle": "Logout Functionality",
      "details": [
        "Purpose: Ends a user’s session by invalidating their refresh token.",
        "Mechanics: Clears the refresh token cookie, preventing further token refreshes.",
        "Settings: Uses secure cookie attributes (httpOnly, secure) to match registration settings.",
        "Response: Sends a success message to confirm the session is terminated."
      ],
      "code": `
      // Example: Clear a cookie
      res.clearCookie('token', { httpOnly: true });
      res.json({ message: 'Logged out' });
      `,
      "moreText": "Logout ensures users can securely end sessions, protecting accounts from unauthorized access."
    },
    {
      "title": "",
      "subtitle": "Protecting Routes with Middleware",
      "details": [
        "Purpose: Restricts access to endpoints like /me to authenticated users only.",
        "Mechanics: Middleware verifies the JWT in the Authorization header, attaching user data to the request.",
        "Error Handling: Returns 401 for invalid or missing tokens, ensuring security.",
        "Importance: Prevents unauthorized access to sensitive user data."
      ],
      "code": `
      // Example: Middleware check
      const verifyToken = (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'No token' });
        // Verify token
        next();
      };
      `,
      "moreText": "Middleware is key to securing API routes, ensuring only valid users access protected endpoints."
    },
    {
      "title": "",
      "subtitle": "Routing in Express",
      "details": [
        "Purpose: Maps HTTP requests (GET, POST) to specific controller functions.",
        "Mechanics: Defines routes in a router file, linking endpoints to handlers like getMe or logout.",
        "Structure: Uses a modular router to keep routes organized and reusable.",
        "Example: GET /me calls a profile function, while POST /logout triggers logout logic."
      ],
      "code": `
      // Example: Define a route
      router.get('/profile', middleware, handler);
      `,
      "moreText": "Routing organizes API endpoints, making it easy to manage user interactions in an e-commerce app."
    },
    {
      "title": "Testing Authentication Endpoints",
      "subtitle": "Validating with Thunder Client",
      "details": [
        "Purpose: Ensures endpoints like /me and /logout work as expected.",
        "Mechanics: Uses Thunder Client to send HTTP requests and check responses.",
        "Test Cases: Verify valid responses (e.g., user data for /me) and errors (e.g., 401 for invalid tokens).",
        "Cookies: Checks that logout clears the refresh token cookie correctly."
      ],
      "code": `
      // Example: Thunder Client request
      GET http://localhost:5001/api/auth/me
      Authorization: Bearer <token>
      `,
      "moreText": "Testing with tools like Thunder Client confirms API reliability and security."
    },
    {
      "title": "",
      "subtitle": "Cookie Management in Authentication",
      "details": [
        "Purpose: Stores refresh tokens securely for session management.",
        "Mechanics: Sets cookies with httpOnly, secure, and sameSite attributes to prevent client-side access.",
        "Logout: Clears cookies by setting them to expire, ensuring session termination.",
        "Consistency: Matches cookie settings across registration, login, and logout."
      ],
      "code": `
      // Example: Set a secure cookie
      res.cookie('token', value, { httpOnly: true, secure: true });
      `,
      "moreText": "Secure cookie management protects user sessions in authentication flows."
    },
    {
      "title": "",
      "subtitle": "Error Handling in Controllers",
      "details": [
        "Purpose: Manages errors in functions like getMe and logout to prevent crashes.",
        "Mechanics: Uses try-catch blocks to capture errors and pass them to middleware.",
        "Responses: Returns clear status codes (e.g., 404 for user not found, 401 for unauthorized).",
        "Importance: Ensures the API remains stable and provides useful feedback."
      ],
      "code": `
      // Example: Error handling
      try {
        // Logic here
      } catch (error) {
        next(error);
      }
      `,
      "moreText": "Effective error handling improves API reliability and user experience."
    },
    {
      "title": "",
      "subtitle": "JWT-Based Authentication",
      "details": [
        "Purpose: Verifies user identity without server-side session storage.",
        "Mechanics: JWTs carry user data (e.g., ID, role) and are validated by middleware.",
        "Security: Short-lived access tokens (e.g., 15 minutes) reduce risk if compromised.",
        "Use Case: Enables secure access to endpoints like /me in e-commerce apps."
      ],
      "code": `
      // Example: Generate a JWT
      const token = jwt.sign({ id: 'user123' }, 'secret', { expiresIn: '15m' });
      `,
      "moreText": "JWTs provide a scalable, stateless way to authenticate users in modern APIs."
    },
    {
      "title": "",
      "subtitle": "Database Queries for User Data",
      "details": [
        "Purpose: Retrieves user information for endpoints like /me.",
        "Mechanics: Queries the database by user ID, excluding sensitive fields like passwords.",
        "Optimization: Uses select to exclude fields, reducing data transfer.",
        "Error Handling: Returns 404 if the user is not found, ensuring clear feedback."
      ],
      "code": `
      // Example: Query user
      const user = await User.findById(id).select('-password');
      `,
      "moreText": "Efficient database queries ensure fast, secure access to user data in APIs."
    }
  ]
},
{
  "taskId": "ecom12",
  "content": [
    {
      "title": "User Profile Management",
      "subtitle": "Fetching Current User's Profile",
      "details": [
        "Purpose: Enables users to view their personal details, fostering self-service in applications like account dashboards.",
        "Mechanics: Query a database with the authenticated user's identifier, filtering out sensitive fields to maintain security.",
        "Security: Use middleware to verify user identity, ensuring only authorized access to profile data.",
        "Response: Deliver data in a structured format (e.g., JSON) with clear error handling for cases like missing users."
      ],
      "code": `
      // Example: Fetching a user profile
      const user = await UserModel.findById(authUserId).select('-sensitiveField');
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json({ profile: user });
      `,
      "moreText": "Learning to fetch profiles teaches secure data retrieval, balancing user access with privacy."
    },
    {
      "title": "",
      "subtitle": "Updating User Profile",
      "details": [
        "Purpose: Allows users to modify their information, keeping data current and enhancing personalization.",
        "Mechanics: Validate and collect input fields, apply updates atomically, and return the updated record.",
        "Security: Restrict to authenticated users; handle sensitive fields (e.g., passwords) with proper preprocessing.",
        "Response: Provide updated data or clear error messages for invalid inputs to guide the user."
      ],
      "code": `
      // Example: Updating user data
      const updates = {};
      if (input.field) updates.field = input.field;
      if (!Object.keys(updates).length) return res.status(400).json({ error: 'No fields provided' });
      const updated = await UserModel.findByIdAndUpdate(authUserId, updates, { new: true });
      `,
      "moreText": "Profile updates introduce concepts of data validation and secure mutations in backend systems."
    },
    {
      "title": "",
      "subtitle": "Fetching User by ID (Admin Only)",
      "details": [
        "Purpose: Supports administrative oversight by allowing access to any user's data for management tasks.",
        "Mechanics: Query by a provided ID, excluding sensitive fields, with checks for valid data.",
        "Security: Enforce role-based access control (RBAC) using middleware to limit to admin users.",
        "Response: Return user data in a consistent format; handle invalid IDs with appropriate errors."
      ],
      "code": `
      // Example: Admin fetching user by ID
      const user = await UserModel.findById(targetId).select('-sensitiveField');
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json({ user });
      `,
      "moreText": "Admin access teaches RBAC, a cornerstone of secure, role-differentiated systems."
    },
    {
      "title": "",
      "subtitle": "Setting Up User Routes",
      "details": [
        "Purpose: Organizes API endpoints for user operations, promoting clean and scalable code.",
        "Mechanics: Create a router to define HTTP methods and paths, applying middleware for protection.",
        "Structure: Use RESTful conventions for intuitive endpoint design (e.g., GET for retrieval, PATCH for updates).",
        "Export: Ensure the router is reusable across the application for modularity."
      ],
      "code": `
      // Example: Defining user routes
      const router = express.Router();
      router.get('/profile', authMiddleware, fetchProfileHandler);
      router.patch('/profile', authMiddleware, updateProfileHandler);
      `,
      "moreText": "Routing lessons emphasize RESTful API design, critical for modern web development."
    },
    {
      "title": "",
      "subtitle": "Integrating Routes into Server",
      "details": [
        "Purpose: Connects user endpoints to the main application, enabling access via HTTP.",
        "Mechanics: Import the router and mount it under a base path to namespace endpoints.",
        "Verification: Check for conflicts with other routes and ensure middleware is correctly applied.",
        "Importance: Links controllers to the server, completing the API setup."
      ],
      "code": `
      // Example: Mounting routes
      import userRouter from './routes/userRouter.js';
      app.use('/api/users', userRouter);
      `,
      "moreText": "Route integration teaches modular server setup, key for large-scale applications."
    },
    {
      "title": "Endpoint Testing",
      "subtitle": "Testing GET Profile Endpoint",
      "details": [
        "Purpose: Validates profile retrieval functionality across success and failure scenarios.",
        "Mechanics: Use an API client to send authenticated requests and inspect responses.",
        "Error Cases: Test for unauthorized access or missing data to ensure robust security.",
        "Setup: Start the server and generate valid authentication tokens."
      ],
      "code": `
      // Example: Testing profile fetch
      GET http://localhost:port/api/users/profile
      Authorization: Bearer your_token
      `,
      "moreText": "Testing endpoints builds skills in quality assurance and debugging APIs."
    },
    {
      "title": "",
      "subtitle": "Testing PATCH Profile Update",
      "details": [
        "Purpose: Confirms users can update their data with proper validation and security.",
        "Mechanics: Send requests with data payloads and auth headers; verify response accuracy.",
        "Error Cases: Check for empty updates or invalid credentials to test error handling.",
        "Setup: Use existing tokens and test incremental changes to fields."
      ],
      "code": `
      // Example: Testing profile update
      PATCH http://localhost:port/api/users/profile
      Authorization: Bearer your_token
      Body: { "field": "new_value" }
      `,
      "moreText": "Update testing reinforces validation and error handling in dynamic APIs."
    },
    {
      "title": "",
      "subtitle": "Testing GET User by ID (Admin)",
      "details": [
        "Purpose: Ensures admin-only endpoints enforce access control and return correct data.",
        "Mechanics: Test with admin credentials and various IDs, checking for proper responses.",
        "Error Cases: Simulate non-admin access or invalid IDs to verify restrictions.",
        "Setup: Configure admin users and obtain their auth tokens."
      ],
      "code": `
      // Example: Testing admin user fetch
      GET http://localhost:port/api/users/some_id
      Authorization: Bearer admin_token
      `,
      "moreText": "Admin testing highlights the importance of secure authorization mechanisms."
    },
    {
      "title": "",
      "subtitle": "Error Handling in User Controllers",
      "details": [
        "Purpose: Ensures API stability by managing unexpected issues during execution.",
        "Mechanics: Use try-catch to capture errors and forward them to error-handling middleware.",
        "Responses: Provide specific status codes and messages for different error types.",
        "Importance: Enhances reliability and user experience by preventing crashes."
      ],
      "code": `
      // Example: Error handling structure
      try {
        // Controller logic
      } catch (err) {
        next(err);
      }
      `,
      "moreText": "Error handling is a critical skill for building robust and user-friendly APIs."
    },
    {
      "title": "",
      "subtitle": "Troubleshooting User Endpoints",
      "details": [
        "Purpose: Resolves common issues in API setup and operation for smooth development.",
        "Mechanics: Check configurations, logs, and connections systematically to identify problems.",
        "Common Fixes: Validate environment settings, route definitions, and database access.",
        "Tools: Leverage logging and debugging tools for deeper insights."
      ],
      "code": `
      // Example: Database connection check
      mongoose.connect(process.env.DB_URL);
      `,
      "moreText": "Troubleshooting skills turn challenges into opportunities to understand systems deeply."
    }
  ]
},
{
  "taskId": "ecom13",
  "content": [
    {
      "title": "Product Listing Endpoint",
      "subtitle": "Dynamic Product Retrieval with Filters and Pagination",
      "details": [
        "Purpose: Facilitates browsing of product catalogs by allowing users to filter by category, price range, or search terms, and navigate via pagination.",
        "Mechanics: Constructs a MongoDB query from URL parameters, applies sorting (e.g., by creation date), and uses skip/limit for paginated results.",
        "Optimization: Selects specific fields (e.g., name, price, category) to reduce data transfer, and sorts to prioritize recent products.",
        "Response Structure: Returns a JSON array of products alongside pagination metadata, including current page, limit, total items, and total pages."
      ],
      "code": `
      // Example: Query with pagination
      const products = await Product.find(query).sort('-createdAt').skip((page - 1) * limit).limit(limit);
      const total = await Product.countDocuments(query);
      `,
      "moreText": "Dynamic listing endpoints are critical for e-commerce, enabling efficient product discovery and scalable catalog management."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Ensures secure JWT signing for authentication in admin-related product endpoints (e.g., product creation).",
        "Mechanics: Employs cryptographic libraries to generate random, high-entropy strings for access and refresh tokens.",
        "Security Best Practices: Keys are stored in environment variables, never in source code, to prevent unauthorized access.",
        "Significance: Protects the integrity of authentication tokens, ensuring only authorized users can access protected routes."
      ],
      "code": `
      // Example: Generate secure key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Secure JWT keys form the backbone of API security, safeguarding user and admin interactions."
    },
    {
      "title": "",
      "subtitle": "Building Flexible MongoDB Queries",
      "details": [
        "Purpose: Enables tailored product searches based on user inputs like category, price ranges, or keywords.",
        "Mechanics: Dynamically builds a query object using conditional checks for parameters, incorporating MongoDB operators ($gte, $lte, $text).",
        "Text Search: Utilizes MongoDB’s text index to match search terms against product fields like name or description.",
        "Importance: Enhances user experience by delivering relevant results, crucial for effective product filtering."
      ],
      "code": `
      // Example: Dynamic query
      const query = {};
      if (category) query.category = category;
      if (search) query.$text = { $search: search };
      `,
      "moreText": "Flexible queries power intuitive search and filter systems, key to user-friendly e-commerce platforms."
    },
    {
      "title": "",
      "subtitle": "Implementing Pagination for Scalability",
      "details": [
        "Purpose: Manages large datasets by delivering products in manageable chunks, improving performance and usability.",
        "Mechanics: Calculates skip (based on page and limit) to offset results and limits the number of documents returned.",
        "Metadata: Computes total pages using total document count, aiding frontend navigation displays.",
        "Benefits: Reduces server load and speeds up responses, especially for extensive product catalogs."
      ],
      "code": `
      // Example: Pagination calculation
      const skip = (page - 1) * limit;
      const totalPages = Math.ceil(total / limit);
      `,
      "moreText": "Pagination is essential for scalable APIs, ensuring smooth browsing of large product sets."
    },
    {
      "title": "Product Details Endpoint",
      "subtitle": "Retrieving Comprehensive Product Information",
      "details": [
        "Purpose: Provides detailed data for a single product, supporting detailed views on product pages.",
        "Mechanics: Queries MongoDB by product ID, fetching fields like name, price, and ratings, with population of related data.",
        "Population: Links related documents (e.g., user details for ratings) to enrich the response.",
        "Error Handling: Returns a 404 status for non-existent IDs, ensuring clear feedback."
      ],
      "code": `
      // Example: Fetch product with population
      const product = await Product.findById(id).populate('ratings.user', 'name');
      `,
      "moreText": "Detailed product endpoints drive informed purchasing decisions in e-commerce applications."
    },
    {
      "title": "",
      "subtitle": "Route Mounting in Express",
      "details": [
        "Purpose: Organizes API endpoints under logical prefixes (e.g., /api/products) for clarity and scalability.",
        "Mechanics: Imports modular route files and mounts them in the main server file using Express’s app.use.",
        "Modularity: Separates product-related routes from authentication or user routes, enhancing maintainability.",
        "RESTful Design: Follows conventions by grouping endpoints under resource-based paths."
      ],
      "code": `
      // Example: Mount routes
      app.use('/api/products', productRoutes);
      `,
      "moreText": "Route mounting streamlines API organization, making it easier to manage growing e-commerce systems."
    },
    {
      "title": "",
      "subtitle": "Populating Related Data in MongoDB",
      "details": [
        "Purpose: Enriches responses by including related data, such as user information for product ratings.",
        "Mechanics: Uses Mongoose’s populate method to fetch referenced documents in a single query.",
        "Optimization: Selects specific fields (e.g., user name) to minimize data transfer and improve performance.",
        "Use Case: Displays reviewer names alongside ratings, enhancing product detail views."
      ],
      "code": `
      // Example: Populate related data
      await Product.findById(id).populate('ratings.user', 'name email');
      `,
      "moreText": "Population creates richer API responses, critical for detailed product information displays."
    },
    {
      "title": "",
      "subtitle": "Testing API Endpoints",
      "details": [
        "Purpose: Validates endpoint functionality, ensuring correct data retrieval and error handling.",
        "Mechanics: Uses tools like Thunder Client to send requests with varying parameters (e.g., filters, pagination).",
        "Test Scenarios: Includes valid cases (e.g., filtered lists) and errors (e.g., invalid IDs, empty results).",
        "Significance: Confirms reliability and correctness before deploying to production."
      ],
      "code": `
      // Example: Test request
      GET http://localhost:5001/api/products?category=electronics
      `,
      "moreText": "Thorough testing ensures APIs meet user expectations in real-world scenarios."
    },
    {
      "title": "",
      "subtitle": "Error Handling in Product APIs",
      "details": [
        "Purpose: Provides clear feedback for issues like missing products or invalid inputs.",
        "Mechanics: Returns appropriate HTTP status codes (e.g., 404, 500) with descriptive messages.",
        "Centralized Handling: Passes errors to middleware for consistent logging and response formatting.",
        "User Experience: Clear error messages guide users and developers during debugging."
      ],
      "code": `
      // Example: Error response
      if (!product) res.status(404).json({ message: 'Product not found' });
      `,
      "moreText": "Robust error handling enhances API reliability and developer troubleshooting."
    },
    {
      "title": "",
      "subtitle": "Preparing Test Data for Development",
      "details": [
        "Purpose: Simulates real-world data to test endpoint functionality and edge cases.",
        "Mechanics: Inserts sample documents into MongoDB with fields like price, category, and ratings.",
        "Realism: Includes references to related data (e.g., user IDs for ratings) to mimic production scenarios.",
        "Testing Support: Enables validation of queries, filters, and population in development."
      ],
      "code": `
      // Example: Insert test data (MongoDB shell)
      db.products.insertOne({ name: 'Laptop', price: 999, category: 'electronics' });
      `,
      "moreText": "Test data bridges development and production, ensuring APIs handle real-world cases."
    }
  ]
},
{
  "taskId": "ecom14",
  "content": [
    {
      "title": "Admin Product Management",
      "subtitle": "Creating New Products",
      "details": [
        "Purpose: Empowers admins to add products to the e-commerce catalog, expanding inventory offerings.",
        "Mechanics: Validates input fields like name, price, and stock, then saves a new product document to MongoDB with default ratings.",
        "Security: Requires admin authentication via JWT and role checks to ensure only authorized users create products.",
        "Response: Returns a JSON object with the new product’s details, confirming creation with a 201 status."
      ],
      "code": `
      // Example: Save new product
      const product = new Product({ name, price, description });
      await product.save();
      res.status(201).json({ product });
      `,
      "moreText": "Product creation endpoints enable dynamic inventory growth, critical for e-commerce scalability."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Generates secure keys for JWTs to authenticate admin actions in product management.",
        "Mechanics: Uses cryptographic methods to produce random, high-entropy strings for signing tokens.",
        "Security: Stores keys in environment variables to prevent exposure and ensure token integrity.",
        "Significance: Ensures only verified admins access sensitive endpoints like product creation."
      ],
      "code": `
      // Example: Generate secure key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Secure JWT keys underpin safe admin operations, protecting e-commerce APIs."
    },
    {
      "title": "",
      "subtitle": "Validating Product Inputs",
      "details": [
        "Purpose: Ensures product data meets requirements before saving to maintain catalog integrity.",
        "Mechanics: Checks for mandatory fields (e.g., name, price) and correct data types (e.g., numeric stock).",
        "Error Handling: Returns a 400 status with a clear message if validation fails, guiding corrections.",
        "Importance: Prevents invalid or incomplete data from entering the database, ensuring reliability."
      ],
      "code": `
      // Example: Validate inputs
      if (!name || !price) res.status(400).json({ message: 'Missing required fields' });
      `,
      "moreText": "Input validation safeguards data quality, essential for a trustworthy product catalog."
    },
    {
      "title": "",
      "subtitle": "Updating Product Details",
      "details": [
        "Purpose: Allows admins to modify product attributes like price or stock to keep the catalog accurate.",
        "Mechanics: Applies updates to a product by ID using MongoDB’s update operation, validating inputs first.",
        "Security: Restricts updates to admins via middleware, ensuring unauthorized users cannot modify products.",
        "Response: Returns the updated product in JSON, reflecting changes like adjusted stock levels."
      ],
      "code": `
      // Example: Update product
      const product = await Product.findByIdAndUpdate(id, { $set: updates }, { new: true });
      res.json({ product });
      `,
      "moreText": "Product updates ensure inventory reflects real-time changes, enhancing customer trust."
    },
    {
      "title": "",
      "subtitle": "Deleting Products",
      "details": [
        "Purpose: Enables admins to remove outdated or incorrect products, maintaining a clean catalog.",
        "Mechanics: Deletes a product by ID from MongoDB, verifying its existence to avoid errors.",
        "Security: Uses admin middleware to restrict deletion to authorized users, preventing misuse.",
        "Response: Confirms successful deletion with a message, typically with a 200 status."
      ],
      "code": `
      // Example: Delete product
      const product = await Product.findByIdAndDelete(id);
      res.json({ message: 'Product removed' });
      `,
      "moreText": "Secure deletion maintains a relevant and accurate product catalog."
    },
    {
      "title": "Securing Admin Operations",
      "subtitle": "Role-Based Access Control",
      "details": [
        "Purpose: Limits product management (create, update, delete) to authenticated admins for security.",
        "Mechanics: Uses middleware to verify JWTs and check for admin role in the user’s token payload.",
        "Error Handling: Returns 401 for invalid tokens and 403 for non-admin users, enforcing strict access.",
        "Significance: Protects critical operations, ensuring only authorized users manage inventory."
      ],
      "code": `
      // Example: Admin role check
      if (user.role !== 'admin') res.status(403).json({ message: 'Admin access required' });
      `,
      "moreText": "Role-based access ensures secure management, safeguarding e-commerce operations."
    },
    {
      "title": "",
      "subtitle": "Organizing Admin Routes",
      "details": [
        "Purpose: Groups product management endpoints under a single prefix for clarity and scalability.",
        "Mechanics: Defines POST, PATCH, and DELETE routes in a modular router file, protected by middleware.",
        "RESTful Design: Uses appropriate HTTP methods (POST for create, PATCH for update, DELETE for remove).",
        "Benefits: Enhances API maintainability by separating product routes from other functionalities."
      ],
      "code": `
      // Example: Admin route setup
      router.post('/', authMiddleware, adminMiddleware, createHandler);
      `,
      "moreText": "Organized routing simplifies API management, supporting complex e-commerce systems."
    },
    {
      "title": "",
      "subtitle": "Testing Admin Endpoints",
      "details": [
        "Purpose: Validates that product creation, updates, and deletions work correctly and enforce security.",
        "Mechanics: Uses tools like Thunder Client to send requests with admin tokens, checking responses and errors.",
        "Test Cases: Includes successful operations and error scenarios like invalid inputs or unauthorized access.",
        "Importance: Ensures endpoints are secure and functional before production use."
      ],
      "code": `
      // Example: Test admin request
      POST http://localhost:5001/api/products
      Authorization: Bearer <admin-token>
      `,
      "moreText": "Testing verifies robust admin functionality, critical for reliable inventory management."
    },
    {
      "title": "",
      "subtitle": "Error Handling in Admin APIs",
      "details": [
        "Purpose: Provides clear feedback for issues like missing products or invalid data, aiding debugging.",
        "Mechanics: Uses HTTP status codes (e.g., 400, 404) with descriptive messages for specific errors.",
        "Centralized Handling: Passes errors to Express middleware for consistent logging and formatting.",
        "User Experience: Clear messages guide developers and users to resolve issues effectively."
      ],
      "code": `
      // Example: Error response
      if (!product) res.status(404).json({ message: 'Product not found' });
      `,
      "moreText": "Effective error handling improves API reliability and developer productivity."
    },
    {
      "title": "",
      "subtitle": "Route Mounting for Product Management",
      "details": [
        "Purpose: Makes product management endpoints accessible under a unified API prefix.",
        "Mechanics: Mounts the product router in the main server file, integrating with existing routes.",
        "Scalability: Supports adding more product-related endpoints without cluttering the server file.",
        "RESTful Convention: Uses /api/products to align with standard API design practices."
      ],
      "code": `
      // Example: Mount routes
      app.use('/api/products', productRoutes);
      `,
      "moreText": "Route mounting streamlines API organization, enabling scalable e-commerce systems."
    }
  ]
},
{
  "taskId": "ecom15",
  "content": [
    {
      "title": "Order Creation Endpoint",
      "subtitle": "Placing Authenticated User Orders",
      "details": [
        "Purpose: Enables authenticated users to submit orders with cart items, payment method, and shipping address, ensuring valid data.",
        "Mechanics: Validates items array, payment method, and address fields, calculates total cost, and saves the order to MongoDB with user ID from JWT.",
        "Security: Uses authentication middleware to restrict access to logged-in users, linking orders to the authenticated user.",
        "Response: Returns a JSON object with the created order’s details, including items, total, and status, with a 201 status."
      ],
      "code": `
      // Example: Create order
      const order = new Order({ user, items, totalAmount });
      await order.save();
      res.status(201).json({ order });
      `,
      "moreText": "Order creation endpoints power e-commerce checkouts, ensuring secure and accurate order processing."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Generates secure keys for signing JWTs used in authenticating order-related endpoints.",
        "Mechanics: Creates random, high-entropy strings via cryptographic functions for access and refresh tokens.",
        "Security: Stores keys in environment variables to prevent exposure, ensuring token integrity.",
        "Significance: Protects order endpoints by verifying user identity, critical for secure transactions."
      ],
      "code": `
      // Example: Generate secure key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Secure JWT keys ensure safe user authentication for order placement and management."
    },
    {
      "title": "",
      "subtitle": "Validating Order Inputs",
      "details": [
        "Purpose: Ensures order data (items, payment method, address) meets schema requirements before saving.",
        "Mechanics: Checks for non-empty items array, valid payment method, and complete address fields, returning errors for invalid inputs.",
        "Error Handling: Uses 400 status codes with descriptive messages to guide users on correcting inputs.",
        "Importance: Maintains data integrity, preventing incomplete or erroneous orders in the database."
      ],
      "code": `
      // Example: Validate inputs
      if (!items || items.length === 0) res.status(400).json({ message: 'Items required' });
      `,
      "moreText": "Input validation ensures reliable order data, enhancing e-commerce checkout reliability."
    },
    {
      "title": "",
      "subtitle": "Fetching User Orders",
      "details": [
        "Purpose: Allows users to view their order history, supporting profile or account pages.",
        "Mechanics: Queries MongoDB for orders tied to the user’s ID, with pagination and sorting by creation date.",
        "Population: Includes product details (e.g., name, price) in items for a richer response.",
        "Response: Returns a JSON array of orders with pagination metadata, like total pages."
      ],
      "code": `
      // Example: Fetch user orders
      const orders = await Order.find({ user: userId }).sort('-createdAt').limit(limit);
      `,
      "moreText": "Order history endpoints enable users to track purchases, key for customer satisfaction."
    },
    {
      "title": "",
      "subtitle": "Fetching Specific Order Details",
      "details": [
        "Purpose: Provides detailed information for a single user order, ensuring only the owner accesses it.",
        "Mechanics: Queries MongoDB by order ID and user ID, populating product details for items.",
        "Security: Restricts access to the order’s owner via authentication middleware, returning 404 for unauthorized access.",
        "Response: Returns a JSON object with the order’s details, including items and status."
      ],
      "code": `
      // Example: Fetch order by ID
      const order = await Order.findOne({ _id: id, user: userId }).populate('items.productId');
      `,
      "moreText": "Specific order endpoints support detailed order views, enhancing user experience."
    },
    {
      "title": "Admin Order Management",
      "subtitle": "Updating Order Status",
      "details": [
        "Purpose: Allows admins to update order fields like status or payment status for management tasks.",
        "Mechanics: Applies updates to an order by ID, validating inputs and setting timestamps (e.g., paidAt for payments).",
        "Security: Uses admin middleware to restrict updates to authorized users, ensuring data safety.",
        "Response: Returns the updated order in JSON, reflecting changes like ‘shipped’ status."
      ],
      "code": `
      // Example: Update order
      const order = await Order.findByIdAndUpdate(id, { $set: updates }, { new: true });
      res.json({ order });
      `,
      "moreText": "Admin updates streamline order management, critical for operational efficiency."
    },
    {
      "title": "",
      "subtitle": "Deleting Orders",
      "details": [
        "Purpose: Enables admins to remove orders, such as for cancellations or fraud prevention.",
        "Mechanics: Deletes an order by ID from MongoDB, verifying its existence first.",
        "Security: Restricts deletion to admins via middleware, preventing unauthorized actions.",
        "Response: Confirms deletion with a success message, typically with a 200 status."
      ],
      "code": `
      // Example: Delete order
      const order = await Order.findByIdAndDelete(id);
      res.json({ message: 'Order deleted' });
      `,
      "moreText": "Secure deletion ensures admins can maintain a clean order database."
    },
    {
      "title": "",
      "subtitle": "Admin Viewing All Orders",
      "details": [
        "Purpose: Allows admins to view all orders in the system, supporting management dashboards.",
        "Mechanics: Queries all orders with pagination, populating user and product details for a complete view.",
        "Security: Uses admin middleware to restrict access, ensuring only authorized users see all orders.",
        "Response: Returns a JSON array of orders with pagination and populated details."
      ],
      "code": `
      // Example: Fetch all orders
      const orders = await Order.find({}).populate('user').limit(limit);
      `,
      "moreText": "Admin order views enable comprehensive oversight, vital for e-commerce operations."
    },
    {
      "title": "",
      "subtitle": "Route Organization and Security",
      "details": [
        "Purpose: Organizes order endpoints under /api/orders with user and admin access controls.",
        "Mechanics: Uses modular Express routers with middleware to enforce authentication and role-based access.",
        "RESTful Design: Employs HTTP methods (POST, GET, PATCH, DELETE) for intuitive API structure.",
        "Benefits: Enhances API scalability and security by separating concerns."
      ],
      "code": `
      // Example: Secure route
      router.post('/', authMiddleware, createHandler);
      `,
      "moreText": "Organized, secure routing supports robust e-commerce API design."
    },
    {
      "title": "",
      "subtitle": "Testing Order Endpoints",
      "details": [
        "Purpose: Validates order endpoints for correct functionality, security, and error handling.",
        "Mechanics: Uses tools like Thunder Client to test creation, retrieval, updates, and deletions with user and admin tokens.",
        "Test Cases: Covers successful operations, invalid inputs, and access control errors (e.g., 401, 403).",
        "Importance: Ensures reliable and secure endpoints before production deployment."
      ],
      "code": `
      // Example: Test order creation
      POST http://localhost:5001/api/orders
      Authorization: Bearer <token>
      `,
      "moreText": "Testing ensures order endpoints meet user and admin needs, enhancing reliability."
    }
  ]
},
{
  "taskId": "ecom16",
  "content": [
    {
      "title": "Product Rating Management",
      "subtitle": "Adding User Ratings",
      "details": [
        "Purpose: Enables authenticated users to submit ratings and comments on products, fostering community feedback.",
        "Mechanics: Validates input, checks for duplicates, adds to product's ratings array, and recalculates average and count.",
        "Security: Uses authentication middleware to identify users and prevent unauthorized or duplicate submissions.",
        "Response: Returns updated product with new stats, confirming addition with a 201 status."
      ],
      "code": `
      // Example: Add rating
      product.ratings.push({ user: userId, rating, comment });
      await product.save();
      res.status(201).json({ product });
      `,
      "moreText": "User ratings enhance product credibility, driving informed purchases in e-commerce."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Creates secure keys for JWTs to authenticate users in rating endpoints.",
        "Mechanics: Generates random strings using crypto for signing tokens, ensuring tamper-proof authentication.",
        "Security: Keys stored in env vars protect against forgery in user-specific actions like rating.",
        "Significance: Ensures only logged-in users can rate, maintaining review authenticity."
      ],
      "code": `
      // Example: Generate key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Secure JWT keys safeguard user interactions, vital for trusted rating systems."
    },
    {
      "title": "",
      "subtitle": "Editing Existing Ratings",
      "details": [
        "Purpose: Allows users to update their ratings and comments, refining feedback based on experience.",
        "Mechanics: Locates user's rating in array, updates values, recalculates average, and saves changes.",
        "Security: Authentication ensures only the rating owner can edit, preventing tampering.",
        "Response: Returns updated product reflecting new average, with 200 status."
      ],
      "code": `
      // Example: Edit rating
      rating.rating = newRating;
      product.averageRating = recalculateAverage();
      await product.save();
      `,
      "moreText": "Editable ratings support dynamic user opinions, improving review accuracy."
    },
    {
      "title": "",
      "subtitle": "Fetching Product Ratings",
      "details": [
        "Purpose: Displays ratings for shoppers, with pagination, filtering, and sorting for usability.",
        "Mechanics: Populates user details, filters by rating range, sorts by criteria, and paginates results.",
        "Public Access: Allows unauthenticated views to aid purchase decisions without barriers.",
        "Response: JSON with formatted ratings and metadata like total pages."
      ],
      "code": `
      // Example: Fetch ratings
      const ratings = product.ratings.filter(r => r.rating >= min).sort(sortFn);
      `,
      "moreText": "Rich rating displays inform customers, boosting engagement and sales."
    },
    {
      "title": "",
      "subtitle": "Deleting User Ratings",
      "details": [
        "Purpose: Empowers users to remove their ratings, adjusting product stats accordingly.",
        "Mechanics: Finds and removes rating from array, updates count and average, saves document.",
        "Security: Auth middleware restricts deletion to the rating owner, ensuring control.",
        "Response: Updated product confirming removal, with 200 status."
      ],
      "code": `
      // Example: Delete rating
      product.ratings.splice(index, 1);
      await product.save();
      res.json({ product });
      `,
      "moreText": "Rating deletion gives users autonomy, maintaining trust in the review system."
    },
    {
      "title": "Securing Rating Operations",
      "subtitle": "Preventing Duplicate Ratings",
      "details": [
        "Purpose: Ensures one rating per user per product to avoid bias and spam.",
        "Mechanics: Checks existing ratings array for user ID match before adding.",
        "Error Handling: Returns 400 for duplicates, guiding users to edit instead.",
        "Importance: Maintains review integrity, enhancing reliability of averages."
      ],
      "code": `
      // Example: Check duplicate
      if (product.ratings.some(r => r.user.toString() === userId)) return error;
      `,
      "moreText": "Duplicate prevention fosters genuine feedback, key for authentic e-commerce reviews."
    },
    {
      "title": "",
      "subtitle": "Recalculating Rating Stats",
      "details": [
        "Purpose: Keeps averageRating and numReviews accurate after additions, edits, or deletions.",
        "Mechanics: Sums ratings via reduce, divides by count; updates fields before save.",
        "Edge Cases: Sets average to 0 if no ratings remain post-deletion.",
        "Significance: Provides real-time stats for product pages and decisions."
      ],
      "code": `
      // Example: Recalculate average
      const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
      average = sum / ratings.length || 0;
      `,
      "moreText": "Accurate stats reflect true product quality, influencing buyer confidence."
    },
    {
      "title": "",
      "subtitle": "Route Organization for Ratings",
      "details": [
        "Purpose: Groups rating actions under product ID for intuitive API design.",
        "Mechanics: Defines POST, PATCH, GET, DELETE routes with auth where needed.",
        "RESTful: Uses subpaths like /:id/ratings for resource-specific operations.",
        "Benefits: Simplifies client integration and server maintenance."
      ],
      "code": `
      // Example: Rating routes
      router.post('/:id/ratings', authMiddleware, addHandler);
      `,
      "moreText": "Organized routes enhance API usability, supporting seamless review features."
    },
    {
      "title": "",
      "subtitle": "Testing Rating Endpoints",
      "details": [
        "Purpose: Verifies rating CRUD operations, security, and stat updates function correctly.",
        "Mechanics: Uses Thunder Client with tokens to test successes and errors like duplicates.",
        "Scenarios: Covers validation, auth failures, pagination, and edge cases.",
        "Importance: Ensures robust, secure review system before deployment."
      ],
      "code": `
      // Example: Test add rating
      POST /api/products/:id/ratings
      Authorization: Bearer <token>
      `,
      "moreText": "Thorough testing guarantees reliable user engagement through ratings."
    },
    {
      "title": "",
      "subtitle": "Input Validation in Ratings",
      "details": [
        "Purpose: Ensures rating values are present and valid to prevent bad data.",
        "Mechanics: Checks for required fields like rating, returns 400 for missing inputs.",
        "User Guidance: Error messages clarify issues, improving client-side handling.",
        "Data Integrity: Blocks invalid entries, preserving review quality."
      ],
      "code": `
      // Example: Validate rating
      if (!rating) res.status(400).json({ message: 'Rating required' });
      `,
      "moreText": "Validation upholds high standards in user-generated content like reviews."
    }
  ]
},
{
  "taskId": "ecom17",
  "content": [
    {
      "title": "Cart Management System",
      "subtitle": "Adding Products to Cart",
      "details": [
        "Purpose: Allows authenticated users to add products to their cart, supporting seamless shopping.",
        "Mechanics: Validates product ID and stock, increments quantity if item exists, or adds new item with timestamp.",
        "Security: Uses authentication middleware to ensure only logged-in users modify their own cart.",
        "Response: Returns updated cart with populated product details (name, price, images) and 200 status."
      ],
      "code": `
      // Example: Add to cart
      cart.items.push({ productId, quantity, addedAt: new Date() });
      await cart.save();
      res.json({ cart });
      `,
      "moreText": "Adding items to carts drives e-commerce engagement, enabling smooth checkout flows."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Generates secure keys for JWTs to authenticate users for cart operations.",
        "Mechanics: Creates high-entropy strings via cryptographic functions to sign tokens securely.",
        "Security: Stores keys in environment variables to prevent exposure and ensure token validity.",
        "Significance: Protects cart endpoints, ensuring only authorized users access their carts."
      ],
      "code": `
      // Example: Generate key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Secure JWT keys are critical for safe user interactions in cart management."
    },
    {
      "title": "",
      "subtitle": "Updating Cart Quantities",
      "details": [
        "Purpose: Enables users to adjust item quantities or remove items by setting quantity to 0.",
        "Mechanics: Updates item quantity in cart, validates stock availability, and removes item if quantity is 0.",
        "Security: Restricts updates to authenticated users, ensuring cart integrity.",
        "Response: Returns updated cart with populated details, reflecting quantity changes."
      ],
      "code": `
      // Example: Update quantity
      item.quantity = newQuantity;
      if (newQuantity === 0) cart.items.splice(index, 1);
      await cart.save();
      `,
      "moreText": "Flexible quantity updates enhance user control, improving the shopping experience."
    },
    {
      "title": "",
      "subtitle": "Removing Cart Items",
      "details": [
        "Purpose: Allows users to remove specific items or clear their entire cart for convenience.",
        "Mechanics: Filters out specific item by product ID or empties items array if no ID provided.",
        "Security: Authentication middleware ensures only the cart owner can remove items.",
        "Response: Returns updated cart with populated remaining items or empty array."
      ],
      "code": `
      // Example: Remove item
      cart.items = cart.items.filter(item => item.productId !== productId);
      await cart.save();
      `,
      "moreText": "Item removal ensures users can refine their carts, supporting fluid shopping."
    },
    {
      "title": "",
      "subtitle": "Cart Model Structure",
      "details": [
        "Purpose: Defines a user-specific cart with embedded items for efficient storage.",
        "Mechanics: Uses Mongoose schema with unique user field and CartItemSchema for product IDs and quantities.",
        "Features: Includes pre-save hook to auto-update timestamps, simplifying controller logic.",
        "Significance: Ensures one cart per user, optimized for fast lookups and updates."
      ],
      "code": `
      // Example: Cart schema
      const cartSchema = new mongoose.Schema({
        user: { type: mongoose.Schema.Types.ObjectId, unique: true },
        items: [cartItemSchema]
      });
      `,
      "moreText": "A robust cart model supports scalable, user-friendly e-commerce systems."
    },
    {
      "title": "Securing Cart Operations",
      "subtitle": "Stock Validation",
      "details": [
        "Purpose: Prevents adding or updating items beyond available product stock.",
        "Mechanics: Queries product stock before cart modifications, rejecting requests if insufficient.",
        "Error Handling: Returns 400 errors for stock issues, ensuring inventory accuracy.",
        "Importance: Maintains reliable stock levels, avoiding overselling in e-commerce."
      ],
      "code": `
      // Example: Check stock
      if (quantity > product.stock) return res.status(400).json({ message: 'Insufficient stock' });
      `,
      "moreText": "Stock validation ensures trustworthy inventory management for retailers and users."
    },
    {
      "title": "",
      "subtitle": "Populating Cart Responses",
      "details": [
        "Purpose: Enriches cart responses with product details for a user-friendly frontend.",
        "Mechanics: Uses Mongoose populate to include product name, price, images, and stock in responses.",
        "Efficiency: Selects specific fields to minimize data transfer while enhancing usability.",
        "Response: Returns cart with detailed items, improving client-side display."
      ],
      "code": `
      // Example: Populate cart
      await cart.populate('items.productId', 'name price images stock');
      res.json({ cart });
      `,
      "moreText": "Populated responses enhance user interfaces, making carts informative and engaging."
    },
    {
      "title": "",
      "subtitle": "Cart Route Organization",
      "details": [
        "Purpose: Groups cart endpoints under /api/cart for intuitive API design.",
        "Mechanics: Defines POST, PUT, DELETE routes with auth middleware for secure access.",
        "RESTful Design: Uses appropriate HTTP methods for adding, updating, and removing items.",
        "Benefits: Simplifies API maintenance and client integration for cart operations."
      ],
      "code": `
      // Example: Cart routes
      router.post('/', authMiddleware, addToCartHandler);
      `,
      "moreText": "Organized routes streamline cart functionality, supporting scalable e-commerce APIs."
    },
    {
      "title": "",
      "subtitle": "Testing Cart Endpoints",
      "details": [
        "Purpose: Validates cart operations for correctness, security, and error handling.",
        "Mechanics: Uses Thunder Client to test adding, updating, and removing items with user tokens.",
        "Test Cases: Covers successes, stock errors, invalid inputs, and auth failures.",
        "Importance: Ensures reliable cart functionality before production deployment."
      ],
      "code": `
      // Example: Test add to cart
      POST /api/cart
      Authorization: Bearer <token>
      `,
      "moreText": "Testing guarantees a robust cart system, critical for user satisfaction."
    },
    {
      "title": "",
      "subtitle": "Error Handling in Cart APIs",
      "details": [
        "Purpose: Provides clear feedback for issues like invalid inputs or stock shortages.",
        "Mechanics: Uses HTTP status codes (400, 404) with descriptive messages for errors.",
        "Centralized Handling: Passes errors to Express middleware for consistent logging.",
        "User Experience: Guides clients to resolve issues, improving API usability."
      ],
      "code": `
      // Example: Error response
      if (!cart) res.status(404).json({ message: 'Cart not found' });
      `,
      "moreText": "Effective error handling enhances API reliability and developer productivity."
    }
  ]
},
{
  "taskId": "ecom18",
  "content": [
    {
      "title": "Enhanced Authentication Security",
      "subtitle": "Refresh Token Management",
      "details": [
        "Purpose: Stores refresh tokens in MongoDB to enable secure session continuation and token rotation.",
        "Mechanics: Uses a Mongoose model with user ID, token, and expiration date (e.g., 7 days) for validation.",
        "Security: Deletes old tokens on refresh, ensuring single-use tokens to prevent replay attacks.",
        "Response: Issues new access and refresh tokens, setting the latter in an httpOnly cookie."
      ],
      "code": `
      // Example: Store refresh token
      await RefreshToken.create({ user: userId, token, expiresAt });
      res.cookie('refreshToken', token, { httpOnly: true });
      `,
      "moreText": "Refresh tokens extend user sessions securely, enhancing e-commerce usability."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Generates secure keys for signing JWTs used in authentication and refresh processes.",
        "Mechanics: Creates random, high-entropy strings with cryptographic functions for access and refresh tokens.",
        "Security: Stores keys in environment variables to prevent exposure and ensure token integrity.",
        "Significance: Protects auth endpoints by verifying user identity across sessions."
      ],
      "code": `
      // Example: Generate key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Secure JWT keys are foundational for safe authentication in e-commerce APIs."
    },
    {
      "title": "",
      "subtitle": "Helmet Middleware for Headers",
      "details": [
        "Purpose: Secures HTTP headers to protect against vulnerabilities like XSS and clickjacking.",
        "Mechanics: Applies Helmet middleware to set headers like Content-Security-Policy early in the request pipeline.",
        "Placement: Used before CORS and JSON parsing to ensure comprehensive security coverage.",
        "Benefits: Enhances server robustness, safeguarding user data and interactions."
      ],
      "code": `
      // Example: Apply Helmet
      app.use(helmet());
      `,
      "moreText": "Helmet strengthens server security, critical for trusted e-commerce platforms."
    },
    {
      "title": "",
      "subtitle": "Input Validation for Auth",
      "details": [
        "Purpose: Ensures register and login inputs meet strict criteria to prevent invalid data.",
        "Mechanics: Uses express-validator to check fields like email format and password length.",
        "Error Handling: Returns 400 with specific messages for failed validations, guiding users.",
        "Importance: Maintains data integrity and prevents malicious inputs in auth processes."
      ],
      "code": `
      // Example: Validate input
      body('email').isEmail().normalizeEmail(),
      if (!validationResult(req).isEmpty()) return res.status(400).json({ error });
      `,
      "moreText": "Validation ensures clean, secure data for user authentication workflows."
    },
    {
      "title": "",
      "subtitle": "Rate Limiting Auth Routes",
      "details": [
        "Purpose: Protects auth endpoints from brute-force attacks by limiting request frequency.",
        "Mechanics: Applies express-rate-limit to register, login, and refresh routes (e.g., 100 requests per 15 minutes).",
        "Response: Returns 429 with a retry message when limits are exceeded, deterring abuse.",
        "Scope: Excludes non-sensitive routes like user profile to maintain usability."
      ],
      "code": `
      // Example: Rate limiter
      const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
      router.post('/login', limiter, loginHandler);
      `,
      "moreText": "Rate limiting fortifies auth endpoints, ensuring secure e-commerce access."
    },
    {
      "title": "Robust Error Handling",
      "subtitle": "Global Error Middleware",
      "details": [
        "Purpose: Provides clear feedback for errors like validation failures or unauthorized access.",
        "Mechanics: Handles specific error types (e.g., ValidationError, CastError) with tailored status codes and messages.",
        "Logging: Includes timestamp and stack trace in logs for improved debugging.",
        "Response: Returns user-friendly JSON errors while logging details for developers."
      ],
      "code": `
      // Example: Error middleware
      if (error.name === 'ValidationError') return res.status(400).json({ message });
      `,
      "moreText": "Effective error handling improves debugging and user experience in auth systems."
    },
    {
      "title": "",
      "subtitle": "Token Refresh Endpoint",
      "details": [
        "Purpose: Issues new access and refresh tokens to maintain user sessions securely.",
        "Mechanics: Validates refresh token against database, deletes old token, and issues new ones.",
        "Security: Uses httpOnly cookies for refresh tokens, reducing client-side exposure risks.",
        "Response: Returns new access token and user details with updated cookie."
      ],
      "code": `
      // Example: Refresh token
      const token = jwt.sign(payload, JWT_SECRET);
      res.cookie('refreshToken', newToken, { httpOnly: true });
      `,
      "moreText": "Token refresh ensures seamless, secure user sessions for e-commerce."
    },
    {
      "title": "",
      "subtitle": "Auth Route Organization",
      "details": [
        "Purpose: Groups auth endpoints under /api/auth for clear, secure API structure.",
        "Mechanics: Defines routes for register, login, refresh with validation and rate limiting.",
        "RESTful Design: Uses POST for sensitive actions, ensuring intuitive client interactions.",
        "Security: Applies middleware to protect routes, enhancing auth system reliability."
      ],
      "code": `
      // Example: Auth routes
      router.post('/register', limiter, validate, registerHandler);
      `,
      "moreText": "Organized auth routes simplify integration and bolster security."
    },
    {
      "title": "",
      "subtitle": "Testing Auth Endpoints",
      "details": [
        "Purpose: Verifies registration, login, and refresh functionality with security features.",
        "Mechanics: Uses Thunder Client to test successes, validation errors, and rate limits.",
        "Test Cases: Covers valid inputs, invalid data, expired tokens, and rate limit triggers.",
        "Importance: Ensures secure, reliable auth before production deployment."
      ],
      "code": `
      // Example: Test login
      POST /api/auth/login
      Body: { "email": "user@example.com", "password": "secure123" }
      `,
      "moreText": "Testing validates a secure auth system, critical for user trust."
    },
    {
      "title": "",
      "subtitle": "Refresh Token Validation",
      "details": [
        "Purpose: Ensures refresh tokens are valid and linked to existing users before issuing new tokens.",
        "Mechanics: Queries MongoDB for token and checks expiration; verifies user via JWT payload.",
        "Error Handling: Returns 401 for invalid, expired, or user-mismatched tokens.",
        "Significance: Prevents unauthorized session extensions, enhancing security."
      ],
      "code": `
      // Example: Validate refresh token
      const tokenDoc = await RefreshToken.findOne({ token });
      if (!tokenDoc) return res.status(401).json({ message: 'Invalid token' });
      `,
      "moreText": "Token validation safeguards session integrity, vital for e-commerce security."
    }
  ]
},
{
  "taskId": "ecom19",
  "content": [
    {
      "title": "React Router Setup",
      "subtitle": "Client-Side Navigation Foundation",
      "details": [
        "Purpose: Enables seamless page transitions without full reloads using React Router’s BrowserRouter.",
        "Mechanics: Wraps the app in BrowserRouter, using Routes and Route to map URLs to components.",
        "Dynamic Routing: Supports parameters like /products/:id for product detail pages.",
        "Response: Renders corresponding components based on URL, maintaining app state."
      ],
      "code": `
      // Example: Basic routing
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      `,
      "moreText": "React Router creates SPAs with intuitive navigation, essential for e-commerce UX."
    },
    {
      "title": "",
      "subtitle": "Rspack devServer Configuration",
      "details": [
        "Purpose: Ensures client-side routes work in development by serving index.html for all paths.",
        "Mechanics: Sets historyApiFallback to true in Rspack config to handle 404s gracefully.",
        "Development: Prevents page not found errors when refreshing or directly accessing routes.",
        "Production: Handled by server configuration, but dev setup mirrors real behavior."
      ],
      "code": `
      // Example: Rspack devServer
      devServer: { historyApiFallback: true }
      `,
      "moreText": "historyApiFallback enables smooth development of SPAs with client-side routing."
    },
    {
      "title": "",
      "subtitle": "Conditional Navigation",
      "details": [
        "Purpose: Shows different links based on user authentication and admin status for personalized UX.",
        "Mechanics: Uses state or context to determine isLoggedIn and isAdmin, rendering links conditionally.",
        "Security: Prevents unauthorized access to protected routes via UI controls.",
        "User Experience: Guides users to relevant pages like Cart or Admin Dashboard."
      ],
      "code": `
      // Example: Conditional link
      {isLoggedIn ? <NavLink to="/profile">Profile</NavLink> : <NavLink to="/login">Login</NavLink>}
      `,
      "moreText": "Conditional nav enhances usability by showing only relevant options to users."
    },
    {
      "title": "",
      "subtitle": "Active Link Styling",
      "details": [
        "Purpose: Provides visual feedback on the current page through highlighted navigation links.",
        "Mechanics: Uses NavLink’s className callback to apply active styles when route matches.",
        "Styling: Combines base and active classes for consistent, clear navigation cues.",
        "User Experience: Helps users understand their location within the app."
      ],
      "code": `
      // Example: Active link
      <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
      `,
      "moreText": "Active styling improves navigation clarity, reducing user confusion."
    },
    {
      "title": "Responsive Layout Structure",
      "subtitle": "Consistent Navbar and Footer",
      "details": [
        "Purpose: Creates a uniform layout across all pages with persistent navigation and branding.",
        "Mechanics: Places Navbar at top and Footer at bottom, wrapping Routes in between.",
        "Consistency: Ensures users always have access to navigation and footer links.",
        "Scalability: Supports adding new pages without layout changes."
      ],
      "code": `
      // Example: Layout structure
      <div className="app">
        <Navbar />
        <Routes>{/* Routes */}</Routes>
        <Footer />
      </div>
      `,
      "moreText": "Consistent layout builds brand recognition and improves user orientation."
    },
    {
      "title": "",
      "subtitle": "CSS Modules for Styling",
      "details": [
        "Purpose: Provides scoped, modular CSS to prevent style conflicts across components.",
        "Mechanics: Imports styles from .module.css files, applying classes via object notation.",
        "Naming: Uses BEM-like conventions for clear, maintainable class names.",
        "Benefits: Avoids global CSS pollution, making styling predictable."
      ],
      "code": `
      // Example: CSS Modules
      import styles from './Navbar.module.css';
      <div className={styles.container}>Content</div>
      `,
      "moreText": "CSS Modules ensure clean, component-specific styling for scalable UIs."
    },
    {
      "title": "",
      "subtitle": "Route Organization",
      "details": [
        "Purpose: Maps all application pages to specific URLs for intuitive navigation.",
        "Mechanics: Defines routes for Home, Products, Cart, Auth, Profile, Orders, and Admin areas.",
        "RESTful: Uses /products/:id for details and /admin/dashboard for admin access.",
        "Extensibility: Easy to add new routes as features grow."
      ],
      "code": `
      // Example: Route definition
      <Route path="/products/:id" element={<ProductDetail />} />
      `,
      "moreText": "Well-organized routes create a logical, user-friendly app structure."
    },
    {
      "title": "",
      "subtitle": "Testing Client-Side Routing",
      "details": [
        "Purpose: Verifies navigation works correctly across all routes and direct URL access.",
        "Mechanics: Tests link clicks, browser back/forward, and direct URL entry with refresh.",
        "Validation: Ensures no 404 errors and correct components render for each path.",
        "Development: Confirms historyApiFallback and route definitions are correct."
      ],
      "code": `
      // Example: Test route
      Navigate to /products/123 → Should show ProductDetail component
      `,
      "moreText": "Routing tests ensure reliable navigation, critical for e-commerce UX."
    },
    {
      "title": "",
      "subtitle": "Component Reusability",
      "details": [
        "Purpose: Promotes DRY code by reusing Navbar and Footer across all pages.",
        "Mechanics: Imports layout components once in App.jsx, wrapping all route content.",
        "Consistency: Guarantees uniform branding and navigation on every page.",
        "Maintenance: Changes to layout affect all pages instantly."
      ],
      "code": `
      // Example: Reusable layout
      <Navbar />
      <main><Routes /></main>
      <Footer />
      `,
      "moreText": "Reusable components streamline development and ensure design consistency."
    },
    {
      "title": "",
      "subtitle": "E-Commerce Navigation Flow",
      "details": [
        "Purpose: Guides users through shopping journey from browsing to checkout.",
        "Mechanics: Links Home → Products → Detail → Cart → Checkout with clear progression.",
        "User Flow: Supports authentication gates for protected actions like ordering.",
        "Experience: Creates intuitive path from discovery to purchase."
      ],
      "code": `
      // Example: Shopping flow
      Home → /products → /products/123 → /cart → /checkout
      `,
      "moreText": "Clear navigation flow drives conversions in e-commerce applications."
    }
  ]
}, 
{
  "taskId": "ecom20",
  "content": [
    {
      "title": "E-Commerce Home Page",
      "subtitle": "Welcoming Hero Section",
      "details": [
        "Purpose: Serves as the landing page to immediately engage visitors with brand messaging and a clear call-to-action.",
        "Mechanics: Features a full-width hero with gradient background, bold headline, descriptive subtitle, and prominent 'Shop Now' button linking to /products.",
        "Design: Uses brand color palette with high-contrast text for readability and visual impact.",
        "User Experience: Creates an inviting entry point that guides users directly into product browsing."
      ],
      "code": `
      // Example: Hero structure
      <section className={styles.hero}>
        <h1>Welcome to PLUG</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products">Shop Now</Link>
      </section>
      `,
      "moreText": "A compelling hero section sets the tone and drives user engagement from first visit."
    },
    {
      "title": "",
      "subtitle": "Featured Products Showcase",
      "details": [
        "Purpose: Highlights newest or popular products to encourage immediate exploration and purchases.",
        "Mechanics: Fetches 6 latest products via API with sort=-createdAt, displays in responsive grid using ProductCard.",
        "Data Flow: Handles loading, error, and empty states with appropriate UI feedback.",
        "Conversion: Positions high-value items front-and-center to boost sales and user interest."
      ],
      "code": `
      // Example: Fetch featured
      const { data } = await fetch('/api/products?limit=6&sort=-createdAt').then(r => r.json());
      setFeatured(data.products);
      `,
      "moreText": "Featured products act as a curated storefront, guiding users to high-intent items."
    },
    {
      "title": "",
      "subtitle": "Product Card Reusability",
      "details": [
        "Purpose: Ensures consistent product presentation across Home, List, and Detail pages.",
        "Mechanics: Single ProductCard component used everywhere, receiving product prop with standardized fields.",
        "Consistency: Maintains identical styling, hover effects, and data display regardless of context.",
        "Scalability: New product displays automatically inherit the card’s design and behavior."
      ],
      "code": `
      // Example: Reuse card
      {featured.map(product => <ProductCard key={product._id} product={product} />)}
      `,
      "moreText": "Reusable components reduce bugs and ensure brand consistency across the app."
    },
    {
      "title": "",
      "subtitle": "Database Seeding Strategy",
      "details": [
        "Purpose: Provides realistic, diverse test data to validate all frontend features during development.",
        "Mechanics: Node.js script inserts 15 products with unique Picsum images, varied categories, prices, and stock levels.",
        "Data Quality: Includes real-world fields like ratings, timestamps, and descriptions for authentic testing.",
        "Repeatability: Clears existing data before insert to ensure consistent starting state."
      ],
      "code": `
      // Example: Seed command
      node seedProducts.js
      // Output: "15 products inserted successfully"
      `,
      "moreText": "Seeded data enables thorough testing of filtering, sorting, and UI states."
    },
    {
      "title": "",
      "subtitle": "Route Conflict Resolution",
      "details": [
        "Purpose: Ensures /api/products/categories endpoint works without being intercepted by /:id dynamic route.",
        "Mechanics: Places static /categories route before parameter /:id in Express router file.",
        "Error Prevention: Avoids CastError when 'categories' is treated as ObjectId.",
        "API Reliability: Guarantees category filter dropdown receives correct data."
      ],
      "code": `
      // Example: Correct order
      router.get('/categories', getCategories);
      router.get('/:id', getProductById);
      `,
      "moreText": "Proper route ordering prevents subtle but critical API failures."
    },
    {
      "title": "",
      "subtitle": "Nested API Response Handling",
      "details": [
        "Purpose: Correctly extracts pagination data from nested response structure for accurate UI controls.",
        "Mechanics: Uses optional chaining to safely access data.pagination.totalPages.",
        "Frontend-Backend Sync: Matches backend response format to prevent undefined errors.",
        "User Experience: Enables functional pagination with correct page count and navigation."
      ],
      "code": `
      // Example: Safe access
      const totalPages = data.pagination?.totalPages || 1;
      `,
      "moreText": "Precise data handling ensures UI reflects backend state accurately."
    },
    {
      "title": "",
      "subtitle": "Interactive Product Cards",
      "details": [
        "Purpose: Creates engaging product previews with hover effects to encourage clicks.",
        "Mechanics: CSS transforms for lift and scale, box-shadow for depth, smooth transitions for polish.",
        "Visual Feedback: Image zoom and card elevation signal interactivity.",
        "Accessibility: Maintains focus indicators and semantic HTML for all users."
      ],
      "code": `
      // Example: Hover styles
      .card:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
      .image:hover { transform: scale(1.05); }
      `,
      "moreText": "Interactive cards boost click-through rates and create delightful micro-interactions."
    },
    {
      "title": "",
      "subtitle": "Advanced Product Filtering System",
      "details": [
        "Purpose: Empowers users to find exactly what they want through multi-faceted search and filters.",
        "Mechanics: Combines search, category dropdown, and price range inputs with URL sync via useSearchParams.",
        "Real-Time Feedback: Form state updates instantly; URL and results update on apply.",
        "Performance: Debounces API calls until submission to reduce server load."
      ],
      "code": `
      // Example: Filter submit
      const params = new URLSearchParams({ search, category, minPrice, page: 1 });
      setSearchParams(params);
      `,
      "moreText": "Powerful filtering transforms browsing into targeted discovery."
    },
    {
      "title": "",
      "subtitle": "Product Detail Page Experience",
      "details": [
        "Purpose: Provides all information needed for informed purchase decisions in one place.",
        "Mechanics: Image gallery, quantity controls, stock status, ratings, and secure Add to Cart with toast feedback.",
        "Interactivity: Thumbnail selection, quantity +/-, real-time validation, and login prompts.",
        "Conversion: Clear pricing, stock, and CTA drive users to complete purchases."
      ],
      "code": `
      // Example: Add to cart
      <button onClick={handleAddToCart} disabled={adding || stock === 0}>
        {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
      `,
      "moreText": "Rich detail pages are the final step in converting interest to sales."
    },
    {
      "title": "",
      "subtitle": "Responsive Design Across Pages",
      "details": [
        "Purpose: Ensures optimal viewing and interaction on all devices from mobile to desktop.",
        "Mechanics: CSS Grid and Flexbox with media queries adjust layouts at 768px and 1024px breakpoints.",
        "Mobile First: Filters stack above grid, cards go full-width, detail page adapts to single column.",
        "Consistency: Maintains spacing, typography, and interactive elements across screen sizes."
      ],
      "code": `
      // Example: Responsive grid
      @media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
      @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
      `,
      "moreText": "Responsive design reaches users everywhere, expanding your market."
    }
  ]
},
{
  "taskId": "ecom21",
  "content": [
    {
      "title": "Real-Time Cart Management",
      "subtitle": "Interactive Quantity Updates",
      "details": [
        "Purpose: Allows users to adjust item quantities instantly with live feedback and stock validation.",
        "Mechanics: Sends PATCH /api/cart on change with productId and new quantity, updates UI optimistically or on response.",
        "Security: Requires authentication — unauthenticated users see login prompt instead of cart.",
        "User Experience: Loading spinner per item, success/error toasts, and auto-removal when quantity reaches 0."
      ],
      "code": `
      // Example: Update quantity
      await fetch('/api/cart', {
        method: 'PUT',
        headers: { Authorization: \`Bearer \${token}\` },
        body: JSON.stringify({ productId, quantity })
      });
      `,
      "moreText": "Real-time cart updates create a fluid, app-like shopping experience users expect."
    },
    {
      "title": "",
      "subtitle": "JWT Authentication in Cart",
      "details": [
        "Purpose: Ensures only logged-in users can access and modify their personal cart.",
        "Mechanics: Includes Bearer token from localStorage in all cart API requests (GET, PATCH, DELETE).",
        "Error Handling: Redirects to login or shows toast if token missing or invalid.",
        "Security: Prevents cart tampering and protects user shopping data."
      ],
      "code": `
      // Example: Auth header
      const token = localStorage.getItem('accessToken');
      headers: { 'Authorization': \`Bearer \${token}\` }
      `,
      "moreText": "Authentication secures the cart, preventing unauthorized access to user selections."
    },
    {
      "title": "",
      "subtitle": "Item Removal & Cart Clearing",
      "details": [
        "Purpose: Gives users full control to remove unwanted items or empty their cart entirely.",
        "Mechanics: DELETE /api/cart removes single item; empty body clears all items.",
        "Feedback: Immediate UI update, toast confirmation, and recalculated totals.",
        "Edge Cases: Handles empty cart gracefully with 'Continue Shopping' CTA."
      ],
      "code": `
      // Example: Remove item
      await fetch('/api/cart', {
        method: 'DELETE',
        body: JSON.stringify({ productId })
      });
      `,
      "moreText": "Flexible removal empowers users to refine their purchase before checkout."
    },
    {
      "title": "",
      "subtitle": "Live Order Summary & Totals",
      "details": [
        "Purpose: Shows real-time subtotal, tax (VAT), and final total as cart changes.",
        "Mechanics: Calculates line totals (price × quantity), sums items, applies UK 20% VAT.",
        "Currency: Formats with £ symbol and 2 decimal places using toLocaleString.",
        "Accuracy: Reflects backend cart state instantly for transparent pricing."
      ],
      "code": `
      // Example: Total calculation
      const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const vat = subtotal * 0.20;
      const total = subtotal + vat;
      `,
      "moreText": "Live totals build trust by eliminating pricing surprises at checkout."
    },
    {
      "title": "UK Checkout Experience",
      "subtitle": "Validated Shipping Form",
      "details": [
        "Purpose: Collects accurate UK delivery information with strict validation for reliability.",
        "Mechanics: Uses regex for UK postcode (e.g., SW1A 1AA), requires full name, street, city, and country.",
        "Real-Time Feedback: Inline errors, red borders on invalid fields, cleared on correction.",
        "UX: Pre-fills country as 'United Kingdom' and disables editing for consistency."
      ],
      "code": `
      // Example: UK postcode regex
      const ukPostcodeRegex = /^[A-Z]{1,2}\\d{1,2}[A-Z]?\\s?\\d[A-Z]{2}$/i;
      `,
      "moreText": "UK-specific validation ensures deliverability and reduces failed shipments."
    },
    {
      "title": "",
      "subtitle": "VAT Calculation & Display",
      "details": [
        "Purpose: Clearly shows UK 20% VAT as a separate line item for transparency and compliance.",
        "Mechanics: Calculates 20% of subtotal, displays as 'VAT (20%)', adds to final total.",
        "Formatting: Uses British pound (£) symbol and proper tax terminology.",
        "Compliance: Meets UK consumer protection requirements for price clarity."
      ],
      "code": `
      // Example: VAT display
      <div>VAT (20%): £{(subtotal * 0.20).toFixed(2)}</div>
      <div className="total">Total: £{total.toFixed(2)}</div>
      `,
      "moreText": "Transparent VAT display builds trust and meets legal requirements in the UK."
    },
    {
      "title": "",
      "subtitle": "Secure Order Submission",
      "details": [
        "Purpose: Finalizes purchase by sending authenticated order to backend with full cart and shipping data.",
        "Mechanics: POST /api/orders with items, shippingAddress, paymentMethod; requires valid JWT.",
        "Loading State: 'Placing Order...' button disables form during submission.",
        "Success Flow: Shows toast, redirects to order confirmation after brief delay."
      ],
      "code": `
      // Example: Place order
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { Authorization: \`Bearer \${token}\` },
        body: JSON.stringify(orderData)
      });
      `,
      "moreText": "Secure order submission completes the purchase journey with confidence."
    },
    {
      "title": "",
      "subtitle": "Toast Notification System",
      "details": [
        "Purpose: Provides instant, non-blocking feedback for all cart and checkout actions.",
        "Mechanics: State-driven toast with type (success/error), message, and auto-hide after 3-4 seconds.",
        "Animation: Slides in from bottom-right with fade, styled in brand colors.",
        "Accessibility: Uses aria-live for screen reader announcements."
      ],
      "code": `
      // Example: Show toast
      setToast({ type: 'success', message: 'Item quantity updated!' });
      setTimeout(() => setToast(null), 3000);
      `,
      "moreText": "Toasts keep users informed without interrupting their flow."
    },
    {
      "title": "",
      "subtitle": "Responsive Cart & Checkout Layout",
      "details": [
        "Purpose: Ensures seamless experience on mobile, tablet, and desktop devices.",
        "Mechanics: Two-column layout on large screens (form + summary), stacks vertically on mobile.",
        "Breakpoints: Adjusts at 768px and 1024px for optimal spacing and readability.",
        "Touch-Friendly: Large buttons, adequate spacing, and clear visual hierarchy."
      ],
      "code": `
      // Example: Responsive flex
      @media (min-width: 992px) {
        .checkout { display: grid; grid-template-columns: 1fr 400px; gap: 2rem; }
      }
      `,
      "moreText": "Responsive design ensures cart and checkout work perfectly on all devices."
    },
    {
      "title": "",
      "subtitle": "End-to-End Purchase Flow",
      "details": [
        "Purpose: Delivers a complete, professional shopping journey from product to confirmed order.",
        "Mechanics: Product → Cart (real-time) → Checkout (validated) → Order Confirmation.",
        "Security: JWT auth throughout, UK validation, stock checks, and secure submission.",
        "Conversion: Clear totals, trust signals, and smooth progression drive completion."
      ],
      "code": `
      // Example: Full flow
      Browse → Add to Cart → /cart → Proceed to Checkout → Fill Form → Place Order → /orders/:id
      `,
      "moreText": "A polished purchase flow turns visitors into happy, returning customers."
    }
  ]
},
{
  "taskId": "ecom22",
  "content": [
    {
      "title": "Authentication Context",
      "subtitle": "Global State Management",
      "details": [
        "Purpose: Centralizes user authentication state (user, cartCount, loading) for access anywhere in the app.",
        "Mechanics: Uses React’s createContext and useContext to provide global data and functions (login, logout, updateCartCount).",
        "Provider Pattern: Wraps entire app in AuthProvider, broadcasting state to all components.",
        "Custom Hook: useAuth() safely accesses context with error if used outside provider."
      ],
      "code": `
      // Example: Context usage
      const { user, isLoggedIn, cartCount, logout } = useAuth();
      `,
      "moreText": "AuthContext eliminates prop drilling, enabling seamless auth across your e-commerce app."
    },
    {
      "title": "",
      "subtitle": "Auto-Login on Page Refresh",
      "details": [
        "Purpose: Restores user session when page reloads, providing persistent login experience.",
        "Mechanics: useEffect on mount checks localStorage for token, calls /api/auth/me to validate and restore user.",
        "Loading State: Shows spinner until auth check completes, preventing flash of unauthenticated content.",
        "Error Handling: Clears invalid tokens and logs out user if /me fails."
      ],
      "code": `
      // Example: Auto-login
      useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) fetch('/api/auth/me', { headers: { Authorization: \`Bearer \${token}\` } });
      }, []);
      `,
      "moreText": "Auto-login creates a native-app feel, reducing user friction in e-commerce."
    },
    {
      "title": "",
      "subtitle": "Price Snapshot Philosophy",
      "details": [
        "Purpose: Locks in product price at the moment of adding to cart, preventing unexpected changes.",
        "Mechanics: Stores price directly on cart item instead of referencing live product price.",
        "Customer Trust: Users see the same price from cart to checkout, even if product price changes.",
        "Professional Standard: Used by Amazon, Shopify — price at add-to-cart is binding."
      ],
      "code": `
      // Example: Snapshot price
      cart.items.push({ productId, quantity, price: product.price });
      `,
      "moreText": "Price snapshots are non-negotiable for professional e-commerce — they build trust."
    },
    {
      "title": "",
      "subtitle": "Solving the NaN Cart Crash",
      "details": [
        "Purpose: Eliminates undefined/NaN errors in cart calculations caused by incorrect price access.",
        "Root Cause: Frontend used item.productId.price instead of stored item.price.",
        "Solution: Store price directly on cart item during add/update operations.",
        "Prevention: Use defensive fallbacks (item.price || 0) to handle corrupted data gracefully."
      ],
      "code": `
      // Example: Safe price access
      const price = item.price || 0;
      const lineTotal = price * item.quantity;
      `,
      "moreText": "Fixing the NaN crash transforms a broken cart into a reliable shopping experience."
    },
    {
      "title": "Protected Routes",
      "subtitle": "Route-Level Security",
      "details": [
        "Purpose: Restricts access to sensitive pages like Checkout and Profile to authenticated users.",
        "Mechanics: ProtectedRoute wrapper checks isLoggedIn before rendering children.",
        "Admin Protection: Optional adminOnly prop redirects non-admins to home.",
        "Loading Guard: Shows spinner during auth check to prevent flash of protected content."
      ],
      "code": `
      // Example: Protected route
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
      `,
      "moreText": "Protected routes are the gatekeepers of your e-commerce app’s secure areas."
    },
    {
      "title": "",
      "subtitle": "Real-Time Cart Count Badge",
      "details": [
        "Purpose: Shows live cart item count in navbar, encouraging users to complete purchase.",
        "Mechanics: AuthContext fetches cart on login and provides updateCartCount function for cart operations.",
        "Synchronization: Called after add/remove/update to keep badge accurate across tabs.",
        "UX Impact: Visible cart count drives conversions by reminding users of pending items."
      ],
      "code": `
      // Example: Cart badge
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      `,
      "moreText": "Live cart count is a subtle but powerful conversion driver in e-commerce."
    },
    {
      "title": "",
      "subtitle": "Defensive Programming in Cart",
      "details": [
        "Purpose: Prevents entire cart page from crashing due to one corrupted item.",
        "Mechanics: Uses fallbacks (item.price || 0, item.quantity || 0) in all calculations.",
        "Real-World: Handles edge cases from migrations, bugs, or manual DB edits.",
        "Professional Practice: Production apps must never crash on bad data."
      ],
      "code": `
      // Example: Defensive total
      const total = items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
      `,
      "moreText": "Defensive coding turns fragile carts into bulletproof shopping experiences."
    },
    {
      "title": "",
      "subtitle": "Remember Me & Token Strategy",
      "details": [
        "Purpose: Balances security and convenience with optional persistent login.",
        "Mechanics: 'Remember Me' saves refreshToken; unchecked only saves short-lived accessToken.",
        "Security Trade-off: Persistent login is convenient but increases risk if device is compromised.",
        "UX Impact: Users choose between convenience and security."
      ],
      "code": `
      // Example: Remember me
      if (remember && refreshToken) localStorage.setItem('refreshToken', refreshToken);
      `,
      "moreText": "Smart token management gives users control over their session persistence."
    },
    {
      "title": "",
      "subtitle": "Context vs Prop Drilling",
      "details": [
        "Purpose: Eliminates passing user/cart data through dozens of components.",
        "Before: Navbar, CartPage, CheckoutPage all needed user passed down manually.",
        "After: Any component uses useAuth() — no props needed.",
        "Scalability: Adding new protected pages requires zero prop changes."
      ],
      "code": `
      // Example: No prop drilling
      function Navbar() {
        const { user, logout } = useAuth(); // Direct access!
      }
      `,
      "moreText": "Context is the professional solution for global state in React apps."
    },
    {
      "title": "",
      "subtitle": "Production-Grade Auth Flow",
      "details": [
        "Purpose: Delivers a complete, secure authentication system used in real e-commerce stores.",
        "Features: Auto-login, protected routes, cart sync, price snapshots, error resilience.",
        "Security: JWT + refresh tokens, secure storage, admin protection, rate limiting.",
        "Experience: Seamless login, persistent sessions, trusted pricing, protected checkout."
      ],
      "code": `
      // Example: Full auth system
      <AuthProvider>
        <Router>
          <ProtectedRoute><CheckoutPage /></ProtectedRoute>
        </Router>
      </AuthProvider>
      `,
      "moreText": "This is how professional e-commerce platforms handle authentication and cart state."
    }
  ]
},

{
  "taskId": "ecom23",
  "content": [
    {
      "title": "Global Cart Count Synchronization",
      "subtitle": "Real-Time Badge Updates Across App",
      "details": [
        "Purpose: Shows live cart item count in navbar on every page, driving checkout completion.",
        "Mechanics: AuthContext’s updateCartCount() called after every cart change (add, update, delete).",
        "Trigger Points: ProductDetailPage (add), CartPage (quantity/remove), Checkout (order success).",
        "Consistency: Works across tabs, page refreshes, and direct navigation — always accurate."
      ],
      "code": `
      // Example: Sync after action
      await updateCartCount(); // Called after any cart operation
      `,
      "moreText": "Live cart count is one of the strongest conversion signals in e-commerce."
    },
    {
      "title": "",
      "subtitle": "Authentication Context Mastery",
      "details": [
        "Purpose: Central hub for user state, cart count, login/logout, and auto-restore.",
        "Core State: user (object), cartCount (number), loading (boolean).",
        "Key Functions: login(), logout(), updateCartCount(), auto-login on mount.",
        "Global Access: useAuth() hook works in any component without prop drilling."
      ],
      "code": `
      // Example: Use anywhere
      const { user, cartCount, logout, updateCartCount } = useAuth();
      `,
      "moreText": "AuthContext is the professional way to manage global state in React apps."
    },
    {
      "title": "",
      "subtitle": "Auto-Login & Session Persistence",
      "details": [
        "Purpose: Restores login session when user returns or refreshes page.",
        "Mechanics: On mount, checks localStorage token → calls /api/auth/me → restores user + cart.",
        "Remember Me: Optional refreshToken enables long-term persistence.",
        "UX: No login flash — user stays logged in seamlessly."
      ],
      "code": `
      // Example: Auto-restore
      useEffect(() => { if (token) validateAndRestore(); }, []);
      `,
      "moreText": "Auto-login creates a native-app experience users love."
    },
    {
      "title": "",
      "subtitle": "ProtectedRoute Security Pattern",
      "details": [
        "Purpose: Guards pages like Cart, Checkout, Profile, Orders from unauthorized access.",
        "Mechanics: Checks isLoggedIn before rendering children; redirects to /login if false.",
        "Admin Protection: adminOnly prop adds role check for AdminDashboard.",
        "Loading Guard: Shows spinner during auth check to prevent flash."
      ],
      "code": `
      // Example: Protected access
      <ProtectedRoute><ProfilePage /></ProtectedRoute>
      <ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>
      `,
      "moreText": "Protected routes are the foundation of secure e-commerce applications."
    },
    {
      "title": "User Profile Page",
      "subtitle": "Personal Information & Order History",
      "details": [
        "Purpose: Central place for users to view/edit info and see purchase history.",
        "Data Fetching: Loads profile + orders concurrently with Promise.all for speed.",
        "Edit Mode: Inline form toggles with save/cancel, real-time validation.",
        "Order Table: Shows ID, date, items count, total, status, and View link."
      ],
      "code": `
      // Example: Concurrent fetch
      const [profileRes, ordersRes] = await Promise.all([fetchProfile(), fetchOrders()]);
      `,
      "moreText": "Profile pages build user trust and ownership of their account."
    },
    {
      "title": "",
      "subtitle": "Order Detail Page Experience",
      "details": [
        "Purpose: Complete view of a single order with items, shipping, payment, and status.",
        "Security: Double-checks order belongs to user (findOne with user ID).",
        "Layout: Two-column — items list left, summary + address right.",
        "Fallbacks: Shows 'Product no longer available' if product deleted."
      ],
      "code": `
      // Example: Owner check
      const order = await Order.findOne({ _id: id, user: userId });
      `,
      "moreText": "Rich order details reduce support queries and increase satisfaction."
    },
    {
      "title": "Admin Dashboard",
      "subtitle": "Complete Platform Control Center",
      "details": [
        "Purpose: Single interface for managing products, orders, users, and stats.",
        "Tabs: Overview (stats), Products (list), Orders (status updates), Users (role toggle).",
        "Real-Time: All actions update instantly without page refresh.",
        "Security: ProtectedRoute with adminOnly + backend admin checks."
      ],
      "code": `
      // Example: Admin route
      <ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>
      `,
      "moreText": "A powerful admin dashboard is the backbone of any serious e-commerce store."
    },
    {
      "title": "",
      "subtitle": "Concurrent Admin Data Fetching",
      "details": [
        "Purpose: Loads stats, products, orders, and users simultaneously for fast dashboard.",
        "Mechanics: Promise.all with 4 API calls — reduces load time dramatically.",
        "Performance: Single loading state while all data arrives together.",
        "Result: Dashboard feels instant even with large datasets."
      ],
      "code": `
      // Example: Parallel fetch
      const [stats, products, orders, users] = await Promise.all([fetchStats(), fetchProducts(), fetchOrders(), fetchUsers()]);
      `,
      "moreText": "Concurrent fetching transforms slow admin pages into snappy experiences."
    },
    {
      "title": "",
      "subtitle": "Order Status Management",
      "details": [
        "Purpose: Lets admins move orders through lifecycle: pending → delivered.",
        "Mechanics: Inline dropdown triggers PATCH /api/orders/:id/status.",
        "Real-Time: Status updates instantly in table and persists on refresh.",
        "Workflow: Supports pending, processing, shipped, delivered, cancelled."
      ],
      "code": `
      // Example: Status dropdown
      <select value={status} onChange={e => handleStatusChange(id, e.target.value)}>
        <option value="shipped">Ship Revenued</option>
      </select>
      `,
      "moreText": "Live status updates enable efficient fulfillment operations."
    },
    {
      "title": "",
      "subtitle": "User Role Management",
      "details": [
        "Purpose: Promote trusted users to admin or demote when needed.",
        "Mechanics: Toggle button sends PATCH to change role, updates UI instantly.",
        "Security: Only current admins can modify roles.",
        "Audit Trail: Changes persist in database for accountability."
      ],
      "code": `
      // Example: Role toggle
      <button onClick={() => handleToggleAdmin(userId, role)}>
        {role === 'admin' ? 'Demote' : 'Make Admin'}
      </button>
      `,
      "moreText": "Flexible role management supports team growth and access control."
    },
    {
      "title": "",
      "subtitle": "Tab-Based Admin Interface",
      "details": [
        "Purpose: Organizes complex admin functionality into clear, focused sections.",
        "Mechanics: activeTab state controls which content renders.",
        "Navigation: Clean tab buttons with active styling for current view.",
        "UX: Reduces cognitive load by showing one responsibility at a time."
      ],
      "code": `
      // Example: Tab navigation
      <button onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>
        Orders
      </button>
      `,
      "moreText": "Tabbed interfaces make complex dashboards feel simple and intuitive."
    },
    {
      "title": "",
      "subtitle": "End-to-End Testing Strategy",
      "details": [
        "Purpose: Validates entire user and admin journeys work flawlessly together.",
        "User Flow: Register → Browse → Cart → Checkout → Profile → Order Detail.",
        "Admin Flow: Login → Dashboard → Update Status → Toggle Roles → View Stats.",
        "Edge Cases: Logged out access, bad tokens, empty states, mobile layout."
      ],
      "code": `
      // Example: Full journey
      Guest → Login → Add to Cart → Checkout → View in Profile → Admin Updates Status
      `,
      "moreText": "Comprehensive testing ensures a polished, production-ready e-commerce app."
    }
  ]
},
{
  "taskId": "ecom24",
  "content": [
    {
      "title": "Admin API Architecture",
      "subtitle": "Dedicated Admin Routes File",
      "details": [
        "Purpose: Isolates admin-only endpoints from regular routes for clarity and security.",
        "Mechanics: Creates adminRoutes.js with router.use() applying auth + admin middleware globally.",
        "Security: Every route automatically protected — no need to repeat middleware.",
        "Mounting: Mounted at /api/admin in server.js, creating clean namespace."
      ],
      "code": `
      // Example: Global protection
      router.use(authMiddleware, adminMiddleware);
      router.get('/stats', getStats);
      `,
      "moreText": "Dedicated admin routes are professional practice — clean, secure, and scalable."
    },
    {
      "title": "",
      "subtitle": "JWT Secret Key Generation",
      "details": [
        "Purpose: Creates secure keys for JWTs used in admin authentication.",
        "Mechanics: Generates random, high-entropy strings for access and refresh tokens.",
        "Security: Keys stored in .env, never in code — prevents token forgery.",
        "Significance: Ensures only valid admins access protected endpoints."
      ],
      "code": `
      // Example: Generate key
      const crypto = require('crypto');
      const secret = crypto.randomBytes(64).toString('hex');
      `,
      "moreText": "Strong JWT keys are the foundation of secure admin access."
    },
    {
      "title": "",
      "subtitle": "Admin Stats Endpoint",
      "details": [
        "Purpose: Provides dashboard metrics: total products, orders, revenue, and users.",
        "Mechanics: Uses Promise.all for concurrent queries — counts products, users, and calculates revenue from orders.",
        "Performance: Fetches all data in parallel instead of sequentially.",
        "Accuracy: Calculates revenue from actual order totals, not estimates."
      ],
      "code": `
      // Example: Concurrent stats
      const [products, orders, users] = await Promise.all([
        Product.countDocuments(),
        Order.find(),
        User.countDocuments()
      ]);
      `,
      "moreText": "Real-time stats empower admins with instant business insights."
    },
    {
      "title": "",
      "subtitle": "Global Admin Middleware Protection",
      "details": [
        "Purpose: Ensures every admin route requires both authentication and admin role.",
        "Mechanics: router.use(authMiddleware, adminMiddleware) applies to ALL routes in file.",
        "Security: Eliminates risk of forgetting middleware on individual routes.",
        "Clean Code: No repetitive middleware on every route definition."
      ],
      "code": `
      // Example: Global protection
      router.use(authMiddleware, adminMiddleware);
      // All routes below are automatically protected
      router.get('/users', getAllUsers);
      `,
      "moreText": "Global middleware is the safest pattern for admin APIs."
    },
    {
      "title": "",
      "subtitle": "Route Order Criticality",
      "details": [
        "Purpose: Prevents static routes from being intercepted by dynamic parameter routes.",
        "Root Cause: /:id matches anything — including 'categories' or 'stats'.",
        "Solution: Always place static routes (like /stats) BEFORE dynamic routes (like /:id).",
        "Express Rule: Routes are matched top-to-bottom — order matters!"
      ],
      "code": `
      // Correct order
      router.get('/stats', getStats);        // Static first
      router.get('/:id', getUserById);       // Dynamic last
      `,
      "moreText": "Route ordering bugs cause silent 500 errors — always static before dynamic."
    },
    {
      "title": "",
      "subtitle": "All Users Endpoint",
      "details": [
        "Purpose: Enables admin dashboard to display complete user list with roles.",
        "Mechanics: User.find().select('-password') returns all users without exposing passwords.",
        "Security: Only accessible via admin-protected route.",
        "Data Privacy: Never return passwords — always exclude sensitive fields."
      ],
      "code": `
      // Example: Safe user fetch
      const users = await User.find().select('-password');
      res.json({ users });
      `,
      "moreText": "Secure user listing is essential for admin management tools."
    },
    {
      "title": "",
      "subtitle": "Role Update Endpoint",
      "details": [
        "Purpose: Allows admins to promote users to admin or demote admins to regular users.",
        "Mechanics: PATCH /:id/role accepts role in body, validates, and updates user.",
        "Validation: Checks role is either 'user' or 'admin' before updating.",
        "Response: Returns updated user document for immediate UI reflection."
      ],
      "code": `
      // Example: Role update
      if (!['user', 'admin'].includes(role)) return res.status(400).json({ message: 'Invalid role' });
      const user = await User.findByIdAndUpdate(id, { role }, { new: true });
      `,
      "moreText": "Role management enables team collaboration and access control."
    },
    {
      "title": "",
      "subtitle": "Admin Route Mounting Pattern",
      "details": [
        "Purpose: Creates clean, namespaced admin API under /api/admin.",
        "Mechanics: app.use('/api/admin', adminRoutes) mounts entire admin router.",
        "Organization: Keeps admin endpoints separate from public/user routes.",
        "Scalability: Easy to add new admin features without cluttering main server file."
      ],
      "code": `
      // Example: Mount admin routes
      app.use('/api/admin', adminRoutes);
      // Creates /api/admin/stats, /api/admin/users, etc.
      `,
      "moreText": "Namespaced admin routes are professional API design."
    },
    {
      "title": "",
      "subtitle": "Frontend-Backend Endpoint Sync",
      "details": [
        "Purpose: Ensures frontend calls match actual backend routes to prevent errors.",
        "Common Issues: /api/orders vs /api/orders/all, missing /admin prefix.",
        "Debugging: Check Network tab for 404s and match URLs to server.js mounts.",
        "Consistency: Frontend URLs must exactly match backend route definitions."
      ],
      "code": `
      // Example: Correct admin call
      fetch('/api/admin/stats', { headers: { Authorization: \`Bearer \${token}\` } })
      `,
      "moreText": "Endpoint sync is the #1 cause of 'works on my machine' bugs."
    },
    {
      "title": "",
      "subtitle": "Production-Grade Admin API",
      "details": [
        "Purpose: Complete, secure admin backend used by real e-commerce platforms.",
        "Features: Stats dashboard, user management, order oversight, role control.",
        "Security: Global auth + admin middleware, password exclusion, input validation.",
        "Reliability: Concurrent queries, proper error handling, route ordering."
      ],
      "code": `
      // Example: Full admin system
      /api/admin/stats     → Dashboard metrics
      /api/admin/users     → List all users
      /api/admin/users/:id/role → Update role
      `,
      "moreText": "This is how professional e-commerce platforms build admin APIs."
    }
  ]
},
{
  "taskId": "ecom25",
  "content": [
    {
      "title": "Interactive Image Gallery",
      "subtitle": "Thumbnail Selection with Active State",
      "details": [
        "Purpose: Allows users to view different product angles by clicking thumbnails.",
        "Mechanics: selectedImage state tracks active index, main image displays product.images[selectedImage].",
        "UX: Active thumbnail gets visual highlight (border, opacity), immediate main image swap.",
        "Performance: All images pre-loaded in thumbnails, no delay on click."
      ],
      "code": `
      // Example: Clickable thumbnails
      {product.images.map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={() => setSelectedImage(i)}
          className={i === selectedImage ? styles.thumbActive : styles.thumb}
        />
      ))}
      `,
      "moreText": "Interactive galleries dramatically increase user confidence and reduce returns."
    },
    {
      "title": "",
      "subtitle": "Auth-Aware Review Form",
      "details": [
        "Purpose: Only logged-in users can submit reviews, preventing spam and ensuring accountability.",
        "Mechanics: useAuth() provides user object — form renders only when user exists.",
        "Security: Backend will reject unauthenticated review attempts anyway, but UI hides form.",
        "UX: Clear visual distinction — logged-out users see message, logged-in see form."
      ],
      "code": `
      // Example: Conditional form
      {user ? <ReviewForm /> : <p>Log in to write a review</p>}
      `,
      "moreText": "Auth-gated reviews build trust — only real customers can share feedback."
    },
    {
      "title": "",
      "subtitle": "fetchWithAuth Helper",
      "details": [
        "Purpose: Eliminates repetitive token handling in authenticated API calls.",
        "Mechanics: AuthContext provides fetchWithAuth() that automatically adds Bearer token from localStorage.",
        "Cleaner Code: No more manual headers object on every request.",
        "Consistency: All authenticated calls use same secure pattern."
      ],
      "code": `
      // Example: Simplified request
      const res = await fetchWithAuth('/api/cart', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      `,
      "moreText": "fetchWithAuth is a professional pattern that prevents token bugs forever."
    },
    {
      "title": "",
      "subtitle": "Review Submission Flow",
      "details": [
        "Purpose: Enables customers to share ratings and written feedback on products.",
        "Mechanics: Form state → handleReviewSubmit → POST /api/products/:id/ratings → success → update product.",
        "Validation: Requires rating, allows optional comment.",
        "Feedback: Success/error toasts, submitting state disables button."
      ],
      "code": `
      // Example: Submit review
      await fetchWithAuth(\`/api/products/\${id}/ratings\`, {
        method: 'POST',
        body: JSON.stringify(reviewForm)
      });
      `,
      "moreText": "User reviews are the #1 trust signal in e-commerce — worth doing perfectly."
    },
    {
      "title": "",
      "subtitle": "Real-Time Review Updates",
      "details": [
        "Purpose: Shows new review instantly without page refresh.",
        "Mechanics: On success, backend returns updated product → setProduct(data.product).",
        "Result: New review appears immediately in list, average rating updates.",
        "No Refresh: Seamless experience — user sees their review posted instantly."
      ],
      "code": `
      // Example: Live update
      onSuccess: (data) => setProduct(data.product)
      `,
      "moreText": "Instant feedback makes users feel heard and encourages more reviews."
    },
    {
      "title": "",
      "subtitle": "Star Rating Display System",
      "details": [
        "Purpose: Visually communicates product quality at a glance using filled/empty stars.",
        "Mechanics: String repeat: '★'.repeat(rating) + '☆'.repeat(5-rating).",
        "Precision: Shows exact rating (e.g., 4.3 → 4 filled + 1 empty).",
        "Accessibility: Includes aria-label with exact rating for screen readers."
      ],
      "code": `
      // Example: Star rendering
      <span aria-label={\`\${rating} out of 5 stars\`}>
        {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
      </span>
      `,
      "moreText": "Stars are universally understood — the fastest way to convey quality."
    },
    {
      "title": "",
      "subtitle": "Responsive Image Gallery",
      "details": [
        "Purpose: Adapts gallery layout for mobile, tablet, and desktop viewing.",
        "Mechanics: Main image full-width, thumbnails wrap below on small screens.",
        "Mobile UX: Large touch targets, scrollable thumbnails if many images.",
        "Performance: lazy loading on thumbnails, efficient memory use."
      ],
      "code": `
      // Example: Responsive gallery
      @media (min-width: 768px) {
        .gallery { display: grid; grid-template-columns: 1fr 100px; }
        .thumbs { flex-direction: column; }
      }
      `,
      "moreText": "Mobile-first galleries ensure product images shine on every device."
    },
    {
      "title": "",
      "subtitle": "Review Form Validation & UX",
      "details": [
        "Purpose: Ensures meaningful reviews while maintaining smooth submission.",
        "Mechanics: Rating required, comment optional, clear labels, disabled state during submit.",
        "Feedback: Success toast confirms submission, error toast explains issues.",
        "Prevention: Disables button during request to prevent duplicate submits."
      ],
      "code": `
      // Example: Submit protection
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      `,
      "moreText": "Thoughtful form UX turns casual shoppers into engaged reviewers."
    },
    {
      "title": "",
      "subtitle": "Toast Notification System",
      "details": [
        "Purpose: Provides instant, non-blocking feedback for all user actions.",
        "Mechanics: Toast state in component, auto-hide after 3 seconds, animated entry/exit.",
        "Types: Success (green), Error (red), Info (blue) — consistent across entire app.",
        "Position: Bottom-right, non-intrusive, doesn’t block interaction."
      ],
      "code": `
      // Example: Toast trigger
      setToast({ type: 'success', message: 'Review submitted!' });
      setTimeout(() => setToast(null), 3000);
      `,
      "moreText": "Toasts are the modern replacement for alert() — professional and user-friendly."
    },
    {
      "title": "",
      "subtitle": "Professional Product Detail Page",
      "details": [
        "Purpose: Final persuasion point before purchase — must be perfect.",
        "Features: Gallery + thumbnails, live reviews, quantity control, secure add-to-cart, trust signals.",
        "Conversion: Every element designed to reduce doubt and encourage buying.",
        "Standard: Matches Amazon-style layout — the gold standard users expect."
      ],
      "code": `
      // Example: Complete detail page
      Gallery → Info | Summary + Add to Cart
      Reviews Section Below
      `,
      "moreText": "A perfect product detail page can increase conversion by 30%+ — worth the effort."
    }
  ]
},
{
  "taskId": "ecom26",
  "content": [
    {
      "title": "Checkout Field Mapping",
      "subtitle": "Frontend ↔ Backend Alignment",
      "details": [
        "Purpose: Ensures form data matches exact field names expected by backend schema.",
        "Critical Mismatches: 'address' → 'street', 'postcode' → 'postalCode', 'card' → 'stripe'.",
        "Rule: Frontend must send keys that exactly match Mongoose schema field names.",
        "Debug Tip: 400 errors with 'Path `street` is required' mean key name mismatch."
      ],
      "code": `
      // Correct mapping
      shippingAddress: {
        street: formData.address,
        postalCode: formData.postcode,
        // ...other fields
      }
      `,
      "moreText": "Field name mismatches are the #1 cause of silent checkout failures."
    },
    {
      "title": "",
      "subtitle": "UK Postcode & Address Standards",
      "details": [
        "Purpose: Saves shipping data in standardized format for reliable delivery.",
        "Backend Schema: Uses 'street' and 'postalCode' — common in international systems.",
        "Frontend Display: Shows 'Address' and 'Postcode' for user-friendliness.",
        "Consistency: Backend stores uniformly, frontend adapts for local conventions."
      ],
      "code": `
      // Frontend form → Backend
      street: formData.address,
      postalCode: formData.postcode
      `,
      "moreText": "Proper field mapping ensures orders are deliverable and searchable."
    },
    {
      "title": "",
      "subtitle": "Payment Method Enum Values",
      "details": [
        "Purpose: Uses exact values allowed by Order schema enum to prevent validation errors.",
        "Common Mistake: Sending 'card' when schema only accepts 'stripe', 'paypal', 'cod'.",
        "Solution: Map user-friendly labels to backend enum values.",
        "Best Practice: Keep enum values stable, map display text separately."
      ],
      "code": `
      // Correct value
      paymentMethod: 'stripe'  // Not 'card'
      // Label: 'Credit/Debit Card (Stripe)'
      `,
      "moreText": "Enum mismatches cause cryptic Mongoose validation errors — always match exactly."
    },
    {
      "title": "",
      "subtitle": "fetchWithAuth Magic",
      "details": [
        "Purpose: Automatically handles token refresh and retry on 401 errors.",
        "Mechanics: Intercepts failed requests, refreshes token, retries original request.",
        "Zero Code: Replace fetch() → fetchWithAuth() and remove manual headers.",
        "Reliability: Eliminates random 401 errors during checkout."
      ],
      "code": `
      // Before (manual)
      fetch(url, { headers: { Authorization: \`Bearer \${token}\` } })
      
      // After (magic)
      fetchWithAuth(url, { method: 'POST', body })
      `,
      "moreText": "fetchWithAuth is production-grade auth handling — no more token expiry crashes."
    },
    {
      "title": "",
      "subtitle": "Stock Validation Before Order",
      "details": [
        "Purpose: Prevents selling more items than available — critical for inventory integrity.",
        "Mechanics: Checks each item’s stock before saving order.",
        "Atomic Safety: Uses $inc operator after order save to prevent race conditions.",
        "User Experience: Shows clear 'Insufficient stock' message if unavailable."
      ],
      "code": `
      // Example: Stock check
      if (dbProduct.stock < item.quantity) {
        return res.status(400).json({ 
          message: \`Insufficient stock for \${dbProduct.name}\` 
        });
      }
      `,
      "moreText": "Stock validation prevents angry customers and inventory disasters."
    },
    {
      "title": "",
      "subtitle": "Atomic Stock Decrement",
      "details": [
        "Purpose: Safely reduces stock even with concurrent orders.",
        "Mechanics: Uses MongoDB’s $inc operator — atomic at database level.",
        "Race Condition Proof: Two simultaneous orders can’t oversell.",
        "Reliability: Preferred over fetch-modify-save pattern."
      ],
      "code": `
      // Example: Atomic decrement
      await Product.findByIdAndUpdate(productId, {
        $inc: { stock: -quantity }
      });
      `,
      "moreText": "$inc is the gold standard for inventory management in e-commerce."
    },
    {
      "title": "",
      "subtitle": "Post-Order Cart Clearing",
      "details": [
        "Purpose: Empties user’s cart after successful purchase.",
        "Mechanics: After order.save(), clears cart.items array in database.",
        "UI Sync: Calls updateCartCount() to refresh navbar badge instantly.",
        "Clean State: Prevents old items from reappearing on refresh."
      ],
      "code": `
      // Example: Clear cart
      await Cart.findOneAndUpdate(
        { user: userId },
        { $set: { items: [] } }
      );
      `,
      "moreText": "Clearing cart after order is essential for clean user experience."
    },
    {
      "title": "",
      "subtitle": "Real-Time Cart Badge After Checkout",
      "details": [
        "Purpose: Updates navbar cart count immediately after order placement.",
        "Mechanics: Calls updateCartCount() after successful order.",
        "Consistency: Badge shows 0 right away — no delay or refresh needed.",
        "UX Win: Users see confirmation their cart is now empty."
      ],
      "code": `
      // Example: Sync badge
      await updateCartCount(); // After order success
      `,
      "moreText": "Instant cart count update feels magical and professional."
    },
    {
      "title": "",
      "subtitle": "Production-Grade Checkout Flow",
      "details": [
        "Purpose: Delivers bulletproof checkout used by real e-commerce stores.",
        "Features: Field mapping, enum values, token refresh, stock safety, cart clearing.",
        "Security: fetchWithAuth, validation, atomic operations.",
        "Reliability: No race conditions, no overselling, no stale data."
      ],
      "code": `
      // Complete flow
      Validate → Check stock → Save order → Decrement stock → Clear cart → Update UI
      `,
      "moreText": "This is how Amazon-level checkout reliability is built."
    },
    {
      "title": "",
      "subtitle": "Common Checkout Bugs & Fixes",
      "details": [
        "400 Bad Request: Field name mismatch (address vs street).",
        "ValidationError: Wrong enum value (card vs stripe).",
        "401 Unauthorized: Missing/expired token → use fetchWithAuth.",
        "Overselling: No stock check → add validation + $inc.",
        "Stale cart: Not cleared → empty items array after order."
      ],
      "code": `
      // Debug checklist
      - Check request body keys
      - Match schema exactly
      - Use fetchWithAuth
      - Validate stock
      - Clear cart
      `,
      "moreText": "99% of checkout bugs come from these 5 issues — master them and win."
    }
  ]
},
{
  "taskId": "ecom27",
  "content": [
    {
      "title": "Admin Product Management",
      "subtitle": "Add/Edit Product Modal",
      "details": [
        "Purpose: Provides unified interface for creating new products and editing existing ones.",
        "Mechanics: Controlled by showProductModal state, editingProduct determines mode.",
        "Form State: productForm holds input values, productFormErrors tracks validation.",
        "UX: Clean fields on add, pre-filled on edit, validation feedback on submit."
      ],
      "code": `
      // Example: Modal toggle
      {showProductModal && <ProductModal />}
      `,
      "moreText": "Single modal for add/edit reduces code duplication and ensures consistency."
    },
    {
      "title": "",
      "subtitle": "Form Validation Pattern",
      "details": [
        "Purpose: Prevents invalid data from reaching backend, improving data quality.",
        "Mechanics: validateProductForm checks required fields, types, and ranges.",
        "Real-Time Feedback: Errors display inline, cleared on input change.",
        "Submission Guard: handleSaveProduct returns early if validation fails."
      ],
      "code": `
      // Example: Validation
      if (!name.trim()) errors.name = 'Name is required';
      if (isNaN(price) || price < 0) errors.price = 'Valid price required';
      `,
      "moreText": "Client-side validation catches errors early, reducing failed API calls."
    },
    {
      "title": "",
      "subtitle": "Categories Autocomplete",
      "details": [
        "Purpose: Guides admins to use consistent categories and speeds data entry.",
        "Mechanics: Fetches categories from backend, uses <datalist> for suggestions.",
        "Data Sync: Categories loaded once on mount, used in both form and filter.",
        "Flexibility: Still allows new categories — not restricted to list."
      ],
      "code": `
      // Example: Datalist
      <input list="categories" name="category" />
      <datalist id="categories">
        {categories.map(cat => <option key={cat} value={cat} />)}
      </datalist>
      `,
      "moreText": "Datalist offers guidance without restricting creativity — perfect for categories."
    },
    {
      "title": "",
      "subtitle": "Image URL Management",
      "details": [
        "Purpose: Allows multiple product images via comma-separated URLs.",
        "Mechanics: Form stores as string, converts to array on submit with split/trim.",
        "Validation: Filters empty strings, accepts any valid image URLs.",
        "Display: Shows first image as thumbnail in table."
      ],
      "code": `
      // Example: Convert images
      const images = form.images.split(',').map(url => url.trim()).filter(Boolean);
      `,
      "moreText": "Comma-separated URLs are simple yet powerful for multiple images."
    },
    {
      "title": "",
      "subtitle": "Delete Confirmation Modal",
      "details": [
        "Purpose: Prevents accidental product deletion with irreversible consequences.",
        "Mechanics: deleteConfirm state holds product, modal asks for confirmation.",
        "Safety: Requires explicit 'Delete' click, shows product name.",
        "UX: Overlay blocks interaction, clear Cancel/Delete options."
      ],
      "code": `
      // Example: Confirm modal
      {deleteConfirm && (
        <div className="overlay">
          <div className="modal">Delete {deleteConfirm.name}?</div>
        </div>
      )}
      `,
      "moreText": "Confirmation dialogs are essential for destructive actions."
    },
    {
      "title": "",
      "subtitle": "Toast Notification System",
      "details": [
        "Purpose: Provides instant feedback for save/delete operations without blocking UI.",
        "Mechanics: showToast sets toast state with type/message, auto-hides after 3s.",
        "Types: success (green), error (red) — consistent visual language.",
        "Position: Fixed bottom-right, animated entry/exit."
      ],
      "code": `
      // Example: Show toast
      showToast('success', 'Product saved successfully!');
      setTimeout(() => setToast(null), 3000);
      `,
      "moreText": "Toasts are the modern, professional way to communicate action results."
    },
    {
      "title": "",
      "subtitle": "Stock Status Visualization",
      "details": [
        "Purpose: Instantly communicates inventory health in product table.",
        "Mechanics: Conditional classes: stockGood (>10), stockLow (1-10), stockOut (0).",
        "Colors: Green, orange, red — universal meaning for availability.",
        "Admin Insight: Quick scan shows which products need restocking."
      ],
      "code": `
      // Example: Stock class
      className={stock > 10 ? 'good' : stock > 0 ? 'low' : 'out'}
      `,
      "moreText": "Visual stock indicators enable rapid inventory decisions."
    },
    {
      "title": "",
      "subtitle": "Concurrent Data Loading",
      "details": [
        "Purpose: Loads stats, products, orders, users, and categories simultaneously.",
        "Mechanics: Promise.all with multiple fetchWithAuth calls.",
        "Performance: Reduces total load time from sequential to parallel.",
        "UX: Single loading state while all data arrives together."
      ],
      "code": `
      // Example: Parallel fetch
      const [stats, products, orders, users, categories] = await Promise.all([...]);
      `,
      "moreText": "Concurrent fetching makes admin dashboards feel instant."
    },
    {
      "title": "",
      "subtitle": "Form Reset Pattern",
      "details": [
        "Purpose: Ensures clean form state when opening modal for add or after save.",
        "Mechanics: resetProductForm clears values and errors.",
        "Consistency: Called on add, cancel, and after successful save.",
        "Prevents: Old data persisting when creating new products."
      ],
      "code": `
      // Example: Reset form
      const resetProductForm = () => {
        setProductForm(initialState);
        setProductFormErrors({});
      };
      `,
      "moreText": "Proper form reset prevents subtle but frustrating bugs."
    },
    {
      "title": "",
      "subtitle": "Production-Grade Admin Experience",
      "details": [
        "Purpose: Complete professional admin interface matching real e-commerce platforms.",
        "Features: Add/edit/delete products, stock visibility, category management, feedback.",
        "Security: Protected routes, validation, error handling, confirmation dialogs.",
        "Reliability: Concurrent loading, real-time updates, defensive programming."
      ],
      "code": `
      // Example: Full admin flow
      Dashboard → Products → Add/Edit → Save → Table updates instantly
      `,
      "moreText": "This is how real e-commerce platforms build their admin panels."
    }
  ]
},
{
  "taskId": "ecom28",
  "content": [
    {
      "title": "Stale Closure Bug",
      "subtitle": "The Hidden React Gotcha",
      "details": [
        "Purpose: Prevents components from using outdated data when state changes.",
        "Root Cause: Functions defined inside useEffect capture variables from the render they were created in.",
        "Classic Symptom: After switching users, pages still show old user's data.",
        "Solution: Add relevant dependencies to useEffect array so effect re-runs."
      ],
      "code": `
      // Wrong - stale data
      useEffect(() => { fetchData(); }, []);
      
      // Correct - fresh data
      useEffect(() => { fetchData(); }, [user]);
      `,
      "moreText": "Stale closures are the #1 cause of 'it works on my machine' bugs in React."
    },
    {
      "title": "",
      "subtitle": "useCallback for Stable Functions",
      "details": [
        "Purpose: Prevents unnecessary re-creation of functions passed to children or dependencies.",
        "Mechanics: Wraps function in useCallback with proper dependency array.",
        "Critical For: Custom hooks returning functions (like fetchWithAuth).",
        "Performance & Correctness: Stops child effects from re-running unnecessarily."
      ],
      "code": `
      // Example: Stable helper
      const fetchWithAuth = useCallback(async (url, options) => {
        // ...logic
      }, []);
      `,
      "moreText": "useCallback is essential when returning functions from context or hooks."
    },
    {
      "title": "",
      "subtitle": "User as Dependency",
      "details": [
        "Purpose: Triggers data refresh when user changes (login/logout/switch).",
        "Mechanics: Add user to useEffect dependency array of data-fetching effects.",
        "Guard Clause: Return early if !user to prevent fetch when logged out.",
        "Pages Affected: Profile, Cart, Checkout, OrderDetail, AdminDashboard."
      ],
      "code": `
      // Example: User-dependent fetch
      useEffect(() => {
        if (!user) return;
        loadData();
      }, [user]);
      `,
      "moreText": "User dependency is the key to fixing stale data after auth changes."
    },
    {
      "title": "",
      "subtitle": "Early Return Pattern",
      "details": [
        "Purpose: Prevents unnecessary API calls when user is not authenticated.",
        "Mechanics: Guard clause at top of useEffect: if (!user) return;",
        "Safety: Avoids 401 errors and wasted requests.",
        "Clean Code: Makes intent clear — this effect only runs for logged-in users."
      ],
      "code": `
      // Example: Guard clause
      useEffect(() => {
        if (!user) return;
        fetchCart();
      }, [user]);
      `,
      "moreText": "Early returns make effects predictable and efficient."
    },
    {
      "title": "",
      "subtitle": "Dependency Array Best Practices",
      "details": [
        "Purpose: Ensures effects run exactly when they should — no more, no less.",
        "Rules: Include all external values used inside effect.",
        "Common Misses: user, id from params, functions from context.",
        "Linter Help: React Hook useEffect has a missing dependency warning."
      ],
      "code": `
      // Example: Complete dependencies
      useEffect(() => { ... }, [user, id, updateCartCount]);
      `,
      "moreText": "Correct dependencies eliminate 90% of React bugs."
    },
    {
      "title": "",
      "subtitle": "Multi-User Testing Strategy",
      "details": [
        "Purpose: Verifies stale data fixes work in real switching scenarios.",
        "Flow: Login User A → Use feature → Logout → Login User B → Check data.",
        "Critical Pages: Profile, Cart, Checkout, Orders, Admin.",
        "Expected: Each user sees only their own data, no leakage."
      ],
      "code": `
      // Test scenario
      User A adds to cart → Logout → User B logs in → Cart shows B's items (or empty)
      `,
      "moreText": "Multi-user testing catches auth bugs that single-user flows miss."
    },
    {
      "title": "",
      "subtitle": "ProtectedRoute + Dependency Sync",
      "details": [
        "Purpose: Complete protection — redirect unauth + refresh data on auth change.",
        "Combo: ProtectedRoute handles access, user dependency handles data.",
        "Result: Seamless experience when switching accounts.",
        "Professional: Matches behavior of real apps like Amazon, Shopify."
      ],
      "code": `
      // Combined power
      <ProtectedRoute><CartPage /></ProtectedRoute> // + user in deps
      `,
      "moreText": "This combination delivers bulletproof authentication experience."
    },
    {
      "title": "",
      "subtitle": "React DevTools Debugging",
      "details": [
        "Purpose: Visualize when effects run and why.",
        "Technique: Use console.log in effects to see execution order.",
        "Advanced: React DevTools Profiler shows component re-renders.",
        "Insight: Confirms dependencies are correct."
      ],
      "code": `
      // Debug effect
      useEffect(() => {
        console.log('Effect ran with user:', user?.name);
      }, [user]);
      `,
      "moreText": "Logging in effects is the fastest way to debug stale data issues."
    },
    {
      "title": "",
      "subtitle": "Production-Grade Auth Flow",
      "details": [
        "Purpose: Seamless auth across entire app with zero stale data.",
        "Features: Auto-restore, protected routes, real-time sync, dependency fixes.",
        "Result: Users can switch accounts and everything just works.",
        "Standard: This is how professional React apps handle authentication."
      ],
      "code": `
      // Complete system
      AuthContext → ProtectedRoute → User dependency → Fresh data always
      `,
      "moreText": "Fixing stale data transforms a buggy app into a professional one."
    },
    {
      "title": "",
      "subtitle": "The Golden Rule of useEffect",
      "details": [
        "Purpose: Never lie to React about your dependencies.",
        "Rule: If you use a value inside useEffect, it belongs in the dependency array.",
        "Exceptions: Only setState functions and primitives defined inside component.",
        "Consequence: Missing deps = stale closures = subtle, hard-to-find bugs."
      ],
      "code": `
      // Always include
      useEffect(() => {
        // uses user, id, fetchWithAuth
      }, [user, id, fetchWithAuth]);
      `,
      "moreText": "Following the dependency rule eliminates an entire class of React bugs."
    }
  ]
},
{
  "taskId": "ecom29",
  "content": [
    {
      "title": "React-Toastify Integration",
      "subtitle": "Professional Notification System",
      "details": [
        "Purpose: Replaces custom toasts with react-toastify for better animations, accessibility, and consistency.",
        "Mechanics: Global ToastContainer renders all toasts, utility functions handle types (success, error, info, warning).",
        "Customization: Position bottom-right, autoClose 3000ms, colored theme, draggable, pause on hover.",
        "Benefits: Reduces code duplication, improves UX with smooth animations and accessibility features."
      ],
      "code": `
      // Example: Global container
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      `,
      "moreText": "react-toastify is the industry standard for professional React notifications."
    },
    {
      "title": "",
      "subtitle": "Toast Utility Functions",
      "details": [
        "Purpose: Centralizes toast creation with consistent styling and behavior.",
        "Mechanics: Export showSuccess, showError, showInfo, showWarning functions.",
        "Consistency: All toasts use same position, duration, and animation.",
        "Error Handling: Longer duration for errors (4000ms) so users can read them."
      ],
      "code": `
      // Example: Utility
      export const showSuccess = (message) => toast.success(message, {
        position: 'bottom-right',
        autoClose: 3000,
        // ...options
      });
      `,
      "moreText": "Utility functions make toast usage clean and maintainable."
    },
    {
      "title": "",
      "subtitle": "Migration from Custom Toasts",
      "details": [
        "Purpose: Removes custom state, setTimeout, and JSX while preserving functionality.",
        "Mechanics: Delete toast state and setToast calls, replace with toast.success/error.",
        "Cleanup: Remove toast JSX and CSS classes from modules.",
        "Result: Simpler components, better performance, richer animations."
      ],
      "code": `
      // Before
      setToast({ type: 'success', message });
      
      // After
      toast.success(message);
      `,
      "moreText": "Migration eliminates custom toast bugs and improves maintainability."
    },
    {
      "title": "",
      "subtitle": "ToastContainer Configuration",
      "details": [
        "Purpose: Controls global toast behavior across the entire application.",
        "Mechanics: Position, duration, progress bar, click/drag/pause settings.",
        "Theme: 'colored' gives success green, error red, info blue backgrounds.",
        "Placement: Bottom-right is standard for non-intrusive notifications."
      ],
      "code": `
      // Example: Config
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      `,
      "moreText": "ToastContainer is the heart of react-toastify — configure once, use everywhere."
    },
    {
      "title": "",
      "subtitle": "Multiple Toast Types",
      "details": [
        "Purpose: Provides visual distinction for different notification types.",
        "Types: success (green), error (red), info (blue), warning (yellow).",
        "Usage: showSuccess for positive actions, showError for failures.",
        "Customization: Consistent styling across all components."
      ],
      "code": `
      // Example: Different types
      showSuccess('Product added to cart');
      showError('Failed to save product');
      `,
      "moreText": "Clear visual distinction helps users understand what happened instantly."
    },
    {
      "title": "",
      "subtitle": "Duplicate React Instance Fix",
      "details": [
        "Purpose: Resolves 'Invalid hook call' errors caused by multiple React copies.",
        "Root Cause: react-toastify bundles its own React, causing hook conflicts.",
        "Solution: Alias React and react-dom in Rspack/Webpack config to use single instance.",
        "Alternative: Clean node_modules reinstall if aliases not possible."
      ],
      "code": `
      // Example: Rspack alias
      resolve: {
        alias: {
          react: path.resolve(__dirname, 'node_modules/react'),
          'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
        }
      }
      `,
      "moreText": "Duplicate React is a common trap — aliases fix it permanently."
    },
    {
      "title": "",
      "subtitle": "Toast Accessibility",
      "details": [
        "Purpose: Ensures notifications are accessible to screen reader users.",
        "Mechanics: react-toastify uses aria-live regions for announcements.",
        "Features: Auto-focus on toast, keyboard dismissal, high contrast.",
        "Best Practice: Keep messages clear and concise for accessibility."
      ],
      "code": `
      // Example: Accessible toast
      toast.success('Order placed successfully', { ariaLabel: 'Order confirmation' });
      `,
      "moreText": "Accessibility in toasts ensures inclusive user experiences."
    },
    {
      "title": "",
      "subtitle": "Consistent Toast Styling",
      "details": [
        "Purpose: Maintains brand consistency with custom colors and animations.",
        "Mechanics: 'colored' theme uses success/error/info/warning colors.",
        "Customization: Override styles via CSS or toast options.",
        "Professional: Matches your app’s color palette perfectly."
      ],
      "code": `
      // Example: Custom colors
      toast.success(message, { style: { background: 'var(--success-color)' } });
      `,
      "moreText": "Consistent toasts reinforce brand identity across the app."
    },
    {
      "title": "",
      "subtitle": "Toast Lifecycle Management",
      "details": [
        "Purpose: Controls toast duration, stacking, and dismissal behavior.",
        "Mechanics: newestOnTop=true, pauseOnHover, draggable, closeOnClick.",
        "Duration: 3000ms standard, 4000ms for errors.",
        "Stacking: Prevents too many toasts from cluttering screen."
      ],
      "code": `
      // Example: Lifecycle config
      <ToastContainer
        newestOnTop
        pauseOnHover
        draggable
        closeOnClick
        autoClose={3000}
      />
      `,
      "moreText": "Smart lifecycle keeps toasts helpful, not annoying."
    },
    {
      "title": "",
      "subtitle": "Migration Benefits",
      "details": [
        "Purpose: Improves notification system while reducing custom code.",
        "Benefits: Better animations, accessibility, mobile support, less bugs.",
        "Cleanup: Removes custom state, CSS, and JSX from every component.",
        "Result: Cleaner codebase, professional notifications, easier maintenance."
      ],
      "code": `
      // Before: Custom toast
      setToast({ type: 'success', message });
      
      // After: Simple
      toast.success(message);
      `,
      "moreText": "react-toastify migration is a must for production React apps."
    }
  ]
},
{
  "taskId": "ecom30",
  "content": [
    {
      "title": "Security Headers with Helmet",
      "subtitle": "Essential HTTP Protection",
      "details": [
        "Purpose: Sets critical security headers to protect against XSS, clickjacking, and MIME sniffing.",
        "Mechanics: Helmet middleware automatically adds headers like X-Content-Type-Options, X-Frame-Options.",
        "CSP: Configures Content-Security-Policy with strict directives for scripts, styles, images, and frames.",
        "Placement: Applied as first middleware — headers must be set before any response."
      ],
      "code": `
      // Example: Helmet with CSP
      app.use(helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://js.stripe.com"],
            imgSrc: ["'self'", "data:", "https://picsum.photos"]
          }
        }
      }));
      `,
      "moreText": "Helmet is the industry standard for Express security headers."
    },
    {
      "title": "",
      "subtitle": "Global Rate Limiting",
      "details": [
        "Purpose: Protects against brute-force, DDoS, and scraping attacks.",
        "Mechanics: express-rate-limit tracks requests per IP with sliding window.",
        "Global: 500 requests/15min for general routes, 50 for sensitive endpoints.",
        "Headers: Returns RateLimit-Remaining/Reset for client awareness."
      ],
      "code": `
      // Example: Global limiter
      const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 500,
        standardHeaders: true,
        legacyHeaders: false
      });
      app.use(limiter);
      `,
      "moreText": "Rate limiting is essential defense for any public API."
    },
    {
      "title": "",
      "subtitle": "NoSQL Injection Prevention",
      "details": [
        "Purpose: Blocks attackers from injecting MongoDB operators ($gt, $regex) via inputs.",
        "Mechanics: Sanitize middleware recursively removes keys starting with $ or containing .",
        "Scope: Applied to req.body and req.params before reaching controllers.",
        "Safety: Prevents query manipulation even if validation is missed."
      ],
      "code": `
      // Example: Sanitize function
      function sanitize(obj) {
        for (let key in obj) {
          if (key.startsWith('$') || key.includes('.')) delete obj[key];
          else if (typeof obj[key] === 'object') sanitize(obj[key]);
        }
      }
      `,
      "moreText": "NoSQL injection is often overlooked — sanitize inputs always."
    },
    {
      "title": "",
      "subtitle": "HTTP Parameter Pollution Defense",
      "details": [
        "Purpose: Prevents attacks exploiting duplicate query parameters.",
        "Mechanics: hpp middleware keeps only last value for duplicate keys.",
        "Whitelist: Allows arrays for legitimate multi-value params (category, images).",
        "Security: Stops attackers from bypassing validation with duplicates."
      ],
      "code": `
      // Example: HPP config
      app.use(hpp({ whitelist: ['category', 'images'] }));
      `,
      "moreText": "HPP attacks are subtle but dangerous — middleware prevents them easily."
    },
    {
      "title": "",
      "subtitle": "Request Size Limiting",
      "details": [
        "Purpose: Prevents DoS attacks via massive payloads.",
        "Mechanics: Limits JSON and URL-encoded bodies to 10kb.",
        "Protection: Blocks attackers from crashing server with huge requests.",
        "Balance: Sufficient for normal e-commerce operations."
      ],
      "code": `
      // Example: Body limits
      app.use(express.json({ limit: '10kb' }));
      app.use(express.urlencoded({ limit: '10kb', extended: true }));
      `,
      "moreText": "Size limits are basic but essential server protection."
    },
    {
      "title": "",
      "subtitle": "Environment-Based CORS",
      "details": [
        "Purpose: Allows only trusted origins while supporting development.",
        "Mechanics: Whitelists CLIENT_URL and localhost:8080, rejects others.",
        "Dynamic: Uses process.env for production flexibility.",
        "Credentials: Allows cookies/auth headers with credentials: true."
      ],
      "code": `
      // Example: Dynamic CORS
      const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:8080'].filter(Boolean);
      app.use(cors({
        origin: (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) callback(null, true);
          else callback(new Error('Not allowed by CORS'));
        },
        credentials: true
      }));
      `,
      "moreText": "Environment-based CORS is production best practice."
    },
    {
      "title": "",
      "subtitle": "Refresh Token Hashing",
      "details": [
        "Purpose: Prevents token theft even if database is compromised.",
        "Mechanics: Stores SHA-256 hash of refresh token, never plaintext.",
        "Verification: Hashes incoming token and compares with stored hash.",
        "Security: Database leak reveals only unusable hashes."
      ],
      "code": `
      // Example: Hash storage
      const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
      await RefreshToken.create({ token: hashedToken });
      `,
      "moreText": "Hashing refresh tokens is security best practice."
    },
    {
      "title": "",
      "subtitle": "Safe Error Handling",
      "details": [
        "Purpose: Prevents information disclosure in production.",
        "Mechanics: Shows detailed errors in development, generic in production.",
        "Operational Errors: AppError class marks safe-to-show errors.",
        "Logging: Includes timestamp and stack for debugging."
      ],
      "code": `
      // Example: Safe response
      if (process.env.NODE_ENV === 'production') {
        res.status(statusCode).json({ message: err.isOperational ? err.message : 'Something went wrong' });
      } else {
        res.status(statusCode).json({ message: err.message, stack: err.stack });
      }
      `,
      "moreText": "Never expose stack traces to users in production."
    },
    {
      "title": "",
      "subtitle": "ObjectId Validation Middleware",
      "details": [
        "Purpose: Prevents errors and attacks from invalid MongoDB IDs.",
        "Mechanics: Checks params with mongoose.Types.ObjectId.isValid().",
        "Early Fail: Returns 400 before reaching controller.",
        "Applied: To all routes with :id parameter."
      ],
      "code": `
      // Example: ID validation
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
      `,
      "moreText": "ID validation prevents cryptic CastError crashes."
    },
    {
      "title": "",
      "subtitle": "Production-Grade Security Stack",
      "details": [
        "Purpose: Comprehensive protection against common web attacks.",
        "Layers: Headers (Helmet), Rate limiting, Injection prevention, Size limits, CORS, Token security.",
        "Result: Defense in depth — multiple overlapping protections.",
        "Standard: Matches security practices of real production e-commerce apps."
      ],
      "code": `
      // Complete stack
      Helmet → Rate Limit → Sanitize → HPP → Body Limits → CORS → Routes
      `,
      "moreText": "This security suite protects against the OWASP Top 10 threats."
    }
  ]
},

{
  "taskId": "ecom31",
  "content": [
    {
      "title": "Stripe Payment Integration",
      "subtitle": "PaymentIntent Flow",
      "details": [
        "Purpose: Securely processes card payments using Stripe's recommended PaymentIntent pattern.",
        "Mechanics: Backend creates PaymentIntent → frontend confirms with card details.",
        "Security: Card data never touches your server — handled entirely by Stripe Elements.",
        "Flow: Create intent → clientSecret → confirmCardPayment → success → create order."
      ],
      "code": `
      // Backend: Create intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalInPence,
        currency: 'gbp',
        automatic_payment_methods: { enabled: true }
      });
      `,
      "moreText": "PaymentIntent is Stripe's gold standard — secure, SCA-ready, and reliable."
    },
    {
      "title": "",
      "subtitle": "Stripe Elements Security",
      "details": [
        "Purpose: Collects card details securely without your server ever seeing them.",
        "Mechanics: Stripe Elements replaces inputs with iframes hosted by Stripe.",
        "PCI Compliance: Reduces your PCI scope dramatically — no card data on server.",
        "UX: Beautiful, accessible, localized card inputs out of the box."
      ],
      "code": `
      // Example: Secure inputs
      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />
      `,
      "moreText": "Elements is how professional apps collect cards safely."
    },
    {
      "title": "",
      "subtitle": "Client Secret Pattern",
      "details": [
        "Purpose: Securely links frontend to specific PaymentIntent on backend.",
        "Mechanics: Backend returns client_secret → frontend passes to confirmCardPayment.",
        "Security: Secret is single-use and tied to amount/user.",
        "Required: Without clientSecret, confirmation fails."
      ],
      "code": `
      // Example: Use secret
      stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement }
      });
      `,
      "moreText": "Client secret is the secure bridge between backend and frontend."
    },
    {
      "title": "",
      "subtitle": "Payment Success Flow",
      "details": [
        "Purpose: Finalizes order only after confirmed payment success.",
        "Mechanics: confirmCardPayment → status 'succeeded' → call backend confirm endpoint.",
        "Safety: Order created only after money is confirmed.",
        "Cleanup: Clears cart and updates UI after success."
      ],
      "code": `
      // Example: Confirm order
      if (paymentIntent.status === 'succeeded') {
        await createOrderOnBackend();
      }
      `,
      "moreText": "Confirming payment before order creation prevents unpaid orders."
    },
    {
      "title": "",
      "subtitle": "Test Card Usage",
      "details": [
        "Purpose: Safely test entire payment flow without real charges.",
        "Success Card: 4242 4242 4242 4242 — always succeeds.",
        "Decline Card: 4000 0000 0000 0002 — triggers decline.",
        "UX: Immediate feedback — see success/error flows instantly."
      ],
      "code": `
      // Test cards
      Success: 4242 4242 4242 4242
      Decline: 4000 0000 0000 0002
      Any future expiry, any CVC
      `,
      "moreText": "Stripe test cards make development fast and reliable."
    },
    {
      "title": "",
      "subtitle": "Currency & Amount Handling",
      "details": [
        "Purpose: Correctly processes GBP payments in pence (smallest unit).",
        "Mechanics: Multiply total by 100 and Math.round() for pence.",
        "Precision: Avoids floating point errors in financial calculations.",
        "Display: Format with £ and toFixed(2) for users."
      ],
      "code": `
      // Example: Pence conversion
      const amount = Math.round(total * 100);
      `,
      "moreText": "Smallest currency unit is required — pence for GBP, cents for USD."
    },
    {
      "title": "",
      "subtitle": "Payment Modal Pattern",
      "details": [
        "Purpose: Focuses user on payment without leaving checkout page.",
        "Mechanics: Overlay with centered form, close button, disabled background.",
        "UX: Clear progression — form → payment → success.",
        "Accessibility: Proper focus management and escape key support."
      ],
      "code": `
      // Example: Modal overlay
      {showPayment && (
        <div className="overlay">
          <div className="modal">Payment Form</div>
        </div>
      )}
      `,
      "moreText": "Modal payment keeps users in flow — higher completion rates."
    },
    {
      "title": "",
      "subtitle": "Stripe Publishable Key",
      "details": [
        "Purpose: Allows frontend to load Stripe.js and create Elements.",
        "Security: Safe to expose — cannot charge cards without secret key.",
        "Environment: Different keys for test (pk_test_) and live (pk_live_).",
        "Config: Loaded once with loadStripe() outside component."
      ],
      "code": `
      // Example: Load once
      const stripePromise = loadStripe(publishableKey);
      `,
      "moreText": "Publishable key is safe in frontend — secret key stays on server."
    },
    {
      "title": "",
      "subtitle": "Card Brand Detection",
      "details": [
        "Purpose: Shows card type (Visa, Mastercard) as user types.",
        "Mechanics: CardNumberElement onChange provides event.brand.",
        "UX: Visual confirmation — users know card is recognized.",
        "Trust: Professional detail that builds confidence."
      ],
      "code": `
      // Example: Detect brand
      onChange={(e) => setCardBrand(e.brand)}
      `,
      "moreText": "Brand detection is a small touch that feels premium."
    },
    {
      "title": "",
      "subtitle": "Complete Stripe Flow",
      "details": [
        "Purpose: Professional end-to-end payment integration.",
        "Steps: Add to cart → Checkout → Create intent → Show form → Confirm → Create order.",
        "Security: Elements + PaymentIntent + server confirmation.",
        "Result: Real payments with test cards, ready for live."
      ],
      "code": `
      // Full flow
      Create intent → Elements → confirmCardPayment → Confirm order
      `,
      "moreText": "This is how real e-commerce apps integrate Stripe payments."
    }
  ]
}, {
  "taskId": "ecom32",
  "content": [
    {
      "title": "Netlify Deployment",
      "subtitle": "Frontend Hosting Mastery",
      "details": [
        "Purpose: Deploys React SPA to production with free HTTPS and global CDN.",
        "Mechanics: Netlify pulls from GitHub → runs build command → serves static files.",
        "Automatic: Push to GitHub → Netlify auto-deploys new version.",
        "Free Tier: Generous limits for personal/commercial projects."
      ],
      "code": `
      // netlify.toml
      [build]
        command = "npm run build"
        publish = "dist"
      
      [[redirects]]
        from = "/*"
        to = "/index.html"
        status = 200
      `,
      "moreText": "Netlify is the gold standard for deploying React apps quickly and reliably."
    },
    {
      "title": "",
      "subtitle": "Environment Variables Strategy",
      "details": [
        "Purpose: Switches API URLs between localhost (dev) and production backend.",
        "Mechanics: process.env.API_URL in code → DefinePlugin injects at build time.",
        "Development: Falls back to localhost when no env var.",
        "Production: Netlify injects real backend URL during build."
      ],
      "code": `
      // config/api.js
      export const API_URL = process.env.API_URL || 'http://localhost:5001';
      `,
      "moreText": "Environment variables are the professional way to handle config differences."
    },
    {
      "title": "",
      "subtitle": "API_URL Centralization",
      "details": [
        "Purpose: Single source of truth for backend URL — change once, works everywhere.",
        "Mechanics: config/api.js exports API_URL, all fetch calls use template literals.",
        "Maintenance: Easy to update when backend moves.",
        "Consistency: Eliminates hardcoded localhost throughout codebase."
      ],
      "code": `
      // Before
      fetch('http://localhost:5001/api/products')
      
      // After
      fetch(\`\${API_URL}/api/products\`)
      `,
      "moreText": "Centralized config prevents deployment bugs from hardcoded URLs."
    },
    {
      "title": "",
      "subtitle": "React Router Redirect Rule",
      "details": [
        "Purpose: Prevents 404 errors when refreshing or direct-linking to React routes.",
        "Mechanics: netlify.toml redirects all paths to index.html with 200 status.",
        "Critical: Without this, /products/123 refresh shows 404.",
        "Standard: Required for all SPAs on static hosting."
      ],
      "code": `
      // netlify.toml redirect
      [[redirects]]
        from = "/*"
        to = "/index.html"
        status = 200
      `,
      "moreText": "The 200 redirect is the SPA deployment secret weapon."
    },
    {
      "title": "",
      "subtitle": "Rspack DefinePlugin Config",
      "details": [
        "Purpose: Injects environment variables into frontend bundle at build time.",
        "Mechanics: Replaces process.env.VAR with actual value during build.",
        "Security: Variables become hardcoded in JS — only safe for non-secret values.",
        "Required: For process.env to work in production builds."
      ],
      "code": `
      // rspack.config.js
      new rspack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL)
      })
      `,
      "moreText": "DefinePlugin is how environment variables reach your frontend code."
    },
    {
      "title": "",
      "subtitle": "Netlify Build Settings",
      "details": [
        "Purpose: Tells Netlify how to build and serve your React app.",
        "Base Directory: 'client' (your frontend folder).",
        "Build Command: 'npm run build' (not 'npm build').",
        "Publish Directory: 'dist' (Rspack output folder)."
      ],
      "code": `
      // Netlify settings
      Base directory: client
      Build command: npm run build
      Publish directory: dist
      `,
      "moreText": "Correct build settings are crucial — wrong ones = blank site or 404."
    },
    {
      "title": "",
      "subtitle": "dotenv in Build Process",
      "details": [
        "Purpose: Loads environment variables during Netlify build.",
        "Mechanics: import 'dotenv/config' in rspack.config.js reads .env.",
        "Requirement: dotenv must be in devDependencies.",
        "Netlify: Also sets variables in UI — takes precedence over .env."
      ],
      "code": `
      // rspack.config.js
      import 'dotenv/config';
      npm install dotenv --save-dev
      `,
      "moreText": "dotenv + Netlify env vars = perfect environment handling."
    },
    {
      "title": "",
      "subtitle": "Cache Busting & Hard Refresh",
      "details": [
        "Purpose: Forces browser to load new version after deployment.",
        "Problem: Browser caches old JS files → changes don't appear.",
        "Solution: Ctrl+Shift+R (hard refresh) or incognito window.",
        "Netlify: 'Clear cache and deploy site' forces fresh build."
      ],
      "code": `
      // Hard refresh
      Ctrl+Shift+R (Windows/Linux)
      Cmd+Shift+R (Mac)
      `,
      "moreText": "Cache issues are the #1 reason 'it works locally but not on Netlify'."
    },
    {
      "title": "",
      "subtitle": "Production Deployment Flow",
      "details": [
        "Purpose: Complete path from code to live site.",
        "Steps: Code → GitHub → Netlify pulls → Build → Deploy.",
        "Automatic: Push to main → Netlify deploys instantly.",
        "Preview: Branch deploys give unique URLs for testing."
      ],
      "code": `
      // Full cycle
      git commit → git push → Netlify build → https://your-site.netlify.app
      `,
      "moreText": "GitHub + Netlify = instant, reliable deployments."
    },
    {
      "title": "",
      "subtitle": "Frontend-Backend Connection Prep",
      "details": [
        "Purpose: Prepares frontend to connect to production backend.",
        "Current State: Frontend deployed, waiting for backend URL.",
        "Next Step: Deploy backend → get URL → add to Netlify API_URL.",
        "Result: Full stack e-commerce app live on internet."
      ],
      "code": `
      // Final connection
      Netlify URL ← CORS → Backend URL
      API_URL (Netlify) → Backend API
      `,
      "moreText": "Frontend deployment is step one — backend completes the app."
    }
  ]
},

{
  "taskId": "ecom33",
  "content": [
    {
      "title": "Render Backend Deployment",
      "subtitle": "Production Server Hosting",
      "details": [
        "Purpose: Runs Express/Node.js server continuously in production.",
        "Mechanics: Render pulls from GitHub → installs deps → runs npm start.",
        "Free Tier: Suitable for learning, spins down after 15min inactivity.",
        "HTTPS: Automatic SSL certificates — no config needed."
      ],
      "code": `
      // Render settings
      Root directory: server
      Build command: npm install
      Start command: npm start
      `,
      "moreText": "Render is perfect for deploying full Node.js backends."
    },
    {
      "title": "",
      "subtitle": "Environment Variables on Render",
      "details": [
        "Purpose: Securely provides secrets and config to production server.",
        "Critical Vars: MONGO_URI, JWT_SECRET, STRIPE_SECRET_KEY, CLIENT_URL.",
        "Security: Never commit .env — use Render dashboard instead.",
        "Auto-Redeploy: Changes trigger automatic restart."
      ],
      "code": `
      // Required vars
      MONGO_URI=mongodb+srv://...
      JWT_SECRET=your-long-random-string
      CLIENT_URL=https://your-site.netlify.app
      `,
      "moreText": "Environment variables are the only safe way to handle secrets."
    },
    {
      "title": "",
      "subtitle": "MongoDB Atlas Network Access",
      "details": [
        "Purpose: Allows Render servers to connect to your database.",
        "Mechanics: Add 0.0.0.0/0 to IP whitelist (allow from anywhere).",
        "Free Tier Limitation: Render uses dynamic IPs — can't whitelist specific.",
        "Security: Still protected by username/password authentication."
      ],
      "code": `
      // Atlas setting
      Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
      `,
      "moreText": "0.0.0.0/0 is acceptable for learning — use VPCs for real production."
    },
    {
      "title": "",
      "subtitle": "Monorepo Dependency Issues",
      "details": [
        "Purpose: Prevents 'Cannot find module' errors from hoisted packages.",
        "Root Cause: Local finds packages in parent node_modules, Render does not.",
        "Solution: Delete node_modules → npm install in server folder only.",
        "Verification: Server starts after fresh install = deploy-safe."
      ],
      "code": `
      // Fix process
      rm -rf server/node_modules
      cd server && npm install
      npm start  # Should work
      `,
      "moreText": "Monorepo hoisting is the #1 cause of 'works locally, fails on deploy'."
    },
    {
      "title": "",
      "subtitle": "Case Sensitivity Nightmare",
      "details": [
        "Purpose: Prevents module not found errors from filename case mismatches.",
        "Root Cause: Windows/Mac case-insensitive, Linux (Render) case-sensitive.",
        "Solution: Use git mv for renames, ensure imports match exact case.",
        "Debug: git ls-files shows exact tracked filenames."
      ],
      "code": `
      // Fix with git
      git mv server/routes/AuthRoutes.js server/routes/authRoutes.js
      git commit -m "Fix case sensitivity"
      `,
      "moreText": "Case sensitivity is the silent killer of deployments."
    },
    {
      "title": "",
      "subtitle": "PORT Configuration",
      "details": [
        "Purpose: Uses dynamic port assigned by Render instead of hardcoded 5001.",
        "Mechanics: process.env.PORT || fallback for local dev.",
        "Critical: Render sets PORT env var — server must respect it.",
        "Local: Falls back to 5001 automatically."
      ],
      "code": `
      // Correct pattern
      const PORT = process.env.PORT || 5001;
      app.listen(PORT);
      `,
      "moreText": "Using process.env.PORT is required for all cloud platforms."
    },
    {
      "title": "",
      "subtitle": "CORS Production Config",
      "details": [
        "Purpose: Allows only your Netlify frontend to access backend.",
        "Mechanics: Whitelists CLIENT_URL env var, rejects others.",
        "Security: Prevents unauthorized sites from using your API.",
        "Development: Includes localhost fallback."
      ],
      "code": `
      // Dynamic CORS
      const allowed = [process.env.CLIENT_URL, 'http://localhost:8080'].filter(Boolean);
      `,
      "moreText": "Production CORS must be locked down to your domain."
    },
    {
      "title": "",
      "subtitle": "Cold Starts on Free Tier",
      "details": [
        "Purpose: Explains 30+ second delays after inactivity.",
        "Mechanics: Render spins down free instances after 15min.",
        "First Request: Wakes up server — normal for free tier.",
        "Solution: $7/month Starter tier for always-on."
      ],
      "code": `
      // Expected behavior
      Inactive 15min → Spin down → First request → 30s delay → Running
      `,
      "moreText": "Cold starts are normal on free plans — not a bug."
    },
    {
      "title": "",
      "subtitle": "Frontend-Backend Connection",
      "details": [
        "Purpose: Links Netlify frontend to Render backend.",
        "Config: Netlify API_URL → Render URL, Render CLIENT_URL → Netlify URL.",
        "CORS: Both must match exactly (https, no trailing slash).",
        "Result: Full-stack app live on internet."
      ],
      "code": `
      // Connection
      Frontend (Netlify) ─API_URL──► Backend (Render)
      Backend (Render) ─CLIENT_URL──► Frontend (Netlify)
      `,
      "moreText": "Correct URLs in both places = working full-stack app."
    },
    {
      "title": "",
      "subtitle": "Production Deployment Mastery",
      "details": [
        "Purpose: Complete professional backend deployment.",
        "Steps: Fix deps → Fix case → Config env → Deploy Render → Connect frontend.",
        "Result: Live, secure, scalable Node.js backend.",
        "Next Level: Add custom domain, monitoring, logging."
      ],
      "code": `
      // Full production backend
      GitHub → Render → MongoDB Atlas → Connected to Netlify frontend
      `,
      "moreText": "This is how real production backends are deployed."
    }
  ]
},
{
  "taskId": "ecom34",
  "content": [
    {
      "title": "Admin Order Detail Modal",
      "subtitle": "Quick View Without Navigation",
      "details": [
        "Purpose: Lets admins see complete order details instantly from the dashboard table.",
        "Mechanics: selectedOrder state holds clicked order, modal renders when not null.",
        "Pattern: Reuses existing modal structure (overlay + container + header + body).",
        "UX: Fast inspection without leaving dashboard, consistent with product modal."
      ],
      "code": `
      // Example: Modal trigger
      {selectedOrder && (
        <div className={styles.modalOverlay} onClick={() => setSelectedOrder(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            {/* content */}
          </div>
        </div>
      )}
      `,
      "moreText": "In-page modals save time and keep admins in context."
    },
    {
      "title": "",
      "subtitle": "Selected Order State Pattern",
      "details": [
        "Purpose: Tracks which order to show in modal.",
        "Mechanics: selectedOrder = null (closed) or order object (open).",
        "Trigger: View button sets state to the clicked order.",
        "Close: Overlay click, × button, or Close footer button reset to null."
      ],
      "code": `
      // State & trigger
      const [selectedOrder, setSelectedOrder] = useState(null);
      
      // View button
      <button onClick={() => setSelectedOrder(order)}>View</button>
      `,
      "moreText": "Simple state + conditional render = elegant modal pattern."
    },
    {
      "title": "",
      "subtitle": "Modal Overlay & Click Handling",
      "details": [
        "Purpose: Creates full-screen modal with dark background.",
        "Mechanics: Overlay captures outside clicks to close, inner container stops propagation.",
        "Accessibility: Click outside to close is standard UX pattern.",
        "Styling: Fixed position, semi-transparent background, centered content."
      ],
      "code": `
      // Overlay & propagation
      <div className="overlay" onClick={() => setSelectedOrder(null)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          {/* modal content */}
        </div>
      </div>
      `,
      "moreText": "Stop propagation prevents modal from closing when clicking inside."
    },
    {
      "title": "",
      "subtitle": "Order Information Display",
      "details": [
        "Purpose: Shows key order metadata clearly and quickly.",
        "Fields: Order ID (last 6 chars), Date, Status, Customer, Address.",
        "Formatting: toLocaleDateString() for dates, proper spacing.",
        "Layout: Clean paragraphs with strong labels for readability."
      ],
      "code": `
      // Example: Order info
      <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
      <p><strong>Customer:</strong> {order.shippingAddress.fullName}</p>
      `,
      "moreText": "Clear, scannable info helps admins act fast."
    },
    {
      "title": "",
      "subtitle": "Items List in Modal",
      "details": [
        "Purpose: Displays every ordered item with quantity and price.",
        "Mechanics: Maps over items array, shows name × quantity — £lineTotal.",
        "Safety: Optional chaining for missing product data.",
        "Calculation: price × quantity with toFixed(2) formatting."
      ],
      "code": `
      // Example: Items list
      {selectedOrder.items?.map((item, idx) => (
        <li key={idx}>
          {item.name} × {item.quantity} — £{(item.price * item.quantity).toFixed(2)}
        </li>
      ))}
      `,
      "moreText": "Detailed item breakdown is essential for order verification."
    },
    {
      "title": "",
      "subtitle": "Total & Footer Design",
      "details": [
        "Purpose: Highlights final amount and provides clear close action.",
        "Mechanics: Bold total with £ formatting, prominent Close button.",
        "Layout: Footer at bottom for consistent modal pattern.",
        "UX: Total is most important info — make it stand out."
      ],
      "code": `
      // Example: Total display
      <p><strong>Total:</strong> £{selectedOrder.totalAmount.toFixed(2)}</p>
      `,
      "moreText": "Clear total display builds trust and speeds decision-making."
    },
    {
      "title": "",
      "subtitle": "Modal Reusability Pattern",
      "details": [
        "Purpose: Reuses existing styles and structure for consistency.",
        "Mechanics: Same overlay/container/header/footer as product modal.",
        "Benefits: Familiar UX, less CSS, easier maintenance.",
        "Scalability: Easy to add more modal types later."
      ],
      "code": `
      // Shared styles
      .modalOverlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); }
      .modal { background: white; max-width: 600px; margin: 2rem auto; padding: 2rem; }
      `,
      "moreText": "Consistent modal design creates professional, cohesive UI."
    },
    {
      "title": "",
      "subtitle": "Testing Modal Functionality",
      "details": [
        "Purpose: Ensures modal opens, displays correct data, and closes properly.",
        "Test Cases: Open → Content correct → Close via ×/button/overlay → Reopen.",
        "Edge Cases: Order with no items, missing address fields.",
        "Verification: All data matches dashboard table source."
      ],
      "code": `
      // Test sequence
      1. Click View → Modal opens
      2. Check date, status, items, total
      3. Click outside → Modal closes
      `,
      "moreText": "Thorough testing prevents subtle data display bugs."
    },
    {
      "title": "",
      "subtitle": "Admin Workflow Efficiency",
      "details": [
        "Purpose: Speeds up order management with in-page details.",
        "Benefit: Admins stay on dashboard — no navigation needed.",
        "Scalability: Pattern can be reused for user details, product quick view.",
        "Professional: Matches how modern admin panels work (Shopify, WooCommerce)."
      ],
      "code": `
      // Admin flow
      Dashboard → Orders tab → View button → Modal with full details → Close → Back to table
      `,
      "moreText": "In-context modals are key to efficient admin interfaces."
    },
    {
      "title": "",
      "subtitle": "Complete Admin Dashboard Evolution",
      "details": [
        "Purpose: Transforms basic table into powerful management tool.",
        "Features: Stats, tabs, inline editing, status updates, role management, order details.",
        "Result: Full-featured admin experience matching real e-commerce platforms.",
        "Next Level: Add search/filter, pagination, export options."
      ],
      "code": `
      // Final admin power
      Overview | Products | Orders | Users
      Click View → Instant order details modal
      `,
      "moreText": "This is how professional e-commerce admin dashboards are built."
    }
  ]
},

  {
    taskId: "fix-the-bug-filter-buttons",
    content: [
      {
        title: "Conditional className",
        subtitle: "Applying styles based on state",
        text: "In React you can apply a CSS class conditionally using a ternary operator inside the className prop. This is how you make UI elements visually reflect the current state of your app.",
        details: [
          "className accepts any JavaScript expression — not just static strings.",
          "A ternary checks a condition and returns one of two values.",
          "If the condition is true, the active class is applied. If false, an empty string.",
          "This pattern is used for active tabs, selected buttons, nav links, and toggles.",
        ],
        code: `
<button className={isActive ? "active" : ""}>
  Click me
</button>
        `,
        moreText: "State drives logic and appearance. If something is selected, the user should be able to see it.",
      },
      {
        title: "Reading Existing Code",
        subtitle: "Spotting patterns by comparison",
        text: "One of the most valuable debugging skills is spotting inconsistency. When one thing works and similar things don't, compare them side by side — the difference is usually the bug.",
        details: [
          "Look for elements that should behave the same way.",
          "Compare working code to broken code line by line.",
          "Missing logic is often harder to spot than wrong logic.",
          "The fix is usually applying the same pattern that already works elsewhere.",
        ],
        moreText: "Most bugs aren't complex. They're just something missing that should be there.",
      },
    ],
  },

  {
    taskId: "empty-todo-guard",
    content: [
      {
        title: "Guard Clauses",
        subtitle: "Failing fast at the top of a function",
        text: "A guard clause is a check at the very start of a function that returns early if a condition isn't met. It prevents bad data from ever reaching the main logic.",
        details: [
          "Always validate input before acting on it.",
          "Place the guard on the first line — before anything else runs.",
          "Return immediately if the condition fails. Don't nest the main logic in an else.",
          "This keeps functions flat, readable, and safe.",
        ],
        code: `
function submit(value) {
  if (!value.trim()) return;
  // safe to proceed
}
        `,
        moreText: "Handle the bad case first. Everything below the guard can be trusted.",
      },
      {
        title: "The trim() Method",
        subtitle: "Stripping whitespace from strings",
        text: "trim() removes all leading and trailing whitespace from a string. It's essential for validating user input — a string of spaces should not count as real content.",
        details: [
          "trim() does not modify the original string — it returns a new one.",
          "A string of only spaces becomes an empty string after trim().",
          "An empty string is falsy in JavaScript — use that in your condition.",
          "Always trim before checking length or comparing values from user input.",
        ],
        code: `
"   ".trim()       // ""
"  hello  ".trim() // "hello"
!("  ".trim())     // true — falsy
        `,
        moreText: "Never trust raw user input. Always trim before you validate.",
      },
    ],
  },

  {
    taskId: "better-counter-text",
    content: [
      {
        title: "JSX Expressions",
        subtitle: "Mixing variables and text in JSX",
        text: "Curly braces in JSX let you embed any JavaScript expression directly into your markup. You can mix static text and dynamic values freely — no concatenation needed.",
        details: [
          "Wrap any JS expression in curly braces to render it in JSX.",
          "You can place expressions between words, not just at the end.",
          "Variables, calculations, and function calls all work inside curly braces.",
          "The output updates automatically whenever the underlying values change.",
        ],
        code: `
<p>{completed} of {total} completed</p>
<p>Hello, {user.name}!</p>
<p>{items.length} items in your cart</p>
        `,
        moreText: "JSX is just JavaScript. Use it like one.",
      },
      {
        title: "UI Copywriting",
        subtitle: "Writing text that communicates clearly",
        text: "Numbers without context are meaningless to users. A small change in wording can transform a confusing interface into an obvious one.",
        details: [
          "Always ask: would someone seeing this for the first time understand it?",
          "Add words that explain what the numbers represent.",
          "Avoid slash notation like 2/5 unless the context is universally understood.",
          "Clear copy is part of good UI — not an afterthought.",
        ],
        moreText: "The best UI copy feels invisible. It's just obvious.",
      },
    ],
  },

  {
    taskId: "dynamic-title-count",
    content: [
      {
        title: "Derived Values",
        subtitle: "Calculating what you need from what you have",
        text: "Not everything needs its own piece of state. If a value can be calculated from existing state, derive it inline. Fewer state variables means fewer bugs and simpler code.",
        details: [
          "Look at what you already have before adding new state.",
          "Simple arithmetic can be done directly inside JSX expressions.",
          "Derived values update automatically when their source values change.",
          "The less state you manage, the easier your component is to reason about.",
        ],
        code: `
const total = todos.length;
const completed = todos.filter(t => t.completed).length;
const active = total - completed; // derived, no useState needed
        `,
        moreText: "Derive, don't duplicate. Calculate what you need from what you already have.",
      },
      {
        title: "Reactive UI",
        subtitle: "Every part of the UI should reflect state",
        text: "In React, state is the single source of truth. Every visible element — including titles, labels, and counters — should reflect the current state automatically.",
        details: [
          "If a value changes, every place it's displayed should update.",
          "React re-renders automatically when state changes — you just need to use the values.",
          "Static text that could be dynamic is a missed opportunity.",
          "Ask yourself: is any part of my UI ignoring state it should care about?",
        ],
        moreText: "The more your UI reacts to state, the more alive it feels.",
      },
    ],
  },

  {
    taskId: "add-with-enter-key",
    content: [
      {
        title: "Keyboard Events",
        subtitle: "Responding to keypresses in React",
        text: "React exposes keyboard events through onKeyDown, onKeyUp, and onKeyPress. The event object tells you exactly which key was pressed so you can act selectively.",
        details: [
          "onKeyDown fires on every keypress — use e.key to filter for the one you want.",
          "e.key returns a readable string like 'Enter', 'Escape', 'ArrowUp'.",
          "You can attach keyboard handlers to any focusable element.",
          "Keyboard support is a basic accessibility expectation — not an optional feature.",
        ],
        code: `
<input
  onKeyDown={(e) => {
    if (e.key === "Enter") doSomething();
    if (e.key === "Escape") cancel();
  }}
/>
        `,
        moreText: "Connect existing functions to new triggers. The logic is already written.",
      },
      {
        title: "UX Friction",
        subtitle: "Every unnecessary action costs the user",
        text: "Friction is anything that slows a user down or interrupts their flow. Forcing a mouse click for every single action when the keyboard is already in use is a small but constant cost.",
        details: [
          "Keyboard-first flows feel faster and more natural for input-heavy tasks.",
          "Removing friction doesn't require new features — just connecting what already exists.",
          "Users form habits around how apps behave — make those habits effortless.",
          "The best UX improvements are the ones users don't consciously notice.",
        ],
        moreText: "Small friction multiplied by many actions becomes a frustrating experience.",
      },
    ],
  },

  {
    taskId: "filter-button-count-badges",
    content: [
      {
        title: "Informative UI",
        subtitle: "Show data before the user asks for it",
        text: "Good UI surfaces useful information without requiring interaction. If a user has to click something just to find out what's inside, that's a design gap.",
        details: [
          "Counts, badges, and labels reduce the need to explore and discover.",
          "Data you already have should be displayed where it's useful.",
          "Live counts on filter buttons are a standard pattern in every serious list UI.",
          "Information density done right reduces clicks, not increases confusion.",
        ],
        code: `
<button>All ({total})</button>
<button>Active ({total - completed})</button>
<button>Completed ({completed})</button>
        `,
        moreText: "Every click you save is friction you've removed.",
      },
      {
        title: "Inline Expressions",
        subtitle: "Dynamic labels without extra variables",
        text: "Button labels don't have to be static strings. Simple expressions can be calculated inline inside the JSX — no extra variables or state required.",
        details: [
          "Curly braces work anywhere inside JSX — including inside button text.",
          "Simple maths like total - completed can be done directly in the expression.",
          "The values update automatically whenever the underlying state changes.",
          "Keep inline expressions simple — if the logic is complex, extract a variable.",
        ],
        moreText: "Static labels are a missed opportunity. Show the user what's inside.",
      },
    ],
  },

  {
    taskId: "empty-filter-message",
    content: [
      {
        title: "Empty States",
        subtitle: "Designing for when there's nothing to show",
        text: "Every list in an app can be empty. A blank screen with no message feels like a bug. An intentional message feels like a feature. Always design for the empty case.",
        details: [
          "Check array length before rendering a list.",
          "Show a message that explains why the list is empty.",
          "Tailor the message to the context — different situations deserve different copy.",
          "Good empty states guide users toward the next useful action.",
        ],
        moreText: "Empty states are part of the UI. Design them, don't ignore them.",
      },
      {
        title: "Object Lookup Pattern",
        subtitle: "Mapping keys to values cleanly",
        text: "When you need different output for different string values, an object lookup is cleaner than a chain of if statements or a nested ternary.",
        details: [
          "Define an object where each key maps to its corresponding value.",
          "Use the current state value as the key to look up the right output.",
          "Easier to read, easier to extend, and less error-prone than if/else chains.",
          "This pattern works for messages, labels, colours, icons, and components.",
        ],
        code: `
const messages = {
  all: "No todos yet.",
  active: "Nothing left to do!",
  completed: "None completed yet.",
};

<p>{messages[filter]}</p>
        `,
        moreText: "Objects are lookup tables. Use them instead of long conditionals.",
      },
      {
        title: "Conditional Rendering",
        subtitle: "Choosing what to render based on state",
        text: "React lets you conditionally render any element based on a condition. The ternary operator is the most common way to choose between two outputs.",
        details: [
          "Use a ternary when you have two possible outputs.",
          "Use && when you only want to render something if a condition is true.",
          "Keep conditions simple — extract variables if the logic gets complex.",
          "Conditional rendering is one of the most used patterns in React.",
        ],
        code: `
{list.length === 0
  ? <p>Nothing here yet.</p>
  : list.map(item => <Item key={item.id} {...item} />)
}
        `,
        moreText: "Conditional rendering is not a trick — it's the foundation of dynamic UI.",
      },
    ],
  },

  {
    taskId: "mark-all-complete",
    content: [
      {
        title: "Bulk State Updates",
        subtitle: "Updating every item in an array at once",
        text: "When you need to update every item in a state array the same way, map over the array and return a new object for each item with the updated value.",
        details: [
          "map() always returns a new array — never mutate state directly.",
          "Use the spread operator to copy existing properties and override the one you're changing.",
          "The same function can apply different values based on a condition you check first.",
          "This pattern is used for select all, clear all, and batch operations.",
        ],
        code: `
// Set all items to completed: true
setItems(items.map(item => ({ ...item, completed: true })));

// Toggle all based on current state
const allDone = items.every(item => item.completed);
setItems(items.map(item => ({ ...item, completed: !allDone })));
        `,
        moreText: "map() is your tool for transforming every item in a list. Learn it deeply.",
      },
      {
        title: "Toggle Logic",
        subtitle: "One button, two states",
        text: "A toggle button needs to know the current state before deciding what to do next. Check the condition first, then act based on the result.",
        details: [
          "Check whether all items already match the target state.",
          "If they do, reverse it. If they don't, apply it.",
          "The button label should also reflect the current state.",
          "Use the same condition for both the action and the label.",
        ],
        code: `
const allDone = completed === total && total > 0;

<button onClick={toggleAll}>
  {allDone ? "Unmark all" : "Mark all complete"}
</button>
        `,
        moreText: "Toggle logic is always: check current state, then do the opposite.",
      },
    ],
  },

  {
    taskId: "add-priority-levels",
    content: [
      {
        title: "Extending State Shape",
        subtitle: "Adding new fields to existing objects",
        text: "As features grow, the objects stored in state often need new fields. When you add a field, update everywhere that creates those objects — not just where you display them.",
        details: [
          "Add the new field when the object is created, not after.",
          "Set a sensible default value so existing data doesn't break.",
          "Think about the full lifecycle: create, read, display, reset.",
          "New state for the input value is separate from the data stored on the object.",
        ],
        code: `
// New state for the input
const [priority, setPriority] = useState("medium");

// Field added when object is created
const newItem = { text, completed: false, priority };
        `,
        moreText: "Features touch more than one place. Trace the full data flow before you start.",
      },
      {
        title: "Colour Mapping",
        subtitle: "Translating values into visual styles",
        text: "When a value like 'low', 'medium', or 'high' needs to map to a colour, an object lookup keeps the code clean and easy to update.",
        details: [
          "Define a colour map object where each value key points to its colour.",
          "Use the current item's value as the key to look up the colour.",
          "Apply the colour via inline style or a dynamic className.",
          "Centralising the colour map makes updates trivial — change one place.",
        ],
        code: `
const priorityColors = {
  low: "green",
  medium: "orange",
  high: "red",
};

<span style={{ color: priorityColors[todo.priority] }}>
  {todo.priority}
</span>
        `,
        moreText: "Object lookup maps are cleaner than if/else chains for value-to-style logic.",
      },
      {
        title: "Multi-File Features",
        subtitle: "When a feature touches more than one component",
        text: "Some features require changes in multiple files. Plan the data flow before writing any code — know where the data is created, where it's passed, and where it's displayed.",
        details: [
          "State lives in the parent. Display logic lives in the child.",
          "New data fields need to be added at the point of creation.",
          "Child components receive data via props — they don't manage it themselves.",
          "Trace the path: state → object → prop → display.",
        ],
        moreText: "Understanding data flow is more valuable than knowing any specific syntax.",
      },
    ],
  },

  {
    taskId: "add-due-date",
    content: [
      {
        title: "Date Comparison in JavaScript",
        subtitle: "Checking whether a date has passed",
        text: "JavaScript Date objects can be compared using standard comparison operators. To check if a date is in the past, compare it to today's date using new Date().",
        details: [
          "new Date() creates a Date object representing right now.",
          "new Date(dateString) parses a date string like '2025-01-15' into a Date object.",
          "Date objects compare by their underlying timestamp — earlier dates are smaller.",
          "A date is overdue if it's less than today AND the item is not yet complete.",
        ],
        code: `
const isOverdue =
  dueDate &&
  new Date(dueDate) < new Date() &&
  !completed;
        `,
        moreText: "Always guard against missing dates before comparing — an empty string will cause unexpected results.",
      },
      {
        title: "Conditional Styling",
        subtitle: "Changing appearance based on derived state",
        text: "Conditional styling applies different visual treatments based on the current state of an item. It's one of the most effective ways to communicate urgency or status without extra UI elements.",
        details: [
          "Use a derived boolean to decide whether to apply a style.",
          "Inline styles work well for simple single-property overrides.",
          "className conditionals work better when multiple properties need to change.",
          "Never apply warning styles to items that are already resolved.",
        ],
        code: `
<li style={{
  borderLeft: isOverdue ? "3px solid red" : "none",
  opacity: completed ? 0.5 : 1,
}}>
        `,
        moreText: "Visual feedback should match the data. If something is urgent, it should look urgent.",
      },
      {
        title: "HTML Date Input",
        subtitle: "Using the native date picker",
        text: "The browser provides a built-in date picker via input type='date'. It returns a string in YYYY-MM-DD format — consistent, parseable, and ready to store.",
        details: [
          "Use type='date' on an input element to get a native date picker.",
          "The value is always a string in YYYY-MM-DD format.",
          "Control it with state the same way as any other input.",
          "Reset the value to an empty string after the item is added.",
        ],
        code: `
const [dueDate, setDueDate] = useState("");

<input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>
        `,
        moreText: "Native inputs are underused. The browser does the heavy lifting for you.",
      },
    ],
  },
{
  taskId: "reacttasks-search-bar",
  content: [
    {
      title: "Controlled Search Input",
      subtitle: "Connecting an input to state",
      text: "A search bar is just a controlled input. You store what the user types in state, and React re-renders the list every time the value changes. The input drives the filter — nothing else needed.",
      details: [
        "Create a search state variable initialised to an empty string.",
        "Set the input's value to the state variable — this makes it controlled.",
        "Update state on every keystroke using the onChange handler.",
        "React re-renders automatically, so the filtered list updates live as the user types.",
      ],
      code: `
const [query, setQuery] = useState("");

<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
      `,
      moreText: "One state variable. One input. Live filtering comes free.",
    },
    {
      title: "Case-Insensitive String Matching",
      subtitle: "Filtering text the right way",
      text: "When filtering by a search term, always normalise the case before comparing. Otherwise 'Buy milk' won't match when the user types 'buy'. toLowerCase on both sides solves it.",
      details: [
        "Convert both the item text and the search term to lowercase before comparing.",
        "Use .includes() to check whether the item contains the search string anywhere.",
        "An empty search string matches everything — no extra condition needed.",
        "This handles partial matches too, so 'milk' matches 'Buy milk'.",
      ],
      code: `
const items = ["Apple", "Banana", "Avocado"];
const query = "av";

items.filter((item) =>
  item.toLowerCase().includes(query.toLowerCase())
);
// ["Avocado"]
      `,
      moreText: "Always compare lowercase to lowercase. Users don't think about case — your filter shouldn't either.",
    },
    {
      title: "Chaining Array Filters",
      subtitle: "Applying multiple conditions in sequence",
      text: "When you already have a filtered array, you can chain another .filter() directly onto it. This keeps each condition separate and readable instead of cramming everything into one callback.",
      details: [
        "Start with your existing filtered result — don't rewrite it.",
        "Chain a second .filter() to apply the search on top.",
        "Each filter does one job and doesn't need to know about the other.",
        "Wrap the first expression in parentheses before chaining to keep it readable.",
      ],
      code: `
const results = (
  category === "fruit"
    ? items.filter((i) => i.type === "fruit")
    : items
).filter((i) =>
  i.name.toLowerCase().includes(query.toLowerCase())
);
      `,
      moreText: "Chain filters instead of nesting them. One job per filter, one filter per concern.",
    },
    {
      title: "Index After Filtering",
      subtitle: "The map index isn't always the real index",
      text: "When you map over a filtered array, the index you get is the position in the filtered list — not the original array. If your handlers rely on index to find the right item, they'll target the wrong one.",
      details: [
        "The second argument in .map((item, i) => ...) reflects position in that array only.",
        "Filtering creates a new array, so index 0 in the filtered list may not be index 0 in the original.",
        "To get the real index, look it up against the source array instead of using the map index.",
        "This matters any time a handler uses index to update, delete, or toggle an item.",
      ],
      code: `
const filtered = items.filter((item) => item.active);

// i is the position in filtered — not in items
filtered.map((item, i) => {
  console.log(i);                   // position in filtered
  console.log(items.indexOf(item)); // real position in source
});
      `,
      moreText: "A filtered list has its own indexes. Always trace back to the source when it matters.",
    },
  ],
},

{
  taskId: "timestamps",
  content: [
    {
      title: "Storing Data at Creation Time",
      subtitle: "Capture information the moment something is added",
      text: "Some data only exists at one moment — when something is created. If you don't capture it then, it's gone. The right place to record a timestamp is inside the function that creates the item.",
      details: [
        "Add a new property to your object at the point it's created.",
        "JavaScript's Date object gives you the current moment in time.",
        "Once the item is stored in state, that value stays with it permanently.",
        "Every item in the list will carry its own creation time independently.",
      ],
      code: `
const newItem = {
  name: "Buy groceries",
  done: false,
  createdAt: new Date(),
};
      `,
      moreText: "You can't go back and add a timestamp later. Capture it at the source.",
    },
    {
      title: "Formatting Dates for Display",
      subtitle: "Turning a Date object into readable text",
      text: "A raw Date object isn't readable. JavaScript's toLocaleDateString method lets you format it into something that actually makes sense to a user — day, month, time, whatever you need.",
      details: [
        "Pass a locale string as the first argument to control language and region format.",
        "Pass an options object as the second argument to choose which parts to show.",
        "You can include or exclude day, month, year, hour, and minute independently.",
        "Format it once at creation so you store the string, not the Date object.",
      ],
      code: `
const formatted = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
});

// "30 Mar"
      `,
      moreText: "Format for humans, not for machines. Pick the parts that are actually useful.",
    },
    {
      title: "Conditional Rendering with &&",
      subtitle: "Only render something if the data exists",
      text: "Not all items in your list will have the same properties — especially if some were created before you added the timestamp feature. The && operator lets you render something only when its data is actually there.",
      details: [
        "Use && when you only want to render something if a condition is true.",
        "If the left side is falsy, React renders nothing — no error, no empty element.",
        "This protects against rendering undefined or missing values.",
        "Useful any time older data might not have a property that newer data does.",
      ],
      code: `
{item.createdAt && (
  <span>{item.createdAt}</span>
)}
      `,
      moreText: "Always guard optional data with &&. Not every item is guaranteed to have every property.",
    },
    {
      title: "Enriching State Objects",
      subtitle: "State carries more than just the obvious fields",
      text: "It's easy to only store the bare minimum — the text, the status. But state objects can carry as much as you need. The richer your state, the more features become possible without rethinking your data structure.",
      details: [
        "Think beyond what the feature needs right now — what might you need later?",
        "Adding a createdAt unlocks sorting by date, overdue detection, and history views.",
        "Each new property is a new capability waiting to be used.",
        "Good state design makes future features cheap to build.",
      ],
      moreText: "State is your data model. Design it with the future in mind, not just the present.",
    },
  ],
},
{
  taskId: "confirm-before-delete",
  content: [
    {
      title: "Guarding Destructive Actions",
      subtitle: "Ask before you destroy",
      text: "Any action that can't be undone needs a gate. Deleting data is permanent — so the user should have to confirm it. One extra step protects users from misclicks and makes your app feel safe to use.",
      details: [
        "Wrap destructive operations in a condition before executing them.",
        "Only proceed if the user explicitly confirms the action.",
        "The function never runs unless the condition passes — nothing else changes.",
        "This pattern applies to any irreversible action: delete, reset, clear all.",
      ],
      code: `
function removeItem(id) {
  if (confirmed) {
    deleteFromList(id);
  }
}
      `,
      moreText: "If the action can't be undone, the user should have to mean it.",
    },
    {
      title: "window.confirm",
      subtitle: "The browser's built-in confirmation dialog",
      text: "The browser has a native confirmation dialog built in. It blocks execution and returns true if the user clicks OK, or false if they cancel. No library, no extra state — just one function call.",
      details: [
        "window.confirm() opens a native browser dialog with a message.",
        "It returns true if the user confirms, false if they cancel.",
        "Execution pauses until the user makes a choice.",
        "It's not pretty, but it works — and it's zero setup.",
      ],
      code: `
const confirmed = window.confirm("Are you sure?");

if (confirmed) {
  // user clicked OK
}
      `,
      moreText: "window.confirm is basic but instant. You can always replace it with a custom modal later.",
    },
    {
      title: "stopPropagation",
      subtitle: "Stopping events from bubbling up",
      text: "When you click a button inside another clickable element, the click event travels up through the DOM and triggers parent handlers too. stopPropagation tells the event to stop where it is.",
      details: [
        "Events bubble up through every parent element by default.",
        "Call e.stopPropagation() inside the handler to prevent that.",
        "Without it, clicking a child button can accidentally trigger the parent's onClick.",
        "Always use it on buttons nested inside other interactive elements.",
      ],
      code: `
<button onClick={(e) => {
  e.stopPropagation();
  handleDelete();
}}>
  Delete
</button>
      `,
      moreText: "Bubbling is default browser behaviour. Stop it explicitly when it gets in the way.",
    },
    {
      title: "Trust as a Feature",
      subtitle: "How your app feels matters as much as what it does",
      text: "Apps that delete without asking feel dangerous. Users who lose data because of a misclick don't come back. A confirmation step isn't just a UI pattern — it's a signal that your app respects the user's data.",
      details: [
        "Friction on destructive actions is intentional — it's not slowing the user down, it's protecting them.",
        "Every serious app asks before it deletes — Gmail, Notion, your bank.",
        "Users who trust your app use it more. Users who've lost data don't.",
        "Small UX decisions like this separate apps that feel polished from apps that feel risky.",
      ],
      moreText: "The best apps make users feel safe. Confirmation dialogs are part of that.",
    },
  ],
},
{
  taskId: "categories-tags",
  content: [
    {
      title: "Controlled Select Dropdown",
      subtitle: "Dropdowns work the same way as inputs",
      text: "A select element is just another controlled input. You store the selected value in state, point the select's value at it, and update state when the user picks an option. Same pattern, different element.",
      details: [
        "Create a state variable to hold the currently selected option.",
        "Set the select's value attribute to that state variable.",
        "Update state in the onChange handler using e.target.value.",
        "The selected option in the UI will always reflect what's in state.",
      ],
      code: `
const [type, setType] = useState("option-a");

<select value={type} onChange={(e) => setType(e.target.value)}>
  <option value="option-a">Option A</option>
  <option value="option-b">Option B</option>
</select>
      `,
      moreText: "Inputs, selects, checkboxes — they're all controlled the same way. Value in state, change updates state.",
    },
    {
      title: "Attaching Metadata to State Objects",
      subtitle: "Your objects can carry as much as you need",
      text: "When you create a new item, you can attach any data that's currently in state — not just the text. This is how features like categories work: you capture the selected value at creation time and store it alongside the item.",
      details: [
        "Read any relevant state variables at the point of creation.",
        "Spread or include them directly in the new object being added.",
        "The item now permanently carries that data wherever it goes.",
        "Reset all related state fields together after the item is added.",
      ],
      code: `
function addItem() {
  if (!label.trim()) return;
  setItems([...items, { label, done: false, type }]);
  setLabel("");
  setType("option-a");
}
      `,
      moreText: "Capture all the context you have at creation time. You can't add it retroactively.",
    },
    {
      title: "Object Lookup for Dynamic Styles",
      subtitle: "Map values to styles without long conditionals",
      text: "When different values need different styles, an object lookup is the cleanest solution. Define a colour or style per key, then use the item's value to pull out the right one at render time.",
      details: [
        "Define an object where each key maps to a colour or style value.",
        "Use the item's property as the key to retrieve the matching style.",
        "Cleaner than if/else chains and easy to extend with new options.",
        "Works for colours, labels, icons, or any value that varies by category.",
      ],
      code: `
const colours = {
  "option-a": "#667eea",
  "option-b": "#f093fb",
};

<span style={{ background: colours[item.type] }}>
  {item.type}
</span>
      `,
      moreText: "Objects are lookup tables. Let the data drive the style, not a chain of conditions.",
    },
    {
      title: "Information Problems vs Styling Problems",
      subtitle: "If it looks the same, it might be missing data",
      text: "When every item in a list looks identical, it's tempting to reach for CSS. But often the real problem is missing data — the app doesn't know enough about each item to display it differently. Solve the data problem first, and the UI follows.",
      details: [
        "If two items look the same but should feel different, check what data they carry.",
        "You can't display a category badge if the category isn't stored on the item.",
        "Add the property to your state object first — then build the UI around it.",
        "Data shapes what's possible. The UI can only show what's already there.",
      ],
      moreText: "UI is downstream of data. If the data is missing, no amount of styling will fix it.",
    },
  ],
},
{
  taskId: "reorder-up-down",
  content: [
    {
      title: "Immutable Array Updates",
      subtitle: "Never mutate state directly",
      text: "When you need to change the order of items in state, you can't shuffle the original array in place. React won't detect the change. Always create a copy first, modify the copy, then set state with the new array.",
      details: [
        "Use the spread operator to create a shallow copy of the array.",
        "Make all your changes on the copy, not the original.",
        "Pass the updated copy to your state setter.",
        "React compares references — mutating in place won't trigger a re-render.",
      ],
      code: `
const updated = [...items];
// make changes to updated
setItems(updated);
      `,
      moreText: "Copy first, change second, set third. Always in that order.",
    },
    {
      title: "Swapping Two Items",
      subtitle: "Moving something up or down is just a swap",
      text: "Reordering by one position means swapping two adjacent items. JavaScript's destructuring assignment lets you swap two values in a single line — no temporary variable needed.",
      details: [
        "Identify the two indexes you want to swap.",
        "Use destructuring assignment to exchange the values in one step.",
        "The left side receives the right side's values simultaneously.",
        "This works for any two positions in the array, not just adjacent ones.",
      ],
      code: `
const updated = [...items];
[updated[i], updated[j]] = [updated[j], updated[i]];
setItems(updated);
      `,
      moreText: "Destructuring swap is one line and zero confusion. Reach for it whenever you need to exchange two values.",
    },
    {
      title: "Boundary Checks",
      subtitle: "Stop before you fall off the edge",
      text: "You can't move the first item further up or the last item further down. Without a boundary check, you'd be trying to access an index that doesn't exist. Always guard the edges before executing the swap.",
      details: [
        "Check if the item is already at the boundary before doing anything.",
        "Return early if moving would take the item out of bounds.",
        "For moving up: check if index is 0.",
        "For moving down: check if index is the last position in the array.",
      ],
      code: `
function moveUp(index) {
  if (index === 0) return;
  // safe to swap
}

function moveDown(index) {
  if (index === items.length - 1) return;
  // safe to swap
}
      `,
      moreText: "Guard the edges first. Early returns keep the logic clean and the app safe.",
    },
    {
      title: "Passing Functions as Props",
      subtitle: "Handlers live in the parent, actions happen in the child",
      text: "State lives in the parent component, so functions that modify state also live there. Child components receive those functions as props and call them when the user interacts. The child never touches state directly.",
      details: [
        "Define the handler function where the state lives.",
        "Pass it down to the child component as a prop.",
        "The child calls the prop function — it doesn't need to know what happens next.",
        "This keeps state management centralised and components focused on display.",
      ],
      code: `
// Parent
<Item
  index={i}
  onMoveUp={moveUp}
  onMoveDown={moveDown}
/>

// Child
<button onClick={() => onMoveUp(index)}>↑</button>
<button onClick={() => onMoveDown(index)}>↓</button>
      `,
      moreText: "State up, actions down. The parent owns the data — the child just triggers the change.",
    },
  ],
},
{
  taskId: "drag-to-reorder",
  content: [
    {
      title: "useRef for Drag State",
      subtitle: "Not all state needs to trigger a re-render",
      text: "During a drag operation you need to track which item is being dragged and which position it's hovering over. This isn't display state — the UI doesn't need to re-render every time it changes. useRef is the right tool for values you need to read later without causing renders.",
      details: [
        "useRef stores a mutable value that persists across renders.",
        "Updating a ref does not trigger a re-render — unlike useState.",
        "Access the current value with .current at any point in your code.",
        "Use refs for intermediate values that are only needed at the end of an interaction.",
      ],
      code: `
const dragIndex = useRef(null);
const dropIndex = useRef(null);

// set during drag
dragIndex.current = 2;

// read when drag ends
console.log(dragIndex.current); // 2
      `,
      moreText: "If a value is only needed to compute a result at the end, useRef — not useState.",
    },
    {
      title: "The HTML Drag and Drop API",
      subtitle: "The browser ships drag and drop for free",
      text: "You don't need a library to implement drag and drop. The browser has a native drag and drop API built in. Three events and one attribute are all you need to track what's being dragged, where it's going, and when it's released.",
      details: [
        "Add the draggable attribute to any element to make it draggable.",
        "onDragStart fires when the user begins dragging — record the source index.",
        "onDragEnter fires when the dragged item moves over another element — record the target index.",
        "onDragEnd fires when the user releases — this is where you execute the reorder.",
      ],
      code: `
<div
  draggable
  onDragStart={() => handleStart(index)}
  onDragEnter={() => handleEnter(index)}
  onDragEnd={handleEnd}
>
  {item.label}
</div>
      `,
      moreText: "Three events. One attribute. No npm install required.",
    },
    {
      title: "Splice to Reorder",
      subtitle: "Remove from one position, insert at another",
      text: "Reordering with drag and drop is a two-step array operation: remove the dragged item from its original position, then insert it at the drop position. Array.splice handles both steps cleanly.",
      details: [
        "Always work on a copy of the array — never mutate state directly.",
        "Use splice to remove the item at the drag index — it returns the removed element.",
        "Use splice again to insert that element at the drop index.",
        "Set state with the updated array to trigger the re-render.",
      ],
      code: `
const updated = [...items];
const moved = updated.splice(fromIndex, 1)[0];
updated.splice(toIndex, 0, moved);
setItems(updated);
      `,
      moreText: "Remove, then insert. Two splices, one reorder. Clean up the refs after.",
    },
    {
      title: "Separating Concerns Across Components",
      subtitle: "Logic in the parent, events in the child",
      text: "The drag logic lives in the parent because that's where state lives. The child just fires events. The child doesn't know what happens when it's dragged — it just calls the function it was given and lets the parent handle the rest.",
      details: [
        "Define all three drag handlers in the parent where state lives.",
        "Pass them down to the child as props.",
        "The child attaches them to the correct drag events — nothing more.",
        "This keeps the child focused on display and the parent focused on logic.",
      ],
      code: `
// Parent
<Item
  index={i}
  onDragStart={handleStart}
  onDragEnter={handleEnter}
  onDragEnd={handleEnd}
/>

// Child
<div
  draggable
  onDragStart={() => onDragStart(index)}
  onDragEnter={() => onDragEnter(index)}
  onDragEnd={onDragEnd}
/>
      `,
      moreText: "The child fires, the parent decides. Keep the boundary clean.",
    },
  ],
},
{
  taskId: "character-limit",
  content: [
    {
      title: "Constants for Magic Numbers",
      subtitle: "Name your limits — don't hardcode them",
      text: "When a number appears more than once in your code, give it a name. A named constant tells the next person reading the code exactly what the number means — and lets you change it in one place instead of hunting through every file.",
      details: [
        "Declare the limit as a constant at the top of your file.",
        "Reference the constant everywhere instead of repeating the raw number.",
        "If the limit ever changes, you update one line — not five.",
        "Named constants make code self-documenting — the name is the explanation.",
      ],
      code: `
const MAX = 100;

// use the name, not the number
if (value.length <= MAX) {
  setValue(value);
}

<span>{value.length}/{MAX}</span>
      `,
      moreText: "If a number needs explaining, it needs a name.",
    },
    {
      title: "Validating Inside onChange",
      subtitle: "Block invalid input before it enters state",
      text: "The best time to reject bad input is the moment it arrives — before it ever touches state. By adding a condition inside the onChange handler, you stop invalid values at the door instead of cleaning them up after the fact.",
      details: [
        "Check the new value's length before calling the state setter.",
        "Only update state if the value passes the condition.",
        "If the condition fails, do nothing — the input stays where it was.",
        "This keeps state clean without needing to sanitise it later.",
      ],
      code: `
onChange={(e) => {
  if (e.target.value.length <= MAX) {
    setValue(e.target.value);
  }
}}
      `,
      moreText: "Validate at the point of entry. Clean state is easier than cleaned-up state.",
    },
    {
      title: "Dynamic Styles Based on State",
      subtitle: "Let the UI react to the current value",
      text: "A counter that turns red near the limit isn't just a colour change — it's communication. The UI is telling the user something important before they make a mistake. Inline style conditions let you change appearance based on any value in state.",
      details: [
        "Use a ternary inside the style attribute to choose between two values.",
        "Base the condition on whatever state value is relevant.",
        "Colour, opacity, font weight — any CSS property can be made dynamic.",
        "The style updates automatically every time state changes.",
      ],
      code: `
<span
  style={{
    color: value.length > MAX * 0.9 ? "red" : "gray",
  }}
>
  {value.length}/{MAX}
</span>
      `,
      moreText: "Dynamic styles turn state into feedback. The UI should always reflect what's happening.",
    },
    {
      title: "Designing for the Unhappy Path",
      subtitle: "What happens when users don't behave?",
      text: "Most developers test the happy path — type something short, click add, see it appear. But users paste essays, hit submit on empty inputs, and type forever if you let them. Designing for those moments is what separates something built from something designed.",
      details: [
        "Ask what happens if a user does the worst possible thing with each input.",
        "An unvalidated input isn't neutral — it's an open door for broken UI.",
        "Character limits, empty checks, and boundary guards are not optional extras.",
        "Every input your app accepts is a contract with the user about what it can handle.",
      ],
      moreText: "Design for how users actually behave — not how you hope they will.",
    },
  ],
},
{
  taskId: "undo-last-delete",
  content: [
    {
      title: "Snapshot Before You Destroy",
      subtitle: "Save what you're about to remove",
      text: "Undo is only possible if you kept a copy of what was deleted. The moment before you remove something from state is your last chance to save it. Capture the item and its position first — then delete.",
      details: [
        "Before filtering or removing, read the item out of the array by its index.",
        "Store it in a separate state variable alongside its original position.",
        "Then proceed with the deletion as normal.",
        "If the user hits undo, you have everything you need to reverse it.",
      ],
      code: `
function removeItem(index) {
  setLastRemoved({ item: items[index], index });
  setItems(items.filter((_, i) => i !== index));
}
      `,
      moreText: "You can't undo what you didn't save. Capture before you delete.",
    },
    {
      title: "Restoring State with Splice",
      subtitle: "Insert the item back where it came from",
      text: "Undoing a delete means putting the item back at the exact position it came from. Because you stored both the item and its original index, splice can re-insert it precisely — not just tack it onto the end of the list.",
      details: [
        "Create a copy of the current array.",
        "Use splice to insert the saved item at the saved index.",
        "Set state with the restored array.",
        "Clear the lastDeleted state so the undo button disappears.",
      ],
      code: `
function undoRemove() {
  if (!lastRemoved) return;
  const updated = [...items];
  updated.splice(lastRemoved.index, 0, lastRemoved.item);
  setItems(updated);
  setLastRemoved(null);
}
      `,
      moreText: "Splice inserts at a position, not just at the end. That's what makes the undo feel right.",
    },
    {
      title: "Conditional UI with &&",
      subtitle: "Only show the undo button when there's something to undo",
      text: "The undo button should only exist when there's something to undo. If nothing has been deleted yet, there's nothing to show. The && operator lets you render an element only when the condition is true — and remove it automatically when it's not.",
      details: [
        "Use && to render the button only when lastDeleted has a value.",
        "When lastDeleted is null, the button disappears with no extra logic.",
        "After a successful undo, set lastDeleted back to null to hide the button.",
        "The UI stays in sync with the state automatically.",
      ],
      code: `
{lastRemoved && (
  <button onClick={undoRemove}>
    ↩ Undo
  </button>
)}
      `,
      moreText: "Show it when it's useful. Hide it when it's not. State drives both.",
    },
    {
      title: "Undo as a Trust Feature",
      subtitle: "The features users never mention when they work",
      text: "Undo is invisible when it works. Users never tweet about an undo button — but they absolutely tell you when there isn't one. Features that make users feel safe are the ones that keep them coming back. Undo is one of the cheapest ways to earn that trust.",
      details: [
        "Users misclick. That's not a bug in the user — it's a gap in your app.",
        "An app that offers recovery feels safer to use than one that doesn't.",
        "The apps people trust are the ones that assume mistakes will happen.",
        "Undo doesn't just recover data — it recovers the user's confidence.",
      ],
      moreText: "The best features are the ones users only notice when they're missing.",
    },
  ],
},
{
  taskId: "dark-light-mode",
  content: [
    {
      title: "Boolean Toggle Pattern",
      subtitle: "One boolean, two states, infinite uses",
      text: "Dark mode is just a boolean. On or off. True or false. You flip it with a single line and the rest of the UI reacts. This pattern — one boolean driving a visual mode — shows up constantly in React development.",
      details: [
        "Store the mode as a boolean in state, initialised to false.",
        "Toggle it by setting state to the opposite of its current value.",
        "Every part of the UI that depends on it will re-render automatically.",
        "One state variable controls the entire experience.",
      ],
      code: `
const [isDark, setIsDark] = useState(false);

<button onClick={() => setIsDark(!isDark)}>
  Toggle
</button>
      `,
      moreText: "A toggle is just a boolean that flips. That's the whole pattern.",
    },
    {
      title: "Inline Styles Driven by State",
      subtitle: "Swap colour palettes with a ternary",
      text: "When dark mode is on, every surface needs different colours. The cleanest way to handle this without a separate CSS file is a ternary inside the style attribute — one value for dark, one for light, React picks the right one based on state.",
      details: [
        "Use a ternary inside the style prop to choose between two colour values.",
        "Apply this to background, colour, border — anything that needs to change.",
        "The style updates instantly every time the boolean flips.",
        "You can apply the same pattern to any element that needs theme-aware styling.",
      ],
      code: `
<div
  style={{
    backgroundColor: isDark ? "#111" : "#fff",
    color: isDark ? "#eee" : "#333",
  }}
>
      `,
      moreText: "Two colours per property. One ternary per property. State picks which one renders.",
    },
    {
      title: "CSS Transitions on Style Changes",
      subtitle: "Make the switch feel smooth, not jarring",
      text: "Without a transition, flipping dark mode is an instant flash — harsh and cheap-feeling. One CSS transition property smooths the change across all affected properties. It's the difference between a toggle and an experience.",
      details: [
        "Add a transition property to the same element you're changing colours on.",
        "Use 'all' to cover every property that changes at once.",
        "A duration of 0.2 to 0.4 seconds feels natural — shorter feels abrupt, longer feels slow.",
        "The transition applies automatically whenever any of the covered properties change.",
      ],
      code: `
<div
  style={{
    backgroundColor: isDark ? "#111" : "#fff",
    transition: "all 0.3s ease",
  }}
>
      `,
      moreText: "Transitions cost one line and make the entire interaction feel intentional.",
    },
    {
      title: "Dynamic Button Labels",
      subtitle: "The button should reflect what it will do",
      text: "A toggle button that always says the same thing is confusing. The label should always describe the action the user is about to take — not the current state. When dark mode is on, show the option to go light. When it's off, show dark.",
      details: [
        "Use a ternary in the button's content to swap the label based on current state.",
        "Show the opposite mode — tell the user what clicking will switch them to.",
        "Icons work well here alongside text — 🌙 and ☀️ communicate instantly.",
        "This applies to any toggle: the label should always describe the next action.",
      ],
      code: `
<button onClick={() => setIsDark(!isDark)}>
  {isDark ? "☀️ Light mode" : "🌙 Dark mode"}
</button>
      `,
      moreText: "The label is an action, not a status. Show what clicking will do, not what is currently on.",
    },
  ],
},
{
  taskId: "bulk-delete-by-category",
  content: [
    {
      title: "Filtering by a Property Value",
      subtitle: "Keep everything that doesn't match",
      text: "Bulk delete by category is just a filter — keep every item whose category doesn't match the target, and throw away everything that does. One line removes an entire group at once.",
      details: [
        "Use .filter() to return only the items you want to keep.",
        "The condition is the inverse of what you're deleting — keep what doesn't match.",
        "Every item in the matching category is removed in a single operation.",
        "The same function works for any category — no separate logic needed per group.",
      ],
      code: `
function clearGroup(type) {
  setItems(items.filter((item) => item.type !== type));
}
      `,
      moreText: "Delete by exclusion — keep everything that isn't the target.",
    },
    {
      title: "Extracting Unique Values with Set",
      subtitle: "Deduplicate an array in one step",
      text: "To generate one button per category, you need a list of unique categories — no duplicates. A Set automatically discards repeated values, and spreading it back into an array gives you a clean, deduplicated list.",
      details: [
        "Map over your items to extract a single property from each.",
        "Pass the result into new Set() — duplicates are removed automatically.",
        "Spread the Set back into an array with [...] so you can map over it.",
        "The result always reflects the categories that actually exist in the current data.",
      ],
      code: `
const types = [...new Set(items.map((item) => item.type))];
// ["personal", "work", "shopping"]
      `,
      moreText: "Set gives you uniqueness for free. Spread it back to an array to use it in JSX.",
    },
    {
      title: "Dynamic Button Rendering",
      subtitle: "Let the data decide how many buttons to show",
      text: "Rather than hardcoding one button per category, you map over the unique category list and generate a button for each one. The buttons appear and disappear automatically as categories are added or cleared — the data drives the UI.",
      details: [
        "Map over the unique categories array to generate one button per item.",
        "Pass the category value directly into the handler when the button is clicked.",
        "Always include a key prop when rendering lists of elements.",
        "When a category is fully cleared, it disappears from the list — and so does its button.",
      ],
      code: `
{types.map((type) => (
  <button key={type} onClick={() => clearGroup(type)}>
    Clear {type}
  </button>
))}
      `,
      moreText: "Hardcoded buttons don't scale. Let the data generate its own controls.",
    },
    {
      title: "Building for the End State",
      subtitle: "Apps get messy over time — design for that",
      text: "Most tutorials teach you how to add things. Nobody teaches you what happens six months later when a user needs to clean everything up. Building for the end state — not just the happy beginning — is what separates apps that get used from apps that get abandoned.",
      details: [
        "Think beyond the first interaction — what does the app look like after real use?",
        "Bulk operations become essential the moment a list grows past a handful of items.",
        "A feature that handles one item is a start. A feature that handles any number is a tool.",
        "The best apps are designed for users who have been living in them, not just arriving.",
      ],
      moreText: "Design for month six, not just day one.",
    },
  ],
},













  









];

export default cheatsheetData;

/*   


   {
      taskId: "",
      content: [
        {
          title: "",
          subtitle: "",
          text: '',
          details: [
            "",
            "",
            "",
          ],         
           "code": `
          
          `,
          moreText: '',
        },
           {
          title: "",
          subtitle: "",
          text: '',
          details: [
            "",
            "",
            "",
          ],
          moreText: '',
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "/images/cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "/images/cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "/images/cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "/images/cheatsheetImages/task/.webp"
        },
      ],
    },



  */


