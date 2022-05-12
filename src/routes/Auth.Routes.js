import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SigIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {

  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{
          headerStyle:{
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00B94A'
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  )
}
