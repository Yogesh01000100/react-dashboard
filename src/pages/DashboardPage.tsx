import { Box, Grid, GridItem } from "@chakra-ui/react";
import AnimatedCounter from "../components/Counter";
import RichTextPage from "./RichTextPage";
import UserDataBox from "../components/UserDataBox";
import AdditionalInfoBox from "../components/InfoBox";

const DashboardPage: React.FC = () => {
  return (
    <Box p={4} maxW="1200px" mx="auto" mt="15px">
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <GridItem>
          <Box
            p={4}
            border="1px solid black"
            borderRadius="md"
            boxShadow="md"
            height="100%"
          >
            <AnimatedCounter />
          </Box>
        </GridItem>

        <GridItem>
          <RichTextPage />
        </GridItem>

        <GridItem>
          <Box
            p={4}
            border="1px solid black"
            borderRadius="md"
            boxShadow="md"
            height="100%"
          >
            <UserDataBox />
          </Box>
        </GridItem>

        <GridItem>
          <Box
            p={4}
            border="1px solid black"
            borderRadius="md"
            boxShadow="md"
            height="100%"
          >
            <AdditionalInfoBox />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
