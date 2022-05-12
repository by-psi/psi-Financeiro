import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/Firebase';
import { AuthContext } from '../../contexts/Auth';
import { 
  Background, Container, Titulo, Saldo, BtnRegistrar, BtnSair, BtnTxt 
} from './styles'

import { useNavigation } from '@react-navigation/native';

export default function Profile() {

  const navigation = useNavigation();
  const [saldo, setSaldo] = useState(0);
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });
    }
    loadList();
  }, []);

  return (
    <Background>
        <Container>
          <Titulo>{ user && user.nome }</Titulo>
          <BtnRegistrar onPress={() => navigation.navigate('Lançamentos')}>
            <BtnTxt>Lançamentos</BtnTxt>
          </BtnRegistrar>
          <BtnRegistrar onPress={() => navigation.navigate('Registrar')}>
            <BtnTxt>Lançar Receita/Despesa</BtnTxt>
          </BtnRegistrar>
          <BtnSair onPress={() => signOut()}>
            <BtnTxt>Sair (Logout)</BtnTxt>
          </BtnSair>
        </Container>
    </Background>
  );
}
