import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import HorizantalScrollBar from "./HorizantalScrollBar";

const Exercises = () => {
  useEffect(() => {}, []);
  return (
    <Box width={"80%"} height={"500px"} border={"1px solid gold"}>
      <HorizantalScrollBar />
      <Text>exercises</Text>
    </Box>
  );
};

export default Exercises;
