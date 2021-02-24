import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./Mainboard.css";

function MainBoard(props) {
  let { pins } = props;

  return (
    <Wrapper>
      <Container className="mainboard__container">
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default MainBoard;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 50px;
  justify-content: center;
`;

const Container = styled.div`
  column-count: 5;
  column-gap: 10px;
  margin: 0 auto;
  height: 100%;
  max-width: 1260px;
`;
