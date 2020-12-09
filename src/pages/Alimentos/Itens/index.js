import React,{useState,useEffect} from "react";
import { Container, List } from "./styles";
import ItensList from "../ItensList";
import data from "../../../data/data1";



const Itens = ({ navigation }) => {
  const [lista,setlista] = useState('')
  useEffect(() => {
    data[2]().then((results) => {

      return setlista(results)})

  },

[]
  )

  return (

       <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} />}

        />

  );
};

export default Itens;
