import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Header, IconArea, Tipo, Data, Historico, Valor } from './styles';

export default function HistoricoList({ data, deleteItem }) {
 return (
   <TouchableWithoutFeedback onLongPress={ () => deleteItem(data) }>
      <Container>
        <Header>
          <IconArea tipo={data.tipo}>
            <Icon 
              name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} 
              color='#FFF' 
              size={20}
            />
            <Tipo>{data.tipo}</Tipo>
          </IconArea>
          <Data>{data.date}</Data>
        </Header>
        <Historico>{data.historico}</Historico>
        <Valor>
          R$ {data.valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </Valor>
      </Container>
   </TouchableWithoutFeedback>  
  );
}
