import React from "react";
import styled from "styled-components";
import Theme from "../../constants/theme";
import { mobile } from "../../utils/responsive";

const Hero = () => {
  const Heading = styled.h1`
    margin-top: 10%;
    text-align: center;
    letter-spacing: 1.5px;
    ${mobile({ marginTop: "35%" })}
  `;

  const ShortDescription = styled.p`
    font-size: 17px;
    color: ${Theme.FONT_GREY};
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 15px;
    ${mobile({
      fontSize: "14px",
      paddingLeft: "30px",
      paddingRight: "30px",
      lineHeight: "20px",
    })};
  `;

  return (
    <>
      <Heading>Podcast Network</Heading>
      <ShortDescription>
        An Interactive Streaming Platform For Muslim Ummah
      </ShortDescription>
    </>
  );
};

export default Hero;
