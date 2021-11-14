import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

//imagens
import web1 from "../../Img/web1.jpg";
import web2 from "../../Img/web2.jpg";
import web3 from "../../Img/web3.png";
import mu1 from "../../Img/mu1.jpg";
import mu2 from "../../Img/mu2.jpg";
import mu3 from "../../Img/mu3.jpg";
import theme from "../../theme";

const Cards = () => {
  const images1 = [{ url: web1 }, { url: web2 }, { url: web3 }];
  const images2 = [{ url: mu1 }, { url: mu2 }, { url: mu3 }];

  const [width, setWidth] = useState(596);
  const [height, setHeight] = useState(204);

  useEffect(() => {
    setWidth(window.screen.width - 220);
    setHeight(window.screen.height - 220);
  }, [width]);

  return (
    <>
      <TypeProj>PROJETOS WEB</TypeProj>
      <Slides>
        <SimpleImageSlider
          width={width}
          height={height}
          images={images1}
          showBullets={true}
          showNavs={true}
        />
      </Slides>
      <TypeProj>PROJETOS MUSICAIS</TypeProj>

      <Slides>
        <SimpleImageSlider
          width={width}
          height={height}
          images={images2}
          showBullets={true}
          showNavs={true}
        />
      </Slides>
    </>
  );
};

const Slides = styled.div`
  display: flex;
  border: solid rgba(9, 9, 9, 0.1) 10px;
  border-radius: 5px;
  margin-top: 1%;  
  }
`;

const TypeProj = styled.p`
  display: flex;

  margin: auto;
  margin-top: 140px;
  justify-content: center;
  width: 100%;
  font-size: 35px;
  font-family: ${theme.text.fontFamily};
  color: ${theme.colors.primary};
`;

export default Cards;

//font: https://reactjsexample.com/a-simple-image-slider-component-for-react-js/
