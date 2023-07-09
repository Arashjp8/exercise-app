import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import BodyPartMenuItem from "./BodyPartMenuItem";

interface Props {
  bodyParts: string[];
}

const BodyPartsMenu = ({ bodyParts }: Props) => {
  // const exercises = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
          {bodyParts.map((bodyPart) => (
            <BodyPartMenuItem key={bodyPart} bodyPart={bodyPart} />
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default BodyPartsMenu;
