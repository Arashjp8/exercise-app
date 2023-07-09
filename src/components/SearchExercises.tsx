import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import { useEffect, useState } from "react";
import HorizantalScrollBar from "./HorizantalScrollBar";

interface Exercise {
  id: number;
  name: string;
  gifUrl: string;
  bodyPart: string;
  target: string;
  equipment: string;
}

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);

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
  console.log(bodyParts);

  const handleSearch = async () => {
    let exerciseData: Exercise[];
    if (search) {
      exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exerciseData);

      const searchedExercises: Exercise[] = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <VStack>
      <StackItem>
        <VStack>
          <Text
            textAlign={"center"}
            fontWeight={"800"}
            fontSize={"40px"}
            marginTop={"100px"}
          >
            Awesome Exercises <br /> You Should Know
          </Text>
          <InputGroup
            marginY={10}
            width={{ md: "400px", lg: "960px", xl: "1200px" }}
            size={"xl"}
          >
            <Input
              placeholder="Search Exercise"
              fontSize={"xl"}
              paddingY={4}
              paddingX={5}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
            <InputRightElement>
              <Button
                onClick={handleSearch}
                paddingY={8}
                paddingX={10}
                colorScheme="red"
                fontSize={"xl"}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </StackItem>
      <StackItem>
        <HorizantalScrollBar />
      </StackItem>
    </VStack>
  );
};

export default SearchExercises;
