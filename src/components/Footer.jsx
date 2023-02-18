import styled from "styled-components";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoMailOpenSharp } from "react-icons/io5";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  border-top: 1px solid lightgray;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Copyright = styled.div`
  width: auto;
  height: 2vh;
  background-color: transparent;
`;
const CopyrightText = styled.p`
  color: black;
  font-size: 16px;
`;
const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Left>
          <Logo>BBA IT</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <IoLogoFacebook size={35} />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <IoLogoInstagram size={35} />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <IoLogoTwitter size={35} />
            </SocialIcon>
            <SocialIcon color="E60023">
              <IoLogoPinterest size={35} />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Web Design</ListItem>
            <ListItem>E-Commerce</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <IoCall size={25} />
            <Desc style={{ marginLeft: "8px" }}>+90 507 783 81 92</Desc>
          </ContactItem>
          <ContactItem>
            <IoMailOpenSharp size={25} />
            <Desc style={{ marginLeft: "8px" }}>bbabilisim@outlook.com</Desc>
          </ContactItem>
        </Right>
      </Container>
      <Copyright>
        <CopyrightText>
          Copyright © 2022 BBA BILISIM All rights reserved.
        </CopyrightText>
      </Copyright>
    </div>
  );
};

export default Footer;
