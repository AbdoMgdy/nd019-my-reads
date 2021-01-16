import { AuthActions, AuthActionTypes } from "./../actions/auth";
import produce from "immer";

const auth = (state: string = "", action: AuthActions) =>
  produce((state: string, draft: string) => {
    switch (action.type) {
      case AuthActionTypes.Login:
        draft = action.payload;
        break;
      case AuthActionTypes.Logout:
        draft = "";
    }
  }, {});

export default auth;
