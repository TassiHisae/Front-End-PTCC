import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import {
  Container,
  Left,
  SymbleEnterprise,
  Info,
  Name,
  Right,
  Adicionais,
  RamoAtuacao,
  TempoDeEntrega,
  ValorFrete,
} from './styles';

function Avaliado({ item, ...rest }) {
console.log(item.item)
  return (
    <Container {...rest} >

      <Left>
        <SymbleEnterprise
          color={item.item.color}
          source={{
            uri: item.item.url,
          }}
        />
        <Info>
          <Name>{item.item.nome}</Name>
          <Adicionais>
            <RamoAtuacao>
              <TempoDeEntrega>{item.item.nome_categoria + ' '}</TempoDeEntrega>
              <MaterialCommunityIcons
                name="circle"
                size={5}
                color="rgba(0,0,0,0.4)"
                style={{
                  marginTop: 3,
                }}
              />
              <TempoDeEntrega>{' ' + item.item.nome_raca}</TempoDeEntrega>
            </RamoAtuacao>
            <ValorFrete>Preço: {' ' + item.item.valor}</ValorFrete>
          </Adicionais>
        </Info>
      </Left>
    </Container>
  );
}

export default Avaliado;
