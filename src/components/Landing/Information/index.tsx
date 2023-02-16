import * as React from "react";
import styled from "@emotion/styled";
import AboutGame from "./AboutGame";
import Characters from "./Characters";

const Information = () => {
  return (
    <Container>
      <AboutGame />
      <Characters />
    </Container>
  );
};

export default Information;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
  position: relative;
  z-index: 6;
`;
