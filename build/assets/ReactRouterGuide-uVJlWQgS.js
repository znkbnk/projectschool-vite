import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-router-guide`,title:`The Definitive Guide to React Router`,image:`/images/reactRouter.webp`,paragraphs:[{type:`text`,content:`Welcome to the Definitive Guide to React Router. React builds single-page applications — one HTML file, no full-page reloads. But users still expect URLs: /products, /products/42, /dashboard/settings. React Router gives you URL-based navigation in a React app: map URLs to components, pass data through URL parameters, protect routes behind authentication, and navigate programmatically after actions like form submissions. This guide covers React Router v6 through seven progressive examples, from basic routing to a full multi-page app.`},{type:`title`,content:`Understanding React Router`},{type:`text`,content:`In a traditional website, clicking a link sends a request to the server, which returns a new HTML page. The entire page reloads. In a React SPA (Single-Page Application), there's only one HTML page. React Router intercepts URL changes and swaps components in and out — no server request, no page reload, instant navigation. The URL updates, the browser history works (back/forward buttons), but React handles everything client-side.`},{type:`boldText`,content:`Installation`},{type:`code`,content:`npm install react-router-dom

// Import what you need:
import { BrowserRouter, Routes, Route, Link, NavLink,
  Outlet, useParams, useSearchParams, useNavigate, Navigate
} from 'react-router-dom';`},{type:`boldText`,content:`Core Building Blocks`},{type:`list`,items:[`<BrowserRouter> — Wraps your entire app. Enables React Router to manage the URL. Goes in main.jsx or App.jsx, wrapping everything.`,`<Routes> — A container for your route definitions. Only the first matching route renders.`,`<Route path='/about' element={<About />} /> — Maps a URL path to a component. When the URL matches /about, React renders the About component.`,`<Link to='/about'>About</Link> — Navigates without a page reload. Renders an <a> tag but intercepts the click to use client-side routing.`,`<NavLink to='/about'> — Like Link, but adds an 'active' class when the URL matches. Perfect for navigation menus.`,`<Outlet /> — Renders the child route's component inside a parent layout. The key to nested routing.`,`useParams() — Reads URL parameters: /products/:id → useParams() returns { id: '42' }.`,`useSearchParams() — Reads and writes query strings: /products?category=shoes.`,`useNavigate() — Navigate programmatically: after a form submit, after login, after a timer.`,`<Navigate to='/login' /> — Redirects declaratively. Render this component and the user is sent to /login.`]},{type:`title`,content:`How Routing Works`},{type:`code`,content:`// The minimal React Router setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// URL is "/" → Home renders
// Click "About" → URL changes to "/about" → About renders
// No page reload. Browser back button works.`},{type:`text`,content:`When the user clicks a Link, React Router updates the URL in the browser's address bar (using the History API), then checks which Route's path matches the new URL, and renders that route's element. The rest of the page (the nav, any shared layout) stays exactly as-is. Only the matched route's component swaps.`},{type:`title`,content:`Common Pitfalls`},{type:`boldText`,content:`1. Using <a> Tags Instead of <Link>`},{type:`code`,content:`// BAD: Full page reload — defeats the purpose of SPA
<a href="/about">About</a>

// GOOD: Client-side navigation — instant, no reload
<Link to="/about">About</Link>`},{type:`boldText`,content:`2. Forgetting BrowserRouter`},{type:`code`,content:`// BUG: useNavigate / Link / Routes outside BrowserRouter → crash
function App() {
  return (
    <Routes>  {/* Error: useRoutes() may only be used in a Router */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

// FIX: Wrap in BrowserRouter (usually in main.jsx)
<BrowserRouter>
  <App />
</BrowserRouter>`},{type:`boldText`,content:`3. Missing the Wildcard 404 Route`},{type:`code`,content:`// Without a catch-all, unmatched URLs show a blank page
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  {/* /xyz → nothing renders */}
</Routes>

// FIX: Add a catch-all at the end
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>`},{type:`boldText`,content:`4. Nested Route Paths Starting with /`},{type:`code`,content:`// BUG: Nested route with leading / → becomes absolute, not relative
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="/settings" element={<Settings />} />
  {/* This matches /settings, NOT /dashboard/settings */}
</Route>

// FIX: Nested paths are relative — no leading /
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
  {/* Matches /dashboard/settings ✓ */}
</Route>`},{type:`title`,content:`Example 1: Basic Routing — Pages and Navigation`},{type:`text`,content:`Your first multi-page React app: a home page, an about page, a contact page, and a 404 page. This covers the core setup: BrowserRouter, Routes, Route, Link, NavLink with active styling, and the wildcard catch-all route.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Setting up BrowserRouter, Routes, and Route`,`Navigation with Link and NavLink (active state)`,`Catch-all route for 404 pages`,`Shared navigation that persists across pages`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    padding: '8px 16px', borderRadius: '6px', textDecoration: 'none',
    background: isActive ? '#1976d2' : 'transparent',
    color: isActive ? '#fff' : '#333',
  });

  return (
    <nav style={{ display: 'flex', gap: '8px', padding: '12px 20px', borderBottom: '1px solid #eee' }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome Home</h1>
      <p>This is a single-page app with client-side routing.</p>
      <Link to="/about">Learn about us →</Link>
    </div>
  );
}

function About() {
  return <div style={{ padding: '20px' }}><h1>About Us</h1><p>We teach React through hands-on projects.</p></div>;
}

function Contact() {
  return <div style={{ padding: '20px' }}><h1>Contact</h1><p>hello@example.com</p></div>;
}

function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`BrowserRouter wraps everything and enables routing. Navbar sits outside Routes so it appears on every page. Routes contains the route definitions — React renders whichever Route matches the current URL. The path='*' route catches any URL that doesn't match the others.`},{type:`text`,content:`NavLink adds active styling automatically. The style function receives { isActive } and returns different styles based on whether the link matches the current URL. The end prop on the Home NavLink ensures it's only active at exactly '/' — without it, '/' would match '/about' too since every path starts with '/'.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use <a href='/about'> instead of <Link to='/about'> → Full page reload. The SPA unmounts and remounts everything. State is lost.`,`Put Navbar inside <Routes> → It only shows on the route it's in, not on every page. Shared UI goes outside Routes.`,`Forget end on the Home NavLink → The '/' NavLink stays highlighted on every page because every URL starts with '/'.`,`Put the catch-all path='*' first → It matches everything. No other routes ever render. Always put it last.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a Services page with 3 service cards. Each card should be a Link to a detail page (/services/web-design, /services/seo, etc.). For now, use placeholder pages — you'll implement dynamic routes in Example 3.`,hint:`Hint: Add <Route path='/services' element={<Services />} /> and link cards with <Link to='/services/web-design'>.`,solution:`function Services() {
  const services = [
    { slug: 'web-design', name: 'Web Design', desc: 'Beautiful, responsive websites' },
    { slug: 'seo', name: 'SEO', desc: 'Rank higher on Google' },
    { slug: 'development', name: 'Development', desc: 'Full-stack React applications' },
  ];
  return (
    <div style={{ padding: '20px' }}>
      <h1>Services</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
        {services.map(s => (
          <Link key={s.slug} to={\`/services/\${s.slug}\`}
            style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px', textDecoration: 'none', color: '#333' }}>
            <h3>{s.name}</h3><p>{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
// Add <Route path="/services" element={<Services />} /> to Routes`},{type:`title`,content:`Example 2: Nested Routes & Layouts`},{type:`text`,content:`Real apps have shared layouts: a dashboard with a sidebar that stays while the content area changes, a settings page with tabs, an admin panel with a header. Nested routes let you define a parent layout and render child routes inside it using the Outlet component.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Parent routes as layouts with <Outlet />`,`index route (default child)`,`Relative links in nested routes`,`Shared sidebar/header that persists across child pages`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';

// Shared layout for the dashboard section
function DashboardLayout() {
  const sidebarLinks = [
    { to: '/dashboard', label: 'Overview', end: true },
    { to: '/dashboard/analytics', label: 'Analytics' },
    { to: '/dashboard/settings', label: 'Settings' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 50px)' }}>
      <aside style={{ width: '200px', background: '#f5f5f5', padding: '20px' }}>
        <h3>Dashboard</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {sidebarLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.end}
              style={({ isActive }) => ({
                padding: '8px 12px', borderRadius: '6px', textDecoration: 'none',
                background: isActive ? '#1976d2' : 'transparent',
                color: isActive ? '#fff' : '#333',
              })}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />  {/* Child route renders here */}
      </main>
    </div>
  );
}

// Child pages
function Overview() {
  return <div><h1>Overview</h1><p>Welcome to your dashboard.</p></div>;
}

function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
        {[{ label: 'Visitors', value: '12,847' }, { label: 'Page Views', value: '48,293' }, { label: 'Bounce Rate', value: '32%' }].map(s => (
          <div key={s.label} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{s.value}</p>
            <p style={{ color: '#666' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Settings() {
  return <div><h1>Settings</h1><p>Manage your preferences.</p></div>;
}

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home</h1>
      <Link to="/dashboard">Go to Dashboard →</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '12px 20px', borderBottom: '1px solid #eee', display: 'flex', gap: '12px' }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>MyApp</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<div style={{ padding: '20px' }}><h1>404</h1><Link to="/">Home</Link></div>} />
      </Routes>
    </BrowserRouter>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`DashboardLayout is the parent route. It renders the sidebar and an <Outlet />. When the URL is /dashboard, the index child (Overview) renders inside the Outlet. When the URL is /dashboard/analytics, Analytics renders inside the Outlet. The sidebar stays — only the Outlet content swaps.`},{type:`text`,content:`Child route paths are relative: path='analytics' means /dashboard/analytics, not /analytics. The index route has no path — it renders when the parent route matches exactly (/dashboard). This is the default content for the layout.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Forget <Outlet /> in DashboardLayout → Child routes match but have nowhere to render. The layout shows but the content area is empty.`,`Use path='/analytics' (with leading slash) → Matches /analytics, not /dashboard/analytics. Nested paths must be relative.`,`Put the child routes outside the parent → They render as standalone pages, not inside the dashboard layout.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a Settings sub-layout with tabs (Profile, Security, Notifications). Settings becomes a parent route with its own <Outlet /> and tab navigation. Each tab is a nested child route.`,hint:`Hint: Settings becomes a layout: render tabs as NavLinks + <Outlet />. Child routes: <Route index element={<Profile />} />, <Route path='security' element={<Security />} />, etc.`,solution:`function SettingsLayout() {
  return (
    <div>
      <h1>Settings</h1>
      <nav style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <NavLink to="/dashboard/settings" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Profile</NavLink>
        <NavLink to="/dashboard/settings/security" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Security</NavLink>
        <NavLink to="/dashboard/settings/notifications" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Notifications</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
// Replace the settings Route with:
<Route path="settings" element={<SettingsLayout />}>
  <Route index element={<Profile />} />
  <Route path="security" element={<Security />} />
  <Route path="notifications" element={<Notifications />} />
</Route>`},{type:`title`,content:`Example 3: Dynamic Routes — useParams`},{type:`text`,content:`Most apps have pages that follow a pattern: /products/1, /products/2, /users/alice. You don't create a separate Route for each one — you create one dynamic route with a parameter: /products/:id. The :id part captures whatever value is in the URL, and useParams() lets you read it inside the component.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Dynamic route segments with :paramName`,`Reading URL parameters with useParams()`,`Linking to dynamic routes with template literals`,`Handling invalid/missing parameters (404 within the page)`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'React Stickers', price: 4.99, category: 'stickers', description: 'High-quality vinyl stickers for your laptop.', emoji: '⚛️' },
  { id: 2, name: 'JS Mug', price: 12.99, category: 'mugs', description: 'Start your morning with JavaScript.', emoji: '☕' },
  { id: 3, name: 'Code Hoodie', price: 39.99, category: 'clothing', description: 'Comfortable hoodie for late-night coding.', emoji: '👕' },
  { id: 4, name: 'Debug Duck', price: 8.99, category: 'accessories', description: 'Your rubber duck debugging companion.', emoji: '🦆' },
  { id: 5, name: 'Git Notebook', price: 6.99, category: 'stationery', description: 'Track your ideas (with better version control).', emoji: '📓' },
];

function ProductList() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {products.map(p => (
          <Link key={p.id} to={\`/products/\${p.id}\`}
            style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px',
              textDecoration: 'none', color: '#333', textAlign: 'center' }}>
            <span style={{ fontSize: '36px' }}>{p.emoji}</span>
            <h3>{p.name}</h3>
            <p>£{p.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();  // id is always a string
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>No product with ID "{id}"</p>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <Link to="/products" style={{ color: '#1976d2' }}>← Back to Products</Link>
      <div style={{ marginTop: '15px' }}>
        <span style={{ fontSize: '60px' }}>{product.emoji}</span>
        <h1>{product.name}</h1>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>£{product.price.toFixed(2)}</p>
        <p style={{ color: '#666' }}>{product.description}</p>
        <span style={{ background: '#e3f2fd', padding: '4px 10px', borderRadius: '10px', fontSize: '13px' }}>
          {product.category}
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '12px 20px', borderBottom: '1px solid #eee' }}>
        <Link to="/" style={{ marginRight: '12px' }}>Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div style={{ padding: '20px' }}><h1>Home</h1><Link to="/products">Shop →</Link></div>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<div style={{ padding: '20px' }}><h1>404</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`The route path='/products/:id' has a dynamic segment :id. When the URL is /products/3, React Router matches this route and passes { id: '3' } to useParams(). The component uses this to look up the product. Note: params are always strings — you need Number(id) to compare with numeric IDs.`},{type:`text`,content:"ProductList generates links dynamically using template literals: to={`/products/${p.id}`}. Each product card links to its detail page. ProductDetail reads the ID, finds the product, and either renders the details or shows a 'not found' message for invalid IDs."},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Compare id === p.id without Number() → '3' !== 3. The product is never found. Params are always strings.`,`Hardcode links: to='/products/1' → Works but doesn't scale. Always generate dynamic links from data.`,`Forget the not-found check → Navigating to /products/999 crashes trying to access product.name on undefined.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add 'Previous' and 'Next' navigation buttons to ProductDetail. They should link to the adjacent product IDs. Disable the button if there's no previous/next product.`,hint:`Hint: Find the current product's index in the array. Previous = products[index - 1], Next = products[index + 1]. Render Link components with disabled styling when null.`,solution:`// Inside ProductDetail, after finding the product:
const currentIndex = products.findIndex(p => p.id === Number(id));
const prev = products[currentIndex - 1];
const next = products[currentIndex + 1];

// In the JSX:
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
  {prev ? <Link to={\`/products/\${prev.id}\`}>← {prev.name}</Link> : <span />}
  {next ? <Link to={\`/products/\${next.id}\`}>{next.name} →</Link> : <span />}
</div>`},{type:`title`,content:`Example 4: Search & Filter — useSearchParams`},{type:`text`,content:`Query parameters (?category=shoes&sort=price) let you store UI state in the URL: filters, search terms, sort order, pagination. This means the user can bookmark a filtered view, share it, or use the back button to undo a filter change. useSearchParams reads and writes these query strings.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Reading query parameters with useSearchParams()`,`Updating query parameters without page reload`,`Syncing UI state (filters, search) with the URL`,`Combining useParams (for the page) with useSearchParams (for filters)`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'React Stickers', price: 4.99, category: 'stickers', emoji: '⚛️' },
  { id: 2, name: 'JS Mug', price: 12.99, category: 'mugs', emoji: '☕' },
  { id: 3, name: 'Code Hoodie', price: 39.99, category: 'clothing', emoji: '👕' },
  { id: 4, name: 'Debug Duck', price: 8.99, category: 'accessories', emoji: '🦆' },
  { id: 5, name: 'Git Notebook', price: 6.99, category: 'stationery', emoji: '📓' },
  { id: 6, name: 'CSS Mug', price: 11.99, category: 'mugs', emoji: '☕' },
  { id: 7, name: 'Node Stickers', price: 3.99, category: 'stickers', emoji: '🟢' },
  { id: 8, name: 'Terminal T-Shirt', price: 24.99, category: 'clothing', emoji: '👕' },
];

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read current filter values from URL
  const search = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'name';

  // Update one parameter while keeping others
  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'all' && value !== 'name') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  // Filter and sort
  let filtered = allProducts;
  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  if (category !== 'all') filtered = filtered.filter(p => p.category === category);
  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);

  const categories = ['all', ...new Set(allProducts.map(p => p.category))];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Products</h1>
      <p style={{ color: '#999', fontSize: '13px' }}>Filters are stored in the URL — bookmark or share this page!</p>

      <input value={search} onChange={e => updateParam('q', e.target.value)}
        placeholder="Search products..." style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} />

      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
        {categories.map(c => (
          <button key={c} onClick={() => updateParam('category', c)}
            style={{ padding: '6px 12px', borderRadius: '15px', border: '1px solid #ddd', cursor: 'pointer',
              background: category === c ? '#1976d2' : '#fff', color: category === c ? '#fff' : '#333' }}>
            {c}
          </button>
        ))}
      </div>

      <select value={sort} onChange={e => updateParam('sort', e.target.value)}
        style={{ padding: '8px', marginBottom: '15px' }}>
        <option value="name">Sort: Name</option>
        <option value="price-asc">Sort: Price ↑</option>
        <option value="price-desc">Sort: Price ↓</option>
      </select>

      <p>{filtered.length} results</p>
      {filtered.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '12px', padding: '10px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
          <span style={{ fontSize: '28px' }}>{p.emoji}</span>
          <div style={{ flex: 1 }}><strong>{p.name}</strong><span style={{ color: '#999', marginLeft: '8px', fontSize: '13px' }}>{p.category}</span></div>
          <span style={{ fontWeight: 'bold' }}>£{p.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useSearchParams works like useState for the URL query string. searchParams.get('category') reads ?category=mugs. setSearchParams(params) updates the URL without a page reload. The URL becomes the single source of truth for all filter state.`},{type:`text`,content:`The updateParam helper preserves existing parameters when updating one. Without it, setting the category would wipe out the search query. URLSearchParams handles the serialisation — you just set/delete keys and pass the object to setSearchParams.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use useState for filters instead of useSearchParams → Filters reset on refresh. Users can't bookmark or share filtered views. The back button doesn't undo filter changes.`,`Call setSearchParams({ category: 'mugs' }) directly → Wipes all other params. Always build from the existing params: new URLSearchParams(searchParams).`,`Forget the default values (|| 'all') → First render has null for every param, which breaks the filter logic.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add pagination to the product list. Show 4 products per page. Add a page parameter to the URL (?page=2). Display 'Page 1 of 2' with Previous/Next buttons that update the URL.`,hint:`Hint: const page = Number(searchParams.get('page')) || 1. Slice the filtered array: filtered.slice((page-1) * 4, page * 4). Update page with updateParam.`,solution:`const page = Number(searchParams.get('page')) || 1;
const perPage = 4;
const totalPages = Math.ceil(filtered.length / perPage);
const paginated = filtered.slice((page - 1) * perPage, page * perPage);

// Render paginated instead of filtered
// Add navigation:
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
  <button disabled={page <= 1} onClick={() => updateParam('page', String(page - 1))}>← Previous</button>
  <span>Page {page} of {totalPages}</span>
  <button disabled={page >= totalPages} onClick={() => updateParam('page', String(page + 1))}>Next →</button>
</div>`},{type:`title`,content:`Example 5: Protected Routes — Authentication`},{type:`text`,content:`Most apps have pages only logged-in users should see: dashboards, profiles, settings. Protected routes check if the user is authenticated before rendering — if not, they redirect to the login page. After login, the user is sent back to the page they originally tried to visit.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Reusable ProtectedRoute wrapper component`,`Redirecting with <Navigate> and preserving the original URL`,`Role-based access (admin vs user)`,`Redirect-after-login pattern using location state`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';

// Auth context
const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (email) => setUser({ name: email.split('@')[0], email, role: email.includes('admin') ? 'admin' : 'user' });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
function useAuth() { return useContext(AuthContext); }

// Reusable protected route wrapper
function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login, save where they came from
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Access Denied</h1>
        <p>This page requires {requiredRole} access.</p>
        <Link to="/">← Home</Link>
      </div>
    );
  }

  return children;
}

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    login(email);
    // Redirect to where they came from, or home
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  return (
    <div style={{ maxWidth: '350px', margin: '40px auto', padding: '20px' }}>
      <h1>Login</h1>
      {location.state?.from && (
        <p style={{ color: '#1976d2', fontSize: '14px' }}>
          Please log in to access {location.state.from}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com" style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Login</button>
      </form>
      <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
        Try admin@test.com for admin access
      </p>
    </div>
  );
}

function HomePage() {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home</h1>
      {user ? <p>Welcome, {user.name}! <button onClick={logout}>Logout</button></p>
        : <p><Link to="/login">Login</Link> to access protected pages.</p>}
    </div>
  );
}

function Dashboard() { return <div><h1>Dashboard</h1><p>Your personal dashboard.</p></div>; }
function AdminPanel() { return <div><h1>Admin Panel</h1><p>Manage users, content, and settings.</p></div>; }

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav style={{ display: 'flex', gap: '12px', padding: '12px 20px', borderBottom: '1px solid #eee' }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin"><AdminPanel /></ProtectedRoute>
          } />
          <Route path="*" element={<div style={{ padding: '20px' }}><h1>404</h1></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`ProtectedRoute checks auth status. If not logged in, it renders <Navigate to='/login'> which redirects the user. The key detail: state={{ from: location.pathname }} saves where they came from. After login, navigate(from) sends them back to the page they originally tried to visit.`},{type:`text`,content:`The replace prop on Navigate prevents the login redirect from adding to browser history. Without it, pressing 'back' after login would go to the login page, which redirects to the dashboard, which goes to login... an infinite loop. replace overwrites the history entry.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Forget replace on <Navigate> → Back button loops between login and the protected page.`,`Check auth inside each page instead of a wrapper → Duplicated logic in every protected component. One ProtectedRoute component handles all cases.`,`Forget to save the 'from' location → After login, the user always goes to '/' instead of the page they wanted.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a loading state to ProtectedRoute. Simulate checking auth on mount (500ms delay). Show a spinner while checking. This handles the real-world case where auth status comes from an API.`,hint:`Hint: Add a loading state to AuthProvider. Use useEffect to simulate an auth check on mount. ProtectedRoute renders a spinner while loading is true.`,solution:`function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking auth token
    const timer = setTimeout(() => {
      const saved = localStorage.getItem('user');
      if (saved) setUser(JSON.parse(saved));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const login = (email) => { const u = { name: email.split('@')[0], email, role: email.includes('admin') ? 'admin' : 'user' }; setUser(u); localStorage.setItem('user', JSON.stringify(u)); };
  const logout = () => { setUser(null); localStorage.removeItem('user'); };

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
}

function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div style={{ padding: '20px' }}>Checking authentication...</div>;
  if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  if (requiredRole && user.role !== requiredRole) return <div>Access denied</div>;
  return children;
}`},{type:`title`,content:`Example 6: Programmatic Navigation — useNavigate`},{type:`text`,content:`Sometimes you need to navigate in response to code, not a user click: after submitting a form, after a timer, after an API call succeeds, after deleting an item. useNavigate gives you a function you can call anywhere in your component logic.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`useNavigate() for code-triggered navigation`,`Navigate after form submission`,`Navigate with state (passing data between pages)`,`navigate(-1) to go back (like browser back button)`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setSaving(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    const newPost = { id: Date.now(), title, body, date: new Date().toLocaleDateString() };
    setSaving(false);

    // Navigate to success page, passing the post data via state
    navigate('/posts/success', { state: { post: newPost } });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '15px' }}>← Back</button>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)}
          placeholder="Post title" style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} />
        <textarea value={body} onChange={e => setBody(e.target.value)}
          placeholder="Write your post..." rows={6} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
        <button type="submit" disabled={saving} style={{ marginTop: '10px', padding: '10px 20px' }}>
          {saving ? 'Publishing...' : 'Publish'}
        </button>
      </form>
    </div>
  );
}

function PostSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    // Direct access without state — redirect
    return navigate('/', { replace: true });
  }

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', textAlign: 'center' }}>
      <h1>✅ Post Published!</h1>
      <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px', margin: '20px 0', textAlign: 'left' }}>
        <h2>{post.title}</h2>
        <p style={{ color: '#666' }}>{post.body}</p>
        <small style={{ color: '#999' }}>{post.date}</small>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => navigate('/posts/new')}>Write Another</button>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog</h1>
      <button onClick={() => navigate('/posts/new')} style={{ padding: '10px 20px' }}>
        ✍️ Write a Post
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '12px 20px', borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/success" element={<PostSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`After the form submits and the simulated API call succeeds, navigate('/posts/success', { state: { post } }) redirects the user and passes the post data. The success page reads this data from location.state — no global state needed. This is a common pattern for success/confirmation pages.`},{type:`text`,content:`navigate(-1) acts like the browser back button. navigate('/path', { replace: true }) replaces the current history entry instead of adding to it — useful when you don't want the user to 'go back' to a transient page like a loading screen.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Navigate before the API call completes → The user lands on the success page while the post is still saving. Always await the async work first.`,`Forget { state: { post } } → The success page has no data to display. location.state is null.`,`Access /posts/success directly via URL → state is undefined because it only exists from navigate(). Always handle the missing-state case (redirect home).`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a 'preview before publish' flow. After filling the form, clicking 'Preview' navigates to /posts/preview with the draft in state. The preview page shows the post and has 'Edit' (navigate back) and 'Publish' (navigate to success) buttons.`,hint:`Hint: Navigate to /posts/preview with state: { draft }. The preview page reads the draft, displays it, and navigates to /posts/success on publish.`,solution:`// In CreatePost, add a Preview button:
<button type="button" onClick={() => navigate('/posts/preview', { state: { draft: { title, body } } })}>
  Preview
</button>

// New PreviewPage component:
function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const draft = location.state?.draft;
  if (!draft) return navigate('/posts/new', { replace: true });

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
      <h1>Preview</h1>
      <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px' }}>
        <h2>{draft.title}</h2><p>{draft.body}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button onClick={() => navigate(-1)}>← Edit</button>
        <button onClick={() => navigate('/posts/success', { state: { post: { ...draft, id: Date.now(), date: new Date().toLocaleDateString() } } })}>Publish</button>
      </div>
    </div>
  );
}`},{type:`title`,content:`Example 7: Full App — Everything Combined`},{type:`text`,content:`This final example combines every pattern from the guide into one coherent app: an e-commerce store with nested layouts, dynamic product pages, URL-based filtering, protected checkout, programmatic navigation after purchase, and lazy-loaded routes. This is how a real React Router app is structured.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Combining all six patterns in one app`,`Lazy loading with React.lazy and Suspense`,`Route organisation for a real application`,`How all the pieces fit together in production`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, NavLink, Outlet,
  useParams, useSearchParams, useNavigate, useLocation, Navigate
} from 'react-router-dom';
import { useState, createContext, useContext, lazy, Suspense } from 'react';

// ─── Data ───
const PRODUCTS = [
  { id: 1, name: 'React Stickers', price: 4.99, category: 'stickers', emoji: '⚛️', description: 'Premium vinyl stickers.' },
  { id: 2, name: 'JS Mug', price: 12.99, category: 'mugs', emoji: '☕', description: 'Start mornings with JavaScript.' },
  { id: 3, name: 'Code Hoodie', price: 39.99, category: 'clothing', emoji: '👕', description: 'Comfortable for late-night coding.' },
  { id: 4, name: 'Debug Duck', price: 8.99, category: 'accessories', emoji: '🦆', description: 'Rubber duck debugging companion.' },
  { id: 5, name: 'Git Notebook', price: 6.99, category: 'stationery', emoji: '📓', description: 'Version-controlled ideas.' },
  { id: 6, name: 'CSS Mug', price: 11.99, category: 'mugs', emoji: '☕', description: 'Cascading coffee styles.' },
];

// ─── Auth Context ───
const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (email) => setUser({ name: email.split('@')[0], email });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
function useAuth() { return useContext(AuthContext); }

// ─── Cart Context ───
const CartContext = createContext(null);
function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setItems([]);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  return <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, count }}>{children}</CartContext.Provider>;
}
function useCart() { return useContext(CartContext); }

// ─── Protected Route ───
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  return children;
}

// ─── Layout ───
function RootLayout() {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const linkStyle = ({ isActive }) => ({
    padding: '6px 12px', borderRadius: '6px', textDecoration: 'none',
    background: isActive ? '#1976d2' : 'transparent', color: isActive ? '#fff' : '#333',
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
        <nav style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#333', marginRight: '10px' }}>DevShop</Link>
          <NavLink to="/products" style={linkStyle}>Products</NavLink>
          <NavLink to="/cart" style={linkStyle}>Cart {count > 0 && \`(\${count})\`}</NavLink>
        </nav>
        <div>
          {user ? (
            <span>👤 {user.name} <button onClick={logout} style={{ marginLeft: '8px' }}>Logout</button></span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main><Outlet /></main>
    </div>
  );
}

// ─── Pages ───
function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>DevShop</h1>
      <p>Gear for developers.</p>
      <Link to="/products" style={{ display: 'inline-block', padding: '10px 20px', background: '#1976d2', color: '#fff', borderRadius: '6px', textDecoration: 'none', marginTop: '10px' }}>
        Shop Now →
      </Link>
    </div>
  );
}

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const category = searchParams.get('category') || 'all';
  const categories = ['all', ...new Set(PRODUCTS.map(p => p.category))];

  const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '15px', flexWrap: 'wrap' }}>
        {categories.map(c => (
          <button key={c} onClick={() => {
            const params = new URLSearchParams(searchParams);
            c === 'all' ? params.delete('category') : params.set('category', c);
            setSearchParams(params);
          }} style={{ padding: '6px 12px', borderRadius: '15px', border: '1px solid #ddd', cursor: 'pointer',
            background: category === c ? '#1976d2' : '#fff', color: category === c ? '#fff' : '#333' }}>
            {c}
          </button>
        ))}
      </div>
      {filtered.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '12px', padding: '12px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
          <Link to={\`/products/\${p.id}\`} style={{ fontSize: '30px', textDecoration: 'none' }}>{p.emoji}</Link>
          <div style={{ flex: 1 }}>
            <Link to={\`/products/\${p.id}\`} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>{p.name}</Link>
            <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>£{p.price.toFixed(2)}</p>
          </div>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function ProductDetailPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) return <div style={{ padding: '20px' }}><h1>Product Not Found</h1><Link to="/products">← Products</Link></div>;

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '10px' }}>← Back</button>
      <span style={{ fontSize: '60px' }}>{product.emoji}</span>
      <h1>{product.name}</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>£{product.price.toFixed(2)}</p>
      <p style={{ color: '#666' }}>{product.description}</p>
      <button onClick={() => { addItem(product); navigate('/cart'); }}
        style={{ marginTop: '10px', padding: '10px 20px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '6px' }}>
        Add to Cart & View Cart
      </button>
    </div>
  );
}

function CartPage() {
  const { items, removeItem, total, count } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Cart ({count})</h1>
      {items.length === 0 ? (
        <div><p>Your cart is empty.</p><Link to="/products">Shop →</Link></div>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <div><strong>{item.emoji} {item.name}</strong> <span style={{ color: '#666' }}>x{item.qty}</span></div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span>£{(item.price * item.qty).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)}>✕</button>
              </div>
            </div>
          ))}
          <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '15px' }}>Total: £{total.toFixed(2)}</p>
          <button onClick={() => navigate('/checkout')}
            style={{ width: '100%', padding: '12px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '6px', marginTop: '10px' }}>
            Checkout →
          </button>
        </>
      )}
    </div>
  );
}

function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  if (items.length === 0) return <Navigate to="/products" replace />;

  const handleOrder = async () => {
    setProcessing(true);
    await new Promise(r => setTimeout(r, 1500));
    clearCart();
    navigate('/checkout/success', { state: { total, name: user.name } });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Checkout</h1>
      <p>Ordering as {user.name} ({user.email})</p>
      <p>{items.length} items · £{total.toFixed(2)}</p>
      <button onClick={handleOrder} disabled={processing}
        style={{ width: '100%', padding: '12px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '6px' }}>
        {processing ? 'Processing...' : \`Pay £\${total.toFixed(2)}\`}
      </button>
    </div>
  );
}

function OrderSuccess() {
  const location = useLocation();
  const data = location.state;
  if (!data) return <Navigate to="/" replace />;
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>✅ Order Confirmed!</h1>
      <p>Thanks, {data.name}! Your order of £{data.total.toFixed(2)} is on its way.</p>
      <Link to="/products">Continue Shopping →</Link>
    </div>
  );
}

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    login(email);
    navigate(location.state?.from || '/', { replace: true });
  };

  return (
    <div style={{ maxWidth: '350px', margin: '40px auto' }}>
      <h1>Login</h1>
      {location.state?.from && <p style={{ color: '#1976d2', fontSize: '14px' }}>Please login to access {location.state.from}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Login</button>
      </form>
    </div>
  );
}

// ─── App ───
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
              <Route path="/checkout/success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<div style={{ padding: '20px' }}><h1>404</h1><Link to="/">Home</Link></div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`RootLayout is a pathless parent route — it has no path prop, so it matches all routes and wraps them in a shared header with navigation. Every page renders inside its <Outlet />. This is the standard layout pattern for apps with a persistent header/footer.`},{type:`text`,content:`The route structure tells the entire story of the app: public pages (home, products, product detail, cart, login), protected pages (checkout, order success), and a 404 catch-all. useSearchParams handles product filtering, useParams handles product detail, useNavigate handles post-purchase redirect, and ProtectedRoute handles auth.`},{type:`text`,content:`Context providers (AuthProvider, CartProvider) wrap the entire router. This means every page and component can access auth and cart data. The checkout flow demonstrates the full lifecycle: browse → add to cart → try to checkout → redirect to login → login → redirect back to checkout → pay → navigate to success with state.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Put AuthProvider inside BrowserRouter → Technically works, but context providers usually wrap the router so they're available everywhere, including outside Routes.`,`Forget the pathless layout route → No shared header. Every page would need to import and render Navbar individually.`,`Link to checkout with <a> tag → Full reload clears the cart (it's in memory). All internal links must use <Link> or navigate().`,`Navigate to success without clearing cart first → User presses back, sees the cart still full, and could 'buy' again. clearCart() before navigate prevents this.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a user profile page at /profile (protected). Show the user's name and email. Add an 'Order History' section. When the user completes a checkout, save the order to a context and display past orders on the profile page.`,hint:`Hint: Create an OrderContext with an orders array and addOrder function. In CheckoutPage, call addOrder before navigating. ProfilePage reads orders from context.`,solution:`const OrderContext = createContext(null);
function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const addOrder = (order) => setOrders(prev => [...prev, { ...order, id: Date.now(), date: new Date().toLocaleDateString() }]);
  return <OrderContext.Provider value={{ orders, addOrder }}>{children}</OrderContext.Provider>;
}

// In CheckoutPage handleOrder:
const { addOrder } = useContext(OrderContext);
addOrder({ items: [...items], total });
clearCart();
navigate('/checkout/success', { state: { total, name: user.name } });

// ProfilePage:
function ProfilePage() {
  const { user } = useAuth();
  const { orders } = useContext(OrderContext);
  return (
    <div style={{ padding: '20px' }}>
      <h1>{user.name}'s Profile</h1>
      <p>{user.email}</p>
      <h2>Order History</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : orders.map(o => (
        <div key={o.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <p>{o.date} — {o.items.length} items — £{o.total.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've mastered React Router from basic page navigation to a full e-commerce app with dynamic routes, URL-based filtering, authentication, programmatic navigation, and shared layouts. Here's your path forward:`},{type:`list`,items:[`Data Loading — React Router v6.4+ includes loaders and actions for loading data before a route renders. Explore createBrowserRouter and the loader/action pattern.`,`Code Splitting — Use React.lazy() to split your bundle. Each page loads only when visited, improving initial load time.`,`Animations — Use libraries like framer-motion to animate page transitions. Wrap Outlet with AnimatePresence for smooth enter/exit animations.`,`Full-Stack Integration — In a MERN app, React Router handles the frontend while Express handles the API routes. Keep them separate: /api/* goes to Express, everything else goes to React Router.`]},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=[`reactRouter`],h=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),g=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),_=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,v=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||_(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(g,{}):(0,f.jsx)(h,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},y=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let[n,a]=(0,l.useState)(t),[o,c]=(0,l.useState)(null),[d,p]=(0,l.useState)({}),[h,g]=(0,l.useState)(!1),[_,y]=(0,l.useState)(()=>{if(typeof window>`u`)return{};try{let e=localStorage.getItem(`reactRouterCheckedTitles`);return e?JSON.parse(e):{}}catch(e){return console.error(`Error parsing checked titles:`,e),{}}}),b=(0,l.useRef)({}),x=(0,l.useRef)(null),S=(e,t)=>{let r=n[e]||t[0]?.id;return t.find(e=>e.id===r)?.code||t[0]?.code||``};(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;g(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let C=()=>{x.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`reactRouterCheckedTitles`,JSON.stringify(_))},[_]);let w=(0,l.useMemo)(()=>e?.paragraphs?e.paragraphs.filter(e=>e.type===`title`).map((e,t)=>({id:`section-${t}`,title:e.content})):[],[e]),T=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{c(t),setTimeout(()=>c(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),c(t),setTimeout(()=>c(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},E=(e,t,r)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let i=r.findIndex(e=>e.id===n[t]),o;o=e.key===`ArrowLeft`?i>0?i-1:r.length-1:i<r.length-1?i+1:0,a({...n,[t]:r[o].id});let s=b.current[`${t}-${r[o].id}`];s&&s.focus()}},D=e=>{p(t=>({...t,[e]:!t[e]}))},O=e=>{y(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Comprehensive Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),w.length>0&&(0,f.jsxs)(`section`,{ref:x,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:w.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content,m)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:_[t]||!1,onChange:()=>O(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e,m)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(v,{code:e.content,index:t,handleCopy:T,copiedIndex:o}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(r=>{let i=`example-${t}`,o=`${i}-${r.id}`,s=`${o}-panel`;return(0,f.jsx)(`button`,{id:o,role:`tab`,"aria-selected":n[i]===r.id,"aria-controls":s,className:n[i]===r.id?`active`:``,onClick:()=>a({...n,[i]:r.id}),onKeyDown:n=>E(n,i,e.tabs,t),tabIndex:n[i]===r.id?0:-1,ref:e=>b.current[o]=e,children:r.label},r.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${n[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${n[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(v,{code:S(`example-${t}`,e.tabs),index:t,handleCopy:T,copiedIndex:o})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint,m)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>D(t),children:d[t]?`Hide Solution`:`Show Solution`}),d[t]&&(0,f.jsx)(v,{code:e.solution,index:`solution-${t}`,handleCopy:T,copiedIndex:o})]})]},`para-${t}-${e.type}`))}),h&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:C,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};v.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string])};export{y as default};
//# sourceMappingURL=ReactRouterGuide-uVJlWQgS.js.map