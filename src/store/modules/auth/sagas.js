import { all, takeLatest, put } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const user = {
      email,
      password,
    };

    yield put(signInSuccess(user));
  } catch (err) {
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

    yield put(signInSuccess(user));
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
]);
