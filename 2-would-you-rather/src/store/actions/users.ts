import { IQuestion, IUsers } from "../types";

export enum UsersActionsTypes {
  RECEIVE_USERS = "RECEIVE_USERS",
  ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER",
  ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER",
}

export interface IReceiveUsersAction {
  type: UsersActionsTypes.RECEIVE_USERS;
  payload: IUsers;
}

export interface IAddAnswerToUser {
  type: UsersActionsTypes.ADD_ANSWER_TO_USER;
  payload: {
    user: string;
    question: string;
    answer: string;
  };
}

export interface IAddQuestionToUser {
  type: UsersActionsTypes.ADD_QUESTION_TO_USER;
  payload: { question: IQuestion; user: string };
}

export const receiveUsers = (payload: IUsers): IReceiveUsersAction => {
  return {
    type: UsersActionsTypes.RECEIVE_USERS,
    payload,
  };
};
export const addAnswerToUser = (payload: {
  question: string;
  user: string;
  answer: string;
}): IAddAnswerToUser => {
  return {
    type: UsersActionsTypes.ADD_ANSWER_TO_USER,
    payload,
  };
};

export const addQuestionToUser = (payload: {
  question: IQuestion;
  user: string;
}): IAddQuestionToUser => {
  return {
    type: UsersActionsTypes.ADD_QUESTION_TO_USER,
    payload,
  };
};

export type UsersActions =
  | IAddAnswerToUser
  | IReceiveUsersAction
  | IAddQuestionToUser;
