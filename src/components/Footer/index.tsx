import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const Container = styled.div`
    height: 20px;
    color: black;
`;
    const Wrapper =  styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Center = styled.div`
flex: 1;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
${mobile({ padding: "10px", marginTop: "-15px" })};
`;

const Language =  styled.h1`
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.5px;
  ${mobile({ fontSize: "15px" })};
`;

const Footer = () => {
    
const navigate = useNavigate();

const Home = () =>{
    navigate("/", {replace: true})
}

  return (
    <Container>
        <Wrapper>
            <Center>
                <Language onClick={Home}>Copyright © 2022 Ehsaan Streams.</Language>
            </Center>
        </Wrapper>
    </Container>
  )
}

export default Footer;