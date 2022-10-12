import React from 'react';
import styled from 'styled-components';
import Theme from '../constants/theme';
import {mobile} from '../utils/responsive';
import { channelData } from '../services/data';
import Channel from '../components/Channels';

const ChannelContainer = () => {

  const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Heading = styled.h1`
    text-align: center;
    letter-spacing: 2.1px;
    margin-top: 80px;
    font-size: 52px;
    font-weight: 900;
    color: ${Theme.GREEN_COLOR};
`;


  return (
    <>
    <Heading>Streaming Channels For You</Heading>
    <Container>
        {
          channelData.map((item)=>(
            <Channel img={item.img} title={item.title} subTitle={item.author} channelName={`${item.author}`}/>
          ))
        }
    </Container>
    </>
  )
}

export default ChannelContainer;