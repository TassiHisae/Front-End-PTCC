import React,{useContext} from 'react';
import Back from '../../../components/Back';
import logo from '../../../assets/logo.jpg';
import { user } from '../../../data/data';
import AuthContext from '../../../auth/auth'

import {
  Container,
  Content,
  Touchable,
  FormInput,
  Image,
  Button,
  Text,
} from './styles';

function User() {
  const {signed,signIn} = useContext(AuthContext)
  console.log(signed.user[0].nome);

  return (
    <Container>
      <Content>
        <Touchable>
          <Image source={logo} />
        </Touchable>

        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={signed.user[0].nome}
        />
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={signed.user[0].cpf}
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={signed.user[0].email}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={signed.user[0].senha}
        />
        <Button>
          <Text>Atualizar</Text>
        </Button>
      </Content>
    </Container>
  );
}

User.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Meus dados',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerLeft: () => (
    <Back onPress={() => navigation.navigate('Settings')} color="#f76abc" />
  ),
});

export default User;
