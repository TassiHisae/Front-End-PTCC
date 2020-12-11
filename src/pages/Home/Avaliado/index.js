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
            uri: "http://192.168.15.11:3333/uploads/company/save/" + item.item.foto_perfil,
          }}
        />
        <Info>
          <Name>{item.item.nome}</Name>
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
