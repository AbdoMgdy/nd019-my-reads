import { Box, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BookContext } from "../../store/rootContext";
import { BookType, ShelfType } from "../../store/rootReducer";
import Card from "../Card";

interface ShelfProps {
  title: string;
  type: ShelfType;
}

function Shelf(props: ShelfProps) {
  const { title, type } = props;
  const {
    state: { bookList, searchResults },
  } = useContext(BookContext);
  let shelfBooks =
    type === ShelfType.none
      ? searchResults.filter((b: BookType) => b.shelf === type)
      : bookList.filter((b: BookType) => b.shelf === type);
  return (
    <Box margin="3rem">
      <Box marginBottom="3rem">
        <Heading
          as="h1"
          size="xl"
          textAlign="left"
          marginBottom="1rem"
          isTruncated
        >
          {title}
        </Heading>
        <Divider />
      </Box>
      <SimpleGrid columns={4} gap={3}>
        {shelfBooks.map((b: BookType) => (
          <Card key={b.id} {...b} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Shelf;
