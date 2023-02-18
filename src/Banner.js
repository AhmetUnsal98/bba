import React, { useState } from "react";
import { mobile } from "./responsive";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  width: 100%;
`;
const Entity = styled.div`
  color: white;
  height: auto;
  width: 100%;
`;
const Inner = styled.div`
  padding: 75px 40px;
  width: 100%;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
const Question = styled.div`
  font-size: 28px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: lightgray;
  padding: 16px;
  align-items: center;
  font-weight: 500;
  &:hover {
    color: black;
    transition: 1s;
  }
  ${mobile({ fontSize: "16px" })}
`;
const Text = styled.p`
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: 500;
  line-height: normal;
  color: black;

  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
const Header = styled.h1`
  color: #070707;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 45px;
  margin-bottom: 9px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 33px;
  }
  color: #070707;
`;
const QuestionContext = React.createContext();
export default function Banner({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Banner.Header = function BannerHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Banner.Entity = function BannerEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Banner.Question = function BannerHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h3>^</h3> : <h3>+</h3>}
    </Question>
  );
};
Banner.Text = function BannerText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);

  return open ? <Text {...restProps}>{children}</Text> : null;
};
