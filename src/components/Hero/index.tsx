import React from "react";
import styled from "styled-components";
import Theme from "../../constants/theme";
import { mobile } from "../../utils/responsive";

const Hero = () => {
  const Heading = styled.h1`
    margin-top: 7%;
    text-align: center;
    letter-spacing: 1.5px;
    color: ${Theme.NAVY_BLUE};
    ${mobile({ marginTop: "25%" })}
  `;

  const ShortDescription = styled.p`
    font-size: 22px;
    color: ${Theme.FONT_GREY};
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 15px;
    ${mobile({
      fontSize: "18px",
      paddingLeft: "30px",
      paddingRight: "30px",
      lineHeight: "20px",
    })};
  `;

  return (
    <>
      <Heading>Podcast Network</Heading>
      <ShortDescription>Streaming Platform For Muslim Ummah</ShortDescription>
    </>
  );
};

export default Hero;
