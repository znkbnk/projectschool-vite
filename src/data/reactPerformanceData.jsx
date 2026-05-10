/* eslint-disable no-template-curly-in-string */
const reactPerformanceData = [
  {
    id: "react-performance-guide",
    title: "The Definitive Guide to React Performance",
    image: "/images/reactPerformance.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to React Performance. You've learned components, hooks, routing, and data fetching — now you need to make it all fast. React is fast by default, but real apps hit performance walls: lists that lag on every keystroke, dashboards where one counter update re-renders 50 components, expensive calculations running on every render. This guide teaches you React's three performance tools — React.memo, useMemo, and useCallback — through seven progressive examples, from understanding re-renders to auditing a full application.",
      },

      // ═══════════════════════════════════════════
      // SECTION 1: HOW RE-RENDERS WORK
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "How Re-renders Work in React",
      },
      {
        type: "text",
        content:
          "A re-render happens when React calls your component function again to check if the output has changed. State update → component re-renders → all its children re-render. This is React's default behaviour and it's usually fine. The DOM update itself is fast because React diffs the virtual DOM and only touches what actually changed. The expense is in your component code running unnecessarily.",
      },
      {
        type: "boldText",
        content: "What Triggers a Re-render",
      },
      {
        type: "list",
        items: [
          "State change: Calling setState, dispatch, or a setter from useState. The component that owns the state re-renders.",
          "Parent re-renders: When a parent component re-renders, ALL its children re-render — even if the props haven't changed. This is where most performance problems come from.",
          "Context change: When a context value changes, every component that consumes that context re-renders.",
        ],
      },
      {
        type: "boldText",
        content: "What Does NOT Trigger a Re-render",
      },
      {
        type: "list",
        items: [
          "Props changing alone: Props don't trigger re-renders. The parent re-rendering (which passes new props) is what triggers the child re-render.",
          "useRef updates: Changing a ref value doesn't cause a re-render. That's the whole point of refs.",
          "Variables outside React: Changing a regular JavaScript variable doesn't trigger anything.",
        ],
      },
      {
        type: "code",
        content: `// Parent re-renders → ALL children re-render (even with same props)
function Parent() {
  const [count, setCount] = useState(0);
  console.log('Parent renders');

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChild />   {/* Re-renders every time count changes! */}
      <StaticHeader />     {/* Re-renders too, even though nothing changed! */}
    </div>
  );
}

function ExpensiveChild() {
  console.log('ExpensiveChild renders'); // Logs on EVERY parent re-render
  return <div>I'm expensive to render</div>;
}`,
      },

      // ═══════════════════════════════════════════
      // SECTION 2: THE GOLDEN RULE
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "The Golden Rule: Don't Optimise Prematurely",
      },
      {
        type: "text",
        content:
          "Most React apps don't need performance optimisation. React's re-rendering is fast. A component re-rendering in 0.1ms is not a problem, even if it re-renders 100 times. Optimisation adds complexity (more code, harder to debug, potential bugs from stale values) and should only be applied when you can measure a real problem.",
      },
      {
        type: "boldText",
        content: "When to Optimise",
      },
      {
        type: "list",
        items: [
          "You can feel the lag: Typing in an input feels sluggish. Scrolling stutters. Clicking a button has a visible delay. If you can't feel it, don't optimise it.",
          "You can measure the problem: React DevTools Profiler shows a component taking 16ms+ to render (blocking one frame at 60fps). Without measurement, you're guessing.",
          "Expensive computations: Sorting/filtering a 10,000-item array, complex calculations, or heavy data transformations that run on every render.",
          "Large lists: Rendering 500+ DOM elements when only 20 are visible. Consider virtualisation.",
          "Frequent re-renders: A component that re-renders 60 times per second (mouse move, animation) where children don't need to update.",
        ],
      },
      {
        type: "boldText",
        content: "When NOT to Optimise",
      },
      {
        type: "list",
        items: [
          "A component re-renders but it's fast: If a component renders in <1ms, memo/useMemo adds overhead for zero benefit.",
          "As a default: Don't wrap every component in memo() 'just in case'. Most re-renders are cheap.",
          "Before profiling: Never optimise based on assumptions. Profile first, optimise second.",
        ],
      },

      // ═══════════════════════════════════════════
      // SECTION 3: THE THREE TOOLS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "The Three Performance Tools",
      },
      {
        type: "code",
        content: `// 1. React.memo — Skip re-rendering a component if its props haven't changed
const MemoizedChild = React.memo(function Child({ name }) {
  console.log('Child renders');
  return <p>Hello, {name}</p>;
});
// Parent re-renders but name is still "Alice" → Child does NOT re-render

// 2. useMemo — Cache an expensive computation between renders
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.price - b.price); // Only re-sorts when items change
}, [items]);

// 3. useCallback — Cache a function reference between renders
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []); // Same function reference every render
// Useful when passing callbacks to memo() components`,
      },
      {
        type: "text",
        content:
          "These three tools solve different problems: React.memo prevents a child from re-rendering when its parent re-renders. useMemo prevents expensive work from running on every render. useCallback creates a stable function reference so memo'd children don't see 'new' props every time. They work together — useCallback is often needed to make React.memo effective.",
      },

      // ═══════════════════════════════════════════
      // SECTION 4: COMMON PITFALLS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Common Pitfalls",
      },
      {
        type: "boldText",
        content: "1. memo() Broken by New Object/Array/Function Props",
      },
      {
        type: "code",
        content: `// BUG: memo is useless here — style is a NEW object every render
const Child = React.memo(function Child({ style }) {
  return <div style={style}>Hello</div>;
});

function Parent() {
  return <Child style={{ color: 'red' }} />; // { color: 'red' } !== { color: 'red' }
}

// FIX: Move the object outside, or useMemo
const style = { color: 'red' }; // Stable reference (module level)
function Parent() {
  return <Child style={style} />;
}

// Same problem with inline functions:
<Child onClick={() => doSomething()} /> // New function every render → memo broken
<Child onClick={handleClick} />         // useCallback → stable reference → memo works`,
      },
      {
        type: "boldText",
        content: "2. useMemo with Wrong Dependencies",
      },
      {
        type: "code",
        content: `// BUG: Empty deps — sorts once, never updates when items change
const sorted = useMemo(() => [...items].sort(compareFn), []);

// BUG: Missing deps — sorted is stale when compareFn changes
const sorted = useMemo(() => [...items].sort(compareFn), [items]);

// CORRECT: Include all values used inside the callback
const sorted = useMemo(() => [...items].sort(compareFn), [items, compareFn]);`,
      },
      {
        type: "boldText",
        content: "3. Optimising Cheap Components",
      },
      {
        type: "text",
        content:
          "Wrapping a simple <p>{name}</p> component in React.memo adds the overhead of comparing props on every render — which costs more than just re-rendering the paragraph. Only memo components that are genuinely expensive: large DOM trees, heavy computations, or components that render frequently but rarely change.",
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 1: UNDERSTANDING RE-RENDERS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 1: Understanding Re-renders",
      },
      {
        type: "text",
        content:
          "Before optimising anything, you need to see when re-renders happen. This example adds a visual flash to every component when it re-renders, so you can literally watch the render cascade. You'll see how a single state change in a parent causes every child to re-render.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Visualising when components re-render",
          "How parent state changes cascade to all children",
          "Which re-renders are necessary vs wasted",
          "Using useRef to count render frequency",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useRef, useEffect } from 'react';

// Helper: wraps any component with a render flash + counter
function RenderTracker({ name, children }) {
  const renderCount = useRef(0);
  const flashRef = useRef(null);
  renderCount.current += 1;

  useEffect(() => {
    if (flashRef.current) {
      flashRef.current.style.background = '#fff3cd';
      const timer = setTimeout(() => { flashRef.current.style.background = 'transparent'; }, 300);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div ref={flashRef} style={{ padding: '10px', margin: '4px', border: '1px solid #eee',
      borderRadius: '8px', transition: 'background 0.3s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <strong style={{ fontSize: '13px' }}>{name}</strong>
        <span style={{ fontSize: '12px', color: '#999' }}>renders: {renderCount.current}</span>
      </div>
      {children}
    </div>
  );
}

function Counter({ count, onIncrement }) {
  return (
    <RenderTracker name="Counter">
      <button onClick={onIncrement}>Count: {count}</button>
    </RenderTracker>
  );
}

function UserCard({ name }) {
  return (
    <RenderTracker name="UserCard">
      <p>👤 {name}</p>
    </RenderTracker>
  );
}

function StaticFooter() {
  return (
    <RenderTracker name="StaticFooter">
      <p style={{ color: '#999', fontSize: '13px' }}>© 2025 MyApp — I never change but I still re-render!</p>
    </RenderTracker>
  );
}

function ExpensiveList({ items }) {
  return (
    <RenderTracker name="ExpensiveList">
      {items.map((item, i) => <p key={i} style={{ margin: '2px 0', fontSize: '14px' }}>{item}</p>)}
    </RenderTracker>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [name] = useState('Alice');
  const items = ['React', 'Performance', 'Optimisation'];

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <RenderTracker name="App (Parent)">
        <h1>Re-render Visualiser</h1>
        <p style={{ color: '#999', fontSize: '13px' }}>Click the button — watch every component flash yellow.</p>
        <Counter count={count} onIncrement={() => setCount(c => c + 1)} />
        <UserCard name={name} />
        <ExpensiveList items={items} />
        <StaticFooter />
      </RenderTracker>
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
        content:
          "Every component is wrapped in RenderTracker, which flashes yellow and increments a counter on each render. Click the counter button: count changes in App → App re-renders → Counter, UserCard, ExpensiveList, and StaticFooter all re-render. Every single child, even StaticFooter which has no props at all.",
      },
      {
        type: "text",
        content:
          "This is the problem that performance tools solve. UserCard receives the same name ('Alice') every time — it shouldn't need to re-render. StaticFooter has no props — it definitely shouldn't re-render. ExpensiveList receives the same items array reference — but does it? We'll investigate in the next examples.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use useState instead of useRef for the render count → Setting state triggers another re-render, creating an infinite loop. useRef updates without re-rendering.",
          "Put items inside the component as a literal: const items = ['React', ...] → New array reference every render. Even memo'd children would see 'new' props.",
          "Assume re-renders are the same as DOM updates → React re-renders (calls your function) but only updates the actual DOM where output differs. Re-renders are usually cheap.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a text input to App that updates a separate name state. Watch what happens: typing in the input causes ALL components to flash, including Counter and StaticFooter. Count how many wasted renders happen while typing 'hello' (5 keystrokes × 4 children = 20 wasted renders).",
        hint: "Hint: Add const [name, setName] = useState('Alice') and an input. Every keystroke triggers App to re-render, which cascades to all children.",
        solution: `// Add to App:
const [name, setName] = useState('Alice');
// In the JSX:
<input value={name} onChange={e => setName(e.target.value)} placeholder="Type your name..." style={{ padding: '8px', width: '100%', boxSizing: 'border-box', marginBottom: '8px' }} />
<UserCard name={name} />
// Now type "hello" — every keystroke flashes ALL 4 children.
// Counter, ExpensiveList, StaticFooter all re-render despite receiving the same props.`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 2: React.memo
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 2: React.memo — Skipping Unnecessary Re-renders",
      },
      {
        type: "text",
        content:
          "React.memo wraps a component and tells React: 'Before re-rendering this, check if the props have changed. If they haven't, skip the re-render entirely.' It's a shallow comparison — same primitive values and same object references mean 'unchanged'.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Wrapping components with React.memo",
          "When memo works (primitive props) vs when it breaks (new objects/functions)",
          "Custom comparison functions for complex props",
          "The relationship between memo and prop stability",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useRef, useEffect, memo } from 'react';

function RenderTracker({ name, children }) {
  const count = useRef(0);
  const ref = useRef(null);
  count.current += 1;
  useEffect(() => {
    if (ref.current) { ref.current.style.background = '#fff3cd';
      const t = setTimeout(() => { ref.current.style.background = 'transparent'; }, 300);
      return () => clearTimeout(t); }
  });
  return (
    <div ref={ref} style={{ padding: '10px', margin: '4px', border: '1px solid #eee', borderRadius: '8px', transition: 'background 0.3s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong style={{ fontSize: '13px' }}>{name}</strong>
        <span style={{ fontSize: '12px', color: '#999' }}>renders: {count.current}</span>
      </div>
      {children}
    </div>
  );
}

// NOT memoized — re-renders every time parent does
function UserCard({ name }) {
  return <RenderTracker name="UserCard (no memo)"><p>👤 {name}</p></RenderTracker>;
}

// Memoized — only re-renders when name actually changes
const MemoizedUserCard = memo(function UserCard({ name }) {
  return <RenderTracker name="UserCard (memo)"><p>👤 {name}</p></RenderTracker>;
});

// Memoized but receives an object prop — memo breaks!
const MemoizedWithObject = memo(function StatsCard({ stats }) {
  return <RenderTracker name="StatsCard (memo + object prop)"><p>Score: {stats.score}</p></RenderTracker>;
});

// Memoized with a custom comparison
const MemoizedWithCustomCompare = memo(
  function StatsCard({ stats }) {
    return <RenderTracker name="StatsCard (memo + custom compare)"><p>Score: {stats.score}</p></RenderTracker>;
  },
  (prevProps, nextProps) => prevProps.stats.score === nextProps.stats.score
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>React.memo Comparison</h1>
      <button onClick={() => setCount(c => c + 1)} style={{ padding: '10px 20px', marginBottom: '15px' }}>
        Re-render Parent (count: {count})
      </button>
      <p style={{ color: '#999', fontSize: '13px' }}>Click the button and watch which components re-render:</p>

      <UserCard name="Alice" />
      <MemoizedUserCard name="Alice" />
      <MemoizedWithObject stats={{ score: 100 }} />
      <MemoizedWithCustomCompare stats={{ score: 100 }} />
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
        content:
          "Four components, same parent. Click the button: UserCard (no memo) re-renders every time. MemoizedUserCard skips re-renders because name='Alice' is the same string. MemoizedWithObject re-renders despite memo because { score: 100 } is a new object every render — memo does a shallow comparison and {} !== {}.",
      },
      {
        type: "text",
        content:
          "MemoizedWithCustomCompare fixes this by providing a custom comparison function. It only checks stats.score instead of the object reference. This is useful when you must pass objects as props but want to control what counts as 'changed'. Use custom comparisons sparingly — they add complexity and can mask bugs if you forget to compare a field.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Pass style={{ color: 'red' }} to a memo'd component → New object every render, memo is useless. Move the object outside or use useMemo.",
          "Pass onClick={() => doSomething()} → New function every render, breaks memo. Use useCallback instead.",
          "Use memo on a component that receives children → children is always a new React element, so memo rarely helps with children props.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a ProductGrid with 20 product cards. The parent has a search input. Without memo, every keystroke re-renders all 20 cards. Add memo to ProductCard. Then break it by passing an inline onClick handler, and fix it with useCallback.",
        hint: "Hint: const ProductCard = memo(({ product, onAdd }) => ...). Inline <ProductCard onAdd={() => addToCart(p.id)} /> breaks memo. Fix: const onAdd = useCallback((id) => addToCart(id), []).",
        solution: `const ProductCard = memo(function ProductCard({ product, onAdd }) {
  console.log(\`Rendering: \${product.name}\`);
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px' }}>
      <strong>{product.name}</strong>
      <button onClick={() => onAdd(product.id)}>Add</button>
    </div>
  );
});

function ProductGrid() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  // useCallback: stable reference — memo works
  const addToCart = useCallback((id) => setCart(prev => [...prev, id]), []);

  const products = useMemo(() =>
    allProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {products.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
    </div>
  );
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 3: useMemo
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 3: useMemo — Caching Expensive Computations",
      },
      {
        type: "text",
        content:
          "useMemo caches the result of a function call between renders. If the dependencies haven't changed, React returns the cached result instead of running the function again. This is essential when you have expensive computations (sorting, filtering, aggregating) that don't need to re-run on every render.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Caching expensive computations with useMemo",
          "Measuring the actual performance difference",
          "When useMemo helps vs when it's unnecessary",
          "useMemo for stable object/array references",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useMemo } from 'react';

// Generate 10,000 fake products
const generateProducts = () =>
  Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: \`Product \${i + 1}\`,
    price: Math.round(Math.random() * 10000) / 100,
    category: ['electronics', 'clothing', 'books', 'food', 'toys'][Math.floor(Math.random() * 5)],
    rating: Math.round(Math.random() * 50) / 10,
  }));

const ALL_PRODUCTS = generateProducts();

function ProductDashboard() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [category, setCategory] = useState('all');
  const [theme, setTheme] = useState('light'); // Unrelated state — triggers re-render

  // WITHOUT useMemo: runs on EVERY render (including theme change)
  // const filtered = ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  //   .filter(p => category === 'all' || p.category === category)
  //   .sort((a, b) => sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name));

  // WITH useMemo: only re-computes when search, sortBy, or category change
  const filtered = useMemo(() => {
    console.time('filter + sort');
    const result = ALL_PRODUCTS
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .filter(p => category === 'all' || p.category === category)
      .sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.name.localeCompare(b.name);
      });
    console.timeEnd('filter + sort');
    return result;
  }, [search, sortBy, category]);

  // Derived stats — also memoized
  const stats = useMemo(() => ({
    count: filtered.length,
    avgPrice: filtered.length ? (filtered.reduce((sum, p) => sum + p.price, 0) / filtered.length).toFixed(2) : 0,
    avgRating: filtered.length ? (filtered.reduce((sum, p) => sum + p.rating, 0) / filtered.length).toFixed(1) : 0,
  }), [filtered]);

  const isDark = theme === 'dark';

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px',
      background: isDark ? '#1e1e1e' : '#fff', color: isDark ? '#eee' : '#333' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Products (10,000)</h1>
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
          {isDark ? '☀️' : '🌙'} Toggle Theme
        </button>
      </div>
      <p style={{ color: '#999', fontSize: '13px' }}>Toggle theme — filter/sort does NOT re-run (check console).</p>

      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search 10,000 products..." style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} />

      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        {['all', 'electronics', 'clothing', 'books', 'food', 'toys'].map(c => (
          <button key={c} onClick={() => setCategory(c)}
            style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd',
              background: category === c ? '#1976d2' : 'transparent', color: category === c ? '#fff' : isDark ? '#eee' : '#333',
              cursor: 'pointer', fontSize: '13px' }}>
            {c}
          </button>
        ))}
      </div>

      <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: '6px', marginBottom: '10px' }}>
        <option value="name">Sort: Name</option>
        <option value="price">Sort: Price ↑</option>
        <option value="price-desc">Sort: Price ↓</option>
        <option value="rating">Sort: Rating</option>
      </select>

      <div style={{ display: 'flex', gap: '15px', padding: '10px', background: isDark ? '#2a2a2a' : '#f5f5f5', borderRadius: '8px', marginBottom: '12px' }}>
        <div><strong>{stats.count}</strong><p style={{ margin: 0, fontSize: '12px', color: '#999' }}>Results</p></div>
        <div><strong>£{stats.avgPrice}</strong><p style={{ margin: 0, fontSize: '12px', color: '#999' }}>Avg Price</p></div>
        <div><strong>{stats.avgRating}★</strong><p style={{ margin: 0, fontSize: '12px', color: '#999' }}>Avg Rating</p></div>
      </div>

      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        {filtered.slice(0, 100).map(p => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0',
            borderBottom: \`1px solid \${isDark ? '#333' : '#eee'}\`, fontSize: '14px' }}>
            <span>{p.name}</span>
            <span>£{p.price} · {p.rating}★</span>
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
        content:
          "Filtering and sorting 10,000 items takes measurable time (check console.time output). Without useMemo, toggling the theme would re-run this expensive computation even though search, category, and sortBy haven't changed. With useMemo, the cached result is returned instantly on theme change.",
      },
      {
        type: "text",
        content:
          "The stats object is also memoized, depending on the filtered array. When filtered changes, stats recomputes. When theme changes, both filtered and stats return cached values. This creates a dependency chain: ALL_PRODUCTS → filtered (depends on search/sort/category) → stats (depends on filtered).",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget to include sortBy in useMemo dependencies → Changing the sort order shows stale results. Always include every value used inside the callback.",
          "Use useMemo for a simple calculation like items.length → The overhead of useMemo (storing deps, comparing) exceeds the cost of the computation. Only memoize expensive work.",
          "Mutate the original array: ALL_PRODUCTS.sort(...) → Mutates the source data. Always create a new array for sorting: [...items].sort(...).",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a price range filter (min/max inputs). Include them in the useMemo dependencies. Add a 'computation time' display that shows how long the filter + sort took (using performance.now()). Compare the time with and without useMemo by commenting it out.",
        hint: "Hint: const start = performance.now(); ... const duration = performance.now() - start. Store duration in a ref (not state, to avoid triggering a re-render).",
        solution: `const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(100);
const computeTime = useRef(0);

const filtered = useMemo(() => {
  const start = performance.now();
  const result = ALL_PRODUCTS
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === 'all' || p.category === category)
    .filter(p => p.price >= minPrice && p.price <= maxPrice)
    .sort((a, b) => sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name));
  computeTime.current = (performance.now() - start).toFixed(2);
  return result;
}, [search, sortBy, category, minPrice, maxPrice]);

// Display: <span>Computed in {computeTime.current}ms</span>`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 4: useCallback
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 4: useCallback — Stable Function References",
      },
      {
        type: "text",
        content:
          "Every time a component renders, every function inside it is recreated. This is usually fine — unless you're passing that function as a prop to a memo'd child. The child sees a 'new' function and re-renders despite memo. useCallback caches the function reference so the memo'd child sees the same prop.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Why inline functions break React.memo",
          "useCallback to create stable function references",
          "The relationship between useCallback and React.memo",
          "When useCallback actually matters (and when it doesn't)",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useCallback, memo, useRef, useEffect } from 'react';

function RenderCounter({ name, children }) {
  const count = useRef(0);
  const ref = useRef(null);
  count.current += 1;
  useEffect(() => {
    if (ref.current) { ref.current.style.background = '#fff3cd';
      const t = setTimeout(() => { ref.current.style.background = 'transparent'; }, 300);
      return () => clearTimeout(t); }
  });
  return (
    <div ref={ref} style={{ padding: '8px', margin: '4px', border: '1px solid #eee', borderRadius: '6px', transition: 'background 0.3s' }}>
      <span style={{ fontSize: '12px', color: '#999' }}>{name} (renders: {count.current})</span>
      {children}
    </div>
  );
}

// Memo'd child components
const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <RenderCounter name={\`Todo: \${todo.text}\`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
      </div>
    </RenderCounter>
  );
});

const AddTodo = memo(function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (text.trim()) { onAdd(text); setText(''); } };
  return (
    <RenderCounter name="AddTodo">
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo..." style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>
    </RenderCounter>
  );
});

const TodoStats = memo(function TodoStats({ todos }) {
  const done = todos.filter(t => t.done).length;
  return (
    <RenderCounter name="TodoStats">
      <p style={{ fontSize: '14px', color: '#666' }}>{done}/{todos.length} complete</p>
    </RenderCounter>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React.memo', done: true },
    { id: 2, text: 'Learn useMemo', done: true },
    { id: 3, text: 'Learn useCallback', done: false },
    { id: 4, text: 'Build something amazing', done: false },
  ]);
  const [theme, setTheme] = useState('light');

  // useCallback: stable references — memo'd children won't re-render
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleAdd = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  }, []);

  // Without useCallback, these would be:
  // const handleToggle = (id) => setTodos(prev => ...);
  // New function every render → TodoItem re-renders on theme change!

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto', padding: '20px',
      background: theme === 'dark' ? '#1e1e1e' : '#fff', color: theme === 'dark' ? '#eee' : '#333' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Todos</h1>
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      <p style={{ color: '#999', fontSize: '13px' }}>Toggle theme — only the parent flashes, not the todos.</p>
      <AddTodo onAdd={handleAdd} />
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
      ))}
      <TodoStats todos={todos} />
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
        content:
          "Toggle the theme: only the parent flashes. The TodoItem components don't re-render because their props (todo object + callback functions) haven't changed. useCallback ensures handleToggle and handleDelete are the same function reference across renders. Without useCallback, memo'd TodoItems would still re-render on every theme toggle.",
      },
      {
        type: "text",
        content:
          "Note that useCallback uses the functional form of setState: setTodos(prev => ...). This is essential — it lets the callback access the latest state without including todos in the dependency array. If we wrote setTodos(todos.map(...)), we'd need [todos] as a dependency, and handleToggle would change on every todo change, breaking memo.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use todos directly in the callback: setTodos(todos.filter(...)) → todos becomes a dependency. useCallback recreates on every state change. Memo is pointless.",
          "Remove useCallback but keep memo → Every theme toggle creates new handleToggle/handleDelete. Memo sees new props and re-renders anyway.",
          "Add useCallback without memo → useCallback alone does nothing. It only matters when the stable reference is consumed by a memo'd component.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Remove the useCallback wrappers and toggle the theme. Watch all TodoItems flash. Then add them back. Count the render difference. Then try adding a new todo — which components should re-render and which shouldn't?",
        hint: "Hint: Without useCallback, every render creates new function refs → memo breaks. With useCallback, only TodoStats re-renders on add (because todos array changes). AddTodo and existing TodoItems stay cached.",
        solution: `// Without useCallback:
// Theme toggle → Parent + AddTodo + all TodoItems + TodoStats all re-render
// Total: 1 + 1 + 4 + 1 = 7 renders for a theme change that affects 0 todos

// With useCallback:
// Theme toggle → Only Parent re-renders (1 render)
// Adding a todo → Parent + TodoStats + new TodoItem (3 renders)
// Existing TodoItems do NOT re-render when a new todo is added
// because their todo prop (same object ref) and callbacks (useCallback) are unchanged.`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 5: OPTIMISING LISTS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 5: Optimising Lists",
      },
      {
        type: "text",
        content:
          "Lists are the most common source of real performance problems: a 200-item product grid where every item re-renders on search, a table with sorting where the entire body re-renders on a single column click, a chat where adding one message re-renders all messages. This example combines memo, useMemo, and useCallback to build a performant list.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Combining all three tools for list performance",
          "Memoised filtering + memoised items",
          "Why key strategy matters for performance",
          "Rendering only visible items (windowing concept)",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useMemo, useCallback, memo, useRef, useEffect } from 'react';

// Generate 500 users
const USERS = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  name: \`User \${i + 1}\`,
  email: \`user\${i + 1}@example.com\`,
  department: ['Engineering', 'Design', 'Marketing', 'Sales', 'Support'][i % 5],
  active: Math.random() > 0.3,
}));

// Memoised row component
const UserRow = memo(function UserRow({ user, onToggle }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <tr style={{ opacity: user.active ? 1 : 0.5 }}>
      <td style={{ padding: '6px 10px' }}>{user.name}</td>
      <td style={{ padding: '6px 10px', color: '#666', fontSize: '14px' }}>{user.email}</td>
      <td style={{ padding: '6px 10px' }}>
        <span style={{ background: user.active ? '#e8f5e9' : '#ffebee', padding: '2px 8px',
          borderRadius: '10px', fontSize: '12px' }}>
          {user.active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td style={{ padding: '6px 10px' }}>
        <button onClick={() => onToggle(user.id)} style={{ fontSize: '12px' }}>Toggle</button>
      </td>
      <td style={{ padding: '6px 10px', fontSize: '11px', color: '#ccc' }}>renders: {renderCount.current}</td>
    </tr>
  );
});

function UserTable() {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('all');
  const [showActive, setShowActive] = useState('all');

  // useMemo: only re-filter when inputs change
  const filteredUsers = useMemo(() => {
    return users
      .filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.includes(search))
      .filter(u => department === 'all' || u.department === department)
      .filter(u => showActive === 'all' || (showActive === 'active' ? u.active : !u.active));
  }, [users, search, department, showActive]);

  // useCallback: stable toggle function for memo'd rows
  const handleToggle = useCallback((id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u));
  }, []);

  const stats = useMemo(() => ({
    total: filteredUsers.length,
    active: filteredUsers.filter(u => u.active).length,
  }), [filteredUsers]);

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      <h1>User Directory (500 users)</h1>
      <p style={{ color: '#999', fontSize: '13px' }}>Type in search — only matching rows re-render. Toggle a user — only that row re-renders.</p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search..." style={{ flex: 1, padding: '8px', minWidth: '150px' }} />
        <select value={department} onChange={e => setDepartment(e.target.value)} style={{ padding: '8px' }}>
          <option value="all">All Departments</option>
          {['Engineering', 'Design', 'Marketing', 'Sales', 'Support'].map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={showActive} onChange={e => setShowActive(e.target.value)} style={{ padding: '8px' }}>
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <p style={{ fontSize: '14px', color: '#666' }}>{stats.active} active / {stats.total} shown</p>

      <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
            <th style={{ padding: '8px 10px' }}>Name</th>
            <th style={{ padding: '8px 10px' }}>Email</th>
            <th style={{ padding: '8px 10px' }}>Status</th>
            <th style={{ padding: '8px 10px' }}>Action</th>
            <th style={{ padding: '8px 10px' }}>Debug</th>
          </tr></thead>
          <tbody>
            {filteredUsers.slice(0, 100).map(user => (
              <UserRow key={user.id} user={user} onToggle={handleToggle} />
            ))}
          </tbody>
        </table>
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
        content:
          "All three tools work together. useMemo caches the filtered list (filtering 500 items on every keystroke is noticeable). useCallback keeps handleToggle stable. memo on UserRow prevents unchanged rows from re-rendering. The render count in each row proves it — toggle one user and only that row's count increases.",
      },
      {
        type: "text",
        content:
          "Key strategy matters: key={user.id} uses a stable identifier. If you used key={index}, toggling a user in the middle would cause every row below it to re-render because their indices shift. Stable keys let React match old and new elements correctly.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use key={index} instead of key={user.id} → Filtering or toggling causes index shifts. React unmounts and remounts rows instead of updating them. Massive performance hit + lost input state.",
          "Move handleToggle inline: onToggle={() => toggleUser(user.id)} → New function per row per render. Memo is useless, all 500 rows re-render.",
          "Filter without useMemo → Every unrelated state change (e.g. a theme toggle) re-filters 500 users. With useMemo, only search/department/status changes trigger the computation.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add sortable columns. Clicking a column header sorts by that column. Add a sortConfig state { field, direction }. Integrate sorting into the useMemo. Ensure clicking sort doesn't re-render rows that didn't move.",
        hint: "Hint: Add sortConfig to useMemo dependencies. Use [...filteredUsers].sort(...) inside useMemo. The sort changes the order but each UserRow still receives the same user object, so memo prevents re-rendering the row content.",
        solution: `const [sortConfig, setSortConfig] = useState({ field: 'name', direction: 'asc' });

const filteredUsers = useMemo(() => {
  return users
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
    .filter(u => department === 'all' || u.department === department)
    .filter(u => showActive === 'all' || (showActive === 'active' ? u.active : !u.active))
    .sort((a, b) => {
      const val = a[sortConfig.field] > b[sortConfig.field] ? 1 : -1;
      return sortConfig.direction === 'asc' ? val : -val;
    });
}, [users, search, department, showActive, sortConfig]);

const handleSort = useCallback((field) => {
  setSortConfig(prev => ({
    field,
    direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
  }));
}, []);

// Column headers: <th onClick={() => handleSort('name')}>Name {sortConfig.field === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 6: OPTIMISING CONTEXT
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 6: Optimising Context",
      },
      {
        type: "text",
        content:
          "Context is convenient but has a performance trap: when a context value changes, every component consuming that context re-renders. If you put your entire app state in one context, changing anything re-renders everything. The fix: split contexts by update frequency and use useMemo on provider values.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Why a single context causes unnecessary re-renders",
          "Splitting contexts by update frequency",
          "useMemo on context provider values",
          "Separating state and dispatch contexts (from useReducer guide, now with performance focus)",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useContext, createContext, useMemo, useCallback, memo, useRef, useEffect } from 'react';

// ─── THE PROBLEM: One context for everything ───

const BadAppContext = createContext(null);

function BadAppProvider({ children }) {
  const [user] = useState({ name: 'Alice', role: 'admin' });
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(3);
  const [counter, setCounter] = useState(0);

  // This value is a NEW object every render → every consumer re-renders
  return (
    <BadAppContext.Provider value={{ user, theme, setTheme, notifications, setNotifications, counter, setCounter }}>
      {children}
    </BadAppContext.Provider>
  );
}

// ─── THE FIX: Split by update frequency ───

const UserContext = createContext(null);       // Rarely changes
const ThemeContext = createContext(null);       // Changes occasionally
const CounterContext = createContext(null);     // Changes rapidly

function OptimisedProviders({ children }) {
  const [user] = useState({ name: 'Alice', role: 'admin' });
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);

  // useMemo: stable value objects prevent unnecessary re-renders
  const userValue = useMemo(() => ({ user }), [user]);
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  const counterValue = useMemo(() => ({ counter, setCounter }), [counter]);

  return (
    <UserContext.Provider value={userValue}>
      <ThemeContext.Provider value={themeValue}>
        <CounterContext.Provider value={counterValue}>
          {children}
        </CounterContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

// ─── Consumer Components ───

function RenderFlash({ name, children }) {
  const count = useRef(0);
  const ref = useRef(null);
  count.current += 1;
  useEffect(() => {
    if (ref.current) { ref.current.style.background = '#fff3cd';
      const t = setTimeout(() => { ref.current.style.background = 'transparent'; }, 300);
      return () => clearTimeout(t); }
  });
  return (
    <div ref={ref} style={{ padding: '10px', margin: '4px', border: '1px solid #eee', borderRadius: '8px', transition: 'background 0.3s' }}>
      <span style={{ fontSize: '12px', color: '#999' }}>{name} (renders: {count.current})</span>
      <div>{children}</div>
    </div>
  );
}

// Only reads user context — won't re-render on counter/theme changes
const UserBadge = memo(function UserBadge() {
  const { user } = useContext(UserContext);
  return <RenderFlash name="UserBadge (UserContext only)"><p>👤 {user.name} ({user.role})</p></RenderFlash>;
});

// Only reads theme context — won't re-render on counter changes
const ThemeToggle = memo(function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <RenderFlash name="ThemeToggle (ThemeContext only)">
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </RenderFlash>
  );
});

// Only reads counter context — updates rapidly without affecting others
const RapidCounter = memo(function RapidCounter() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <RenderFlash name="RapidCounter (CounterContext only)">
      <button onClick={() => setCounter(c => c + 1)}>Count: {counter}</button>
    </RenderFlash>
  );
});

// Reads NOTHING from context — never re-renders
const StaticContent = memo(function StaticContent() {
  return <RenderFlash name="StaticContent (no context)"><p>I never re-render.</p></RenderFlash>;
});

function App() {
  return (
    <OptimisedProviders>
      <div style={{ maxWidth: '500px', margin: '20px auto' }}>
        <h1>Context Performance</h1>
        <p style={{ color: '#999', fontSize: '13px' }}>Click the counter rapidly — only RapidCounter flashes. Theme and User are unaffected.</p>
        <UserBadge />
        <ThemeToggle />
        <RapidCounter />
        <StaticContent />
      </div>
    </OptimisedProviders>
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
          "Three separate contexts split by how frequently they change: UserContext (almost never), ThemeContext (occasionally), CounterContext (rapidly). Clicking the counter only re-renders RapidCounter. UserBadge and ThemeToggle are untouched because their contexts didn't change.",
      },
      {
        type: "text",
        content:
          "useMemo on each provider value is critical. Without it, every state change in the parent component creates a new { user } object, triggering every UserContext consumer even if user hasn't changed. useMemo(() => ({ user }), [user]) ensures the value only changes when user actually changes.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Put everything in one context → Counter updates re-render UserBadge and ThemeToggle. In a real app with 50 consumers, every counter click re-renders the entire app.",
          "Skip useMemo on provider values → The provider parent re-renders (because of counter state), creating new value objects for all three contexts. Even split contexts would re-render all consumers.",
          "Consume CounterContext in a component that also renders a heavy child → The heavy child re-renders on every counter click. Either memo the heavy child or restructure so it doesn't depend on counter.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a NotificationContext with a count and a list of messages. Build a NotificationBell that shows the count (updates on new notifications) and a NotificationList (shows all messages). Auto-add a notification every 3 seconds. Verify that new notifications only re-render the bell and list, not UserBadge or ThemeToggle.",
        hint: "Hint: Create NotificationContext with useMemo on its value. setInterval in a useEffect adds a notification. Only components consuming NotificationContext re-render.",
        solution: `const NotificationContext = createContext(null);

// In OptimisedProviders, add:
const [notifications, setNotifications] = useState([{ id: 1, text: 'Welcome!' }]);
const notifValue = useMemo(() => ({
  notifications, count: notifications.length,
  addNotification: (text) => setNotifications(prev => [...prev, { id: Date.now(), text }]),
}), [notifications]);

// Auto-add every 3s:
useEffect(() => {
  const timer = setInterval(() => {
    setNotifications(prev => [...prev, { id: Date.now(), text: \`Alert at \${new Date().toLocaleTimeString()}\` }]);
  }, 3000);
  return () => clearInterval(timer);
}, []);

// NotificationBell:
const NotificationBell = memo(function NotificationBell() {
  const { count } = useContext(NotificationContext);
  return <RenderFlash name="NotificationBell">🔔 {count}</RenderFlash>;
});`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 7: FULL APP AUDIT
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: Full App Audit — Identifying and Fixing Problems",
      },
      {
        type: "text",
        content:
          "This final example starts with a deliberately unoptimised app: a product store with search, filtering, a cart, and a theme toggle. Every interaction causes unnecessary re-renders everywhere. You'll identify each problem and apply the right fix — exactly the process you'd follow when auditing a real app.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Identifying performance problems by reading code",
          "Deciding which tool to apply where",
          "Applying all three tools together in a real app",
          "The thought process for a performance audit",
        ],
      },
      {
        type: "boldText",
        content: "The Unoptimised App (Problems Annotated)",
      },
      {
        type: "code",
        content: `// ❌ PROBLEM 1: products array created every render
function App() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');

  // ❌ PROBLEM 2: filtering runs every render (including theme toggle)
  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // ❌ PROBLEM 3: new function every render → breaks memo on children
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div>
      <Header cartCount={cart.length} theme={theme} setTheme={setTheme} />
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {/* ❌ PROBLEM 4: every product re-renders on theme toggle */}
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
      ))}
      <CartSummary cart={cart} />
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "The Optimised App (Fixes Applied)",
      },
      {
        type: "code",
        content: `import { useState, useMemo, useCallback, memo } from 'react';

const PRODUCTS = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1, name: \`Product \${i + 1}\`,
  price: Math.round(Math.random() * 5000) / 100,
  emoji: ['⚛️', '☕', '👕', '🦆', '📓'][i % 5],
}));

// ✅ FIX 4: memo prevents re-render when product + onAdd haven't changed
const ProductCard = memo(function ProductCard({ product, onAdd }) {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '8px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
      <span style={{ fontSize: '24px' }}>{product.emoji}</span>
      <div style={{ flex: 1 }}>
        <strong>{product.name}</strong>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>£{product.price.toFixed(2)}</p>
      </div>
      <button onClick={() => onAdd(product)}>Add</button>
    </div>
  );
});

const Header = memo(function Header({ cartCount, theme, onToggleTheme }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
      <h1>Store</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span>🛒 {cartCount}</span>
        <button onClick={onToggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
      </div>
    </header>
  );
});

const CartSummary = memo(function CartSummary({ cart }) {
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  return (
    <div style={{ padding: '12px', marginTop: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
      <p><strong>{cart.length} items</strong> · Total: £{total.toFixed(2)}</p>
    </div>
  );
});

function App() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');

  // ✅ FIX 2: useMemo — only re-filters when search changes, not on theme toggle
  const filtered = useMemo(() =>
    PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  // ✅ FIX 3: useCallback — stable reference for memo'd ProductCard
  const addToCart = useCallback((product) => {
    setCart(prev => [...prev, product]);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  }, []);

  const isDark = theme === 'dark';

  return (
    <div style={{
      maxWidth: '500px', margin: '20px auto', padding: '20px',
      background: isDark ? '#1e1e1e' : '#fff', color: isDark ? '#eee' : '#333',
    }}>
      <Header cartCount={cart.length} theme={theme} onToggleTheme={toggleTheme} />
      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search 200 products..." style={{ width: '100%', padding: '10px', boxSizing: 'border-box', margin: '10px 0' }} />
      <p style={{ color: '#999', fontSize: '13px' }}>{filtered.length} results</p>
      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        {/* ✅ FIX 4: memo + stable onAdd = products don't re-render on theme toggle */}
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
      <CartSummary cart={cart} />
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "The Audit Checklist",
      },
      {
        type: "list",
        items: [
          "Problem 1 → Products defined at module level (outside component). Fixed: no new array on re-render.",
          "Problem 2 → useMemo on filtered. Fixed: theme toggle doesn't re-filter 200 products.",
          "Problem 3 → useCallback on addToCart. Fixed: stable reference for memo'd children.",
          "Problem 4 → memo on ProductCard + stable addToCart. Fixed: only cards matching the new search re-render. Theme toggle re-renders zero product cards.",
        ],
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use onAdd={() => addToCart(p)} instead of onAdd={addToCart} → Inline arrow creates a new function per product per render. Even with useCallback on addToCart, the inline wrapper defeats it.",
          "Forget useMemo on filtered → Every cart addition re-filters 200 products (cart change → App re-renders → filter runs).",
          "Add theme to useMemo deps: useMemo(() => ..., [search, theme]) → Filter re-runs on theme toggle. Only include values actually used in the computation.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add sorting (name, price ascending, price descending) with a dropdown. Integrate it into the useMemo pipeline. Then add a 'remove from cart' feature in CartSummary — make sure removing an item doesn't re-render any ProductCard.",
        hint: "Hint: Add sortBy to useMemo deps. const removeFromCart = useCallback((index) => setCart(prev => prev.filter((_, i) => i !== index)), []). Pass to CartSummary which is already memo'd.",
        solution: `const [sortBy, setSortBy] = useState('name');

const filtered = useMemo(() =>
  PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.name.localeCompare(b.name);
    }),
  [search, sortBy]
);

const removeFromCart = useCallback((index) => {
  setCart(prev => prev.filter((_, i) => i !== index));
}, []);

// CartSummary receives removeFromCart — already memo'd, so ProductCards don't re-render when cart changes.`,
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
          "You've learned React's three performance tools and when to apply them. The most important lesson: don't optimise everything — profile first, identify real bottlenecks, and apply the right tool. Here's your path forward:",
      },
      {
        type: "list",
        items: [
          "React DevTools Profiler — Learn to use the Profiler tab to measure exactly which components take the most time and which re-renders are wasted. This is how you find real problems instead of guessing.",
          "React.lazy & Suspense — Split your bundle so large components only load when needed. Combined with React Router, each page loads on demand instead of all at once.",
          "Virtualisation — For extremely long lists (1,000+ items), libraries like react-window or @tanstack/virtual render only the visible items. No amount of memo fixes rendering 10,000 DOM nodes.",
          "React Compiler (React 19+) — The upcoming React Compiler automatically adds memoisation where needed, potentially making manual useMemo/useCallback/memo unnecessary. Understanding what they do will help you understand what the compiler does for you.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export  {reactPerformanceData};