import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { IoCall } from "react-icons/io5";
import { mobile } from "../responsive";
import { IoMailOpenSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Conteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactConteiner = styled.div`
  width: 95%;
  box-shadow: 2px 2px 4px 4px lightgray;
  height: auto;
  border-radius: 6px;
  margin-top: 12px;
`;
const ContactItemGeneralConteiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Header = styled.h1`
  font-size: 44px;
  color: #5271ff;
  font-weight: 550;
  text-align: center;
`;
const ContactItemConteiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
`;
const ContactTextHeader = styled.p`
  font-size: 52px;
  color: black;
  font-weight: 900;
  ${mobile({ fontSize: "34px" })}
`;
const ContactText = styled.a`
  text-decoration: none;
  color: black;
  font-size: 48px;
  font-weight: 700;
  padding: 20px;
  ${mobile({ fontSize: "34px" })}
`;
const Call = styled.button`
  background-color: gray;
  padding: 24px;
  border: 0px solid gray;
  width: 160px;
  color: white;
  font-size: 22px;
  background-color: #5271ff;
  &:hover {
    background-color: lightgray;
    transition: 1s;
    color: black;
  }
  ${mobile({ padding: "16px" })}
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

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <Conteiner>
      <Announcement />
      <a style={{ textDecoration: "none" }} href="/">
        <LogoConteiner>
          <h1>BBA</h1>
        </LogoConteiner>
      </a>
      <Navbar bg="white" />
      <ContactConteiner>
        <Header>{t("contact.0")}</Header>
        <ContactItemGeneralConteiner>
          <ContactItemConteiner>
            <ContactTextHeader>
              <IoCall />
            </ContactTextHeader>
            <ContactText>+90 507 783 81 92</ContactText>
            <Call>{t("contact.1")}</Call>
          </ContactItemConteiner>
          <ContactItemConteiner>
            <ContactTextHeader>
              <IoMailOpenSharp />
            </ContactTextHeader>
            <ContactText>bbabilisim@outlook</ContactText>
            <Call>{t("contact.2")}</Call>
          </ContactItemConteiner>
        </ContactItemGeneralConteiner>
      </ContactConteiner>
      <Footer></Footer>
    </Conteiner>
  );
};

export default Contact;
