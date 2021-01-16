import { UsersActions, UsersActionsTypes } from "./../actions/users";
import produce from "immer";
import { IUsers } from "../types";

export const initialUsersState: IUsers = {};

const users = (state: IUsers = initialUsersState, action: UsersActions) =>
  produce((draft, action) => {
    switch (action.type) {
      case UsersActionsTypes.RECEIVE_USERS:
        draft = action.payload;
        break;

      case UsersActionsTypes.ADD_ANSWER_TO_USER:
        draft[action.payload.user].answers[action.payload.question] =
          action.payload.question;
        break;

      case UsersActionsTypes.ADD_QUESTION_TO_USER:
        draft[action.payload.user].questions.push(action.payload.question);
        break;
    }
  });

export default users;
