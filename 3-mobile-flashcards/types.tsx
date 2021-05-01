/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  DeckDetails: undefined;
  AddCard: undefined;
  Quiz: undefined;
};

export type BottomTabParamList = {
  Decks: undefined;
  AddDeck: undefined;
};

export type DecksParamList = {
  DecksScreen: undefined;
};

export type AddDeckParamList = {
  AddDeckScreen: undefined;
};

export type DeckType = {
  title: string;
  questions: QuestionType[];
};

export type QuestionType = {
  question: string;
  answer: string;
};

export type DeckListType = {
  [index: string]: DeckType;
};
