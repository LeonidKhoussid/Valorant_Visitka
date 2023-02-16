import * as React from "react";
import styled from "@emotion/styled";

const AboutGame = () => {
  return (
    <Container>
      <Content>
        Valorant — это тактический шутер с персонажами 5 на 5, разработанный
        Riot Games. Это бесплатная игра, в которой основное внимание уделяется
        интенсивной перестрелке, уникальным способностям агента и стратегической
        командной игре. У каждого персонажа есть свои уникальные способности и
        ультимативные способности, которые используются для получения
        преимущества над вражеской командой. Цель состоит в том, чтобы
        установить и обезвредить Спайк, специальную бомбу, которой может владеть
        только одна команда. Команда, которая успешно установит и защитит Шип,
        пока он не взорвется, побеждает в раунде.
      </Content>
    </Container>
  );
};

export default AboutGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`;

const Content = styled.div`
  padding: 0 1rem 0 4rem;
  font-size: 1.25rem;
  color: #ffffff;
  letter-spacing: 4px;
  line-height: 20px;
`;
