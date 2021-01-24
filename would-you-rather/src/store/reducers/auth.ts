import { AuthActions, AuthActionTypes } from "./../actions/auth";
import produce from "immer";

const auth = (state: string = "", action: AuthActions) =>
  produce((state: string, draft: string) => {
    switch (action.type) {
      case AuthActionTypes.LOGIN:
        draft = action.payload;
        break;
      case AuthActionTypes.LOGOUT:
        draft = "";
    }
  }, {});



  
export const nS = (state: any, value: any) => {
  return produce((state, draft) => {
    draft.user = value;
    console.log(state, draft);
    return draft;
  });
};

export default auth;
