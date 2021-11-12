import React from "react";
import styled from "styled-components";
import bg from "../../Img/bg.jpg";
import theme from "../../theme";
import Header from "./Header";
import me from "../../Img/jorge.jpg";
import infome from "../../Img/jl.png";

import History from "./History";

const Home = () => {
  return (
    <DivFull>
      <Header />
      <Section>
        <Avatar />
        <AboutMe>
          <InfoIMG
            src={infome}
            alt="Eu sou Jorge luís, desenvolvedor web e produtod musical"
          />
          <Am>SOBRE MIM</Am>
        </AboutMe>
      </Section>
      <History></History>
    </DivFull>
  );
};

const DivFull = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1334px;
  background: url(${bg});
  margin: auto;

  @media (max-width: 1020px) {
    width: 100%;
    height: 100%;
  }
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: space-around;
  //border: 1px solid black;
  @media (max-width: 1020px) {
    flex-direction: column;

    background-color: #ffffff7d;
    justify-content: space-between;
  }
`;
const Am = styled.p`
  font-size: 35px;
  font-family: ${theme.text.fontFamily};
  color: ${theme.colors.primary};
  margin-top: 15px;
  display: flex;
  @media (max-width: 1435px) {
    margin-top: 100px;
  }
  @media (max-width: 1024px) {
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 30px;
    justify-content: center;
  }
`;

const Avatar = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 0.6rem solid #e2e6e5cf;
  background-image: url(${me});
  background-position: center;
  background-size: cover;
  //border: solid 1px black;

  @media (max-width: 1020px) {
    border-radius: 10%;
    margin-top: 100px;
    width: 140px;
    height: 240px;
    border: 1px solid #e2e6e5cf;
    border: 0.5rem solid #e2e6e5cf;
  }
`;
const AboutMe = styled.div`
  //border: 1px solid red;
  width: 50%;
  height: 100%;
`;

const InfoIMG = styled.img`
  margin-top: 59px;
  width: 95%;
  background-position: center;
  background-size: cover;
`;

export default Home;
