import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import BodyPartsMenu from "./BodyPartsMenu";
import Exercise from "../interfaces/Exercise";

interface Props {
  exercises: Exercise[];
  setExercises: (value: Exercise[]) => void;
  bodyParts: string[];
}

const Exercises = ({ exercises, setExercises, bodyParts }: Props) => {
  useEffect(() => {}, []);
  return (
    <Box
      marginTop={10}
      width={"80%"}
      height={"500px"}
      border={"1px solid gold"}
    >
      <BodyPartsMenu bodyParts={bodyParts} />
      {/* {exercises.map((exercise) => (
        <Text>{exercise.name}</Text>
      ))} */}
    </Box>
  );
};

export default Exercises;
