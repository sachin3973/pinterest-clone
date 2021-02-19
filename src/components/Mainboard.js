import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function MainBoard() {
  return (
    <Wrapper>
      <Container>
        <Pin />
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
  height: 300px;
  width: 80%;
`;
