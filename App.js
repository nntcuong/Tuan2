// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/AccuracySreens/AuthScreen';
//import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>

          <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


