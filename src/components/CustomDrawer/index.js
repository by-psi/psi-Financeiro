import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/Auth';

import Icon from 'react-native-vector-icons/AntDesign';

// import { CustomView, CustomImage, CustomTxt } from './styles';

export default function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext);
  return(
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image 
          source={require('../../../assets/Logo.png')}
          style={{width: 85, height: 85}}
          resizeMode="contain"
        />

        <Text style={{color: '#FFF', fontSize: 18, marginTop: 5}}>
          Bem vindo!
        </Text>
        <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold', paddingBottom: 25}}>
          { user && user.nome}
        </Text>              
      </View>

      <DrawerItemList {...props} />

      <DrawerItem 
        // {...props}       
        label="Sair (LogOut)"
        onPress={() => signOut()} 
        activeTintColor='#FFF'
        activeBackgroundColor='#00B94A'
        inactiveTintColor='#DDD'
        inactiveBackgroundColor='#000'

      />

      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
        <Text style={{color: '#00B94A', fontSize: 18, fontWeight: 'bold'}}>
          psi-Financeiro v1.0
        </Text>       
        <Text style={{color: '#FFF', fontSize: 14}}>
          Suporte: (31) 98410-7540 psi-software
        </Text>
        <Text style={{color: '#FFF', fontSize: 12}}>
          <Icon name="copyright" color='#FFF' size={12}/> 2022 Direitos Reservados
        </Text>

      </View>
    </DrawerContentScrollView>
  );
}
