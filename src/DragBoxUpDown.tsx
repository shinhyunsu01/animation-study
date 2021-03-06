import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1, rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function App() {
  const x = useMotionValue(0);
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    potato.onChange(() => console.log(potato.get()));
  }, [x]);
  return (
    <Wrapper>
      <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
