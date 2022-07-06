import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../config/colors";
import logo from "../Assets/images/logo.png";
import { HiMenu } from "react-icons/hi";
import { animateScroll as scroll, Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Nav = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false); 

  const changNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container scrollNav= {scrollNav}>
      <Content>
        <Menu onClick={toggle} />
        <About
          to="about"
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-80}
        >
          About
        </About>
        <LogoContainer to="/eureka-demo" onClick={toggleHome}>
          {" "}
          <Logo src={logo} />{" "}
        </LogoContainer>
        <Contact
          to="contact"
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-80}
        >
          Contact
        </Contact>
      </Content>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  height: 80px;
  width: 100%;
  z-index: 10;
  background-color: ${colors.primary};
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
//  position: fixed;
 // border-radius: 0 0 20px 20px;
  border-bottom: 2px solid ${({scrollNav}) => (scrollNav ? '#000000' : 'none')};
`;

const Content = styled.div`
  height: 1000%;
  width: 80%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  

  @media screen and (max-width: 760px) {
    width: 80%;
  }
`;

const Menu = styled(HiMenu)`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    font-size: 2rem;
    font-weight: 800;
  }
`;

const About = styled(LinkS)`
  color: black;
  font-size: 23px;
  font-weight: 500;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const LogoContainer = styled(LinkR)``;
const Logo = styled.img`
  width: 70px;
  height: 70px;

  transition-duration: 2s;

  @media screen and (max-width: 900px) {
    width: 60px;
    height: 60px;
  }

  :hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

const Contact = styled(LinkS)`
  color: black;
  font-size: 23px;
  font-weight: 500;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
