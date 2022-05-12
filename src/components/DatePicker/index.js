import React, { useState } from 'react';
import { Text, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Header } from './styles';

export default function DatePicker({ date, onClose, onChange }) {
  const [dtNow, setDtNow] = useState(new Date(date));
  return (
    <Container>
      {Platform.OS === 'ios' &&  (
        <Header>
          <TouchableOpacity onPress={ onClose }>
            <Text>Fechar</Text>
          </TouchableOpacity>  
        </Header> 
      )}
      <DateTimePicker
        value={dtNow}
        mode="date"
        display="default"
        onChange={ (e, d) => {
          const currentDate = d || dtNow;
          setDtNow(currentDate);
          onChange(currentDate);
        }}
        style={{ backgroundColor: 'white' }}
      />
    </Container>
  );
}