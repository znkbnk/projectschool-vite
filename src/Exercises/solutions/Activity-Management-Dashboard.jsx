const solutionCode1 = `
//src/App.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import ActivityDetails from './components/ActivityDetails';
import ActivityRecords from './components/ActivityRecords';
import UserClaimRecords from './components/UserClaimRecords';
import ActivityRules from './components/ActivityRules';
import './styles.css'


import { activityDetails, activityRecords, userClaimRecords, activityRules } from './data';

const App = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Activity Page
      </Typography>
      
      <ActivityDetails details={activityDetails} />
      <ActivityRecords records={activityRecords} />
      <UserClaimRecords claims={userClaimRecords} />
      <ActivityRules rules={activityRules} />
    </Container>
  );
};

export default App;

`;

const solutionCode2 = `
// src/components/ActivityDetails.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ActivityDetails = ({ details }) => {
  return (
    <Card sx={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h5">{details.name}</Typography>
        <Typography variant="body1">{details.description}</Typography>
        <Typography variant="body2" color="textSecondary">
          Start Date: {details.startDate}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          End Date: {details.endDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;

`;
const solutionCode3 = `
// src/components/ActivityRecords.js

import React from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

const ActivityRecords = ({ records }) => {
  return (
    <Card sx={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">Activity Records</Typography>
        <List>
          {records.map((record) => (
            <ListItem key={record.id}>
              <Typography>{record.date} - {record.description}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityRecords;

`;
const solutionCode4 = `
// src/components/ActivityRules.js

import React from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

const ActivityRules = ({ rules }) => {
  return (
    <Card sx={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">Activity Rules</Typography>
        <List>
          {rules.map((rule, index) => (
            <ListItem key={index}>
              <Typography>{rule}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityRules;

`;
const solutionCode5 = `
// src/components/UserClaimRecords.js

import React from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

const UserClaimRecords = ({ claims }) => {
  return (
    <Card sx={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">User Claim Records</Typography>
        <List>
          {claims.map((claim) => (
            <ListItem key={claim.id}>
              <Typography>{claim.date} - {claim.claim}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserClaimRecords;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4, solutionCode5];

