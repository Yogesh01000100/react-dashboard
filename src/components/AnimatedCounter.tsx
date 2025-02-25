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

const AnimatedCounter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.data.counter);
  const dispatch: AppDispatch = useDispatch();

  const springProps = useSpring({
    backgroundColor:
      counter >= 0
        ? `rgba(0, 128, 255, ${Math.min(counter / 10, 1)})`
        : `rgba(255, 0, 0, ${Math.min(Math.abs(counter) / 10, 1)})`,
    config: { tension: 120, friction: 14 },
  });

  const mergedStyle = {
    ...springProps,
    padding: "20px",
    borderRadius: "8px",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <AnimatedDiv style={mergedStyle}>
      <Box textAlign="center" mb={4} fontSize="2xl">
        Count: {counter}
      </Box>
      <Button
        colorScheme="blue"
        mr={2}
        onClick={() => dispatch(incrementCounter())}
      >
        Increment
      </Button>
      <Button
        colorScheme="blue"
        mr={2}
        onClick={() => dispatch(decrementCounter())}
      >
        Decrement
      </Button>
      <Button colorScheme="red" onClick={() => dispatch(resetCounter())}>
        Reset
      </Button>
    </AnimatedDiv>
  );
};

export default AnimatedCounter;
