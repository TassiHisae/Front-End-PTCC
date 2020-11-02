import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt from "react-native-vector-icons/AntDesign";

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
} from "./styles";

import imgGoogle from "../../assets/google.png";
import logo from "../../assets/logo.png";

function SignUp({ navigation }) {
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome"
        />
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="CPF"
        />
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

        <SignLink onPress={() => navigation.navigate("SignIn")}>
          <SignLinkText>Já possui uma conta? Clique aqui...</SignLinkText>
        </SignLink>
        
      </Form>
      <SubmitButton onPress={() => navigation.navigate("Home")}>
        Cadastrar
      </SubmitButton>
    </Container>
  );
}

export default SignUp;
