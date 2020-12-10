import React, { useEffect, useState, useContext } from 'react';
import { moedaMask } from '../../Mascara/mask';
import CompraContext from '../../data/Loja/DataCarrinho'

import {
  BoxOfOrder,
  ViewText,
  TextProd,
  ValueOfProd,
  Image,
  Button,
  View,
  TextButton,
  TextQtd,
  ViewContainer,
} from './styles';

function ListPedido({ item }) {
  console.log('Estou no itemLista');
  console.log(item.item);

  const {AlterarObeject} = useContext(CompraContext)
  const [quantidade,setQuantidade] = useState(item.item.qtde);


  function Soma(){
    AlterarObeject(item.item.id,item.item.qtde + 1)
    setQuantidade(quantidade + 1) ;
  }
  function Sub(){
    AlterarObeject(item.item.id,item.item.qtde - 1)
    setQuantidade(quantidade - 1)
  }
  return (
    <BoxOfOrder>
      <ViewText>
        <Image source={{ uri: item.item.url }} />
        <ValueOfProd>{moedaMask("'" + item.item.valor + "'")}</ValueOfProd>
      </ViewText>

      <ViewContainer>
        <TextProd>{item.item.nome}</TextProd>
        <View>
          <Button onPress={Soma}>
            <TextButton>+</TextButton>
          </Button >
          <TextQtd>{quantidade}</TextQtd>
          <Button onPress={Sub}>
            <TextButton>-</TextButton>
          </Button>
        </View>
      </ViewContainer>
    </BoxOfOrder>
  );
}

export default ListPedido;
