import * as React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <Title>VALORANT</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`;

const Title = styled.div`
  font-size: 6rem;
  color: #ffffff;
  letter-spacing: 20px;
`;
