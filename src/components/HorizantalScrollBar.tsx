import { animated, useSpring } from "@react-spring/web";
import BodyPartCard from "./BodyPartCard";
import RightArrow from "../assets/icons/right-arrow.png";
import LeftArrow from "../assets/icons/left-arrow.png";
import { Grid, HStack } from "@chakra-ui/react";
import "./HorizontalScrollBar.css";

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
    <HStack className="media-scroller snaps-inline">
      {exercises.map((exercise) => (
        <AnimatedDialog style={styles} exercise={exercise} key={exercise} />
      ))}
    </HStack>
  );
};

export default HorizantalScrollBar;
