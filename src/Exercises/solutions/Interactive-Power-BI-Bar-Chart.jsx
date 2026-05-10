const solutionCode1 = `
//AgeGroupBarChart.js 

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './styles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AgeGroupBarChart = () => {
  const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  const userData = [150, 200, 170, 120, 90, 60];
  const [filteredData, setFilteredData] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

  const getChartData = () => ({
    labels: ageGroups,
    datasets: [
      {
        label: 'Number of Users',
        data: userData,
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const handleBarClick = (ageGroup) => {
    const filteredUsers = userData.map((count, idx) =>
      ageGroups[idx] === ageGroup ? count : 0
    );
    setFilteredData({
      labels: ageGroups,
      datasets: [
        {
          label: \`Filtered Users (Age Group: \${ageGroup})\`,
          data: filteredUsers,
          backgroundColor: 'rgba(245, 158, 11, 0.6)',
          borderColor: 'rgb(245, 158, 11)',
          borderWidth: 1,
        },
      ],
    });
    setSelectedAgeGroup(ageGroup);
  };

  const resetFilter = () => {
    setFilteredData(null);
    setSelectedAgeGroup(null);
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">User Data by Age Group</h2>
      <div className="chart-wrapper">
        <Bar 
          data={filteredData || getChartData()} 
          options={{
            ...options,
            onClick: (_, element) => {
              if (element.length > 0) {
                const index = element[0].index;
                handleBarClick(ageGroups[index]);
              }
            },
          }}
        />
      </div>
      <div className="chart-footer">
        <p className="filter-info">
          {selectedAgeGroup 
            ? \`Showing data for age group: \${selectedAgeGroup}\`
            : 'Click on a bar to filter by age group'}
        </p>
        {selectedAgeGroup && (
          <button className="reset-button" onClick={resetFilter}>
            Reset Filter
          </button>
        )}
      </div>
    </div>
  );
};

export default AgeGroupBarChart;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;

