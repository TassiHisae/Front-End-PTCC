import React from "react";
import { View } from "react-native";
import Produto from "./Produto";

import { Container } from "./styles";
import acessorios from "../../assets/acessorios.jpg";
import alimentos from "../../assets/racao.jpg";
import saude from "../../assets/saude.jpg";

function Produtos({ ...rest }) {
  console.log(rest);
  return (
    <Container>
      <Produto {...rest} description="Alimentos" img={alimentos} />
      <Produto {...rest} description="Acessórios" img={acessorios} />
      <Produto {...rest} description="Saúde" img={saude} />
    </Container>
  );
}

export default Produtos;
