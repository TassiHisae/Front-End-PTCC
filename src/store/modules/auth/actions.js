export function signInRequest(user) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      user,
    },
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      user,
    },
  };
}

export function signUpRequest(nome, email, senha, cpf) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      nome,
      email,
      senha,
      cpf,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
