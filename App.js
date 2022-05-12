import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';

console.disableYellowBox=true;

import AuthProvider from './src/contexts/Auth';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#FFF' barStyle='dark-content'  /> 
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
