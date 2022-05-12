import React, { useContext, useState, useEffect } from 'react';
import { Platform, Alert, TouchableOpacity } from 'react-native';
import firebase from '../../services/Firebase';
import { format, isBefore } from 'date-fns';

import { AuthContext } from '../../contexts/Auth';
import { useNavigation } from '@react-navigation/native';
import MyListItems from '../../components/MyListItems';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/DatePicker';

import { Background, Container, Titulo, Saldo, Area, SubTitulo, BtnRegistrar, BtnSair, BtnTxt, List } from './styles';

export default function Home() {
  const navigation = useNavigation();

  const [itens, setItens] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user, signOut } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(()=>{
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('itens')
      .child(uid).orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
      .limitToLast(10).on('value', (snapshot) => {
        setItens([]);

        snapshot.forEach((childItem) => {
          let fields = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            historico: childItem.val().historico,
            valor: childItem.val().valor,
            date: childItem.val().date
          };
          // setItens( oldArray => [...oldArray, fields].reverse() );
          setItens(oldArray => [...oldArray, fields]);
        });
      })
    }
    loadList();
  }, [newDate]);

  function handleDelete(data) {

    // obtendo a data do item
    const [ddItem, mmItem, yyItem] = data.date.split('/');
    const dtItem = new Date(`${yyItem}/${mmItem}/${ddItem}`);

    console.log(dtItem);

    // obtendo a data atual (hoje)
    const formatDtHoje = format(new Date(), 'dd/MM/yyyy');
    const [ddHoje, mmHoje, yyHoje] = formatDtHoje.split('/');
    const dtHoje = new Date(`${yyHoje}/${mmHoje}/${ddHoje}`);

    console.log(dtHoje);

    if (isBefore(dtItem, dtHoje)) {
      // se Data do registro já passou
      alert('Não é possível excluir registros anteriores a data de hoje.');
      return;
    }

    Alert.alert(
      'Atençao!',
      `Deseja excluir a ${data.tipo} de R$ ${data.valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} `, 
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('itens')
    .child(uid).child(data.key).remove()
    .then(async ()=>{
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);
      await firebase.database().ref('users')
      .child(uid).child('saldo').set(saldoAtual)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function handleShowDtPicker() {
    setShow(true);
  }

  function handleCloseDtPicker() {
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);
  }

  return (
    <Background>
        <Container>
          <Titulo>{ user && user.nome }</Titulo>
          <Saldo>Saldo: R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
          <Area>
            <SubTitulo>Ultimas movimentações do dia</SubTitulo>
            <TouchableOpacity onPress={handleShowDtPicker}>
              <Icon name='event' color='#FFF' size={30} />
            </TouchableOpacity>
          </Area>
        </Container>

        <List
          showsVerticalScrollIndicator={false}
          data={itens}
          keyExtractor={ item => item.key }
          renderItem={ ({ item }) => ( <MyListItems data={item} deleteItem={handleDelete} /> )}
        />              

        <BtnRegistrar onPress={() => navigation.navigate('Registrar')}>
          <BtnTxt>Lançar Receita/Despesa</BtnTxt>
        </BtnRegistrar>

        <BtnSair onPress={()=>signOut()}>
          <BtnTxt>Sair (LogOut)</BtnTxt>        
        </BtnSair>

        { show && (
          <DatePicker
            onClose={handleCloseDtPicker}
            date={newDate}
            onChange={onChange}
          />

        )}

    </Background>
  );
}
