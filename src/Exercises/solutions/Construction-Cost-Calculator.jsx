const solutionCode1 = `
/App.js

import React from 'react';
import ConstructionCalculator from './components/ConstructionCalculator';
import './styles.css'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>BuildCost Pro</h1>
      </header>
      <main>
        <ConstructionCalculator />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 BuildCost Pro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
`;

const solutionCode2 = `
import React, { useState } from 'react';
import InputForm from './InputForm';
import CostBreakdown from './CostBreakdown';

const ConstructionCalculator = () => {
  const [costData, setCostData] = useState(null);

  const handleFormSubmit = (values) => {
    const { plotSize, floors, constructionType, material, location } = values;

   
    const baseCostPerSqFt = 100; 
    const locationMultiplier = location === 'urban' ? 1.2 : 1; 
    const materialMultiplier = material === 'wood' ? 1.1 : 1;
    const constructionMultiplier = constructionType === 'luxury' ? 1.5 : 1;

    const totalSqFt = plotSize * floors;
    const costPerSqFt =
      baseCostPerSqFt * locationMultiplier * materialMultiplier * constructionMultiplier;

    const estimatedTotalCost = (totalSqFt * costPerSqFt).toFixed(2);


    const breakdown = {
      Materials: estimatedTotalCost * 0.4,
      Labor: estimatedTotalCost * 0.3,
      Permits: estimatedTotalCost * 0.1,
      Miscellaneous: estimatedTotalCost * 0.2,
    };

    setCostData({ totalCost: estimatedTotalCost, breakdown });
  };

  return (
    <div>
      <h1>House Construction Cost Calculator</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {costData && <CostBreakdown totalCost={costData.totalCost} breakdown={costData.breakdown} />}
    </div>
  );
};

export default ConstructionCalculator;

`;
const solutionCode3 = `
import React from 'react';

const CostBreakdown = ({ totalCost, breakdown }) => {
  return (
    <div>
      <h2>Estimated Total Cost: \${totalCost}</h2>
      <h3>Breakdown:</h3>
      <ul>
        {Object.keys(breakdown).map((key, index) => (
          <li key={index}>
            {key}: \${breakdown[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CostBreakdown;

`;
const solutionCode4 = `
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const InputForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      plotSize: '',
      floors: 1,
      constructionType: 'standard',
      material: 'brick',
      location: '',
    },
    validationSchema: Yup.object({
      plotSize: Yup.number().required('Plot size is required'),
      floors: Yup.number().min(1).required('Number of floors is required'),
      location: Yup.string().required('Location is required'),
    }),
    onSubmit: values => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Plot Size (in sq ft):</label>
        <input
          type="number"
          name="plotSize"
          value={formik.values.plotSize}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Number of Floors:</label>
        <input
          type="number"
          name="floors"
          value={formik.values.floors}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Construction Type:</label>
        <select
          name="constructionType"
          value={formik.values.constructionType}
          onChange={formik.handleChange}
        >
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>
      <div>
        <label>Material:</label>
        <select
          name="material"
          value={formik.values.material}
          onChange={formik.handleChange}
        >
          <option value="brick">Brick</option>
          <option value="wood">Wood</option>
        </select>
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
        />
      </div>
      <button type="submit">Calculate Cost</button>
    </form>
  );
};

export default InputForm;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2,solutionCode3,solutionCode4];

