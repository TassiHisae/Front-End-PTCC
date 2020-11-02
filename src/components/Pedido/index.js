import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

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
  ListItem,
  Product,
  Button,
  TextButton,
  ContentButton,
} from "./styles";

function Avaliado({ item }) {
  return (
    <Container>
      <Content>
        <Left>
          <SymbleEnterprise
            color={item.item.color}
            source={{
              uri: item.item.url,
            }}
          />
          <Info>
            <Name>{item.item.name}</Name>
            <Description>Pedido {"#" + item.item.id}</Description>
          </Info>
        </Left>
        <PlusInfo>
          <Icon name="info-outline" size={30} color="#333" />
        </PlusInfo>
      </Content>
      <Content>
        <ListItem>
          <Icon name="looks-one" size={18} color="rgba(0,0,0,0.6)" />
          <Product>Golden Carne e Arroz</Product>
        </ListItem>
      </Content>
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
        <Button color="#f5f5f5" txtColor="#2dc7ff">
          <TextButton>Ajuda</TextButton>
        </Button>
        <Button color="#f5f5f5" txtColor="#2dc7ff">
          <TextButton>Detalhes</TextButton>
        </Button>
      </ContentButton>
    </Container>
  );
}

export default Avaliado;
