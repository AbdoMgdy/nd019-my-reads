import React, { useContext } from "react";
import {
  Box,
  GridItem,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import Shelf from "../components/Shelf";
import { actions, ShelfType } from "../store/rootReducer";
import { search } from "../BooksAPI";
import { BookContext } from "../store/rootContext";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Search = () => {
  const { dispatch } = useContext(BookContext);
  const getSearchResutls = (query: String) => {
    if (query) {
      search(query).then((res) => {
        console.log(res);
        try {
          let books = res.map((book: any) => {
            return {
              id: book.id,
              title: book.title,
              authors: book.authors,
              img: book.imageLinks.thumbnail,
              shelf: ShelfType.none,
            };
          });
          dispatch(actions.setSearchResults(books));
        } catch {
          console.log("error Ocuured");
        }
      });
    } else {
      dispatch(actions.setSearchResults([]));
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
      <Shelf title="Search Results" type={ShelfType.none}></Shelf>
    </Box>
  );
};
export default Search;
