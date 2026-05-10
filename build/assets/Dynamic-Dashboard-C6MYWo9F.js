var e=[`
//App.js 

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Users from './pages/Users';
import Schedule from './pages/Schedule';
import Info from './pages/Info';
import './styles.css'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className={\`app \${menuOpen ? 'menu-open' : ''}\`}>
        <Header toggleMenu={toggleMenu} />
        <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} />
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

`,`
//components/DayTabs.js

import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const DayTabs = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <div className="sub">
      {days.map(day => (
        <button
          key={day}
          className={day === activeDay ? 'current' : ''}
          onClick={() => setActiveDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DayTabs;

`,`
//components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleMenu }) => (
  <header>
    <button onClick={toggleMenu} className="menu-toggle">
      <FaBars />
    </button>
    <Link to="https://www.projectschool.dev/">ProjectSchool</Link>
  </header>
);

export default Header;
`,`
//components/LoadingSpinner.js 

import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <Oval color="#3498db" height={80} width={80} />
  </div>
);

export default LoadingSpinner;
`,`
//components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({ menuOpen, closeMenu }) => (
  <motion.aside
    initial={{ x: -250 }}
    animate={{ x: menuOpen ? 0 : -250 }}
    transition={{ duration: 0.5 }}
    className={menuOpen ? 'open' : ''}
  >
    <NavLink exact to="/" ClassName="current" onClick={closeMenu}>Home</NavLink>
    <NavLink to="/users" ClassName="current" onClick={closeMenu}>Users</NavLink>
    <NavLink to="/schedule" ClassName="current" onClick={closeMenu}>Schedule</NavLink>
    <NavLink to="/info" ClassName="current" onClick={closeMenu}>Info</NavLink>
  </motion.aside>
);

export default Sidebar;

`,`
//components/Table.js

import React from 'react';
import { motion } from 'framer-motion';

const generateData = (rows, cols) => {
  return Array.from({ length: rows }, (_, rowIndex) => 
    Array.from({ length: cols }, (_, colIndex) => \`Data \${rowIndex + 1}-\${colIndex + 1}\`)
  );
};

const Table = () => {
  const data = generateData(5, 5); 
  return (
    <motion.table  className="sp-table sp-table-striped sp-table-hover"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
      <thead>
        <tr>
          {Array(5).fill('Heading').map((heading, index) => (
            <th key={index}>{heading} {index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </motion.table>
  );
};

export default Table;

`,`
//pages/Home.js

import React from 'react';
import DayTabs from '../components/DayTabs';
import Table from '../components/Table';

const Home = () => (
  <div id="main">
    <DayTabs />
    <Table />
  </div>
);

export default Home;

`,`
//pages/Info.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

const infoData = {
  about: 'This is a sample dashboard application built with React.',
  version: '1.0.0',
  author: 'You',
  features: [
    'Responsive design',
    'Modern UI',
    'Interactive components',
    'Animated transitions'
  ]
};

const Info = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setInfo(infoData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="info-container"
      id='main'
    >
      <h2>Application Info</h2>
      <motion.div 
        className="info-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p><strong>About:</strong> {info.about}</p>
        <p><strong>Version:</strong> {info.version}</p>
        <p><strong>Author:</strong> {info.author}</p>
      </motion.div>
      <motion.div
        className="features-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3>Features</h3>
        <ul>
          {info.features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Info;
`,`
//pages/Schedule.js 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

const scheduleData = [
  { day: 'Monday', events: ['Meeting with team', 'Project deadline'] },
  { day: 'Tuesday', events: ['Client call', 'Review session'] },
  { day: 'Wednesday', events: ['Workshop', 'Lunch with mentor'] },
  { day: 'Thursday', events: ['Development sprint', 'Team building'] },
  { day: 'Friday', events: ['Weekly review', 'Team outing'] },
];

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSchedule(scheduleData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id='main'
    >
      <h2>Schedule</h2>
      <div className="schedule-container">
        {schedule.map((item, index) => (
          <motion.div 
            key={index} 
            className="schedule-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <h3>{item.day}</h3>
            <ul>
              {item.events.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Schedule;
`,`
//pages/Users.js 

import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const userData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers(userData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div id='main'>
      <h2>Users Page</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Users;

`];export{e as default};
//# sourceMappingURL=Dynamic-Dashboard-C6MYWo9F.js.map