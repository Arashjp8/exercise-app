import { Box, Image, VStack, Text } from "@chakra-ui/react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box width={"100%"} backgroundColor={"#FFF3F4"} marginTop={"75px"}>
      <VStack alignItems={"center"} gap={"40px"} paddingTop={"24px"}>
        <Image src={Logo} />
        <Text
          as={"h5"}
          fontSize={"28px"}
          textAlign={"center"}
          paddingBottom={"40px"}
        >
          Arash Jafarpour's version of Golds-Gym
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
