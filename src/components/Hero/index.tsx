import React from 'react';
import styled from 'styled-components';


const Hero = () => {
   
    const Heading = styled.h1`
        margin-top: 10%;
        text-align: center;
        letter-spacing: 1.5px;
    `;

    const ShortDescription =  styled.p`
      font-size: 17px;
      color: #434a52;
      font-weight: bold;
      text-align: center;
      letter-spacing: 1px;
      margin-top: 15px;
    `;

  return (
    <>
    <Heading>Podcast Network</Heading>
    <ShortDescription>An Interactive Streaming Platform For Muslim Ummah</ShortDescription>
    </>
  )
}

export default Hero;