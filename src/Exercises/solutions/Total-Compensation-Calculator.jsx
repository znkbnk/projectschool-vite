const solutionCode1 = `
// App.js

import React, { useState } from 'react';
import CompensationForm from './CompensationForm';
import TotalCompensationResult from './TotalCompensationResult';
import './styles.css'

const calculateTotalCompensation = (data) => {
  const {
    baseSalary,
    bonusRate,
    foodAllowance,
    benefits,
    rsuGrants,
    espp,
  } = data;

  const baseSalaryNumber = Number(baseSalary);
  const bonusRateNumber = Number(bonusRate);
  const foodAllowanceNumber = Number(foodAllowance);
  const benefitsNumber = Number(benefits);
  const rsuGrantsNumber = Number(rsuGrants);
  const esppNumber = Number(espp);

  const annualBaseSalary = baseSalaryNumber * 12;
  const annualBonus = annualBaseSalary * (bonusRateNumber / 100);
  const totalSalary = annualBaseSalary + annualBonus + foodAllowanceNumber + benefitsNumber;
  const annualESPP = esppNumber * 12;

  
  const breakdown = [
    annualBaseSalary + annualBonus,
    annualBonus,
    rsuGrantsNumber,
    annualESPP,
  ];

  return {
    totalCompensation: totalSalary + rsuGrantsNumber + annualESPP,
    breakdown,
  };
};

const App = () => {
  const [totalCompensation, setTotalCompensation] = useState(null);
  const [breakdown, setBreakdown] = useState([]);
  const [compensationData, setCompensationData] = useState(null);

  const handleFormSubmit = (data) => {
    const compensation = calculateTotalCompensation(data);
    setTotalCompensation(compensation.totalCompensation);
    setBreakdown(compensation.breakdown);
    setCompensationData(data); 
  };

  return (
    <div>
      <h1>Total Compensation Calculator</h1>
      <CompensationForm onSubmit={handleFormSubmit} />
      {totalCompensation !== null && compensationData && (
        <TotalCompensationResult
          totalCompensation={totalCompensation}
          breakdown={breakdown}
          compensationData={compensationData}
        />
      )}
    </div>
  );
};

export default App;

`;

const solutionCode2 = `
// CompensationForm.js

import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const CompensationForm = ({ onSubmit }) => {
  const [baseSalary, setBaseSalary] = useState('');
  const [bonusRate, setBonusRate] = useState('');
  const [foodAllowance, setFoodAllowance] = useState('');
  const [benefits, setBenefits] = useState('');
  const [rsuGrants, setRsuGrants] = useState('');
  const [espp, setEspp] = useState('');
  const [salaryRaise, setSalaryRaise] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (
      !baseSalary ||
      !bonusRate ||
      !foodAllowance ||
      !benefits ||
      !rsuGrants ||
      !espp ||
      !salaryRaise ||
      !startDate ||
      !endDate
    ) {
      setError('All fields must be filled.');
      return false;
    }

    if (
      baseSalary <= 0 ||
      bonusRate < 0 ||
      foodAllowance < 0 ||
      benefits < 0 ||
      rsuGrants < 0 ||
      espp < 0 ||
      salaryRaise < 0
    ) {
      setError('Please enter valid positive numbers.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const compensationData = {
        baseSalary,
        bonusRate,
        foodAllowance,
        benefits,
        rsuGrants,
        espp,
        salaryRaise,
        startDate,
        endDate,
      };
      onSubmit(compensationData); 
    }
  };

  const renderInfoTooltip = (text) => (
    <div className="info-tooltip">
      <FaInfoCircle />
      <span className="tooltip-text">{text}</span>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}

      <label>
        Base Salary:
        <input
          type="number"
          value={baseSalary}
          onChange={(e) => setBaseSalary(e.target.value)}
        />
        {renderInfoTooltip('Enter your basic monthly salary before bonuses or other compensations.')}
      </label>

      <label>
        Bonus Rate (%):
        <input
          type="number"
          value={bonusRate}
          onChange={(e) => setBonusRate(e.target.value)}
        />
        {renderInfoTooltip('Bonus as a percentage of your base salary, typically paid yearly.')}
      </label>

      <label>
        Food Allowance:
        <input
          type="number"
          value={foodAllowance}
          onChange={(e) => setFoodAllowance(e.target.value)}
        />
        {renderInfoTooltip('Allowance for food, often provided by employers as part of benefits.')}
      </label>

      <label>
        Annual Benefits:
        <input
          type="number"
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
        />
        {renderInfoTooltip('Additional benefits like health insurance, retirement plans, etc.')}
      </label>

      <label>
        RSU Grants:
        <input
          type="number"
          value={rsuGrants}
          onChange={(e) => setRsuGrants(e.target.value)}
        />
        {renderInfoTooltip('Restricted Stock Units (RSUs) given by your employer.')}
      </label>

      <label>
        ESPP Contribution:
        <input
          type="number"
          value={espp}
          onChange={(e) => setEspp(e.target.value)}
        />
        {renderInfoTooltip('Employee Stock Purchase Plan (ESPP) contribution.')}
      </label>

      <label>
        Expected Salary Raise (%):
        <input
          type="number"
          value={salaryRaise}
          onChange={(e) => setSalaryRaise(e.target.value)}
        />
        {renderInfoTooltip('Expected annual salary increase, usually as a percentage.')}
      </label>

      <label>
        Start Date:
        <input
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>

      <label>
        End Date:
        <input
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default CompensationForm;

`;
const solutionCode3 = `
// TotalCompensationResult.js

import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalCompensationResult = ({ totalCompensation, breakdown, compensationData }) => {
  const {
    baseSalary,
    bonusRate,
    foodAllowance,
    benefits,
    rsuGrants,
    espp,
    salaryRaise,
  } = compensationData;

  const baseSalaryNumber = Number(baseSalary);
  const bonusRateNumber = Number(bonusRate);
  const foodAllowanceNumber = Number(foodAllowance);
  const benefitsNumber = Number(benefits);
  const rsuGrantsNumber = Number(rsuGrants);
  const esppNumber = Number(espp);
  const salaryRaiseNumber = Number(salaryRaise);

  const chartData = {
    labels: ['Salary', 'Bonus', 'RSUs', 'ESPP'],
    datasets: [
      {
        data: breakdown,
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return \`\${label}: \${value.toFixed(2)}\`;
          },
        },
      },
    },
    maintainAspectRatio: false, //control the chart size
  };

  const generateDateRange = () => {
    const start = new Date(compensationData.startDate);
    const end = new Date(compensationData.endDate);
    const months = [];
    for (let m = start; m <= end; m.setMonth(m.getMonth() + 1)) {
      months.push(new Date(m));
    }
    return months;
  };

  const dataTable = generateDateRange().map((date, index) => {
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const total =
      baseSalaryNumber * 12 +
      (baseSalaryNumber * 12 * bonusRateNumber) / 100 +
      foodAllowanceNumber +
      benefitsNumber +
      rsuGrantsNumber +
      esppNumber;
    return {
      date: \`\${month}-\${year}\`,
      baseSalary: baseSalaryNumber,
      salaryAfterRaises: baseSalaryNumber * (1 + salaryRaiseNumber / 100),
      bonus: (baseSalaryNumber * 12 * bonusRateNumber) / 100,
      benefits: benefitsNumber,
      food: foodAllowanceNumber,
      rsuGrant: rsuGrantsNumber,
      espp: esppNumber,
      total: total,
    };
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const totalPages = Math.ceil(dataTable.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentData = dataTable.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Total Compensation</h2>
      <p>\${totalCompensation.toFixed(2)}</p>
      <div style={{ position: 'relative', width: '300px', height: '300px', margin: 'auto' }}>
        <Pie data={chartData} options={chartOptions} />
      </div>

      <h3>Additional Information</h3>
      <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '80%' }}>
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center', backgroundColor: '#f4f4f4' }}>Compensation Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Base Salary:</strong></td>
            <td>\${baseSalaryNumber.toFixed(2)} per month</td>
          </tr>
          <tr>
            <td><strong>Bonus Rate:</strong></td>
            <td>{bonusRateNumber}%</td>
          </tr>
          <tr>
            <td><strong>Expected Salary Raise:</strong></td>
            <td>{salaryRaiseNumber}% per year</td>
          </tr>
          <tr>
            <td><strong>Food Allowance:</strong></td>
            <td>\${foodAllowanceNumber.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Benefits:</strong></td>
            <td>\${benefitsNumber.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <h3>Compensation Breakdown</h3>
      <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '90%' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Base Salary</th>
            <th>Salary After Raises</th>
            <th>Bonus</th>
            <th>Benefits</th>
            <th>Food</th>
            <th>RSU: Initial Grant</th>
            <th>ESPP</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>\${item.baseSalary.toFixed(2)}</td>
              <td>\${item.salaryAfterRaises.toFixed(2)}</td>
              <td>\${item.bonus.toFixed(2)}</td>
              <td>\${item.benefits.toFixed(2)}</td>
              <td>\${item.food.toFixed(2)}</td>
              <td>\${item.rsuGrant.toFixed(2)}</td>
              <td>\${item.espp.toFixed(2)}</td>
              <td>\${item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*pagination */}
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{\`Page \${currentPage} of \${totalPages}\`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TotalCompensationResult;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  
];
