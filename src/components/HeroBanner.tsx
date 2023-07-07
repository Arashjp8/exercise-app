import {
  Button,
  HStack,
  Image,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <>
      <HStack
        marginTop={{ base: "100px", xl: "212px" }}
        marginLeft={"50px"}
        padding={"20px"}
      >
        <StackItem marginRight={"150%"} marginLeft={5}>
          <VStack justifyContent={"center"} alignItems={"flex-start"}>
            <Text fontWeight={"600"} fontSize={"26px"} color={"#ff2625"}>
              Fitness Club
            </Text>
            <Text fontWeight={"800"} fontSize={"40px"} marginY={5}>
              Sweat, Smile <br /> And Repeat
            </Text>
            <Text fontSize={"22px"} lineHeight={"35px"} fontFamily={"Alegreya"}>
              Check out the most effective exercises
            </Text>
            <Button
              variant={"solid"}
              colorScheme="red"
              padding={"15px 10px"}
              marginY={"40px"}
              cursor={"pointer"}
              size={"lg"}
            >
              Explore Exercises
            </Button>
            <Text
              color={"#ff2625"}
              opacity={"0.1"}
              fontWeight={"600"}
              display={{ base: "none", xl: "block" }}
              fontSize={"170px"}
              zIndex={-1}
            >
              Exercise
            </Text>
          </VStack>
        </StackItem>
        <StackItem
          width={"700px"}
          height={"900px"}
          marginTop={"-30%"}
          marginLeft={"-154%"}
          display={{ base: "none", xl: "block" }}
        >
          <Image src={Banner} alt="banner" />
        </StackItem>
      </HStack>
    </>
  );
};

export default HeroBanner;
