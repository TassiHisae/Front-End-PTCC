import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  MaterialIcons,
  SimpleLineIcons,
  EvilIcons,
} from 'react-native-vector-icons';

import { Container, ListItem, TextItem, Item } from './styles';
import { user } from '../../data/data';

function Profile({ navigation }) {
  return (
    <Container>
      <ListItem onPress={() => navigation.navigate('User', {})}>
        <Item>
          <MaterialIcons
            name="person-outline"
            color="rgba(0,0,0,0.8)"
            size={28}
          />
          <TextItem>Perfil</TextItem>
        </Item>
      </ListItem>

      <ListItem onPress={() => navigation.navigate('Endereco')}>
        <Item>
          <EvilIcons name="location" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Endereços</TextItem>
        </Item>
      </ListItem>
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Configurações',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="settings" size={25} color={tintColor} />
  ),
};

export default Profile;
