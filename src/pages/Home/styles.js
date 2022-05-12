import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styled from 'styled-components';

export const Background = styled(View)`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled(Text)`
  margin-top: 20px;
  font-size: 19px;
  color: #FFF;
  font-style: italic;
`;

export const Saldo = styled(Text)`
  margin-top: 10px;
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
`;

export const Area = styled(View)`
  flex-direction: row;
  margin-right: 15px;
`;

export const SubTitulo = styled(Text)`
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px; 
  color: #00B94A;
`;

export const BtnRegistrar=styled(TouchableOpacity)`
  width: 95%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: #6A8E6E;
  border-radius: 25px;
`;

export const BtnSair = styled(TouchableOpacity)`
  width: 95%;
  height: 50px; 
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: #904141;
  border-radius: 25px;
`;

export const BtnTxt = styled(Text)`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;

export const List = styled(FlatList).attrs({
  marginHorizontal: 15
})`
  padding-top: 5px;
  background-color: #333;
  margin-left: 10px;
  margin-right: 10px;
`;
