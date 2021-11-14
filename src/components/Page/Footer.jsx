import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterMoreContacts>
      Contatos <br />
    </FooterMoreContacts>
  );
};

const FooterMoreContacts = styled.footer`
  margin-top: 140px;
  border-top: 1px solid black;
  background-color: #e2dede7b;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: end;
`;

export default Footer;
