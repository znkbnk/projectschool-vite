/* eslint-disable no-template-curly-in-string */
const dataFetchingData = [
  {
    id: "react-data-fetching-guide",
    title: "The Definitive Guide to Data Fetching in React",
    image: "/images/dataFetching.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to Data Fetching in React. Almost every React app needs to load data from an API — products, users, posts, weather, search results. This guide covers the complete data fetching lifecycle: making requests with fetch and async/await, managing loading and error states, debouncing user input, handling dependent fetches, pagination, mutations (POST/PUT/DELETE), and building a reusable custom hook. Every example uses real, working APIs so you can run the code and see actual results.",
      },
      {
        type: "title",
        content: "Understanding Data Fetching in React",
      },
      {
        type: "text",
        content:
          "Data fetching in React follows a simple pattern: trigger a fetch (usually in useEffect), update state with the response, and render the data. But the details matter — handling loading states, errors, race conditions, cleanup, and caching. This guide teaches you the right way to handle each one.",
      },
      {
        type: "code",
        content: `// The fundamental pattern: useEffect + fetch + useState
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
      },
      {
        type: "boldText",
        content: "fetch vs axios",
      },
      {
        type: "text",
        content:
          "This guide uses the built-in fetch API because it requires no dependencies and is available in every browser. axios is a popular alternative that adds features like automatic JSON parsing, request cancellation, and interceptors. The patterns you learn here work identically with either one — only the syntax changes slightly.",
      },
      {
        type: "code",
        content: `// fetch — built-in, no install needed
const res = await fetch('https://api.example.com/data');
if (!res.ok) throw new Error(\`HTTP \${res.status}\`); // Must check manually
const data = await res.json(); // Must parse manually

// axios — npm install axios
import axios from 'axios';
const { data } = await axios.get('https://api.example.com/data');
// Auto-parses JSON, auto-throws on HTTP errors`,
      },
      {
        type: "boldText",
        content: "async/await vs .then()",
      },
      {
        type: "text",
        content:
          "Both achieve the same result. async/await reads like synchronous code and is generally easier to follow, especially with error handling (try/catch instead of .catch()). This guide uses async/await for all examples.",
      },
      {
        type: "code",
        content: `// .then() chain
fetch(url)
  .then(res => res.json())
  .then(data => setUsers(data))
  .catch(err => setError(err.message));

// async/await — same thing, reads cleaner
const loadData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  } catch (err) {
    setError(err.message);
  }
};`,
      },
      {
        type: "title",
        content: "The Fetch Lifecycle in React",
      },
      {
        type: "text",
        content:
          "Every data fetch in React follows the same lifecycle: idle → loading → success or error. Understanding this flow is the key to writing reliable data fetching code.",
      },
      {
        type: "list",
        items: [
          "Trigger: Something starts the fetch — component mounts (useEffect with []), user clicks a button, a dependency changes (useEffect with [query]).",
          "Loading: Set a loading flag so the UI shows a spinner or skeleton. Clear any previous error.",
          "Request: Call fetch() or axios.get(). Always use AbortController for cleanup so unmounted components don't update state.",
          "Success: Parse the response, update state with the data, clear the loading flag.",
          "Error: Catch the error, set an error message, clear the loading flag. Display a retry button.",
          "Cleanup: If the component unmounts or the dependency changes before the fetch completes, abort the request to prevent stale updates.",
        ],
      },
      {
        type: "title",
        content: "Common Pitfalls",
      },
      {
        type: "boldText",
        content: "1. Forgetting Cleanup (Race Conditions)",
      },
      {
        type: "code",
        content: `// BUG: No cleanup — typing "react" fast fires 5 fetches
// The slowest one wins, not the latest one
useEffect(() => {
  fetch(\`/api/search?q=\${query}\`).then(r => r.json()).then(setResults);
}, [query]);

// FIX: AbortController cancels stale requests
useEffect(() => {
  const controller = new AbortController();
  fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
    .then(r => r.json())
    .then(setResults)
    .catch(err => { if (err.name !== 'AbortError') setError(err.message); });
  return () => controller.abort(); // Cleanup: cancel if query changes
}, [query]);`,
      },
      {
        type: "boldText",
        content: "2. Fetching in the Component Body",
      },
      {
        type: "code",
        content: `// BUG: Fetch runs on EVERY render — infinite loop if setState triggers re-render
function Users() {
  const [users, setUsers] = useState([]);
  fetch('/api/users').then(r => r.json()).then(setUsers); // Runs every render!
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// FIX: Fetch inside useEffect with proper dependencies
useEffect(() => {
  fetch('/api/users').then(r => r.json()).then(setUsers);
}, []); // Empty array = run once on mount`,
      },
      {
        type: "boldText",
        content: "3. Not Checking res.ok",
      },
      {
        type: "code",
        content: `// BUG: fetch doesn't throw on HTTP errors (404, 500)
const res = await fetch('/api/missing');
const data = await res.json(); // Tries to parse the error page as JSON!

// FIX: Always check res.ok
const res = await fetch('/api/missing');
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
const data = await res.json();`,
      },
      {
        type: "boldText",
        content: "4. async useEffect (Directly)",
      },
      {
        type: "code",
        content: `// BUG: useEffect callback cannot be async
useEffect(async () => { // React warns: Effect callbacks are synchronous
  const data = await fetchData();
}, []);

// FIX: Define async function inside, then call it
useEffect(() => {
  const loadData = async () => {
    const data = await fetchData();
    setData(data);
  };
  loadData();
}, []);`,
      },
      {
        type: "title",
        content: "Example 1: Basic Fetch — Loading Data on Mount",
      },
      {
        type: "text",
        content: "The foundational pattern: fetch data when a component mounts, handle loading and error states, render the results. Every other pattern builds on this.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "useEffect + fetch + async/await pattern",
          "Loading, error, and success states",
          "AbortController for cleanup",
          "Rendering fetched data",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const data = await res.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
    return () => controller.abort();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Loading users...</p>;
  if (error) return <p style={{ padding: '20px', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Users ({users.length})</h1>
      {users.map(user => (
        <div key={user.id} style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
          <strong>{user.name}</strong>
          <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>{user.email}</p>
          <p style={{ margin: '2px 0', color: '#999', fontSize: '13px' }}>{user.company.name} · {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "The empty dependency array [] means this effect runs once, on mount. AbortController is created before the fetch and abort() is called in the cleanup function. If the component unmounts before the fetch completes, the request is cancelled and the 'AbortError' catch ignores it silently.",
      },
      {
        type: "text",
        content: "The finally block sets loading to false regardless of success or failure. This ensures the spinner disappears even on error. Without it, an error would leave the component in a permanent loading state.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Skip AbortController → If the component unmounts mid-fetch, React warns about setting state on an unmounted component.",
          "Forget if (!res.ok) check → HTTP 404/500 responses are treated as success. The component tries to render error HTML as user data.",
          "Put setLoading(false) only in the try block → On error, loading stays true forever. Always use finally.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Add a 'Refresh' button that re-fetches the users. Add a 'last updated' timestamp that shows when the data was last loaded.",
        hint: "Hint: Add a refreshKey state. Clicking the button increments it. Add refreshKey to the useEffect dependency array. Store new Date().toLocaleTimeString() on successful fetch.",
        solution: `const [refreshKey, setRefreshKey] = useState(0);
const [lastUpdated, setLastUpdated] = useState(null);

useEffect(() => {
  const controller = new AbortController();
  const loadUsers = async () => {
    try { setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal });
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      setUsers(await res.json()); setError(null); setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) { if (err.name !== 'AbortError') setError(err.message); }
    finally { setLoading(false); }
  };
  loadUsers();
  return () => controller.abort();
}, [refreshKey]);

// <button onClick={() => setRefreshKey(k => k + 1)}>↻ Refresh</button>
// {lastUpdated && <small>Updated: {lastUpdated}</small>}`,
      },
      {
        type: "title",
        content: "Example 2: Loading & Error States — The Right Way",
      },
      {
        type: "text",
        content: "A dedicated example for getting loading and error states right. Uses a status string instead of separate booleans to prevent impossible states. Includes retry, skeleton loading, and graceful error display.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Status-based state ('idle' | 'loading' | 'success' | 'error') instead of separate booleans",
          "Skeleton/placeholder UI during loading",
          "Retry button on error",
          "Preventing impossible states (loading AND error)",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function ProductShowcase() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const loadProducts = async () => {
      setStatus('loading');
      try {
        const res = await fetch('https://dummyjson.com/products?limit=8', { signal: controller.signal });
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const data = await res.json();
        setProducts(data.products);
        setStatus('success');
      } catch (err) {
        if (err.name !== 'AbortError') { setError(err.message); setStatus('error'); }
      }
    };
    loadProducts();
    return () => controller.abort();
  }, [retryCount]);

  // Skeleton placeholder
  if (status === 'loading') {
    return (
      <div style={{ maxWidth: '600px', margin: '20px auto' }}>
        <h1>Products</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px' }}>
              <div style={{ width: '100%', height: '120px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '10px' }} />
              <div style={{ width: '70%', height: '16px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '6px' }} />
              <div style={{ width: '40%', height: '14px', background: '#f0f0f0', borderRadius: '4px' }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
        <h2>Something went wrong</h2>
        <p style={{ color: '#666' }}>{error}</p>
        <button onClick={() => setRetryCount(c => c + 1)}
          style={{ padding: '10px 20px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '6px' }}>
          Try Again
        </button>
      </div>
    );
  }

  if (status === 'idle') return null;

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>Products ({products.length})</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px' }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3 style={{ margin: '8px 0 4px', fontSize: '15px' }}>{p.title}</h3>
            <p style={{ color: '#666', margin: 0 }}>£{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "A single status string replaces separate loading/error booleans. The state is always in exactly one of four states: idle, loading, success, error. This makes it impossible to be 'loading AND error' simultaneously — a common bug with boolean flags.",
      },
      {
        type: "text",
        content: "The skeleton UI matches the real layout shape (grid with grey rectangles). Users see the page structure immediately instead of a blank screen or a spinner. This feels faster than a loading spinner, even though the actual fetch time is the same.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use separate setLoading(true) + setError(null) → Possible to have loading: true AND error: 'old error' at the same time. Status string prevents this.",
          "Forget to setStatus('loading') before the fetch → Skeleton doesn't show. User sees stale data during refetch.",
          "Retry by just calling the fetch function → Without updating a dependency (retryCount), useEffect won't re-run.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Add auto-retry. If the fetch fails, automatically retry up to 3 times with a 2-second delay between attempts. Show 'Retrying... (2/3)' during retries. Only show the error UI after all retries are exhausted.",
        hint: "Hint: Add retryAttempt to state. In the catch block, if retryAttempt < 3, setTimeout to increment retryCount after 2000ms. Show the retry count in the loading UI.",
        solution: `const [autoRetryAttempt, setAutoRetryAttempt] = useState(0);

// In the catch block:
if (err.name !== 'AbortError') {
  if (autoRetryAttempt < 3) {
    setTimeout(() => { setAutoRetryAttempt(a => a + 1); setRetryCount(c => c + 1); }, 2000);
  } else { setError(err.message); setStatus('error'); }
}

// In the loading skeleton, add:
{autoRetryAttempt > 0 && <p>Retrying... ({autoRetryAttempt}/3)</p>}`,
      },
      {
        type: "title",
        content: "Example 3: Search with Debounce",
      },
      {
        type: "text",
        content: "Searching as the user types means fetching on every keystroke. Typing 'react hooks' fires 11 requests. Debouncing waits until the user pauses, then fires one request. Combined with AbortController, this is the production-ready search pattern.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Debouncing user input before fetching",
          "AbortController to cancel stale search requests",
          "Showing search results with highlight matching",
          "The complete type-to-search pipeline",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

function ProductSearch() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (!debouncedQuery.trim()) { setProducts([]); setTotal(0); return; }
    const controller = new AbortController();

    const search = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          \`https://dummyjson.com/products/search?q=\${encodeURIComponent(debouncedQuery)}\`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const data = await res.json();
        setProducts(data.products);
        setTotal(data.total);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally { setLoading(false); }
    };

    search();
    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Product Search</h1>
      <input value={query} onChange={e => setQuery(e.target.value)}
        placeholder="Search products..." style={{ width: '100%', padding: '12px', boxSizing: 'border-box', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0', color: '#999', fontSize: '13px' }}>
        <span>{loading ? 'Searching...' : \`\${total} results\`}</span>
        <span>Query: "{debouncedQuery}"</span>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '12px', padding: '10px', borderBottom: '1px solid #eee' }}>
          <img src={p.thumbnail} alt={p.title} width={60} height={60}
            style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div style={{ flex: 1 }}>
            <strong>{p.title}</strong>
            <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>{p.brand} · £{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "The pipeline: user types query (every keystroke) → useDebounce waits 400ms → debouncedQuery updates → useEffect fires fetch → AbortController cancels any previous in-flight request → results display. Typing 'phone' fires 1 request instead of 5.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Skip debouncing → Every keystroke fires a fetch. 'phone' = 5 API calls, 'react hooks' = 11.",
          "Forget AbortController → Fast typing causes race conditions. The response for 'ph' arrives after 'phone' and overwrites it with wrong results.",
          "Forget encodeURIComponent → Queries with special characters (&, =, ?) break the URL.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Add search history. Store the last 5 searches in state. Show them as clickable chips below the search bar. Clicking a chip sets the query. Clear history with a button.",
        hint: "Hint: Add a history array to state. After a successful search (when debouncedQuery changes), push it to history (avoid duplicates, limit to 5). Display as buttons.",
        solution: `const [history, setHistory] = useState([]);

// After successful fetch in the useEffect:
setHistory(prev => {
  const filtered = prev.filter(h => h !== debouncedQuery);
  return [debouncedQuery, ...filtered].slice(0, 5);
});

// Below the search input:
{history.length > 0 && (
  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
    {history.map(h => (
      <button key={h} onClick={() => setQuery(h)}
        style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'pointer', fontSize: '13px' }}>
        {h}
      </button>
    ))}
    <button onClick={() => setHistory([])} style={{ color: '#999', background: 'none', border: 'none', fontSize: '13px' }}>Clear</button>
  </div>
)}`,
      },
      {
        type: "title",
        content: "Example 4: Dependent Fetches — Chained Requests",
      },
      {
        type: "text",
        content: "Many features require chained fetches: load categories → user picks one → load products for that category. Or load a user → then load their posts. Each fetch depends on the result of the previous one. This example shows how to chain dependent fetches correctly.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Multiple useEffects with different dependencies",
          "Resetting dependent state when the parent changes",
          "Loading states for each stage of the chain",
          "AbortController for each fetch independently",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function CategoryBrowser() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loadingCats, setLoadingCats] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // Fetch 1: Categories on mount
  useEffect(() => {
    const controller = new AbortController();
    fetch('https://dummyjson.com/products/categories', { signal: controller.signal })
      .then(r => r.json())
      .then(data => { setCategories(data); setLoadingCats(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoadingCats(false); });
    return () => controller.abort();
  }, []);

  // Fetch 2: Products when category changes
  useEffect(() => {
    if (!selectedCategory) { setProducts([]); return; }
    const controller = new AbortController();
    setLoadingProducts(true);
    setSelectedProduct(null); // Reset detail when category changes

    fetch(\`https://dummyjson.com/products/category/\${selectedCategory}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => { setProducts(data.products); setLoadingProducts(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoadingProducts(false); });
    return () => controller.abort();
  }, [selectedCategory]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Shop by Category</h1>

      {loadingCats ? <p>Loading categories...</p> : (
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '15px', fontSize: '16px' }}>
          <option value="">Choose a category</option>
          {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
      )}

      {loadingProducts && <p>Loading products...</p>}

      {products.map(p => (
        <div key={p.id} onClick={() => setSelectedProduct(p)}
          style={{ display: 'flex', gap: '12px', padding: '10px', borderBottom: '1px solid #eee',
            cursor: 'pointer', background: selectedProduct?.id === p.id ? '#e3f2fd' : 'transparent' }}>
          <img src={p.thumbnail} alt={p.title} width={50} height={50} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div><strong>{p.title}</strong><p style={{ margin: '2px 0', color: '#666' }}>£{p.price}</p></div>
        </div>
      ))}

      {selectedProduct && (
        <div style={{ marginTop: '15px', padding: '15px', border: '1px solid #1976d2', borderRadius: '10px' }}>
          <h2>{selectedProduct.title}</h2>
          <p style={{ color: '#666' }}>{selectedProduct.description}</p>
          <p style={{ fontWeight: 'bold' }}>£{selectedProduct.price} · Rating: {selectedProduct.rating}/5</p>
        </div>
      )}
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "Two separate useEffects form a chain. Effect 1 (dependencies: []) fetches categories on mount. Effect 2 (dependencies: [selectedCategory]) fetches products whenever the selected category changes. Each has its own AbortController for independent cleanup.",
      },
      {
        type: "text",
        content: "When the category changes, the product detail is reset (setSelectedProduct(null)). Without this, selecting a product in 'electronics' then switching to 'clothing' would still show the electronics product detail — stale data from the previous chain.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Put both fetches in one useEffect → Changing category would re-fetch categories (unnecessary). Separate effects with different dependencies keep them independent.",
          "Forget to reset selectedProduct when category changes → Stale product detail from the previous category stays visible.",
          "Use one AbortController for both fetches → Aborting on category change would also cancel the initial categories fetch if it's still in-flight.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Add a third level: when a product is selected, fetch its full details (https://dummyjson.com/products/{id}) in a third useEffect. Show a loading spinner while the detail loads. Display all product images.",
        hint: "Hint: Add a third useEffect with [selectedProduct?.id] as dependency. Fetch from dummyjson.com/products/{id}. Store in a productDetail state. Show images from productDetail.images.",
        solution: `const [productDetail, setProductDetail] = useState(null);
const [loadingDetail, setLoadingDetail] = useState(false);

useEffect(() => {
  if (!selectedProduct) { setProductDetail(null); return; }
  const controller = new AbortController();
  setLoadingDetail(true);
  fetch(\`https://dummyjson.com/products/\${selectedProduct.id}\`, { signal: controller.signal })
    .then(r => r.json())
    .then(data => { setProductDetail(data); setLoadingDetail(false); })
    .catch(err => { if (err.name !== 'AbortError') setLoadingDetail(false); });
  return () => controller.abort();
}, [selectedProduct?.id]);

// Display: {loadingDetail && <p>Loading detail...</p>}
// {productDetail?.images?.map((img, i) => <img key={i} src={img} width={100} />)}`,
      },

      {
        type: "title",
        content: "Example 5: Pagination & Infinite Scroll",
      },
      {
        type: "text",
        content: "Two patterns for loading large datasets: page-based pagination (Previous/Next buttons) and infinite scroll (load more on scroll). Both append to or replace data, track the current page, and know when there's no more data.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Page-based fetching with skip/limit parameters",
          "Appending data for infinite scroll vs replacing for pagination",
          "Scroll event listener triggering next page load",
          "Knowing when all data is loaded (hasMore flag)",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect, useCallback } from 'react';

function InfiniteProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;

  // Fetch products for current page
  useEffect(() => {
    if (!hasMore) return;
    const controller = new AbortController();
    setLoading(true);

    const loadPage = async () => {
      try {
        const skip = page * LIMIT;
        const res = await fetch(
          \`https://dummyjson.com/products?limit=\${LIMIT}&skip=\${skip}\`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const data = await res.json();
        setProducts(prev => page === 0 ? data.products : [...prev, ...data.products]);
        setHasMore(skip + LIMIT < data.total);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      } finally { setLoading(false); }
    };

    loadPage();
    return () => controller.abort();
  }, [page, hasMore]);

  // Scroll listener
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      setPage(p => p + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Products ({products.length})</h1>
      {products.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '12px', padding: '12px', borderBottom: '1px solid #eee' }}>
          <img src={p.thumbnail} alt={p.title} width={60} height={60} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div style={{ flex: 1 }}>
            <strong>{p.title}</strong>
            <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>{p.brand} · £{p.price}</p>
          </div>
        </div>
      ))}
      {loading && <p style={{ textAlign: 'center', padding: '20px' }}>Loading more...</p>}
      {!hasMore && <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>All products loaded</p>}
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "The scroll handler detects when the user is within 200px of the bottom and increments the page. The fetch effect watches page and loads the next batch, appending to the existing array with [...prev, ...data.products]. The hasMore flag prevents fetching beyond the total.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use setProducts(data.products) instead of appending → Only the latest page shows. Previous products disappear.",
          "Skip the loading guard in handleScroll → Multiple scroll events fire simultaneously, loading the same page multiple times.",
          "Forget hasMore → After all products load, the component keeps trying to fetch page 11, 12, 13... getting empty results forever.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Convert to page-based pagination with Previous/Next buttons instead of infinite scroll. Show 'Page 2 of 10' with disabled buttons at the boundaries. Replace products on each page instead of appending.",
        hint: "Hint: Remove the scroll listener. Add Previous/Next buttons. Change setProducts(prev => [...prev, ...data.products]) to setProducts(data.products). Calculate totalPages from data.total / LIMIT.",
        solution: `// Remove handleScroll and scroll useEffect
// Change the fetch setProducts line:
setProducts(data.products); // Replace, don't append
const [totalPages, setTotalPages] = useState(0);
// In fetch: setTotalPages(Math.ceil(data.total / LIMIT));

// Navigation:
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0' }}>
  <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>← Previous</button>
  <span>Page {page + 1} of {totalPages}</span>
  <button disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>Next →</button>
</div>`,
      },

      {
        type: "title",
        content: "Example 6: POST, PUT, DELETE — Mutating Data",
      },
      {
        type: "text",
        content: "Fetching is only half the picture. Real apps create, update, and delete data. This example covers POST (creating), PUT (updating), and DELETE requests, plus optimistic updates — updating the UI immediately before the server confirms, then rolling back on failure.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "POST, PUT, DELETE with fetch and proper headers",
          "Optimistic updates for instant UI feedback",
          "Rollback on failure",
          "Loading states per action (not just per page)",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function TodoManager() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // Track which item is being mutated

  // GET: Load initial todos
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(r => r.json())
      .then(data => { setTodos(data); setLoading(false); });
  }, []);

  // POST: Add a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const tempId = Date.now();
    const newTodo = { id: tempId, title: input, completed: false };

    // Optimistic: add immediately
    setTodos(prev => [newTodo, ...prev]);
    setInput('');

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input, completed: false, userId: 1 }),
      });
      if (!res.ok) throw new Error('Failed to create');
      const created = await res.json();
      // Replace temp with server response
      setTodos(prev => prev.map(t => t.id === tempId ? { ...created, id: tempId } : t));
    } catch (err) {
      // Rollback on failure
      setTodos(prev => prev.filter(t => t.id !== tempId));
      alert('Failed to add todo. Please try again.');
    }
  };

  // PUT: Toggle completed
  const toggleTodo = async (id) => {
    const todo = todos.find(t => t.id === id);
    // Optimistic update
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    setActionLoading(id);

    try {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
      });
      if (!res.ok) throw new Error('Failed to update');
    } catch (err) {
      // Rollback
      setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: todo.completed } : t));
    } finally { setActionLoading(null); }
  };

  // DELETE: Remove a todo
  const deleteTodo = async (id) => {
    const original = todos;
    // Optimistic: remove immediately
    setTodos(prev => prev.filter(t => t.id !== id));

    try {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
    } catch (err) {
      // Rollback: restore the full list
      setTodos(original);
      alert('Failed to delete. Restored.');
    }
  };

  if (loading) return <p style={{ padding: '20px' }}>Loading todos...</p>;

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto' }}>
      <h1>Todo Manager</h1>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="Add a todo..." style={{ flex: 1, padding: '10px' }} />
        <button type="submit">Add</button>
      </form>
      {todos.map(todo => (
        <div key={todo.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px', padding: '10px',
          borderBottom: '1px solid #eee', opacity: actionLoading === todo.id ? 0.5 : 1,
        }}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#999' : '#333' }}>
            {todo.title}
          </span>
          <button onClick={() => deleteTodo(todo.id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>✕</button>
        </div>
      ))}
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "Optimistic updates make the UI feel instant. When the user adds a todo, it appears immediately — before the server responds. If the server fails, the todo is removed (rollback). The user never waits for a spinner on individual actions.",
      },
      {
        type: "text",
        content: "Each mutation follows the same pattern: (1) Save the current state for rollback. (2) Optimistically update the UI. (3) Send the request. (4) On success, optionally update with server data. (5) On failure, restore the saved state. The actionLoading flag dims the item being mutated.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Skip optimistic update → User clicks 'Add' and waits 1-2 seconds for the spinner. Feels sluggish.",
          "Forget rollback on error → The UI shows a todo that the server rejected. Data is out of sync.",
          "Forget Content-Type header on POST/PUT → Server receives the body as plain text, not JSON. Returns 400 Bad Request.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Add inline editing. Double-click a todo title to edit it. Press Enter to save (PUT request with optimistic update). Press Escape to cancel. Show a subtle save indicator while the PUT is in-flight.",
        hint: "Hint: Add editingId and editText state. On double-click, set editingId and editText. On Enter, optimistically update the title, then PUT. On failure, rollback.",
        solution: `const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState('');

const saveEdit = async (id) => {
  const original = todos.find(t => t.id === id);
  setTodos(prev => prev.map(t => t.id === id ? { ...t, title: editText } : t));
  setEditingId(null);
  setActionLoading(id);
  try {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...original, title: editText }),
    });
    if (!res.ok) throw new Error('Failed');
  } catch { setTodos(prev => prev.map(t => t.id === id ? original : t)); }
  finally { setActionLoading(null); }
};

// In the todo render, replace the <span>:
{editingId === todo.id ? (
  <input value={editText} onChange={e => setEditText(e.target.value)}
    onKeyDown={e => { if (e.key === 'Enter') saveEdit(todo.id); if (e.key === 'Escape') setEditingId(null); }}
    autoFocus style={{ flex: 1 }} />
) : (
  <span onDoubleClick={() => { setEditingId(todo.id); setEditText(todo.title); }} style={{ flex: 1, cursor: 'pointer' }}>
    {todo.title}
  </span>
)}`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 7: CUSTOM useFetch HOOK
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: Custom useFetch Hook — Reusable Fetching",
      },
      {
        type: "text",
        content: "Every example so far repeated the same pattern: useState for data/loading/error, useEffect with fetch, AbortController cleanup. It's time to extract that into a reusable hook. This useFetch hook handles everything — state management, caching, refetch, and cleanup — so components need just one line to fetch data.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Extracting the complete fetch pattern into a custom hook",
          "Simple caching with useRef (stale-while-revalidate)",
          "Exposing a refetch function for manual refresh",
          "Using the hook across multiple components with different APIs",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect, useCallback, useRef } from 'react';

function useFetch(url, options = {}) {
  const { enabled = true } = options;
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);
  const cache = useRef({});

  useEffect(() => {
    if (!url || !enabled) {
      setStatus('idle');
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      // Stale-while-revalidate: show cached data immediately
      if (cache.current[url]) {
        setData(cache.current[url]);
        setStatus('success');
      } else {
        setStatus('loading');
      }

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const json = await res.json();
        cache.current[url] = json; // Store in cache
        setData(json);
        setError(null);
        setStatus('success');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          // Only show error if we don't have cached data
          if (!cache.current[url]) setStatus('error');
        }
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url, enabled, refreshCount]);

  const refetch = useCallback(() => setRefreshCount(c => c + 1), []);

  return { data, status, error, refetch, isLoading: status === 'loading' };
}

// ─── Usage: Multi-panel dashboard using one hook ───

function UserPanel() {
  const { data: users, status, refetch } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Users</h2>
        <button onClick={refetch} style={{ fontSize: '12px' }}>↻</button>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Failed to load</p>}
      {status === 'success' && users?.slice(0, 5).map(u => (
        <p key={u.id} style={{ margin: '4px 0', fontSize: '14px' }}>{u.name} — {u.email}</p>
      ))}
    </div>
  );
}

function ProductPanel() {
  const [category, setCategory] = useState('');
  const { data: categories } = useFetch('https://dummyjson.com/products/categories');
  const { data: products, status } = useFetch(
    category ? \`https://dummyjson.com/products/category/\${category}\` : null
  );

  return (
    <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px' }}>
      <h2>Products</h2>
      {categories && (
        <select value={category} onChange={e => setCategory(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}>
          <option value="">Select category</option>
          {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
      )}
      {status === 'loading' && <p>Loading...</p>}
      {products?.products?.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '8px', padding: '6px 0', borderBottom: '1px solid #f5f5f5' }}>
          <img src={p.thumbnail} alt={p.title} width={40} height={40} style={{ borderRadius: '6px', objectFit: 'cover' }} />
          <div><strong style={{ fontSize: '14px' }}>{p.title}</strong><p style={{ margin: 0, color: '#666', fontSize: '13px' }}>£{p.price}</p></div>
        </div>
      ))}
    </div>
  );
}

function PostPanel() {
  const [userId, setUserId] = useState(1);
  const { data: posts, status, refetch } = useFetch(
    \`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`
  );

  return (
    <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Posts</h2>
        <select value={userId} onChange={e => setUserId(Number(e.target.value))} style={{ padding: '4px' }}>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>User {n}</option>)}
        </select>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {posts?.slice(0, 4).map(p => (
        <div key={p.id} style={{ padding: '6px 0', borderBottom: '1px solid #f5f5f5' }}>
          <strong style={{ fontSize: '14px' }}>{p.title.slice(0, 50)}...</strong>
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>Dashboard</h1>
      <p style={{ color: '#999', fontSize: '13px', marginBottom: '15px' }}>
        Three panels, one hook. Switch categories/users — cached data appears instantly.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <UserPanel />
        <ProductPanel />
        <PostPanel />
      </div>
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content: "useFetch encapsulates the entire fetch lifecycle: state management (status, data, error), AbortController cleanup, caching, and a refetch function. Any component can call const { data, status } = useFetch(url) and get reactive data with zero boilerplate.",
      },
      {
        type: "text",
        content: "The cache uses stale-while-revalidate: if data for a URL is already cached, it's shown immediately while a fresh fetch runs in the background. Switch between categories and you see the old data instantly, then it updates when the fresh response arrives. Passing null as the URL disables the fetch — ProductPanel uses this until a category is selected.",
      },
      {
        type: "text",
        content: "Three panels use the same hook for completely different APIs. UserPanel fetches users on mount. ProductPanel chains two useFetch calls (categories → products). PostPanel re-fetches when the user ID changes. The hook doesn't care what the data shape is — it just fetches, caches, and returns.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Store the cache in useState instead of useRef → Every cache update triggers a re-render. useRef persists across renders without re-rendering.",
          "Forget the enabled option → Components that need conditional fetching (fetch only after user selects something) would need awkward workarounds.",
          "Return a new object every render → Consumers that destructure { data } would re-render even if data hasn't changed. The status string helps consumers avoid unnecessary work.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content: "Task 1: Add a cache expiration feature to useFetch. Cached data older than 60 seconds should trigger a fresh fetch instead of showing stale data. Accept a cacheTime option in the config.",
        hint: "Hint: Store { data, timestamp } in the cache instead of just data. When checking the cache, compare Date.now() - timestamp against the cacheTime. If expired, treat as uncached.",
        solution: `function useFetch(url, options = {}) {
  const { enabled = true, cacheTime = 60000 } = options;
  const cache = useRef({});
  // ...same setup...

  useEffect(() => {
    if (!url || !enabled) return;
    const controller = new AbortController();

    const fetchData = async () => {
      const cached = cache.current[url];
      const isStale = !cached || (Date.now() - cached.timestamp > cacheTime);

      if (cached) {
        setData(cached.data);
        setStatus('success');
        if (!isStale) return; // Fresh cache — skip fetch
      } else {
        setStatus('loading');
      }

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const json = await res.json();
        cache.current[url] = { data: json, timestamp: Date.now() };
        setData(json); setError(null); setStatus('success');
      } catch (err) {
        if (err.name !== 'AbortError') { setError(err.message); if (!cached) setStatus('error'); }
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url, enabled, refreshCount, cacheTime]);
}

// Usage: const { data } = useFetch(url, { cacheTime: 30000 }); // 30s cache`,
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
        content: "You've mastered data fetching in React from basic fetch calls to a production-ready custom hook with caching. Every pattern you've learned — loading states, debouncing, pagination, optimistic updates, AbortController cleanup — is used in real-world applications. Here's your path forward:",
      },
      {
        type: "list",
        items: [
          "React Query (TanStack Query) — The industry-standard data fetching library. It handles caching, background refetching, pagination, mutations, and more. Your useFetch hook is a simplified version of what React Query does. Learning it will feel natural after this guide.",
          "SWR — Vercel's data fetching library, focused on the stale-while-revalidate pattern you built in Example 7. Lighter than React Query but powerful.",
          "Error Boundaries — Wrap your data-fetching components in error boundaries to catch rendering errors gracefully, showing fallback UI instead of crashing the entire app.",
          "Server Components — React Server Components fetch data on the server and send rendered HTML to the client. No loading spinners, no useEffect. The future of data fetching in React.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export  {dataFetchingData};