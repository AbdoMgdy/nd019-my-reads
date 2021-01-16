import { IQuesions, IQuestion } from "./../types";
export enum QuestionsActionTypes {
  RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS ",
  ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION ",
  ADD_QUESTION = "ADD_QUESTION ",
}

export interface IReceivQuestionsAction {
  type: QuestionsActionTypes.RECEIVE_QUESTIONS;
  payload: IQuesions;
}

export interface IAddAnswerToQuestionAction {
  type: QuestionsActionTypes.ADD_ANSWER_TO_QUESTION;
  payload: {
    qid: string;
    option: string;
    answer: string;
  };
}

export interface IAddQuestionAction {
  type: QuestionsActionTypes.ADD_QUESTION;
  payload: IQuestion;
}

export const receiveQuestions = (
  payload: IQuesions
): IReceivQuestionsAction => {
  return {
    type: QuestionsActionTypes.RECEIVE_QUESTIONS,
    payload,
  };
};
export const addAnswerToQuestion = (payload: {
  qid: string;
  option: string;
  answer: string;
}): IAddAnswerToQuestionAction => {
  return {
    type: QuestionsActionTypes.ADD_ANSWER_TO_QUESTION,
    payload,
  };
};
export const addQuestion = (payload: IQuestion): IAddQuestionAction => {
  return {
    type: QuestionsActionTypes.ADD_QUESTION,
    payload,
  };
};

export type QuestionActions =
  | IReceivQuestionsAction
  | IAddAnswerToQuestionAction
  | IAddQuestionAction;
