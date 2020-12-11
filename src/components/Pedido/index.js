import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListPedido from '../ListPedido';
import data from "../../data/data1";

import {
  Container,
  Content,
  Left,
  SymbleEnterprise,
  Info,
  Name,
  Right,
  PlusInfo,
  Description,
  Button,
  TextButton,
  ContentButton,
  List,
  ContentList,
  Touchable,
} from './styles';

function Pedido({ item }) {

  function VericaCancel() {
    Axios
  }

  const [itens, setItens] = useState('')
  useEffect(() => {
    data[4](item.item.idpedido).then((results) => {
      return setItens(results)
    })
  },
    []
  )
  return (
    <Container>
      <Content>
        <Left>
          <Touchable>
            <SymbleEnterprise
              color={item.item.color}
              source={{
                uri: "http://192.168.15.11:3333/uploads/company/save/" + item.item.foto_perfil,
              }}
            />
          </Touchable>
          <Info>
            <Name>{item.item.nome_empresa}</Name>
            <Description>Pedido {'#' + item.item.idpedido}</Description>
          </Info>
        </Left>
        <PlusInfo>
          <Icon name="info-outline" size={30} color="#333" />
        </PlusInfo>
      </Content>
      <ContentList>
        <List
          data={itens}
          keyExtractor={(item) => String(item.position)}
          renderItem={(item) => <ListPedido item={item} />}
        />
      </ContentList>
      <Content>
        <Left>
          <Name>Avalie seu pedido:</Name>
        </Left>
        <Right>
          <Icon name="star-border" size={18} color="rgba(0,0,0,0.4)" />
          <Icon name="star-border" size={18} color="rgba(0,0,0,0.4)" />
          <Icon name="star-border" size={18} color="rgba(0,0,0,0.4)" />
          <Icon name="star-border" size={18} color="rgba(0,0,0,0.4)" />
          <Icon name="star-border" size={18} color="rgba(0,0,0,0.4)" />
        </Right>
      </Content>
      <ContentButton>
        <Button color="#f5f5f5" txtColor="#2dc7ff" OnPress={VericaCancel}>
          <TextButton>Cancelar Pedido</TextButton>
        </Button>

      </ContentButton>
    </Container>
  );
}

export default Pedido;
