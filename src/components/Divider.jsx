import React from "react";
import styled from "styled-components";
const Conteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;
const Inner = styled.div`
  width: 70%;
  height: 1px;
  background-color: lightgray;
`;
const Divider = () => {
  return (
    <Conteiner>
      <Inner />
    </Conteiner>
  );
};

export default Divider;
