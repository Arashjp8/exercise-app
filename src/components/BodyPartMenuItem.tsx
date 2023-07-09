import { HStack, Image, MenuItem, StackItem, Text } from "@chakra-ui/react";
import Gym from "../assets/icons/gym.png";

interface Props {
  bodyPart: string;
}

const BodyPartMenuItem = ({ bodyPart }: Props) => {
  return (
    <MenuItem key={bodyPart} padding={5}>
      <HStack justifyContent={"space-between"}>
        <StackItem marginRight={5}>
          <Image src={Gym} width={"32px"} height={"32px"} />
        </StackItem>
        <StackItem>
          <Text>{bodyPart}</Text>
        </StackItem>
      </HStack>
    </MenuItem>
  );
};

export default BodyPartMenuItem;
