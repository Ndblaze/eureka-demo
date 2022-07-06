import React from "react";
import styled from "styled-components";
import OverviewImage from "../Assets/images/overviewWeb.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { colors } from "../config/colors";

const Overview = () => {
  return (
    <Container id="overview">
      <Content>
        <Left>
          <Span>
            You Found It <br /> Eureka Got You
          </Span>
          <br />
          <Mobile>
            <MobileImage src={OverviewImage} />
          </Mobile>
          
          <Discription>
            We built this for students to sell some of their stuff when migrating, to gain some cash.
            <br /> if you got stuff to sell. We vibe with you.



            {/* A platform built to connect businesses and customers. Making
            buying and selling interesting. */}
          </Discription>
          <ButtonContainer>
            <Button>
              <IconGooglePlay />
              <Text>Download on playstore</Text>
            </Button>
            <Button>
              <IconApple />
              <Text>Download on Appstore</Text>
            </Button>
          </ButtonContainer>
        </Left>
        <Right>
          <Image src={OverviewImage} />
        </Right>
      </Content>
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${colors.primary};
  padding-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    height: 85vh;
  }

  @media screen and (max-width: 768px) {
    height: 90vh;
    padding-top: 35px;
  }
`;

const Content = styled.div`
  height: 80%;
  width: 70%;
  display: flex;
  justify-content: center;
  //margin-top: -30px;
  
  
 // border: 1px solid red;
  
  @media screen and (max-width: 760px) {
    width: 80%;
  }
`;

const Left = styled.div`
  height: 80%;
  width: 48%;
  text-align: right;
  margin-top: 50px;
  margin-right: 1.3rem;
  

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-top: 0px;
    margin-right: 0rem;
   // border: 1px solid red;
  }
`;

const Mobile = styled.div`
  height: 13rem;
  width: 100%;
  display: none;
  overflow: hidden;
  text-align: center;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const MobileImage = styled.img`
  height: 20rem;
  width: 100%;
`;

const Span = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 3.5rem;
  margin-bottom: 0%;

  @media screen and (max-width: 1400px) {
    font-size: 2.5rem;
    margin-bottom: 0%;
    line-height: 3rem;
  }

  @media screen and (max-width: 1100px) {
    font-size: 2.3rem;
    line-height: 2.5rem;
    margin-bottom: 0%;
  }

  @media screen and (max-width: 900px) {
    font-size: 2.3rem;
    margin-bottom: 0%;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 2rem;
    margin-bottom: 0%;
    line-height: 2rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 2.3rem;
    font-weight: bold;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 0%;
  }
`;

const Discription = styled.h1`
  font-size: 1.3rem;
  line-height: 2rem;
  margin-top: 0;
  font-weight: 400;
  color: rgba(0,0,0, 0.7);

  @media screen and (max-width: 1400px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 0;
  }

  @media screen and (max-width: 1000px) {
    font-size: 1.1rem;
    line-height: 1rem;
    margin-top: 0;
  }

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
    margin-top: 0;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
    margin-top: 0;
  }

  @media screen and (max-width: 760px) {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
    text-align: center;
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1.5rem;

  @media screen and (max-width: 760px) {
   margin-left: -15px;
  }
`;

const IconApple = styled(FaApple)`
  font-size: 2rem;
  margin-left: 1.5rem;
  margin-right: 0.5rem;
`;

const IconGooglePlay = styled(FaGooglePlay)`
  font-size: 2rem;
  margin-left: 1.5rem;
  margin-right: 0.5rem;
`;

const Button = styled.div`
  width: 10rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: ${colors.black};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  padding: 0.5rem;

  @media screen and (max-width: 900px) {
    width: 8rem;
    margin-left: 1rem;
    padding: 0.3rem;
    width: 9rem;
  }
`;

const Text = styled.h4`
  font-size: 0.7rem;
  margin: 0.5rem;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: 900px) {
    font-size: 0.7rem;
    margin: 0.4rem;
    font-weight: 400;
  }
`;

const Right = styled.div`
  height: 85%;
  width: 48%;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 80%;

  @media screen and (max-width: 1000px) {
    height: 70%;
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    height: 70%;
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    height: 60%;
  }
`;
