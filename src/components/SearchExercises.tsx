import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

const SearchExercises = () => {
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
        ></Input>
        <InputRightElement>
          <Button paddingY={8} paddingX={10} colorScheme="red" fontSize={"xl"}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
};

export default SearchExercises;
