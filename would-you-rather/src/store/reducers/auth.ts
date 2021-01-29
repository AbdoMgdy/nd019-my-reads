import { AuthActions, AuthActionTypes } from "./../actions/auth";
import { produce } from "immer";

const auth = (state: string = "", action: AuthActions) =>
  produce(state, (draft: string) => {
    switch (action.type) {
      case AuthActionTypes.LOGIN:
        return action.payload;
      case AuthActionTypes.LOGOUT:
        return "";
    }
  });

export default auth;
