import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/Auth';
import { Background, Container, Logo, AreaInput, Input, BtnSubmit, BtnTxt } from '../SigIn/styles';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome);
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
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType='numeric'
          value={password}
          onChangeText={ (text) => setPassword(text) }
          secureTextEntry={true}
          />
        </AreaInput>

        <BtnSubmit onPress={handleSignUp}>
          {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF" />
              ) : (
                <BtnTxt>Cadastrar</BtnTxt>
              )
          }
        </BtnSubmit>

      </Container>
   </Background>
  );
}

