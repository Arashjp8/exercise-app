import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import BodyPartsMenu from "./BodyPartsMenu";
import Exercise from "../interfaces/Exercise";
import ExerciseCard from "./ExerciseCard";

interface Props {
  exercises: Exercise[];
  setExercises: (value: Exercise[]) => void;
  bodyParts: string[];
}

const Exercises = ({ exercises, setExercises, bodyParts }: Props) => {
  useEffect(() => {}, []);
  return (
    <Box marginTop={10} width={"80%"} border={"1px solid gold"}>
      <BodyPartsMenu bodyParts={bodyParts} />
      <Text fontWeight={"800"} fontSize={"40px"} marginY={10}>
        Showing Results
      </Text>
      <SimpleGrid columns={3} spacing={"20px"}>
        {exercises.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Exercises;
