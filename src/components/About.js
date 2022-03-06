import React from "react";
import { colors } from "../config/colors";
import styled from "styled-components";
import Zim from "../Assets/images/goodazz.png";
import david from "../Assets/images/zara.png";
import des from "../Assets/images/des2.png";
import James from "../Assets/images/zara.png";

const About = () => {
  const teams = [Zim, david, des, James];

  const Team = () => teams.map((team) => <Image src={team} />);

  return (
    <Container id="about">
      <Left>
        <LeftContent>
          <Header>About</Header>
          <Discription>
            An authentic online Platform that caters for all your business
            transactions, provides incredible ease of access and a remarkably
            user friendly experience, here at Eureka, we strive to offer the
            most quality products available at the best and most competitive
            prices, so what are you waiting for?!
            <br />
            <br />
            <Header>Mission Statement</Header>
            The mission here at Eureka is to provide quality products with the
            most affordable prices and ease of payment with our numerous poste
            accounts and trusted vendors in every wilaya, transactions in
            Algeria have never been easier.
            <br />
            <br />
            “There was an idea, called the Eureka initiative to bring together a
            group of remarkable people, see if they could create something more,
            to see if they could work together and give us the best services we
            could never imagine, well it’s here now, Eureka Assemble” -Nick Fury
            (not really but you get it)
          </Discription> 
        </LeftContent>
      </Left>
      <Right>
        <RightContent>
          <Header>Team</Header>
          <ImageContainer> {Team()} </ImageContainer>
        </RightContent>
      </Right>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 0; 
  display: flex;
  /* justify-content: center;
  align-items: center; */

  @media screen and (max-width: 1100px) {
    height: 100vh;
  }

  @media screen and (max-width: 900px) {
    display: block;
    height: 1100px;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  background-color: ${colors.black};
  color: ${colors.white};

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 45%;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  background-color: ${colors.white};
  color: black;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 55%;
  }
`;

const Header = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

const LeftContent = styled.div`
  padding: 5rem;

  @media screen and (max-width: 1000px) {
    padding: 3rem;
  }

  @media screen and (max-width: 760px) {
    padding: 1.5rem;
  }
`;

const RightContent = styled.div`
  padding: 5rem;

  @media screen and (max-width: 760px) {
    padding: 2rem;
  }
`;

const Discription = styled.span`
  font-size: 1.1rem;

  @media screen and (max-width: 1400px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-right: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1500px) {
    height: 100px;
    width: 100px;
    margin-right: 2rem;

  }

  @media screen and (max-width: 1500px) {
    margin-top: 3rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
  }
`;
