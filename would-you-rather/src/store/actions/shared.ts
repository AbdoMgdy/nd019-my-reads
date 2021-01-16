import { getInitialData } from "../../utils/api";
import { reveiveQuestions } from "./questions";
import { receiveUsers } from "./users";
export function handleInitialData(dispatch: any) {
  return getInitialData().then(({ users, questions }) => {
    dispatch(reveiveQuestions(questions));
    dispatch(receiveUsers(users));
  });
}
