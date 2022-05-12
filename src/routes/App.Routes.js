import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator    
      drawerContent={(props) => <CustomDrawer {...props}/>} 
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#24242A',
          width: '99%',
          marginTop: 30,
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25
        },
        drawerLabelStyle:{
          fontWeight: 'bold'
        },
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#00B94A',
        drawerInactiveTintColor: '#DDD',
        drawerInactiveBackgroundColor: '#000',
        drawerItemStyle: {
          marginVertical: 5
        },
      }}    
    >
      <AppDrawer.Screen 
        name='Perfil' 
        component={Profile} 
      />
      <AppDrawer.Screen 
        name='Lançamentos' 
        component={Home} 
      />
      <AppDrawer.Screen 
        name='Registrar' 
        component={New} 
      />
    </AppDrawer.Navigator>
  )
}

