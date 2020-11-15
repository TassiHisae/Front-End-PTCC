import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Background from '../../components/Background';

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

function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha"
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

        <SubmitButton
          color="#2dc7ff"
          onPress={() => navigation.navigate('Home')}
        >
          Acessar
        </SubmitButton>
      </Container>
    </Background>
  );
}

export default SignIn;
