import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
  margin-bottom: 20px;
  font-size: 19px;
  color: #fff;
  font-style: italic;
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: '#BDBDBD'
})`
  margin-left: 10px;
  margin-top: 10px;
  padding: 10px;
  height: 50px;
  background-color: #FFF;
  border-radius: 10px;
  width: 95%;
  font-size: 17px;
`;

export const BtnRegistrar = styled(TouchableOpacity)`
  width: 95%;
  height: 50px; 
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: #F38C06;
  border-radius: 7px;
`;

export const BtnHome = styled(TouchableOpacity)`
  width: 95%;
  height: 50px; 
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: #6A8E6E;
  border-radius: 7px;
`;

export const BtnSair = styled(TouchableOpacity)`
  width: 95%;
  height: 50px; 
  margin-left: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: #904141;
  border-radius: 7px;
`;

export const BtnTxt = styled(Text)`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;

