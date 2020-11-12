import React from 'react';

import ItensList from '../ItensList';
import { Container, List } from './styles';
import { acessorios } from '../../../data/data';

function Acessorios({ navigation }) {
  return (
    <Container>
      <List
        data={acessorios}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => (
          <ItensList
            onPress={() => navigation.navigate('Produto')}
            item={item}
          />
        )}
      />
    </Container>
  );
}

Acessorios.navigationOptions = {
  title: 'Acessórios',
};

export default Acessorios;
