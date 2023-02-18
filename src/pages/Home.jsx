import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import TeamImg from "../img/casual.png";
import WebCreator from "../img/browser.png";
import Ecommerce from "../img/ecommerce.png";
import Footer from "../components/Footer";
import Security from "../img/security.png";
import { mobile } from "../responsive";
import CommunicationBar from "../components/CommunicationBar";
import { useTranslation } from "react-i18next";
import video from "../img/bgvideo.mp4";
const Conteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const FirstConteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 4px 4px lightgray;
  &:hover {
    box-shadow: 2px 2px 4px 4px gray;
    transition: 0.2s ease-in;
  }
  ${mobile({ height: "34vh" })}
`;
const SecondConteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 2px 4px 4px lightgray;
  &:hover {
    box-shadow: 2px 2px 4px 4px gray;
    transition: 0.2s ease-in;
  }
  background-color: white;
  ${mobile({ height: "34vh" })}
`;
const ImageConteiner = styled.div`
  width: 35%;
  height: 100%;
`;
const ImageTeam = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const TextConteiner = styled.div`
  width: 65%;
  height: 100%;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ padding: "2px" })}
`;
const HeaderOne = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #5271ff;
  letter-spacing: 4px;
  ${mobile({ fontSize: "16px", letterSpacing: "1px" })}
`;
const ParagraphOne = styled.p`
  font-size: 28px;
  color: gray;
  font-weight: 500;
  margin-top: 4px;
  letter-spacing: 1px;
  ${mobile({ fontSize: "14px", letterSpacing: "0px" })}
`;
const GoDetailButton = styled.button`
  width: 162px;
  height: 50px;
  background-color: #cbd4ff;
  border: 1px solid lightgray;
  margin-top: 16px;
  color: gray;
  font-size: 20px;
  font-weight: 500;

  :hover {
    box-shadow: 2px 2px 2px 2px gray;
    transition: 0.1s ease-in;
  }
  ${mobile({ fontSize: "10px", width: "82px", height: "24px" })}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  ${mobile({
    height: "42vh",
    fontSize: "18px",
  })}
  font-size: 64px;
`;
const VideoConteiner = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -3;
`;
const TypeConteiner = styled.div`
  z-index: -2;
  position: relative;
  text-align: center;
  color: #dc0000;

  color: white;
  font-size: 84px;

  ${mobile({ fontSize: "24px" })}
`;

const Header = styled.h1`
  color: #5271ff;
  z-index: -2;
  font-size: 154px;
  padding-bottom: 24px;

  ${mobile({ fontSize: "40px" })}
`;
const Button = styled.button`
  color: gray;
  background-color: transparent;
  font-size: 32px;
  font-weight: 500;
  border: 0px;
  border: 3px solid white;
  width: 232px;
  height: 68px;
  box-shadow: 4px 8px 44px 4px white;
  margin-top: 24px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    box-shadow: 16px 16px 56px 16px white;
  }
  ${mobile({
    height: "42px",
    fontSize: "14px",
    width: "162px",
    boxShadow: "4px 8px 44px 4px white",
  })}
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

const Home = () => {
  const { t, i18n } = useTranslation();
  const typ1 = t("type.1");
  const typ2 = t("type.2");
  const typ3 = t("type.3");
  const typ4 = t("type.4");
  return (
    <Conteiner>
      <CommunicationBar />
      <Announcement />

      <a style={{ textDecoration: "none" }} href="/">
        <LogoConteiner>
          <h1>BBA</h1>
        </LogoConteiner>
      </a>
      <Navbar />

      <FirstConteiner>
        <ImageConteiner>
          <ImageTeam src={TeamImg}></ImageTeam>
        </ImageConteiner>
        <TextConteiner>
          <HeaderOne>{t("homepage.card1.0")}</HeaderOne>
          <ParagraphOne>{t("homepage.card1.1")}</ParagraphOne>
        </TextConteiner>
      </FirstConteiner>
      <SecondConteiner>
        <ImageConteiner>
          <ImageTeam src={WebCreator}></ImageTeam>
        </ImageConteiner>
        <TextConteiner>
          <HeaderOne>{t("homepage.card2.0")}</HeaderOne>
          <ParagraphOne>{t("homepage.card2.1")}</ParagraphOne>

          <GoDetailButton>
            <a style={{ textDecoration: "none" }} href="/webdesign">
              {t("goDetailButton.0")}{" "}
            </a>
          </GoDetailButton>
        </TextConteiner>
      </SecondConteiner>
      <FirstConteiner>
        <ImageConteiner>
          <ImageTeam src={Ecommerce}></ImageTeam>
        </ImageConteiner>
        <TextConteiner>
          <HeaderOne>{t("homepage.card3.0")}</HeaderOne>
          <ParagraphOne>{t("homepage.card3.1")}</ParagraphOne>
          <GoDetailButton>
            <a style={{ textDecoration: "none" }} href="/ecommerce">
              {t("goDetailButton.0")}
            </a>
          </GoDetailButton>
        </TextConteiner>
      </FirstConteiner>
      <SecondConteiner>
        <ImageConteiner>
          <ImageTeam src={Security}></ImageTeam>
        </ImageConteiner>
        <TextConteiner>
          <HeaderOne>{t("homepage.card4.0")}</HeaderOne>
          <ParagraphOne>{t("homepage.card4.1")}</ParagraphOne>
        </TextConteiner>
      </SecondConteiner>
      <Footer />
    </Conteiner>
  );
};

export default Home;
