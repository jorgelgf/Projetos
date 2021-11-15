import React from "react";
import styled from "styled-components";
import bg from "../../Img/bg.jpg";
import Header from "./Header";
import me from "../../Img/jorge.jpg";
import infome from "../../Img/jl.png";

import History from "./History";

import Cards from "../Carousel/Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <DivFull>
      <Header />
      <Section>
        <Avatar />
        <AboutMe>
          <InfoIMG
            src={infome}
            alt="Eu sou Jorge luís, desenvolvedor web e produtor musical"
          />
        </AboutMe>
      </Section>
      <History />
      <Cards />
      <Footer />
    </DivFull>
  );
};

export const DivFull = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(${bg});
  margin: auto;
  align-items: center;
  //border: solid 1px black;
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

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
