import produce from "immer";
import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
} from "../_actions/questions";

const questions = produce((draft, { type, payload }) => {
  switch (type) {
    case RECEIVE_QUESTIONS:
      draft = payload;
      break;
    case ADD_ANSWER_TO_QUESTION:
      draft[payload.qid][payload.answer].votes.push(payload.user);
      break;
    case ADD_QUESTION:
      draft[payload.qid] = payload.question;
  }
}, {});

export default questions;
