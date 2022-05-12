import { View } from 'react-native'
import styled from 'styled-components';

export const PickerView = styled(View)`
  margin-top: 10px;
  margin-left: 10px;
  background-color: #64615E;
  /* ${props => props.tipo === 'despesa' ? '#C62' : '#049301'}; */
  border-radius: 10px;
  width: 95%;
`;