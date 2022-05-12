import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { HeaderView, BtnMenu } from './styles';

export default function Header() {
  const navigation = useNavigation();

 return (
   <HeaderView>
     <BtnMenu onPress={ () => navigation.toggleDrawer() }>
       <Icon name='menu' color='#FFF' size='30'/>
     </BtnMenu>
   </HeaderView>
  );
}