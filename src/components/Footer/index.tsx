import React from "react";
import styled from "styled-components";
import Theme from "../../constants/theme";
import { mobile } from "../../utils/responsive";
import { logEhsaantechVisitors } from "../../services/analytics";
import EhsaanTechlogo from "../../assets/ehsaantechlogo.jpeg";

const Container = styled.div`
  height: 10px;
  color: ${Theme.BLACK_COLOR};
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Branding = styled.a`
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-decoration: none;
  margin-top: -20px;
  color: ${Theme.FONT_GREY};
  width: fit-content;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "15px" })};
`;

const Span = styled.img`
  color: ${Theme.NAVY_BLUE};
  width: 110px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Branding
            href="https://ehsaantech.com"
            target="_blank"
            rel="noreferrer"
            onClick={logEhsaantechVisitors}
          >
            Product by <Span src={EhsaanTechlogo} alt="Ehsaantechlogo" />
          </Branding>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
