import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

export const CustomView = styled(View)`
  width: 100%;
  height: 85px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const CustomText = styled(Text)`
  color: #000;
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 35px;
`;

export const CustomImage = styled(Image)`
  width: 65px;
  height: 65px;
`;
