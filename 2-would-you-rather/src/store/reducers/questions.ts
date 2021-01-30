import { QuestionActions, QuestionsActionTypes } from "../actions/questions";
import { produce } from "immer";
import { IQuesions } from "../types";

export const initialQuestionsState: IQuesions = {};
const questions = (
  state: IQuesions = initialQuestionsState,
  action: QuestionActions
) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case QuestionsActionTypes.RECEIVE_QUESTIONS:
        return action.payload;
      case QuestionsActionTypes.ADD_ANSWER_TO_QUESTION:
        draft[action.payload.qid][action.payload.option].votes.push(
          action.payload.answer
        );
        console.log(draft);
        break;
      case QuestionsActionTypes.ADD_QUESTION:
        draft[action.payload.id] = action.payload;
        break;
      default:
        return draft;
    }
  });

export default questions;
