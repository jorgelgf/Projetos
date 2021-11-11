import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import git from "../../Img/git.png";
import insta from "../../Img/insta.png";
import link from "../../Img/link.png";
const Header = () => {
  return (
    <HeaderStyle>
      <IconJ>J</IconJ>
      <IconNet>
        <a href="#">
          <IconNetImg src={git} alt="Github" />
        </a>
        <a href="#">
          <IconNetImg src={link} alt="Linkedin" />
        </a>
        <a href="#">
          <IconNetImg src={insta} alt="Instagram" />
        </a>
      </IconNet>
    </HeaderStyle>
  );
};
const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  height: 6%;
  background: rgba(243, 239, 239, 0.267);
  //border: 10px solid black;
`;

const IconJ = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 30px;
  font-size: 4em;
  font-family: ${theme.tittle.font};
  font-style: normal;
  font-weight: normal;
  color: ${theme.colors.primary};
  //  border: 11px red solid;
`;
const IconNet = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-evenly;
  align-items: center;
  // border: 11px white solid;
`;
const IconNetImg = styled.img`
  margin-top: 1em;
  width: 3em;
  align-items: center;
  margin-bottom: 10px;
`;

export default Header;
