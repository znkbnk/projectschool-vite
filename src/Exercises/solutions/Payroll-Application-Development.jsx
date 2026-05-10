const solutionCode1 = `
//backend/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

`;

const solutionCode2 = `
//backend/models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
  taxRate: { type: Number, default: 0.2 },
  paymentMethod: { type: String, enum: ['check'], default: 'check' },
});

module.exports = mongoose.model('Employee', EmployeeSchema);

`;

const solutionCode3 = `
//backend/models/Payment.js

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  amount: Number,
  taxDeducted: Number,
  netAmount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);

`;

const solutionCode4 = `
//backend/controllers/employeeController.js

const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.addEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.json(newEmployee);
};

`;

const solutionCode5 = `
//backend/controllers/paymentController.js

const Payment = require('../models/Payment');
const Employee = require('../models/Employee');

exports.processPayment = async (req, res) => {
  const { employeeId, amount } = req.body;
  const employee = await Employee.findById(employeeId);
  const taxDeducted = amount * employee.taxRate;
  const netAmount = amount - taxDeducted;

  const newPayment = new Payment({
    employeeId,
    amount,
    taxDeducted,
    netAmount,
  });
  
  await newPayment.save();
  res.json(newPayment);
};

`;

const solutionCode6 = `
//backend/routes/employeeRoutes.js

const express = require('express');
const { getEmployees, addEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.get('/employees', getEmployees);
router.post('/employees', addEmployee);

module.exports = router;

`;

const solutionCode7 = `
//backend/routes/paymentRoutes.js

const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/payments', processPayment);

module.exports = router;

`;

const solutionCode8 = `
//backend/server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/employeeRoutes'));
app.use('/api', require('./routes/paymentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`;

const solutionCode9 = `
// src/services/api.js

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Fetch all employees
export const fetchEmployees = () => API.get('/employees');

// Add a new employee
export const addEmployee = (employeeData) => API.post('/employees', employeeData);

// Process payroll for an employee
export const processPayment = (paymentData) => API.post('/payments', paymentData);


`;

const solutionCode10 = `
// src/components/EmployeeList.js

import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../services/api';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const { data } = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };
    getEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - Salary: \${employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;

`;

const solutionCode11 = `
// src/components/PayrollForm.js

import React, { useState } from 'react';
import { processPayment } from '../services/api';

function PayrollForm() {
  const [employeeId, setEmployeeId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await processPayment({ employeeId, amount });
      setStatus("Payment processed successfully.");
    } catch (error) {
      setStatus("Error processing payment.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Process Payroll</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default PayrollForm;

`;

const solutionCode12 = `
// src/pages/Dashboard.js

import React from 'react';
import EmployeeList from '../components/EmployeeList';

function Dashboard() {
  return (
    <div>
      <h1>Payroll Dashboard</h1>
      <EmployeeList />
    </div>
  );
}

export default Dashboard;

`;

const solutionCode13 = `
// src/pages/EmployeeDetails.js

import React from 'react';

function EmployeeDetails() {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Here you can add specific employee details like past payments and tax information.</p>
    </div>
  );
}

export default EmployeeDetails;

`;

    const solutionCode14 = `
    // src/App.js

    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Dashboard from './pages/Dashboard';
    import EmployeeDetails from './pages/EmployeeDetails';
    import PayrollForm from './components/PayrollForm';
    
    function App() {
      return (
        <Router>
          <div>
            <h1>Payroll Application</h1>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employee-details" element={<EmployeeDetails />} />
              <Route path="/process-payroll" element={<PayrollForm />} />
            </Routes>
          </div>
        </Router>
      );
    }
    
    export default App;
    
`;

    const solutionCode15 = `
    // src/index.js

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4, solutionCode5, solutionCode6, solutionCode7, solutionCode8, solutionCode9, solutionCode10, solutionCode11, solutionCode12, solutionCode13, solutionCode14, solutionCode15];

