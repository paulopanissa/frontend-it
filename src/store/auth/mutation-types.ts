export enum MutationTypes {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT"
}

export interface LoginSuccess {
  user: {
    name: string;
    email: string;
  };
}

export interface LoginFailure {
  error?: string | null | undefined;
}
