import React from "react";
import styled from "styled-components";
import guitar from "../../Img/guitar.png";
import micro from "../../Img/micro.png";
import net from "../../Img/net.png";
import eletro from "../../Img/eletro.png";
import cet from "../../Img/cet.png";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navitage = useNavigate();
  const handleClick = (e) => {
    if (e === 1) navitage("/h1");
  };

  return (
    <ContainerHist>
      <AboutMe>
        SOBRE MIM
        <Hist>
          <H1 onClick={() => handleClick(1)} />
          <H2 onClick={() => handleClick(2)} />
          <H3 onClick={() => handleClick(3)} />
          <H4 onClick={() => handleClick(4)} />
          <H5 onClick={() => handleClick(5)} />
        </Hist>
      </AboutMe>
    </ContainerHist>
  );
};

const ContainerHist = styled.div`
  width: 100%;
  height: 30%;
  //border: solid red 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const AboutMe = styled.div`
  //border: solid 1px black;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${theme.colors.primary};
  font-family: ${theme.text.fontFamily};
  font-size: 30px;
  margin-top: 30px;
  @media (max-width: 1500px) {
    font-size: 20px;
  }
`;
const Hist = styled.div`
  //border: solid 1px black;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1020px) {
    flex-direction: column;
    height: 90%;
    align-items: center;
  }
  @media (max-width: 1500px) {
    margin-top: 10px;
  }
`;

const H1 = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${guitar});
  background-position: center;
  background-size: cover;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  @media (max-width: 1220px) {
    margin-top: 30px;
    padding: 0;
    width: 150px;
    height: 150px;
  }
`;
const H2 = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${micro});
  background-position: center;
  background-size: cover;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  @media (max-width: 1220px) {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }
`;
const H3 = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${net});
  background-position: center;
  background-size: cover;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  @media (max-width: 1220px) {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }
`;

const H4 = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${eletro});
  background-position: center;
  background-size: cover;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  @media (max-width: 1220px) {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }
`;
const H5 = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${cet});
  background-position: center;
  background-size: cover;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  @media (max-width: 1220px) {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }
`;
export default History;
