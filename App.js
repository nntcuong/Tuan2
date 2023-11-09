//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from './src/AccuracySreens/LoginScreens';
import RegisterComponent from './src/AccuracySreens/RegisterComponent';
import Home from './src/MainScreens/Home';
import Main from './src/MainScreens/Main';
import Profile from './src/MainScreens/Profile';
import { AuthProvider } from './src/AccuracySreens/AuthContext';
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <AuthProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginComponent" component={LoginComponent} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterComponent" component={RegisterComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  </AuthProvider>
    );
}


