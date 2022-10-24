import React, { Suspense } from "react";
import styled from "styled-components";
import Theme from "../constants/theme";
import { mobile } from "../utils/responsive";
import { channelData } from "../services/data";
import { useNavigate } from "react-router-dom";

const Channel =  React.lazy(()=> import('../components/Channels'));
const ChannelContainer = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    ${mobile({ padding: "12px", flexDirection: "column" })}
  `;
  const Heading = styled.h1`
    text-align: center;
    letter-spacing: 2.1px;
    margin-top: 80px;
    font-size: 52px;
    font-weight: 900;
    color: ${Theme.GREEN_COLOR};
    ${mobile({ marginTop: "55px", fontSize: "21px" })}
  `;
  const navigate = useNavigate();
  const navigateChannel = (route: any) => {
    navigate(`/channels/${route}`);
  };

  return (
    <>
      <Heading>Streaming Channels For You</Heading>
      <Suspense fallback="loading channels">
      <Container>
        {channelData.map((item) => (
          <Channel channel={item} handleNavigation={() => navigateChannel(item.channelRoute)} />
        ))}
      </Container>
      </Suspense>
    </>
  );
};

export default ChannelContainer;
