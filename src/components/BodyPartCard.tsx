import { Image, StackItem, VStack } from "@chakra-ui/react";
import Gym from "../assets/icons/gym.png";

interface Props {
  exercise: string;
}

const BodyPartCard = ({ exercise }: Props) => {
  return (
    <VStack
      // margin={"0 40px"}
      className="bodyPart-card"
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"blackAlpha"}
      sx={{
        backgroundColor: "#fff",
        border: "1px solid black",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <StackItem>
        <Image src={Gym} width={"48px"} height={"48px"} />
      </StackItem>
      <StackItem>{exercise}</StackItem>
    </VStack>
  );
};

export default BodyPartCard;
