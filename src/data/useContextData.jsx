/* eslint-disable no-template-curly-in-string */
const useContextData = [
  {
    id: "react-usecontext-guide",
    title: "The Definitive Guide to Mastering the React useContext Hook",
    image: "/images/useContext.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to the React useContext Hook. As your apps grow, you'll find certain data — the logged-in user, the current theme, the shopping cart, the language preference — needs to be accessible by many components at different levels of your tree. Passing this data through props at every level (prop drilling) quickly becomes painful. useContext solves this: create a Context, provide a value at the top, and any component below can read it directly — no matter how deeply nested. This guide covers useContext through seven progressive examples, from basic theme toggling to production-ready patterns with useReducer.",
      },

      // ═══════════════════════════════════════════
      // SECTION 1: UNDERSTANDING useContext
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Understanding useContext",
      },
      {
        type: "text",
        content:
          "useContext is React's built-in solution for sharing data across components without passing props through every intermediate level. It works through three steps: (1) Create a Context object. (2) Wrap a section of your component tree with a Provider that supplies the value. (3) Any component inside that Provider can read the value using useContext — regardless of how deeply nested it is.",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const ThemeContext = createContext('light');

// Step 2: Provide a value at the top
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}

// Step 3: Consume the value anywhere below — no prop drilling
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}

// Button reads 'theme' directly from Context
// It doesn't matter if Button is nested 10 levels deep — it still works`,
      },
      {
        type: "boldText",
        content: "The Problem useContext Solves: Prop Drilling",
      },
      {
        type: "code",
        content: `// WITHOUT Context — prop drilling through 4 levels
function App() {
  const [user, setUser] = useState({ name: 'Alice', role: 'admin' });
  return <Layout user={user} />;          // Pass user ↓
}
function Layout({ user }) {
  return <Sidebar user={user} />;          // Pass user ↓ (doesn't use it)
}
function Sidebar({ user }) {
  return <UserMenu user={user} />;         // Pass user ↓ (doesn't use it)
}
function UserMenu({ user }) {
  return <p>Hello, {user.name}</p>;        // Finally uses it
}

// WITH Context — direct access
const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({ name: 'Alice', role: 'admin' });
  return (
    <UserContext.Provider value={user}>
      <Layout />                            {/* No props needed */}
    </UserContext.Provider>
  );
}
function Layout() { return <Sidebar />; }   // Clean — no forwarding
function Sidebar() { return <UserMenu />; } // Clean — no forwarding
function UserMenu() {
  const user = useContext(UserContext);      // Direct access
  return <p>Hello, {user.name}</p>;
}`,
      },

      // ═══════════════════════════════════════════
      // SECTION 2: SYNTAX AND RULES
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Syntax and Rules",
      },
      {
        type: "code",
        content: `import { createContext, useContext } from 'react';

// 1. CREATE — outside any component (module level)
const MyContext = createContext(defaultValue);
// defaultValue is used ONLY when there's no Provider above in the tree

// 2. PROVIDE — wrap the part of the tree that needs access
<MyContext.Provider value={actualValue}>
  <ChildComponents />
</MyContext.Provider>
// actualValue is what useContext returns — can be anything:
// a string, number, object, array, or { state, actions }

// 3. CONSUME — in any component inside the Provider
function ChildComponent() {
  const value = useContext(MyContext);
  // value === actualValue from the nearest Provider above
}`,
      },
      {
        type: "boldText",
        content: "Rules of useContext",
      },
      {
        type: "list",
        items: [
          "createContext goes at module level: Outside any component. It creates the Context object once. Export it if consumers are in different files.",
          "The Provider's value prop is what consumers receive: Whatever you pass to value={...} is exactly what useContext returns. If you pass an object, every consumer gets that object.",
          "When the Provider's value changes, ALL consumers re-render: This is the key performance consideration. Every component calling useContext(MyContext) re-renders when the value changes.",
          "No Provider = default value: If a component calls useContext(MyContext) but there's no MyContext.Provider above it in the tree, it gets the defaultValue from createContext(). This is usually a bug — it means you forgot the Provider.",
          "Closest Provider wins: If you nest multiple Providers for the same Context, each component reads from the nearest one above it. This lets you override values for specific sections of the tree.",
        ],
      },
      {
        type: "boldText",
        content: "The Standard Pattern: Context + State + Actions",
      },
      {
        type: "text",
        content:
          "In practice, you almost always provide both state and functions to update it. This gives consumers read AND write access to shared data:",
      },
      {
        type: "code",
        content: `const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for cleaner consumption
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// Usage in any component:
function Header() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current: {theme}</button>;
}`,
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
        content: "1. Forgetting the Provider",
      },
      {
        type: "code",
        content: `// BUG: No Provider → useContext returns the default value (null)
const UserContext = createContext(null);

function App() {
  return <UserProfile />;  // No UserContext.Provider!
}

function UserProfile() {
  const user = useContext(UserContext);  // user is null
  return <p>{user.name}</p>;            // Crash: Cannot read property 'name' of null
}

// FIX: Always wrap with a Provider
function App() {
  return (
    <UserContext.Provider value={{ name: 'Alice' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}`,
      },
      {
        type: "boldText",
        content: "2. Creating a New Object Every Render (Performance)",
      },
      {
        type: "code",
        content: `// PROBLEM: New object on every render → all consumers re-render
function App() {
  const [user, setUser] = useState({ name: 'Alice' });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* { user, setUser } is a NEW object every render */}
      {/* Every consumer re-renders even if user hasn't changed */}
    </UserContext.Provider>
  );
}

// FIX: useMemo to stabilise the value
import { useMemo } from 'react';

function App() {
  const [user, setUser] = useState({ name: 'Alice' });
  const value = useMemo(() => ({ user, setUser }), [user]);
  return (
    <UserContext.Provider value={value}>
      {/* Same reference unless user actually changes */}
    </UserContext.Provider>
  );
}`,
      },
      {
        type: "boldText",
        content: "3. Using Context for Everything",
      },
      {
        type: "text",
        content:
          "Context is for data that many components at different nesting levels need — theme, auth, locale, cart. If data only flows one or two levels, regular props are simpler, more explicit, and easier to trace. Don't replace every prop with Context — use it when prop drilling becomes a genuine problem.",
      },
      {
        type: "boldText",
        content: "4. Putting Too Much in One Context",
      },
      {
        type: "code",
        content: `// PROBLEM: One giant context with everything
<AppContext.Provider value={{ user, theme, cart, notifications, locale }}>
  {/* When cart changes, EVERY consumer re-renders — even ones
      that only use theme */}

// FIX: Separate contexts for separate concerns
<UserContext.Provider value={user}>
  <ThemeContext.Provider value={theme}>
    <CartContext.Provider value={cart}>
      {/* Cart changes only re-render cart consumers */}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 1: THEME TOGGLE
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 1: Theme Toggle — Your First Context",
      },
      {
        type: "text",
        content:
          "The classic useContext introduction: a dark/light theme that any component can read and toggle. This teaches the full create → provide → consume cycle with a custom provider component and a custom hook.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "The complete Context pattern: createContext → Provider → useContext",
          "Custom Provider component with state and actions",
          "Custom hook for cleaner consumption (useTheme)",
          "Multiple components sharing the same context",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext(null);

// 2. Custom Provider — encapsulates state + logic
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook — cleaner than useContext(ThemeContext) everywhere
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// Components that use the theme
function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header style={{
      background: theme === 'dark' ? '#1e1e1e' : '#fff',
      color: theme === 'dark' ? '#eee' : '#333',
      padding: '15px 20px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

function Card({ title, description }) {
  const { theme } = useTheme();
  return (
    <div style={{
      background: theme === 'dark' ? '#2d2d2d' : '#f9f9f9',
      color: theme === 'dark' ? '#ddd' : '#333',
      border: '1px solid ' + (theme === 'dark' ? '#444' : '#ddd'),
      borderRadius: '10px', padding: '20px', marginBottom: '12px',
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <main style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
          <Card title="Getting Started" description="Learn React with hands-on projects." />
          <Card title="Components" description="Build reusable UI blocks." />
          <Card title="Hooks" description="Add state and effects to your components." />
        </main>
      </div>
    </ThemeProvider>
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
          "ThemeProvider wraps the entire app and owns the state. It provides both the current theme value and the toggleTheme function through the context value. Any component below it can read and change the theme without any prop passing.",
      },
      {
        type: "text",
        content:
          "The custom hook useTheme() is the recommended pattern. Instead of writing useContext(ThemeContext) in every component, consumers call useTheme(). The hook also includes an error check — if someone uses useTheme() outside the Provider, they get a helpful error message instead of a cryptic 'Cannot read property theme of null.'",
      },
      {
        type: "text",
        content:
          "Header and Card are completely independent — they don't receive theme as a prop from their parent. They read directly from Context. If you add a Footer component tomorrow, it can also call useTheme() without changing any parent components.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Remove <ThemeProvider> from App → useTheme() throws 'must be used within ThemeProvider'. Without the Provider, context is null.",
          "Pass value={theme} instead of value={{ theme, toggleTheme }} → Consumers can read the theme but can't change it. The toggle button crashes.",
          "Create ThemeContext inside the component instead of module level → A new Context object is created every render. The Provider and Consumer are using different Context objects — they can't communicate.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Extend the theme to support three modes: light, dark, and blue. The toggle button should cycle through all three. Update the Header and Card styles for the new blue mode.",
        hint: "Hint: Change toggleTheme to cycle: light → dark → blue → light. Use an object mapping themes to colours instead of ternary operators.",
        solution: `function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const themes = ['light', 'dark', 'blue'];
  const cycleTheme = () => {
    setTheme(t => themes[(themes.indexOf(t) + 1) % themes.length]);
  };

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// In Header/Card, use a style map:
const styles = {
  light: { bg: '#fff', text: '#333', border: '#ddd' },
  dark: { bg: '#1e1e1e', text: '#eee', border: '#444' },
  blue: { bg: '#e3f2fd', text: '#0d47a1', border: '#90caf9' },
};
const s = styles[theme];`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 2: AUTH CONTEXT
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 2: Authentication Context",
      },
      {
        type: "text",
        content:
          "Authentication state — who's logged in, their role, login/logout functions — is the most common real-world use of Context. Almost every app needs it, and dozens of components need to check it: the header (show username), the sidebar (show admin links), protected pages (redirect if not logged in).",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Providing state AND actions through context",
          "Conditional rendering based on context (logged in vs logged out)",
          "Protected component pattern",
          "Loading state during authentication",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    if (email === 'admin@test.com' && password === 'password') {
      setUser({ name: 'Alice', email, role: 'admin' });
    } else if (email && password) {
      setUser({ name: email.split('@')[0], email, role: 'user' });
    }
    setLoading(false);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

// Protected wrapper — only renders children if logged in
function Protected({ children, requiredRole }) {
  const { user } = useAuth();
  if (!user) return <p>Please log in to view this content.</p>;
  if (requiredRole && user.role !== requiredRole) {
    return <p>Access denied. Requires {requiredRole} role.</p>;
  }
  return children;
}

// Components
function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 20px', borderBottom: '1px solid #eee',
    }}>
      <h2>MyApp</h2>
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>👤 {user.name} ({user.role})</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span style={{ color: '#999' }}>Not logged in</span>
      )}
    </nav>
  );
}

function LoginForm() {
  const { user, loading, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (user) return null; // Hide form when logged in

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '20px auto' }}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)}
        type="email" placeholder="Email" style={{ width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }} />
      <input value={password} onChange={e => setPassword(e.target.value)}
        type="password" placeholder="Password" style={{ width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }} />
      <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px' }}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
        Try: admin@test.com / password
      </p>
    </form>
  );
}

function Dashboard() {
  const { user } = useAuth();
  return (
    <div style={{ padding: '20px' }}>
      <Protected>
        <h2>Welcome back, {user?.name}!</h2>
        <p>This content is only visible when logged in.</p>
      </Protected>
      <Protected requiredRole="admin">
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
          <h3>Admin Panel</h3>
          <p>Only admins can see this section.</p>
        </div>
      </Protected>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <LoginForm />
      <Dashboard />
    </AuthProvider>
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
          "AuthProvider owns all auth state and logic: user object, loading flag, login function (simulates an API call), logout function. The context value contains both data and actions, so any consumer can read the user AND trigger login/logout.",
      },
      {
        type: "text",
        content:
          "The Protected component is a reusable wrapper. It reads the auth context, checks if the user is logged in (and optionally checks their role), and either renders its children or shows an access-denied message. This pattern scales to any number of protected pages.",
      },
      {
        type: "text",
        content:
          "Navbar, LoginForm, and Dashboard all read from the same context but use different parts of it. Navbar shows the username and logout button. LoginForm uses login and hides itself when the user is already logged in. Dashboard uses Protected to guard sections. None of them pass auth data through props.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Put AuthProvider inside Dashboard instead of wrapping everything → Navbar and LoginForm are outside the Provider and can't access the context. The Provider must be above all consumers.",
          "Forget to provide the login function in the value → LoginForm can read user but can't log in. The form button does nothing.",
          "Use user.name without checking if user is null → Crashes when logged out. Always check user existence first: user?.name or the Protected wrapper.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a 'Remember me' feature. When the user checks a box and logs in, save the user to localStorage. On mount, check localStorage and auto-login. Clear it on logout.",
        hint: "Hint: Add a useEffect in AuthProvider that reads localStorage on mount. Modify login to conditionally save. Modify logout to clear.",
        solution: `function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('auth-user')); }
    catch { return null; }
  });
  const [loading, setLoading] = useState(false);

  const login = async (email, password, remember = false) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    const newUser = { name: email.split('@')[0], email, role: email.includes('admin') ? 'admin' : 'user' };
    setUser(newUser);
    if (remember) localStorage.setItem('auth-user', JSON.stringify(newUser));
    setLoading(false);
  };

  const logout = () => { setUser(null); localStorage.removeItem('auth-user'); };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 3: SHOPPING CART
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 3: Shopping Cart Context",
      },
      {
        type: "text",
        content:
          "A shopping cart is the perfect real-world Context example — the header shows item count, the product list has 'Add to Cart' buttons, the cart page shows items, and the checkout shows totals. All of these components need access to the same cart data, but they're spread across the entire app.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Context with complex state (array of items with quantities)",
          "Multiple actions in the context value (add, remove, update, clear)",
          "Derived values computed from context state",
          "Multiple unrelated components consuming the same context",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id
          ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id, qty) => {
    if (qty < 1) return removeItem(id);
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setItems([]);

  // Derived values
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

// Header — shows cart count
function Header() {
  const { totalItems } = useCart();
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #eee' }}>
      <h1>Shop</h1>
      <span style={{ fontSize: '18px' }}>🛒 {totalItems > 0 && totalItems}</span>
    </header>
  );
}

// Product list — uses addItem
function ProductList() {
  const { addItem } = useCart();
  const products = [
    { id: 1, name: 'React Stickers', price: 4.99, emoji: '⚛️' },
    { id: 2, name: 'JS Mug', price: 12.99, emoji: '☕' },
    { id: 3, name: 'Code Hoodie', price: 39.99, emoji: '👕' },
    { id: 4, name: 'Debug Duck', price: 8.99, emoji: '🦆' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '20px' }}>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
          <span style={{ fontSize: '40px' }}>{p.emoji}</span>
          <h3>{p.name}</h3>
          <p>£{p.price.toFixed(2)}</p>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

// Cart view — uses items, updateQuantity, removeItem, clearCart
function CartView() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  if (items.length === 0) return <p style={{ padding: '20px', color: '#999' }}>Your cart is empty</p>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Cart</h2>
        <button onClick={clearCart} style={{ color: '#d32f2f', background: 'none', border: 'none', cursor: 'pointer' }}>Clear all</button>
      </div>
      {items.map(item => (
        <div key={item.id} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 0', borderBottom: '1px solid #eee',
        }}>
          <div>
            <strong>{item.name}</strong>
            <p style={{ margin: '2px 0', color: '#666' }}>£{item.price.toFixed(2)} each</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>🗑️</button>
          </div>
        </div>
      ))}
      <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '15px' }}>
        Total: £{totalPrice.toFixed(2)}
      </p>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <CartView />
    </CartProvider>
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
          "CartProvider owns all cart logic: items array, add/remove/update/clear functions, and derived totals. The context value includes everything any consumer might need. Header only reads totalItems. ProductList only uses addItem. CartView uses nearly everything. Each component takes only what it needs via destructuring.",
      },
      {
        type: "text",
        content:
          "totalItems and totalPrice are derived values computed from items during render — not stored in separate state. When items changes, CartProvider re-renders, recomputes the totals, and passes them through context. Consumers get the latest values automatically.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Put CartProvider inside ProductList → CartView and Header are outside the Provider and can't access the cart. The Provider must wrap all consumers.",
          "Mutate the items array directly: items.push(product) → React doesn't detect the change because the reference is the same. Always use setItems with a new array.",
          "Add totalItems as a separate useState → You'd need a useEffect to sync it with items. Derived values should be computed, not stored.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a checkout flow. Create a Checkout component that reads the cart context, shows a summary, and has a 'Place Order' button that clears the cart and shows a confirmation message with the total.",
        hint: "Hint: Use items, totalPrice, and clearCart from useCart(). Add a local state for 'ordered' to toggle between the order form and confirmation.",
        solution: `function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);
  const [savedTotal, setSavedTotal] = useState(0);

  if (ordered) return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>✅ Order Placed!</h2>
      <p>Total charged: £{savedTotal.toFixed(2)}</p>
    </div>
  );

  if (items.length === 0) return null;

  return (
    <div style={{ padding: '20px', borderTop: '2px solid #1976d2' }}>
      <h2>Checkout</h2>
      <p>{items.length} items · £{totalPrice.toFixed(2)}</p>
      <button onClick={() => { setSavedTotal(totalPrice); clearCart(); setOrdered(true); }}
        style={{ padding: '12px 24px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '6px' }}>
        Place Order
      </button>
    </div>
  );
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 4: MULTIPLE CONTEXTS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 4: Combining Multiple Contexts",
      },
      {
        type: "text",
        content:
          "Real apps have multiple concerns: theme, auth, cart, notifications, language. Each should be its own context. This example shows how to layer multiple providers and consume from different contexts in the same component — the standard production pattern.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Nesting multiple Providers",
          "Consuming multiple contexts in one component",
          "Keeping contexts independent for performance",
          "Provider wrapper pattern for clean app setup",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState } from 'react';

// --- Theme Context ---
const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme requires ThemeProvider');
  return ctx;
}

// --- Auth Context ---
const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (name) => setUser({ name, role: 'user' });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth requires AuthProvider');
  return ctx;
}

// --- Notification Context ---
const NotificationContext = createContext(null);
function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 3000);
  };
  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}
function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotifications requires NotificationProvider');
  return ctx;
}

// --- Combined Provider Wrapper ---
function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// --- Components using multiple contexts ---
function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const { addNotification } = useNotifications();

  const handleAuth = () => {
    if (user) { logout(); addNotification('Logged out', 'info'); }
    else { login('Alice'); addNotification('Welcome back, Alice!', 'success'); }
  };

  return (
    <header style={{
      background: theme === 'dark' ? '#1e1e1e' : '#fff',
      color: theme === 'dark' ? '#eee' : '#333',
      padding: '12px 20px', display: 'flex', justifyContent: 'space-between',
      borderBottom: '1px solid ' + (theme === 'dark' ? '#333' : '#eee'),
    }}>
      <h2>App</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
        <button onClick={handleAuth}>{user ? \`Logout (\${user.name})\` : 'Login'}</button>
      </div>
    </header>
  );
}

function NotificationBar() {
  const { notifications } = useNotifications();
  if (notifications.length === 0) return null;
  const colors = { info: '#e3f2fd', success: '#e8f5e9', error: '#ffebee' };
  return (
    <div style={{ padding: '0 20px' }}>
      {notifications.map(n => (
        <div key={n.id} style={{ background: colors[n.type], padding: '8px 12px', borderRadius: '6px', marginTop: '8px' }}>
          {n.message}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <AppProviders>
      <Header />
      <NotificationBar />
      <main style={{ padding: '20px' }}>
        <p>Main content goes here.</p>
      </main>
    </AppProviders>
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
          "Three independent contexts: ThemeContext (UI appearance), AuthContext (who's logged in), NotificationContext (temporary messages). Each has its own Provider, custom hook, and state. They don't know about each other.",
      },
      {
        type: "text",
        content:
          "AppProviders nests all three providers into a single wrapper. This keeps App clean — one component wraps all contexts, and the app's JSX is simple. The nesting order doesn't matter for most use cases (unless one provider depends on another).",
      },
      {
        type: "text",
        content:
          "Header consumes all three contexts. It uses the theme for styling, auth for login/logout, and notifications to show feedback. Each context is independent — changing the theme doesn't re-render NotificationBar (because NotificationBar doesn't consume ThemeContext).",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Put all data in one context → Toggling the theme would re-render every component that reads any data, including those that only need notifications. Separate contexts keep re-renders scoped.",
          "Forget one of the Providers in AppProviders → The custom hook throws a helpful error: 'useAuth requires AuthProvider.' This is why custom hooks with error checks are essential.",
          "Create a new Provider instance inside a child → A second AuthProvider inside a page would override the parent's auth for that section, which is confusing unless intentional.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a LanguageContext with English and French support. The Header should show a language toggle button. Create a simple translations object and a t(key) function that returns the translation for the current language. Use it in all components.",
        hint: "Hint: const translations = { en: { greeting: 'Hello' }, fr: { greeting: 'Bonjour' } }. The context value includes { language, setLanguage, t: (key) => translations[language][key] }.",
        solution: `const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const translations = {
    en: { greeting: 'Hello', login: 'Login', logout: 'Logout', welcome: 'Welcome back' },
    fr: { greeting: 'Bonjour', login: 'Connexion', logout: 'Déconnexion', welcome: 'Bon retour' },
  };
  const t = (key) => translations[language]?.[key] || key;
  const toggleLanguage = () => setLanguage(l => l === 'en' ? 'fr' : 'en');

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage requires LanguageProvider');
  return ctx;
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 5: CONTEXT + useReducer
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 5: Context + useReducer — Scalable State",
      },
      {
        type: "text",
        content:
          "When your context state becomes complex — multiple actions, nested updates, interdependent values — useState gets messy. useReducer gives you action-based state management (like a mini Redux) that pairs perfectly with Context. This is the standard pattern for production-scale shared state.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "useReducer for complex state with multiple action types",
          "Dispatching actions instead of calling multiple setters",
          "Separating state and dispatch into two contexts (performance)",
          "The production pattern used by large React codebases",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useReducer } from 'react';

// Reducer — all state logic in one pure function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case 'TOGGLE':
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case 'DELETE':
      return state.filter(t => t.id !== action.id);
    case 'CLEAR_DONE':
      return state.filter(t => !t.done);
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

// Two separate contexts: state (changes often) and dispatch (stable)
const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: 'Learn useContext', done: true },
    { id: 2, text: 'Build a project', done: false },
    { id: 3, text: 'Get hired', done: false },
  ]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

function useTodos() {
  const ctx = useContext(TodosContext);
  if (ctx === null) throw new Error('useTodos requires TodoProvider');
  return ctx;
}

function useTodosDispatch() {
  const ctx = useContext(TodosDispatchContext);
  if (!ctx) throw new Error('useTodosDispatch requires TodoProvider');
  return ctx;
}

// Components
function AddTodo() {
  const dispatch = useTodosDispatch(); // Only needs dispatch, not state
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD', text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
      <input value={text} onChange={e => setText(e.target.value)}
        placeholder="What needs doing?" style={{ flex: 1, padding: '8px' }} />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '8px', borderBottom: '1px solid #eee',
        }}>
          <input type="checkbox" checked={todo.done}
            onChange={() => dispatch({ type: 'TOGGLE', id: todo.id })} />
          <span style={{
            flex: 1, textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#999' : '#333',
          }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

function TodoSummary() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const done = todos.filter(t => t.done).length;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontSize: '14px', color: '#666' }}>
      <span>{done}/{todos.length} completed</span>
      {done > 0 && (
        <button onClick={() => dispatch({ type: 'CLEAR_DONE' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d32f2f' }}>
          Clear completed
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: '400px', margin: '20px auto' }}>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
        <TodoSummary />
      </div>
    </TodoProvider>
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
          "The reducer is a pure function that handles all state transitions. Given the current state and an action, it returns the new state. All logic is in one place — ADD, TOGGLE, DELETE, CLEAR_DONE. Adding a new action (like EDIT) means adding one case to the switch.",
      },
      {
        type: "text",
        content:
          "Two separate contexts: TodosContext (the data) and TodosDispatchContext (the dispatch function). This is a performance optimisation — dispatch never changes (it's a stable reference from useReducer), so components that only dispatch (like AddTodo) never re-render when the todo list changes.",
      },
      {
        type: "text",
        content:
          "Components dispatch actions instead of calling multiple setters. dispatch({ type: 'TOGGLE', id: todo.id }) is clearer than setTodos(prev => prev.map(t => ...)). The component says what happened (toggle this todo), and the reducer handles how to update the state.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use one context for both state and dispatch → Every component that dispatches also re-renders when state changes — even AddTodo which doesn't display any todos. Splitting prevents this.",
          "Forget the default/throw in the reducer → A misspelled action type silently does nothing. The throw catches typos immediately during development.",
          "Mutate state in the reducer: state.push(newTodo) → The reference doesn't change, React doesn't re-render. Always return a new array/object.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add an EDIT action to the reducer. Double-clicking a todo should make it editable (show an input). Pressing Enter dispatches { type: 'EDIT', id, text }. Add the reducer case and update TodoList.",
        hint: "Hint: Add a local editingId state in TodoList. When editingId matches a todo's id, render an input instead of a span. On Enter, dispatch EDIT and clear editingId.",
        solution: `// Add to the reducer:
case 'EDIT':
  return state.map(t => t.id === action.id ? { ...t, text: action.text } : t);

// In TodoList, add local state:
const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState('');

// In the todo map, replace the span:
{editingId === todo.id ? (
  <input value={editText} onChange={e => setEditText(e.target.value)}
    onKeyDown={e => {
      if (e.key === 'Enter') { dispatch({ type: 'EDIT', id: todo.id, text: editText }); setEditingId(null); }
    }}
    onBlur={() => setEditingId(null)} autoFocus style={{ flex: 1 }} />
) : (
  <span onDoubleClick={() => { setEditingId(todo.id); setEditText(todo.text); }}
    style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}>
    {todo.text}
  </span>
)}`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 6: NESTED PROVIDERS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 6: Nested Providers — Overriding Context",
      },
      {
        type: "text",
        content:
          "A powerful but often overlooked feature: you can nest multiple Providers for the same Context. Each component reads from the closest Provider above it. This lets you override context values for specific sections of your app — like a page that uses a different theme, or a modal with its own notification scope.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Nesting same-context Providers for overrides",
          "Components reading from the nearest Provider",
          "Practical use case: themed sections within a page",
          "Understanding the Provider tree for debugging",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children, forcedTheme }) {
  const [theme, setTheme] = useState(forcedTheme || 'light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme requires ThemeProvider');
  return ctx;
}

function ThemedBox({ label }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div style={{
      background: isDark ? '#2d2d2d' : '#f9f9f9',
      color: isDark ? '#eee' : '#333',
      border: '1px solid ' + (isDark ? '#555' : '#ddd'),
      borderRadius: '10px', padding: '20px', marginBottom: '12px',
    }}>
      <strong>{label}</strong>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <h1>Nested Providers</h1>

        {/* These read from the outer (root) provider */}
        <ThemedBox label="Regular Section" />
        <ThemedBox label="Also Regular" />

        {/* This section has its own provider — starts in dark mode */}
        <ThemeProvider forcedTheme="dark">
          <div style={{ border: '2px dashed #666', borderRadius: '12px', padding: '15px', marginBottom: '12px' }}>
            <p style={{ color: '#999', fontSize: '13px' }}>Overridden section (own dark provider)</p>
            <ThemedBox label="Dark Section A" />
            <ThemedBox label="Dark Section B" />
          </div>
        </ThemeProvider>

        {/* Back to the outer provider */}
        <ThemedBox label="Back to Regular" />
      </div>
    </ThemeProvider>
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
          "The outer ThemeProvider wraps the entire app and starts in light mode. The inner ThemeProvider wraps just one section and starts in dark mode. ThemedBox components inside the inner Provider read 'dark' while those outside read 'light'. Toggling within the inner section doesn't affect the outer section — they're completely independent.",
      },
      {
        type: "text",
        content:
          "This is the 'closest Provider wins' rule in action. React walks up the tree from the consuming component and stops at the first Provider it finds for that Context. Components can't tell if they're in a nested or root Provider — they just read the value.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Expect inner toggle to affect outer components → Each Provider has its own state. Toggling the inner dark theme only changes the inner section. This is a feature, not a bug.",
          "Use a single state variable for both sections → You'd need the inner section to read from the outer Provider, defeating the purpose. Nested Providers give you scoped overrides.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Create a 'Preview Mode' for a blog editor. The main page uses the user's theme. But the article preview section uses a nested ThemeProvider that always shows the article in light mode (the theme readers will see). The user can still toggle their own UI theme without affecting the preview.",
        hint: "Hint: Wrap the preview section in <ThemeProvider forcedTheme='light'>. The editor controls above use the outer theme. The preview always reads 'light'.",
        solution: `function BlogEditor() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div style={{ background: theme === 'dark' ? '#1e1e1e' : '#fff', color: theme === 'dark' ? '#eee' : '#333', padding: '20px' }}>
        <h2>Editor (your theme: {theme})</h2>
        <button onClick={toggleTheme}>Toggle your theme</button>
        <textarea style={{ width: '100%', height: '100px', marginTop: '10px' }}
          placeholder="Write your article..." />
      </div>

      <ThemeProvider forcedTheme="light">
        <div style={{ border: '2px solid #1976d2', borderRadius: '8px', margin: '15px 0', padding: '20px' }}>
          <h3 style={{ color: '#1976d2' }}>Preview (always light)</h3>
          <ThemedBox label="Article Preview" />
        </div>
      </ThemeProvider>
    </div>
  );
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 7: PERFORMANCE — AVOIDING RE-RENDERS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: Performance — Avoiding Unnecessary Re-Renders",
      },
      {
        type: "text",
        content:
          "The biggest practical concern with useContext: when the Provider's value changes, every consumer re-renders. For a theme toggle that changes once a minute, this is fine. For a chat app that updates messages every second, it can cause lag. This example shows the key techniques for keeping Context performant.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Why Context causes re-renders and when it matters",
          "Split contexts: separate frequently-changing from rarely-changing data",
          "useMemo to stabilise Provider values",
          "memo() to prevent child re-renders",
        ],
      },
      {
        type: "boldText",
        content: "The Problem: Unnecessary Re-Renders",
      },
      {
        type: "code",
        content: `// PROBLEM: Counter updates every second → Theme consumers re-render too
function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCounter(c => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppContext.Provider value={{ theme, setTheme, counter }}>
      {children}
    </AppContext.Provider>
  );
  // counter changes every second → new value object → ALL consumers re-render
  // Header (which only needs theme) re-renders 60 times per minute for no reason
}`,
      },
      {
        type: "boldText",
        content: "Solution 1: Split Contexts by Update Frequency",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useState, useEffect, memo } from 'react';

// Rarely changes
const ThemeContext = createContext(null);
// Changes every second
const CounterContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCounter(c => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
}

// Header only reads ThemeContext → re-renders only on theme change
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log('Header rendered'); // Only when theme changes
  return (
    <header style={{ background: theme === 'dark' ? '#1e1e1e' : '#fff', padding: '12px' }}>
      <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
    </header>
  );
}

// Counter display reads CounterContext → re-renders every second (expected)
function CounterDisplay() {
  const counter = useContext(CounterContext);
  console.log('Counter rendered'); // Every second
  return <p>Timer: {counter}s</p>;
}

// Expensive list that doesn't use any context → wrap in memo
const ExpensiveList = memo(function ExpensiveList({ items }) {
  console.log('ExpensiveList rendered'); // Only when items change
  return (
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
});

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3']; // Stable reference

  return (
    <ThemeProvider>
      <CounterProvider>
        <Header />
        <CounterDisplay />
        <ExpensiveList items={items} />
      </CounterProvider>
    </ThemeProvider>
  );
}`,
      },
      {
        type: "boldText",
        content: "Solution 2: useMemo for Stable Values",
      },
      {
        type: "code",
        content: `import { useMemo } from 'react';

// When you can't split contexts, stabilise the value
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice', role: 'admin' });
  const [preferences, setPreferences] = useState({ theme: 'light' });

  // Without useMemo: new object every render → all consumers re-render
  // With useMemo: same object reference unless user or preferences actually change
  const value = useMemo(
    () => ({ user, setUser, preferences, setPreferences }),
    [user, preferences]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}`,
      },
      {
        type: "boldText",
        content: "Performance Decision Guide",
      },
      {
        type: "list",
        items: [
          "Context changes rarely (theme, auth, locale): Don't optimise. The re-renders are infrequent and harmless.",
          "Context changes moderately (cart, form state): Use useMemo on the Provider value to prevent unnecessary object creation.",
          "Context changes rapidly (timer, live data, typing): Split into separate contexts. Use memo() on expensive consumer components. Consider moving rapidly-changing data out of Context entirely (use local state or a ref).",
          "Many consumers read the same context: Split state and dispatch into two contexts (the useReducer pattern from Example 5). Dispatch-only consumers never re-render on state changes.",
        ],
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Put theme and counter in the same context → Header re-renders every second even though it only needs theme. The split prevents this.",
          "Forget memo() on ExpensiveList → If its parent re-renders (from context), ExpensiveList re-renders too — even though its props didn't change. memo() adds a props comparison.",
          "Use useMemo with no dependencies: useMemo(() => value, []) → The value is computed once and never updates. Always include the state values that should trigger updates.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a live search with shared results. SearchContext holds the query (changes on every keystroke) and results (changes on each fetch). Split it into two contexts: SearchQueryContext (changes frequently — every keystroke) and SearchResultsContext (changes less frequently — only after debounced fetch). Make sure the results list doesn't re-render on every keystroke.",
        hint: "Hint: Two providers. The query provider wraps everything. The results provider sits inside a component that debounces the query and only updates results after the fetch completes. The results list component only reads SearchResultsContext.",
        solution: `const SearchQueryContext = createContext(null);
const SearchResultsContext = createContext(null);

function SearchQueryProvider({ children }) {
  const [query, setQuery] = useState('');
  return (
    <SearchQueryContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
}

function SearchResultsProvider({ children }) {
  const { query } = useContext(SearchQueryContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const timer = setTimeout(() => {
      fetch(\`https://dummyjson.com/products/search?q=\${query}\`)
        .then(r => r.json())
        .then(data => setResults(data.products || []));
    }, 400);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <SearchResultsContext.Provider value={results}>
      {children}
    </SearchResultsContext.Provider>
  );
}

// SearchInput re-renders on every keystroke (expected)
function SearchInput() {
  const { query, setQuery } = useContext(SearchQueryContext);
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}

// ResultsList only re-renders when results change (after debounced fetch)
const ResultsList = memo(function ResultsList() {
  const results = useContext(SearchResultsContext);
  console.log('Results rendered'); // Only after fetch, not every keystroke
  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
});`,
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
          "You've now mastered useContext from the basic pattern to production-ready patterns: theme toggling, authentication, shopping carts, multiple contexts, Context + useReducer, nested providers, and performance optimisation. Here's where to go next:",
      },
      {
        type: "list",
        items: [
          "useReducer — Deep dive into action-based state management. Pairs perfectly with useContext for complex shared state.",
          "State Management Libraries — When Context + useReducer isn't enough, explore Zustand (lightweight), Redux Toolkit (enterprise), or Jotai (atomic state).",
          "React Query / TanStack Query — For server state (data from APIs), a dedicated library handles caching, refetching, and synchronisation better than Context.",
          "Build projects — Turn the shopping cart into a full e-commerce app. Add the auth context to a multi-page app with React Router. Use the notification context in a real-time chat.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export  {useContextData};