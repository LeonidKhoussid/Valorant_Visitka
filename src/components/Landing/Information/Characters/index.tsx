import * as React from "react";
import styled from "@emotion/styled";
import characters from "../../../../stock/characters";
import Character from "./Character";

const Characters = () => {
  return (
    <Container>
      <WordsAbove>The main characters</WordsAbove>
      <CharactersContainer>
        {characters.slice(0, 5).map((character) => (
          <Character character={character} />
        ))}
      </CharactersContainer>
      <CharactersContainer>
        {characters.slice(5).map((character) => (
          <Character character={character} />
        ))}
      </CharactersContainer>
    </Container>
  );
};

export default Characters;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  position: relative;
  z-index: 6;
`;

const CharactersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 6;
`;

const WordsAbove = styled.div`
  color: #ffffff;
  letter-spacing: 10px;
  font-size: 2rem;
`;
