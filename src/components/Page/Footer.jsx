import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Footer = () => {
  return (
    <FooterMoreContacts>
      <Contact>
        <Contact>CONTATOS</Contact>
        <Contact style={{ fontSize: "15px" }}>
          <TagA1 href="mailto:jlgurgelfernandes@gmail.com">
            jlgurgelfernandes@gmail.com
          </TagA1>
        </Contact>
        <Contact style={{ fontSize: "15px" }}>
          <TagA2 href="tel:84996222569">84996222569</TagA2>
        </Contact>
      </Contact>
    </FooterMoreContacts>
  );
};

const FooterMoreContacts = styled.footer`
  // border: solid 1px black;
  width: 90%;
  margin-top: 130px;
  margin-bottom: 50px;
  height: 100px;
  display: flex;
  justify-content: end;

  color: ${theme.colors.primary};
  font-size: 30px;
  font-family: ${theme.text.fontFamily};
  @media (max-width: 1020px) {
    font-size: 20px;
    margin: 0;
    width: 90%;
  }
`;

const Contact = styled.div`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const TagA1 = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};
  :hover {
    font-size: 20px;
    color: #4993ae;
  }
`;
const TagA2 = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};
  :hover {
    font-size: 20px;
    color: #4993ae;
  }
`;

export default Footer;
