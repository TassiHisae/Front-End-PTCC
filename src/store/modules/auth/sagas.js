import { all, takeLatest, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const user = {
      email,
      password,
    };

    yield put(signInSuccess(user));
    Alert.alert('Login com sucesso', 'Você será redirecionado à home');
  } catch (err) {
    Alert.alert('Falha no Login', 'Verifique seu e-mail e senha');
    yield put(signFailure());
  }
}

export function* SignUp({ payload }) {
  try {
    const { nome, email, senha, cpf } = payload;

    const user = {
      nome,
      email,
      senha,
      cpf,
    };

    Alert.alert('Cadastro com sucesso', 'Você será redirecionado à home');
    yield put(signInSuccess(user));
  } catch (err) {
    Alert.alert('Falha no Cadastro', 'Verifique seus dados');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
]);
