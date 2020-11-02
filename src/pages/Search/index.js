import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  SearchBackground,
  BuscasRecentes,
  SearchTxt,
  Title,
  Recente,
  Text,
  ProcuraPorClick,
} from "./styles";

import Produtos from "../../components/Produtos";

function Search({navigation}) {
  return (
    <Container>
      <SearchBackground>
        <Icon name="search" size={22} color="#f76abc" />
        <SearchTxt />
      </SearchBackground>
      <BuscasRecentes>
        <Title>Buscas Recentes:</Title>
        <Recente>
          <Icon name="history" size={20} color="rgba(0,0,0,0.6)" />
          <Text>Point do Pet</Text>
        </Recente>
        <Recente>
          <Icon name="history" size={20} color="rgba(0,0,0,0.6)" />
          <Text>Bigodinho Pets</Text>
        </Recente>
        <Recente>
          <Icon name="history" size={20} color="rgba(0,0,0,0.6)" />
          <Text>Finos e Cheirosos</Text>
        </Recente>
      </BuscasRecentes>
      <ProcuraPorClick>
        <Title>O que procura?</Title>
        <Produtos onPress={() => navigation.navigate("Alimentos") } />
      </ProcuraPorClick>
    </Container>
  );
}

Search.navigationOptions = {
  title: "Buscar",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={22} color={tintColor} />
  ),
};

export default Search;
