import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import { useState } from "react";
import Exercise from "../interfaces/Exercise";

interface Props {
  exercises: Exercise[];
  setExercises: (value: Exercise[]) => void;
}

const SearchExercises = ({ setExercises }: Props) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    let exerciseData: Exercise[];
    if (search) {
      exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

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
  );
};

export default SearchExercises;
