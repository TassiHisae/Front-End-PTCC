import React,{useState,useEffect} from "react";

import LojasList from "../LojasList";
import data from "../../../data/data1";
import { Container, List } from "./styles";

function Lojas({ navigation }) {
  const [lista,setlista] = useState('')
  useEffect(() => {
    data[1]().then((results) => {

      return setlista(results)})
  },
[]  )


  return (

      <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <LojasList item={item} navigation={navigation} />}
      />

  );
}

export default Lojas;
