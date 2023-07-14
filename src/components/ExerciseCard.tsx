import {
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
} from "@chakra-ui/react";
import Exercise from "../interfaces/Exercise";

interface Props {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: Props) => {
  return (
    <>
      <Card
        key={exercise.id}
        size={"lg"}
        width={"400px"}
        height={"445px"}
        cursor={"pointer"}
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
    </>
  );
};

export default ExerciseCard;
