import task1 from "../images/reacttask1.webp";
import task2 from "../images/reacttasks2.webp";
import task3 from "../images/reacttasks3.webp";
import task4 from "../images/reacttasks4.webp";
import task5 from "../images/reacttasks5.webp";
import task6 from "../images/reacttasks6.webp";
import task7 from "../images/reacttasks7.webp";
import task8 from "../images/reacttasks8.webp";
import task9 from "../images/reacttasks9.webp";
import task10 from "../images/reacttasks10.webp";
import task11 from "../images/reacttasks11.webp";
import task12 from "../images/reacttasks12.webp";
import task13 from "../images/reacttasks13.webp";
import task14 from "../images/reacttasks14.webp";
import task15 from "../images/reacttasks15.webp";
import task16 from "../images/reacttasks16.webp";
import task17 from "../images/reacttasks17.webp";
import task18 from "../images/reacttasks18.webp";
import task19 from "../images/reacttasks19.webp";
import task20 from "../images/reacttasks20.webp";

export const ReactTasks = [
  {
    taskId: "fix-the-bug-filter-buttons",
    taskTitle: "Fix the Bug — Filter Buttons",
    introduction:
      "Your Todo App has a bug. The filter buttons don't highlight correctly when active. Only the All button works — Active and Completed never show as selected. In this task, you'll read existing code, spot what's missing, and fix it with one line per button.",
    steps: [
      {
        stepTitle: "Step 1: Open the Todo App",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Click the All filter button — notice it highlights",
              "Click the Active filter button — notice it does not highlight",
              "Click the Completed filter button — notice it does not highlight",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the filter buttons in the JSX",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Scroll to the filter buttons section in the JSX",
              "Find the All button — notice it has a className that checks if filter === 'all'",
              "Find the Active button — notice the className logic is missing",
              "Find the Completed button — notice the className logic is missing",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Fix the Active button",
        sections: [
          {
            descriptions: [
              "Add a className to the Active button",
              "Check if filter === 'active' using a ternary operator",
              "Apply the 'active-filter' class if the condition is true",
              "Apply an empty string if the condition is false",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Fix the Completed button",
        sections: [
          {
            descriptions: [
              "Add a className to the Completed button",
              "Check if filter === 'completed' using a ternary operator",
              "Apply the 'active-filter' class if the condition is true",
              "Apply an empty string if the condition is false",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the fix",
        sections: [
          {
            descriptions: [
              "Click the All button — confirm it highlights",
              "Click the Active button — confirm it now highlights",
              "Click the Completed button — confirm it now highlights",
              "Add a couple of todos and toggle between filters to confirm all three work correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["ReactTasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/vnxql2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task1,
  },
  {
    taskId: "empty-todo-guard",
    taskTitle: "Empty Todo Guard",
    introduction:
      "Your Todo App accepts empty input with zero resistance. Click Add without typing anything and a blank todo appears in the list. In this task, you'll add a single guard clause to the top of the addTodo function that stops empty todos from ever being created.",
    steps: [
      {
        stepTitle: "Step 1: Reproduce the bug",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Without typing anything, click the Add button several times",
              "Notice empty todos appear in the list with no warning",
              "Type a real todo and add it — it sits among the empty ones",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the addTodo function in App.js",
        sections: [
          {
            descriptions: [
              "Scroll to the addTodo function",
              "Notice the function runs immediately with no checks on the input value",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add the guard clause",
        sections: [
          {
            descriptions: [
              "On the very first line inside addTodo, add a check for empty input",
              "Use .trim() to strip any whitespace from the input value",
              "If the trimmed value is falsy, return early and stop the function",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Test the fix",
        sections: [
          {
            descriptions: [
              "Click Add without typing anything — confirm nothing is added",
              "Type only spaces and click Add — confirm nothing is added",
              "Type a real todo and click Add — confirm it appears correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/n9z9wr?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task2,
  },
  {
    taskId: "better-counter-text",
    taskTitle: "Better Counter Text",
    introduction:
      "Your Todo App shows a counter that reads '2/5'. No label, no context — your users have no idea what it means. In this task, you'll update a single paragraph tag to display something clear and readable like '2 of 5 completed'. Everything you need is already in the code.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add 5 todos and complete 2 of them",
              "Look at the counter — it shows '2/5' with no label or context",
              "Notice there is nothing to tell the user what the numbers represent",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the paragraph tag in App.js",
        sections: [
          {
            descriptions: [
              "Navigate to App.js file",
              "Scroll to the bottom of the return statement",
              "Find the <p> tag that currently renders {completed}/{total}",
              "Find the completed and total variables defined above the return",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update the paragraph tag",
        sections: [
          {
            descriptions: [
              "Replace the current content of the <p> tag",
              "Use the completed variable followed by the word 'of'",
              "Use the total variable followed by the word 'completed'",
              "The result should read naturally as '2 of 5 completed'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Test the output",
        sections: [
          {
            descriptions: [
              "Add several todos and complete a few",
              "Confirm the counter now reads as a proper sentence",
              "Toggle todos on and off — confirm the numbers update correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/qvgs8n?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task3,
  },
  {
    taskId: "dynamic-title-count",
    taskTitle: "Add a Title with the Count",
    introduction:
      "Your Todo App title just says 'ToDo App' — completely static, completely unaware of what's happening in the app. In this task, you'll make the h2 tag display how many todos are left, updating live as you complete things. No new state, no new variables — everything is already calculated above the return.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add several todos and complete a few",
              "Look at the h2 title — it still just says 'ToDo App'",
              "Complete another todo — the title does not change",
              "Add a new todo — the title still does not change",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the h2 tag and existing variables in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js",
              "Find the total and completed variables above the return statement",
              "Scroll to the h2 tag inside the return — it currently renders a static string",
              "Notice total and completed are already calculated and ready to use",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Calculate active todos",
        sections: [
          {
            descriptions: [
              "Active todos are todos that have not been completed",
              "You do not need a new variable — derive it inline inside the h2",
              "Active = total minus completed",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update the h2 tag",
        sections: [
          {
            descriptions: [
              "Replace the static string inside the h2 with a JSX expression",
              "Keep 'ToDo App' as the base text",
              "Append the active count in brackets — for example: 'ToDo App (3 left)'",
              "Use total minus completed inside the JSX expression",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the output",
        sections: [
          {
            descriptions: [
              "Add several todos — confirm the count updates in the title",
              "Complete a todo — confirm the number drops by one",
              "Delete a todo — confirm the number updates correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/f3y6ly?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task4,
  },
  {
    taskId: "add-with-enter-key",
    taskTitle: "Add with Enter Key",
    introduction:
      "Every time you press Enter in the input, nothing happens. You have to reach for the mouse on every single todo. That friction kills the experience. In this task, you'll add one attribute to the input element that connects the Enter key directly to the addTodo function — no new functions, no new state.",
    steps: [
      {
        stepTitle: "Step 1: Feel the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Type a todo into the input and press Enter — nothing happens",
              "Move the mouse to the Add button and click — the todo appears",
              "Repeat this a few times and notice how much friction the mouse movement adds",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the input element in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the input element in the JSX",
              "Notice it already has an onChange handler connected to the todo state",
              "Notice there is no keyboard event handler attached",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Locate the addTodo function",
        sections: [
          {
            descriptions: [
              "Scroll above the return statement to find the addTodo function",
              "Notice it is already fully written and working",
              "The only thing missing is a way to call it from the keyboard",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the onKeyDown handler",
        sections: [
          {
            descriptions: [
              "Add an onKeyDown attribute to the input element",
              "Inside the handler, check if e.key is equal to 'Enter'",
              "If the condition is true, call addTodo",
              "The existing onChange handler stays exactly as it is",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the fix",
        sections: [
          {
            descriptions: [
              "Type a todo and press Enter — confirm the todo is added",
              "Press Enter on an empty input — confirm nothing is added",
              "Confirm the Add button still works as before",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/zfk9n6?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task5,
  },
  {
    taskId: "filter-button-count-badges",
    taskTitle: "Todo Count Badge on Filter Buttons",
    introduction:
      "Your filter buttons just say All, Active, and Completed — no numbers, zero information. Users click around guessing how many todos are in each category. In this task, you'll add live counts directly into the button labels using variables you already have. No new state, no new functions.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add several todos and complete a few",
              "Look at the filter buttons — they show no numbers at all",
              "Click Active to see the count — the information only exists after clicking",
              "Add a new todo — the button labels do not update",
              "Complete a todo — the button labels still do not update",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 2: Locate the filter buttons and existing variables in App.js",
        sections: [
          {
            descriptions: [
              "In the App.js file",
              "Find the total and completed variables above the return statement",
              "Scroll to the three filter buttons in the JSX",
              "Notice the button labels are currently static strings with no expressions",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Calculate the active count",
        sections: [
          {
            descriptions: [
              "Active todos are todos that have not been completed",
              "You do not need a new variable — derive it inline inside the button label",
              "Active = total minus completed",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update the All button",
        sections: [
          {
            descriptions: [
              "Find the All filter button in the JSX",
              "Add a JSX expression inside the button label showing total",
              "The label should read: All (5)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Update the Active and Completed buttons",
        sections: [
          {
            descriptions: [
              "Find the Active filter button and add total minus completed inside the label",
              "Find the Completed filter button and add completed inside the label",
              "All three buttons should now show live counts in their labels",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test the output",
        sections: [
          {
            descriptions: [
              "Add a new todo — confirm the All and Active counts increase",
              "Complete a todo — confirm Active drops and Completed increases",
              "Delete a todo — confirm all counts update correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/2sdhrn?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task6,
  },
  {
    taskId: "empty-filter-message",
    taskTitle: "Show a Message When the List is Empty",
    introduction:
      "When you filter to Active with nothing active, the list goes completely blank. Same for Completed. Users stare at an empty box with zero feedback — they don't know if the app is broken or the list is just empty. In this task, you'll add conditional rendering to show a different message for each empty filter state.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add 3 todos and complete all of them",
              "Click the Active filter — the list is completely blank with no message",
              "Click the Completed filter — also blank when nothing is done",
              "Click the All filter with no todos — also blank",
              "Notice all three empty states look identical and broken",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the filteredTodos map in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find where filteredTodos gets mapped in the JSX",
              "Notice the map renders TodoItem components with no fallback for empty lists",
              "Find the filter state variable — you will use this to pick the right message",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Create the empty messages object",
        sections: [
          {
            descriptions: [
              "Define an object that maps each filter value to its empty state message",
              "All filter message: 'No todos yet. Add one above!'",
              "Active filter message: 'Nothing left to do. Nice work!'",
              "Completed filter message: 'No completed todos yet.'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add conditional rendering",
        sections: [
          {
            descriptions: [
              "Before rendering the map, check if filteredTodos.length is equal to zero",
              "If the length is zero, render a paragraph tag with the matching message",
              "Use the filter state as the key to look up the correct message from your object",
              "If the length is not zero, render the map as normal",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test all three empty states",
        sections: [
          {
            descriptions: [
              "Delete all todos and check the All filter — confirm the message appears",
              "Add todos, complete all of them, click Active — confirm the message appears",
              "Add todos without completing any, click Completed — confirm the message appears",
              "Add a todo in each state — confirm the message disappears and the list renders correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/t27nyr?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task7,
  },
  {
    taskId: "mark-all-complete",
    taskTitle: "Mark All as Complete",
    introduction:
      "10 todos means 10 individual clicks to mark them all done. There is no shortcut anywhere in the app. In this task, you'll add a Mark All Complete button that completes every todo in one click. Click it again and everything gets unchecked. You'll need a new function, a new button, and logic that checks if everything is already done.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Open the Todo App in the browser on projectschool.dev",
              "Add 6 or more todos",
              "Click each one individually to complete them — notice how tedious it is",
              "Uncheck them all and look for a shortcut — there isn't one",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Study the toggleTodo function in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js in the CodeSandbox editor",
              "Find the toggleTodo function above the return statement",
              "Notice it uses map to loop through all todos and flips the completed value on one",
              "Your new function will follow the same map pattern but target all todos at once",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Write the toggleAll function",
        sections: [
          {
            descriptions: [
              "Create a new function called toggleAll below the existing toggleTodo function",
              "Check if all todos are already completed by comparing completed to total",
              "Also check that total is greater than zero to handle an empty list",
              "Use map to loop through all todos and set every completed value to the same boolean",
              "If all are done, set completed to false — if not all done, set completed to true",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the button in JSX",
        sections: [
          {
            descriptions: [
              "Add a new button in the JSX and connect it to the toggleAll function",
              "The button label should change based on the current state",
              "If all todos are completed and total is greater than zero, show 'Unmark all'",
              "Otherwise show 'Mark all complete'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the feature",
        sections: [
          {
            descriptions: [
              "Add several todos and click Mark all complete — confirm all todos are checked",
              "Confirm the button label switches to 'Unmark all'",
              "Click Unmark all — confirm every todo is unchecked",
              "Complete some but not all todos — confirm the button still shows 'Mark all complete'",
              "Test with an empty list — confirm the button behaves correctly",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/t4ks4z?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task8,
  },
  {
    taskId: "add-priority-levels",
    taskTitle: "Add Priority Levels",
    introduction:
      "Your app treats every todo exactly the same — buy milk and submit tax return sit in the list with identical styling and zero urgency. In this task, you'll add Low, Medium, and High priority to every todo. This one touches three places: new state in App.js, the todo object shape in addTodo, and the display in TodoItem.jsx.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add 'buy milk' and 'submit tax return' to the list",
              "Notice both todos look completely identical — same styling, same weight, zero difference",
              "Notice there is no way to indicate which todo is more urgent than another",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add priority state in App.js",
        sections: [
          {
            descriptions: [
              "Navigate to App.js file",
              "Add a new piece of state called priority with a default value of 'medium'",
              "This state will track the selected priority before a todo is added",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update the addTodo function",
        sections: [
          {
            descriptions: [
              "Find the addTodo function in App.js",
              "Add the priority value to the todo object when it is created",
              "After adding the todo, reset the priority state back to 'medium'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the priority dropdown in JSX",
        sections: [
          {
            descriptions: [
              "Add a select element next to the input in the JSX",
              "Set the value of the select to the priority state",
              "Add an onChange handler that updates the priority state when the user selects an option",
              "Add three option elements — Low, Medium, and High",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Display the priority label in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Next, go to TodoItem.jsx file",
              "Create a colour map object — green for low, orange for medium, red for high",
              "Add a span element next to the todo text that shows the priority label",
              "Use the colour map and todo.priority to apply the correct colour to the span",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test the feature",
        sections: [
          {
            descriptions: [
              "Add a todo with Low priority — confirm a green label appears",
              "Add a todo with High priority — confirm a red label appears",
              "Add a todo without selecting a priority — confirm it defaults to Medium with an orange label",
              "Confirm the dropdown resets to Medium after each todo is added",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/39vlmz?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task9,
  },
  {
    taskId: "add-due-date",
    taskTitle: "Add a Due Date",
    introduction:
      "Your app has no concept of time. A todo due yesterday sits in the list looking identical to one due next month. In this task, you'll add a date picker to the input, store the due date on each todo, and highlight overdue todos in red inside TodoItem. This one touches three places — new state in App.js, the todo object shape in addTodo, and date comparison logic in TodoItem.jsx.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add a todo called 'pay rent' — no date input exists anywhere",
              "Notice it sits in the list with zero urgency, identical to every other todo",
              "Notice there is no way to tell the app when something is due",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add dueDate state in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js file",
              "Add a new piece of state called dueDate with a default value of an empty string",
              "This state will track the selected date before a todo is added",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add the date input in JSX",
        sections: [
          {
            descriptions: [
              "Add an input of type date next to the existing text input in the JSX",
              "Set the value of the date input to the dueDate state",
              "Add an onChange handler that updates the dueDate state when a date is selected",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update the addTodo function",
        sections: [
          {
            descriptions: [
              "Find the addTodo function in App.js",
              "Add the dueDate value to the todo object when it is created",
              "After adding the todo, reset the dueDate state back to an empty string",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add overdue logic in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Open TodoItem.jsx file in the editor",
              "Create a variable called isOverdue",
              "Check if todo.dueDate exists — if there is no date the todo cannot be overdue",
              "Compare new Date(todo.dueDate) to new Date() — if the due date is less than today it has passed",
              "Also check that todo.completed is false — completed todos should never show as overdue",
              "isOverdue is only true when all three conditions are met",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Apply red styling to overdue todos",
        sections: [
          {
            descriptions: [
              "Find the li element in TodoItem.jsx",
              "Add a borderLeft style that applies a red left border when isOverdue is true",
              "Display the due date as a small span next to the todo text",
              "If isOverdue is true, add a warning icon before the date",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test the feature",
        sections: [
          {
            descriptions: [
              "Add a todo with yesterday's date — confirm it highlights red immediately",
              "Add a todo with a future date — confirm it shows no red styling",
              "Complete an overdue todo — confirm the red styling disappears",
              "Add a todo with no date — confirm it behaves like a normal todo",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/cjty97?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task10,
  },
  {
    taskId: "reacttasks-search-bar",
    taskTitle: "Add a Search Bar",
    introduction:
      "Your Todo App has 30 todos and zero way to search them. You scroll. You scan. You scroll again. In this task, you'll add a live search bar that filters the visible list as you type — no new components, just one new piece of state and a chained filter on the existing filteredTodos logic.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add 10 or more todos with different text",
              "Try to find a specific todo — you have to scan the entire list manually",
              "Add more todos to make it even harder",
              "Notice there is no input anywhere on the page that lets you search by text",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add the search state",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the block of useState declarations near the top of the component",
              "Add a new piece of state called search with a default value of an empty string",
              "Place it alongside the other state declarations — order does not matter but keep it grouped",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update the filteredTodos logic",
        sections: [
          {
            descriptions: [
              "Scroll down in App.js to find the filteredToos variable",
              "Notice it currently filters by all, active, or completed — but ignores the search text",
              "Wrap the existing ternary in parentheses if it is not already",
              "Chain a second .filter() call directly after the closing parenthesis of the ternary",
              "Inside the new .filter(), check if t.text.toLowerCase() includes search.toLowerCase()",
              "This means a todo only appears if its text contains the current search value (case-insensitive)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the search input in JSX",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement in App.js",
              "Find the existing todo text input — the one with placeholder 'Add todo'",
              "Add a new input element above it",
              "Give it a className of 'input' to match the existing styling",
              "Set the placeholder to 'Search todos...'",
              "Set its value to the search state variable",
              "Add an onChange handler that calls setSearch with e.target.value",
              "This input does not need an onKeyDown handler — it filters live as you type",
              "Find the .map() call inside the ul where each TodoItem is rendered",
              "Notice the index prop is currently set to i — the loop index from the filtered array",
              "This will cause a bug: if search filters out earlier todos, i resets to 0 and toggle or delete will target the wrong item in the original list",
              "Change index={i} to index={todos.indexOf(t)}",
              "This passes the real position of each todo inside the original todos array, so actions always target the correct item no matter what the search is showing",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the feature",
        sections: [
          {
            descriptions: [
              "Add 8 or more todos with varied text",
              "Type a word into the search input — confirm the list filters instantly",
              "Clear the search input — confirm all todos reappear",
              "Switch to the Active or Completed filter while a search term is active — confirm both filters apply together",
              "Type a word that matches nothing — confirm the empty state message appears",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/f33mym?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task11,
  },

  // ─────────────────────────────────────────────
  // FT-2: Timestamps
  // ─────────────────────────────────────────────
  {
    taskId: "timestamps",
    taskTitle: "Add Timestamps to Todos",
    introduction:
      "When did you add that todo? Your app has no idea. A todo that has been sitting there for five days looks identical to one added five seconds ago. In this task, you'll store a createdAt timestamp on every new todo and display it as a small label inside TodoItem — two files, a handful of lines.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add three todos at different times",
              "Look at each one in the list — there is no date or time anywhere",
              "Notice every todo looks identical regardless of when it was created",
              "There is no way to know if a todo is five minutes old or five days old",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add createdAt to the addTodo function",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the addTodo function above the return statement",
              "Locate the object literal where the new todo is constructed — it currently has text, completed, priority, and dueDate",
              "Add a new property called createdAt to that object",
              "Set its value to new Date().toLocaleDateString with the locale 'en-GB'",
              "Pass an options object as the second argument with: day set to 'numeric', month set to 'short', hour set to '2-digit', minute set to '2-digit'",
              "This produces a readable string like '28 Mar, 14:05' at the moment the todo is added",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Display the timestamp in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Open TodoItem.jsx in the editor",
              "Find the span that renders todo.text — the one wrapped in the double-click handler",
              "Below that span (but still inside the li), add a conditional expression",
              "Check if todo.createdAt exists — if it does not exist, render nothing",
              "If it does exist, render a span element with the createdAt value as its text content",
              "Give the span a fontSize style of '0.7rem' and a color style of 'gray'",
              "Add a marginLeft style of '8px' to push it away from the todo text",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Test the feature",
        sections: [
          {
            descriptions: [
              "Add a new todo — confirm the timestamp appears next to the text",
              "Add another todo a few seconds later — confirm it has a fresh timestamp",
              "Reload the page — confirm timestamps survive the localStorage reload",
              "Check existing todos added before this change — confirm they render without crashing even though they have no createdAt value",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/4vtnlq?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task12,
  },

  // ─────────────────────────────────────────────
  // FT-3: Confirmation Before Delete
  // ─────────────────────────────────────────────
  {
    taskId: "confirm-before-delete",
    taskTitle: "Confirmation Before Delete",
    introduction:
      "One click and your todo is gone forever. No warning, no second chance. A misclick on the delete button permanently destroys whatever was there. In this task, you'll add a single confirmation dialog to the delete button in TodoItem — one if statement, one function call. That's it.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add a todo with a long, carefully written description",
              "Click the delete button next to it",
              "The todo vanishes instantly — no warning, no dialog, no way back",
              "Notice there is nothing to stop an accidental misclick from deleting important data",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Locate the delete button in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Open TodoItem.jsx in the editor",
              "Scroll to the bottom of the return statement",
              "Find the button with the className 'delete-btn'",
              "Notice its onClick handler currently calls e.stopPropagation() and then immediately calls onDelete(index)",
              "There is no check between pressing the button and the todo being removed",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add the confirmation check",
        sections: [
          {
            descriptions: [
              "Inside the onClick handler of the delete button, after e.stopPropagation()",
              "Wrap the onDelete(index) call inside an if statement",
              "The condition should call window.confirm with the message 'Delete this todo?'",
              "window.confirm returns true if the user clicks OK and false if they click Cancel",
              "Only call onDelete(index) when window.confirm returns true",
              "The e.stopPropagation() line stays exactly where it is — do not move it",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Test the fix",
        sections: [
          {
            descriptions: [
              "Click the delete button on any todo — confirm a browser dialog appears asking 'Delete this todo?'",
              "Click Cancel — confirm the todo remains in the list",
              "Click the delete button again and click OK — confirm the todo is removed",
              "Click anywhere else on the todo row — confirm the toggle still works and the confirmation does not appear",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/j7y68p?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task13,
  },

  // ─────────────────────────────────────────────
  // FT-4: Categories / Tags
  // ─────────────────────────────────────────────
  {
    taskId: "categories-tags",
    taskTitle: "Add Categories and Tags",
    introduction:
      "Work todos, personal todos, and shopping todos are all mixed into one undifferentiated list. There is no way to separate them, filter by context, or even see at a glance what category a todo belongs to. In this task, you'll add a category dropdown to the input, store the category on each todo, and display a colour-coded tag inside TodoItem. This one touches both files.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add a mix of todos — 'email boss', 'buy milk', 'call mum', 'finish report', 'get groceries'",
              "Notice every todo looks identical — same styling, same weight, zero visual difference",
              "There is no dropdown, no tag, and no way to indicate what context a todo belongs to",
              "All todos sit in one list with no way to filter or separate by category",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add the category state in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the block of useState declarations at the top of the component",
              "Add a new piece of state called category with a default value of 'personal'",
              "This will track which category is selected before a new todo is added",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update the addTodo function",
        sections: [
          {
            descriptions: [
              "Find the addTodo function in App.js",
              "Locate the object literal where the new todo is created",
              "Add a category property to the object and set its value to the category state variable",
              "After the setTodos call, add a line to reset the category state back to 'personal'",
              "This ensures the dropdown goes back to its default after each todo is added",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the category dropdown in JSX",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement in App.js",
              "Find the add-row div that contains the priority select and the Add button",
              "Add a new select element inside that div, alongside the existing priority select",
              "Set the value of the select to the category state",
              "Add an onChange handler that calls setCategory with e.target.value",
              "Add three option elements inside the select with values 'personal', 'work', and 'shopping'",
              "Give each option a display label of Personal, Work, and Shopping respectively",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add the colour map in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Open TodoItem.jsx in the editor",
              "At the top of the file, above the component function, create a new object called categoryColors",
              "Add three entries: personal mapped to '#667eea', work mapped to '#f093fb', shopping mapped to '#4facfe'",
              "This object will be used to look up the correct badge colour based on the category value",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Display the category tag in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Find the span that renders the priority label inside the li element",
              "Add a new span element next to it — place it before the priority span so it appears first",
              "Give the span a conditional render — only show it if todo.category exists",
              "Set its text content to todo.category",
              "Add a background style using categoryColors[todo.category] to apply the correct colour",
              "Set the color style to white, fontSize to '0.7rem', padding to '2px 8px', and borderRadius to '10px'",
              "Add a marginRight of '8px' to give it breathing room from the text",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test the feature",
        sections: [
          {
            descriptions: [
              "Add a todo with the Work category — confirm a purple badge appears",
              "Add a todo with Shopping — confirm a blue badge appears",
              "Add a todo without changing the dropdown — confirm it defaults to Personal with an indigo badge",
              "Confirm the dropdown resets to Personal after each todo is added",
              "Reload the page — confirm the category badges survive the localStorage reload",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/37tg77?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task14,
  },

  // ─────────────────────────────────────────────
  // FT-5: Reorder With Up/Down Buttons
  // ─────────────────────────────────────────────
  {
    taskId: "reorder-up-down",
    taskTitle: "Reorder Todos with Up/Down Buttons",
    introduction:
      "You add a todo in the wrong position and it is stuck there forever. You cannot move urgent things to the top. You cannot push completed-looking items to the bottom. In this task, you'll add moveTodoUp and moveTodoDown functions in App.js, pass them as props to TodoItem, and render ↑ and ↓ buttons on each row.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add five todos in a deliberate order",
              "Realise the most urgent one should be at the top — it is buried at the bottom",
              "Try to drag or move it — nothing happens, the list is completely frozen",
              "There are no up or down controls anywhere on the todo items",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Write the moveTodoUp function in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the deleteTodo function — add the new move functions directly below it",
              "Create a function called moveTodoUp that takes index as its parameter",
              "Inside the function, add a guard clause: if index is equal to 0, return early — the first item cannot move up",
              "Create a copy of the todos array using the spread operator",
              "Swap the item at index with the item at index minus 1 using destructuring assignment",
              "Call setTodos with the updated array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Write the moveTodoDown function in App.js",
        sections: [
          {
            descriptions: [
              "Directly below moveTodoUp, create a function called moveTodoDown that takes index as its parameter",
              "Add a guard clause: if index is equal to todos.length minus 1, return early — the last item cannot move down",
              "Create a copy of the todos array using the spread operator",
              "Swap the item at index with the item at index plus 1 using destructuring assignment",
              "Call setTodos with the updated array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Pass the move functions as props to TodoItem",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement in App.js",
              "Find the filteredToos.map where TodoItem is rendered",
              "Add an onMoveUp prop to the TodoItem component — pass the moveTodoUp function",
              "Add an onMoveDown prop — pass the moveTodoDown function",
              "The existing onToggle, onDelete, and onEdit props stay exactly as they are",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Destructure the new props in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Open TodoItem.jsx in the editor",
              "Find the function signature at the top of the component",
              "The current props are: todo, index, onToggle, onDelete, onEdit",
              "Add onMoveUp and onMoveDown to the destructured props list",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add the Up and Down buttons inside the li",
        sections: [
          {
            descriptions: [
              "Find the li element in the return statement of TodoItem.jsx",
              "Locate the delete button at the bottom of the li",
              "Add a new button before the delete button with the label ↑",
              "Add an onClick handler that calls e.stopPropagation() then onMoveUp(index)",
              "Add a second button with the label ↓",
              "Add an onClick handler that calls e.stopPropagation() then onMoveDown(index)",
              "The e.stopPropagation() call is required on both to prevent the li click from toggling the todo",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test the feature",
        sections: [
          {
            descriptions: [
              "Add five todos and click ↑ on the last one — confirm it moves up by one position",
              "Click ↑ on the first item — confirm nothing happens (guard clause works)",
              "Click ↓ on the last item — confirm nothing happens",
              "Move an item to the top and confirm its position persists after toggling it",
              "Reload the page — confirm the reordered list is saved in localStorage",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/vy9t5k?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task15,
  },

  // ─────────────────────────────────────────────
  // FT-6: Drag to Reorder
  // ─────────────────────────────────────────────
  {
    taskId: "drag-to-reorder",
    taskTitle: "Drag and Drop to Reorder",
    introduction:
      "Up and down buttons work, but they feel clunky. Real apps let you grab a todo and drop it wherever you want. In this task, you'll implement drag and drop reordering using the native HTML Drag and Drop API — no libraries needed. You'll need two refs in App.js, three handler functions, and four new attributes on the li element in TodoItem.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Try to drag a todo row to a different position — nothing happens",
              "The items are static and cannot be grabbed",
              "Notice that every modern task manager — Notion, Trello, Linear — supports drag and drop natively",
              "The up/down buttons work but require many clicks to move something far",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Import useRef in App.js",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the import line at the very top of the file",
              "It currently imports useState and useEffect from 'react'",
              "Add useRef to the import — the line should now read: import { useState, useEffect, useRef } from 'react'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Create the two drag refs",
        sections: [
          {
            descriptions: [
              "Find the block of useState declarations inside the component",
              "Below all the state declarations, add two useRef calls",
              "Create a ref called dragItem and initialise it with useRef(null)",
              "Create a ref called dragOverItem and initialise it with useRef(null)",
              "These refs will hold the index of the item being dragged and the item it is hovering over",
              "Refs are used here instead of state because they update silently without causing a re-render",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Write the three drag handler functions",
        sections: [
          {
            descriptions: [
              "Below the moveTodoDown function (or below deleteTodo if you skipped FT-5), add the three drag handlers",
              "Create handleDragStart — it takes index as a parameter and sets dragItem.current to that index",
              "Create handleDragEnter — it takes index as a parameter and sets dragOverItem.current to that index",
              "Create handleDragEnd — this is where the reorder logic lives:",
              "Inside handleDragEnd, create a copy of the todos array using the spread operator",
              "Use splice to remove the dragged item from dragItem.current — store the removed item in a variable",
              "Use splice again to insert that item at dragOverItem.current",
              "Reset both refs to null",
              "Call setTodos with the updated array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Pass the drag handlers as props to TodoItem",
        sections: [
          {
            descriptions: [
              "Scroll to the filteredToos.map in the return statement of App.js",
              "Find the TodoItem component",
              "Add an onDragStart prop and pass the handleDragStart function",
              "Add an onDragEnter prop and pass the handleDragEnter function",
              "Add an onDragEnd prop and pass the handleDragEnd function",
              "All existing props stay exactly as they are",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Destructure the drag props in TodoItem.jsx",
        sections: [
          {
            descriptions: [
              "Open TodoItem.jsx in the editor",
              "Find the function signature at the top of the component",
              "Add onDragStart, onDragEnter, and onDragEnd to the destructured props",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Add drag attributes to the li element",
        sections: [
          {
            descriptions: [
              "Find the li element at the top of the return statement in TodoItem.jsx",
              "Add the draggable attribute and set it to true — this enables the element as a drag source",
              "Add an onDragStart attribute that calls onDragStart(index)",
              "Add an onDragEnter attribute that calls onDragEnter(index)",
              "Add an onDragEnd attribute that calls onDragEnd with no arguments — it needs no index",
              "Update the cursor style inside the existing style object to 'grab'",
              "All existing attributes (onClick, style, className) stay exactly as they are",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Test the feature",
        sections: [
          {
            descriptions: [
              "Add five todos and grab the last one by clicking and holding on it",
              "Drag it slowly upward — confirm the visual shows it moving between items",
              "Release it at the top — confirm the list reorders immediately",
              "Drag an item from the top to the bottom — confirm it works in both directions",
              "Reload the page — confirm the dragged order is preserved via localStorage",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/t5q98y?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task16,
  },

  // ─────────────────────────────────────────────
  // FT-7: Character Limit on Input
  // ─────────────────────────────────────────────
  {
    taskId: "character-limit",
    taskTitle: "Add a Character Limit",
    introduction:
      "Your input accepts unlimited text. Paste a 300-character paragraph and the app happily adds it as a todo, breaking the entire layout. In this task, you'll cap the input at 100 characters, silently block any input that exceeds it, and display a live counter that turns red as the user approaches the limit.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Click into the todo input and paste a long paragraph of text",
              "Click Add — the entire paragraph appears as a single todo and the layout stretches or breaks",
              "Notice there is no counter, no warning, and no resistance from the input",
              "Todos should be short and actionable — the input should enforce that",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Define the MAX_CHARS constant",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the line just above the return statement — after all the state and function declarations",
              "Add a constant called MAX_CHARS and set it to 100",
              "Defining it as a constant at the top makes it easy to change later without hunting through the JSX",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update the todo input onChange handler",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement and find the main todo text input — the one with placeholder 'Add todo'",
              "Find its onChange attribute — it currently calls setTodo(e.target.value) unconditionally",
              "Replace the handler with a conditional check",
              "Only call setTodo(e.target.value) if e.target.value.length is less than or equal to MAX_CHARS",
              "If the user types beyond the limit, the state does not update and the extra characters are silently dropped",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the character counter below the input",
        sections: [
          {
            descriptions: [
              "Directly below the todo text input in the JSX, add a span element",
              "Set its text content to show the current count and the limit: todo.length / MAX_CHARS — for example '42/100'",
              "Add a fontSize style of '0.75rem'",
              "Add a conditional color style: if todo.length is greater than MAX_CHARS multiplied by 0.9, set the color to red, otherwise set it to gray",
              "This means the counter turns red when the user is within 10 characters of the limit",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the feature",
        sections: [
          {
            descriptions: [
              "Type into the input and watch the counter increment with each keystroke",
              "Type until you are near 90 characters — confirm the counter turns red",
              "Keep typing past 100 characters — confirm the input stops accepting new characters",
              "Add the todo — confirm it is added normally with the counter resetting to 0/100",
              "Paste a 300-character string — confirm only 100 characters are accepted",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/csz9w3?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task17,
  },

  // ─────────────────────────────────────────────
  // FT-8: Undo Last Delete
  // ─────────────────────────────────────────────
  {
    taskId: "undo-last-delete",
    taskTitle: "Undo the Last Delete",
    introduction:
      "You just deleted the wrong todo. It is gone. No undo, no way back. That is a terrible experience and users lose trust in your app. In this task, you'll save the last deleted todo to state, add an undoDelete function that puts it back in its original position, and render an undo button that only appears when there is something to recover.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add a todo with detailed, carefully written text",
              "Click the delete button — it disappears instantly",
              "Look for an undo option anywhere on the page — there is none",
              "Press Ctrl+Z — it does not work, React state changes are not reversible with keyboard shortcuts",
              "The data is completely gone",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add the lastDeleted state",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the block of useState declarations at the top of the component",
              "Add a new piece of state called lastDeleted with a default value of null",
              "This state will hold the todo object and its original index when a delete happens",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update the deleteTodo function",
        sections: [
          {
            descriptions: [
              "Find the deleteTodo function in App.js",
              "Before the existing setTodos call, add a setLastDeleted call",
              "Pass an object to setLastDeleted with two properties: todo set to todos[index] and index set to index",
              "This captures a snapshot of the deleted item before it is removed",
              "The existing setTodos filter call stays exactly as it is — do not change it",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Write the undoDelete function",
        sections: [
          {
            descriptions: [
              "Below the deleteTodo function, add a new function called undoDelete",
              "Add a guard clause at the top: if lastDeleted is null or undefined, return early",
              "Create a copy of the current todos array using the spread operator",
              "Use the splice method on the copy to insert lastDeleted.todo back at lastDeleted.index",
              "Call setTodos with the updated array",
              "Call setLastDeleted(null) to clear the undo state — you can only undo once per delete",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add the undo button in JSX",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement in App.js",
              "Find the Clear Completed button at the bottom — add the undo button near it",
              "Wrap the button in a conditional expression: only render it when lastDeleted is not null",
              "Connect the button's onClick to the undoDelete function",
              "Give the button a label that shows what will be recovered — for example: ↩ Undo delete with a truncated preview of the todo text",
              "Use lastDeleted.todo.text.slice(0, 20) to keep the label short and add '...' after it",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test the feature",
        sections: [
          {
            descriptions: [
              "Add three todos and delete the middle one — confirm the undo button appears with a preview of the deleted text",
              "Click the undo button — confirm the todo reappears in its original position",
              "Confirm the undo button disappears after the restore",
              "Delete a todo and then delete another — confirm the undo button updates to show the most recent delete",
              "Undo the second delete — confirm only the last deleted item is restored, not both",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/qwrrnf?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task18,
  },

  // ─────────────────────────────────────────────
  // FT-9: Dark / Light Mode Toggle
  // ─────────────────────────────────────────────
  {
    taskId: "dark-light-mode",
    taskTitle: "Dark and Light Mode Toggle",
    introduction:
      "It is 2am and your Todo App is blinding you. Bright white background, no dark mode, no toggle. In 2025 every app ships with a dark mode. In this task, you'll add a darkMode boolean to state, apply conditional inline styles to the app container, and render a toggle button in the top corner — one boolean controls the entire theme.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Open the app in a dim environment or reduce your screen brightness",
              "Notice the app has a bright white background with no way to change it",
              "There is no toggle button anywhere — not in the header, not in the corner",
              "Every major app ships with a dark mode: VS Code, Notion, GitHub, Gmail",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add the darkMode state",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the block of useState declarations at the top of the component",
              "Add a new piece of state called darkMode with a default value of false",
              "false means light mode by default — the app looks the same as it does now until the user toggles it",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Apply conditional styles to the app container",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement in App.js",
              "Find the outermost div with the className of 'app'",
              "Add a style attribute to that div",
              "Set backgroundColor conditionally: if darkMode is true use '#1a1a2e', otherwise use '#ffffff'",
              "Set color conditionally: if darkMode is true use '#eaeaea', otherwise use '#333333'",
              "Set minHeight to '100vh' so the background fills the entire viewport",
              "Set transition to 'all 0.3s ease' so the theme change animates smoothly instead of snapping",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the toggle button",
        sections: [
          {
            descriptions: [
              "Inside the app div, add a new button element as the very first child — before the h2",
              "Connect its onClick to a handler that calls setDarkMode with the opposite of the current darkMode value",
              "Give the button a position style of 'absolute', top of '16px', and right of '16px'",
              "Set the button label conditionally: if darkMode is true show '☀️ Light', otherwise show '🌙 Dark'",
              "Make sure the parent app div has position: 'relative' in its style so the absolute positioning works correctly",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the feature",
        sections: [
          {
            descriptions: [
              "Click the 🌙 Dark button — confirm the background switches to dark and the button label changes to ☀️ Light",
              "Click ☀️ Light — confirm the app returns to the white theme",
              "Toggle several times quickly — confirm the transition animation runs smoothly",
              "Add and delete todos while in dark mode — confirm the functionality still works in both themes",
              "Reload the page — notice the theme resets to light (persisting to localStorage is a bonus exercise)",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/8ynlhw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task19,
  },

  // ─────────────────────────────────────────────
  // FT-10: Bulk Delete by Category
  // ─────────────────────────────────────────────
  {
    taskId: "bulk-delete-by-category",
    taskTitle: "Bulk Delete by Category",
    introduction:
      "You just finished all your shopping. Eight todos to clean up. You delete them one by one — eight clicks for one completed task. In this task, you'll add a bulk delete feature that wipes every todo in a category with a single button click. The buttons appear dynamically based on which categories currently exist in the list.",
    steps: [
      {
        stepTitle: "Step 1: See the problem",
        titleDescription: "",
        sections: [
          {
            descriptions: [
              "Add six shopping todos and complete all of them",
              "Start deleting them one at a time — notice how tedious it becomes",
              "There is no way to clear an entire category at once",
              "Notice the same problem exists for Work and Personal todos",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Write the deleteTodosByCategory function",
        sections: [
          {
            descriptions: [
              "Open App.js in the editor",
              "Find the deleteTodo function",
              "Below it, add a new function called deleteTodosByCategory that takes cat as its parameter",
              "Inside the function, call setTodos and pass it todos.filter where you keep only todos whose category does NOT equal cat",
              "This removes every todo that matches the given category in a single state update",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Derive the active categories list",
        sections: [
          {
            descriptions: [
              "Below the deleteTodosByCategory function, add a new variable called activeCategories",
              "Use the spread operator to expand a new Set — this automatically removes duplicate category values",
              "Pass todos.map into the Set — map over the todos array and return t.category from each item",
              "The result is an array of unique category strings that currently exist in the todo list",
              "This list updates automatically whenever todos are added or removed",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add the bulk delete buttons in JSX",
        sections: [
          {
            descriptions: [
              "Scroll to the return statement in App.js",
              "Find the Clear Completed button at the bottom of the component",
              "Above it, add a new div to hold the bulk delete buttons",
              "Inside the div, map over the activeCategories array",
              "For each category, render a button element with the key set to the category name",
              "Set the button label to 'Clear ' followed by the category name — for example 'Clear shopping'",
              "Connect the button's onClick to a call to deleteTodosByCategory passing the current category",
              "Add a marginRight style of '8px' to space the buttons apart",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the feature",
        sections: [
          {
            descriptions: [
              "Add todos in all three categories — confirm a Clear button appears for each category",
              "Click 'Clear shopping' — confirm all shopping todos are removed and the button disappears",
              "Confirm the Work and Personal todos are completely unaffected",
              "Add a new shopping todo — confirm the Clear shopping button reappears",
              "Delete all todos in all categories — confirm all Clear buttons disappear when the list is empty",
            ],
          },
        ],
      },
    ],
    taskType: "ReactTasks",
    difficulty: "Hard",
    authorIndex: 0,
    prerequisites: ["React Tasks Basics", "categories-tags"],
    completed: false,
    videoLink: "",
    codesandboxUrl:
      "https://codesandbox.io/embed/j3l4mk?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
    img: task20,
  },
];
