import { QuestionActions, QuestionsActionTypes } from "./../actions/questions";
import produce from "immer";
import { IQuesions } from "../types";

export const initialQuestionsState: IQuesions = {};
const questions = produce((draft: IQuesions, action: QuestionActions) => {
  switch (action.type) {
    case QuestionsActionTypes.RECEIVE_QUESTIONS:
      draft = action.payload;
      return draft;
    case QuestionsActionTypes.ADD_ANSWER_TO_QUESTION:
      draft[action.payload.qid][action.payload.option].votes.push(
        action.payload.answer
      );
      break;
    case QuestionsActionTypes.ADD_QUESTION:
      draft[action.payload.qid] = action.payload;
      break;
    default:
      return draft;
  }
});

export default questions;
