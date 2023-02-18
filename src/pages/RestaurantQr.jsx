import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import CommunicationBar from "../components/CommunicationBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import menuqr from "../img/menuqr.jpg";
import restaurant from "../img/restaurant.png";
import menu from "../img/menu.jpg";
import { useTranslation } from "react-i18next";
const Conteiner = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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

  align-items: center;
  width: 95%;
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
  padding-bottom: 10px;
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

const RestaurantQr = () => {
  const { t, i18n } = useTranslation();
  return (
    <Conteiner>
      <Announcement />
      <CommunicationBar />
      <LogoConteiner>
        <a style={{ textDecoration: "none" }} href="/">
          <h1>BBA</h1>
        </a>
      </LogoConteiner>
      <Navbar bg="white" />
      <CardsConteiner>
        <Card>
          <CardImageConteiner>
            <Image src={menu} />
          </CardImageConteiner>
          <CardHeaderConteiner>
            <CardHeader>{t("qr.card1.0")}</CardHeader>
          </CardHeaderConteiner>
          <CardParagraphConteiner>
            <Paragraph>{t("qr.card1.1")}</Paragraph>
          </CardParagraphConteiner>
        </Card>
        <Card>
          <CardImageConteiner>
            <Image src={restaurant} />
          </CardImageConteiner>
          <CardHeaderConteiner>
            <CardHeader>{t("qr.card2.0")}</CardHeader>
          </CardHeaderConteiner>
          <CardParagraphConteiner>
            <Paragraph>{t("qr.card2.1")}</Paragraph>
          </CardParagraphConteiner>
        </Card>
        <Card>
          <CardImageConteiner>
            <Image src={menuqr} />
          </CardImageConteiner>
          <CardHeaderConteiner>
            <CardHeader>{t("qr.card3.0")}</CardHeader>
          </CardHeaderConteiner>
          <CardParagraphConteiner>
            <Paragraph>{t("qr.card3.1")}</Paragraph>
          </CardParagraphConteiner>
        </Card>
      </CardsConteiner>
      <Footer />
    </Conteiner>
  );
};

export default RestaurantQr;
