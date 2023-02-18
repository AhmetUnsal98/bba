import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Digital from "../img/digital.png";
import Responsive from "../img/responsive.png";
import Software from "../img/software.png";
import Wireframe from "../img/wireframe.png";
import Payback from "../img/payback.png";
import questions from "../Faq.json";
import trquest from "../FaqTr.json";
import Banner from "../Banner";

import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import CommunicationBar from "../components/CommunicationBar";
import { useTranslation } from "react-i18next";
const Conteiner = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const FirstConteiner = styled.div`
  width: 100%;
  height: 58vh;
  z-index: -1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 4px 4px lightgray;
  &:hover {
    box-shadow: 2px 2px 4px 4px gray;
    transition: 0.2s ease-in;
  }
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
  color: black;
  font-weight: 500;
  margin-top: 4px;
  letter-spacing: 1px;
  ${mobile({ fontSize: "14px", letterSpacing: "0px" })}
`;
const CardsConteiner = styled.div`
  width: 65%;
  height: auto;
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const CardConteiner = styled.div`
  flex: 1;
  background-color: white;

  box-shadow: 2px 2px 4px 4px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px;
  &:hover {
    box-shadow: 2px 2px 4px 4px gray;
    transition: 0.2s ease-in;
  }
`;
const CardImageConteiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const CardTitleConteiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: black;
  letter-spacing: 2px;
  ${mobile({ fontSize: "14px" })}
`;
const FaqTitle = styled.h1`
  font-size: 38px;
  font-weight: 650;
  text-align: center;
  margin-top: 12px;
  ${mobile({ fontSize: "24px" })}
`;
const GiveOrderButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: #5271ff;
  color: white;
  font-size: 24px;
  border: 1px solid white;
  border-radius: 6px;
  margin-top: 12px;
  cursor: pointer;
  ${mobile({ fontSize: "14px", width: "100px", height: "30px" })}
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

const WebDesign = () => {
  const { t, i18n } = useTranslation();
  var questiones = {};
  console.log(t("faq.0"));
  if (t("faq.0") === "tr") {
    questiones = trquest;
  } else {
    questiones = questions;
  }
  console.log(questiones);
  return (
    <Conteiner>
      <CommunicationBar />
      <Announcement />
      <a style={{ textDecoration: "none" }} href="/">
        <LogoConteiner>
          <h1>BBA</h1>
        </LogoConteiner>
      </a>
      <Navbar bg="white" />
      <FirstConteiner>
        <ImageConteiner>
          <ImageTeam src={Digital}></ImageTeam>
        </ImageConteiner>
        <TextConteiner>
          <HeaderOne>{t("webdesign.card1.0")}</HeaderOne>
          <ParagraphOne>{t("webdesign.card1.1")}</ParagraphOne>

          <GiveOrderButton>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="/contact"
            >
              {t("webdesign.orderButton.0")}{" "}
            </a>
          </GiveOrderButton>
        </TextConteiner>
      </FirstConteiner>
      <CardsConteiner>
        <CardConteiner>
          <CardImageConteiner>
            <CardImage src={Responsive}></CardImage>
          </CardImageConteiner>
          <CardTitleConteiner>
            <CardTitle>{t("box.0")}</CardTitle>
          </CardTitleConteiner>
        </CardConteiner>
        <CardConteiner>
          <CardImageConteiner>
            <CardImage src={Software}></CardImage>
          </CardImageConteiner>
          <CardTitleConteiner>
            <CardTitle>{t("box.1")}</CardTitle>
          </CardTitleConteiner>
        </CardConteiner>
        <CardConteiner>
          <CardImageConteiner>
            <CardImage src={Wireframe}></CardImage>
          </CardImageConteiner>
          <CardTitleConteiner>
            <CardTitle>{t("box.2")}</CardTitle>
          </CardTitleConteiner>
        </CardConteiner>
      </CardsConteiner>

      <FirstConteiner style={{ flexDirection: "row-reverse" }}>
        <ImageConteiner>
          <ImageTeam src={Payback}></ImageTeam>
        </ImageConteiner>
        <TextConteiner>
          <HeaderOne>{t("webdesign.card2.0")}</HeaderOne>
          <ParagraphOne>{t("webdesign.card2.1")}</ParagraphOne>
        </TextConteiner>
      </FirstConteiner>

      <Banner>
        <FaqTitle>{t("faq.1")}</FaqTitle>

        {questiones.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
      </Banner>

      <Footer />
    </Conteiner>
  );
};

export default WebDesign;
