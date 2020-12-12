import React, {useState} from 'react';
import Cadastrar_Banco from '../../Services/Cadastrar'
import {Alert } from "react-native";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ViewDoubleInput,
  FormInputSmall,
  InfoText,
  Text,
  BoxText,
} from './styles';
function Continuar({ navigation }) {

  const cpf = navigation.state.params.routes.cpf
  const senha = navigation.state.params.routes.senha
  const email = navigation.state.params.routes.email
  const nascimento = navigation.state.params.routes.date
  const nome = navigation.state.params.routes.nome

  const [endereco , setEndereco] = useState('');
  const [cep  , setCep ] = useState('');
  const [numero  , setNumero ] = useState('');
  const [complemento  , setComplemento ] = useState('');
  const [celular  , setCelular ] = useState('');
  const [telefone  , setTelefone ] = useState('');




  async function Cadastrar(){

    await Cadastrar_Banco(cpf,senha,email,nascimento,nome,telefone,celular).then(results=>{

          if(results >= 1){

          navigation.navigate("Home")
          }
          else
          {

            Alert.alert(
              "Tente Novamente",
              "Não foi possivel realizar o cadastro")
             /*  navigation.navigate("SignIn") */

          }

    })

 }
  return (
    <Container>
      <InfoText>
        Falta apenas mais umas informações, estamos quase lá :)
      </InfoText>
      <Form>
        <BoxText>
          <Text>Atenção os campos com * são obrigatórios</Text>
        </BoxText>
        <FormInput
          icon="location-on"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Endereço*"
          value={endereco}
          onChangeText={(texte_endereco) => setEndereco(texte_endereco)}
        />
        <ViewDoubleInput>
          <FormInputSmall
            icon="adjust"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CEP*"
            value={cep}
            onChangeText={(texte_cep) => setCep(texte_cep)}
          />
          <FormInputSmall
            icon="dialpad"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Número*"
            value={numero}
            onChangeText={(texte_Numero) => setNumero(texte_Numero)}
          />
        </ViewDoubleInput>
        <FormInput
          icon="attach-file"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Complemento*"
          value={complemento}
          onChangeText={(texte_Complemento) => setComplemento(texte_Complemento)}
        />
        <ViewDoubleInput>
          <FormInputSmall
            icon="phone-android"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Celular*"
            value={celular}
            onChangeText={(texte_Celular) => setCelular(texte_Celular)}
          />
          <FormInputSmall
            icon="local-phone"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Telefone"
            value={telefone }
            onChangeText={(texte_Telefone) => setTelefone(texte_Telefone)}
          />
        </ViewDoubleInput>
      </Form>
      <SubmitButton onPress={Cadastrar}>
        Finalizar
      </SubmitButton>
    </Container>
  );
}

export default Continuar;
