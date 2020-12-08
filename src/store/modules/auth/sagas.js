import { all, takeLatest, put } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { user } = payload;

  yield put(signInSuccess(user));
}

export function* SignUp({ payload }) {
  const { user } = payload;

  yield put(signInSuccess(user));
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
]);
