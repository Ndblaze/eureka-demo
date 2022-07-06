import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import logo from "../Assets/images/logo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { colors } from "../config/colors";
import { animateScroll as scroll, Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
          <LogoContainer to="/eureka-demo" onClick={toggleHome}>
            <Logo src={logo} />{" "}
          </LogoContainer>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
            >
              Contact
            </SidebarLink>
            <SidebarLink
              to="features"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
            >
              How to
            </SidebarLink>
            <TermsLink
              to="/eureka-demo/terms-conditions"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
            >
              Terms & Conditions
            </TermsLink>
          </SidebarMenu>
          <SideSocial>
            <Social>
              <a href="https://www.twitter.com/evrekapp">
                <Twitter />{" "}
              </a>
              <a href="https://www.instagram.com/evrekapp">
                {" "}
                <Instagram />{" "}
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082706121396">
                {" "}
                <Facebook />{" "}
              </a>
            </Social>
          </SideSocial>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  padding: 1.5rem 2rem;
`;
export const SidebarWrapper = styled.div`
  color: #000;
`;

const LogoContainer = styled(LinkR)``;

const Logo = styled.img`
  width: 90px;
  height: 90px;

  transition-duration: 2s;

  @media screen and (max-width: 900px) {
    width: 70px;
    height: 70px;
  }

  &:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    color: ${colors.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const TermsLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    color: ${colors.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const SideSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

const Facebook = styled(BsFacebook)`
  color: #0073e6;
  font-size: 2rem;
`;

const Instagram = styled(BsInstagram)`
  color: ${colors.primary};
  font-size: 2rem;
`;

const Twitter = styled(BsTwitter)`
  color: #0066cd;
  font-size: 2rem;
`;
