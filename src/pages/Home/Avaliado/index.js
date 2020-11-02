import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Left, SymbleEnterprise, Info, Name, Right } from "./styles";

function Avaliado({ item, ...rest }) {
  return (
    <Container {...rest}>
      <Left>
        <SymbleEnterprise
          color={item.item.color}
          source={{
            uri: item.item.url,
          }}
        />
        <Info>
          <Name>{item.item.name}</Name>
        </Info>
      </Left>
      <Right>
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star-half" size={12} color="#ffd700" />
      </Right>
    </Container>
  );
}

export default Avaliado;
