var e=[`
//components/CommentSection.js

import React, { useState } from 'react';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Submit</button>
    </div>
  );
};

export default CommentSection;

`,`
//components/Header.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeProvider';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <h1><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>My Blog</Link></h1>
      <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>Toggle Theme</button>
    </header>
  );
};

export default Header;

`,`
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
     
      if (email === 'user@example.com' && password === 'password123') {
        onLogin(true); 
      } else {
        setError('Invalid credentials');
      }
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

`,`
//components/PostList.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TagFilter from "./TagFilter";
import ReactPaginate from 'react-paginate';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tags: [],
  });

  useEffect(() => {
    // Load posts from localStorage (or simulate fetching from a backend)
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
    setFilteredPosts(savedPosts);
  }, []);

  const handleAddPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts)); 
      setNewPost({ title: '', content: '', tags: [] });
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const result = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(result);
  };

  const handlePageClick = (event) => {
    setPageNumber(event.selected);
  };

  const postsPerPage = 5;
  const offset = pageNumber * postsPerPage;
  const pagePosts = filteredPosts.slice(offset, offset + postsPerPage);


  const tags = [...new Set(posts.flatMap(post => post.tags))];

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <TagFilter tags={tags} onTagClick={handleTagClick} />
      
      <div>
        {pagePosts.map(post => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              margin: "1rem 0",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </motion.div>
        ))}
      </div>

      <ReactPaginate
        pageCount={Math.ceil(filteredPosts.length / postsPerPage)}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
      />

      {/* Form to add a new post */}
      <div>
        <h3>Share Your Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={newPost.tags.join(', ')}
          onChange={(e) => setNewPost({ ...newPost, tags: e.target.value.split(', ') })}
        />
        <button onClick={handleAddPost}>Submit</button>
      </div>
    </div>
  );
};

export default PostList;

`,`
//components/SearchBar.js

import React from 'react'

const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search posts..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );

export default SearchBar
`,`
//componentsTagFilter.js

import React from 'react'

const TagFilter = ({ tags, onTagClick }) => (
    <div>
      {tags.map((tag) => (
        <button key={tag} onClick={() => onTagClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );

export default TagFilter
`,`
//pages/Home.js

import React from 'react';
import PostList from '../components/PostList';

const Home = () => (
  <div>
    <h2>Welcome to the Blog</h2>
    <PostList />
  </div>
);

export default Home;

`,`
//pages/PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as contentful from 'contentful';
import CommentSection from '../components/CommentSection';

const client = contentful.createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.getEntry(id)
      .then(entry => setPost({
        title: entry.fields.title,
        content: entry.fields.content,
      }))
      .catch(console.error);
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to="/">Back to Home</Link>
          <CommentSection postId={id} />
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default PostDetail;

`,`
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Login from './components/Login'; // Import Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    if (savedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />        
        <Route path="/post/:id" element={isLoggedIn ? <PostDetail /> : <Navigate to="/login" />} />        
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;

`,`
import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

`,`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './ThemeProvider';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

`];export{e as default};
//# sourceMappingURL=App-with-Contentful-Integration-CM9z3sFV.js.map