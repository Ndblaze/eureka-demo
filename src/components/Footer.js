import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Text>How to</Text>

        <TearmsLink to="/eureka-demo/terms-conditions">
          Terms & Conditions
        </TearmsLink>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #eeeeee;
  font-family: "Red Hat Text", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #fff;

  @media screen and (max-width: 900px) {
    background-color: pink;
    display: none;
  }
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.h2`
  font-size: 1.3rem;
  font-weight: 900;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const TearmsLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 900;
  text-decoration: none;
  color: #000;
  
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
