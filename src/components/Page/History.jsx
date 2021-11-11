import React from "react";
import styled from "styled-components";
import guitar from "../../Img/guitar.png";
import micro from "../../Img/micro.png";
import net from "../../Img/net.png";
import eletro from "../../Img/eletro.png";
import cet from "../../Img/cet.png";

const History = () => {
  return (
    <ContainerHist>
      <H1 />
      <H2 />
      <H3 />
      <H4 />
      <H5 />
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
  margin-top: 100px;
`;
const H1 = styled.div`
  margin-top: 150px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${guitar});
  background-position: center;
  background-size: cover;
`;
const H2 = styled.div`
  margin-top: 150px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${micro});
  background-position: center;
  background-size: cover;
`;
const H3 = styled.div`
  margin-top: 150px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${net});
  background-position: center;
  background-size: cover;
`;

const H4 = styled.div`
  margin-top: 150px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${eletro});
  background-position: center;
  background-size: cover;
`;
const H5 = styled.div`
  margin-top: 150px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${cet});
  background-position: center;
  background-size: cover;
`;
export default History;
