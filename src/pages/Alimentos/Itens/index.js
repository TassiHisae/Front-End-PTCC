import React from "react";
import { Container, List } from "./styles";
import ItensList from "../ItensList";
import { itens } from "../../../data/data";

const Itens = ({ navigation }) => {
  return (
    <Container>
      <List
        data={itens}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} />}
      />
    </Container>
  );
};

export default Itens;
