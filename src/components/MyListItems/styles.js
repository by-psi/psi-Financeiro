import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  background-color: #000;
  box-shadow: 2px 2px rgba(0,0,0,0.40);
`;

export const Header = styled(View)`
  flex-direction: row;
`; 

export const IconArea = styled(View)`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#C62' : '#049301'};
  padding-bottom: 3px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 7px;
`; 

export const Tipo = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`; 

export const Data = styled(Text)`
  color: #FFF;
  font-size: 16px;
  font-style: italic;
  padding-left: 8px;
`; 

export const Historico = styled(Text)`
  font-size: 18px;
  color: #6A8E6E;
  padding-bottom: 3px;
  padding-top: 3px;
  padding-right: 8px;
  border-radius: 7px;
`; 

export const Valor = styled(Text)`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
`; 
