import React from "react";

import LojasList from "../LojasList";
import { lojas } from "../../../data/data";
import { Container, List } from "./styles";

function Lojas({ navigation }) {
  return (
    <Container>
      <List
        data={lojas}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <LojasList item={item} />}
      />
    </Container>
  );
}

export default Lojas;
