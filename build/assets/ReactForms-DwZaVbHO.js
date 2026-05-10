import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-forms-guide`,title:`React Forms - Complete Guide`,image:`/images/reactForms.webp`,paragraphs:[{type:`text`,content:`Forms are everywhere. Login pages, signup flows, search bars, checkout processes, contact forms, settings pages—every real application needs forms. This guide will take you from zero to mastering forms in React. By the end, you'll build any form with confidence. Let's dive in!`},{type:`title`,content:`Why Forms Matter`},{type:`text`,content:`Forms are how users talk to your app. Without forms, your app is just a fancy poster—pretty to look at, but users can't DO anything. With forms, users can log in, create accounts, search, send messages, buy products, and so much more.`},{type:`list`,items:[`Forms = user input = interactivity`,`Every real app has multiple forms`,`Mastering forms = building real applications`,`This guide covers everything from basics to advanced patterns`]},{type:`title`,content:`PHASE 1: Single Input Basics`},{type:`text`,content:`Before building complex forms, let's master the fundamentals with a single input. This is the foundation everything else builds upon.`},{type:`title`,content:`Lesson 1: The Simplest Form`},{type:`text`,content:`Let's start with the absolute basics. A form with one input field. Nothing fancy. Just the skeleton.`},{type:`code`,content:`function SimpleForm() {
  return (
    <form>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}`},{type:`text`,content:`This is an uncontrolled form. React doesn't know what's inside the input. The browser handles everything. This works, but we lose React's power.`},{type:`title`,content:`Lesson 2: Why Controlled Inputs?`},{type:`text`,content:`In React, we want to be in control. We want to know exactly what the user typed at all times. This is called a 'controlled input'—React controls the value.`},{type:`boldText`,content:`The Analogy: Puppet Master`},{type:`text`,content:`Think of it like being a puppet master. With uncontrolled inputs, the puppet moves on its own. With controlled inputs, YOU control every movement. You know exactly where the puppet is at all times.`},{type:`list`,items:[`Controlled = React is the boss, knows everything`,`Uncontrolled = Browser is the boss, React is blind`,`Controlled inputs give you validation, formatting, and full control`]},{type:`title`,content:`Lesson 3: Adding State to the Input`},{type:`text`,content:`To control an input, we need state. The state holds the current value. The input displays whatever state says.`},{type:`code`,content:`import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  
  return (
    <form>
      <input type="text" value={name} />
      <button type="submit">Submit</button>
    </form>
  );
}`},{type:`text`,content:`We created state called 'name' starting as empty string. We connected it to the input with value={name}. But try typing—nothing happens! The input is locked.`},{type:`title`,content:`Lesson 4: The onChange Handler`},{type:`text`,content:`The input is locked because React controls it, but we never told React to update when user types. We need onChange.`},{type:`code`,content:`<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>`},{type:`text`,content:`Now every keystroke triggers onChange. We grab the typed value with e.target.value and update state. State changes, React re-renders, input shows new value. The cycle is complete!`},{type:`title`,content:`Lesson 5: The Complete Controlled Input Pattern`},{type:`text`,content:`Here's the full pattern you'll use hundreds of times. Memorize this—it's the foundation of all React forms.`},{type:`code`,content:`import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  
  return (
    <form>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}`},{type:`boldText`,content:`The Pattern:`},{type:`list`,items:[`Create state for the input value`,`Set value={state} on the input`,`Set onChange to update state with e.target.value`,`Two-way binding complete!`]},{type:`title`,content:`Lesson 6: Adding a Label`},{type:`text`,content:`Good forms have labels. They tell users what to type. Labels also improve accessibility—screen readers need them.`},{type:`code`,content:`<form>
  <label htmlFor="name">Your Name:</label>
  <input 
    id="name"
    type="text" 
    value={name} 
    onChange={(e) => setName(e.target.value)} 
  />
  <button type="submit">Submit</button>
</form>`},{type:`text`,content:`Notice htmlFor instead of 'for'. In JSX, we use htmlFor because 'for' is a reserved word in JavaScript. The htmlFor must match the input's id.`},{type:`title`,content:`Lesson 7: The placeholder Attribute`},{type:`text`,content:`Placeholders show hint text inside the input. They disappear when user starts typing. Good for examples or hints.`},{type:`code`,content:`<input 
  id="name"
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name..."
/>`},{type:`boldText`,content:`Label vs Placeholder`},{type:`text`,content:`Labels tell users what the field IS. Placeholders show examples or hints. Always use labels—placeholders disappear when typing and aren't great for accessibility.`},{type:`title`,content:`Lesson 8: Form Submission Basics`},{type:`text`,content:`When user clicks submit or presses Enter, the form submits. By default, this refreshes the page—not what we want in React!`},{type:`code`,content:`function SimpleForm() {
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh!
    console.log("Submitted:", name);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name:</label>
      <input 
        id="name"
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}`},{type:`text`,content:`e.preventDefault() is crucial. It stops the browser's default behavior (page refresh). Now we handle submission ourselves with JavaScript.`},{type:`title`,content:`Lesson 9: What is e.preventDefault()?`},{type:`text`,content:`When a form submits, the browser wants to send data to a server and refresh the page. That's the 'default' behavior. In React, we don't want that—we handle everything with JavaScript.`},{type:`boldText`,content:`The Analogy: Stopping a Reflex`},{type:`text`,content:`It's like stopping a sneeze. The browser's reflex is to refresh. We say 'STOP! I'll handle this myself.' That's what preventDefault does.`},{type:`code`,content:`const handleSubmit = (e) => {
  e.preventDefault(); // Stop the reflex!
  // Now do whatever you want with the data
};`},{type:`title`,content:`Lesson 10: Clearing the Form After Submit`},{type:`text`,content:`Good UX means resetting the form after successful submission. User knows their data was sent.`},{type:`code`,content:`const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted:", name);
  setName(""); // Clear the input!
};`},{type:`text`,content:`After doing something with the data (logging, sending to API, etc.), we reset state to empty string. The input clears automatically because it's controlled by state.`},{type:`boldText`,content:`Phase 1 Complete! ✓`},{type:`text`,content:`You now understand single input forms. Controlled inputs, onChange, onSubmit, preventDefault. These are the building blocks. Now let's handle multiple inputs!`},{type:`title`,content:`PHASE 2: Multiple Inputs`},{type:`text`,content:`Real forms have multiple fields. Name, email, password, address... How do we handle all of them without creating dozens of useState calls?`},{type:`title`,content:`Lesson 11: The Naive Approach (Don't Do This)`},{type:`text`,content:`Your first instinct might be: create separate state for each input. This works, but gets messy fast.`},{type:`code`,content:`// DON'T DO THIS - Gets messy!
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  // Imagine 10 more fields... 😱
  
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      {/* ... endless repetition */}
    </form>
  );
}`},{type:`text`,content:`10 inputs = 10 useState calls = 10 onChange handlers. There's a better way!`},{type:`title`,content:`Lesson 12: One State Object for All Inputs`},{type:`text`,content:`Instead of separate states, use ONE state object that holds all form values. This is the professional approach.`},{type:`code`,content:`function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  // All form values in one place!
}`},{type:`text`,content:`Now we have one state object. Adding new fields is easy—just add a new property. But how do we update individual fields?`},{type:`title`,content:`Lesson 13: The name Attribute`},{type:`text`,content:`Every input needs a 'name' attribute. This tells us WHICH field is being updated. The name should match the key in your state object.`},{type:`code`,content:`<input 
  name="email"  // Must match state key!
  value={formData.email} 
  onChange={handleChange} 
/>`},{type:`text`,content:`When this input changes, we can check e.target.name to know it was the 'email' field. This is the magic that lets us use one handler for all inputs.`},{type:`title`,content:`Lesson 14: The Universal handleChange Function`},{type:`text`,content:`Here's the magic—one function that handles ALL inputs. No matter how many fields you have.`},{type:`code`,content:`const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};`},{type:`text`,content:`Let's break this down piece by piece in the next lessons.`},{type:`title`,content:`Lesson 15: Destructuring e.target`},{type:`code`,content:`const { name, value } = e.target;`},{type:`text`,content:`This line extracts 'name' and 'value' from the input that changed. If user types in the email field:`},{type:`list`,items:[`name = "email" (from the name attribute)`,`value = whatever they typed`]},{type:`text`,content:`Destructuring is just a shortcut. Same as writing: const name = e.target.name; const value = e.target.value;`},{type:`title`,content:`Lesson 16: The Spread Operator in Forms`},{type:`code`,content:`setFormData({
  ...formData,  // Keep all existing values
  [name]: value // Update just this one
});`},{type:`text`,content:`...formData spreads all existing values into the new object. Then we override just the field that changed. If we forget the spread, we'd lose all other fields!`},{type:`boldText`,content:`Without spread (WRONG):`},{type:`code`,content:`// WRONG - loses other fields!
setFormData({ [name]: value });

// If formData was { name: "John", email: "john@test.com", password: "123" }
// After typing in email, it becomes { email: "new@test.com" }
// name and password are GONE! 😱`},{type:`title`,content:`Lesson 17: Computed Property Names [name]`},{type:`code`,content:`[name]: value`},{type:`text`,content:`The square brackets let us use a variable as the property name. This is called 'computed property names'.`},{type:`code`,content:`const name = "email";
const value = "john@test.com";

// These are the same:
{ [name]: value }
{ email: "john@test.com" }`},{type:`text`,content:`Without square brackets, it would literally use 'name' as the key, not the VALUE of the name variable.`},{type:`title`,content:`Lesson 18: The Complete Multi-Input Form`},{type:`text`,content:`Putting it all together. One state, one handler, multiple inputs. Clean and scalable!`},{type:`code`,content:`import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input 
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}`},{type:`title`,content:`Lesson 19: Adding More Fields is Easy`},{type:`text`,content:`Want to add a phone number field? Just two steps:`},{type:`code`,content:`// Step 1: Add to initial state
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  phone: ""  // New field!
});

// Step 2: Add the input (uses same handleChange!)
<input 
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone"
/>`},{type:`text`,content:`That's it! The handleChange function already handles any field. This pattern scales to any number of inputs.`},{type:`title`,content:`Lesson 20: Resetting Multi-Input Forms`},{type:`text`,content:`To reset the form, set state back to initial values. Pro tip: store initial state in a variable!`},{type:`code`,content:`const initialState = {
  name: "",
  email: "",
  password: ""
};

function SignupForm() {
  const [formData, setFormData] = useState(initialState);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setFormData(initialState); // Reset to initial!
  };
  
  // ... rest of component
}`},{type:`text`,content:`Storing initialState outside the component means we can reuse it. One line resets everything.`},{type:`boldText`,content:`Phase 2 Complete! ✓`},{type:`text`,content:`You can now handle any number of inputs with one state object and one handler. This is how professionals do it!`},{type:`title`,content:`PHASE 3: Form Validation`},{type:`text`,content:`Users make mistakes. They forget required fields, type invalid emails, use weak passwords. Validation catches these errors BEFORE submission.`},{type:`title`,content:`Lesson 21: Why Validate?`},{type:`text`,content:`Bad data breaks apps. Imagine sending an empty email to your server, or a password that's just one character. Validation protects your app and guides users.`},{type:`list`,items:[`Prevents bad data from reaching your server`,`Gives users immediate feedback`,`Improves user experience`,`Required for any serious application`]},{type:`title`,content:`Lesson 22: Adding Error State`},{type:`text`,content:`We need state to track errors. An object where each key is a field name and value is the error message (or empty if no error).`},{type:`code`,content:`const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

const [errors, setErrors] = useState({
  name: "",
  email: "",
  password: ""
});`},{type:`text`,content:`Empty string = no error. Any other string = error message to display.`},{type:`title`,content:`Lesson 23: The Validate Function`},{type:`text`,content:`Create a function that checks all fields and returns true/false. Also sets error messages.`},{type:`code`,content:`const validate = () => {
  let isValid = true;
  const newErrors = { name: "", email: "", password: "" };
  
  // Check name
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
    isValid = false;
  }
  
  // Check email
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
    isValid = false;
  }
  
  // Check password
  if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }
  
  setErrors(newErrors);
  return isValid;
};`},{type:`title`,content:`Lesson 24: Validating on Submit`},{type:`text`,content:`Call validate() in handleSubmit. Only proceed if validation passes.`},{type:`code`,content:`const handleSubmit = (e) => {
  e.preventDefault();
  
  if (validate()) {
    // Validation passed! Do something with the data
    console.log("Form is valid:", formData);
  } else {
    // Validation failed - errors are already displayed
    console.log("Form has errors");
  }
};`},{type:`text`,content:`If validate() returns false, we stop. The error messages are already set and will display to the user.`},{type:`title`,content:`Lesson 25: Displaying Error Messages`},{type:`text`,content:`Show error messages below each input. Only display if there's an error.`},{type:`code`,content:`<div>
  <input 
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Name"
  />
  {errors.name && <span className="error">{errors.name}</span>}
</div>

<div>
  <input 
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
  />
  {errors.email && <span className="error">{errors.email}</span>}
</div>`},{type:`text`,content:`The && pattern only renders the span if errors.name is truthy (not empty string). Clean and simple.`},{type:`title`,content:`Lesson 26: Email Validation with Regex`},{type:`text`,content:`Checking if email is not empty isn't enough. We should check if it looks like an email.`},{type:`code`,content:`const validateEmail = (email) => {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
};

// In validate function:
if (!formData.email.trim()) {
  newErrors.email = "Email is required";
  isValid = false;
} else if (!validateEmail(formData.email)) {
  newErrors.email = "Please enter a valid email";
  isValid = false;
}`},{type:`text`,content:`The regex checks for: something@something.something. Not perfect, but catches obvious mistakes.`},{type:`title`,content:`Lesson 27: Password Strength Validation`},{type:`text`,content:`Weak passwords are a security risk. Check for minimum length, numbers, special characters—whatever your requirements are.`},{type:`code`,content:`// Simple: just length
if (formData.password.length < 6) {
  newErrors.password = "Password must be at least 6 characters";
  isValid = false;
}

// Advanced: multiple requirements
const validatePassword = (password) => {
  if (password.length < 8) return "At least 8 characters required";
  if (!/[A-Z]/.test(password)) return "Need at least one uppercase letter";
  if (!/[0-9]/.test(password)) return "Need at least one number";
  return ""; // No error
};`},{type:`title`,content:`Lesson 28: Real-Time Validation (On Change)`},{type:`text`,content:`Instead of waiting for submit, validate as user types. Gives immediate feedback.`},{type:`code`,content:`const handleChange = (e) => {
  const { name, value } = e.target;
  
  // Update form data
  setFormData({
    ...formData,
    [name]: value
  });
  
  // Clear error for this field as user types
  if (errors[name]) {
    setErrors({
      ...errors,
      [name]: ""
    });
  }
};`},{type:`text`,content:`This clears the error as soon as user starts fixing it. More friendly than keeping the error until submit.`},{type:`title`,content:`Lesson 29: Validation on Blur`},{type:`text`,content:`Another approach: validate when user leaves a field (onBlur). Less aggressive than validating every keystroke.`},{type:`code`,content:`const handleBlur = (e) => {
  const { name, value } = e.target;
  
  // Validate just this field
  let error = "";
  if (name === "email" && !validateEmail(value)) {
    error = "Please enter a valid email";
  }
  if (name === "password" && value.length < 6) {
    error = "Password must be at least 6 characters";
  }
  
  setErrors({ ...errors, [name]: error });
};

// On the input:
<input 
  name="email"
  onBlur={handleBlur}
  // ... other props
/>`},{type:`title`,content:`Lesson 30: Disabling Submit Until Valid`},{type:`text`,content:`You can disable the submit button until the form is valid. Prevents users from even trying to submit bad data.`},{type:`code`,content:`const isFormValid = () => {
  return (
    formData.name.trim() !== "" &&
    validateEmail(formData.email) &&
    formData.password.length >= 6
  );
};

// In JSX:
<button type="submit" disabled={!isFormValid()}>
  Sign Up
</button>`},{type:`text`,content:`The button stays disabled until all fields pass validation. User can't click it until everything is correct.`},{type:`boldText`,content:`Phase 3 Complete! ✓`},{type:`text`,content:`You can now validate forms! Error state, validation functions, displaying errors, real-time feedback. Your forms are now professional-grade.`},{type:`title`,content:`PHASE 4: Different Input Types`},{type:`text`,content:`Forms aren't just text inputs. You need checkboxes, radio buttons, dropdowns, textareas, and more. Each has its quirks.`},{type:`title`,content:`Lesson 31: Textarea`},{type:`text`,content:`Textareas are for multi-line text. In HTML, textarea has content between tags. In React JSX, we use value like an input.`},{type:`code`,content:`// HTML way (doesn't work in React):
<textarea>Default text here</textarea>

// React way:
<textarea 
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Enter your message..."
  rows={5}
/>`},{type:`text`,content:`Same controlled input pattern! value + onChange. The 'rows' attribute sets the visible height.`},{type:`title`,content:`Lesson 32: Select Dropdown`},{type:`text`,content:`Select dropdowns let users choose from a list. In React, we control them the same way—value + onChange.`},{type:`code`,content:`<select 
  name="country"
  value={formData.country}
  onChange={handleChange}
>
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</select>`},{type:`text`,content:`The value on select matches one of the option values. When user picks an option, onChange fires with the new value.`},{type:`title`,content:`Lesson 33: Rendering Options from Array`},{type:`text`,content:`Usually options come from data, not hardcoded. Use map to render them dynamically.`},{type:`code`,content:`const countries = [
  { code: "us", name: "United States" },
  { code: "uk", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
];

// In JSX:
<select name="country" value={formData.country} onChange={handleChange}>
  <option value="">Select a country</option>
  {countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name}
    </option>
  ))}
</select>`},{type:`text`,content:`Don't forget the key prop! Each option needs a unique key.`},{type:`title`,content:`Lesson 34: Checkbox Basics`},{type:`text`,content:`Checkboxes are different! They use 'checked' instead of 'value', and the value is boolean (true/false).`},{type:`code`,content:`const [formData, setFormData] = useState({
  name: "",
  email: "",
  agreeToTerms: false  // Boolean!
});

<label>
  <input 
    type="checkbox"
    name="agreeToTerms"
    checked={formData.agreeToTerms}  // Not value!
    onChange={handleCheckbox}
  />
  I agree to the terms
</label>`},{type:`text`,content:`Notice: checked={formData.agreeToTerms} not value. Checkboxes are either checked (true) or unchecked (false).`},{type:`title`,content:`Lesson 35: Checkbox onChange Handler`},{type:`text`,content:`Checkboxes need a special handler. We read e.target.checked, not e.target.value.`},{type:`code`,content:`const handleCheckbox = (e) => {
  const { name, checked } = e.target;  // 'checked' not 'value'!
  setFormData({
    ...formData,
    [name]: checked
  });
};`},{type:`text`,content:`e.target.checked is true if box is checked, false if unchecked. That boolean goes into state.`},{type:`title`,content:`Lesson 36: Universal Handler for All Types`},{type:`text`,content:`We can make one handler that works for text inputs AND checkboxes. Check the input type and handle accordingly.`},{type:`code`,content:`const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value
  });
};`},{type:`text`,content:`If it's a checkbox, use 'checked'. Otherwise, use 'value'. One handler rules them all!`},{type:`title`,content:`Lesson 37: Radio Buttons`},{type:`text`,content:`Radio buttons let users pick ONE option from a group. All radios in a group share the same 'name'.`},{type:`code`,content:`const [formData, setFormData] = useState({
  gender: ""  // Will hold "male", "female", or "other"
});

<div>
  <label>
    <input 
      type="radio"
      name="gender"
      value="male"
      checked={formData.gender === "male"}
      onChange={handleChange}
    />
    Male
  </label>
  
  <label>
    <input 
      type="radio"
      name="gender"
      value="female"
      checked={formData.gender === "female"}
      onChange={handleChange}
    />
    Female
  </label>
  
  <label>
    <input 
      type="radio"
      name="gender"
      value="other"
      checked={formData.gender === "other"}
      onChange={handleChange}
    />
    Other
  </label>
</div>`},{type:`text`,content:`Each radio has a different value but the same name. The checked attribute compares state to that radio's value.`},{type:`title`,content:`Lesson 38: Radio Button Handler`},{type:`text`,content:`Good news: radio buttons use the same handler as text inputs! They have a value that goes into state.`},{type:`code`,content:`// Same handleChange works!
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value
  });
};

// When user clicks "female" radio:
// name = "gender"
// value = "female"
// formData becomes { gender: "female" }`},{type:`title`,content:`Lesson 39: Number Input`},{type:`text`,content:`Number inputs restrict to numeric values. But be careful—e.target.value is still a STRING!`},{type:`code`,content:`<input 
  type="number"
  name="age"
  value={formData.age}
  onChange={handleChange}
  min="0"
  max="120"
/>

// If you need actual number in state:
const handleChange = (e) => {
  const { name, value, type } = e.target;
  
  setFormData({
    ...formData,
    [name]: type === "number" ? Number(value) : value
  });
};`},{type:`text`,content:`Use Number(value) or parseInt(value) if you need the actual number type, not a string.`},{type:`title`,content:`Lesson 40: Date Input`},{type:`text`,content:`Date inputs let users pick dates with a calendar picker. Value format is YYYY-MM-DD.`},{type:`code`,content:`const [formData, setFormData] = useState({
  birthdate: ""  // Will be like "2000-01-15"
});

<input 
  type="date"
  name="birthdate"
  value={formData.birthdate}
  onChange={handleChange}
/>`},{type:`text`,content:`Works like a text input. The browser provides the date picker UI. Value is a string in YYYY-MM-DD format.`},{type:`title`,content:`Lesson 41: File Input`},{type:`text`,content:`File inputs are ALWAYS uncontrolled. You can't set their value with React. Instead, read files with e.target.files.`},{type:`code`,content:`const [file, setFile] = useState(null);

const handleFileChange = (e) => {
  setFile(e.target.files[0]);  // Get first selected file
};

<input 
  type="file"
  onChange={handleFileChange}
  accept="image/*"  // Optional: limit file types
/>`},{type:`text`,content:`No value attribute! Files are accessed through e.target.files which is a FileList. files[0] gets the first file.`},{type:`title`,content:`Lesson 42: Complete Multi-Type Form`},{type:`text`,content:`Let's put it all together—a form with every input type we've learned.`},{type:`code`,content:`import { useState } from "react";

function CompleteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    birthdate: "",
    country: "",
    gender: "",
    bio: "",
    agreeToTerms: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Text inputs */}
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      
      {/* Number and date */}
      <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
      
      {/* Select */}
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </select>
      
      {/* Radio buttons */}
      <label><input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} /> Male</label>
      <label><input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} /> Female</label>
      
      {/* Textarea */}
      <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us about yourself" />
      
      {/* Checkbox */}
      <label><input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} /> I agree to terms</label>
      
      <button type="submit">Submit</button>
    </form>
  );
}`},{type:`boldText`,content:`Phase 4 Complete! ✓`},{type:`text`,content:`You can now handle ANY input type! Text, number, date, select, checkbox, radio, textarea, file. You're a forms master!`},{type:`title`,content:`PHASE 5: Real-World Form Patterns`},{type:`text`,content:`Let's build real forms you'll actually use: login, signup, search, and contact forms.`},{type:`title`,content:`Lesson 43: Login Form`},{type:`text`,content:`The classic login form. Email/username + password. Simple but essential.`},{type:`code`,content:`import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on change
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Login successful:", formData);
      // Redirect or update auth state
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      {error && <div className="error">{error}</div>}
      
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}`},{type:`title`,content:`Lesson 44: Signup Form with Validation`},{type:`text`,content:`Signup forms need more validation—password confirmation, email format, required fields.`},{type:`code`,content:`function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Signup successful:", formData);
    }
  };
  
  // ... handleChange and JSX
}`},{type:`title`,content:`Lesson 45: Search Form`},{type:`text`,content:`Search forms are simpler—usually just one input. Often trigger search on every keystroke or with debouncing.`},{type:`code`,content:`import { useState, useEffect } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  
  // Debounce: wait for user to stop typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        onSearch(query);
      }
    }, 300); // Wait 300ms after last keystroke
    
    return () => clearTimeout(timer); // Cleanup
  }, [query, onSearch]);
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
}`},{type:`text`,content:`Debouncing waits for the user to stop typing before searching. Prevents flooding your API with requests.`},{type:`title`,content:`Lesson 46: Contact Form`},{type:`text`,content:`Contact forms usually have name, email, subject, and message. Perfect example of a multi-field form.`},{type:`code`,content:`function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to API or email service
    console.log("Message sent:", formData);
    setSubmitted(true);
  };
  
  if (submitted) {
    return <div className="success">Thanks! We'll be in touch soon.</div>;
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
      <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required />
      <button type="submit">Send Message</button>
    </form>
  );
}`},{type:`title`,content:`Lesson 47: Multi-Step Form (Wizard)`},{type:`text`,content:`Long forms are overwhelming. Break them into steps. Show one section at a time.`},{type:`code`,content:`function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    email: "",
    // Step 2
    address: "",
    city: "",
    // Step 3
    cardNumber: "",
    expiry: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order complete:", formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="progress">Step {step} of 3</div>
      
      {step === 1 && (
        <div>
          <h3>Personal Info</h3>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <h3>Shipping</h3>
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}
      
      {step === 3 && (
        <div>
          <h3>Payment</h3>
          <input name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" />
          <input name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" />
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Complete Order</button>
        </div>
      )}
    </form>
  );
}`},{type:`title`,content:`Lesson 48: Form with Loading State`},{type:`text`,content:`When submitting to an API, show loading state. Disable the button to prevent double submissions.`},{type:`code`,content:`const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    await submitToAPI(formData);
    // Handle success
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false);
  }
};

// Button with loading state:
<button type="submit" disabled={isLoading}>
  {isLoading ? (
    <>
      <span className="spinner"></span>
      Submitting...
    </>
  ) : (
    "Submit"
  )}
</button>`},{type:`boldText`,content:`Phase 5 Complete! ✓`},{type:`text`,content:`You've built real-world forms! Login, signup, search, contact, multi-step, with loading states. These patterns cover 90% of forms you'll ever build.`},{type:`title`,content:`PHASE 6: Form Libraries Introduction`},{type:`text`,content:`For complex forms, libraries can help. They handle validation, errors, touched states, and more. Here's a quick intro to the most popular ones.`},{type:`title`,content:`Lesson 49: When to Use a Form Library`},{type:`text`,content:`You don't always need a library. Plain React is fine for simple forms. Consider a library when:`},{type:`list`,items:[`Form has 10+ fields`,`Complex validation rules`,`Dynamic fields (add/remove)`,`Field arrays (list of items)`,`Performance is critical`,`You want less boilerplate`]},{type:`text`,content:`Start without a library. Add one when you feel the pain of managing complex forms manually.`},{type:`title`,content:`Lesson 50: React Hook Form Overview`},{type:`text`,content:`React Hook Form is fast, lightweight, and uses uncontrolled inputs for better performance.`},{type:`code`,content:`import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input {...register("email", { 
        required: "Email is required",
        pattern: {
          value: /\\S+@\\S+\\.\\S+/,
          message: "Invalid email"
        }
      })} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`},{type:`text`,content:`register() connects inputs to the form. Validation rules go in the second argument. Errors are automatically tracked.`},{type:`title`,content:`Lesson 51: Formik Overview`},{type:`text`,content:`Formik is the OG form library. More verbose but very powerful and well-documented.`},{type:`code`,content:`import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

function MyForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="span" />
        
        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="span" />
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}`},{type:`text`,content:`Formik uses Yup for schema validation. More setup, but very clean once configured.`},{type:`title`,content:`Lesson 52: Choosing Between Libraries`},{type:`text`,content:`Both are excellent. Here's a quick comparison to help you choose:`},{type:`list`,items:[`React Hook Form: Smaller bundle, better performance, less re-renders. Best for performance-critical apps.`,`Formik: More mature, larger ecosystem, more documentation. Best for complex enterprise forms.`,`Plain React: No dependencies, full control. Best for simple forms or learning.`]},{type:`boldText`,content:`My recommendation: Start with plain React. When forms get complex, try React Hook Form first.`},{type:`title`,content:`Quick Reference Card`},{type:`text`,content:`Your go-to cheatsheet for React forms!`},{type:`boldText`,content:`Controlled Input Pattern`},{type:`code`,content:`<input 
  value={state} 
  onChange={(e) => setState(e.target.value)} 
/>`},{type:`boldText`,content:`Multi-Input State Object`},{type:`code`,content:`const [formData, setFormData] = useState({
  field1: "",
  field2: ""
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value
  });
};`},{type:`boldText`,content:`Form Submission`},{type:`code`,content:`const handleSubmit = (e) => {
  e.preventDefault();
  // Do something with formData
};

<form onSubmit={handleSubmit}>`},{type:`boldText`,content:`Input Types Quick Reference`},{type:`code`,content:`// Text/Email/Password - use value
<input type="text" value={} onChange={} />

// Checkbox - use checked
<input type="checkbox" checked={} onChange={} />

// Radio - use checked with comparison
<input type="radio" checked={state === "value"} onChange={} />

// Select - use value
<select value={} onChange={}>

// Textarea - use value
<textarea value={} onChange={} />

// File - uncontrolled, use e.target.files
<input type="file" onChange={(e) => setFile(e.target.files[0])} />`},{type:`title`,content:`Congratulations!`},{type:`text`,content:`You've mastered React forms! From single inputs to complex multi-step wizards, you can now build any form with confidence. This is a crucial skill—forms are everywhere in real applications. You're ready to build real-world React apps!`},{type:`practiceTask`,content:`Task: Build a complete registration form with name, email, password, confirm password, date of birth (date input), country (select dropdown), gender (radio buttons), bio (textarea), and 'I agree to terms' (checkbox). Add validation for all fields.`,hint:`Hint: Use one state object for all fields. Create a universal handleChange that handles all input types. Validate on submit and display error messages below each field.`,solution:`import { useState } from "react";

const countries = [
  { code: "us", name: "United States" },
  { code: "uk", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
];

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    country: "",
    gender: "",
    bio: "",
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    if (!formData.birthdate) {
      newErrors.birthdate = "Date of birth is required";
    }
    
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
    
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Registration successful:", formData);
      alert("Registration successful!");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      
      <div>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <label>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <div>
        <label>Confirm Password</label>
        <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      
      <div>
        <label>Date of Birth</label>
        <input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
        {errors.birthdate && <span className="error">{errors.birthdate}</span>}
      </div>
      
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select a country</option>
          {countries.map(c => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      
      <div>
        <label>Gender</label>
        <label><input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} /> Female</label>
        <label><input type="radio" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange} /> Other</label>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      
      <div>
        <label>Bio (optional)</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} rows={4} />
      </div>
      
      <div>
        <label>
          <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
          I agree to the terms and conditions
        </label>
        {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;`}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),h=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),g=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,_=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||g(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(h,{}):(0,f.jsx)(m,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},v=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let n=(e,t)=>{let n=a[e]||t[0]?.id;return t.find(e=>e.id===n)?.code||t[0]?.code||``},[a,o]=(0,l.useState)(t),[c,d]=(0,l.useState)(null),[p,m]=(0,l.useState)({}),[h,g]=(0,l.useState)(!1),[v,y]=(0,l.useState)(()=>{if(typeof window>`u`)return{};try{let e=localStorage.getItem(`reactFormsCheckedTitles`);return e?JSON.parse(e):{}}catch(e){return console.error(`Error reading localStorage:`,e),{}}}),b=(0,l.useRef)({}),x=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;g(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let S=()=>{x.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`reactFormsCheckedTitles`,JSON.stringify(v))},[v]);let C=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),w=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{d(t),setTimeout(()=>d(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),d(t),setTimeout(()=>d(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},T=(e,t,n)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let r=n.findIndex(e=>e.id===a[t]),i;i=e.key===`ArrowLeft`?r>0?r-1:n.length-1:r<n.length-1?r+1:0,o({...a,[t]:n[i].id});let s=b.current[`${t}-${n[i].id}`];s&&s.focus()}},E=e=>{m(t=>({...t,[e]:!t[e]}))},D=e=>{y(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`Master Every Input Type`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),C.length>0&&(0,f.jsxs)(`section`,{ref:x,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:C.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:v[t]||!1,onChange:()=>D(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(_,{code:e.content,index:t,handleCopy:w,copiedIndex:c}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(n=>{let r=`example-${t}`,i=`${r}-${n.id}`,s=`${i}-panel`;return(0,f.jsx)(`button`,{id:i,role:`tab`,"aria-selected":a[r]===n.id,"aria-controls":s,className:a[r]===n.id?`active`:``,onClick:()=>o({...a,[r]:n.id}),onKeyDown:n=>T(n,r,e.tabs,t),tabIndex:a[r]===n.id?0:-1,ref:e=>b.current[i]=e,children:n.label},n.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${a[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${a[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(_,{code:n(`example-${t}`,e.tabs),index:t,handleCopy:w,copiedIndex:c})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),(0,f.jsxs)(`p`,{className:`article-paragraph`,children:[` `,s(e.hint)]}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>E(t),children:p[t]?`Hide Solution`:`Show Solution`}),p[t]&&(0,f.jsx)(_,{code:e.solution,index:`solution-${t}`,handleCopy:w,copiedIndex:c})]})]},`para-${t}-${e.type}`))}),h&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:S,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};_.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string]),language:d.default.string};export{v as default};
//# sourceMappingURL=ReactForms-DwZaVbHO.js.map