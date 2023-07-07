import { StackItem, VStack } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <>
      <VStack
        width={"400px"}
        sx={{ xl: "1488px" }}
        margin={"auto"}
        flexDirection={"column"}
      >
        <StackItem marginLeft={{ base: "none", xl: "-260%" }} paddingX={2}>
          <Navbar />
        </StackItem>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </VStack>
    </>
  );
}

export default App;
