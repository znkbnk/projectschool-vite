/* eslint-disable no-template-curly-in-string */
const reactTodoAppData = [
  {
    id: "react-todo-app-guide",
    title: "Build Your First React App: Todo List from Scratch",
    image: "/images/reactTodoApp.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the most beginner-friendly React course ever created! This isn't just another tutorial—it's a complete journey from zero to building your first working React application. We'll build a Todo App together, and by the end, you'll understand EVERY single line of code. No prior React experience needed. Let's make history!",
      },
      {
        type: "title",
        content: "Why This Course is Different",
      },
      {
        type: "text",
        content:
          "This course breaks React down into tiny, digestible pieces. Each concept is explained with analogies, visuals, and practical examples. We follow a real developer's workflow: first we build what users see (the UI), then we add the data layer (state), and finally we connect everything with logic.",
      },
      {
        type: "list",
        items: [
          "One concept at a time - no information overload",
          "Real-world analogies that make concepts stick",
          "Progressive building - each section builds on the previous",
          "Complete code examples you can copy and experiment with",
          "By the end, you'll understand every line of a React app",
        ],
      },
      {
        type: "boldText",
        content: "Course Structure Overview",
      },
    
      {
        type: "title",
        content: "PHASE 1: What Do I Want to See? (The UI)",
      },
      {
        type: "text",
        content:
          "Before writing any logic, a real developer asks: What should this look like? We start by building the visual structure—the UI that users will see. Think of it like sketching a blueprint before building a house.",
      },
    
      {
        type: "title",
        content: "Lesson 1: What is a React Project?",
      },
      {
        type: "text",
        content:
          "A React project is just a folder. That's it. A folder with files inside. Nothing magical. Nothing scary. Inside that folder, you'll see lots of stuff. Ignore most of it for now. The only folder you care about is this one:",
      },
      {
        type: "code",
        content: `src/`,
      },
      {
        type: "text",
        content:
          "S-R-C. This is where YOUR code lives. And inside src? There's one file that matters most:",
      },
      {
        type: "code",
        content: `App.js`,
      },
      {
        type: "text",
        content:
          "Sometimes it's called App.jsx—same thing. This single file is where we'll build our entire todo app. Why App.js? Because this is the root. The starting point. When someone opens your app, React looks here first.",
      },
      {
        type: "boldText",
        content:
          "Think of it like the front door to your house. Everything begins here.",
      },
   
      {
        type: "list",
        items: [
          "React project = a folder with files",
          "src folder = where YOUR code lives",
          "App.js = the starting point, the front door",
        ],
      },
      {
        type: "title",
        content: "Lesson 2: The Component Skeleton",
      },
      {
        type: "text",
        content:
          "Every single thing you see in a React app is built from this:",
      },
      {
        type: "code",
        content: `function App() {
  return ()
}`,
      },
      {
        type: "text",
        content:
          "A React component is just a function. That's the big secret. Not a class. Not some complicated thing. Just a plain JavaScript function.",
      },
      {
        type: "boldText",
        content: "The Analogy: Chef and Plate",
      },
      {
        type: "text",
        content:
          "Think of it like a chef. The function is the chef. The return is the plate of food that goes out to the customer. The customer doesn't see the kitchen. They only see what's on the plate. Same thing here—users only see what's in the return statement.",
      },
    
      {
        type: "list",
        items: [
          "Component = function",
          "Function returns UI",
          "This is the foundation of everything in React",
        ],
      },
      {
        type: "title",
        content: "Lesson 3: What is Return?",
      },
      {
        type: "text",
        content:
          "Return means: give this back. When React runs your component, it asks: 'What should I show?' Your return statement answers that question.",
      },
      {
        type: "boldText",
        content: "The Analogy: Vending Machine",
      },
      {
        type: "text",
        content:
          "Think of a vending machine. You press a button. The machine does stuff inside. You don't see that. You only see what comes out the slot. Return is the slot. It's what comes out.",
      },
      {
        type: "code",
        content: `function App() {
  // hidden stuff up here
  // user never sees this
  
  return (
    // THIS is what user sees
  )
}`,
      },
    
      {
        type: "text",
        content:
          "Inside the function, above the return? That's the hidden stuff. Logic, calculations, whatever. The user never sees that. But whatever is inside the return? That's what appears on their screen. Every time.",
      },
      {
        type: "title",
        content: "Lesson 4: What is JSX?",
      },
      {
        type: "text",
        content:
          "This looks like HTML. But it's not. And that confuses everyone.",
      },
      {
        type: "code",
        content: `return (
  <div>
    <h1>hello world</h1>
  </div>
)`,
      },
      {
        type: "text",
        content:
          "This is called JSX. J-S-X. It stands for JavaScript XML. It lets you write HTML-looking code inside your JavaScript. Looks like HTML. Lives in JavaScript.",
      },
      {
        type: "boldText",
        content: "Why does JSX exist?",
      },
      {
        type: "text",
        content:
          "Because describing UI in pure JavaScript is painful. Look at this mess:",
      },
      {
        type: "code",
        content: `// WITHOUT JSX (ugly)
React.createElement('div', null,
  React.createElement('h1', null, 'hello world')
)`,
      },
      {
        type: "text",
        content: "And this is the same thing with JSX:",
      },
      {
        type: "code",
        content: `// WITH JSX (clean)
<div>
  <h1>hello world</h1>
</div>`,
      },
      {
        type: "text",
        content:
          "Which one would you rather write? JSX makes your life ten times easier.",
      },
     
      {
        type: "title",
        content: "Lesson 5: The Parentheses ( ) After Return",
      },
      {
        type: "text",
        content: "Remove these two characters and your entire app breaks.",
      },
      {
        type: "code",
        content: `return (
  <div>...</div>
)`,
      },
      {
        type: "text",
        content:
          "JavaScript reads your code line by line. When it sees 'return' and nothing next to it on the same line? It thinks you're done. It adds an invisible semicolon. Return nothing. Done. Game over.",
      },
      {
        type: "text",
        content:
          "But when you add parentheses right after return? JavaScript sees the opening bracket and thinks: 'Oh wait, there's more coming on the next line.' It waits. It reads your JSX.",
      },
      {
        type: "boldText",
        content: "The Rule",
      },
      {
        type: "text",
        content:
          "If your return has multiple lines, wrap it in parentheses. Opening parenthesis right after return. Closing parenthesis after your last line of JSX.",
      },
    
      {
        type: "title",
        content: "Lesson 6: The Wrapper <div> (Single Parent Rule)",
      },
      {
        type: "text",
        content: "Try to return two things in React and it yells at you.",
      },
      {
        type: "code",
        content: `// THIS BREAKS!
return (
  <h1>hello</h1>
  <p>world</p>
)`,
      },
      {
        type: "text",
        content:
          "React has one strict rule: you can only return ONE element. Not two. Not five. One.",
      },
      {
        type: "boldText",
        content: "The Analogy: Grocery Bags",
      },
      {
        type: "text",
        content:
          "Think of it like carrying groceries. You can't hand someone ten loose apples. You put them in one bag first. Then hand over the bag. One container. Everything inside.",
      },
      {
        type: "text",
        content: "The fix? Wrap everything in one container—a div:",
      },
      {
        type: "code",
        content: `return (
  <div>
    <h1>hello</h1>
    <p>world</p>
  </div>
)`,
      },
      {
        type: "text",
        content:
          "Now we're returning one thing: the div. And the div contains everything else. The wrapper is the parent. Everything else is children. One parent, many children. That's the rule.",
      },
      
      {
        type: "title",
        content: "Lesson 7: Adding a Heading <h2>",
      },
      {
        type: "text",
        content:
          "Your first real line of React. This is where it all begins. Every app needs a title. Something that tells users what they're looking at. Inside the div, we add:",
      },
      {
        type: "code",
        content: `<h2>todo app</h2>`,
      },
      {
        type: "text",
        content:
          "What's h2? It's a heading. HTML has six levels. H1 is the biggest, most important. H6 is the smallest. H2 is second level. Perfect for app titles. Not too loud. Not too quiet.",
      },
      {
        type: "boldText",
        content: "The Pattern for Every Element",
      },
      {
        type: "code",
        content: `<h2>todo app</h2>
 ^    ^         ^
 |    |         |
open content  close`,
      },
      {
        type: "text",
        content:
          "Open tag, content inside, close tag. You'll do this a hundred times. It becomes muscle memory.",
      },
   
      {
        type: "title",
        content: "Lesson 8: Adding an Input <input />",
      },
      {
        type: "text",
        content: "No input, no app. Users need a way to type their todos.",
      },
      {
        type: "code",
        content: `<input />`,
      },
      {
        type: "text",
        content:
          "Notice something different? No closing tag. Instead, we close it right here with a slash. This is called a self-closing tag.",
      },
      {
        type: "text",
        content:
          "H2 had text inside, right? Open tag, content, close tag. But input? There's nothing to put inside. The user types INTO it. So we just close it immediately. Slash bracket. Done.",
      },
      {
        type: "code",
        content: `// Has content inside
<h2>text here</h2>

// No content - self closing
<input />`,
      },
    
      {
        type: "title",
        content: "Lesson 9: What is Placeholder?",
      },
      {
        type: "text",
        content:
          "Your users are confused. They're staring at an empty box. What goes here? Email? Password? A todo? Users have no idea.",
      },
      {
        type: "text",
        content:
          "Placeholder is an attribute. It's like giving instructions to the element:",
      },
      {
        type: "code",
        content: `<input placeholder="add todo" />`,
      },
      {
        type: "text",
        content:
          "'Add todo' appears inside the box. But it's gray. It's not real text. It's just a hint. The moment user starts typing, it disappears.",
      },
      {
        type: "boldText",
        content: "Your First Attribute",
      },
      {
        type: "text",
        content:
          "Attributes add extra info to elements. The pattern is: name, equals, quotes, value.",
      },
      {
        type: "code",
        content: `placeholder="add todo"
    ^           ^
    |           |
  name        value`,
      },
   
      {
        type: "title",
        content: "Lesson 10: Adding a Button <button>",
      },
      {
        type: "text",
        content:
          "No button? No app. Users can type now. But then what? They hit enter? They pray? They need something to click.",
      },
      {
        type: "code",
        content: `<button>add</button>`,
      },
      {
        type: "text",
        content:
          "Unlike input, button has content inside. The word 'add' is that content. That text becomes the label. Whatever you write between the tags, that's what users see on the button.",
      },
      {
        type: "code",
        content: `// Self-closing (no content)
<input />

// Has content between tags
<button>add</button>`,
      },
   
      {
        type: "title",
        content: "Lesson 11: Adding a List <ul>",
      },
      {
        type: "text",
        content:
          "No list? Your todos vanish into nothing. User types a todo. Clicks add. Then what? Where does it show up? We need a container for todos.",
      },
      {
        type: "code",
        content: `<ul></ul>`,
      },
      {
        type: "text",
        content:
          "UL stands for unordered list. It's a container. A box that holds list items. Empty for now, but ready.",
      },
      {
        type: "text",
        content:
          "Why 'unordered'? Because the items have no numbers. Just bullet points. There's also OL—ordered list—with numbers. But for todos, bullets are perfect.",
      },
    
      {
        type: "title",
        content: "Lesson 12: Adding List Items <li>",
      },
      {
        type: "text",
        content:
          "Lists need items inside them. Each todo will be an <li> element:",
      },
      {
        type: "code",
        content: `<ul>
  <li>example todo</li>
</ul>`,
      },
      {
        type: "text",
        content:
          "LI stands for list item. It goes inside ul. Each item is one li. The text between the tags is what shows on screen with a bullet point.",
      },
    
      {
        type: "title",
        content: "Lesson 13: Our Static UI Complete!",
      },
      {
        type: "text",
        content: "Phase 1 done! Here's our complete static UI:",
      },
      {
        type: "code",
        content: `function App() {
  return (
    <div>
      <h2>todo app</h2>
      <input placeholder="add todo" />
      <button>add</button>
      <ul>
        <li>example todo</li>
      </ul>
    </div>
  )
}`,
      },
      {
        type: "text",
        content:
          "It looks right, but does nothing yet. The input doesn't save anything. The button doesn't work. The list is hardcoded. Time to make it interactive!",
      },
      {
        type: "boldText",
        content: "Phase 1 Complete ✓",
      },
      {
        type: "text",
        content:
          "You built the visual structure. Title, input, button, list. All the pieces users see. Now we need to make it actually work.",
      },
    
      {
        type: "title",
        content: "PHASE 2: What Data Do I Need? (State)",
      },
      {
        type: "text",
        content:
          "Now the developer asks: What information does this app need to remember? This is where STATE comes in.",
      },
   
      {
        type: "title",
        content: "Lesson 14: What Data Does Our App Need?",
      },
      {
        type: "text",
        content: "Think about our todo app. What does it need to remember?",
      },
      {
        type: "list",
        items: [
          "The text user is typing (input value)",
          "The list of all todos",
        ],
      },
      {
        type: "text",
        content: "Two pieces of data = two states. Planning before coding.",
      },
    
      {
        type: "title",
        content: "Lesson 15: What is State?",
      },
      {
        type: "text",
        content:
          "State is data that can change. Your app needs to remember things. When state changes, UI updates automatically.",
      },
      {
        type: "text",
        content:
          "Think of state as React's memory system. Without it, your app forgets everything the moment something changes.",
      },
      {
        type: "boldText",
        content: "Key Concept",
      },
      {
        type: "text",
        content:
          "State = data that can change. When state changes, React automatically updates what users see.",
      },
    
      {
        type: "title",
        content: "Lesson 16: Introducing useState",
      },
      {
        type: "text",
        content:
          "useState is React's tool for creating state. It gives you two things:",
      },
      {
        type: "list",
        items: ["A value (the current data)", "A way to change that value"],
      },
      {
        type: "text",
        content: "We'll use it twice—once for the input, once for the list.",
      },
    
      {
        type: "title",
        content: "Lesson 17: VS Code Auto-Import Magic",
      },
      {
        type: "text",
        content:
          "When you type useState, VS Code suggests it. Press Tab or Enter, and the import appears automatically:",
      },
      {
        type: "code",
        content: `import { useState } from "react";`,
      },
      {
        type: "text",
        content:
          "This line grabs the useState tool from React. You don't have to type it manually—VS Code does it for you.",
      },
    
      {
        type: "title",
        content: "Lesson 18: What is Import?",
      },
      {
        type: "text",
        content: "Import means grabbing tools from elsewhere.",
      },
      {
        type: "code",
        content: `import { useState } from "react";`,
      },
      {
        type: "list",
        items: ["useState is the tool", '"react" is the toolbox (the library)'],
      },
      {
        type: "text",
        content:
          "Someone else built useState. You just use it. That's the beauty of React.",
      },
  
      {
        type: "title",
        content: "Lesson 19: The Curly Braces { } in Import",
      },
      {
        type: "text",
        content: "Why curly braces around useState?",
      },
      {
        type: "code",
        content: `import { useState } from "react";`,
      },
      {
        type: "text",
        content:
          "This is called a named export. useState is ONE of many tools in React. The curly braces mean: 'I just want this specific one.'",
      },
     
      {
        type: "title",
        content: 'Lesson 20: What is "react"?',
      },
      {
        type: "text",
        content:
          '"react" is the library/package. Thousands of lines of code written by smart people. It lives in a folder called node_modules in your project. You don\'t see it, you just use it.',
      },
    
      {
        type: "title",
        content: "Lesson 21: Creating State for the Input",
      },
      {
        type: "text",
        content: "Now let's create our first piece of state:",
      },
      {
        type: "code",
        content: `const [todo, setTodo] = useState("");`,
      },
      {
        type: "text",
        content:
          "This stores what user types. Let's break down each part in the next lessons.",
      },
    
      {
        type: "title",
        content: "Lesson 22: What is const?",
      },
      {
        type: "text",
        content:
          "const is a way to declare a variable. It means this variable won't be reassigned directly. It's the standard way to create state in React.",
      },
    
      {
        type: "title",
        content: "Lesson 23: The Square Brackets [ ]",
      },
      {
        type: "text",
        content: "This is called array destructuring:",
      },
      {
        type: "code",
        content: `const [todo, setTodo] = useState("");`,
      },
      {
        type: "text",
        content:
          "useState returns two things in an array. The square brackets unpack them into two separate variables. First item goes to 'todo', second item goes to 'setTodo'.",
      },
   
      {
        type: "title",
        content: "Lesson 24: What is todo?",
      },
      {
        type: "text",
        content:
          "todo is the first item from useState. It's the current value—whatever is stored right now. We chose this name because it represents a single todo item.",
      },
  
      {
        type: "title",
        content: "Lesson 25: What is setTodo?",
      },
      {
        type: "text",
        content:
          "setTodo is the second item from useState. It's the updater function—the ONLY way to change the value.",
      },
      {
        type: "text",
        content:
          "The naming convention is: set + the name of your variable. So for 'todo', the setter is 'setTodo'.",
      },
      {
        type: "boldText",
        content: "Important Rule",
      },
      {
        type: "text",
        content: "Never change state directly. Always use the setter function.",
      },
      {
        type: "code",
        content: `todo = 'new'      // WRONG ❌
setTodo('new')    // RIGHT ✓`,
      },
   
      {
        type: "title",
        content: 'Lesson 26: What is useState("")?',
      },
      {
        type: "text",
        content:
          'We\'re calling the useState function and passing "" as the starting value:',
      },
      {
        type: "code",
        content: `useState("")`,
      },
      {
        type: "text",
        content:
          '"" is an empty string. This means our input starts empty. No text. The user will fill it in.',
      },
    
      {
        type: "title",
        content: "Lesson 27: Creating State for the List",
      },
      {
        type: "text",
        content: "Same pattern, different purpose:",
      },
      {
        type: "code",
        content: `const [todos, setTodos] = useState([]);`,
      },
      {
        type: "text",
        content:
          "This stores all our todos. Notice we use 'todos' (plural) because it's a list of many items.",
      },
   
      {
        type: "title",
        content: "Lesson 28: Why [] as Initial Value?",
      },
      {
        type: "text",
        content:
          "[] is an empty array. The list starts with no items. It will fill up as user adds todos.",
      },
      {
        type: "code",
        content: `useState([])  // Start with empty array
// Later it becomes: ["buy milk", "walk dog", "code"]`,
      },
    
      {
        type: "title",
        content: "Lesson 29: Why Two Separate States?",
      },
      {
        type: "list",
        items: [
          "todo = single input value (what user is typing NOW)",
          "todos = the whole list (all saved todos)",
        ],
      },
      {
        type: "text",
        content:
          "Each state has one job. This is called single responsibility. It keeps things clean and simple.",
      },
    
      {
        type: "title",
        content: "Lesson 30: Where Does State Go?",
      },
      {
        type: "text",
        content: "State goes inside the function, BEFORE the return:",
      },
      {
        type: "code",
        content: `function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
    ...
  )
}`,
      },
      {
        type: "boldText",
        content: "Phase 2 Complete ✓",
      },
      {
        type: "text",
        content:
          "You understand state! Data that changes, stored with useState. Now let's connect everything together.",
      },
     
      {
        type: "title",
        content: "PHASE 3: How Do I Make It Work? (Logic)",
      },
      {
        type: "text",
        content:
          "Now the developer connects everything: UI + Data + Actions. This is where the magic happens.",
      },
    
      {
        type: "title",
        content: "Lesson 31: The Problem With Our Input",
      },
      {
        type: "text",
        content:
          "User types, but nothing is saved. The input doesn't know about our todo state. We need to connect them.",
      },
    
      {
        type: "title",
        content: "Lesson 32: What is value={todo}?",
      },
      {
        type: "text",
        content: "We bind state to the input using the value attribute:",
      },
      {
        type: "code",
        content: `<input value={todo} />`,
      },
      {
        type: "text",
        content:
          "Now the input displays whatever is stored in our todo state. They're connected.",
      },
   
      {
        type: "title",
        content: "Lesson 33: Curly Braces in JSX { }",
      },
      {
        type: "text",
        content: "Curly braces let you use JavaScript inside JSX:",
      },
      {
        type: "code",
        content: `<input value={todo} />`,
      },
      {
        type: "text",
        content:
          "{todo} means: escape to JavaScript world, grab the value of the todo variable, put it here.",
      },
    
      {
        type: "title",
        content: "Lesson 34: The Controlled Input Problem",
      },
      {
        type: "text",
        content:
          "Now the input shows state. But try typing—it doesn't work! The input is 'locked' to whatever state says. We need onChange to update state when user types.",
      },
   
      {
        type: "title",
        content: "Lesson 35: What is onChange?",
      },
      {
        type: "text",
        content:
          "onChange is an event listener. It fires when the input changes. Every keystroke triggers it.",
      },
      {
        type: "code",
        content: `<input onChange={...} />`,
      },
    
      {
        type: "title",
        content: "Lesson 36: The Arrow Function (e) =>",
      },
      {
        type: "text",
        content: "We need to handle the event with a function:",
      },
      {
        type: "code",
        content: `onChange={(e) => ...}`,
      },
      {
        type: "text",
        content:
          "(e) => is an arrow function. Short, clean syntax. The e is the event object—information about what just happened.",
      },
    
      {
        type: "title",
        content: "Lesson 37: What is e.target.value?",
      },
      {
        type: "code",
        content: `e.target.value`,
      },
      {
        type: "list",
        items: [
          "e = the event that happened",
          "target = the input element that triggered it",
          "value = the text typed inside it",
        ],
      },
      {
        type: "text",
        content: "This is how we grab what user typed.",
      },
      
      {
        type: "title",
        content: "Lesson 38: setTodo(e.target.value)",
      },
      {
        type: "text",
        content: "We update state with what user typed:",
      },
      {
        type: "code",
        content: `onChange={(e) => setTodo(e.target.value)}`,
      },
      {
        type: "text",
        content:
          "Every keystroke updates state. State updates the input display. Now typing works!",
      },
    
      {
        type: "title",
        content: "Lesson 39: The Complete Controlled Input",
      },
      {
        type: "text",
        content: "Here's the full pattern:",
      },
      {
        type: "code",
        content: `<input
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
  placeholder="add todo"
/>`,
      },
      {
        type: "text",
        content:
          "State controls input (value). Input updates state (onChange). Two-way connection!",
      },
    
      {
        type: "title",
        content: "Lesson 40: What Happens When Button Clicked?",
      },
      {
        type: "text",
        content:
          "We need to add the todo to the list. For that, we need a function:",
      },
      {
        type: "code",
        content: `function addTodo() {
  // logic goes here
}`,
      },
    
      {
        type: "title",
        content: "Lesson 41: Function Inside a Component?",
      },
      {
        type: "text",
        content:
          "Yes! This is normal and common. Helper functions live inside your component. They're called when user does something.",
      },
      {
        type: "code",
        content: `function App() {
  // state here
  
  function addTodo() {
    // helper function
  }
  
  return (...)
}`,
      },
    
      {
        type: "title",
        content: "Lesson 42: The Guard Clause",
      },
      {
        type: "text",
        content: "First line of addTodo—protection from empty todos:",
      },
      {
        type: "code",
        content: `if (!todo) return;`,
      },
      {
        type: "text",
        content:
          "Don't add empty todos. If todo is empty, exit immediately. Do nothing else.",
      },
   
      {
        type: "title",
        content: "Lesson 43: What is ! (Not Operator)?",
      },
      {
        type: "code",
        content: `!todo`,
      },
      {
        type: "text",
        content:
          "The ! flips true/false. An empty string is 'falsy' in JavaScript. So !todo means 'if todo is empty'. It's a quick way to check for empty values.",
      },
    
      {
        type: "title",
        content: "Lesson 44: What is return; Alone?",
      },
      {
        type: "code",
        content: `if (!todo) return;`,
      },
      {
        type: "text",
        content:
          "return; with nothing after it means: exit the function immediately. Do nothing else. This is called the guard clause pattern—stopping bad data early.",
      },
     
      {
        type: "title",
        content: "Lesson 45: Adding to the List",
      },
      {
        type: "text",
        content: "The main action—adding the new todo:",
      },
      {
        type: "code",
        content: `setTodos([...todos, todo]);`,
      },
      {
        type: "text",
        content:
          "Update the list with the new item. But what's that weird ... syntax?",
      },
    
      {
        type: "title",
        content: "Lesson 46: The Spread Operator ...",
      },
      {
        type: "text",
        content:
          "Three dots. Called the spread operator. It unpacks array items:",
      },
      {
        type: "code",
        content: `...todos`,
      },
      {
        type: "text",
        content:
          'If todos = ["a", "b"], then ...todos becomes a, b (unpacked).',
      },
    
      {
        type: "title",
        content: "Lesson 47: [...todos, todo]",
      },
      {
        type: "text",
        content: "We create a NEW array with all old items plus the new one:",
      },
      {
        type: "code",
        content: `[...todos, todo]

// If todos = ["buy milk", "walk dog"]
// And todo = "code"
// Result = ["buy milk", "walk dog", "code"]`,
      },
      {
        type: "text",
        content:
          "Why new array? Immutability. React detects changes by comparing arrays. New array = React knows to update the screen.",
      },
    
      {
        type: "title",
        content: "Lesson 48: Clearing the Input",
      },
      {
        type: "text",
        content: "After adding, reset the input:",
      },
      {
        type: "code",
        content: `setTodo("");`,
      },
      {
        type: "text",
        content:
          "Reset to empty string. Good UX—the input is ready for the next todo.",
      },
     
      {
        type: "title",
        content: "Lesson 49: Complete addTodo Function",
      },
      {
        type: "code",
        content: `function addTodo() {
  if (!todo) return;
  setTodos([...todos, todo]);
  setTodo("");
}`,
      },
      {
        type: "text",
        content: "Guard → Add → Clear. Clean and simple.",
      },
    
      {
        type: "title",
        content: "Lesson 50: What is onClick?",
      },
      {
        type: "text",
        content: "Connect the button to our function:",
      },
      {
        type: "code",
        content: `<button onClick={addTodo}>add</button>`,
      },
      {
        type: "text",
        content:
          "onClick is an event listener for clicks. Notice it's camelCase in React (not onclick like HTML).",
      },
   
      {
        type: "title",
        content: "Lesson 51: {addTodo} vs {addTodo()}",
      },
      {
        type: "code",
        content: `{addTodo}   // CORRECT - pass the function
{addTodo()} // WRONG - calls it immediately!`,
      },
      {
        type: "text",
        content:
          "Crucial difference! {addTodo} passes the function to React. React calls it when user clicks. {addTodo()} calls it immediately when the page loads—not what we want!",
      },
    
      {
        type: "title",
        content: "Lesson 52: The Problem With Hardcoded <li>",
      },
      {
        type: "text",
        content:
          "We have <li>example todo</li> hardcoded. But our todos are in state now! We need to show real data dynamically.",
      },
   
      {
        type: "title",
        content: "Lesson 53: What is .map()?",
      },
      {
        type: "text",
        content:
          "map() is an array method. It transforms each item and returns a new array. Perfect for lists in React.",
      },
      {
        type: "code",
        content: `[1, 2, 3].map(x => x * 2)
// Result: [2, 4, 6]`,
      },
    
      {
        type: "title",
        content: "Lesson 54: todos.map((t, i) => ...)",
      },
      {
        type: "code",
        content: `todos.map((t, i) => ...)`,
      },
      {
        type: "list",
        items: [
          "Loop through todos array",
          "t = each todo item",
          "i = index (position: 0, 1, 2...)",
          "Arrow function runs for each item",
        ],
      },
    
      {
        type: "title",
        content: "Lesson 55: Returning <li> for Each",
      },
      {
        type: "code",
        content: `todos.map((t, i) => <li>{t}</li>)`,
      },
      {
        type: "text",
        content:
          "For each todo, return an <li>. {t} displays the text. One list item per todo.",
      },
  
      {
        type: "title",
        content: "Lesson 56: What is key={i}?",
      },
      {
        type: "code",
        content: `<li key={i}>{t}</li>`,
      },
      {
        type: "text",
        content:
          "React needs unique keys for list items. Keys help React identify which items changed, were added, or removed. Using index as key is the simple version.",
      },
    
      {
        type: "title",
        content: "Lesson 57: Complete List Rendering",
      },
      {
        type: "code",
        content: `<ul>
  {todos.map((t, i) => (
    <li key={i}>{t}</li>
  ))}
</ul>`,
      },
      {
        type: "text",
        content:
          "Dynamic list from state. When todos changes, the list updates automatically!",
      },
      {
        type: "boldText",
        content: "Phase 3 Complete ✓",
      },
      {
        type: "text",
        content:
          "You connected everything! Input updates state, button adds to list, list renders dynamically. The app works!",
      },
    
      {
        type: "title",
        content: "PHASE 4: Finishing Up",
      },
      {
        type: "text",
        content: "The final pieces—exports and the big picture.",
      },
    
      {
        type: "title",
        content: "Lesson 58: What is export default?",
      },
      {
        type: "text",
        content: "Makes your component available to other files:",
      },
      {
        type: "code",
        content: `export default function App() {
  ...
}`,
      },
      {
        type: "text",
        content:
          "Other files can now import and use your App component. It's how React knows what to show.",
      },
   
      {
        type: "title",
        content: "Lesson 59: Why default?",
      },
      {
        type: "text",
        content:
          "'default' means this is the main thing this file offers. Each file can have one default export. It's what gets imported when you write:",
      },
      {
        type: "code",
        content: `import App from './App';`,
      },
   
      {
        type: "title",
        content: "Lesson 60: The Complete Code",
      },
      {
        type: "text",
        content: "Everything in place. A complete, working todo app!",
      },
      {
        type: "code",
        content: `import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  function addTodo() {
    if (!todo) return;
    setTodos([...todos, todo]);
    setTodo("");
  }
  
  return (
    <div>
      <h2>todo app</h2>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add todo"
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
     
      {
        type: "title",
        content: "Lesson 61: The Data Flow",
      },
      {
        type: "text",
        content: "Here's how everything flows:",
      },
      {
        type: "list",
        items: [
          "Type → onChange → setTodo → state updates",
          "Click → addTodo → setTodos → list updates",
          "State changes → UI re-renders",
        ],
      },
      {
        type: "text",
        content:
          "This is the React cycle. Data flows one way. State is the single source of truth.",
      },
   
      {
        type: "title",
        content: "Lesson 62: Recap - What You Learned",
      },
      {
        type: "list",
        items: [
          "Components and JSX - HTML-like syntax in JavaScript",
          "State with useState - data that changes",
          "Events: onChange, onClick - responding to user actions",
          "Rendering lists with map - dynamic content",
        ],
      },
      {
        type: "text",
        content: "You understand EVERY LINE of a React app now!",
      },
    
      {
        type: "title",
        content: "Lesson 63: What's Next?",
      },
      {
        type: "text",
        content: "You've built a foundation. From here you can learn:",
      },
      {
        type: "list",
        items: [
          "Deleting todos",
          "Marking todos complete",
          "Styling with CSS",
          "Saving to local storage",
          "Multiple components",
          "And much more!",
        ],
      },
      {
        type: "text",
        content:
          "The hardest part is over. You understand React. Everything else builds on this foundation.",
      },
    
      {
        type: "title",
        content: "Quick Reference Card",
      },
      {
        type: "text",
        content: "Keep this handy while coding!",
      },
      {
        type: "boldText",
        content: "Component Structure",
      },
      {
        type: "code",
        content: `import { useState } from "react";

export default function ComponentName() {
  // state goes here
  // functions go here
  
  return (
    // JSX goes here
  );
}`,
      },
      {
        type: "boldText",
        content: "State Pattern",
      },
      {
        type: "code",
        content: `const [value, setValue] = useState(initialValue);

// Examples:
const [name, setName] = useState("");      // string
const [count, setCount] = useState(0);      // number
const [items, setItems] = useState([]);     // array
const [user, setUser] = useState(null);     // object/null`,
      },
      {
        type: "boldText",
        content: "Controlled Input Pattern",
      },
      {
        type: "code",
        content: `<input
  value={stateVariable}
  onChange={(e) => setStateVariable(e.target.value)}
/>`,
      },
      {
        type: "boldText",
        content: "List Rendering Pattern",
      },
      {
        type: "code",
        content: `{array.map((item, index) => (
  <li key={index}>{item}</li>
))}`,
      },
      {
        type: "boldText",
        content: "Adding to Array (Immutable)",
      },
      {
        type: "code",
        content: `setArray([...array, newItem]);`,
      },
      {
        type: "boldText",
        content: "Common Events",
      },
      {
        type: "code",
        content: `onClick={functionName}        // button clicks
onChange={(e) => ...}         // input changes
onSubmit={(e) => ...}         // form submit`,
      },
      {
        type: "title",
        content: "Congratulations!",
      },
      {
        type: "text",
        content:
          "You've completed the course! You now understand the fundamentals of React. You built a working todo app from scratch and understand every single line. This is a huge achievement. The React world is now open to you!",
      },
    
      {
        type: "practiceTask",
        content:
          "Task: Add a 'Delete' button next to each todo that removes it from the list when clicked.",
        hint: "Hint: You'll need to filter the todos array to remove the item at a specific index. Use setTodos with filter().",
        solution: `import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  function addTodo() {
    if (!todo) return;
    setTodos([...todos, todo]);
    setTodo("");
  }
  
  function deleteTodo(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }
  
  return (
    <div>
      <h2>todo app</h2>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add todo"
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTodo(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      },
    ],
  },
];

export { reactTodoAppData };
