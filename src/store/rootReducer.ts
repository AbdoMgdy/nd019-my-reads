import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from "immer-reducer";

export enum ShelfType {
  currentlyReading,
  wantToRead,
  read,
  none,
}

export type BookType = {
  id: string;
  img: string;
  title: string;
  authors: [string];
  shelf: ShelfType;
};

export type BookListType = [BookType];

export interface InitialStateType {
  bookList: BookListType;
  searchResults: BookListType | [];
}

class BookReducer extends ImmerReducer<InitialStateType> {
  setBooks(books: BookListType) {
    this.draftState.bookList = books;
  }

  setSearchResults(books: BookListType | []) {
    this.draftState.searchResults = books;
  }
  updateBook(book: BookType, changes: any) {
    let currBook = this.state.bookList.find((b) => b.id === book.id);
    if (currBook) {
      let i = this.state.bookList.indexOf(currBook);
      this.draftState.bookList[i] = book;
    }
  }
  changeShelf(id: string, newShelf: ShelfType) {
    let currBook = this.state.bookList.find((b) => b.id === id);
    if (currBook) {
      let i = this.state.bookList.indexOf(currBook);
      this.draftState.bookList[i].shelf = newShelf;
    }
  }
  addBook(book: BookType) {
    this.draftState.bookList.push(book);
  }
}
export const initialState: InitialStateType = {
  bookList: [
    { id: "", img: "", title: "", authors: [""], shelf: ShelfType.none },
  ],
  searchResults: [],
};

export const actions = createActionCreators(BookReducer);
export const reducer = createReducerFunction(BookReducer, initialState);
