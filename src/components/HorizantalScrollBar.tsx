import { animated, useSpring } from "@react-spring/web";
import "../components/Horizantal.css";
import BodyPartCard from "./BodyPartCard";
import RightArrow from "../assets/icons/right-arrow.png";
import LeftArrow from "../assets/icons/left-arrow.png";
import { HStack } from "@chakra-ui/react";

const HorizantalScrollBar = () => {
  const exercises = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const AnimatedDialog = animated(BodyPartCard);
  const styles = useSpring({
    from: {
      transform: "perspective(500px) rotateY(0deg)",
    },
    transform: "perspective(500px) rotateY(25deg)",
  });

  return (
    // <div className="container">

    <HStack>
      {exercises.map((exercise) => (
        <AnimatedDialog style={styles} exercise={exercise} key={exercise} />
      ))}
    </HStack>
    // </div>
  );
};

export default HorizantalScrollBar;
