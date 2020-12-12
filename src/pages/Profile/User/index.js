import React, { useContext,useState } from 'react';
import Back from '../../../components/Back';
import logo from '../../../assets/logo.jpg';
import { user } from '../../../data/data';
import AuthContext from '../../../auth/auth'
import data from '../../../data/data1'

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


  const { signed, signIn } = useContext(AuthContext)
  const [nome,setNome] = useState(signed.user[0].nome)
  const [cpf,setCpf] = useState(signed.user[0].cpf)
  const [email,setEmail] = useState(signed.user[0].email)
  const [senha,setSenha] = useState(signed.user[0].senha)


  console.log(signed)
  function altera_usuario(){


      data[17](signed.user[0].idusuario,nome,cpf,email,senha).then((results) => {
console.log(results)
        return ;

      });



  }


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
          value={nome}
          onChangeText={(texte_endereco) => setNome(texte_endereco)}
        />
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          value={cpf}
          onChangeText={(texte_endereco) => setCpf(texte_endereco)}
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(texte_endereco) => setEmail(texte_endereco)}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={senha}
          onChangeText={(texte_endereco) => setSenha(texte_endereco)}
        />
        <Button onPress={altera_usuario}>
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
