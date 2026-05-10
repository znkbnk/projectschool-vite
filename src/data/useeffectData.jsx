/* eslint-disable no-template-curly-in-string */
const useeffectData = [
  {
    id: "react-useeffect-guide",
    title: "The Definitive Guide to Mastering the React useEffect Hook",
    image: "/images/useEffectLogoCard.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to the React useEffect Hook. If useState lets your component remember things, useEffect lets your component do things — fetch data from an API, set up a timer, subscribe to events, update the document title. These are side effects: anything that reaches outside your component into the wider world. This guide covers useEffect through eight real-world examples with detailed breakdowns and practice tasks. By the end, you'll understand not just how useEffect works, but when to use it, when not to, and how to avoid the bugs that trip up most developers.",
      },

      // ═══════════════════════════════════════════
      // SECTION 1: UNDERSTANDING useEffect
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Understanding useEffect",
      },
      {
        type: "text",
        content:
          "React components have one job: take data (state + props) and return JSX that describes the UI. But real apps need to do more than just render — they need to talk to servers, interact with browser APIs, set up subscriptions, and clean up after themselves. These interactions with the outside world are called side effects, and useEffect is React's built-in tool for managing them.",
      },
      {
        type: "text",
        content:
          "Here's the mental model: your component renders first, React updates the screen, and then your effects run. Effects happen after rendering, not during it. This ensures your UI is never blocked by a slow API call or a heavy computation — the user always sees something on screen immediately.",
      },
      {
        type: "boldText",
        content: "The Three Configurations",
      },
      {
        type: "code",
        content: `import { useEffect } from 'react';

// 1. Run once on mount (empty dependency array)
useEffect(() => {
  // Runs after the first render only
  // Good for: initial data fetch, one-time setup
  return () => { /* cleanup on unmount */ };
}, []);

// 2. Run when specific values change (dependency array)
useEffect(() => {
  // Runs after first render AND whenever 'query' or 'page' change
  // Good for: refetching data, updating based on props/state
  return () => { /* cleanup before next run or on unmount */ };
}, [query, page]);

// 3. Run after every render (no dependency array)
useEffect(() => {
  // Runs after EVERY render
  // Rarely needed — usually a sign you should add dependencies
});`,
      },
      {
        type: "boldText",
        content: "The Cleanup Function",
      },
      {
        type: "text",
        content:
          "The function you return from useEffect is the cleanup. It runs in two situations: (1) before the effect re-runs when dependencies change, and (2) when the component unmounts. Cleanup is how you prevent memory leaks — cancelling network requests, clearing timers, removing event listeners, closing WebSocket connections. If your effect sets something up, your cleanup should tear it down.",
      },
      {
        type: "code",
        content: `useEffect(() => {
  // SETUP: start a timer
  const timer = setInterval(() => console.log('tick'), 1000);

  // CLEANUP: stop the timer
  return () => clearInterval(timer);
}, []);

// Lifecycle:
// 1. Component mounts → effect runs → timer starts
// 2. Component unmounts → cleanup runs → timer stops`,
      },
      {
        type: "boldText",
        content: "Under the Hood",
      },
      {
        type: "text",
        content:
          "React stores each useEffect in the component's internal hook list (just like useState). After rendering and painting the screen, React compares each effect's dependency array with the previous render's values using Object.is. If any dependency changed, React runs the cleanup from the previous effect, then runs the new effect. For empty dependency arrays, the comparison always passes after mount, so the effect runs only once.",
      },

      // ═══════════════════════════════════════════
      // SECTION 2: SYNTAX & RULES
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Syntax and Rules",
      },
      {
        type: "code",
        content: `import { useEffect } from 'react';

useEffect(
  () => {
    // Effect logic: fetch data, subscribe, set timers, etc.
    
    return () => {
      // Cleanup logic: cancel requests, unsubscribe, clear timers
    };
  },
  [dependency1, dependency2]  // Array of values the effect depends on
);`,
      },
      {
        type: "boldText",
        content: "The Rules of useEffect",
      },
      {
        type: "list",
        items: [
          "Call useEffect at the top level: Never inside if-statements, loops, or nested functions. Same rule as all hooks — React tracks them by position.",
          "Don't make the callback async: useEffect(() => { ... }) must return either nothing or a cleanup function. An async function returns a Promise, which React can't use as cleanup. Instead, define an async function inside the effect and call it.",
          "List every value used inside the effect: If your effect reads a variable from the component scope (state, props, derived values), it must be in the dependency array. The ESLint rule react-hooks/exhaustive-deps catches missing dependencies.",
          "Cleanup is not optional for effects with subscriptions: If your effect sets up a timer, event listener, WebSocket, or any ongoing process, you must return a cleanup function. Otherwise you'll leak resources every time the component re-renders.",
          "Effects run after paint: useEffect fires after the browser has painted the screen. If you need to run code before paint (rare — measuring DOM layout), use useLayoutEffect instead.",
        ],
      },
      {
        type: "boldText",
        content: "Async Pattern Inside useEffect",
      },
      {
        type: "code",
        content: `// WRONG: useEffect callback cannot be async
useEffect(async () => {
  const data = await fetch('/api/users'); // Returns Promise, not cleanup
}, []);

// CORRECT: Define async function inside, then call it
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };
  fetchData();
}, []);`,
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
        content: "1. Missing Dependencies (Stale Closures)",
      },
      {
        type: "code",
        content: `// BUG: 'count' is read but not in the dependency array
const [count, setCount] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    console.log(count); // Always logs 0 — stale closure!
  }, 1000);
  return () => clearInterval(timer);
}, []); // ← 'count' is missing

// FIX: Use the functional update form to avoid the dependency
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1); // No dependency on 'count' needed
  }, 1000);
  return () => clearInterval(timer);
}, []);`,
      },
      {
        type: "boldText",
        content: "2. Object/Array Dependencies Causing Infinite Loops",
      },
      {
        type: "code",
        content: `// BUG: 'options' is a new object on every render → infinite loop
function Search({ query }) {
  const options = { method: 'GET', headers: { 'Accept': 'application/json' } };

  useEffect(() => {
    fetch(\`/api/search?q=\${query}\`, options);
  }, [query, options]); // options is new every render!
}

// FIX: Move the object inside the effect (or useMemo it)
useEffect(() => {
  const options = { method: 'GET', headers: { 'Accept': 'application/json' } };
  fetch(\`/api/search?q=\${query}\`, options);
}, [query]); // Only depends on query now`,
      },
      {
        type: "boldText",
        content: "3. Forgetting Cleanup",
      },
      {
        type: "code",
        content: `// BUG: No cleanup — timer keeps running after unmount
useEffect(() => {
  setInterval(() => setCount(c => c + 1), 1000);
}, []);
// User navigates away → timer still firing → setState on unmounted component

// FIX: Always clean up ongoing processes
useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(timer); // Stops when component unmounts
}, []);`,
      },
      {
        type: "boldText",
        content: "4. Race Conditions in Data Fetching",
      },
      {
        type: "code",
        content: `// BUG: Fast prop changes cause responses to arrive out of order
useEffect(() => {
  fetch(\`/api/user/\${userId}\`).then(r => r.json()).then(setUser);
}, [userId]);
// If userId changes 1→2→3, response for user 1 might arrive LAST

// FIX: AbortController cancels stale requests
useEffect(() => {
  const controller = new AbortController();
  fetch(\`/api/user/\${userId}\`, { signal: controller.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err);
    });
  return () => controller.abort(); // Cancel previous request
}, [userId]);`,
      },
      {
        type: "boldText",
        content: "5. When You Don't Need useEffect",
      },
      {
        type: "text",
        content:
          "Not everything belongs in useEffect. These common anti-patterns add complexity and bugs for no benefit:",
      },
      {
        type: "code",
        content: `// ANTI-PATTERN 1: Computing derived values
// BAD: Extra state + effect for something you can just calculate
const [items, setItems] = useState([]);
const [total, setTotal] = useState(0);
useEffect(() => {
  setTotal(items.reduce((sum, i) => sum + i.price, 0));
}, [items]);

// GOOD: Just compute it during render
const total = items.reduce((sum, i) => sum + i.price, 0);

// ANTI-PATTERN 2: Handling user events
// BAD: Using effect to respond to a button click
useEffect(() => {
  if (submitted) sendForm(formData);
}, [submitted]);

// GOOD: Handle it in the event handler directly
const handleSubmit = () => sendForm(formData);

// ANTI-PATTERN 3: Resetting state when props change
// BAD: Effect to reset form when userId changes
useEffect(() => {
  setForm({ name: '', email: '' });
}, [userId]);

// GOOD: Use the key prop to force a fresh component
<UserForm key={userId} />`,
      },

      // ═══════════════════════════════════════════
      // WHY DOES MY EFFECT RUN TWICE?
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Why Does My Effect Run Twice?",
      },
      {
        type: "text",
        content:
          "If you're in development mode with React.StrictMode enabled (the default in Create React App and Vite), React intentionally runs your effects twice: mount → unmount → mount. This is not a bug — it's React testing that your cleanup works correctly. If your effect sets up a timer and cleanup clears it, the double-run should leave you with exactly one timer running. If something breaks with the double-run, your cleanup has a bug.",
      },
      {
        type: "text",
        content:
          "This only happens in development, not in production. If your effect should only fire once (like an analytics event), use a ref to guard it:",
      },
      {
        type: "code",
        content: `import { useEffect, useRef } from 'react';

function Page() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      sendAnalytics('page_view'); // Only fires once, even with StrictMode
    }
  }, []);
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 1: FETCH ON MOUNT
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 1: Fetching Data on Mount",
      },
      {
        type: "text",
        content:
          "The most common useEffect pattern: fetch data when the component first appears. This is the equivalent of 'load data when the page opens.'",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Empty dependency array [] for mount-only effects",
          "Async function pattern inside useEffect",
          "Loading / error / success state pattern",
          "AbortController for cleanup",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();

    return () => controller.abort();
  }, []); // Empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{user.name}</h1>;
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "useEffect(() => { ... }, []) — The empty dependency array tells React: 'run this effect once after the first render, and run cleanup when the component unmounts.' Since there are no dependencies to watch, it never re-runs.",
      },
      {
        type: "text",
        content:
          "const controller = new AbortController() — Creates a cancellation token. If the component unmounts before the fetch completes (user navigates away), the cleanup calls controller.abort(), which cancels the in-flight request and prevents a setState on an unmounted component.",
      },
      {
        type: "text",
        content:
          "The async function is defined inside the effect — not as the effect itself. useEffect must return either undefined or a cleanup function. An async function returns a Promise, which React can't use as cleanup. Defining the async function inside and calling it immediately is the standard pattern.",
      },
      {
        type: "text",
        content:
          "Three states (loading, error, user) — This is the standard data-fetching state machine. Every fetch should handle all three states so the user always sees meaningful feedback: a spinner while loading, an error message if something fails, and the data on success.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Remove the [] dependency array → The effect runs after every render, creating an infinite loop: fetch → setState → re-render → fetch → setState → crash.",
          "Make the callback async: useEffect(async () => ...) → React receives a Promise instead of a cleanup function. The AbortController never gets returned, so requests can't be cancelled.",
          "Skip the AbortController → If the user navigates away mid-fetch, the response arrives and tries to update state on an unmounted component. React logs a warning and the old data might flash on screen when the user returns.",
          "Forget the null check in the render: user.name without checking loading → Crashes with 'Cannot read property name of null' because user is null on the first render.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Fetch and display a list of 10 posts from https://jsonplaceholder.typicode.com/posts?_limit=10. Show a loading message, handle errors, and display each post's title in a list.",
        hint: "Hint: Same pattern as UserProfile. Use useState for posts (array), loading, and error. Map over posts to render <li> elements.",
        solution: `import { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', { signal: controller.signal })
      .then(res => { if (!res.ok) throw new Error('Failed'); return res.json(); })
      .then(data => { setPosts(data); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') { setError(err.message); setLoading(false); } });
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}

export default PostList;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Build a RandomUser component that fetches a random user from https://randomuser.me/api/ on mount and displays their name and picture. Add a 'New User' button that fetches another random user.",
        hint: "Hint: To refetch on button click, store a counter in state and include it in the dependency array. Each increment triggers a new fetch.",
        solution: `import { useState, useEffect } from 'react';

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => { setUser(data.results[0]); setLoading(false); })
      .catch(() => setLoading(false));
  }, [refresh]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <img src={user.picture.medium} alt={user.name.first} />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>{user.email}</p>
      <button onClick={() => setRefresh(r => r + 1)}>New User</button>
    </div>
  );
}

export default RandomUser;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 2: DOCUMENT TITLE + TIMER
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 2: Document Title & Timers",
      },
      {
        type: "text",
        content:
          "Two of the most common non-fetch effects: updating the browser tab title based on state, and running timers. This example combines both to show how separate concerns get separate useEffect calls.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Dependency array with state values [count]",
          "DOM manipulation outside React (document.title)",
          "setInterval with proper cleanup",
          "Multiple useEffect calls in one component",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function TimerWithTitle() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect 1: Update document title when seconds change
  useEffect(() => {
    document.title = \`Timer: \${seconds}s\`;
  }, [seconds]);

  // Effect 2: Run the timer when isRunning is true
  useEffect(() => {
    if (!isRunning) return; // No setup needed, no cleanup needed

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup when isRunning changes or unmounts
  }, [isRunning]);

  return (
    <div>
      <h1>{seconds}s</h1>
      <button onClick={() => setIsRunning(r => !r)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => { setIsRunning(false); setSeconds(0); }}>
        Reset
      </button>
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
          "Two separate effects, two separate concerns. The first effect updates document.title whenever seconds changes — it's a pure synchronisation: 'keep the tab title in sync with this state.' No cleanup needed because setting the title doesn't create anything that needs tearing down.",
      },
      {
        type: "text",
        content:
          "The second effect manages the interval. When isRunning becomes true, it starts a setInterval. The cleanup function clears it. When isRunning becomes false, the cleanup from the previous run clears the interval, and the early return means no new interval is set up. This is the standard 'conditional effect' pattern.",
      },
      {
        type: "text",
        content:
          "setSeconds(prev => prev + 1) uses the functional update form — critical here because the interval's callback captures the closure at creation time. Without prev =>, it would always read the stale seconds value from when the interval was created.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use setSeconds(seconds + 1) instead of the functional form → The interval always reads the initial seconds value (stale closure). The timer increments from 0 to 1 and stays there.",
          "Put both effects in one useEffect → The timer restarts every time seconds changes (every second), creating a new interval each time. The count jumps erratically.",
          "Forget the cleanup: return () => clearInterval(timer) → Pausing and resuming creates additional intervals without stopping old ones. The counter accelerates each time.",
          "Remove the if (!isRunning) return guard → The effect tries to set up an interval even when paused, making the pause button do nothing.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a Pomodoro timer that counts down from 25 minutes (1500 seconds). Show minutes:seconds format. When it reaches 0, display 'Break time!' and update the document title to 'Break!'.",
        hint: "Hint: Use setSeconds(prev => prev > 0 ? prev - 1 : 0) for countdown. Format: Math.floor(s/60) for minutes, s%60 for seconds. Pad with .toString().padStart(2, '0').",
        solution: `import { useState, useEffect } from 'react';

function Pomodoro() {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || seconds === 0) return;
    const timer = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning, seconds === 0]);

  useEffect(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.title = seconds === 0 ? 'Break!' : \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div>
      <h1>{mins}:{secs.toString().padStart(2, '0')}</h1>
      {seconds === 0 ? <p>Break time!</p> : (
        <button onClick={() => setIsRunning(r => !r)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      )}
      <button onClick={() => { setIsRunning(false); setSeconds(1500); }}>Reset</button>
    </div>
  );
}

export default Pomodoro;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Create a live clock that displays the current time (HH:MM:SS) and updates every second. Update the document title to show the time too.",
        hint: "Hint: Use setInterval with 1000ms. new Date().toLocaleTimeString() gives you the formatted time.",
        solution: `import { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setTime(now);
      document.title = now;
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <h1>{time}</h1>;
}

export default LiveClock;`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 3: FETCH BASED ON PROPS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 3: Fetching Data When Props Change",
      },
      {
        type: "text",
        content:
          "The real power of dependency arrays: re-run the effect whenever a prop changes. This pattern is everywhere — user profiles, product pages, search results — anywhere the displayed data depends on a dynamic value.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Dependency array with props [userId]",
          "AbortController to prevent race conditions",
          "Cleanup running before each re-fetch",
          "Loading state reset on new fetches",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function UserDetails({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') { setError(err.message); setLoading(false); }
      });

    return () => controller.abort();
  }, [userId]); // Re-runs whenever userId changes

  if (loading) return <p>Loading user {userId}...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

// Parent controls which user to show
function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      {[1, 2, 3, 4, 5].map(id => (
        <button key={id} onClick={() => setSelectedId(id)}
          style={{ fontWeight: selectedId === id ? 'bold' : 'normal' }}>
          User {id}
        </button>
      ))}
      <UserDetails userId={selectedId} />
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
          "[userId] in the dependency array — Every time the parent passes a different userId, React sees the dependency changed and re-runs the effect. Before running the new fetch, it first runs the cleanup from the previous effect, which aborts the old request. This prevents the 'stale response' race condition where data for user 1 arrives after data for user 5.",
      },
      {
        type: "text",
        content:
          "setLoading(true); setError(null) at the top of the effect — These reset the UI state each time a new fetch starts. Without this, the previous user's data would remain visible during loading, or a previous error message would persist when fetching a different user.",
      },
      {
        type: "text",
        content:
          "The cleanup lifecycle: When userId changes from 1 to 2: (1) React runs the cleanup from the userId=1 effect, aborting that request. (2) React runs the new effect with userId=2, starting a fresh fetch. (3) When the response arrives, setUser updates with user 2's data.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Remove AbortController → Click user 1, then quickly user 2. If user 1's response arrives second, it overwrites user 2's data. The screen shows the wrong user.",
          "Use [] instead of [userId] → The effect only fetches the initial user. Clicking other buttons updates selectedId but never triggers a new fetch.",
          "Skip resetting loading/error → After an error on user 3, switching to user 4 still shows the error message until the new fetch completes, creating a confusing flash.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a component that fetches and displays a user's posts. Accept a userId prop and fetch from https://jsonplaceholder.typicode.com/posts?userId={id}. Show the post count and list of titles.",
        hint: "Hint: Same pattern as UserDetails. The API returns an array of posts. Dependency is [userId].",
        solution: `import { useState, useEffect } from 'react';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setPosts(data); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    return () => controller.abort();
  }, [userId]);

  if (loading) return <p>Loading posts...</p>;
  return (
    <div>
      <h2>{posts.length} posts by user {userId}</h2>
      <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
    </div>
  );
}

export default UserPosts;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Create a PokemonCard component that accepts a pokemonName prop and fetches data from https://pokeapi.co/api/v2/pokemon/{name}. Display the name, image (sprites.front_default), and base experience.",
        hint: "Hint: The API returns { name, sprites: { front_default: url }, base_experience }. Use the prop as the dependency.",
        solution: `import { useState, useEffect } from 'react';

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(\`https://pokeapi.co/api/v2/pokemon/\${pokemonName}\`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setPokemon(data); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    return () => controller.abort();
  }, [pokemonName]);

  if (loading) return <p>Loading {pokemonName}...</p>;
  if (!pokemon) return <p>Not found</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Base XP: {pokemon.base_experience}</p>
    </div>
  );
}

export default PokemonCard;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 4: DEBOUNCED SEARCH
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 4: Debounced Search",
      },
      {
        type: "text",
        content:
          "Users type fast — firing an API request on every keystroke wastes bandwidth and overwhelms the server. Debouncing waits until the user stops typing for a set period before sending the request. This is one of the most important real-world patterns for useEffect.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "setTimeout + clearTimeout for debouncing",
          "Combining debounce with AbortController",
          "Cleanup cancelling both the timer and the request",
          "Handling empty queries gracefully",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return; // No cleanup needed — nothing was set up
    }

    const controller = new AbortController();
    setLoading(true);

    const debounceTimer = setTimeout(() => {
      fetch(\`https://dummyjson.com/products/search?q=\${query}\`, {
        signal: controller.signal,
      })
        .then(res => res.json())
        .then(data => { setResults(data.products || []); setLoading(false); })
        .catch(err => {
          if (err.name !== 'AbortError') { setResults([]); setLoading(false); }
        });
    }, 500); // Wait 500ms after last keystroke

    return () => {
      clearTimeout(debounceTimer);  // Cancel the pending timer
      controller.abort();            // Cancel any in-flight request
    };
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {loading && <p>Searching...</p>}
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.title} — £{item.price}</li>
        ))}
      </ul>
      {!loading && query && results.length === 0 && <p>No results found</p>}
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
          "Every keystroke changes query, which triggers the effect. But instead of fetching immediately, we wrap the fetch inside setTimeout(..., 500). If the user types another character within 500ms, the cleanup runs first, clearing the timeout before it fires. Only when the user stops typing for 500ms does the timer complete and the fetch execute.",
      },
      {
        type: "text",
        content:
          "The cleanup does two things: clearTimeout cancels the pending debounce timer, and controller.abort() cancels any in-flight request. This double cleanup handles both scenarios: (1) user types again before the timer fires, and (2) user types again after the fetch started but before it completed.",
      },
      {
        type: "text",
        content:
          "The early return for empty queries: if the user clears the input, we reset results immediately and return without setting up any timer or fetch. Since nothing was set up, no cleanup is needed — returning nothing from the effect is fine.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Skip the debounce (fetch directly in the effect) → Every keystroke fires a request. Typing 'laptop' sends 6 requests (l, la, lap, lapt, lapto, laptop) instead of 1.",
          "Forget clearTimeout in cleanup → Old timers still fire even after new keystrokes. Multiple searches execute for the same typing session, and results from 'la' might overwrite results from 'laptop'.",
          "Forget controller.abort() → An old request for 'la' might arrive after the results for 'laptop', replacing the correct results with stale ones.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a GitHub user search. As the user types a username, debounce for 600ms then fetch from https://api.github.com/search/users?q={query}. Display the avatar and username for each result.",
        hint: "Hint: The API returns { items: [{ id, login, avatar_url }] }. Same debounce pattern. Show 'Type to search' when query is empty.",
        solution: `import { useState, useEffect } from 'react';

function GitHubSearch() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) { setUsers([]); return; }
    const controller = new AbortController();
    setLoading(true);

    const timer = setTimeout(() => {
      fetch(\`https://api.github.com/search/users?q=\${query}\`, { signal: controller.signal })
        .then(r => r.json())
        .then(data => { setUsers(data.items || []); setLoading(false); })
        .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    }, 600);

    return () => { clearTimeout(timer); controller.abort(); };
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search GitHub users..." />
      {loading && <p>Searching...</p>}
      {!query && <p>Type to search</p>}
      <ul>
        {users.slice(0, 10).map(u => (
          <li key={u.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={u.avatar_url} alt={u.login} width={40} style={{ borderRadius: '50%' }} />
            {u.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubSearch;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 5: CUSTOM HOOK (useFetch)
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 5: Custom Hook — useFetch",
      },
      {
        type: "text",
        content:
          "When you find yourself writing the same fetch + loading + error + cleanup pattern in multiple components, it's time to extract it into a custom hook. This is the most practical useEffect pattern for real codebases — write the fetching logic once, reuse it everywhere.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Extracting useEffect into a reusable custom hook",
          "Returning state from a custom hook",
          "AbortController in a reusable context",
          "How custom hooks simplify consuming components",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

// Custom hook — reusable fetch logic
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') { setError(err.message); setLoading(false); }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Using the custom hook — clean one-liner
function UserList() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name} — {user.email}</li>)}
    </ul>
  );
}

// Reusing the same hook for different data
function PostList() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
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
          "The useFetch hook encapsulates the entire fetch pattern: loading state, error handling, AbortController cleanup, and dependency on the URL. It returns { data, loading, error } — the three things every consuming component needs. The hook re-fetches automatically when the url changes.",
      },
      {
        type: "text",
        content:
          "Consuming components become trivially simple. UserList and PostList are just 10 lines each — they call useFetch, handle the three states, and render. All the complexity of async fetching, cleanup, and error handling is hidden inside the hook.",
      },
      {
        type: "text",
        content:
          "The const { data: users } = useFetch(...) syntax renames data to users using destructuring aliasing, making the code more readable in each context.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Pass a new URL object each render instead of a string → Objects create new references every render, triggering the effect infinitely. Always pass stable primitive values (strings) as custom hook arguments.",
          "Forget to return cleanup → URL changes won't abort the previous fetch. Stale data from the old URL could overwrite fresh data from the new one.",
          "Call the hook conditionally (inside an if) → Violates the Rules of Hooks. React loses track of hook order and crashes.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Extend the useFetch hook to include a refetch function. Calling refetch() should trigger a new fetch of the same URL. Use it to build a 'Refresh' button.",
        hint: "Hint: Add a refreshCount state inside the hook. Include it in the dependency array. The refetch function just increments it.",
        solution: `import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') { setError(err.message); setLoading(false); } });

    return () => controller.abort();
  }, [url, refreshCount]);

  const refetch = () => setRefreshCount(c => c + 1);

  return { data, loading, error, refetch };
}

function UserList() {
  const { data: users, loading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}

export default UserList;`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 6: EVENT LISTENERS & WINDOW EVENTS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 6: Event Listeners",
      },
      {
        type: "text",
        content:
          "useEffect is the right tool for subscribing to browser events that live outside React's world — window resize, scroll position, keyboard shortcuts, online/offline status. The pattern is always the same: add the listener in the effect, remove it in the cleanup.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "addEventListener / removeEventListener in useEffect",
          "Why cleanup is essential for event listeners",
          "Tracking window dimensions, scroll, and keyboard events",
          "Multiple event subscriptions in one component",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function WindowTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [scrollY, setScrollY] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Effect 1: Track window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect 2: Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect 3: Track online/offline status
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <div>
      <p>Window: {windowSize.width} x {windowSize.height}</p>
      <p>Scroll: {scrollY}px</p>
      <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
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
          "Three separate effects, three separate concerns. Each effect subscribes to a browser event and returns a cleanup that unsubscribes. All use [] because they set up once on mount — the handler functions update state which triggers re-renders, but the subscriptions themselves don't need to change.",
      },
      {
        type: "text",
        content:
          "The handler function must be stored in a variable (const handleResize = ...) so the exact same reference is passed to both addEventListener and removeEventListener. If you used an inline arrow function, removeEventListener would receive a different function reference and fail to unsubscribe.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Skip cleanup → Every re-render adds another event listener without removing old ones. After 10 renders, 10 resize handlers fire on every window resize.",
          "Use an inline function in removeEventListener → window.removeEventListener('resize', () => {...}) removes nothing because it's a different function reference. Always store the handler in a variable.",
          "Read state directly in the handler instead of using the setter function → If the handler depends on current state (e.g., scrollY + 10), it captures the stale value. Use the functional update form or restructure to avoid the dependency.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a keyboard shortcut detector. Listen for 'keydown' events and display the last key pressed. Add a specific shortcut: when the user presses Ctrl+K, toggle a search modal (just show/hide a div).",
        hint: "Hint: addEventListener('keydown', handler). Check e.ctrlKey && e.key === 'k' for the shortcut. Use e.preventDefault() to stop the browser's default Ctrl+K behaviour.",
        solution: `import { useState, useEffect } from 'react';

function KeyboardShortcuts() {
  const [lastKey, setLastKey] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setLastKey(e.key);
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setShowSearch(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <p>Last key: {lastKey || 'Press any key'}</p>
      <p>Press Ctrl+K to toggle search</p>
      {showSearch && (
        <div style={{ border: '2px solid blue', padding: '20px', margin: '10px 0' }}>
          <input placeholder="Search..." autoFocus />
        </div>
      )}
    </div>
  );
}

export default KeyboardShortcuts;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Create a 'Back to Top' button that only appears when the user has scrolled more than 300px down the page. Clicking it scrolls back to the top smoothly.",
        hint: "Hint: Track scrollY with useEffect + addEventListener('scroll'). Conditionally render the button. Use window.scrollTo({ top: 0, behavior: 'smooth' }).",
        solution: `import { useState, useEffect } from 'react';

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showButton ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 15px' }}>
      ↑ Top
    </button>
  ) : null;
}

export default BackToTop;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 7: E-COMMERCE PRODUCT PAGE
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: E-Commerce Product Page — Multiple Effects",
      },
      {
        type: "text",
        content:
          "A real-world product page combines several useEffect patterns: fetching product data based on a prop, updating the document title based on cart state, and tracking page views. This capstone example shows how to separate concerns with multiple effects in one component.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Multiple useEffect hooks with different dependency arrays",
          "Separation of concerns: each effect handles one job",
          "Combining fetch, document.title, and analytics patterns",
          "Production-ready error handling",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect, useRef } from 'react';

function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [error, setError] = useState(null);
  const hasTracked = useRef(false);

  // Effect 1: Fetch product details when productId changes
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(\`https://dummyjson.com/products/\${productId}\`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setProduct(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') { setError(err.message); setLoading(false); }
      });

    return () => controller.abort();
  }, [productId]);

  // Effect 2: Update document title with cart count
  useEffect(() => {
    document.title = cartCount > 0
      ? \`Cart (\${cartCount}) — Shop\`
      : 'Shop';
  }, [cartCount]);

  // Effect 3: Track page view (once per productId)
  useEffect(() => {
    hasTracked.current = false; // Reset when product changes
  }, [productId]);

  useEffect(() => {
    if (product && !hasTracked.current) {
      hasTracked.current = true;
      console.log(\`Analytics: viewed product \${product.title}\`);
      // In production: sendAnalytics('product_view', { id: productId });
    }
  }, [product, productId]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <img src={product.thumbnail} alt={product.title} width={200} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>£{product.price}</strong></p>
      <p>Rating: {'⭐'.repeat(Math.round(product.rating))}</p>
      <button onClick={() => setCartCount(c => c + 1)}>
        Add to Cart ({cartCount})
      </button>
    </div>
  );
}

// Parent with product selector
function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} onClick={() => setId(n)}
            style={{ fontWeight: id === n ? 'bold' : 'normal' }}>
            Product {n}
          </button>
        ))}
      </div>
      <ProductPage productId={id} />
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
          "Four effects, four jobs. Effect 1 handles data fetching with AbortController, triggered by [productId]. Effect 2 synchronises the document title with [cartCount]. Effects 3-4 work together for analytics: the ref resets when the product changes, then the analytics fires once when product data arrives. Each effect is independent — changing the cart doesn't refetch data, and fetching data doesn't reset the cart.",
      },
      {
        type: "text",
        content:
          "The useRef guard for analytics — In development with StrictMode, effects run twice. Without the ref guard, analytics would double-fire. The ref persists across re-renders without triggering them, making it the perfect tool for 'fire once' logic.",
      },
      {
        type: "text",
        content:
          "This example uses a real API (dummyjson.com) that returns actual product data including images, prices, and ratings. Students can paste this code into a project and see real results immediately.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Combine all effects into one → Every cart change would refetch the product data. Every product change would reset the document title. Effects with different dependencies must be separate.",
          "Skip the hasTracked ref → Analytics fires every time any state changes (including cart updates), not just on product view.",
          "Forget to reset hasTracked when productId changes → Navigating to a new product wouldn't track the view because the ref is still true from the previous product.",
          "Remove the AbortController → Rapidly clicking between products causes race conditions where old product data overwrites new.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a recipe page component that accepts a recipeId prop. Fetch recipe data from https://dummyjson.com/recipes/{id}. Display the name, image, ingredients, and instructions. Update the document title to the recipe name. Track view count in a useRef.",
        hint: "Hint: Three effects: fetch (dep: recipeId), document title (dep: recipe?.name), analytics (dep: recipe). The API returns { name, image, ingredients: [], instructions: [] }.",
        solution: `import { useState, useEffect, useRef } from 'react';

function RecipePage({ recipeId }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const viewCount = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(\`https://dummyjson.com/recipes/\${recipeId}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => { setRecipe(data); setLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') setLoading(false); });
    return () => controller.abort();
  }, [recipeId]);

  useEffect(() => {
    if (recipe) document.title = recipe.name;
  }, [recipe]);

  useEffect(() => {
    if (recipe) {
      viewCount.current += 1;
      console.log(\`View #\${viewCount.current}: \${recipe.name}\`);
    }
  }, [recipeId]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <img src={recipe.image} alt={recipe.name} width={300} />
      <h1>{recipe.name}</h1>
      <h3>Ingredients:</h3>
      <ul>{recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
      <h3>Instructions:</h3>
      <ol>{recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}</ol>
    </div>
  );
}

export default RecipePage;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 8: REAL-TIME / WEBSOCKET
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 8: Real-Time Updates — Polling & WebSockets",
      },
      {
        type: "text",
        content:
          "Real-time features like chat indicators, live notifications, and dashboards need periodic or persistent data connections. This example shows two approaches: polling (repeated fetches at intervals) and WebSocket connections, both requiring careful cleanup.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Polling pattern: setInterval + fetch + cleanup",
          "WebSocket setup and teardown in useEffect",
          "Conditional effects (only poll when active)",
          "Combining real-time data with UI state",
        ],
      },
      {
        type: "boldText",
        content: "Full Code — Polling Pattern",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function LiveNotifications({ userId }) {
  const [notifications, setNotifications] = useState([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return; // Don't poll when paused

    const fetchNotifications = () => {
      fetch(\`https://jsonplaceholder.typicode.com/comments?postId=\${userId}\`)
        .then(res => res.json())
        .then(data => setNotifications(data.slice(0, 5)))
        .catch(console.error);
    };

    fetchNotifications(); // Fetch immediately
    const interval = setInterval(fetchNotifications, 10000); // Then every 10s

    return () => clearInterval(interval);
  }, [userId, isActive]);

  return (
    <div>
      <h2>Notifications ({notifications.length})</h2>
      <button onClick={() => setIsActive(a => !a)}>
        {isActive ? 'Pause' : 'Resume'} Updates
      </button>
      <ul>
        {notifications.map(n => (
          <li key={n.id}>{n.name}: {n.body.slice(0, 50)}...</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Full Code — WebSocket Pattern",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('connecting');

  useEffect(() => {
    // In production, use your actual WebSocket server URL
    const ws = new WebSocket(\`wss://echo.websocket.org/\`);

    ws.onopen = () => setStatus('connected');
    ws.onclose = () => setStatus('disconnected');
    ws.onerror = () => setStatus('error');
    ws.onmessage = (event) => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: event.data,
        time: new Date().toLocaleTimeString(),
      }]);
    };

    // Cleanup: close the connection
    return () => {
      ws.close();
      setStatus('disconnected');
    };
  }, [roomId]); // Reconnect when room changes

  return (
    <div>
      <p>Status: {status}</p>
      <ul>
        {messages.map(m => (
          <li key={m.id}>[{m.time}] {m.text}</li>
        ))}
      </ul>
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
          "Polling: The effect sets up an immediate fetch plus a setInterval for repeated fetches. The isActive flag in the dependency array means toggling it off triggers cleanup (clearing the interval) and the early return prevents setting up a new one. Toggling it back on starts fresh.",
      },
      {
        type: "text",
        content:
          "WebSocket: The effect creates a WebSocket connection and attaches event handlers. The cleanup calls ws.close(), which sends a close frame to the server and releases the connection. When roomId changes, cleanup closes the old room's connection before the new effect opens a fresh one.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Skip clearInterval in the polling cleanup → Pausing and resuming stacks intervals. After 5 toggles, 5 intervals run simultaneously, each fetching every 10 seconds.",
          "Skip ws.close() in WebSocket cleanup → Changing rooms opens a new WebSocket without closing the old one. After switching rooms 10 times, 10 connections send data simultaneously.",
          "Add notifications to the dependency array of the polling effect → Fetching updates notifications, which changes the dependency, which re-runs the effect, which fetches again — infinite loop.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a live stock price component. Poll https://api.coindesk.com/v1/bpi/currentprice.json every 15 seconds to display the current Bitcoin price in USD. Add a pause/resume button and show the last updated time.",
        hint: "Hint: The API returns { bpi: { USD: { rate: '...' } } }. Use the polling pattern. Store the time of last update in state.",
        solution: `import { useState, useEffect } from 'react';

function BitcoinPrice() {
  const [price, setPrice] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const fetchPrice = () => {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(r => r.json())
        .then(data => {
          setPrice(data.bpi.USD.rate);
          setLastUpdate(new Date().toLocaleTimeString());
        })
        .catch(console.error);
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 15000);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <p style={{ fontSize: '2em' }}>\${price || 'Loading...'}</p>
      {lastUpdate && <p>Last updated: {lastUpdate}</p>}
      <button onClick={() => setIsActive(a => !a)}>
        {isActive ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}

export default BitcoinPrice;`,
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
          "You've now covered useEffect across every pattern you'll encounter in real React development: mount-only fetches, prop-driven refetching, debouncing, custom hooks, event listeners, multiple effects with separated concerns, and real-time polling/WebSocket connections. Here's where to go next:",
      },
      {
        type: "list",
        items: [
          "useState + useEffect combined guide — Learn how state changes trigger effects and effects update state back, creating the reactive loop that powers dynamic apps.",
          "React Query / TanStack Query — For production data fetching, consider a dedicated library that handles caching, refetching, pagination, and optimistic updates out of the box.",
          "useReducer — When your effects update complex state (multiple related values), useReducer pairs beautifully with useEffect to keep logic clean.",
          "Custom Hooks — Extract every repeated useEffect pattern into reusable hooks: useDebounce, useLocalStorage, useWindowSize, useOnlineStatus.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export  {useeffectData};