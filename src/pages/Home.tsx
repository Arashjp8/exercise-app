import { VStack } from "@chakra-ui/react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <>
      <VStack>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </VStack>
    </>
  );
};

export default Home;
