import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import BodyPartsMenu from "./BodyPartsMenu";
import Exercise from "../interfaces/Exercise";
import ExerciseCard from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";

interface Props {
  exercises: Exercise[];
  setExercises: (value: Exercise[]) => void;
  bodyParts: string[];
}

const Exercises = ({ exercises, setExercises, bodyParts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  useEffect(() => {}, []);
  return (
    <Box
      // alignItems={"flex-start"}
      marginTop={10}
      width={"80%"}
      border={"1px solid gold"}
    >
      <BodyPartsMenu bodyParts={bodyParts} />
      <Text fontWeight={"800"} fontSize={"40px"} marginY={10}>
        Showing Results
      </Text>
      <SimpleGrid columns={3} spacing={"50px"}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </SimpleGrid>
      <HStack marginTop={10} alignItems={"center"} justifyContent={"center"}>
        {exercises.length > 9 && (
          <Pagination
            color={"secondary"}
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </HStack>
    </Box>
  );
};

export default Exercises;
