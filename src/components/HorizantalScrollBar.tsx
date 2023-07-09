import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import BodyPartCard from "./BodyPartCard";

const HorizantalScrollBar = () => {
  const exercises = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <>
      <Menu>
        <MenuButton
          fontSize={"xl"}
          fontWeight={"600"}
          paddingX={5}
          paddingY={6}
          colorScheme="red"
          as={Button}
        >
          Target Body Part
        </MenuButton>
        <MenuList>
          {exercises.map((exercise) => (
            <BodyPartCard exercise={exercise} />
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default HorizantalScrollBar;
