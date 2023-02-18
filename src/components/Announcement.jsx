import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useTranslation } from "react-i18next";
const Conteiner = styled.div`
  width: 100%;
  height: auto;
  background-color: #5271ff;
  margin: 0;
`;
const Text = styled.div`
  font-size: 18px;
  color: white;
  font-weight: 400;
  text-align: center;
  padding: 4px;
  ${mobile({ fontSize: "12px" })}
`;

const Announcement = () => {
  const { t, i18n } = useTranslation();
  return (
    <Conteiner>
      <Text>{t("announce.0")}</Text>
    </Conteiner>
  );
};

export default Announcement;
