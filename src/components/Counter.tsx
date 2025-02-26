import { Button, Box } from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../store/dataSlice";

const AnimatedDiv = animated.div as unknown as React.FC<
  React.HTMLAttributes<HTMLDivElement>
>;

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.data.counter);
  const dispatch: AppDispatch = useDispatch();

  const springProps = useSpring({
    backgroundColor:
      counter >= 0
        ? `rgba(0, 128, 255, ${Math.min(counter / 10, 1)})`
        : `rgba(255, 0, 0, ${Math.min(Math.abs(counter) / 10, 1)})`,
    config: { tension: 120, friction: 14 },
  });
  // some error in types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mergedStyle: any = {
    ...springProps,
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    border: "1px solid black",
  };

  return (
    <Box>
      <AnimatedDiv style={mergedStyle}>
        <Box textAlign="center" mb={6} fontSize="2xl" fontWeight="bold">
          Count: {counter}
        </Box>
      </AnimatedDiv>

      <Box display="flex" justifyContent="center" p={"10px"} mt={"10px"}>
        <Button
          colorScheme="gray"
          mr={3}
          border="1px"
          borderColor="black"
          onClick={() => dispatch(decrementCounter())}
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.2s"
        >
          -
        </Button>
        <Button
          colorScheme="red"
          border="1px"
          borderColor="black"
          onClick={() => dispatch(resetCounter())}
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.2s"
        >
          Reset
        </Button>
        <Button
          colorScheme="gray"
          ml={3}
          border="1px"
          borderColor="black"
          onClick={() => dispatch(incrementCounter())}
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.2s"
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
