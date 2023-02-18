import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { mobile } from "../responsive";

const Conteiner = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Header = styled.p`
  color: black;
  font-size: 4rem;
  margin-top: 1rem;
  font-weight: 500;
  border-bottom: 1px solid lightgray;
  ${mobile({ fontSize: "2rem" })}
`;
const LogoConteiner = styled.div`
  width: 100vw;
  height: 12vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const Paragraph = styled.div`
  color: black;
  font-size: 34px;
  margin-top: 3rem;
  ${mobile({ fontSize: "18px", marginTop: "1rem" })}
  width: auto;
  letter-spacing: 0.1rem;
`;
const Aboutus = () => {
  const { t, i18n } = useTranslation();
  return (
    <Conteiner>
      <Announcement />
      <a style={{ textDecoration: "none" }} href="/">
        <LogoConteiner>
          <h1>BBA</h1>
        </LogoConteiner>
      </a>
      <Navbar />
      <div
        style={{
          width: "70%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "24px",
        }}
      >
        <Header>{t("aboutus.0")}</Header>
        <Paragraph>{t("aboutus.1")}</Paragraph>
      </div>
      <Footer />
    </Conteiner>
  );
};

export default Aboutus;
