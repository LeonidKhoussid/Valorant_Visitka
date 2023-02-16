import * as React from "react";
import styled from "@emotion/styled";
import { TCharacter } from "../../../../stock/characters";

interface CharacterProps {
  character: TCharacter;
}
const Character: React.FC<CharacterProps> = ({
  character: { characterImageUrl, characterInformationUrl, characterName },
}) => {
  const handleClick = React.useCallback(() => {
    window.open(characterInformationUrl, "_blank");
  }, []);

  return (
    <Container characterImageUrl={characterImageUrl} onClick={handleClick}>
      {characterName}
    </Container>
  );
};

export default Character;

const Container = styled.div<{ characterImageUrl: string }>`
  ${({ characterImageUrl }) => `
        background-image: url(${characterImageUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: -50px 0px;
        width: 100px;
        height: 100px;
        margin: 0.5rem;
        position: relative;
        z-index: 7;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    `}
`;
