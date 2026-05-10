import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-usestate-useeffect-guide`,title:`The Definitive Guide to useState + useEffect Combined`,image:`/images/stateEffectback.webp`,paragraphs:[{type:`text`,content:`Welcome to the guide that most React courses never include. You've learned useState (managing data) and useEffect (reaching outside your component) separately — but real applications constantly use them together. A search bar stores the query in state and fetches results in an effect. A form holds input data in state and validates it in a debounced effect. A dashboard keeps polling data in state while an effect manages the interval. This guide teaches the reactive loop — state changes trigger effects, effects update state, and the cycle creates dynamic, interactive applications — through eight progressive real-world examples.`},{type:`title`,content:`The Reactive Loop: How State and Effects Work Together`},{type:`text`,content:`useState and useEffect form a feedback loop that drives nearly every interactive React feature. Here's how it works: (1) User interacts → setState updates a value. (2) React re-renders the component. (3) useEffect sees the dependency changed and runs. (4) The effect does something external (fetch, timer, DOM update). (5) The effect's result calls setState again. (6) React re-renders with the new data. This loop repeats every time the user interacts with your app.`},{type:`code`,content:`// The core pattern: state drives effects, effects update state
import { useState, useEffect } from 'react';

function SearchPage() {
  // STATE: what the user typed
  const [query, setQuery] = useState('');
  // STATE: what the API returned
  const [results, setResults] = useState([]);

  // EFFECT: when query changes, fetch new results
  useEffect(() => {
    if (!query) { setResults([]); return; }

    const controller = new AbortController();
    fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => setResults(data));  // Effect updates state

    return () => controller.abort();
  }, [query]); // Triggered by state change

  // The loop: type → setQuery → re-render → effect runs → setResults → re-render → UI updates
}`},{type:`boldText`,content:`The Five Combined Patterns`},{type:`text`,content:`Every useState + useEffect combination falls into one of these patterns:`},{type:`list`,items:[`State → Fetch → State: User action updates state, effect fetches data based on that state, response updates another state. (Search, filters, dependent dropdowns)`,`State → Sync → External: State changes trigger an effect that synchronises with something outside React: localStorage, document.title, DOM classes, analytics. (Persistence, theme, page title)`,`State → Timer → State: State controls a timer (start/stop/interval), and the timer's callback updates state. (Countdowns, polling, debouncing, auto-save)`,`State → Subscribe → State: State determines a subscription (WebSocket, event listener, resize observer), and events from the subscription update state. (Real-time data, responsive layouts)`,`State → Validate → State: Input state triggers a validation effect (often debounced), which updates error state. (Form validation, availability checks)`]},{type:`title`,content:`Rules for Combining State and Effects`},{type:`list`,items:[`Each effect should have one job: Don't fetch data AND update the document title in the same effect. Split them into two effects with different dependency arrays.`,`State changes in effects must be conditional: An effect that unconditionally calls setState creates an infinite loop — render → effect → setState → re-render → effect → crash.`,`Don't store derived data in state: If you can compute a value from existing state (e.g., filteredItems = items.filter(...)), just calculate it during render. Don't add a useEffect to 'sync' it.`,`Put state that triggers the same effect together: If two state values always need to trigger the same fetch, consider combining them into one state object.`,`Clean up everything you set up: If an effect creates a timer, subscription, or request, the cleanup must cancel it. This is even more critical when state changes rapidly (typing, scrolling).`]},{type:`title`,content:`Common Pitfalls`},{type:`boldText`,content:`1. The Infinite Loop`},{type:`code`,content:`// BUG: Unconditional setState in effect → infinite loop
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1); // Triggers re-render → effect runs again → forever
}, [count]);

// FIX: Make the update conditional
useEffect(() => {
  if (count < 10) setCount(c => c + 1); // Stops at 10
}, [count]);`},{type:`boldText`,content:`2. Unnecessary Effect for Derived State`},{type:`code`,content:`// BAD: Extra state + effect to compute something from existing state
const [items, setItems] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
  setFilteredItems(items.filter(i => i.name.includes(search)));
}, [items, search]);

// GOOD: Just compute it during render — no effect, no extra state
const filteredItems = items.filter(i => i.name.includes(search));`},{type:`boldText`,content:`3. Race Conditions with Rapid State Changes`},{type:`code`,content:`// BUG: Typing fast triggers multiple fetches, responses arrive out of order
useEffect(() => {
  fetch(\`/api/search?q=\${query}\`).then(r => r.json()).then(setResults);
}, [query]);

// FIX: AbortController cancels stale requests
useEffect(() => {
  const controller = new AbortController();
  fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
    .then(r => r.json())
    .then(setResults)
    .catch(err => { if (err.name !== 'AbortError') console.error(err); });
  return () => controller.abort();
}, [query]);`},{type:`boldText`,content:`4. Stale State in Timer Callbacks`},{type:`code`,content:`// BUG: Timer reads stale 'count' from the closure it was created in
const [count, setCount] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCount(count + 1); // Always reads the initial count (0)
  }, 1000);
  return () => clearInterval(timer);
}, []); // Empty deps = closure captures initial count

// FIX: Functional update reads the latest value
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1); // Always reads the current value
  }, 1000);
  return () => clearInterval(timer);
}, []);`},{type:`title`,content:`Example 1: Live Search with API`},{type:`text`,content:`The most common useState + useEffect pattern: the user types a search query (state), and an effect fetches matching results from an API. This combines debouncing, AbortController, loading states, and the complete reactive loop.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`The complete state → effect → state loop`,`Debouncing API calls with setTimeout in useEffect`,`AbortController for cancelling stale requests`,`Multiple state variables coordinating with one effect`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function ProductSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setTotal(0);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const debounce = setTimeout(() => {
      fetch(\`https://dummyjson.com/products/search?q=\${query}\`, {
        signal: controller.signal,
      })
        .then(res => res.json())
        .then(data => {
          setResults(data.products || []);
          setTotal(data.total || 0);
          setLoading(false);
        })
        .catch(err => {
          if (err.name !== 'AbortError') {
            setResults([]);
            setLoading(false);
          }
        });
    }, 400);

    return () => {
      clearTimeout(debounce);
      controller.abort();
    };
  }, [query]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Product Search</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        style={{ width: '100%', padding: '10px', fontSize: '16px', boxSizing: 'border-box' }}
      />
      {loading && <p>Searching...</p>}
      {!loading && query && <p>{total} results found</p>}
      <div>
        {results.map(product => (
          <div key={product.id} style={{
            display: 'flex', gap: '12px', padding: '10px',
            borderBottom: '1px solid #eee', alignItems: 'center',
          }}>
            <img src={product.thumbnail} alt={product.title} width={50} height={50}
              style={{ borderRadius: '8px', objectFit: 'cover' }} />
            <div>
              <strong>{product.title}</strong>
              <p style={{ margin: '2px 0', color: '#666' }}>£{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {!loading && query && results.length === 0 && <p>No products found</p>}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Four state variables work together: query (what the user typed), results (what the API returned), loading (is a fetch in progress), total (how many results exist). The effect is the bridge — it reads query and writes to results, loading, and total.`},{type:`text`,content:`The reactive loop in action: User types 'phone' → setQuery('phone') → re-render → effect sees [query] changed → waits 400ms (debounce) → fetches → response arrives → setResults + setLoading + setTotal → re-render → UI shows products.`},{type:`text`,content:`Double cleanup: clearTimeout cancels the debounce timer if the user types again within 400ms. controller.abort() cancels any in-flight request. Together they ensure only one request is ever active — the latest one.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Add results to the dependency array [query, results] → Setting results in the effect triggers the effect again, creating an infinite loop.`,`Skip the debounce → Typing 'phone' fires 5 requests (p, ph, pho, phon, phone) instead of 1. Wasteful and potentially shows wrong results.`,`Forget setLoading(false) in the catch block → If a request fails, the loading spinner stays forever.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a recipe search that fetches from https://dummyjson.com/recipes/search?q={query}. Display each recipe's name, image, and cook time. Add a 'Sort by cook time' toggle that sorts the results without re-fetching.`,hint:`Hint: Store sortByCookTime in state. Sort the results array during render (derived data). Don't include it in the effect's dependency array.`,solution:`import { useState, useEffect } from 'react';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortByTime, setSortByTime] = useState(false);

  useEffect(() => {
    if (!query.trim()) { setRecipes([]); return; }
    const controller = new AbortController();
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(\`https://dummyjson.com/recipes/search?q=\${query}\`, { signal: controller.signal })
        .then(r => r.json())
        .then(data => { setRecipes(data.recipes || []); setLoading(false); })
        .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    }, 400);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [query]);

  const displayed = sortByTime
    ? [...recipes].sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes)
    : recipes;

  return (
    <div>
      <h1>Recipe Search</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search recipes..." />
      <label><input type="checkbox" checked={sortByTime} onChange={() => setSortByTime(s => !s)} /> Sort by cook time</label>
      {loading && <p>Searching...</p>}
      {displayed.map(r => (
        <div key={r.id} style={{ display: 'flex', gap: '10px', padding: '8px', borderBottom: '1px solid #eee' }}>
          <img src={r.image} alt={r.name} width={60} height={60} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div><strong>{r.name}</strong><p>{r.cookTimeMinutes} min</p></div>
        </div>
      ))}
    </div>
  );
}

export default RecipeSearch;`},{type:`title`,content:`Example 2: Form with Debounced Validation`},{type:`text`,content:`Forms need both useState (holding input values) and useEffect (running validation after the user stops typing). Validating on every keystroke is jarring — debouncing waits until typing pauses, then shows errors. This creates a smooth user experience.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Form state driving a validation effect`,`Debounced validation with setTimeout`,`Separate error state updated by the effect`,`Derived form validity computed during render`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Effect: validate after 500ms of no typing
  useEffect(() => {
    const timer = setTimeout(() => {
      const newErrors = {};
      if (touched.username && form.username.length < 3)
        newErrors.username = 'Username must be 3+ characters';
      if (touched.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email))
        newErrors.email = 'Invalid email format';
      if (touched.password) {
        if (form.password.length < 8) newErrors.password = 'Password must be 8+ characters';
        else if (!/\\d/.test(form.password)) newErrors.password = 'Must include a number';
        else if (!/[A-Z]/.test(form.password)) newErrors.password = 'Must include an uppercase letter';
      }
      setErrors(newErrors);
    }, 500);

    return () => clearTimeout(timer);
  }, [form, touched]);

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const isValid = Object.keys(errors).length === 0 &&
    Object.values(form).every(v => v.length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ username: true, email: true, password: true });
    if (isValid) setSubmitted(true);
  };

  if (submitted) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>✅ Welcome, {form.username}!</h2>
    </div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Register</h1>
      {['username', 'email', 'password'].map(field => (
        <div key={field} style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === 'password' ? 'password' : 'text'}
            value={form[field]}
            onChange={handleChange(field)}
            style={{
              width: '100%', padding: '10px', boxSizing: 'border-box',
              border: \`1px solid \${errors[field] ? '#d32f2f' : '#ddd'}\`,
              borderRadius: '6px',
            }}
          />
          {errors[field] && <p style={{ color: '#d32f2f', fontSize: '12px', margin: '4px 0 0' }}>{errors[field]}</p>}
        </div>
      ))}
      <button type="submit" disabled={!isValid} style={{
        width: '100%', padding: '12px', backgroundColor: isValid ? '#1976d2' : '#ccc',
        color: '#fff', border: 'none', borderRadius: '6px', cursor: isValid ? 'pointer' : 'default',
      }}>
        Create Account
      </button>
    </form>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Three state variables feed into one effect: form (the input values), touched (which fields the user has interacted with), and errors (what the validation found). The effect debounces validation by 500ms — it only validates touched fields so users don't see errors before they've started typing.`},{type:`text`,content:`isValid is derived, not stored — it's computed from errors and form during render. No useEffect needed. This avoids the common anti-pattern of syncing a separate isValid state variable with yet another effect.`},{type:`text`,content:`The cleanup (clearTimeout) means typing resets the 500ms clock. 'abc' → 'abcd' within 500ms cancels the first validation and starts a new timer. Errors only appear after the user pauses, creating a non-intrusive experience.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Validate without debouncing → Errors flash on and off with every keystroke. User types 'ab' → 'too short' error → types 'c' → error disappears. Distracting and annoying.`,`Store isValid in state with its own useEffect → Extra complexity and possible sync bugs. Derived values should always be computed during render.`,`Forget the touched tracking → Errors appear for every field immediately on mount, before the user has typed anything. Forms should validate fields after interaction.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a 'username availability' check to the form. After the user stops typing (800ms debounce), make a fake API call (simulate with setTimeout) that rejects 'admin', 'test', and 'user'. Show a green checkmark or red X next to the username field.`,hint:`Hint: Add a separate useEffect for the availability check with [form.username] as dependency. Store the result in a separate state: 'checking', 'available', 'taken'.`,solution:`import { useState, useEffect } from 'react';

function UsernameField() {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('idle'); // idle, checking, available, taken

  useEffect(() => {
    if (username.length < 3) { setStatus('idle'); return; }
    setStatus('checking');
    const timer = setTimeout(() => {
      const taken = ['admin', 'test', 'user'].includes(username.toLowerCase());
      setStatus(taken ? 'taken' : 'available');
    }, 800);
    return () => clearTimeout(timer);
  }, [username]);

  const icons = { idle: '', checking: '⏳', available: '✅', taken: '❌' };
  const messages = { taken: 'Username is taken', available: 'Username is available', checking: 'Checking...' };

  return (
    <div>
      <label>Username</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Choose a username" />
        <span>{icons[status]}</span>
      </div>
      {messages[status] && <p style={{ color: status === 'taken' ? 'red' : 'green', fontSize: '12px' }}>{messages[status]}</p>}
    </div>
  );
}

export default UsernameField;`},{type:`title`,content:`Example 3: Infinite Scroll`},{type:`text`,content:`Infinite scroll is a textbook useState + useEffect collaboration. State tracks the current page and accumulated items. One effect fetches data when the page changes. Another effect listens for scroll events and increments the page when the user reaches the bottom. The two effects coordinate through shared state without knowing about each other.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Two effects coordinating through shared state`,`Scroll event listener triggering state updates`,`Appending to existing state instead of replacing`,`Loading guards to prevent duplicate fetches`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function InfiniteProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Effect 1: Fetch products when page changes
  useEffect(() => {
    if (!hasMore) return;
    const controller = new AbortController();
    setLoading(true);

    fetch(\`https://dummyjson.com/products?limit=10&skip=\${page * 10}\`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => {
        setProducts(prev => [...prev, ...data.products]); // Append, don't replace
        setHasMore(data.products.length === 10);           // No more if less than 10
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') setLoading(false);
      });

    return () => controller.abort();
  }, [page, hasMore]);

  // Effect 2: Listen for scroll → increment page
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (nearBottom) setPage(p => p + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Products ({products.length})</h1>
      {products.map(product => (
        <div key={product.id} style={{
          display: 'flex', gap: '12px', padding: '12px',
          borderBottom: '1px solid #eee', alignItems: 'center',
        }}>
          <img src={product.thumbnail} alt={product.title} width={60} height={60}
            style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div>
            <strong>{product.title}</strong>
            <p style={{ margin: '2px 0', color: '#666' }}>£{product.price}</p>
          </div>
        </div>
      ))}
      {loading && <p style={{ textAlign: 'center', padding: '20px' }}>Loading more...</p>}
      {!hasMore && <p style={{ textAlign: 'center', color: '#999' }}>No more products</p>}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Two effects, one shared page state. Effect 2 (scroll listener) updates page when the user scrolls near the bottom. Effect 1 (fetcher) sees page changed and fetches the next batch. Neither effect calls the other directly — they communicate entirely through state. This is the reactive loop at its cleanest.`},{type:`text`,content:`setProducts(prev => [...prev, ...data.products]) appends new products to the existing list instead of replacing it. This is the key difference from a normal fetch — infinite scroll accumulates data across multiple pages.`},{type:`text`,content:`The loading guard in the scroll handler prevents duplicate fetches. Without it, scrolling near the bottom triggers setPage multiple times before the first fetch completes, firing several requests for the same page.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use setProducts(data.products) instead of appending → Each page load replaces the previous products. The user only ever sees 10 items.`,`Skip the loading guard in handleScroll → Scrolling triggers setPage 5+ times before the first fetch responds. Pages 1-5 all fire simultaneously.`,`Add products to the fetch effect's dependency array → Setting products triggers the effect again, creating an infinite fetch loop.`,`Forget hasMore → The scroll handler keeps incrementing page after all products are loaded, firing 404 requests forever.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build an infinite scroll quote feed. Fetch quotes from https://dummyjson.com/quotes?limit=5&skip={page*5}. Display each quote with its author. Add a 'Back to top' button that appears after scrolling down.`,hint:`Hint: Same dual-effect pattern. Use a separate useState for showBackToTop, updated in the scroll handler based on window.scrollY > 400.`,solution:`import { useState, useEffect } from 'react';

function QuoteFeed() {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (!hasMore) return;
    const controller = new AbortController();
    setLoading(true);
    fetch(\`https://dummyjson.com/quotes?limit=5&skip=\${page * 5}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        setQuotes(prev => [...prev, ...data.quotes]);
        setHasMore(data.quotes.length === 5);
        setLoading(false);
      })
      .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    return () => controller.abort();
  }, [page, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
      if (loading || !hasMore) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) setPage(p => p + 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Quotes</h1>
      {quotes.map(q => (
        <blockquote key={q.id} style={{ borderLeft: '3px solid #1976d2', padding: '10px 15px', margin: '15px 0' }}>
          <p>"{q.quote}"</p>
          <footer style={{ color: '#666' }}>— {q.author}</footer>
        </blockquote>
      ))}
      {loading && <p>Loading...</p>}
      {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ position: 'fixed', bottom: 20, right: 20 }}>↑ Top</button>}
    </div>
  );
}

export default QuoteFeed;`},{type:`title`,content:`Example 4: LocalStorage Persistence`},{type:`text`,content:`Users expect their data to survive page refreshes — notes, preferences, cart items. The pattern: useState holds the live data, one useEffect reads from localStorage on mount, another writes to localStorage whenever state changes. This creates a transparent sync layer the user never notices.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Lazy initialisation: reading localStorage in useState's initialiser`,`Syncing state to localStorage with useEffect`,`Building a reusable useLocalStorage custom hook`,`Handling JSON serialisation edge cases`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

// Custom hook: useState that persists to localStorage
function useLocalStorage(key, initialValue) {
  // Lazy init: read from localStorage on first render only
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Sync to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }
  }, [key, value]);

  return [value, setValue];
}

// Notes app using the hook
function StickyNotes() {
  const [notes, setNotes] = useLocalStorage('sticky-notes', []);
  const [input, setInput] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setNotes(prev => [...prev, {
      id: Date.now(),
      text: input,
      colour: ['#fff9c4', '#c8e6c9', '#bbdefb', '#f8bbd0', '#e1bee7'][Math.floor(Math.random() * 5)],
      createdAt: new Date().toLocaleString(),
    }]);
    setInput('');
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>Sticky Notes ({notes.length})</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>Notes are saved automatically — refresh the page and they'll still be here.</p>
      <form onSubmit={addNote} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="Write a note..." style={{ flex: 1, padding: '10px' }} />
        <button type="submit">Add</button>
      </form>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
        {notes.map(note => (
          <div key={note.id} style={{
            backgroundColor: note.colour, padding: '15px', borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'relative',
          }}>
            <button onClick={() => deleteNote(note.id)}
              style={{ position: 'absolute', top: '5px', right: '8px', background: 'none',
                border: 'none', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            <p style={{ margin: '0 0 8px', whiteSpace: 'pre-wrap' }}>{note.text}</p>
            <small style={{ color: '#666' }}>{note.createdAt}</small>
          </div>
        ))}
      </div>
      {notes.length > 0 && (
        <button onClick={() => setNotes([])}
          style={{ marginTop: '20px', color: '#d32f2f', background: 'none', border: 'none', cursor: 'pointer' }}>
          Clear all notes
        </button>
      )}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useLocalStorage encapsulates the entire pattern. The lazy initialiser (useState(() => ...)) reads from localStorage only on the first render — not on every re-render. The useEffect writes to localStorage whenever the value changes. The consuming component (StickyNotes) just uses [notes, setNotes] exactly like normal useState.`},{type:`text`,content:`The try/catch blocks handle edge cases: corrupted JSON in localStorage, storage quota exceeded, or private browsing mode where localStorage might throw. The app still works — it just falls back to the initial value.`},{type:`text`,content:`The key is also a dependency of the effect — if the component reuses the hook with a different key (e.g., switching between note categories), it saves to the correct key.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Read localStorage inside the effect instead of the lazy initialiser → The initial render shows initialValue, then the effect fires and re-renders with the stored value. The user sees a flash of empty state.`,`Forget JSON.stringify / JSON.parse → localStorage only stores strings. Storing an array directly saves '[object Object]' which can't be parsed back.`,`Include the result of localStorage.getItem in the dependency array → Reading localStorage in the effect to check if it changed triggers re-reads on every render.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a preferences panel with dark mode toggle, font size selector (small/medium/large), and accent colour picker. Persist all preferences with useLocalStorage. Apply the preferences to the page using useEffect to set CSS custom properties on document.documentElement.`,hint:`Hint: Store all preferences in one object: { darkMode: false, fontSize: 'medium', accentColor: '#1976d2' }. Use useEffect to set CSS variables: document.documentElement.style.setProperty('--accent', prefs.accentColor).`,solution:`import { useState, useEffect } from 'react';

function useLocalStorage(key, init) {
  const [val, setVal] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) || init; }
    catch { return init; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(val)); }, [key, val]);
  return [val, setVal];
}

function Preferences() {
  const [prefs, setPrefs] = useLocalStorage('user-prefs', {
    darkMode: false, fontSize: 'medium', accent: '#1976d2'
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg', prefs.darkMode ? '#1e1e1e' : '#fff');
    root.style.setProperty('--text', prefs.darkMode ? '#eee' : '#333');
    root.style.setProperty('--accent', prefs.accent);
    root.style.setProperty('--font-size', prefs.fontSize === 'small' ? '14px' : prefs.fontSize === 'large' ? '20px' : '16px');
  }, [prefs]);

  const update = (key, value) => setPrefs(p => ({ ...p, [key]: value }));

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontSize: 'var(--font-size)', padding: '20px', minHeight: '100vh' }}>
      <h1 style={{ color: 'var(--accent)' }}>Preferences</h1>
      <label><input type="checkbox" checked={prefs.darkMode} onChange={() => update('darkMode', !prefs.darkMode)} /> Dark Mode</label>
      <div style={{ margin: '10px 0' }}>
        <label>Font Size: </label>
        {['small', 'medium', 'large'].map(s => (
          <button key={s} onClick={() => update('fontSize', s)}
            style={{ fontWeight: prefs.fontSize === s ? 'bold' : 'normal', margin: '0 5px' }}>{s}</button>
        ))}
      </div>
      <div>
        <label>Accent: </label>
        {['#1976d2', '#e91e63', '#4CAF50', '#FF9800'].map(c => (
          <button key={c} onClick={() => update('accent', c)}
            style={{ width: 30, height: 30, background: c, border: prefs.accent === c ? '3px solid #333' : '1px solid #ddd',
              borderRadius: '50%', margin: '0 4px', cursor: 'pointer' }} />
        ))}
      </div>
      <p style={{ marginTop: '20px', color: '#999' }}>Refresh the page — your preferences persist!</p>
    </div>
  );
}

export default Preferences;`},{type:`title`,content:`Example 5: Dependent Dropdowns — Chained Fetches`},{type:`text`,content:`When one selection determines the options for the next — like country → city, or category → subcategory — you need chained state and effects. Selecting a country (state change) triggers an effect that fetches cities, which populates the city dropdown. This is one of the most practical useState + useEffect patterns in production apps.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Chained effects: one state change triggers a fetch that populates another dropdown`,`Resetting dependent state when the parent selection changes`,`Multiple effects with different dependency chains`,`Loading states per dropdown`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function LocationPicker() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productDetail, setProductDetail] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // Effect 1: Fetch categories on mount
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(console.error);
  }, []);

  // Effect 2: Fetch products when category changes
  useEffect(() => {
    if (!selectedCategory) {
      setProducts([]);
      setSelectedProduct('');
      setProductDetail(null);
      return;
    }

    const controller = new AbortController();
    setLoadingProducts(true);
    setSelectedProduct('');   // Reset dependent selection
    setProductDetail(null);   // Reset dependent detail

    fetch(\`https://dummyjson.com/products/category/\${selectedCategory}\`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => { setProducts(data.products || []); setLoadingProducts(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoadingProducts(false); });

    return () => controller.abort();
  }, [selectedCategory]);

  // Effect 3: Fetch product detail when product is selected
  useEffect(() => {
    if (!selectedProduct) { setProductDetail(null); return; }

    const controller = new AbortController();
    fetch(\`https://dummyjson.com/products/\${selectedProduct}\`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => setProductDetail(data))
      .catch(err => { if (err.name !== 'AbortError') setProductDetail(null); });

    return () => controller.abort();
  }, [selectedProduct]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Product Explorer</h1>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Category</label>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}
          style={{ width: '100%', padding: '10px' }}>
          <option value="">Select a category</option>
          {categories.map(cat => (
            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Product</label>
        <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}
          disabled={!selectedCategory || loadingProducts}
          style={{ width: '100%', padding: '10px' }}>
          <option value="">
            {loadingProducts ? 'Loading...' : 'Select a product'}
          </option>
          {products.map(p => (
            <option key={p.id} value={p.id}>{p.title} — £{p.price}</option>
          ))}
        </select>
      </div>

      {productDetail && (
        <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px' }}>
          <img src={productDetail.thumbnail} alt={productDetail.title}
            width={200} style={{ borderRadius: '8px' }} />
          <h2>{productDetail.title}</h2>
          <p>{productDetail.description}</p>
          <p><strong>£{productDetail.price}</strong> — Rating: {'⭐'.repeat(Math.round(productDetail.rating))}</p>
        </div>
      )}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Three effects form a chain: Effect 1 (mount) → fetches categories. Effect 2 (category change) → fetches products for that category. Effect 3 (product selection) → fetches full product details. Each effect reads one state value and writes to the next level's data.`},{type:`text`,content:`Resetting dependent state is critical. When the category changes, Effect 2 immediately resets selectedProduct and productDetail to empty. Without this reset, switching from 'Electronics' to 'Furniture' would still show the previously selected electronic product until the user makes a new selection.`},{type:`text`,content:`The disabled attribute on the product dropdown prevents selection while products are loading or when no category is chosen. This prevents the user from selecting stale options that belong to the previous category.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Skip resetting selectedProduct when category changes → The product dropdown shows stale items from the previous category until the fetch completes. The user might select a product that no longer exists in the new category.`,`Put all three fetches in one effect → Changing a product selection refetches categories and products unnecessarily. Each level of the chain should be a separate effect.`,`Forget AbortController on Effect 2 → Quickly switching categories causes race conditions. Products from 'Laptops' might arrive after 'Smartphones', overwriting the correct list.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a 'User → Posts → Comments' chain. Dropdown 1: select a user from https://jsonplaceholder.typicode.com/users. Dropdown 2: shows that user's posts from /posts?userId={id}. Selecting a post displays its comments from /comments?postId={id}.`,hint:`Hint: Three effects with three dependency chains: [] for users, [userId] for posts, [postId] for comments. Reset downstream state on each parent change.`,solution:`import { useState, useEffect } from 'react';

function UserPostsComments() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState('');
  const [postId, setPostId] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(setUsers);
  }, []);

  useEffect(() => {
    if (!userId) { setPosts([]); setPostId(''); setComments([]); return; }
    setPostId(''); setComments([]);
    fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`)
      .then(r => r.json()).then(setPosts);
  }, [userId]);

  useEffect(() => {
    if (!postId) { setComments([]); return; }
    fetch(\`https://jsonplaceholder.typicode.com/comments?postId=\${postId}\`)
      .then(r => r.json()).then(setComments);
  }, [postId]);

  return (
    <div>
      <h1>User → Posts → Comments</h1>
      <select value={userId} onChange={e => setUserId(e.target.value)}>
        <option value="">Select user</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
      <select value={postId} onChange={e => setPostId(e.target.value)} disabled={!userId}>
        <option value="">Select post</option>
        {posts.map(p => <option key={p.id} value={p.id}>{p.title.slice(0, 40)}...</option>)}
      </select>
      {comments.length > 0 && (
        <div>
          <h3>{comments.length} Comments</h3>
          {comments.map(c => <div key={c.id} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            <strong>{c.name}</strong><p>{c.body}</p>
          </div>)}
        </div>
      )}
    </div>
  );
}

export default UserPostsComments;`},{type:`title`,content:`Example 6: Polling Dashboard`},{type:`text`,content:`Dashboards that display live data need periodic fetching (polling). State controls what to poll and whether polling is active. An effect manages the interval, fetches fresh data, and updates state. Another effect keeps the document title in sync. This combines timers, fetch, and multiple coordinated states.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`setInterval + fetch in useEffect for polling`,`State-controlled polling (pause/resume)`,`Multiple states updated by one effect`,`Auto-refresh indicator with last-updated timestamp`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function CryptoDashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isPolling, setIsPolling] = useState(true);
  const [interval, setRefreshInterval] = useState(15);

  // Effect 1: Fetch + poll at the selected interval
  useEffect(() => {
    const fetchCoins = () => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=10')
        .then(res => res.json())
        .then(data => {
          setCoins(data);
          setLastUpdated(new Date().toLocaleTimeString());
          setLoading(false);
        })
        .catch(err => { console.error(err); setLoading(false); });
    };

    fetchCoins(); // Fetch immediately

    if (!isPolling) return; // Don't set up interval if paused

    const timer = setInterval(fetchCoins, interval * 1000);
    return () => clearInterval(timer);
  }, [isPolling, interval]);

  // Effect 2: Update document title with top coin price
  useEffect(() => {
    if (coins.length > 0) {
      document.title = \`BTC: £\${coins[0]?.current_price?.toLocaleString() || '...'}\`;
    }
    return () => { document.title = 'Dashboard'; };
  }, [coins]);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Crypto Dashboard</h1>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => setIsPolling(p => !p)}>
            {isPolling ? '⏸ Pause' : '▶ Resume'}
          </button>
          <select value={interval} onChange={e => setRefreshInterval(Number(e.target.value))}>
            <option value={10}>10s</option>
            <option value={15}>15s</option>
            <option value={30}>30s</option>
            <option value={60}>60s</option>
          </select>
        </div>
      </div>
      {lastUpdated && (
        <p style={{ color: '#666', fontSize: '13px' }}>
          Last updated: {lastUpdated} {isPolling && \`· Refreshing every \${interval}s\`}
        </p>
      )}
      <div>
        {coins.map((coin, i) => (
          <div key={coin.id} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '12px', borderBottom: '1px solid #eee',
          }}>
            <span style={{ width: '24px', color: '#999' }}>{i + 1}</span>
            <img src={coin.image} alt={coin.name} width={32} height={32} />
            <div style={{ flex: 1 }}>
              <strong>{coin.name}</strong>
              <span style={{ color: '#999', marginLeft: '6px' }}>{coin.symbol.toUpperCase()}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>£{coin.current_price?.toLocaleString()}</p>
              <p style={{
                margin: 0, fontSize: '13px',
                color: coin.price_change_percentage_24h >= 0 ? '#4CAF50' : '#f44336',
              }}>
                {coin.price_change_percentage_24h >= 0 ? '↑' : '↓'}
                {Math.abs(coin.price_change_percentage_24h)?.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Effect 1 does the heavy lifting: immediate fetch, then sets up an interval if polling is active. When the user changes isPolling or the interval time, the cleanup clears the old timer and the effect creates a new one with the updated settings. Pausing sets isPolling to false → cleanup fires → early return means no new interval.`},{type:`text`,content:`Effect 2 is a pure sync effect — keep the document title in sync with the top coin's price. It runs whenever coins updates (from the polling fetch). The cleanup restores the title when the component unmounts.`},{type:`text`,content:`The interval dropdown is a great example of state controlling an effect: changing the refresh rate from 15s to 30s triggers cleanup (clears the 15s interval) and setup (creates a 30s interval). The user seamlessly adjusts polling without any manual timer management.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Include coins in the polling effect's deps → Fetching updates coins, which re-runs the effect, which fetches again — infinite polling loop.`,`Use setInterval without cleanup → Changing the interval from 15s to 30s adds a second timer without stopping the first. Both fire simultaneously.`,`Forget the early return when !isPolling → Pausing still creates a new interval because the code runs past the guard.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a weather dashboard that polls https://wttr.in/London?format=j1 every 60 seconds. Display temperature, humidity, and weather description. Add a city input that changes the polled URL. Pause polling when the input is focused (user is typing).`,hint:`Hint: The city is state that's part of the effect's dependency array. Use onFocus/onBlur to set an isFocused state that pauses polling.`,solution:`import { useState, useEffect } from 'react';

function WeatherDashboard() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    if (isTyping || !city.trim()) return;

    const fetchWeather = () => {
      fetch(\`https://wttr.in/\${city}?format=j1\`)
        .then(r => r.json())
        .then(data => {
          setWeather(data.current_condition?.[0]);
          setLastUpdate(new Date().toLocaleTimeString());
        })
        .catch(console.error);
    };

    fetchWeather();
    const timer = setInterval(fetchWeather, 60000);
    return () => clearInterval(timer);
  }, [city, isTyping]);

  return (
    <div>
      <h1>Weather</h1>
      <input value={city} onChange={e => setCity(e.target.value)}
        onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)}
        placeholder="Enter city" />
      {weather && (
        <div>
          <p>🌡️ {weather.temp_C}°C — {weather.weatherDesc?.[0]?.value}</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p style={{ color: '#999', fontSize: '13px' }}>Updated: {lastUpdate}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;`},{type:`title`,content:`Example 7: Multi-Step Wizard with Progress Sync`},{type:`text`,content:`Multi-step forms need state for the current step and form data, plus effects to sync the progress bar, persist drafts, and update the page title. This example shows how multiple pieces of state and multiple effects coordinate to create a seamless wizard experience.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Complex form state + step navigation`,`Multiple effects syncing to different external targets`,`Auto-save draft to localStorage`,`Progress calculated as derived state`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(() => {
    try { return JSON.parse(localStorage.getItem('booking-draft')) || {
      name: '', email: '', date: '', guests: 1, dietary: '', notes: ''
    }; } catch { return { name: '', email: '', date: '', guests: 1, dietary: '', notes: '' }; }
  });
  const [errors, setErrors] = useState({});

  const steps = [
    { title: 'Your Details', fields: ['name', 'email'] },
    { title: 'Event Details', fields: ['date', 'guests'] },
    { title: 'Preferences', fields: ['dietary', 'notes'] },
    { title: 'Confirmation', fields: [] },
  ];

  // Derived: progress percentage
  const filledFields = Object.values(form).filter(v => v !== '' && v !== 1).length;
  const progress = Math.round((filledFields / 5) * 100); // 5 meaningful fields

  // Effect 1: Auto-save draft to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('booking-draft', JSON.stringify(form));
    }, 1000); // Debounced save
    return () => clearTimeout(timer);
  }, [form]);

  // Effect 2: Update document title with current step
  useEffect(() => {
    document.title = \`Step \${step}/\${steps.length}: \${steps[step - 1].title}\`;
    return () => { document.title = 'Booking'; };
  }, [step]);

  // Effect 3: Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!form.name.trim()) newErrors.name = 'Name is required';
      if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    }
    if (step === 2) {
      if (!form.date) newErrors.date = 'Date is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => { if (validateStep()) setStep(s => s + 1); };
  const prev = () => setStep(s => s - 1);
  const submit = () => {
    localStorage.removeItem('booking-draft');
    alert(\`Booking confirmed for \${form.name} on \${form.date}!\`);
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '10px', boxSizing: 'border-box',
    border: \`1px solid \${errors[field] ? '#d32f2f' : '#ddd'}\`, borderRadius: '6px',
  });

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Book an Event</h1>

      {/* Progress bar */}
      <div style={{ background: '#eee', borderRadius: '10px', height: '8px', marginBottom: '10px' }}>
        <div style={{ width: \`\${progress}%\`, background: '#1976d2', height: '100%',
          borderRadius: '10px', transition: 'width 0.3s' }} />
      </div>
      <p style={{ color: '#666', fontSize: '13px', marginBottom: '20px' }}>
        Step {step} of {steps.length}: {steps[step - 1].title} · {progress}% complete
      </p>

      {step === 1 && (
        <div>
          <label>Name *</label>
          <input value={form.name} onChange={handleChange('name')} style={inputStyle('name')} />
          {errors.name && <p style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.name}</p>}
          <label style={{ marginTop: '12px', display: 'block' }}>Email *</label>
          <input value={form.email} onChange={handleChange('email')} type="email" style={inputStyle('email')} />
          {errors.email && <p style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.email}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Event Date *</label>
          <input value={form.date} onChange={handleChange('date')} type="date" style={inputStyle('date')} />
          {errors.date && <p style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.date}</p>}
          <label style={{ marginTop: '12px', display: 'block' }}>Number of Guests</label>
          <input value={form.guests} onChange={handleChange('guests')} type="number" min="1" style={inputStyle('guests')} />
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Dietary Requirements</label>
          <select value={form.dietary} onChange={handleChange('dietary')} style={inputStyle('dietary')}>
            <option value="">None</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
          <label style={{ marginTop: '12px', display: 'block' }}>Notes</label>
          <textarea value={form.notes} onChange={handleChange('notes')}
            style={{ ...inputStyle('notes'), minHeight: '80px' }} />
        </div>
      )}

      {step === 4 && (
        <div style={{ lineHeight: 1.8 }}>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Date:</strong> {form.date}</p>
          <p><strong>Guests:</strong> {form.guests}</p>
          <p><strong>Dietary:</strong> {form.dietary || 'None'}</p>
          <p><strong>Notes:</strong> {form.notes || 'None'}</p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {step > 1 && <button onClick={prev}>← Previous</button>}
        <div style={{ marginLeft: 'auto' }}>
          {step < 4 ? <button onClick={next}>Next →</button>
            : <button onClick={submit} style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px' }}>
                Confirm Booking
              </button>}
        </div>
      </div>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Three effects handle three different sync targets. Effect 1 auto-saves the form to localStorage with a 1-second debounce — if the user closes the tab accidentally, their progress is preserved. Effect 2 keeps the browser tab title updated with the current step. Effect 3 scrolls to the top when navigating between steps. All three are independent and fire based on different dependencies.`},{type:`text`,content:`Progress is derived, not stored. It's computed from the form state during render — counting how many fields have been filled. No effect or extra state needed. This is a core principle: if you can calculate it from existing state, don't add another useState + useEffect pair.`},{type:`text`,content:`The lazy initialiser in useState(() => JSON.parse(localStorage.getItem(...))) reads the saved draft on first mount. This is better than reading localStorage in a useEffect because it avoids the flash of empty state → populated state that happens when effects run after the first paint.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Store progress in state and sync with an effect → Extra state + effect for something you can compute in one line. Adds complexity with zero benefit.`,`Save to localStorage on every keystroke (no debounce) → Writing to localStorage is synchronous and blocks the main thread. Rapid typing causes noticeable lag.`,`Read localStorage in a useEffect instead of lazy init → First render shows empty form, then effect fires and fills it in. User sees a flash of empty fields.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a step timer to the wizard. Show how long the user has spent on each step (in seconds). Reset the timer when the step changes. Pause the timer when the tab is hidden (use document.visibilitychange). Display total time spent on the confirmation page.`,hint:`Hint: useState(0) for stepTime. useEffect with setInterval for the timer, dependent on [step]. A separate useEffect for visibilitychange. Store an array of times per step.`,solution:`import { useState, useEffect, useRef } from 'react';

function StepTimer({ step, totalSteps }) {
  const [stepTime, setStepTime] = useState(0);
  const [stepTimes, setStepTimes] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const prevStep = useRef(step);

  useEffect(() => {
    if (prevStep.current !== step) {
      setStepTimes(prev => [...prev, stepTime]);
      setStepTime(0);
      prevStep.current = step;
    }
  }, [step, stepTime]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setStepTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const totalTime = [...stepTimes, stepTime].reduce((a, b) => a + b, 0);

  return (
    <div style={{ fontSize: '13px', color: '#666' }}>
      <p>Step {step} time: {stepTime}s {isPaused && '(paused)'}</p>
      {step === totalSteps && <p>Total time: {totalTime}s across {stepTimes.length + 1} steps</p>}
    </div>
  );
}

export default StepTimer;`},{type:`title`,content:`Example 8: Task Scheduler with Time-Based Alerts`},{type:`text`,content:`This capstone example brings together everything: complex state management (tasks, alerts, form input), multiple effects (polling for due dates, document title sync, notification permissions), and real-world patterns (date handling, filtering, user interaction). It's the kind of component you'd find in a production project management tool.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Complex state (tasks array with dates) + effects (interval checks)`,`Time-based logic: checking due dates against current time`,`Multiple coordinated effects with different intervals`,`Form handling combined with persistent data`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useEffect } from 'react';

function TaskScheduler() {
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('scheduler-tasks')) || []; }
    catch { return []; }
  });
  const [alerts, setAlerts] = useState([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('all'); // all, pending, overdue, done

  // Effect 1: Persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem('scheduler-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Effect 2: Check for overdue tasks every 30 seconds
  useEffect(() => {
    const checkDueDates = () => {
      const now = new Date();
      const overdue = tasks.filter(t =>
        !t.done && new Date(t.dueDate) <= now
      );
      setAlerts(overdue.map(t => ({
        id: t.id,
        message: \`"\${t.text}" is overdue!\`,
      })));
    };

    checkDueDates(); // Check immediately
    const timer = setInterval(checkDueDates, 30000);
    return () => clearInterval(timer);
  }, [tasks]);

  // Effect 3: Document title shows pending count
  useEffect(() => {
    const pending = tasks.filter(t => !t.done).length;
    document.title = pending > 0 ? \`(\${pending}) Tasks\` : 'All Done!';
    return () => { document.title = 'Scheduler'; };
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim() || !dueDate) return;
    setTasks(prev => [...prev, {
      id: Date.now(),
      text: input,
      dueDate,
      done: false,
      createdAt: new Date().toISOString(),
    }]);
    setInput('');
    setDueDate('');
  };

  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const dismissAlert = (id) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  // Derived: filtered tasks
  const now = new Date();
  const filtered = tasks.filter(t => {
    if (filter === 'pending') return !t.done;
    if (filter === 'overdue') return !t.done && new Date(t.dueDate) <= now;
    if (filter === 'done') return t.done;
    return true;
  });

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Task Scheduler</h1>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          {alerts.map(alert => (
            <div key={alert.id} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', backgroundColor: '#ffebee',
              border: '1px solid #ef9a9a', borderRadius: '8px', marginBottom: '6px',
            }}>
              <span>⏰</span>
              <p style={{ flex: 1, margin: 0 }}>{alert.message}</p>
              <button onClick={() => dismissAlert(alert.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
            </div>
          ))}
        </div>
      )}

      {/* Add task form */}
      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="Task description" style={{ flex: 1, padding: '8px' }} />
        <input type="datetime-local" value={dueDate} onChange={e => setDueDate(e.target.value)}
          style={{ padding: '8px' }} />
        <button type="submit">Add</button>
      </form>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '15px' }}>
        {['all', 'pending', 'overdue', 'done'].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '6px 12px', borderRadius: '15px', border: '1px solid #ddd',
            backgroundColor: filter === f ? '#1976d2' : '#fff',
            color: filter === f ? '#fff' : '#333', cursor: 'pointer',
          }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f === 'overdue' && alerts.length > 0 && \` (\${alerts.length})\`}
          </button>
        ))}
      </div>

      {/* Task list */}
      {filtered.length === 0 ? (
        <p style={{ color: '#999', textAlign: 'center' }}>No tasks in this category</p>
      ) : (
        filtered.map(task => {
          const isOverdue = !task.done && new Date(task.dueDate) <= now;
          return (
            <div key={task.id} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px', borderBottom: '1px solid #eee',
              opacity: task.done ? 0.5 : 1,
            }}>
              <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, textDecoration: task.done ? 'line-through' : 'none' }}>
                  {task.text}
                </p>
                <small style={{ color: isOverdue ? '#d32f2f' : '#999' }}>
                  Due: {new Date(task.dueDate).toLocaleString()}
                  {isOverdue && ' — OVERDUE'}
                </small>
              </div>
              <button onClick={() => deleteTask(task.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
            </div>
          );
        })
      )}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Three effects, three concerns. Effect 1 persists tasks to localStorage whenever they change — the simplest sync pattern. Effect 2 polls for overdue tasks every 30 seconds by comparing each task's dueDate to the current time, updating the alerts state. Effect 3 keeps the document title showing the pending task count.`},{type:`text`,content:`The alert system is a reactive chain: the user adds a task → tasks state updates → Effect 2 re-evaluates due dates → alerts state updates → alert UI renders. Checking a task as done → tasks updates → Effect 2 removes it from alerts. The entire flow is driven by state changes, not manual orchestration.`},{type:`text`,content:`Filtered tasks are derived, not stored. The filter state controls which category to show, and the actual filtering happens during render. This avoids the common mistake of adding a filteredTasks state with a syncing effect — just compute what you need from existing state.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Include alerts in Effect 2's dependency array → Setting alerts triggers the effect, which sets alerts again — infinite loop. The effect should only depend on tasks.`,`Skip the cleanup on the interval → Changing tasks clears and restarts the interval. Without cleanup, every task change adds another 30-second interval without removing the old one.`,`Store filteredTasks in state → Extra complexity, potential sync bugs, and a useEffect that does nothing a single line of render-time code can do.`,`Forget the lazy initialiser for tasks → First render shows empty list, then useEffect reads localStorage and refills it — user sees a flash of empty state.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add recurring tasks. When a task is marked as done, if it has a repeat property ('daily', 'weekly'), auto-create a new task with the due date shifted forward. Use a useEffect that watches for newly completed recurring tasks.`,hint:`Hint: In a useEffect with [tasks] dependency, find tasks that are done AND have a repeat property AND don't already have a replacement. Create a new task with the shifted date and add it to the tasks array.`,solution:`// Add this useEffect inside TaskScheduler:

useEffect(() => {
  const newTasks = [];
  tasks.forEach(task => {
    if (task.done && task.repeat && !task.recurring) {
      const dueDate = new Date(task.dueDate);
      if (task.repeat === 'daily') dueDate.setDate(dueDate.getDate() + 1);
      if (task.repeat === 'weekly') dueDate.setDate(dueDate.getDate() + 7);
      newTasks.push({
        id: Date.now() + Math.random(),
        text: task.text,
        dueDate: dueDate.toISOString().slice(0, 16),
        done: false,
        repeat: task.repeat,
        createdAt: new Date().toISOString(),
      });
    }
  });
  if (newTasks.length > 0) {
    setTasks(prev => [
      ...prev.map(t => t.done && t.repeat ? { ...t, recurring: true } : t),
      ...newTasks,
    ]);
  }
}, [tasks]);

// Mark recurring tasks on creation:
// { id: ..., text: 'Daily standup', dueDate: '...', done: false, repeat: 'daily' }`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've now mastered the reactive loop — the core pattern that powers every dynamic React application. From search + API to infinite scroll, from form validation to real-time dashboards, the pattern is always the same: state changes trigger effects, effects do external work, results update state, and the cycle continues. Here's where to go next:`},{type:`list`,items:[`Custom Hooks — Extract the patterns from this guide (useLocalStorage, useFetch, useDebounce, usePolling) into reusable hooks for your projects.`,`useReducer — When your state object gets complex (like the task scheduler), useReducer paired with useEffect gives you cleaner action-based state management.`,`React Query / TanStack Query — For production data fetching, a dedicated library handles caching, background refetching, pagination, and optimistic updates better than manual useEffect.`,`Build projects — Take any example from this guide and extend it into a full application. The task scheduler could become a Trello clone. The polling dashboard could become a stock portfolio tracker.`]},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=[`useState + useEffect`,`useState and useEffect`],h=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),g=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),_=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,v=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||_(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(g,{}):(0,f.jsx)(h,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},y=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let n=(e,t)=>{let n=a[e]||t[0]?.id;return t.find(e=>e.id===n)?.code||t[0]?.code||``},[a,o]=(0,l.useState)(t),[c,d]=(0,l.useState)(null),[p,h]=(0,l.useState)({}),[g,_]=(0,l.useState)(!1),[y,b]=(0,l.useState)(()=>{let e=localStorage.getItem(`useStateUseEffectCheckedTitles`);return e?JSON.parse(e):{}}),x=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),S=(0,l.useRef)({}),C=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;_(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let w=()=>{C.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`useStateUseEffectCheckedTitles`,JSON.stringify(y))},[y]);let T=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{d(t),setTimeout(()=>d(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),d(t),setTimeout(()=>d(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},E=(e,t,n)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let r=n.findIndex(e=>e.id===a[t]),i;i=e.key===`ArrowLeft`?r>0?r-1:n.length-1:r<n.length-1?r+1:0,o({...a,[t]:n[i].id});let s=S.current[`${t}-${n[i].id}`];s&&s.focus()}},D=e=>{h(t=>({...t,[e]:!t[e]}))},O=e=>{b(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Comprehensive Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),x.length>0&&(0,f.jsxs)(`section`,{ref:C,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:x.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content,m)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:y[t]||!1,onChange:()=>O(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e,m)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(v,{code:e.content,index:t,handleCopy:T,copiedIndex:c}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(n=>{let r=`example-${t}`,i=`${r}-${n.id}`,s=`${i}-panel`;return(0,f.jsx)(`button`,{id:i,role:`tab`,"aria-selected":a[r]===n.id,"aria-controls":s,className:a[r]===n.id?`active`:``,onClick:()=>o({...a,[r]:n.id}),onKeyDown:n=>E(n,r,e.tabs,t),tabIndex:a[r]===n.id?0:-1,ref:e=>S.current[i]=e,children:n.label},n.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${a[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${a[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(v,{code:n(`example-${t}`,e.tabs),index:t,handleCopy:T,copiedIndex:c})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint,m)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>D(t),children:p[t]?`Hide Solution`:`Show Solution`}),p[t]&&(0,f.jsx)(v,{code:e.solution,index:`solution-${t}`,handleCopy:T,copiedIndex:c})]})]},`para-${t}-${e.type}`))}),g&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:w,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};v.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string])};export{y as default};
//# sourceMappingURL=StateEffetcGuide-h-mvWhU3.js.map