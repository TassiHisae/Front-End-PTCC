import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { Alert } from 'react-native';
import Background from '../../components/Background/index';
import Verificar from '../../Services/Verifica_login';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  SocialText,
  SocialMediaIcon,
  BaseIcon,
  ImageIcon,
  Image,
} from './styles';

import imgGoogle from '../../assets/google.png';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

// Classe de Login, validada na Class de Valida Login
function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function Login() {
    // Verifica se o Usuario deixou algum campo em branco
    if (email !== '' && pass !== '') {
      await Verificar(email, pass).then((results) => {
        // Verfica se o valor passado existe
        if (results.validacao) {
          signInRequest(results.User);
          navigation.navigate('Home');
        } else if (results == false) {
          console.log('Não foi possivel efetuar login');
          Alert.alert('Tente Novamente', 'Login ou senha incorreto');
        } else if (results == null) {
          Alert.alert('Erro');
          console.log('Erro Critico!');
        }
      });
    } else {
      Alert.alert('Tente Novamente', 'Por favor preencher todos os campos');
    }
  }
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChangeText={(texte_email) => setEmail(texte_email)}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Senha"
          value={pass}
          onChangeText={(texte_pass) => setPass(texte_pass)}
        />
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Crie sua conta gratuita</SignLinkText>
        </SignLink>

        <SocialText>Login por rede social</SocialText>
        <SocialMediaIcon>
          <BaseIcon>
            <ImageIcon source={imgGoogle} />
          </BaseIcon>
          <BaseIcon>
            <IconAnt name="github" size={45} color="#000" />
          </BaseIcon>
          <BaseIcon>
            <Icon name="facebook" size={45} color="#4267B2" />
          </BaseIcon>
        </SocialMediaIcon>
      </Form>

      <SubmitButton color="#2dc7ff" onPress={Login}>
        Acessar
      </SubmitButton>
    </Container>
  );
}

export default SignIn;
