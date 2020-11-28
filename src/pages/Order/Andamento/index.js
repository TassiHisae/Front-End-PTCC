import React,{useState,useEffect} from "react";
import { Container, List } from "./styles";

import Pedido from "../../../components/Pedido";

import data from "../../../data/data1";
function Andamento() {
      // retorna a lista de pedidos em andamento
    const [lista,setlista] = useState('')
    useEffect(() => {
      data[3]("ativo").then((results) => {
         return setlista(results)})
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
Andamento.navigationOptions = {
  title: "Em Andamento",
};
export default Andamento;
