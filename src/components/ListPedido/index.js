import React from 'react';

import { Container, BoxNumber, Number, Product } from './styles';

function ListPedido({ item }) {
     console.log(item)
  return (
    <Container>
      <BoxNumber>
        <Number>{item.item.qtd}</Number>
      </BoxNumber>
      <Product>{item.item.nome}</Product>
    </Container>
  );

}

export default ListPedido;
