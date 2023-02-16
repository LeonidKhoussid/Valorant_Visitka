import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Header from "./Header";
import Information from "./Information";

const Landing = () => {
  return (
    <Container>
      <Clouds />
      <FogLow />
      <Header />
      <Information />
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(./hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  z-index: 4;
`;

const animateClouds = keyframes`
    from {
        right: -600px;
    }
    to {
        right: 100px;
    }
`;

const animateFogLow = keyframes`
    from {
        right: -300px;
    }
    to {
        right: 100px;
    }
`;

const Clouds = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(./clouds.webp);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  animation: ${animateClouds} 60s linear infinite;
  filter: blur(10px);
  transform: scale(2);
  z-index: 5;
`;

const FogLow = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(./fog-low.webp);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  animation: ${animateFogLow} 60s linear infinite;
  box-shadow: 0 0 8px 8px transparent inset;
  filter: blur(10px);
  transform: scale(2);
  z-index: 5;
`;
