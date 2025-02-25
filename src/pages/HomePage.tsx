import { Box, Heading } from "@chakra-ui/react";
import AnimatedCounter from "../components/AnimatedCounter";

const HomePage: React.FC = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Counter</Heading>
      <AnimatedCounter />
    </Box>
  );
};

export default HomePage;
