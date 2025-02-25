import { Flex, Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      bg="gray.100"
      p={4}
      align="center"
      justify="space-between"
      shadow="md"
    >
      <Box fontWeight="bold" fontSize="lg">
        My App
      </Box>
      <HStack spacing={6}>
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "underline" }}>
          Dashboard
        </Link>
        <Link
          as={RouterLink}
          to="/counter"
          _hover={{ textDecoration: "underline" }}
        >
          Counter
        </Link>
        <Link
          as={RouterLink}
          to="/form"
          _hover={{ textDecoration: "underline" }}
        >
          User Form
        </Link>
        <Link
          as={RouterLink}
          to="/editor"
          _hover={{ textDecoration: "underline" }}
        >
          Rich Text
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
