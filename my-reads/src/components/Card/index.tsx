import { Box, Select } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { update } from "../../BooksAPI";
import { BookContext } from "../../store/rootContext";
import { ShelfType, actions, BookType } from "../../store/rootReducer";

function Card(props: BookType) {
  const { title, img, authors } = props;
  const { dispatch } = useContext(BookContext);
  const [currShelf, setCurrShelf] = useState(props.shelf);
  const changeShelf = (shelf: ShelfType) => {
    dispatch(actions.changeShelf(props.id, shelf));
    update(props, ShelfType[shelf]).then((res) => {
      console.log(res);
    });
    setCurrShelf(shelf);
  };
  return (
    <div>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <img src={img} alt={title} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box
            d="flex"
            justifyContent="space-between"
            mt="2"
            alignItems="center"
          >
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {authors && authors.map((author) => <p key={author}>{author}</p>)}
            </Box>
            <Box fontSize="sm">
              <Select
                size="sm"
                value={currShelf}
                onChange={(e) => {
                  changeShelf(parseInt(e.target.value));
                }}
              >
                <option value="" disabled>
                  Choose Shelf
                </option>
                <option value={ShelfType.currentlyReading}>
                  Currently Reading
                </option>
                <option value={ShelfType.wantToRead}>Want to Read</option>
                <option value={ShelfType.read}>Read</option>
                <option value={ShelfType.none}>None</option>
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Card;
