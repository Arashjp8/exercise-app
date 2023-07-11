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
          <Card
            key={exercise.id}
            size={"lg"}
            width={"400px"}
            height={"445px"}
            marginBottom={5}
            borderTop={"4px solid #ff2625"}
            borderRadius={"none"}
            transform={"scale(1, 1)"}
            transition={"0.3s all ease-in-out"}
            _hover={{ transform: "scale(1.1, 1.1)" }}
          >
            <CardHeader>
              <Image
                marginLeft={"50px"}
                height={"226px"}
                src={exercise.gifUrl}
                alt={exercise.name}
                loading="lazy"
              />
            </CardHeader>
            <CardBody>
              <HStack marginBottom={5}>
                <Button
                  colorScheme="pink"
                  marginRight={2}
                  borderRadius={"full"}
                  fontSize={"14px"}
                  textTransform={"capitalize"}
                >
                  {exercise.target}
                </Button>
                <Button
                  colorScheme="yellow"
                  borderRadius={"full"}
                  fontSize={"14px"}
                  textTransform={"capitalize"}
                >
                  {exercise.bodyPart}
                </Button>
              </HStack>
              <Text fontWeight={"600"} fontSize={"24px"}>
                {exercise.name}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Exercises;
