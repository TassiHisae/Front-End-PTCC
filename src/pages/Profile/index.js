import React from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  MaterialIcons,
  SimpleLineIcons,
  Foundation,
  EvilIcons,
  Entypo
} from "react-native-vector-icons";

import { Container, ListItem, TextItem, Item } from "./styles";

function Profile() {
  return (
    <Container>
      <ListItem>
        <Item>
          <MaterialIcons
            name="person-outline"
            color="rgba(0,0,0,0.8)"
            size={28}
          />
          <TextItem>Perfil</TextItem>
        </Item>
      </ListItem>
      <ListItem>
        <Item>
          <SimpleLineIcons name="wallet" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Carteira</TextItem>
        </Item>
      </ListItem>
      <ListItem>
        <Item>
          <Foundation name="ticket" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Cupons</TextItem>
        </Item>
      </ListItem>
      <ListItem>
        <Item>
          <MaterialIcons name="star-border" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Favoritos</TextItem>
        </Item>
      </ListItem>
      <ListItem>
        <Item>
          <EvilIcons name="location" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Endereços</TextItem>
        </Item>
      </ListItem>
      <ListItem>
        <Item>
          <MaterialIcons name="help-outline" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Ajuda</TextItem>
        </Item>
      </ListItem>
      <ListItem>
        <Item>
          <Entypo name="shop" color="rgba(0,0,0,0.8)" size={28} />
          <TextItem>Cadastre-se como Petshop</TextItem>
        </Item>
      </ListItem>
    </Container>
  );
}

Profile.navigationOptions = {
  title: "Configurações",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="settings" size={25} color={tintColor} />
  ),
};

export default Profile;
