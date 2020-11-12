import React from 'react';

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
} from './styles';
import Back from '../../components/Back';
import produto from '../../assets/produto.jpg';

function Produto({ navigation }) {
  return (
    <Container>
      <Content>
        <Photo source={produto} />
      </Content>
      <BoxForName>
        <Name>Premier Carne e Bacon</Name>
      </BoxForName>

      <BoxForDescripition>
        <Text>Idade: Cachorro Adulto</Text>
        <Text>Porte: Médio</Text>
        <Descripition>
          Descrição: Utilizados como cães de guarda ou somente apreciados por
          seu porte e beleza, os cães de raças grandes e gigantes têm
          características próprias e necessidades especiais.
        </Descripition>
      </BoxForDescripition>

      <Button onPress={() => navigation.navigate('Finalizacao')}>
        <Valor>R$ 173,90</Valor>
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
