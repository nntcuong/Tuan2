// AuthScreen.js

import React from 'react';
import { View } from 'react-native';
import LoginComponent from './LoginScreens';
import RegisterComponent from './RegisterComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AuthScreen = () => {
  const handleLogin = (email, password) => {
    // handle login logic here
  };

  const handleRegister = (email, password, username) => {
    // handle register logic here
  };
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <LoginComponent handleLogin={handleLogin} />
    <RegisterComponent handleRegister={handleRegister} />
    </View>
  );
};

export default AuthScreen;
