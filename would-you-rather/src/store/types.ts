// Actions
export enum questionActions {
  receiveQuestions,
  addAnswerToQuestion,
  addQuestion,
}
export enum usersActions {
  receiveUsers,
  addAnswerToUser,
  addQuestionToUser,
}

export type Option = {
  votes: string[];
  text: string;
};

export interface IQuestion {
  [k: string]: any;
  id: string;
  author: string;
  timestamp: number;
  optionOne: Option;
  optionTwo: Option;
}
export interface IQuesions {
  [qid: string]: IQuestion;
}

export interface IUser {
  id: string;
  name: string;
  avatarURL: string;
  answers: { [answer: string]: string };
  questions: string[];
}
export interface IUsers {
  [user: string]: IUser;
}
