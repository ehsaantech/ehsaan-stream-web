import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import logoSrc from "../../assets/EhsaanStream.png";
import { mobile } from "../../utils/responsive";
import Theme from "../../constants/theme";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "25px 0px" })}
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
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Language = styled.h1`
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.5px;
  ${mobile({ display: "none" })};
`;

const Logo = styled.img`
  cursor: pointer;
  width: 300px;
  height: auto;
  position: absolute;
  margin-top: 30px;
  margin-left: -50px;
  ${mobile({
    marginTop: "15px",
    marginLeft: "-40px",
    position: "absolute",
    width: "200px",
    height: "auto",
  })};
`;

const MenuItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Header = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo onClick={Home} src={logoSrc} />
        </Left>
        <Center>
          <Language onClick={Home}>Ehsaan Stream.</Language>
        </Center>
        <Right>
          <MenuItem onClick={Home}>Home</MenuItem>
          <MenuItem>
            <a
              href="https://ehsaantech.com/contact/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: `${Theme.BLACK_COLOR}`,
                cursor: "pointer",
              }}
            >
              <Chip
                label="Contact Us"
                color="success"
                style={{ cursor: "pointer" }}
              />
            </a>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
