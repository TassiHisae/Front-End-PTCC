import React,{useState,useEffect} from "react";
import { Container, List } from "./styles";
import ItensList from "../ItensList";
import data from "../../../data/data1";
import { TouchableHighlight } from "react-native";


const Itens = ({ navigation }) => {
  const [lista,setlista] = useState('')
  useEffect(() => {
    data[2]().then((results) => {
      console.log(results)
      return setlista(results)})

  },

[]
  )
  console.log(lista)
  return (


      <TouchableHighlight onPress={() => navigation.navigate("Screen")}>
       <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} />}

        />
      </TouchableHighlight>
  );
};

export default Itens;
