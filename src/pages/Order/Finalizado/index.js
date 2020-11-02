import React from "react";
import { Container, List } from "./styles";

import Pedido from "../../../components/Pedido";

import data from "../../../data/data";

function Finalizado() {
  return (
    <Container>
      <List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <Pedido item={item} />}
      />
    </Container>
  );
}

Finalizado.navigationOptions = {
  title: "Finalizado",
};
export default Finalizado;
