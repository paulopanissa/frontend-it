export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  CHECK_USER = "CHECK_USER"
}

export interface PayloadLogin {
  login: string;
  password: string;
}
