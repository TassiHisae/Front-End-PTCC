import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  SearchBackground,
  Filtros,
  SearchTxt,
  Title,
  SelectInput,
  ProcuraPorClick,
  ViewSelect,
} from './styles';

import {
  especieData,
  racaData,
  categoriaData,
  produtoData,
  lojaData,
} from '../../data/data';
import Produtos from '../../components/Produtos';

function Search({ navigation }) {
  const [especie, setEspecie] = React.useState('Gato');
  const [raca, setRaca] = React.useState('Lebre');
  const [categoria, setCategoria] = React.useState('Saude');
  const [produto, setProduto] = React.useState('Ração');
  const [loja, setLoja] = React.useState('Ração');
  return (
    <Container>
      <SearchBackground>
        <Icon name="search" size={22} color="#f76abc" />
        <SearchTxt />
      </SearchBackground>
      <ProcuraPorClick>
        <Title>O que procura?</Title>
        <Produtos onPress={() => navigation.navigate('Alimentos')} />
      </ProcuraPorClick>
      <Filtros>
        <Title>Filtros</Title>
        <ViewSelect>
          <SelectInput
            placeholder={{}}
            items={especieData}
            onValueChange={(value) => {
              return setEspecie(value);
            }}
            InputAccessoryView={() => null}
            value={especie}
          />
        </ViewSelect>
        <ViewSelect>
          <SelectInput
            placeholder={{}}
            items={racaData}
            onValueChange={(value) => {
              return setRaca(value);
            }}
            InputAccessoryView={() => null}
            value={raca}
          />
        </ViewSelect>
        <ViewSelect>
          <SelectInput
            placeholder={{}}
            items={categoriaData}
            onValueChange={(value) => {
              return setCategoria(value);
            }}
            InputAccessoryView={() => null}
            value={categoria}
          />
        </ViewSelect>
        <ViewSelect>
          <SelectInput
            placeholder={{}}
            items={produtoData}
            onValueChange={(value) => {
              return setProduto(value);
            }}
            InputAccessoryView={() => null}
            value={produto}
          />
        </ViewSelect>
        <ViewSelect>
          <SelectInput
            placeholder={{}}
            items={lojaData}
            onValueChange={(value) => {
              return setLoja(value);
            }}
            InputAccessoryView={() => null}
            value={loja}
          />
        </ViewSelect>
      </Filtros>
    </Container>
  );
}

Search.navigationOptions = {
  title: 'Buscar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={22} color={tintColor} />
  ),
};

export default Search;
