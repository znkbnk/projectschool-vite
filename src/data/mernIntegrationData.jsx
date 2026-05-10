/* eslint-disable no-template-curly-in-string */
const mernIntegrationData = [
  {
    id: "react-mern-integration-guide",
    title: "The Definitive Guide to React + APIs (MERN Integration)",
    image: "/images/mernIntegration.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to React + APIs with MERN Integration. You've learned React, hooks, routing, data fetching, and state management — all with third-party APIs. Now it's time to build your own backend. MERN (MongoDB, Express, React, Node.js) is the most popular full-stack JavaScript stack: React handles the frontend, Express + Node handles the API server, and MongoDB stores the data. This guide teaches you to connect all four layers through seven progressive examples, from a basic Express server to a complete full-stack application with authentication and file uploads.",
      },

      // ═══════════════════════════════════════════
      // SECTION 1: THE MERN ARCHITECTURE
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "The MERN Architecture",
      },
      {
        type: "text",
        content:
          "In a MERN app, the frontend (React) and the backend (Express) are separate applications. React runs in the browser and makes HTTP requests to Express. Express receives those requests, talks to MongoDB, and sends JSON responses back to React. They communicate over HTTP — the same way React talks to any API.",
      },
      {
        type: "code",
        content: `// THE MERN DATA FLOW
//
// [React App]  ──── fetch('/api/products') ────►  [Express Server]  ──── Product.find() ────►  [MongoDB]
// (localhost:5173)                                 (localhost:5000)                              (Atlas/local)
//
// [React App]  ◄──── { products: [...] } ──────  [Express Server]  ◄──── [{ name, price }] ──  [MongoDB]
//
// React: Renders UI, manages state, handles user interaction
// Express: Receives requests, validates data, runs business logic
// MongoDB: Stores and retrieves data permanently
// Node.js: The runtime that runs Express (like how the browser runs React)`,
      },
      {
        type: "boldText",
        content: "Project Structure",
      },
      {
        type: "code",
        content: `// TYPICAL MERN PROJECT STRUCTURE
//
// my-mern-app/
// ├── client/                 ← React app (created with Vite)
// │   ├── src/
// │   │   ├── components/
// │   │   ├── pages/
// │   │   ├── hooks/
// │   │   └── App.jsx
// │   ├── package.json        ← React dependencies
// │   └── vite.config.js      ← Proxy config
// │
// ├── server/                 ← Express app
// │   ├── models/             ← Mongoose schemas
// │   ├── routes/             ← API route handlers
// │   ├── middleware/         ← Auth, validation, error handling
// │   ├── server.js           ← Entry point
// │   └── package.json        ← Express dependencies
// │
// └── .env                    ← Environment variables (MONGO_URI, JWT_SECRET)`,
      },
      {
        type: "boldText",
        content: "Why Separate Frontend and Backend?",
      },
      {
        type: "list",
        items: [
          "Independent deployment: Deploy React to Netlify/Vercel and Express to Railway/Render. Scale them independently.",
          "Different concerns: React handles UI and user interaction. Express handles data, auth, and business logic. Separating them keeps both clean.",
          "API reusability: The same Express API can serve a React web app, a mobile app, and a third-party integration.",
          "Team scalability: Frontend and backend developers can work independently once the API contract (endpoints, request/response shapes) is defined.",
        ],
      },

      // ═══════════════════════════════════════════
      // SECTION 2: CORS AND PROXY
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "CORS and Proxy Setup",
      },
      {
        type: "text",
        content:
          "During development, React runs on localhost:5173 and Express runs on localhost:5000. Browsers block requests between different origins (ports count as different origins) — this is called CORS (Cross-Origin Resource Sharing). You have two options to fix this: configure CORS on the server, or use a development proxy.",
      },
      {
        type: "code",
        content: `// OPTION 1: CORS middleware on Express (quick, works everywhere)
// npm install cors
import cors from 'cors';
app.use(cors({ origin: 'http://localhost:5173' })); // Allow React's origin

// OPTION 2: Vite proxy (development only, cleaner URLs)
// In client/vite.config.js:
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

// With proxy, React can fetch('/api/products') without the full URL
// Vite forwards /api/* requests to Express automatically
// In production, configure your hosting to route /api to your backend`,
      },

      // ═══════════════════════════════════════════
      // SECTION 3: COMMON PITFALLS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Common Pitfalls",
      },
      {
        type: "boldText",
        content: "1. Forgetting express.json() Middleware",
      },
      {
        type: "code",
        content: `// BUG: POST request body is undefined
app.post('/api/tasks', (req, res) => {
  console.log(req.body); // undefined!
});

// FIX: Parse JSON bodies
app.use(express.json()); // Add this BEFORE your routes
app.post('/api/tasks', (req, res) => {
  console.log(req.body); // { title: 'Learn MERN' } ✓
});`,
      },
      {
        type: "boldText",
        content: "2. CORS Errors in the Browser",
      },
      {
        type: "code",
        content: `// ERROR: "Access to fetch at 'http://localhost:5000/api/tasks'
// from origin 'http://localhost:5173' has been blocked by CORS policy"

// This means Express isn't allowing React's origin.
// FIX: Add cors() middleware or use Vite proxy (see above)`,
      },
      {
        type: "boldText",
        content: "3. Hardcoding localhost URLs in React",
      },
      {
        type: "code",
        content: `// BAD: Breaks in production
fetch('http://localhost:5000/api/tasks')

// GOOD: Use relative URLs (works with proxy in dev, and in production)
fetch('/api/tasks')

// Or use an environment variable:
const API = import.meta.env.VITE_API_URL || '';
fetch(\`\${API}/api/tasks\`)`,
      },
      {
        type: "boldText",
        content: "4. Not Handling Errors on Both Sides",
      },
      {
        type: "code",
        content: `// Express: Always send proper error responses
app.post('/api/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message }); // Don't just crash!
  }
});

// React: Always check response status
const res = await fetch('/api/tasks', { method: 'POST', ... });
if (!res.ok) {
  const { error } = await res.json();
  setError(error); // Show the error to the user
  return;
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 1: SETTING UP EXPRESS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 1: Setting Up an Express API",
      },
      {
        type: "text",
        content:
          "Your first Express server: a few routes that return JSON data. No database yet — just hardcoded data. This establishes the API patterns (routes, request/response, status codes, error handling) that every later example builds on.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Creating an Express server from scratch",
          "RESTful route conventions (GET, POST, PUT, DELETE)",
          "Sending JSON responses with proper status codes",
          "Basic error handling and validation",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — server/server.js",
      },
      {
        type: "code",
        content: `// server/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());           // Allow cross-origin requests
app.use(express.json());   // Parse JSON request bodies

// In-memory data (replaced with MongoDB later)
let tasks = [
  { id: '1', title: 'Learn Express', status: 'done', createdAt: new Date().toISOString() },
  { id: '2', title: 'Build an API', status: 'inprogress', createdAt: new Date().toISOString() },
  { id: '3', title: 'Connect to React', status: 'todo', createdAt: new Date().toISOString() },
];

// GET all tasks
app.get('/api/tasks', (req, res) => {
  const { status } = req.query; // Optional filter: /api/tasks?status=todo
  const filtered = status ? tasks.filter(t => t.status === status) : tasks;
  res.json(filtered);
});

// GET single task
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = {
    id: Date.now().toString(),
    title: title.trim(),
    status: 'todo',
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT update task
app.put('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

// DELETE task
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  const deleted = tasks.splice(index, 1)[0];
  res.json(deleted);
});

app.listen(PORT, () => console.log(\`Server running on http://localhost:\${PORT}\`));`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "Five routes follow REST conventions: GET /api/tasks (list all), GET /api/tasks/:id (get one), POST /api/tasks (create), PUT /api/tasks/:id (update), DELETE /api/tasks/:id (remove). Each route handles errors properly — missing tasks return 404, invalid data returns 400, successful creates return 201.",
      },
      {
        type: "text",
        content:
          "The /api prefix is a convention that separates API routes from page routes. When you deploy, /api/* goes to Express and everything else goes to React. Query parameters (req.query) handle filtering: GET /api/tasks?status=todo returns only todo tasks.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget app.use(express.json()) → req.body is undefined on POST/PUT. The most common Express beginner mistake.",
          "Return HTML instead of JSON → res.send('Task created') instead of res.json(task). React expects JSON and can't parse an HTML string.",
          "Forget proper status codes → Sending 200 for everything. React checks res.ok (200-299 range). A 400 or 404 should trigger error handling on the frontend.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a PATCH /api/tasks/:id/status endpoint that only updates the task's status field. Validate that the status is one of ['todo', 'inprogress', 'done']. Return 400 if invalid. Test with curl or Postman.",
        hint: "Hint: app.patch('/api/tasks/:id/status', ...). Check if req.body.status is in the allowed array. Update only the status field.",
        solution: `app.patch('/api/tasks/:id/status', (req, res) => {
  const { status } = req.body;
  const allowed = ['todo', 'inprogress', 'done'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: \`Status must be one of: \${allowed.join(', ')}\` });
  }
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks[index].status = status;
  res.json(tasks[index]);
});

// Test: curl -X PATCH http://localhost:5000/api/tasks/1/status -H "Content-Type: application/json" -d '{"status":"done"}'`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 2: CONNECTING REACT TO EXPRESS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 2: Connecting React to Your Express API",
      },
      {
        type: "text",
        content:
          "Now connect the React frontend to your Express backend. This is the same data fetching you learned in the Data Fetching guide — but instead of fetching from dummyjson.com, you're fetching from your own server. The patterns (loading/error states, AbortController) are identical.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Fetching data from your own Express API",
          "Vite proxy configuration for development",
          "Creating a reusable API utility",
          "Error handling across the full stack",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — client/src/api.js (API Utility)",
      },
      {
        type: "code",
        content: `// client/src/api.js — Reusable API helper
const API_URL = import.meta.env.VITE_API_URL || '';

async function api(endpoint, options = {}) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  const res = await fetch(\`\${API_URL}\${endpoint}\`, config);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || \`HTTP \${res.status}\`);
  }

  return data;
}

// Convenience methods
export const tasksAPI = {
  getAll: (status) => api(\`/api/tasks\${status ? \`?status=\${status}\` : ''}\`),
  getOne: (id) => api(\`/api/tasks/\${id}\`),
  create: (task) => api('/api/tasks', { method: 'POST', body: task }),
  update: (id, data) => api(\`/api/tasks/\${id}\`, { method: 'PUT', body: data }),
  delete: (id) => api(\`/api/tasks/\${id}\`, { method: 'DELETE' }),
};`,
      },
      {
        type: "boldText",
        content: "Full Code — client/src/App.jsx",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';
import { tasksAPI } from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load tasks from Express API
  useEffect(() => {
    const controller = new AbortController();
    tasksAPI.getAll()
      .then(data => { setTasks(data); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') { setError(err.message); setLoading(false); } });
    return () => controller.abort();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      const newTask = await tasksAPI.create({ title: input });
      setTasks(prev => [...prev, newTask]);
      setInput('');
      setError(null);
    } catch (err) { setError(err.message); }
  };

  const moveTask = async (id, status) => {
    try {
      const updated = await tasksAPI.update(id, { status });
      setTasks(prev => prev.map(t => t.id === id ? updated : t));
    } catch (err) { setError(err.message); }
  };

  const deleteTask = async (id) => {
    const original = tasks;
    setTasks(prev => prev.filter(t => t.id !== id)); // Optimistic
    try {
      await tasksAPI.delete(id);
    } catch (err) { setTasks(original); setError(err.message); } // Rollback
  };

  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];

  if (loading) return <p style={{ padding: '20px' }}>Loading from server...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      <h1>MERN Task Board</h1>
      {error && <p style={{ color: '#d32f2f', padding: '8px', background: '#ffebee', borderRadius: '6px' }}>{error}</p>}
      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..."
          style={{ flex: 1, padding: '10px' }} />
        <button type="submit">Add</button>
      </form>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {columns.map(col => (
          <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
            {tasks.filter(t => t.status === col.key).map(task => (
              <div key={task.id} style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
                <p style={{ margin: '0 0 6px' }}>{task.title}</p>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {columns.filter(c => c.key !== col.key).map(c => (
                    <button key={c.key} onClick={() => moveTask(task.id, c.key)}
                      style={{ fontSize: '11px', padding: '2px 6px' }}>→ {c.label}</button>
                  ))}
                  <button onClick={() => deleteTask(task.id)}
                    style={{ fontSize: '11px', padding: '2px 6px', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "The api() utility centralises all HTTP logic: setting headers, stringifying bodies, parsing responses, and throwing on errors. tasksAPI provides named methods for each endpoint. Components call tasksAPI.create({ title }) instead of writing fetch boilerplate. If you switch from fetch to axios later, you change one file.",
      },
      {
        type: "text",
        content:
          "The React component is almost identical to the Data Fetching guide examples. The only difference: instead of fetching from dummyjson.com, it fetches from /api/tasks — your own Express server. useEffect loads on mount, mutations (add/move/delete) call the API and update local state. Delete uses optimistic updates with rollback.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget Content-Type header → Express receives the body as text, not JSON. req.body is undefined or wrong.",
          "Use the full URL (http://localhost:5000/api/tasks) → Works in dev, breaks in production. Use relative URLs with a proxy.",
          "Don't stringify the body → fetch sends [object Object] as the body. Always JSON.stringify() or use the api() helper.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a loading state per action. When moving a task, dim that specific card (opacity: 0.5) until the server responds. Add an actionLoading state that stores the task ID being mutated.",
        hint: "Hint: const [actionLoading, setActionLoading] = useState(null). Set it to the task id before the API call, clear it in finally. Style the card with opacity based on actionLoading === task.id.",
        solution: `const [actionLoading, setActionLoading] = useState(null);

const moveTask = async (id, status) => {
  setActionLoading(id);
  try {
    const updated = await tasksAPI.update(id, { status });
    setTasks(prev => prev.map(t => t.id === id ? updated : t));
  } catch (err) { setError(err.message); }
  finally { setActionLoading(null); }
};

// In the card: style={{ opacity: actionLoading === task.id ? 0.5 : 1 }}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 3: FULL CRUD
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 3: Full CRUD with Validation",
      },
      {
        type: "text",
        content:
          "A complete Create, Read, Update, Delete implementation with proper validation on both sides. Express validates data before saving. React validates before sending and displays server-side errors. This is the pattern used in every real MERN application.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Server-side validation with meaningful error messages",
          "Client-side validation before submitting",
          "Inline editing with PUT requests",
          "Consistent error handling across the full stack",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — server/routes/tasks.js",
      },
      {
        type: "code",
        content: `// server/routes/tasks.js
import express from 'express';
const router = express.Router();

let tasks = [
  { id: '1', title: 'Learn Express', description: 'Build REST APIs', status: 'done', priority: 'high', createdAt: new Date().toISOString() },
  { id: '2', title: 'Build CRUD', description: 'Full create/read/update/delete', status: 'inprogress', priority: 'high', createdAt: new Date().toISOString() },
  { id: '3', title: 'Add validation', description: 'Both client and server', status: 'todo', priority: 'medium', createdAt: new Date().toISOString() },
];

// Validation helper
function validateTask(data, isUpdate = false) {
  const errors = {};
  if (!isUpdate || data.title !== undefined) {
    if (!data.title?.trim()) errors.title = 'Title is required';
    else if (data.title.length > 100) errors.title = 'Title must be under 100 characters';
  }
  if (data.status && !['todo', 'inprogress', 'done'].includes(data.status)) {
    errors.status = 'Invalid status';
  }
  if (data.priority && !['low', 'medium', 'high'].includes(data.priority)) {
    errors.priority = 'Invalid priority';
  }
  return Object.keys(errors).length ? errors : null;
}

// GET all
router.get('/', (req, res) => {
  const { status, priority, search } = req.query;
  let result = tasks;
  if (status) result = result.filter(t => t.status === status);
  if (priority) result = result.filter(t => t.priority === priority);
  if (search) result = result.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.description?.toLowerCase().includes(search.toLowerCase())
  );
  res.json(result);
});

// GET one
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST create
router.post('/', (req, res) => {
  const errors = validateTask(req.body);
  if (errors) return res.status(400).json({ errors });

  const task = {
    id: Date.now().toString(),
    title: req.body.title.trim(),
    description: req.body.description?.trim() || '',
    status: req.body.status || 'todo',
    priority: req.body.priority || 'medium',
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT update
router.put('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  const errors = validateTask(req.body, true);
  if (errors) return res.status(400).json({ errors });

  tasks[index] = { ...tasks[index], ...req.body, updatedAt: new Date().toISOString() };
  res.json(tasks[index]);
});

// DELETE
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  res.json(tasks.splice(index, 1)[0]);
});

export default router;`,
      },
      {
        type: "boldText",
        content: "Full Code — client/src/TaskManager.jsx",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';
import { tasksAPI } from './api';

function TaskForm({ onSave, initialData, onCancel }) {
  const [form, setForm] = useState(initialData || { title: '', description: '', priority: 'medium' });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required';
    if (form.title.length > 100) errs.title = 'Max 100 characters';
    return Object.keys(errs).length ? errs : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientErrors = validate();
    if (clientErrors) { setErrors(clientErrors); return; }
    setSaving(true);
    setErrors({});
    try {
      await onSave(form);
      if (!initialData) setForm({ title: '', description: '', priority: 'medium' });
    } catch (err) {
      // Display server-side validation errors
      if (err.errors) setErrors(err.errors);
      else setErrors({ general: err.message });
    } finally { setSaving(false); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '12px' }}>
      {errors.general && <p style={{ color: '#d32f2f', margin: 0, fontSize: '14px' }}>{errors.general}</p>}
      <div>
        <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
          placeholder="Task title *" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: \`1px solid \${errors.title ? '#d32f2f' : '#ddd'}\` }} />
        {errors.title && <small style={{ color: '#d32f2f' }}>{errors.title}</small>}
      </div>
      <input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
        placeholder="Description (optional)" style={{ padding: '8px' }} />
      <select value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))} style={{ padding: '8px' }}>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" disabled={saving}>{saving ? 'Saving...' : initialData ? 'Update' : 'Add Task'}</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    tasksAPI.getAll().then(setTasks).catch(err => setError(err.message)).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (data) => {
    const task = await tasksAPI.create(data);
    setTasks(prev => [task, ...prev]);
  };

  const handleUpdate = async (data) => {
    const updated = await tasksAPI.update(editingId, data);
    setTasks(prev => prev.map(t => t.id === editingId ? updated : t));
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    await tasksAPI.delete(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const priorityColor = { high: '#d32f2f', medium: '#f57c00', low: '#388e3c' };

  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>Task Manager</h1>
      {error && <p style={{ color: '#d32f2f' }}>{error}</p>}
      <TaskForm onSave={handleCreate} />
      {tasks.map(task => (
        <div key={task.id} style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
          {editingId === task.id ? (
            <TaskForm initialData={task} onSave={handleUpdate} onCancel={() => setEditingId(null)} />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <strong>{task.title}</strong>
                <span style={{ marginLeft: '8px', fontSize: '11px', padding: '2px 6px', borderRadius: '8px',
                  background: priorityColor[task.priority] + '22', color: priorityColor[task.priority] }}>
                  {task.priority}
                </span>
                {task.description && <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>{task.description}</p>}
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button onClick={() => setEditingId(task.id)} style={{ fontSize: '12px' }}>Edit</button>
                <button onClick={() => handleDelete(task.id)} style={{ fontSize: '12px', color: '#d32f2f' }}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskManager;`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "Validation happens on both sides. React validates before sending (instant feedback). Express validates before saving (security — users can bypass the frontend). If the server returns validation errors ({ errors: { title: 'Required' } }), the form displays them inline. This double validation is the standard pattern in production.",
      },
      {
        type: "text",
        content:
          "TaskForm is reusable: pass no initialData for create mode, pass initialData for edit mode. The same form component handles both. handleCreate calls tasksAPI.create, handleUpdate calls tasksAPI.update. The form doesn't know which mode it's in — it just calls onSave with the data.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Only validate on the client → Users can send invalid data via Postman or browser devtools. Server validation is your security layer.",
          "Only validate on the server → Users wait for a round-trip to see 'Title required'. Client validation gives instant feedback.",
          "Forget to handle server error format → Server sends { errors: {...} } but React expects { error: '...' }. Match the shapes on both sides.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a search bar that filters tasks server-side. When the user types, debounce the input (400ms), then call tasksAPI.getAll() with a search query parameter. Show 'Searching...' while loading. Compare: client-side filtering (filter the loaded array) vs server-side filtering (send the query to Express).",
        hint: "Hint: Use useDebounce from your Custom Hooks guide. Pass the debounced query as a parameter: tasksAPI.getAll() becomes fetch('/api/tasks?search=query'). Express already handles the search query param.",
        solution: `const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 400);
const [searchLoading, setSearchLoading] = useState(false);

useEffect(() => {
  setSearchLoading(true);
  tasksAPI.getAll(null, debouncedSearch)  // Modify getAll to accept search param
    .then(setTasks)
    .catch(err => setError(err.message))
    .finally(() => setSearchLoading(false));
}, [debouncedSearch]);

// Update api.js:
// getAll: (status, search) => api(\`/api/tasks?\${new URLSearchParams({ ...(status && {status}), ...(search && {search}) })}\`),`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 4: MONGODB INTEGRATION
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 4: MongoDB with Mongoose",
      },
      {
        type: "text",
        content:
          "Replace in-memory arrays with a real database. MongoDB stores data permanently — restart the server and your tasks are still there. Mongoose provides schemas (structure), validation (rules), and models (methods) for interacting with MongoDB from Express.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Connecting Express to MongoDB Atlas",
          "Defining Mongoose schemas and models",
          "CRUD operations with Mongoose (create, find, findById, findByIdAndUpdate, findByIdAndDelete)",
          "Schema validation that replaces manual validation",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — server/models/Task.js",
      },
      {
        type: "code",
        content: `// server/models/Task.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title must be under 100 characters'],
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  status: {
    type: String,
    enum: ['todo', 'inprogress', 'done'],
    default: 'todo',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
}, { timestamps: true }); // Adds createdAt, updatedAt automatically

export default mongoose.model('Task', taskSchema);`,
      },
      {
        type: "boldText",
        content: "Full Code — server/server.js (with MongoDB)",
      },
      {
        type: "code",
        content: `// server/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Task from './models/Task.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const { status, priority, search } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (search) filter.title = { $regex: search, $options: 'i' }; // Case-insensitive search
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET one task
app.get('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST create task
app.post('/api/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.fromEntries(
        Object.entries(err.errors).map(([key, val]) => [key, val.message])
      );
      return res.status(400).json({ errors });
    }
    res.status(500).json({ error: err.message });
  }
});

// PUT update task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,
      { new: true, runValidators: true } // Return updated doc, run schema validation
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.fromEntries(
        Object.entries(err.errors).map(([key, val]) => [key, val.message])
      );
      return res.status(400).json({ errors });
    }
    res.status(500).json({ error: err.message });
  }
});

// DELETE task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "The Mongoose schema replaces manual validation. required, maxlength, enum — these rules are enforced at the database level. When Task.create() fails validation, Mongoose throws a ValidationError with structured error messages. The route handler catches it and returns { errors: { title: 'Title is required' } } — the same format React already handles.",
      },
      {
        type: "text",
        content:
          "Notice { new: true, runValidators: true } on findByIdAndUpdate. Without new: true, it returns the old document. Without runValidators: true, it skips schema validation on updates (a common gotcha). The React frontend doesn't change at all — it still calls the same API endpoints and receives the same JSON shapes.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget { runValidators: true } on update → Users can set status to 'invalid' because schema validation only runs on create by default.",
          "Forget { new: true } → The response contains the old data before the update. React shows stale data.",
          "Use task.id instead of task._id → MongoDB uses _id. Mongoose adds a virtual id getter, but be consistent in your API responses.",
          "Forget async/await on Mongoose calls → Mongoose methods return promises. Without await, you send the response before the database operation completes.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a dueDate field to the schema. Validate that it's a future date. Add an /api/tasks/overdue endpoint that returns tasks where dueDate is in the past and status is not 'done'. Display overdue tasks with a red badge in React.",
        hint: "Hint: dueDate: { type: Date }. Custom validator: validate: { validator: (v) => !v || v > new Date(), message: 'Due date must be in the future' }. Query: Task.find({ dueDate: { $lt: new Date() }, status: { $ne: 'done' } }).",
        solution: `// In Task schema, add:
dueDate: {
  type: Date,
  validate: {
    validator: function(v) { return !v || v > new Date(); },
    message: 'Due date must be in the future',
  },
},

// New route:
app.get('/api/tasks/overdue', async (req, res) => {
  const overdue = await Task.find({ dueDate: { $lt: new Date() }, status: { $ne: 'done' } });
  res.json(overdue);
});`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 5: AUTHENTICATION (JWT)
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 5: Authentication with JWT",
      },
      {
        type: "text",
        content:
          "Most apps need authentication: register, login, and protect certain routes so only logged-in users can access them. This example implements JWT (JSON Web Token) authentication — the standard approach for MERN apps. The server issues a token on login, React stores it, and sends it with every protected request.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "User registration with password hashing (bcrypt)",
          "Login with JWT token generation",
          "Auth middleware that protects Express routes",
          "React auth flow: login form → store token → send with requests → protect routes",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — server/models/User.js",
      },
      {
        type: "code",
        content: `// server/models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);`,
      },
      {
        type: "boldText",
        content: "Full Code — server/middleware/auth.js",
      },
      {
        type: "code",
        content: `// server/middleware/auth.js
import jwt from 'jsonwebtoken';

export function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}`,
      },
      {
        type: "boldText",
        content: "Full Code — server/routes/auth.js",
      },
      {
        type: "code",
        content: `// server/routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
    if (await User.findOne({ email })) return res.status(400).json({ error: 'Email already exists' });
    const user = await User.create({ name, email, password });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Get current user (protected)
router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

export default router;`,
      },
      {
        type: "boldText",
        content: "Full Code — client/src/hooks/useAuth.js",
      },
      {
        type: "code",
        content: `// client/src/hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Auto-load user from stored token
  useEffect(() => {
    if (!token) { setLoading(false); return; }
    fetch('/api/auth/me', { headers: { Authorization: \`Bearer \${token}\` } })
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(setUser)
      .catch(() => { localStorage.removeItem('token'); setToken(null); })
      .finally(() => setLoading(false));
  }, [token]);

  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  const register = async (name, email, password) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Helper for authenticated API calls
  const authFetch = async (url, options = {}) => {
    const res = await fetch(url, {
      ...options,
      headers: { 'Content-Type': 'application/json', Authorization: \`Bearer \${token}\`, ...options.headers },
    });
    if (res.status === 401) { logout(); throw new Error('Session expired'); }
    return res;
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "The flow: User registers → server hashes password with bcrypt, creates user, generates JWT → sends { token, user } → React stores token in localStorage and user in state. On page refresh, useEffect reads the token and calls /api/auth/me to validate it and load the user.",
      },
      {
        type: "text",
        content:
          "authFetch is the key utility: it automatically attaches the Authorization header to every request and handles 401 (expired token) by logging out. Protected Express routes use the auth middleware, which verifies the token and attaches userId to the request. React and Express share the same JWT secret through environment variables.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Store the password in plain text → Any database breach exposes all passwords. bcrypt.hash makes it one-way.",
          "Send the token in the URL (/api/tasks?token=xyz) → Tokens in URLs get logged in server logs, browser history, and analytics. Always use the Authorization header.",
          "Forget { expiresIn: '7d' } → Tokens never expire. A stolen token gives permanent access.",
          "Return the password in API responses → User.findById().select('-password') excludes it. Never send passwords to the client.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a Login/Register page with React Router. Show the login form by default with a 'Create account' link. After login, redirect to /dashboard. Show the user's name in the header with a logout button. Protect /dashboard with a ProtectedRoute wrapper.",
        hint: "Hint: Combine your React Router guide (ProtectedRoute + Navigate) with useAuth. The auth hook handles the logic, the router handles the navigation.",
        solution: `// LoginPage.jsx:
function LoginPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); setError('');
    try {
      if (isRegister) await register(form.name, form.email, form.password);
      else await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) { setError(err.message); }
  };
  // ... render form with toggle between login/register
}

// ProtectedRoute:
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  return children;
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 6: FILE UPLOADS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 6: File Uploads",
      },
      {
        type: "text",
        content:
          "Image uploads, document attachments, profile pictures — file handling is a common MERN requirement. Express uses multer middleware to handle multipart form data. React sends files using FormData instead of JSON. This example adds image uploads to tasks.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Setting up multer for file handling in Express",
          "React file input with preview before upload",
          "Sending files with FormData (not JSON)",
          "Serving uploaded files as static assets",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — server (multer setup)",
      },
      {
        type: "code",
        content: `// server/server.js — additions for file upload
import multer from 'multer';
import path from 'path';

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

// File filter: only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('Only images are allowed'), false);
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB limit

// Serve uploaded files as static assets
app.use('/uploads', express.static('uploads'));

// POST task with optional image
app.post('/api/tasks', auth, upload.single('image'), async (req, res) => {
  try {
    const taskData = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      user: req.userId,
    };
    if (req.file) taskData.image = \`/uploads/\${req.file.filename}\`;
    const task = await Task.create(taskData);
    res.status(201).json(task);
  } catch (err) { res.status(400).json({ error: err.message }); }
});`,
      },
      {
        type: "boldText",
        content: "Full Code — client (file upload form)",
      },
      {
        type: "code",
        content: `// client/src/TaskFormWithImage.jsx
import { useState } from 'react';
import { useAuth } from './hooks/useAuth';

function TaskFormWithImage({ onCreated }) {
  const { authFetch } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setError('File must be under 5MB'); return; }
    setImage(file);
    setPreview(URL.createObjectURL(file)); // Instant preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) { setError('Title required'); return; }
    setSaving(true); setError(null);

    // Use FormData instead of JSON for file upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const res = await authFetch('/api/tasks', {
        method: 'POST',
        headers: {}, // Let browser set Content-Type for FormData (includes boundary)
        body: formData, // NOT JSON.stringify
      });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error); }
      const task = await res.json();
      onCreated?.(task);
      setTitle(''); setDescription(''); setImage(null); setPreview(null);
    } catch (err) { setError(err.message); }
    finally { setSaving(false); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
      {error && <p style={{ color: '#d32f2f', margin: 0 }}>{error}</p>}
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title *" style={{ padding: '8px' }} />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" style={{ padding: '8px' }} />
      <div>
        <label style={{ display: 'inline-block', padding: '8px 16px', background: '#e3f2fd', borderRadius: '6px', cursor: 'pointer' }}>
          📷 {image ? 'Change Image' : 'Add Image'}
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>
        {preview && (
          <div style={{ marginTop: '8px', position: 'relative', display: 'inline-block' }}>
            <img src={preview} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
            <button type="button" onClick={() => { setImage(null); setPreview(null); }}
              style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#d32f2f', color: '#fff',
                border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer' }}>✕</button>
          </div>
        )}
      </div>
      <button type="submit" disabled={saving}>{saving ? 'Uploading...' : 'Create Task'}</button>
    </form>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "File uploads require FormData instead of JSON. The key difference: don't set Content-Type manually — the browser sets it to multipart/form-data with the correct boundary. On the server, multer parses the file from the request and saves it to the uploads/ directory. The filename is randomised to prevent collisions.",
      },
      {
        type: "text",
        content:
          "URL.createObjectURL(file) creates an instant preview without uploading. The user sees their image immediately. On submit, FormData.append('image', file) attaches the actual file. The server stores it and returns the path (/uploads/filename.jpg), which React displays as an <img> tag.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Set Content-Type: 'application/json' with FormData → The boundary marker is missing. Multer can't parse the file. Let the browser set the header automatically.",
          "JSON.stringify(formData) → FormData is not a plain object. Stringify produces '{}'. Send the FormData object directly as the body.",
          "Forget app.use('/uploads', express.static('uploads')) → The image path is saved but the file isn't served. <img src='/uploads/file.jpg'> returns 404.",
          "Skip file size/type validation → Users upload 500MB videos or executable files. Always validate on the server.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a profile picture upload to the User model. Create a PUT /api/auth/avatar endpoint. Build a profile page where users can click their avatar to upload a new one. Show a circular preview and update it in the auth context.",
        hint: "Hint: Add avatar field to User schema. The endpoint uses upload.single('avatar'). Update the user document and return the new URL. React updates the auth context with the new user data.",
        solution: `// User schema: add avatar: { type: String, default: '' }

// Route:
router.put('/avatar', auth, upload.single('avatar'), async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId,
    { avatar: \`/uploads/\${req.file.filename}\` }, { new: true }).select('-password');
  res.json(user);
});

// React: Upload then update auth context
const handleAvatar = async (e) => {
  const formData = new FormData();
  formData.append('avatar', e.target.files[0]);
  const res = await authFetch('/api/auth/avatar', { method: 'PUT', headers: {}, body: formData });
  const updatedUser = await res.json();
  setUser(updatedUser); // Update auth context
};`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 7: FULL MERN APP
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: Full MERN App — Everything Combined",
      },
      {
        type: "text",
        content:
          "This final example shows the complete architecture of a real MERN application: Express server with MongoDB, Mongoose models, JWT auth middleware, file uploads, and a React frontend with routing, protected routes, and a reusable API layer. This is the blueprint for every MERN project you'll build.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Complete project structure for a production MERN app",
          "How all the layers (React → Express → MongoDB) connect",
          "Error handling across the full stack",
          "The patterns you'll reuse in every MERN project",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — server/server.js (Complete Entry Point)",
      },
      {
        type: "code",
        content: `// server/server.js — Complete Express setup
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import { auth } from './middleware/auth.js';

dotenv.config();
const app = express();

// ─── Middleware ───
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// ─── Routes ───
app.use('/api/auth', authRoutes);           // Public: login, register
app.use('/api/tasks', auth, taskRoutes);    // Protected: all task routes require auth

// ─── Error handler ───
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

// ─── Connect and Start ───
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(\`Server running on port \${process.env.PORT || 5000}\`)
    );
  })
  .catch(err => console.error('MongoDB error:', err));`,
      },
      {
        type: "boldText",
        content: "Full Code — server/routes/tasks.js (Protected CRUD)",
      },
      {
        type: "code",
        content: `// server/routes/tasks.js — All routes are protected (auth middleware on router)
import express from 'express';
import multer from 'multer';
import path from 'path';
import Task from '../models/Task.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => file.mimetype.startsWith('image/') ? cb(null, true) : cb(new Error('Images only')),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// GET all tasks (for current user)
router.get('/', async (req, res) => {
  try {
    const filter = { user: req.userId };
    if (req.query.status) filter.status = req.query.status;
    if (req.query.search) filter.title = { $regex: req.query.search, $options: 'i' };
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST create
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const taskData = { ...req.body, user: req.userId };
    if (req.file) taskData.image = \`/uploads/\${req.file.filename}\`;
    const task = await Task.create(taskData);
    res.status(201).json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.fromEntries(Object.entries(err.errors).map(([k, v]) => [k, v.message]));
      return res.status(400).json({ errors });
    }
    res.status(500).json({ error: err.message });
  }
});

// PUT update
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId }, // Only update own tasks
      req.body, { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;`,
      },
      {
        type: "boldText",
        content: "Full Code — server/models/Task.js (with User Reference)",
      },
      {
        type: "code",
        content: `// server/models/Task.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'], trim: true, maxlength: 100 },
  description: { type: String, trim: true, default: '' },
  status: { type: String, enum: ['todo', 'inprogress', 'done'], default: 'todo' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  image: { type: String, default: '' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// Only return tasks for the requesting user (added security)
taskSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('Task', taskSchema);`,
      },
      {
        type: "boldText",
        content: "Full Code — client/src/App.jsx (Complete React Frontend)",
      },
      {
        type: "code",
        content: `// client/src/App.jsx
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';

// ─── Protected Route ───
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

// ─── Login/Register ───
function AuthPage() {
  const { login, register, user } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => { if (user) navigate('/dashboard'); }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); setError('');
    try {
      if (isRegister) await register(form.name, form.email, form.password);
      else await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) { setError(err.message); }
  };

  return (
    <div style={{ maxWidth: '350px', margin: '60px auto' }}>
      <h1>{isRegister ? 'Create Account' : 'Login'}</h1>
      {error && <p style={{ color: '#d32f2f', padding: '8px', background: '#ffebee', borderRadius: '6px' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {isRegister && <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Name" style={{ padding: '10px' }} />}
        <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          placeholder="Email" style={{ padding: '10px' }} />
        <input type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
          placeholder="Password" style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '10px' }}>{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsRegister(r => !r)} style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
          {isRegister ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
}

// ─── Dashboard ───
function Dashboard() {
  const { user, logout, authFetch } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch('/api/tasks').then(r => r.json()).then(setTasks)
      .catch(err => setError(err.message)).finally(() => setLoading(false));
  }, [authFetch]);

  const addTask = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      const res = await authFetch('/api/tasks', {
        method: 'POST', body: JSON.stringify({ title: input }),
      });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || 'Failed'); }
      const task = await res.json();
      setTasks(prev => [task, ...prev]); setInput(''); setError(null);
    } catch (err) { setError(err.message); }
  };

  const moveTask = async (id, status) => {
    try {
      const res = await authFetch(\`/api/tasks/\${id}\`, {
        method: 'PUT', body: JSON.stringify({ status }),
      });
      const updated = await res.json();
      setTasks(prev => prev.map(t => t._id === id ? updated : t));
    } catch (err) { setError(err.message); }
  };

  const deleteTask = async (id) => {
    const original = tasks;
    setTasks(prev => prev.filter(t => t._id !== id));
    try {
      const res = await authFetch(\`/api/tasks/\${id}\`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
    } catch (err) { setTasks(original); setError(err.message); }
  };

  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h1>My Tasks</h1>
        <div>👤 {user.name} <button onClick={logout} style={{ marginLeft: '8px' }}>Logout</button></div>
      </header>
      {error && <p style={{ color: '#d32f2f', padding: '8px', background: '#ffebee', borderRadius: '6px', marginBottom: '10px' }}>{error}</p>}
      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: '10px' }} />
        <button type="submit">Add</button>
      </form>
      {loading ? <p>Loading tasks...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {columns.map(col => (
            <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
              <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
              {tasks.filter(t => t.status === col.key).map(task => (
                <div key={task._id} style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
                  {task.image && <img src={task.image} alt="" style={{ width: '100%', borderRadius: '4px', marginBottom: '4px' }} />}
                  <p style={{ margin: '0 0 6px' }}>{task.title}</p>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {columns.filter(c => c.key !== col.key).map(c => (
                      <button key={c.key} onClick={() => moveTask(task._id, c.key)}
                        style={{ fontSize: '11px', padding: '2px 6px' }}>→ {c.key}</button>
                    ))}
                    <button onClick={() => deleteTask(task._id)}
                      style={{ fontSize: '11px', padding: '2px 6px', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── App ───
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<div style={{ padding: '20px' }}><h1>404</h1><Link to="/">Home</Link></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "The full app flow: User visits / → redirects to /dashboard → ProtectedRoute checks auth → no user, redirects to /login → user registers/logs in → token stored, user loaded → redirected to /dashboard → authFetch loads tasks from MongoDB → user creates/moves/deletes tasks → each action calls Express → Express verifies JWT → Mongoose queries MongoDB → response flows back to React.",
      },
      {
        type: "text",
        content:
          "Every task route filters by user: { user: req.userId }. User A cannot see or modify User B's tasks. This is handled at the database query level — even if someone crafts a request with another user's task ID, findOneAndUpdate with { user: req.userId } returns null.",
      },
      {
        type: "text",
        content:
          "The separation of concerns is clear: React handles UI and user interaction. Express handles API logic and auth. MongoDB stores data permanently. Each layer only knows about its adjacent layer — React doesn't know about MongoDB, MongoDB doesn't know about React.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use task.id instead of task._id in React → MongoDB uses _id. Filtering, updating, and deleting by the wrong field finds nothing.",
          "Forget { user: req.userId } in database queries → Any authenticated user can read/modify any other user's tasks. Always scope queries to the current user.",
          "Put auth middleware on the auth routes → Users can't login or register because those routes require a token that doesn't exist yet. Auth routes must be public.",
          "Forget the global error handler → Unhandled errors crash the server. The error middleware catches them and sends a proper JSON response.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a /api/tasks/stats endpoint that returns { total, todo, inprogress, done } counts for the current user. Display a stats bar at the top of the dashboard. Use Mongoose aggregation: Task.aggregate([{ $match: { user: userId } }, { $group: { _id: '$status', count: { $sum: 1 } } }]).",
        hint: "Hint: The aggregate pipeline groups tasks by status and counts each group. Convert the result array into an object for easy consumption in React.",
        solution: `// server/routes/tasks.js — add before other routes:
router.get('/stats', async (req, res) => {
  try {
    const result = await Task.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(req.userId) } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
    const stats = { total: 0, todo: 0, inprogress: 0, done: 0 };
    result.forEach(r => { stats[r._id] = r.count; stats.total += r.count; });
    res.json(stats);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// React: fetch stats alongside tasks
useEffect(() => {
  Promise.all([
    authFetch('/api/tasks/stats').then(r => r.json()),
    authFetch('/api/tasks').then(r => r.json()),
  ]).then(([statsData, tasksData]) => {
    setStats(statsData); setTasks(tasksData);
  }).finally(() => setLoading(false));
}, []);`,
      },

      // ═══════════════════════════════════════════
      // CLOSING
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "What's Next",
      },
      {
        type: "text",
        content:
          "You've built a complete MERN application from scratch: Express API, MongoDB with Mongoose, JWT authentication, file uploads, and a React frontend with routing and protected pages. These patterns are the foundation of every MERN project. Here's your path forward:",
      },
      {
        type: "list",
        items: [
          "Deployment — Deploy your Express API to Railway or Render, your React app to Netlify or Vercel, and your MongoDB to Atlas. Configure environment variables and CORS for production URLs.",
          "React Query — Replace manual useEffect fetching with React Query for automatic caching, background refetching, optimistic updates, and pagination. It handles everything your useFetch hook does, plus more.",
          "Socket.io — Add real-time features like live updates, notifications, and chat. When one user creates a task, other users see it instantly without refreshing.",
          "Testing — Test your Express routes with Supertest, your React components with React Testing Library, and your API integration with end-to-end tests.",
          "TypeScript — Add type safety across the full stack. Define shared types for your API request/response shapes so React and Express stay in sync.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export  {mernIntegrationData};