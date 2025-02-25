import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import AnimatedCounter from "../components/AnimatedCounter";
import UserForm from "../components/UserForm";
import RichTextPage from "./RichTextPage";

const DashboardPage: React.FC = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <AnimatedCounter />
        </GridItem>
        <GridItem>
          <UserForm />
        </GridItem>
        <GridItem colSpan={2}>
          <RichTextPage />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
