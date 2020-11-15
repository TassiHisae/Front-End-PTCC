import React from 'react';

import { Container, BoxNumber, Number, Product } from './styles';

function ListPedido({ item }) {
  return (
    <Container>
      <BoxNumber>
        <Number>{item.item.id}</Number>
      </BoxNumber>
      <Product>{item.item.nome}</Product>
    </Container>
  );
}

export default ListPedido;
