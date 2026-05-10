const solutionCode1 = `
//googleApiService.js

//Replace <YOUR_CLIENT_ID> and <YOUR_API_KEY> with the credentials from the Google API Console.
//Ensure the redirect URI matches your application's domain.

import { gapi } from 'gapi-script';

const CLIENT_ID = '<YOUR_CLIENT_ID>';
const API_KEY = '<YOUR_API_KEY>';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

export const initClient = (callback) => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
    }).then(() => {
      callback();
    });
  });
};

export const signIn = () => {
  return gapi.auth2.getAuthInstance().signIn();
};

export const signOut = () => {
  return gapi.auth2.getAuthInstance().signOut();
};

export const createEvent = (eventDetails) => {
  return gapi.client.calendar.events.insert({
    calendarId: 'primary',
    resource: eventDetails,
  });
};

`;

const solutionCode2 = `
//CalendarIntegration.js

import React, { useEffect, useState } from 'react';
import { initClient, signIn, signOut, createEvent } from './googleApiService';

const CalendarIntegration = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    initClient(() => {
      const authInstance = window.gapi.auth2.getAuthInstance();
      setIsSignedIn(authInstance.isSignedIn.get());
      authInstance.isSignedIn.listen(setIsSignedIn);
    });
  }, []);

  const handleSignIn = () => {
    signIn().then(() => setIsSignedIn(true));
  };

  const handleSignOut = () => {
    signOut().then(() => setIsSignedIn(false));
  };

  const handleCreateEvent = () => {
    const eventDetails = {
      summary: 'New Event',
      description: 'This is a test event created via Google Calendar API.',
      start: {
        dateTime: '2024-11-20T10:00:00-07:00',
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: '2024-11-20T11:00:00-07:00',
        timeZone: 'America/Los_Angeles',
      },
    };

    createEvent(eventDetails)
      .then((response) => {
        alert('Event created: ' + response.result.htmlLink);
      })
      .catch((error) => {
        console.error('Error creating event', error);
      });
  };

  return (
    <div className="calendar-integration">
      <h2>Google Calendar Integration</h2>
      {isSignedIn ? (
        <>
          <button onClick={handleCreateEvent}>Create Event</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
};

export default CalendarIntegration;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];

