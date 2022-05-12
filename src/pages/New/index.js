import React, { useState, useContext } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/Firebase';
import { AuthContext } from '../../contexts/Auth';

import { 
  Background, Container, Titulo, Input, BtnRegistrar, BtnHome, BtnSair, BtnTxt
} from './styles'

import Picker from '../../components/Picker';

export default function New() {
  const navigation = useNavigation();
  
  const [historico, setHistorico] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');

  const {user, signOut} = useContext(AuthContext);

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null || historico === '') {
      alert('Preencha todos os campos');
      return;
    }
    Alert.alert(
      'Confirma lançamento?',
      `Tipo (${tipo}): ${historico} R$ ${parseFloat(valor).toFixed(2)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    let uid = user.uid;

    let key = await firebase.database().ref('itens').child(uid).push().key;
    await firebase.database().ref('itens').child(uid).child(key).set({
      tipo: tipo,
      historico: historico,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yyyy')
    })

    // atualizar Saldo

    let user_logged = firebase.database().ref('users').child(uid);
    await user_logged.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);
      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);
      user_logged.child('saldo').set(saldo);
    });
    Keyboard.dismiss();
    setHistorico('');
    setValor('');
    setTipo('despesa');
    navigation.navigate('Lançamentos');
  }    

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Container>
          <Titulo>
            { user && user.nome }
          </Titulo>

          <Picker 
            onChange={setTipo} 
            tipo={tipo} 
          />

          <Input
            placeholder='Histórico'
            keyboardType='default'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={historico}
            onChangeText={(input) => setHistorico(input)}
          />

          <Input
            placeholder='Valor'
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(input) => setValor(input)}
          />

          <BtnRegistrar onPress={handleSubmit}>
            <BtnTxt>Registrar</BtnTxt>
          </BtnRegistrar>   
          <BtnHome onPress={() => navigation.navigate('Lançamentos')}>
            <BtnTxt>Lançamentos</BtnTxt>
          </BtnHome>
          <BtnSair onPress={()=>signOut()}>
            <BtnTxt>Sair (LogOut)</BtnTxt>
          </BtnSair>

        </Container>
      </Background>
    </TouchableWithoutFeedback>    
  );
}