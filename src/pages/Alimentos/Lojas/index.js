import React, { useContext, useState, useEffect } from 'react';
import LojaContext from '../../../data/Loja/Context'
import LojasList from "../LojasList";
import data from "../../../data/data1";
import { Container, List } from "./styles";

function Lojas({ navigation }) {
  const [lista, setlista] = useState('')
  const { Context } = useContext(LojaContext)

  useEffect(() => {

    if (Context === '1') {
      setlista(navigation.state.params.item);
    }
    else {
      data[1]().then((results) => {
        return setlista(results)
      })
    }
  },
    [])
  return (
    <List
      data={lista}
      keyExtractor={(item) => String(item.idempresa)}
      renderItem={(item) => <LojasList item={item} navigation={navigation} />}
    />

  );
}

export default Lojas;
