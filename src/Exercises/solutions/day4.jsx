const solutionCode1 = `
// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

`;

const solutionCode2 = `
// pages/Services.js

import "../styles/services.css";

const ServicesPage = () => {
  const lessons = [
    { name: "Piano Lessons", description: "Learn to play the piano from basics to advanced.", price: "$50/hr" },
    { name: "Violin Lessons", description: "Master the art of violin with expert guidance.", price: "$45/hr" },
    { name: "Music Theory", description: "Understand the language of music with engaging lessons.", price: "$40/hr" },
  ];

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore our lessons and start your musical journey today!</p>
      </header>
      <div className="lessons-grid">
        {lessons.map((lesson, index) => (
          <div key={index} className="lesson-card">
            <div className="lesson-icon">🎵</div>
            <h2>{lesson.name}</h2>
            <p>{lesson.description}</p>
            <div className="price">{lesson.price}</div>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
`;
const solutionCode3 = `
// pages/Blog.js

import "../styles/blog.css";

const BlogPage = () => {
  const blogs = [
    { title: "10 Tips for Piano Practice", date: "Jan 5, 2025", description: "Improve your piano practice with these tips.", thumbnail: "https://images.pexels.com/photos/860662/pexels-photo-860662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Understanding Music Theory", date: "Jan 10, 2025", description: "Dive deep into the fundamentals of music theory.", thumbnail: "https://images.pexels.com/photos/210804/pexels-photo-210804.jpeg" },
    { title: "Choosing Your First Violin", date: "Jan 15, 2025", description: "Find the perfect violin for your musical journey.", thumbnail: "https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg" },
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Our Blog</h1>
        <p>Discover tips, tricks, and stories from our music experts.</p>
      </header>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.thumbnail} alt={blog.title} className="blog-thumbnail" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <span className="date">{blog.date}</span>
              <p>{blog.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
 
];
