import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/Auth';
import { Background, Container, Logo, AreaInput, Input, BtnSubmit, BtnTxt, Link, LinkTxt } from './styles';

export default function SignIn() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  
  const { signIn, loadingAuth } = useContext(AuthContext);
  
  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../../assets/Logo.png')}/>

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='numeric'
            value={password}
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <BtnSubmit onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF' />
            ) : (
              <BtnTxt>Acessar</BtnTxt>
            )
          }
        </BtnSubmit>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkTxt>Criar uma conta</LinkTxt>
        </Link>

      </Container>
    </Background>       
  );
}

