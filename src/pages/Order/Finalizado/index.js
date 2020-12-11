import React, { useState, useEffect } from "react";
import { Container, List } from "./styles";

import Pedido from "../../../components/Pedido";

import data from "../../../data/data1";

function Finalizado() {

  const [lista, setlista] = useState('')
  useEffect(() => {
    data[12]().then((results) => {
      setlista(results)
    })
  },
    []
  )
  return (
    <Container>
      <List
        data={lista}
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
