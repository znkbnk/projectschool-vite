const solutionCode1 = `
//App.js 

import React, { useState } from 'react';
import { View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import styles from './styles/styles'; 

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID',
  });

  const [user, setUser] = useState(null);

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetchUserInfo(authentication);
    }
  }, [response]);

  const fetchUserInfo = async (auth) => {
    try {
      const userInfoResponse = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: { Authorization: \`Bearer \${auth.accessToken}\` },
        }
      );
      const userInfo = await userInfoResponse.json();
      setUser(userInfo);
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <ProfileScreen user={user} onLogout={handleLogout} />
      ) : (
        <HomeScreen onSignIn={promptAsync} request={request} />
      )}
    </View>
  );
}

`;

const solutionCode2 = `
//components/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles'; // Import styles

const HomeScreen = ({ onSignIn, request }) => (
  <View style={styles.homeContainer}>
    <Text style={styles.title}>Welcome to the App</Text>
    <Button
      title="Sign in with Google"
      disabled={!request}
      onPress={() => onSignIn()}
    />
  </View>
);

export default HomeScreen;

`;

const solutionCode3 = `
//components/ProfileScreen.js

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from '../styles/styles'; // Import styles

const ProfileScreen = ({ user, onLogout }) => (
  <View style={styles.profileContainer}>
    <Image style={styles.profileImage} source={{ uri: user.picture }} />
    <Text style={styles.profileName}>{user.name}</Text>
    <Text style={styles.profileEmail}>{user.email}</Text>
    <Button title="Logout" onPress={onLogout} />
  </View>
);

export default ProfileScreen;

`;

const solutionCode4 = `
///styles/styles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 18,
    color: 'gray',
  },
});

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4];

