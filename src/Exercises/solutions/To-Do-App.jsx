const solutionCode1 = `
//App.js

import { TodoWrapper } from "./TodoWrapper";
import './styles.css'

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;

`;

const solutionCode2 = `
//EditTodoForm.js

import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Edit</button>
  </form>
  )
}

`;
const solutionCode3 = `
//Todo.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleToggleComplete = (id) => {
    toggleComplete(id);
  };

  return (
    <div className={\`Todo \${task.completed ? "completed" : ""}\`}>
      <p onClick={() => handleToggleComplete(task.id)}>{task.task}</p>
      <div>
        {!task.completed && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
        )}
        {!task.completed && (
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        )}
      </div>
    </div>
  );
};

`;
const solutionCode4 = `
//TodoForm.js

import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter Task!' />
    <button type="submit" className='todo-btn'>Add</button>
  </form>
  )
}

`;
const solutionCode5 = `
//TodoWrapper.js

import React, { useState, useEffect, useRef } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const prevTodos = useRef([]);

  useEffect(() => {
    todos.forEach((todo) => {
      const wasCompleted = prevTodos.current.some(
        (prevTodo) =>
          prevTodo.id === todo.id && !prevTodo.completed && todo.completed
      );
      const wasIncomplete = prevTodos.current.some(
        (prevTodo) =>
          prevTodo.id === todo.id && prevTodo.completed && !todo.completed
      );

      if (wasCompleted) {
        toast.success(\`Task "\${todo.task}" is done!\`);
      } else if (wasIncomplete) {
        toast.info(\`Task "\${todo.task}" is no longer completed.\`);
      }
    });
    prevTodos.current = todos;
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>To-Do Task App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      <ToastContainer />
    </div>
  );
};

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
];
