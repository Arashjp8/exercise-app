import { HStack, Image, MenuItem, StackItem, Text } from "@chakra-ui/react";
import Gym from "../assets/icons/gym.png";

interface Props {
  exercise: string;
}

const BodyPartCard = ({ exercise }: Props) => {
  return (
    <MenuItem key={exercise} padding={5}>
      <HStack justifyContent={"space-between"}>
        <StackItem marginRight={5}>
          <Image src={Gym} width={"32px"} height={"32px"} />
        </StackItem>
        <StackItem>
          <Text>{exercise}</Text>
        </StackItem>
      </HStack>
    </MenuItem>
  );
};

export default BodyPartCard;
