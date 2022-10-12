import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Channels } from '../../types/channel';
import { mobile } from '../../utils/responsive';


const Channel = ({img,title,subTitle,channelName}:Channels) => {

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
  background-color: rgba(0, 0, 0, 0.767);
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
  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 10px;
  &:hover ${Info}{
    transition: all 0.5s ease;
    background-color: rgba(0, 0, 0, 0.555);
  }
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
    color:white;
    margin-bottom: 20px;
`;

const SubTitle = styled.h3`
    color:white;
    font-weight: 600;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;
const navigate = useNavigate();
const navigateChannel = () => {
  navigate(`${channelName}`);
}
  return (
    <>
    <Container>
        <Image src={img} />
        <Info onClick={navigateChannel}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Info>
    </Container>
    </>
  )
}

export default Channel;