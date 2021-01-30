import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
}

export function saveQuestion(question: any) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authUser: any, qid: any, answer: any) {
  return _saveQuestionAnswer({ authUser, qid, answer });
}
