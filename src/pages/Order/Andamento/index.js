import React from "react";
import { Container, List } from "./styles";

import Pedido from "../../../components/Pedido";

import {andamento} from "../../../data/data";

function Andamento() {
  return (
    <Container>
      <List
        data={andamento}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <Pedido item={item} />}
      />
    </Container>
  );
}

Andamento.navigationOptions = {
  title: "Em Andamento",
};
export default Andamento;
