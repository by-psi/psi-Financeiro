import { SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

export const HeaderView = styled(SafeAreaView)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 50px;
`;

export const BtnMenu = styled(TouchableWithoutFeedback)`
  justify-content: center;
  align-items: center;
`;
