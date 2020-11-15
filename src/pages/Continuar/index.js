import React from 'react';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ViewDoubleInput,
  FormInputSmall,
  InfoText,
} from './styles';
function Continuar({ navigation }) {
  return (
    <Container>
      <InfoText>
        Falta apenas mais umas informações, estamos quase lá :)
      </InfoText>
      <Form>
        <FormInput
          icon="location-on"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Endereço"
        />
        <ViewDoubleInput>
          <FormInputSmall
            icon="adjust"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CEP"
          />
          <FormInputSmall
            icon="dialpad"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Número"
          />
        </ViewDoubleInput>
        <FormInput
          icon="attach-file"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Complemento"
        />
        <ViewDoubleInput>
          <FormInputSmall
            icon="phone-android"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Celular"
          />
          <FormInputSmall
            icon="local-phone"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Telefone"
          />
        </ViewDoubleInput>
      </Form>
      <SubmitButton onPress={() => navigation.navigate('Home')}>
        Finalizar
      </SubmitButton>
    </Container>
  );
}

export default Continuar;
