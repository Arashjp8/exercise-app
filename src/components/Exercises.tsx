import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import BodyPartsMenu from "./BodyPartsMenu";
import Exercise from "../interfaces/Exercise";
import ExerciseCard from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";
import { exerciseOptions, fetchData } from "../utils/fetchData";

interface Props {
  exercises: Exercise[];
  setExercises: (value: Exercise[]) => void;
  bodyParts: string[];
}

const Exercises = ({ exercises, setExercises, bodyParts }: Props) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
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

  useEffect(() => {
    const fetchDataAsync = async () => {
      let exerciseData: Exercise[];
      if (selectedBodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exerciseData);
    };
    fetchDataAsync();
  }, [selectedBodyPart]);

  return (
    <Box marginTop={10} width={"80%"} id="exercises">
      <BodyPartsMenu
        bodyParts={bodyParts}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      <Text fontWeight={"800"} fontSize={"40px"} marginY={10}>
        Showing Results
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={"50px"}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </SimpleGrid>
      <HStack
        marginTop={"100px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
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
