import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Background = styled(View)`
  flex: 1;
  background-color: #24242A;
`;

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  margin-bottom: 15px;
`;

export const AreaInput = styled(View)`
  flex-direction: row;
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: '#6A8E6E'
})`
  background-color: #000;
  width: 90%;
  font-size: 17px;
  color: #FFF;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const BtnSubmit=styled(TouchableOpacity)`
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: #6A8E6E;
  border-radius: 7px;
  margin-top: 10px;
`;

export const BtnSubmitText=styled(Text)`
  font-size: 20px;
  color: #3F3F3F;
`;

export const Link=styled(TouchableOpacity)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText=styled(Text)`
  color: #FFF;
`;
