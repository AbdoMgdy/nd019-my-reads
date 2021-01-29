import {
  initialState,
  reducer,
  InitialStateType,
  actions,
  ShelfType,
} from "./rootReducer";
import React, { createContext, useEffect, useReducer } from "react";
import { getAll } from "../BooksAPI";
const BookContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
const { Provider } = BookContext;

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAll().then((res) => {
      let books = res.map((book: any) => {
        let shelf = book.shelf;
        return {
          id: book.id,
          title: book.title,
          authors: book.authors,
          img: book.imageLinks.thumbnail,
          shelf: ShelfType[shelf],
        };
      });
      dispatch(actions.setBooks(books));
    });
  }, []);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { BookContext, StateProvider };
