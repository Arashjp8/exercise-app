import { VStack } from "@chakra-ui/react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useEffect, useState } from "react";
import Exercise from "../interfaces/Exercise";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Home = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const exerciseData: Exercise[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exerciseData);
    };
    fetchDataAsync();
  }, []);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  return (
    <>
      <VStack>
        <HeroBanner />
        <SearchExercises exercises={exercises} setExercises={setExercises} />
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyParts={bodyParts}
        />
      </VStack>
    </>
  );
};

export default Home;
