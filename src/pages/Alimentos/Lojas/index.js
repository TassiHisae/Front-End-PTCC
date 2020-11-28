import React,{useState,useEffect} from "react";

import LojasList from "../LojasList";
import data from "../../../data/data1";
import { Container, List } from "./styles";

function Lojas({ navigation }) {
  const [lista,setlista] = useState('')
  useEffect(() => {
    data[1]().then((results) => {
      console.log(results)
      return setlista(results)})
  },
[]  )
  console.log(lista)
  return (
    <Container>
      <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <LojasList item={item} />}
      />
    </Container>
  );
}

export default Lojas;
