import React from "react";
import styled from "styled-components";
import Theme from "../../constants/theme";
import { mobile } from "../../utils/responsive";

const Container = styled.div`
  height: 20px;
  color: ${Theme.BLACK_COLOR};
`;
const Wrapper = styled.div`
  padding: 30px 20px;
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
  width: min-content;
  ${mobile({ fontSize: "15px" })};
`;

const Span = styled.span`
  color: ${Theme.NAVY_BLUE};
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
          >
            Product by <Span>Ehsaantech.com</Span>
          </Branding>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
