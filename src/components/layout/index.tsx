import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
function Layout({ children }: any) {
  return (
    <Box>
      <Box backgroundColor="#0a043c" padding="2rem">
        <Heading as="h1" color="white">
          MyReads
        </Heading>
      </Box>
      {children}
      <Box position="fixed" right="40px" bottom="40px">
        <Link to="/search">
          <IconButton
            size="lg"
            colorScheme="blue"
            aria-label="Call Sage"
            icon={<PlusSquareIcon />}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default Layout;
