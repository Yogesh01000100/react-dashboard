import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/authSlice";
import { RootState, AppDispatch } from "../store";
import { Navigate } from "react-router-dom";
import logo from "../../public/google.svg";

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [loading]);

  const handleGoogleSignIn = () => {
    const dummyUser = { name: "yogesh", email: "yogesh@example.com" };
    setLoading(true);
    dispatch(signIn(dummyUser));
  };

  if (loading) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg="gray.50">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Flex minH="100vh" align="center" justify="center" p={6}>
      <Box
        borderRadius="lg"
        maxW="sm"
        w="full"
        p={8}
        textAlign="center"
        transition="all 0.2s ease-in-out"
        boxShadow="dark-lg"
      >
        <Heading mb={2} fontSize="2xl" color="gray.800">
          Hello Again
        </Heading>
        <Text mb={6} color="gray.600">
          We're thrilled to see you again. Sign in to continue!
        </Text>

        <Button
          variant="solid"
          color={"gray.700"}
          onClick={handleGoogleSignIn}
          size="md"
          w="70%"
          leftIcon={<Image src={logo} alt="Google" boxSize="20px" />}
          fontWeight="normal"
          border={"1px"}
        >
          Sign in with Google
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
