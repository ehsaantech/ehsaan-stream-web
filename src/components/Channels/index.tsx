import React from "react";
import styled from "styled-components";
import Theme from "../../constants/theme";
import { Channels } from "../../types/channel";
import { mobile } from "../../utils/responsive";

type Props = {
  channel: Channels;
  handleNavigation: (Route: String) => void;
};

const Channel = ({ channel, handleNavigation}: Props) => {
  const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.CHANNEL_BLACK};
    z-index: 3;
    opacity: 1;
    transition: all 0.5s ease;
  `;

  const Container = styled.div`
    flex: 1;
    margin: 15px;
    min-width: 520px;
    height: 30vh;
    position: relative;
    cursor: pointer;
    box-shadow: ${Theme.BOX_SHADOW};
    &:hover ${Info} {
      transition: all 0.5s ease;
      background-color: ${Theme.RGB_GREY};
    }
    ${mobile({
      height: "70vh",
      margin: "0px",
      minWidth: "0px",
      marginBottom: "20px",
    })};
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    cursor: pointer;
    opacity: 0.7;
    ${mobile({ height: "20vh" })};
  `;

  const Title = styled.h1`
    color: ${Theme.WHITE_COLOR};
    margin-bottom: 20px;
    ${mobile({ fontSize: "x-large" })};
  `;
  
  return (
    <Container>
      <Image src={channel.img} />
      <Info onClick={() => handleNavigation(channel.channelRoute)}>
        <Title>{channel.title}</Title>
      </Info>
    </Container>
  );
};

export default Channel;
