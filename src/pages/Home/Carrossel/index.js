import React from "react";

import { Container, ImageCarrossel } from "./styles";

function Carrossel({ image }) {
  return (
    <Container>
      <ImageCarrossel source={image} />
    </Container>
  );
}

export default Carrossel;
