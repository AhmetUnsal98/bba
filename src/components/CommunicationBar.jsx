import React from "react";
import styled from "styled-components";
import { IoCall, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const ConteinerWp = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 3px 4px 3px #999;
  right: 15px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    width: 55px;
    height: 55px;
    transition: 1s;
  }
  ${mobile({ width: "40px", height: "40px" })}
`;
const ConteinerInstagram = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 100px;
  background-color: #bc2a8d;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 3px 4px 3px #999;
  right: 15px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    width: 55px;
    height: 55px;
    transition: 1s;
  }
  ${mobile({ width: "40px", height: "40px" })}
`;
const ConteinerPhone = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 158px;
  background-color: gray;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 3px 4px 3px #999;
  right: 15px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    width: 55px;
    height: 55px;
    transition: 1s;
  }
  ${mobile({ width: "40px", height: "40px" })}
`;
const CommunicationBar = () => {
  return (
    <div style={{ display: "flex", height: "auto" }}>
      <a href="">
        <ConteinerWp>
          <IoLogoWhatsapp color="white" />
        </ConteinerWp>
      </a>
      <a href="h">
        <ConteinerInstagram>
          <IoLogoInstagram />
        </ConteinerInstagram>
      </a>
      <a href="">
        <ConteinerPhone>
          <IoCall />
        </ConteinerPhone>
      </a>
    </div>
  );
};

export default CommunicationBar;
