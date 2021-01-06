import React, { useContext, useState } from "react";
import {
  Box,
  GridItem,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import Shelf from "../components/Shelf";
import { actions, BookType, ShelfType } from "../store/rootReducer";
import { get, search } from "../BooksAPI";
import { BookContext } from "../store/rootContext";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Search = () => {
  const { state, dispatch } = useContext(BookContext);
  const [books, setBooks] = useState(false);
  const getSearchResutls = (query: String) => {
    if (query !== "") {
      search(query).then(async (res) => {
        console.log(res);
        try {
          let books = res.map((b: any) => {
            let currBook = state.bookList.find((cb) => cb.id === b.id);
            if (currBook) {
              return currBook;
            } else {
              return {
                id: b.id,
                title: b.title,
                img: b.imageLinks.thumbnail,
                authors: b.authors,
                shelf: ShelfType.none,
              };
            }
          });
          dispatch(actions.setSearchResults(books));
          setBooks(true);
        } catch {
          console.log("error Ocuured");
          dispatch(actions.setSearchResults([]));
          setBooks(false);
        }
      });
    } else {
      dispatch(actions.setSearchResults([]));
      setBooks(false);
    }
  };
  return (
    <Box>
      <Box backgroundColor="#0a043c" padding="2rem">
        <Heading as="h1" color="white">
          Search for Books
        </Heading>
      </Box>
      <SimpleGrid columns={12} mt="1rem" gap={0}>
        <GridItem colSpan={1}>
          <Link to="/">
            <IconButton
              size="lg"
              colorScheme="blue"
              aria-label="Call Sage"
              icon={<ArrowLeftIcon />}
            />
          </Link>
        </GridItem>
        <GridItem colSpan={11}>
          <Input
            placeholder="Search for Books ..."
            onChange={(e) => {
              getSearchResutls(e.target.value);
            }}
          />
        </GridItem>
      </SimpleGrid>
      {!books ? (
        <p>No Results Found</p>
      ) : (
        <Shelf title="Search Results" type={ShelfType.none}></Shelf>
      )}
    </Box>
  );
};
export default Search;
