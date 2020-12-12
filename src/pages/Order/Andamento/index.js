import React, { useState, useEffect, useContext } from "react";
import { Container, List } from "./styles";
import AuthContext from '../../../auth/auth'

import Pedido from "../../../components/Pedido";

import data from "../../../data/data1";
function Andamento() {
  // retorna a lista de pedidos em andamento
  const [lista, setlista] = useState('')
  const { signed, signIn } = useContext(AuthContext)

  useEffect(() => {

    data[3](signed.user[0].idusuario).then((results) => {

      setlista(results);

    })
  },
    []
  )

  return (
    <Container>
      <List
        data={lista}
        keyExtractor={(item) => String(item.idpedido)}
        renderItem={(item) => <Pedido item={item} />}
      />
    </Container>
  );
}
Andamento.navigationOptions = {
  title: "Em Andamento",
};
export default Andamento;
