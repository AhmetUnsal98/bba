import React, { useState } from "react";
import styled from "styled-components";

import { mobile } from "../responsive";
// import component 👇
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Conteiner = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #5271ff;
  margin-top: 12px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${(props) => props.bg === "white" && "#5271ff"};
  ${mobile({
    height: "12vh",
    width: "100%",
    justifyContent: "space-between",
    background: "rgb(255,255,255)",
    background:
      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
  })}
`;
const LogoConteiner = styled.div`
  flex: 1;

  display: none;
  cursor: pointer;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "14px",
  })}
`;
const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: flex;
`;
const MenuConteiner = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  ${mobile({ display: "none" })}
`;

const MenuItemText = styled.p`
  font-size: 30px;
  color: white;
  font-weight: 700;
  letter-spacing: 0.1rem;
  flex: 1;
  text-align: center;
  cursor: pointer;
  ${mobile({ fontSize: "8px" })}
  :hover {
    color: black;
    transition: 0.5s;
  }
`;
const Language = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 12px;
`;

const LanguageText = styled.p`
  font-size: 24px;
  color: white;
  cursor: pointer;
  ${mobile({ fontSize: "9px" })}
`;

const DrawerMenuIcon = styled.div`
  flex: 1;
  display: none;

  ${mobile({ display: "flex" })}
`;
const ServicesOpenerMenu = styled.div`
  background-color: white;
  display: none;
  z-index: 2;
  flex-direction: column;
  position: absolute;
  height: auto;
  :hover {
    border-radius: 22px;
    color: white;
    transition: all 2s;
  }
`;
const DropDownMenuItem = styled.div`
  :hover {
    background-color: gray;
    transition: all 1s;
  }
`;
const DropDownMenuItemText = styled.p`
  padding: 14px;
  color: black;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
`;
const MenuItem = styled.div`
  flex: 1;
  position: relative;

  &:hover ${ServicesOpenerMenu} {
    display: flex;
    width: 100%;
    height: auto;
  }
  ${mobile({ paddingLeft: "10px" })}
`;
const Blanker = styled.div`
  ${mobile({ flex: "1", visibility: "hidden" })};
`;
const DrawerService = styled.p`
  padding: 12px;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const DrawerDropDown = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
`;
const Navbar = ({ bg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerDropDown, setDrawerDropDown] = useState("none");
  const [stickyClass, setStickyClass] = useState("");
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawerDropDown = () => {
    if (drawerDropDown == "none") {
      setDrawerDropDown("flex");
    } else {
      setDrawerDropDown("none");
    }
  };
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    window.location.reload(false);
  };

  return (
    <Conteiner bg={bg}>
      <Blanker></Blanker>

      <LogoConteiner></LogoConteiner>

      <Drawer
        style={{
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <a style={{ textDecoration: "none" }} href="/">
          <p
            style={{
              padding: "12px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            {t("homeNav.0")}
          </p>
        </a>

        <DrawerService
          onClick={() => {
            toggleDrawerDropDown();
          }}
        >
          {t("servicesNav.0")}
        </DrawerService>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DrawerDropDown style={{ display: drawerDropDown }}>
            <a
              style={{
                textDecoration: "none",
                padding: "12px",
                color: "black",
                fontWeight: "550",
              }}
              href="/webdesign"
            >
              {t("webdesignNav.0")}
            </a>
            <a
              style={{
                textDecoration: "none",
                padding: "12px",
                color: "black",
                fontWeight: "550",
              }}
              href="/ecommerce"
            >
              {t("ecommerceNav.0")}
            </a>
            <a
              style={{
                textDecoration: "none",
                padding: "12px",
                color: "black",
                fontWeight: "550",
              }}
              href="/restaurant"
            >
              {t("restaurantNav.0")}
            </a>
            <a
              style={{
                textDecoration: "none",
                padding: "12px",
                color: "black",
                fontWeight: "550",
              }}
              href="/graphicdesign"
            >
              {t("graphNav.0")}
            </a>
          </DrawerDropDown>
        </div>

        <a style={{ textDecoration: "none" }} href="/aboutus">
          <p
            style={{
              padding: "12px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            {t("aboutusNav.0")}
          </p>
        </a>
        <a style={{ textDecoration: "none" }} href="/contact">
          <p
            style={{
              padding: "12px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            {t("contactNav.0")}
          </p>
        </a>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Language
            style={{ backgroundColor: language === "en" ? "gray" : null }}
          >
            <LanguageText onClick={() => handleClick("en")}>EN</LanguageText>
          </Language>
          <Language
            style={{
              marginLeft: "6px",
              backgroundColor: language === "tr" ? "gray" : null,
            }}
          >
            <LanguageText onClick={() => handleClick("tr")}>TR</LanguageText>
          </Language>
        </div>
      </Drawer>
      <MenuConteiner>
        <MenuItem>
          <a style={{ textDecoration: "none" }} href="/">
            <MenuItemText>{t("homeNav.0")}</MenuItemText>
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ textDecoration: "none" }} href="/contact">
            <MenuItemText>{t("servicesNav.0")}</MenuItemText>
            <ServicesOpenerMenu>
              <DropDownMenuItem>
                <a style={{ textDecoration: "none" }} href="/webdesign">
                  <DropDownMenuItemText>
                    {t("webdesignNav.0")}
                  </DropDownMenuItemText>
                </a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a style={{ textDecoration: "none" }} href="/ecommerce">
                  <DropDownMenuItemText>
                    {t("ecommerceNav.0")}
                  </DropDownMenuItemText>
                </a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a style={{ textDecoration: "none" }} href="/restaurant">
                  <DropDownMenuItemText>
                    {t("restaurantNav.0")}
                  </DropDownMenuItemText>
                </a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a style={{ textDecoration: "none" }} href="/graphicdesign">
                  <DropDownMenuItemText>{t("graphNav.0")}</DropDownMenuItemText>
                </a>
              </DropDownMenuItem>
            </ServicesOpenerMenu>
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ textDecoration: "none" }} href="/aboutus">
            <MenuItemText>{t("aboutusNav.0")}</MenuItemText>
          </a>
        </MenuItem>

        <MenuItem>
          <a style={{ textDecoration: "none" }} href="/contact">
            <MenuItemText>{t("contactNav.0")}</MenuItemText>{" "}
          </a>
        </MenuItem>

        <Language
          style={{
            backgroundColor: language === "en" ? "gray" : "graytransparent",
          }}
          onClick={() => {
            handleClick("en");
          }}
        >
          <LanguageText>EN</LanguageText>
        </Language>

        <Language
          style={{
            backgroundColor: language === "tr" ? "gray" : "graytransparent",
          }}
          onClick={() => {
            handleClick("tr");
          }}
        >
          <LanguageText>TR</LanguageText>
        </Language>
      </MenuConteiner>

      <DrawerMenuIcon>
        <IoMenu
          style={{ marginLeft: "auto", marginRight: "4px" }}
          size={35}
          color="black"
          onClick={toggleDrawer}
        />
      </DrawerMenuIcon>
    </Conteiner>
  );
};

export default Navbar;
