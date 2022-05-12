import { 
  View, Text, TouchableOpacity 
} from 'react-native';
import styled from 'styled-components';

export const Background = styled(View)`
  flex: 1;
  background-color: #131313;
`;

export const Container=styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;  
  margin-left: 15px;
  margin-bottom: 25px;
`;

export const Titulo=styled(Text)`
  font-size: 25px;
  color: #FFF;
  font-style: italic;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Saldo = styled(Text)`
  margin-top: 10px;
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
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

export const BtnSair=styled(TouchableOpacity)`
  width: 95%;
  height: 50px; 
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;  
  justify-content: center;
  align-items: center;
  background-color: #904141;
  border-radius: 25px;
`;

export const BtnTxt=styled(Text)`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;