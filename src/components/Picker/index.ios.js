import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';

export default function Picker({onChange, tipo}) {
  return (
    <PickerView>
      <RNPickerSelect tipo={tipo}
        style={{
          width: '100%',
          color:'#FFF'
        }} 
        selectedValue={tipo}
        onValueChange={(valor) => onChange(valor)}
      >
        <RNPickerSelect.Item label='Receita' value='receita' />
        <RNPickerSelect.Item label='Despesa' value='despesa' />
      </RNPickerSelect>
    </PickerView>
  )
}
