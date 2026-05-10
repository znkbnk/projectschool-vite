import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-custom-hooks-guide`,title:`The Definitive Guide to React Custom Hooks`,image:`/images/customHooks.webp`,paragraphs:[{type:`text`,content:`Welcome to the Definitive Guide to React Custom Hooks. You've learned useState, useEffect, useContext, and useReducer — now it's time to learn the pattern that ties them all together. Custom hooks let you extract component logic into reusable functions. A useFetch hook can handle loading, errors, and caching for any API call. A useLocalStorage hook can persist any state value. A useForm hook can manage validation for any form. Once you build a library of custom hooks, new features take minutes instead of hours. This guide teaches you to build seven production-ready hooks, each one progressively more powerful.`},{type:`title`,content:`What Are Custom Hooks?`},{type:`text`,content:`A custom hook is a JavaScript function whose name starts with 'use' and that calls other hooks. That's it. There's no special API, no registration, no magic — it's just a function. The 'use' prefix tells React to enforce the rules of hooks (only call at the top level, only call from React functions).`},{type:`code`,content:`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

// Using it — just like any built-in hook
function MyComponent() {
  const { count, increment, decrement, reset } = useCounter(10);
  // Each component calling useCounter gets its OWN independent state
}`},{type:`boldText`,content:`Why Custom Hooks Matter`},{type:`list`,items:[`Reusability: Write fetch logic once. Use it in 50 components. Every component that needs API data calls useFetch(url) instead of duplicating loading/error/data handling.`,`Separation of concerns: Components focus on rendering. Hooks handle logic. If you switch from fetch to axios, you change one hook, not 50 components.`,`Testability: Custom hooks are just functions. Test them in isolation without rendering components.`,`Composition: Hooks can call other hooks. useAuth might use useLocalStorage for tokens and useFetch for user data.`,`Readability: const { data, loading } = useFetch(url) is instantly clear. The 20 lines of implementation are hidden inside the hook.`]},{type:`title`,content:`Rules and Conventions`},{type:`boldText`,content:`The Rules (Enforced by React)`},{type:`list`,items:[`Name must start with 'use': useCounter, useFetch, useLocalStorage. Without the prefix, React won't enforce hook rules inside it.`,`Can only be called from React functions: Components or other custom hooks. Never from regular functions, loops, or conditions.`,`Must call hooks at the top level: No hooks inside if-statements, loops, or nested functions.`]},{type:`boldText`,content:`The Conventions (Best Practices)`},{type:`list`,items:[`One hook, one job: useLocalStorage handles persistence. useFetch handles API calls. Don't build useEverything.`,`Return what consumers need: Return an object for multiple values, or a tuple [value, setValue] for simple state hooks.`,`Accept configuration through parameters: useFetch(url, options), useDebounce(value, delay).`,`Handle cleanup: If your hook sets up listeners, timers, or subscriptions, clean them up in useEffect.`,`One file per hook: Name the file after the hook: useLocalStorage.js. Keep hooks in a hooks/ directory.`]},{type:`boldText`,content:`When to Extract a Custom Hook`},{type:`text`,content:`Extract a custom hook when: (1) The same useState + useEffect combination appears in multiple components. (2) A component has complex logic that obscures its rendering purpose. (3) You're writing a reusable pattern (fetch, form, timer, media query). Don't extract prematurely — if the logic only exists in one component, leave it there until you need it elsewhere.`},{type:`title`,content:`Common Pitfalls`},{type:`boldText`,content:`1. Thinking Custom Hooks Share State`},{type:`code`,content:`// MISCONCEPTION: Two components using useCounter share the same count
// REALITY: Each call creates INDEPENDENT state

function ComponentA() {
  const { count } = useCounter(); // Own count: 0, 1, 2...
}
function ComponentB() {
  const { count } = useCounter(); // Own count: 0, 1, 2... (separate)
}

// If you NEED shared state, use useContext inside the hook:
function useSharedCounter() {
  const { count, dispatch } = useContext(CounterContext);
  return { count, increment: () => dispatch({ type: 'INCREMENT' }) };
}`},{type:`boldText`,content:`2. Breaking Hook Rules Inside Custom Hooks`},{type:`code`,content:`// BUG: Conditional hook call
function useMaybeTimer(enabled) {
  if (enabled) {
    const [time, setTime] = useState(0); // Called conditionally — breaks React!
    useEffect(() => { /* ... */ }, []);
    return time;
  }
  return 0;
}

// FIX: Always call hooks, use conditions INSIDE them
function useTimer(enabled) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (!enabled) return; // Condition inside the effect
    const timer = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, [enabled]);
  return time;
}`},{type:`boldText`,content:`3. Returning Unstable References`},{type:`code`,content:`// PROBLEM: New function created every render
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c + 1); // New function every render!
  return { count, increment };
}

// FIX: useCallback for stable function references
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(c => c + 1), []);
  return { count, increment };
}`},{type:`title`,content:`Example 1: useToggle — Your First Custom Hook`},{type:`text`,content:`The simplest useful custom hook: wrapping a boolean useState with named actions. Instead of repeating const [isOpen, setIsOpen] = useState(false) and onClick={() => setIsOpen(o => !o)} in every component, you write const [isOpen, toggle] = useToggle().`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Extracting useState into a reusable hook`,`Returning a tuple [value, actions] like built-in hooks`,`Using the same hook in multiple independent components`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return [value, { toggle, setTrue, setFalse }];
}

// Three components, one hook, three independent states
function Navbar() {
  const [menuOpen, { toggle }] = useToggle(false);
  return (
    <nav style={{ borderBottom: '1px solid #eee', padding: '12px' }}>
      <button onClick={toggle}>{menuOpen ? '✕' : '☰'} Menu</button>
      {menuOpen && <ul style={{ listStyle: 'none', padding: '10px 0' }}><li>Home</li><li>About</li><li>Contact</li></ul>}
    </nav>
  );
}

function FAQ({ question, answer }) {
  const [open, { toggle }] = useToggle(false);
  return (
    <div style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
      <button onClick={toggle} style={{ background: 'none', border: 'none', cursor: 'pointer',
        fontWeight: 'bold', fontSize: '16px', width: '100%', textAlign: 'left',
        display: 'flex', justifyContent: 'space-between' }}>
        {question} <span>{open ? '▲' : '▼'}</span>
      </button>
      {open && <p style={{ padding: '10px 0', color: '#555' }}>{answer}</p>}
    </div>
  );
}

function DarkModeToggle() {
  const [dark, { toggle }] = useToggle(false);
  return (
    <div style={{ background: dark ? '#1e1e1e' : '#fff', color: dark ? '#eee' : '#333',
      padding: '20px', borderRadius: '10px', transition: 'all 0.3s' }}>
      <button onClick={toggle}>{dark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <Navbar />
      <DarkModeToggle />
      <h2 style={{ marginTop: '20px' }}>FAQ</h2>
      <FAQ question="What are custom hooks?" answer="Functions starting with 'use' that call other hooks." />
      <FAQ question="Do they share state?" answer="No! Each call creates independent state." />
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useToggle wraps one useState and returns [value, { toggle, setTrue, setFalse }]. useCallback on each function ensures stable references. Three components use it for completely different purposes (menu, accordion, theme) — the hook doesn't know or care what it's used for.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Name it toggleState instead of useToggle → React won't enforce hook rules inside it.`,`Return setValue directly → Consumers must write setValue(v => !v) everywhere, defeating the purpose of the abstraction.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Create a useDisclosure hook that extends useToggle with onOpen and onClose callbacks. Build a modal component that logs 'opened' and 'closed' to the console.`,hint:`Hint: Accept { onOpen, onClose } as config. In setTrue, call onOpen?.(). In setFalse, call onClose?.().`,solution:`function useDisclosure({ onOpen, onClose } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => { setIsOpen(true); onOpen?.(); }, [onOpen]);
  const close = useCallback(() => { setIsOpen(false); onClose?.(); }, [onClose]);
  const toggle = useCallback(() => setIsOpen(prev => { prev ? onClose?.() : onOpen?.(); return !prev; }), [onOpen, onClose]);
  return { isOpen, open, close, toggle };
}

// Usage:
const modal = useDisclosure({ onOpen: () => console.log('opened'), onClose: () => console.log('closed') });`},{type:`title`,content:`Example 2: useLocalStorage — Persistent State`},{type:`text`,content:`A drop-in replacement for useState that automatically reads from and writes to localStorage. Any state managed with this hook survives page refreshes. The API is identical to useState — just swap it in.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Combining useState + useEffect in a custom hook`,`Lazy initialisation (reading localStorage on first render only)`,`Making the hook API match useState exactly`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect, useCallback } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch { return initialValue; }
  });

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (err) { console.error('useLocalStorage write error:', err); }
  }, [key, value]);

  const remove = useCallback(() => {
    localStorage.removeItem(key);
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, remove];
}

// Usage: Notes app with persistent storage
function PersistentNotes() {
  const [notes, setNotes, clearNotes] = useLocalStorage('my-notes', []);
  const [theme, setTheme] = useLocalStorage('notes-theme', 'light');
  const [input, setInput] = useState('');
  const isDark = theme === 'dark';

  const addNote = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setNotes(prev => [...prev, { id: Date.now(), text: input, date: new Date().toLocaleDateString() }]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto', padding: '20px',
      background: isDark ? '#1e1e1e' : '#fff', color: isDark ? '#eee' : '#333', borderRadius: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Notes ({notes.length})</h1>
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{isDark ? '☀️' : '🌙'}</button>
      </div>
      <p style={{ color: '#888', fontSize: '13px' }}>↻ Everything persists — refresh the page!</p>
      <form onSubmit={addNote} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Write a note..." style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>
      {notes.map(note => (
        <div key={note.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px',
          borderBottom: \`1px solid \${isDark ? '#333' : '#eee'}\` }}>
          <div><p style={{ margin: 0 }}>{note.text}</p><small style={{ color: '#888' }}>{note.date}</small></div>
          <button onClick={() => setNotes(prev => prev.filter(n => n.id !== note.id))}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
        </div>
      ))}
      {notes.length > 0 && <button onClick={clearNotes} style={{ color: '#d32f2f', background: 'none', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Clear all</button>}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`The hook has the exact same API as useState: const [value, setValue] = useLocalStorage(key, initial), plus a bonus remove function. The consuming component doesn't know localStorage is involved. Lazy initialisation ensures localStorage is read only once on mount, not every render.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Read localStorage in useEffect instead of lazy init → First render shows initialValue, then re-renders with stored value. Flash of empty content.`,`Forget JSON.parse/stringify → localStorage stores strings only. An array becomes '[object Object]'.`,`Skip try/catch → Private browsing mode throws errors that crash the component.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a useSessionStorage hook (same API, uses sessionStorage instead). Then build a useStorage(key, initial, storageType) hook that accepts 'local' or 'session' and delegates to the right storage.`,hint:`Hint: const storage = storageType === 'session' ? sessionStorage : localStorage. Use this variable everywhere instead of localStorage directly.`,solution:`function useStorage(key, initialValue, storageType = 'local') {
  const storage = storageType === 'session' ? sessionStorage : localStorage;
  const [value, setValue] = useState(() => {
    try { return JSON.parse(storage.getItem(key)) ?? initialValue; }
    catch { return initialValue; }
  });
  useEffect(() => {
    try { storage.setItem(key, JSON.stringify(value)); }
    catch (err) { console.error(err); }
  }, [key, value, storage]);
  const remove = useCallback(() => { storage.removeItem(key); setValue(initialValue); }, [key, initialValue, storage]);
  return [value, setValue, remove];
}`},{type:`title`,content:`Example 3: useFetch — Reusable Data Fetching`},{type:`text`,content:`Every React app fetches data. Instead of writing loading/error/data state, AbortController, and cleanup in every component, extract it into useFetch. This hook uses useReducer internally for the state machine pattern and handles everything in one line.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`useReducer inside a custom hook for complex internal state`,`AbortController cleanup for cancelling stale requests`,`Exposing a refetch function to consumers`,`Reusing the same hook for different API endpoints`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useReducer, useEffect, useCallback, useState } from 'react';

function fetchReducer(state, action) {
  switch (action.type) {
    case 'LOADING': return { status: 'loading', data: null, error: null };
    case 'SUCCESS': return { status: 'success', data: action.payload, error: null };
    case 'ERROR':   return { status: 'error', data: null, error: action.payload };
    default: throw new Error(\`Unknown: \${action.type}\`);
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, { status: url ? 'loading' : 'idle', data: null, error: null });
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    dispatch({ type: 'LOADING' });

    fetch(url, { signal: controller.signal })
      .then(res => { if (!res.ok) throw new Error(\`HTTP \${res.status}\`); return res.json(); })
      .then(data => dispatch({ type: 'SUCCESS', payload: data }))
      .catch(err => { if (err.name !== 'AbortError') dispatch({ type: 'ERROR', payload: err.message }); });

    return () => controller.abort();
  }, [url, refreshCount]);

  const refetch = useCallback(() => setRefreshCount(c => c + 1), []);
  return { ...state, refetch };
}

// Usage 1: Simple user directory
function UserDirectory() {
  const { data, status, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Users</h1>
        <button onClick={refetch}>↻ Refresh</button>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p style={{ color: 'red' }}>{error} <button onClick={refetch}>Retry</button></p>}
      {status === 'success' && data.map(user => (
        <div key={user.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <strong>{user.name}</strong>
          <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// Usage 2: Dynamic category → products
function ProductBrowser() {
  const [category, setCategory] = useState('');
  const cats = useFetch('https://dummyjson.com/products/categories');
  const products = useFetch(category ? \`https://dummyjson.com/products/category/\${category}\` : null);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Products</h1>
      {cats.status === 'success' && (
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px' }}>
          <option value="">Select category</option>
          {cats.data.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
      )}
      {products.status === 'loading' && <p>Loading...</p>}
      {products.status === 'success' && products.data.products.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '12px', padding: '8px', borderBottom: '1px solid #eee' }}>
          <img src={p.thumbnail} alt={p.title} width={50} height={50} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div><strong>{p.title}</strong><p style={{ color: '#666' }}>£{p.price}</p></div>
        </div>
      ))}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useReducer is used internally — consumers never see it. The hook returns { status, data, error, refetch }. Passing null as the URL skips the fetch. The cleanup aborts any in-flight request when the URL changes or the component unmounts.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use separate useState for status/data/error → Possible impossible states (loading + error simultaneously). The reducer prevents this.`,`Forget AbortController → Changing categories rapidly causes stale data from old requests overwriting fresh data.`,`Pass a new object as URL each render → useEffect sees a different reference every time and refetches infinitely.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add caching using useRef. Store fetched data by URL. On subsequent calls to the same URL, return cached data immediately while refetching in the background (stale-while-revalidate).`,hint:`Hint: const cache = useRef({}). Before dispatching LOADING, check cache.current[url]. If found, dispatch SUCCESS with cached data. Still fetch fresh data and update cache on success.`,solution:`function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, { status: 'idle', data: null, error: null });
  const [refresh, setRefresh] = useState(0);
  const cache = useRef({});

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    if (cache.current[url]) dispatch({ type: 'SUCCESS', payload: cache.current[url] });
    else dispatch({ type: 'LOADING' });

    fetch(url, { signal: controller.signal }).then(r => r.json())
      .then(data => { cache.current[url] = data; dispatch({ type: 'SUCCESS', payload: data }); })
      .catch(err => { if (err.name !== 'AbortError') dispatch({ type: 'ERROR', payload: err.message }); });
    return () => controller.abort();
  }, [url, refresh]);

  return { ...state, refetch: useCallback(() => setRefresh(c => c + 1), []) };
}`},{type:`title`,content:`Example 4: useDebounce — Timing Logic`},{type:`text`,content:`Debouncing delays an action until the user stops doing something — stops typing, stops scrolling, stops resizing. Instead of firing 10 API calls while typing 'React hooks', you fire 1 after the user pauses. This hook takes any value and returns a debounced version that only updates after a delay.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`useEffect with setTimeout/clearTimeout in a custom hook`,`Returning a delayed version of a fast-changing value`,`Composing hooks: useDebounce + useFetch for debounced search`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage: Debounced search — only fetches after user stops typing
function ProductSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  const { data, status } = useFetch(
    debouncedQuery ? \`https://dummyjson.com/products/search?q=\${debouncedQuery}\` : null
  );

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Product Search</h1>
      <input value={query} onChange={e => setQuery(e.target.value)}
        placeholder="Search products..." style={{ width: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '16px' }} />
      <p style={{ color: '#999', fontSize: '13px' }}>
        Typing: "{query}" → Searching: "{debouncedQuery}"
      </p>
      {status === 'loading' && <p>Searching...</p>}
      {status === 'success' && (
        <>
          <p>{data.total} results</p>
          {data.products.map(p => (
            <div key={p.id} style={{ display: 'flex', gap: '12px', padding: '10px', borderBottom: '1px solid #eee' }}>
              <img src={p.thumbnail} alt={p.title} width={50} height={50} style={{ borderRadius: '8px', objectFit: 'cover' }} />
              <div><strong>{p.title}</strong><p style={{ color: '#666' }}>£{p.price}</p></div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useDebounce is deceptively simple: it takes a value, waits for the delay, then updates the debounced version. The cleanup (clearTimeout) resets the timer every time the value changes. So if the user types 'react' in 300ms, only the final 't' triggers the update after 400ms of silence.`},{type:`text`,content:`The power is in composition: useDebounce + useFetch = debounced search. The component types into query (fast). useDebounce produces debouncedQuery (slow, 400ms delay). useFetch receives debouncedQuery as the URL dependency and only fetches when it changes. Three hooks, zero complexity in the component.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Forget clearTimeout cleanup → Timers stack up. Typing 'react' fires 5 delayed updates instead of 1.`,`Pass query directly to useFetch instead of debouncedQuery → Every keystroke fires a fetch. 'react' = 5 API calls instead of 1.`,`Set delay to 0 → Still works but provides no debouncing benefit. The state update is deferred by one microtask.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Create a useDebouncedCallback hook that debounces a function instead of a value. It takes a callback and a delay, and returns a debounced version of the callback. Use it to build a search that calls a custom handler after typing stops.`,hint:`Hint: Use useRef to store the timeout. Use useCallback to return a stable debounced function. Clear the previous timeout on each call.`,solution:`function useDebouncedCallback(callback, delay = 500) {
  const timerRef = useRef(null);

  const debouncedFn = useCallback((...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return debouncedFn;
}

// Usage:
function Search() {
  const [results, setResults] = useState([]);
  const debouncedSearch = useDebouncedCallback(async (query) => {
    const res = await fetch(\`https://dummyjson.com/products/search?q=\${query}\`);
    const data = await res.json();
    setResults(data.products);
  }, 400);

  return <input onChange={e => debouncedSearch(e.target.value)} placeholder="Search..." />;
}`},{type:`title`,content:`Example 5: useMediaQuery — Responsive Hooks`},{type:`text`,content:`CSS media queries handle responsive styling, but sometimes you need responsive logic — showing different components, changing behaviour, or loading different data based on screen size. useMediaQuery listens for media query changes and returns a boolean, letting your components respond to viewport changes in real time.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`useEffect with window.matchMedia API`,`Event listener cleanup in custom hooks`,`Building higher-level hooks from useMediaQuery (useIsMobile, useBreakpoint)`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    // Modern browsers
    mediaQuery.addEventListener('change', handler);
    // Set initial value
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Convenience hooks built on top
function useIsMobile() { return useMediaQuery('(max-width: 768px)'); }
function useIsTablet() { return useMediaQuery('(min-width: 769px) and (max-width: 1024px)'); }
function useIsDesktop() { return useMediaQuery('(min-width: 1025px)'); }
function usePrefersColorScheme() { return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'; }

// Usage: Responsive layout
function ResponsiveApp() {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const prefersScheme = usePrefersColorScheme();

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
      <h1>Responsive Hooks</h1>
      <div style={{
        display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px',
      }}>
        <span style={{ padding: '4px 12px', borderRadius: '15px',
          background: isMobile ? '#4CAF50' : '#eee', color: isMobile ? '#fff' : '#333' }}>
          📱 Mobile
        </span>
        <span style={{ padding: '4px 12px', borderRadius: '15px',
          background: !isMobile && !isDesktop ? '#2196F3' : '#eee', color: !isMobile && !isDesktop ? '#fff' : '#333' }}>
          📋 Tablet
        </span>
        <span style={{ padding: '4px 12px', borderRadius: '15px',
          background: isDesktop ? '#9C27B0' : '#eee', color: isDesktop ? '#fff' : '#333' }}>
          🖥️ Desktop
        </span>
      </div>

      <p>System theme preference: {prefersScheme}</p>

      {/* Different layouts based on screen size */}
      {isMobile ? (
        <div>
          <h2>Mobile View</h2>
          <p>Showing simplified single-column layout.</p>
          {['Feature A', 'Feature B', 'Feature C'].map(f => (
            <div key={f} style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{f}</div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Desktop View</h2>
          <p>Showing full grid layout with details.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {['Feature A', 'Feature B', 'Feature C'].map(f => (
              <div key={f} style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px', textAlign: 'center' }}>{f}</div>
            ))}
          </div>
        </div>
      )}

      <p style={{ color: '#999', fontSize: '13px', marginTop: '20px' }}>
        Resize your browser window to see the layout change in real time.
      </p>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useMediaQuery wraps the browser's matchMedia API in a reactive hook. When the viewport changes and crosses a breakpoint, the event listener fires, state updates, and the component re-renders with the new layout. The cleanup removes the listener on unmount or when the query string changes.`},{type:`text`,content:`The convenience hooks (useIsMobile, useIsDesktop, usePrefersColorScheme) are one-line compositions. They call useMediaQuery with a specific query string. This is custom hooks composing custom hooks — the simplest form of hook composition.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Forget to remove the event listener → Memory leak. Every mount adds a listener that's never cleaned up. After navigating between pages several times, dozens of orphaned listeners accumulate.`,`Use window.innerWidth in a setInterval → Polling instead of event-driven. Wasteful, laggy, and misses rapid changes. matchMedia fires exactly when the breakpoint crosses.`,`Skip the SSR guard (typeof window === 'undefined') → Crashes during server-side rendering because window doesn't exist.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Create a useBreakpoint hook that returns the current breakpoint as a string: 'xs' (<480), 'sm' (480-768), 'md' (768-1024), 'lg' (1024-1280), 'xl' (>1280). Use multiple useMediaQuery calls internally.`,hint:`Hint: Call useMediaQuery for each breakpoint. Use conditional logic to determine which breakpoint is active. Return the string.`,solution:`function useBreakpoint() {
  const isXs = useMediaQuery('(max-width: 479px)');
  const isSm = useMediaQuery('(min-width: 480px) and (max-width: 767px)');
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isLg = useMediaQuery('(min-width: 1024px) and (max-width: 1279px)');
  // xl is the default if none match

  if (isXs) return 'xs';
  if (isSm) return 'sm';
  if (isMd) return 'md';
  if (isLg) return 'lg';
  return 'xl';
}

// Usage:
const breakpoint = useBreakpoint();
const columns = { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }[breakpoint];`},{type:`title`,content:`Example 6: useForm — Complex Reusable Logic`},{type:`text`,content:`Forms are the most common source of duplicated logic in React apps. Every form needs field values, change handlers, validation, touched tracking, and submit handling. useForm encapsulates all of this into a single hook — define your fields, pass your validation rules, and the hook handles everything.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`useReducer inside a custom hook for complex internal state`,`Accepting configuration (fields, validation rules) as parameters`,`Returning a rich API: values, errors, handlers, status`,`Making the hook genuinely reusable across different forms`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useReducer, useCallback } from 'react';

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE': {
      const { field, value } = action;
      return {
        ...state,
        values: { ...state.values, [field]: value },
        touched: { ...state.touched, [field]: true },
      };
    }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SUBMIT':
      return { ...state, submitted: true };
    case 'RESET':
      return action.initialState;
    default:
      throw new Error(\`Unknown: \${action.type}\`);
  }
}

function useForm({ initialValues, validate, onSubmit }) {
  const initialState = {
    values: initialValues,
    errors: {},
    touched: {},
    submitted: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = useCallback((field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    dispatch({ type: 'CHANGE', field, value });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const errors = validate ? validate(state.values) : {};
    dispatch({ type: 'SET_ERRORS', errors });
    if (Object.keys(errors).length === 0) {
      dispatch({ type: 'SUBMIT' });
      onSubmit?.(state.values);
    }
  }, [state.values, validate, onSubmit]);

  const reset = useCallback(() => dispatch({ type: 'RESET', initialState }), [initialState]);

  // Helper: get props for an input field
  const getFieldProps = useCallback((field) => ({
    name: field,
    value: state.values[field] ?? '',
    onChange: handleChange(field),
  }), [state.values, handleChange]);

  const isValid = Object.keys(state.errors).length === 0 &&
    Object.values(state.values).some(v => v !== '' && v !== false);

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    submitted: state.submitted,
    isValid,
    handleChange,
    handleSubmit,
    getFieldProps,
    reset,
  };
}

// Usage 1: Registration form
function RegistrationForm() {
  const form = useForm({
    initialValues: { name: '', email: '', password: '', terms: false },
    validate: (values) => {
      const errors = {};
      if (values.name.length < 2) errors.name = 'Name must be 2+ characters';
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email)) errors.email = 'Invalid email';
      if (values.password.length < 8) errors.password = '8+ characters required';
      if (!values.terms) errors.terms = 'You must accept the terms';
      return errors;
    },
    onSubmit: (values) => alert(\`Welcome, \${values.name}!\`),
  });

  if (form.submitted) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>✅ Welcome, {form.values.name}!</h2>
      <button onClick={form.reset}>Register another</button>
    </div>;
  }

  const fieldStyle = (field) => ({
    width: '100%', padding: '10px', boxSizing: 'border-box',
    border: \`1px solid \${form.touched[field] && form.errors[field] ? '#d32f2f' : '#ddd'}\`,
    borderRadius: '6px',
  });

  return (
    <form onSubmit={form.handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Register</h1>
      {['name', 'email', 'password'].map(field => (
        <div key={field} style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input type={field === 'password' ? 'password' : 'text'}
            {...form.getFieldProps(field)} style={fieldStyle(field)} />
          {form.touched[field] && form.errors[field] && (
            <p style={{ color: '#d32f2f', fontSize: '12px', margin: '4px 0 0' }}>{form.errors[field]}</p>
          )}
        </div>
      ))}
      <label style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
        <input type="checkbox" checked={form.values.terms} onChange={form.handleChange('terms')} />
        I accept the terms and conditions
      </label>
      {form.touched.terms && form.errors.terms && (
        <p style={{ color: '#d32f2f', fontSize: '12px' }}>{form.errors.terms}</p>
      )}
      <button type="submit" style={{ width: '100%', padding: '12px', background: '#1976d2',
        color: '#fff', border: 'none', borderRadius: '6px' }}>Create Account</button>
    </form>
  );
}

// Usage 2: Contact form — same hook, different config
function ContactForm() {
  const form = useForm({
    initialValues: { name: '', message: '' },
    validate: (values) => {
      const errors = {};
      if (!values.name.trim()) errors.name = 'Name required';
      if (values.message.length < 10) errors.message = '10+ characters required';
      return errors;
    },
    onSubmit: (values) => alert(\`Message from \${values.name}: \${values.message}\`),
  });

  return (
    <form onSubmit={form.handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Contact Us</h1>
      <input placeholder="Name" {...form.getFieldProps('name')} style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }} />
      <textarea placeholder="Your message..." {...form.getFieldProps('message')}
        style={{ width: '100%', padding: '8px', minHeight: '100px', boxSizing: 'border-box' }} />
      <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>Send</button>
    </form>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useForm accepts a configuration object: initialValues (the form fields), validate (a function that returns errors), and onSubmit (called on successful submission). It returns everything the form needs: values, errors, touched status, handlers, and helpers.`},{type:`text`,content:`getFieldProps(field) is the key convenience: it returns { name, value, onChange } for any field. Spreading {...form.getFieldProps('email')} onto an input wires it up completely. This eliminates the repetitive value={form.values.email} onChange={form.handleChange('email')} pattern.`},{type:`text`,content:`Two completely different forms — registration (4 fields, complex validation, terms checkbox) and contact (2 fields, simple validation) — use the exact same hook. The configuration is different, but the logic is shared. Adding a third form takes 10 lines.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Define the hook inside the component → New hook instance every render. State resets on every keystroke. Hooks must be called at the top level, but defined at module level.`,`Forget useCallback on handleChange → Every render creates new onChange functions. Memoised inputs re-render unnecessarily.`,`Validate on every keystroke instead of on submit → Errors flash while the user is still typing. Validate on submit, show errors after touch.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add real-time validation to useForm. Add a validateOnChange option. When enabled, run the validate function after every field change (debounced by 300ms) and update errors. Keep the on-submit validation as a fallback.`,hint:`Hint: Add a useEffect inside useForm that watches [state.values]. When validateOnChange is true, debounce the validation with setTimeout and update errors via dispatch.`,solution:`// Add inside useForm, after the reducer:
useEffect(() => {
  if (!validateOnChange || !validate) return;
  const timer = setTimeout(() => {
    const errors = validate(state.values);
    dispatch({ type: 'SET_ERRORS', errors });
  }, 300);
  return () => clearTimeout(timer);
}, [state.values, validate, validateOnChange]);

// Usage:
const form = useForm({
  initialValues: { email: '' },
  validate: (v) => !/^[^\\s@]+@[^\\s@]+/.test(v.email) ? { email: 'Invalid' } : {},
  validateOnChange: true,
  onSubmit: (v) => console.log(v),
});`},{type:`title`,content:`Example 7: Composing Hooks — Building a Hook Library`},{type:`text`,content:`The real power of custom hooks is composition: hooks calling other hooks. This example builds a useAuth hook that combines useLocalStorage (for token persistence), useFetch (for user data), and custom logic (login/logout) into a single, production-ready authentication hook. This is how professional React codebases work.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Custom hooks calling other custom hooks`,`Building complex features from simple hook primitives`,`The hook library pattern used in production codebases`,`How small hooks compose into powerful abstractions`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect, useCallback, useReducer, useRef } from 'react';

// ─── Primitive hooks (from earlier examples) ───

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initialValue; }
    catch { return initialValue; }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (err) { console.error(err); }
  }, [key, value]);
  const remove = useCallback(() => { localStorage.removeItem(key); setValue(initialValue); }, [key, initialValue]);
  return [value, setValue, remove];
}

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, { toggle, setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []) }];
}

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// ─── Composed hook: useAuth ───

function useAuth() {
  const [token, setToken, removeToken] = useLocalStorage('auth-token', null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Auto-load user when token exists
  useEffect(() => {
    if (!token) { setUser(null); return; }
    setLoading(true);
    // Simulate API: validate token → get user
    const timer = setTimeout(() => {
      if (token === 'valid-token-alice') {
        setUser({ name: 'Alice', email: 'alice@test.com', role: 'admin' });
      } else if (token === 'valid-token-bob') {
        setUser({ name: 'Bob', email: 'bob@test.com', role: 'user' });
      } else {
        setUser(null);
        removeToken();
      }
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [token, removeToken]);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    await new Promise(r => setTimeout(r, 1000));
    if (email === 'alice@test.com' && password === 'password') {
      setToken('valid-token-alice');
    } else if (email === 'bob@test.com' && password === 'password') {
      setToken('valid-token-bob');
    } else {
      setError('Invalid credentials');
      setLoading(false);
    }
  }, [setToken]);

  const logout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [removeToken]);

  return { user, loading, error, isAuthenticated: !!user, login, logout };
}

// ─── Composed hook: useSearch ───

function useSearch(baseUrl) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedQuery.trim()) { setResults([]); return; }
    const controller = new AbortController();
    setLoading(true);
    fetch(\`\${baseUrl}?q=\${debouncedQuery}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => { setResults(data.products || data.users || []); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    return () => controller.abort();
  }, [debouncedQuery, baseUrl]);

  return { query, setQuery, results, loading, debouncedQuery };
}

// ─── App using composed hooks ───

function App() {
  const auth = useAuth();
  const search = useSearch('https://dummyjson.com/products/search');
  const [showSearch, { toggle: toggleSearch }] = useToggle(false);

  if (auth.loading && !auth.user) return <p style={{ padding: '20px' }}>Loading...</p>;

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
        <h2>App</h2>
        {auth.isAuthenticated ? (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span>👤 {auth.user.name} ({auth.user.role})</span>
            <button onClick={auth.logout}>Logout</button>
          </div>
        ) : <span style={{ color: '#999' }}>Not logged in</span>}
      </header>

      {!auth.isAuthenticated ? (
        <LoginForm auth={auth} />
      ) : (
        <div style={{ padding: '20px 0' }}>
          <p>Welcome back, {auth.user.name}! Your session persists — refresh the page.</p>
          <button onClick={toggleSearch} style={{ marginBottom: '15px' }}>
            {showSearch ? 'Hide Search' : '🔍 Search Products'}
          </button>
          {showSearch && (
            <div>
              <input value={search.query} onChange={e => search.setQuery(e.target.value)}
                placeholder="Search..." style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
              {search.loading && <p>Searching...</p>}
              {search.results.map(p => (
                <div key={p.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                  <strong>{p.title}</strong> — £{p.price}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LoginForm({ auth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); auth.login(email, password); }}
      style={{ padding: '20px 0' }}>
      <h2>Login</h2>
      {auth.error && <p style={{ color: '#d32f2f' }}>{auth.error}</p>}
      <input type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="Email" style={{ width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)}
        placeholder="Password" style={{ width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }} />
      <button type="submit" disabled={auth.loading} style={{ width: '100%', padding: '10px' }}>
        {auth.loading ? 'Logging in...' : 'Login'}
      </button>
      <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>Try: alice@test.com / password</p>
    </form>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useAuth composes useLocalStorage for token persistence. When the user logs in, the token is saved to localStorage. On page refresh, useLocalStorage reads the token, the useEffect validates it, and the user is automatically re-authenticated. Logout removes the token from both state and localStorage.`},{type:`text`,content:`useSearch composes useDebounce. The user types a query (fast updates), useDebounce produces a delayed version (400ms), and the fetch effect only runs when the debounced value changes. The entire debouncing logic is invisible — useSearch just calls useDebounce and uses the result.`},{type:`text`,content:`The App component uses three custom hooks: useAuth, useSearch, and useToggle. Each hook encapsulates its own state and logic. The component is almost entirely JSX — rendering, not logic. If any hook's implementation changes (switch from localStorage to cookies, switch from fetch to axios), the component doesn't change at all.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Call useAuth conditionally: if (showLogin) { const auth = useAuth() } → Breaks hook ordering rules. Always call hooks at the top level, unconditionally.`,`Copy-paste useLocalStorage's code into useAuth instead of calling it → Loses the reusability. When you fix a bug in useLocalStorage, you'd have to fix it in useAuth too.`,`Forget to clean up the timer in useAuth's useEffect → Unmounting during the simulated API call sets state on an unmounted component.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Create a useNotifications hook that composes useLocalStorage (for read/unread state) and useToggle (for the notification panel). It should provide: notifications array, unreadCount, markAsRead(id), markAllRead, isOpen/toggle for the panel. Wire it into the App alongside useAuth.`,hint:`Hint: Store notifications in useLocalStorage. Derive unreadCount during the hook. markAsRead maps over the array and sets read: true. Use useToggle for the panel open/close state.`,solution:`function useNotifications() {
  const [notifications, setNotifications] = useLocalStorage('notifications', [
    { id: 1, text: 'Welcome to the app!', read: false },
    { id: 2, text: 'You have a new message', read: false },
  ]);
  const [isOpen, { toggle, setFalse: close }] = useToggle(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = useCallback((id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, [setNotifications]);

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, [setNotifications]);

  const addNotification = useCallback((text) => {
    setNotifications(prev => [...prev, { id: Date.now(), text, read: false }]);
  }, [setNotifications]);

  return { notifications, unreadCount, markAsRead, markAllRead, addNotification, isOpen, toggle, close };
}`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've built seven production-ready custom hooks and learned the pattern that professional React developers use every day: extract logic into hooks, compose hooks into features, keep components focused on rendering. Here's your path forward:`},{type:`list`,items:[`Build a hook library — Create a hooks/ folder in your project. Start with useToggle, useLocalStorage, useFetch, useDebounce. Add hooks as you identify repeated patterns.`,`React Hook Libraries — Study popular libraries: usehooks-ts, react-use, ahooks. They're collections of production-tested hooks you can learn from or use directly.`,`Testing hooks — Use @testing-library/react-hooks to test your hooks in isolation. Since hooks are pure logic, they're the easiest part of React to unit test.`,`State management — Your useReducer + useContext + custom hooks combination is a lightweight state management solution. When it's not enough, explore Zustand, Redux Toolkit, or Jotai.`]},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),h=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),g=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,_=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||g(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(h,{}):(0,f.jsx)(m,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},v=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let n=(e,t)=>{let n=a[e]||t[0]?.id;return t.find(e=>e.id===n)?.code||t[0]?.code||``},[a,o]=(0,l.useState)(t),[c,d]=(0,l.useState)(null),[p,m]=(0,l.useState)([]),[h,g]=(0,l.useState)({}),[v,y]=(0,l.useState)(!1),[b,x]=(0,l.useState)({});(0,l.useEffect)(()=>{let e=localStorage.getItem(`CustomHooksGuideCheckedTitles`);e&&x(JSON.parse(e))},[]);let S=(0,l.useRef)({}),C=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;y(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let w=()=>{C.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{let t=[];e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),m(t||[])},[e]),(0,l.useEffect)(()=>{localStorage.setItem(`CustomHooksGuideCheckedTitles`,JSON.stringify(b))},[b]);let T=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{d(t),setTimeout(()=>d(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),d(t),setTimeout(()=>d(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},E=(e,t,n,r)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let r=n.findIndex(e=>e.id===a[t]),i;i=e.key===`ArrowLeft`?r>0?r-1:n.length-1:r<n.length-1?r+1:0,o({...a,[t]:n[i].id});let s=S.current[`${t}-${n[i].id}`];s&&s.focus()}},D=e=>{g(t=>({...t,[e]:!t[e]}))},O=e=>{x(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Complete Beginner's Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),p.length>0&&(0,f.jsxs)(`section`,{ref:C,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:p.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:b[t]||!1,onChange:()=>O(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(_,{code:e.content,index:t,handleCopy:T,copiedIndex:c}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(n=>{let r=`example-${t}`,i=`${r}-${n.id}`,s=`${i}-panel`;return(0,f.jsx)(`button`,{id:i,role:`tab`,"aria-selected":a[r]===n.id,"aria-controls":s,className:a[r]===n.id?`active`:``,onClick:()=>o({...a,[r]:n.id}),onKeyDown:n=>E(n,r,e.tabs,t),tabIndex:a[r]===n.id?0:-1,ref:e=>S.current[i]=e,children:n.label},n.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${a[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${a[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(_,{code:n(`example-${t}`,e.tabs),index:t,handleCopy:T,copiedIndex:c})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>D(t),children:h[t]?`Hide Solution`:`Show Solution`}),h[t]&&(0,f.jsx)(_,{code:e.solution,index:`solution-${t}`,handleCopy:T,copiedIndex:c})]})]},`para-${t}-${e.type}`))}),v&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:w,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};_.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string]),language:d.default.string};export{v as default};
//# sourceMappingURL=CustomHooksGuide-X0E0zvjr.js.map