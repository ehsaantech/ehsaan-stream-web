import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Chip  from '@mui/material/Chip';
import logoSrc from '../../assets/ehsaantechlogo.jpeg';

const Container = styled.div`
    height: 60px;
    color: black;
`;
const Wrapper =  styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Language =  styled.h1`
      font-size: 20px;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1.5px;
`;

const Logo = styled.img`
    cursor: pointer;
    width: 100px;
    height: 100px;
`;

const MenuItem = styled.div`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.5px;
    cursor: pointer;
    margin-right: 25px;
`

const Header = () => {
    const navigate = useNavigate();

    const Home = () =>{
        navigate("/", {replace: true})
    }

  return (
    <Container>
        <Wrapper>
            <Left>
            <Logo onClick={Home} src={logoSrc}/>
            </Left>
            <Center>
                <Language onClick={Home}>Ehsaan Stream.</Language>
            </Center>
            <Right>
                <MenuItem onClick={Home}>Home</MenuItem>
                <MenuItem>
                <a href="https://ehsaantech.com/contact/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color: "black", cursor: "pointer"}}>
                    <Chip label="Contact Us" color="success" style={{cursor: "pointer"}}/>
                </a>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Header;