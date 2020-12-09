import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Photo,
  Content,
  BoxForName,
  Name,
  Text,
  BoxForDescripition,
  Descripition,
  Valor,
  Button,
  PhotoContainer
} from './styles';
import Back from '../../components/Back';
import data from '../../data/data1';
import { moedaMask } from '../../Mascara/mask';

function Produto({ navigation },item) {
console.log(item)
  return (
    <Container>
      <Content>
        <PhotoContainer>
          <Photo source={{
            uri: foto
          }} resizeMode='contain' />
        </PhotoContainer>
      </Content>
      <BoxForName>
        <Name>{produto.nome}</Name>
      </BoxForName>

      <BoxForDescripition>
        <Text>Espécie: {produtoDetalhes.nome_especie}</Text>
        <Text>Raça: {produtoDetalhes.nome_raca}</Text>
        <Text>Marca: {produto.marca}</Text>
        <Text>Peso: {moedaMask("'" + produto.peso + "'")} {produto.unidade_medida}</Text>
        <Descripition>
          Descrição: {produto.descricao}
        </Descripition>
      </BoxForDescripition>

      <Button onPress={() => navigation.navigate('Finalizacao')}>
        <Valor>R$ {moedaMask("'" + produto.valor + "'")}</Valor>
        <Icon name="plus" size={35} color="#fff" />
      </Button>
    </Container>
  );
}

Produto.navigationOptions = ({ navigation }) => ({
  headerTitle: '',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerLeft: () => (
    <Back onPress={() => navigation.navigate('Home')} color="#2dc7ff" />
  ),
});
export default Produto;
