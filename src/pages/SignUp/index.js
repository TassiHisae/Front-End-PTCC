import React, { useState } from 'react';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Image,
  FormInputSmall,
  ViewDoubleInput,
  TextDate,
  BoxText,
  Text,
} from './styles';

import logo from '../../assets/logo.png';
import { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      nome:'',
      cpf:'',
      email:'',
      senha:'',
      date: '20-01-2001',
    };
  }

  render() {
    return (
      <Container>
        <Image source={logo} />
        <Form>
          <BoxText>
            <Text>Atenção os campos com * são obrigatórios</Text>
          </BoxText>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome*"
            onChangeText={(texte_nome) => this.state.nome = texte_nome}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CPF*"
            onChangeText={(texte_cpf) => this.state.cpf = texte_cpf}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email*"
            onChangeText={(texte_email) => this.state.email = texte_email}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha*"
            onChangeText={(texte_senha) => this.state.senha = texte_senha}
          />
          <ViewDoubleInput>
            <TextDate>Data da nascimento:*</TextDate>
            <FormInputSmall
              icon="date-range"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              date={this.state.date}
              mode="date"
              format="DD-MM-YYYY"
              minDate="01-01-1930"
              maxDate="31-12-2013"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              dateIcon="none"
              customStyles={{
                dateIcon: {
                  display: 'none',
                },
                dateInput: {
                  borderWidth: 0,
                  textAlign: 'left',
                  position: 'absolute',
                  left: 10,
                  placeholderTextColor: 'rgba(0,0,0,0.6)',
                },
              }}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </ViewDoubleInput>

          <SignLink onPress={() => this.navigation.navigate('SignIn')}>
            <SignLinkText>Já possui uma conta? Clique aqui...</SignLinkText>
          </SignLink>
        </Form>
        <SubmitButton onPress={() => this.navigation.navigate('Continuar',{routes:this.state})}>
          Cadastrar
        </SubmitButton>
      </Container>
    );
  }
}

export default SignUp;
