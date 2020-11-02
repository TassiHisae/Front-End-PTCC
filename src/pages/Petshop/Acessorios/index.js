import React from "react";
import { View } from "react-native";

import ItensList from "../ItensList";
import { Container, List } from "./styles";
import { acessorios } from "../../../data/data";

function Acessorios() {
  return (
    <Container>
      <List
        data={acessorios}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} />}
      />
    </Container>
  );
}

Acessorios.navigationOptions = {
  title: "Acessórios",
};

export default Acessorios;
