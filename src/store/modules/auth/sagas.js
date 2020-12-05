import { all, takeLatest, put } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { user } = payload;

    yield put(signInSuccess(user));
  } catch (err) {
    yield put(signFailure());
  }
}

export function* SignUp({ payload }) {
  try {
    const { user } = payload;

    yield put(signInSuccess(user));
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
]);
