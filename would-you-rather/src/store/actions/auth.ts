export enum AuthActionTypes {
  Login,
  Logout,
}
export interface ILoginAction {
  type: AuthActionTypes.Login;
  payload: string;
}
export interface ILogoutAction {
  type: AuthActionTypes.Logout;
}
export const login = (payload: string): ILoginAction => {
  return {
    type: AuthActionTypes.Login,
    payload,
  };
};
export const logout = (): ILogoutAction => {
  return {
    type: AuthActionTypes.Logout,
  };
};

export type AuthActions = ILoginAction | ILogoutAction;
