import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import BodyPartMenuItem from "./BodyPartMenuItem";

interface Props {
  bodyParts: string[];
  setSelectedBodyPart: (value: string) => void;
}

const BodyPartsMenu = ({ bodyParts, setSelectedBodyPart }: Props) => {
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
            <BodyPartMenuItem
              key={bodyPart}
              bodyPart={bodyPart}
              setSelectedBodyPart={setSelectedBodyPart}
            />
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default BodyPartsMenu;
