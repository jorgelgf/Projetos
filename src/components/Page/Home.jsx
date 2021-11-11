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
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: space-around;
  //border: 1px solid black;
`;
const Avatar = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background-image: url(${me});
  background-position: center;
  background-size: cover;
  //border: solid 1px black;
`;
const AboutMe = styled.div`
  //border: 1px solid red;
  width: 50%;
  height: 100%;
  color: ${theme.colors.primary};
`;

const InfoIMG = styled.img`
  margin-top: 59px;
  width: 95%;
  background-position: center;
  background-size: cover;
`;

export default Home;
