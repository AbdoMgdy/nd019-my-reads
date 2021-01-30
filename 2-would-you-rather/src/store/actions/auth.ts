export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}
export interface ILoginAction {
  type: AuthActionTypes.LOGIN;
  payload: string;
}
export interface ILogoutAction {
  type: AuthActionTypes.LOGOUT;
}
export const login = (payload: string): ILoginAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload,
  };
};
export const logout = (): ILogoutAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

export type AuthActions = ILoginAction | ILogoutAction;
