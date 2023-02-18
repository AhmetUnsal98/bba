import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import brush from "../img/brush.png";
import videocam from "../img/videocam.png";
import social from "../img/social.png";
import { mobile } from "../responsive";
import { useTranslation } from "react-i18next";
const Conteiner = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
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
const Logo = styled.img`
  width: 100%;
  height: 294px;
  object-fit: contain;
  padding-bottom: 10px;
  ${mobile({ display: "none", alignItems: "center", justifyContent: "center" })}
`;
const CardsConteiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  align-items: center;
  height: auto;
  z-index: 1;
  ${mobile({ flexDirection: "column" })}
  overflow: hidden;
`;
const Card = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  margin: 12px;

  cursor: pointer;
  box-shadow: 8px 8px 8px 8px gray;
  :hover {
    background-color: lightgray;
    transition: 1s;
  }
`;
const CardImageConteiner = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  padding-top: 12px;
`;
const CardHeaderConteiner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;
const CardParagraphConteiner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;
const CardHeader = styled.h1`
  color: black;
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  ${mobile({ fontSize: "32px" })}
`;
const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: fill;
  border-radius: 4px;
`;
const Paragraph = styled.p`
  font-size: 32px;
  font-weight: 500;
  color: black;
  text-align: center;
  ${mobile({ fontSize: "22px" })}
`;

const GraphicDesign = () => {
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
      <CardsConteiner>
        <Card>
          <CardImageConteiner>
            <Image src={brush} />
          </CardImageConteiner>
          <CardHeaderConteiner>
            <CardHeader>{t("graph.card1.0")}</CardHeader>
          </CardHeaderConteiner>
          <CardParagraphConteiner>
            <Paragraph>{t("graph.card1.1")}</Paragraph>
          </CardParagraphConteiner>
        </Card>
        <Card>
          <CardImageConteiner>
            <Image src={social} />
          </CardImageConteiner>
          <CardHeaderConteiner>
            <CardHeader>{t("graph.card2.0")}</CardHeader>
          </CardHeaderConteiner>
          <CardParagraphConteiner>
            <Paragraph>{t("graph.card2.1")}</Paragraph>
          </CardParagraphConteiner>
        </Card>
        <Card>
          <CardImageConteiner>
            <Image src={videocam} />
          </CardImageConteiner>
          <CardHeaderConteiner>
            <CardHeader>{t("graph.card3.0")}</CardHeader>
          </CardHeaderConteiner>
          <CardParagraphConteiner>
            <Paragraph>{t("graph.card3.1")}</Paragraph>
          </CardParagraphConteiner>
        </Card>
      </CardsConteiner>
      <Footer />
    </Conteiner>
  );
};

export default GraphicDesign;
