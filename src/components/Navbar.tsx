import { Link } from "react-router-dom";
import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <HStack
      gap={"40px"}
      justifyContent={"space-around"}
      alignItems={"center"}
      marginTop={10}
    >
      <Link to={"/"}>
        <Image
          src={Logo}
          alt="logo"
          width={"48px"}
          height={"48px"}
          margin={"0 20px"}
        />
      </Link>
      <HStack gap={"40px"} fontSize={"24px"} alignItems={"flex-end"}>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>
      </HStack>
    </HStack>
  );
};

export default Navbar;
