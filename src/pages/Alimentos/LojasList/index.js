import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "react-native-vector-icons";

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
} from "./styles";

function Avaliado({ item }) {
  return (
    <Container>
      <Left>
        <SymbleEnterprise
          color={item.item.color}
          source={{
            uri: item.item.url,
          }}
        />
        <Info>
          <Name>{item.item.name}</Name>
          <Adicionais>
            <RamoAtuacao>
              <TempoDeEntrega>{item.item.ramo + " "}</TempoDeEntrega>
              <MaterialCommunityIcons
                name="circle"
                size={5}
                color="rgba(0,0,0,0.4)"
                style={{
                  marginTop: 3,
                }}
              />
              <TempoDeEntrega>{" " + item.item.tempoEstimadoEntrega}</TempoDeEntrega>
            </RamoAtuacao>
            <ValorFrete>Frete: {" " + item.item.frete}</ValorFrete>
          </Adicionais>
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
