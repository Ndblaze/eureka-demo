import React from "react";
import styled from "styled-components";
import LeftImage from "../Assets/images/featuresImageLeft.png";
import RightImage from "../Assets/images/featuresImageRight.png";
import CenterImage from "../Assets/images/featuresImageCenter.png";
import { colors } from "../config/colors";

const Features = () => {
  return (
    <Container id="features">
      <Heading>You Can</Heading>
      <Content>
        <Right>
          <div>
            <HeaderRight>
              <h2>
                Inside, <br /> who's that ?{" "}
              </h2>
              <span> Attend any events of your choice</span>
            </HeaderRight>
            <Discription>
              2020/2021 was alot
              <br />
              <br />
              Events are important for us all
              <br />
              <br />
              Choose any event(s) suited for you with the venue and ticket 🎫
              detailed.
            </Discription>
          </div>
          <Image src={RightImage} />
        </Right>
        <Center>
          <div>
            <Header>
              {" "}
              <span> Earn money from selling your stuff</span>{" "}
            </Header>
            <Discription>
              Leaving the country ✈️ or got stuff to sell/don't need and want
              extra cash 💵💵
              <br />
              <br />
              Upload items with details
              <br />
              <br />
              We verify ✔️✔️ and ship 📦
            </Discription>
          </div>
          <Image src={CenterImage} />
        </Center>
        <Left>
          <div>
            <Header>Find location based products</Header>
            <Discription>
              Vendors are distributed across cities 🌍
              <br />
              <br />
              Discover products around you and in specific cities, shop and get
              your items.
              <br />
              <br />
              <br />
            </Discription>
          </div>
          <Image src={LeftImage} />
        </Left>
      </Content>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  height: 850px;
  width: 100%;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 1000px) {
    height: 900px;
  }

  @media screen and (max-width: 760px) {
    height: 550px;
    display: block;
  }
`;

const Heading = styled.h2`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    color: white;
    font-size: 2rem;
    padding: 2rem;
    margin-top: 0;
  }
`;

const Content = styled.div`
  height: 82%;
  width: 70%;
  display: flex;
  background-color: ${colors.black};
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 3rem;

  @media screen and (max-width: 1300px) {
    width: 85%;
  }

  @media screen and (max-width: 1100px) {
    width: 90%;
  }

  @media screen and (max-width: 760px) {
    height: 90%;
    min-width: 270%;
    margin-top: 2rem;
    padding: 1rem;
    //  border: 1px solid red;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 30%;
  margin-top: 15rem;
  padding: 1rem;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin-top: 0rem;
    height: 85%;
    width: 31%;
    margin-right: 2rem;
    padding: 0rem;
    //  border: 1px solid red;
  }
`;

const HeaderRight = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.3rem;
  margin-top: 0;
  color: ${colors.primary};

  & > h2 {
    font-size: 2rem;
    line-height: 2.3rem;
  }

  & > span {
    display: none;
  }

  @media screen and (max-width: 900px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.8rem;
    margin-bottom: 8px;

    & > h2 {
      display: none;
    }

    & > span {
      display: flex;
    }
  }
`;

const Header = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.3rem;
  margin-top: 0;
  color: ${colors.primary};

  & > span {
    font-size: 2.4rem;

    @media screen and (max-width: 900px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 760px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
`;

const Discription = styled.span`
  font-size: 1.1rem;

  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

const Center = styled.div`
  height: 100%;
  width: 33%;
  padding: 1rem;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin-top: 0rem;
    height: 85%;
    width: 31%;
    margin-right: 2rem;
    padding: 0rem;
    //  border: 1px solid red;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 30%;
  margin-top: 18rem;
  padding: 1rem;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin-top: 0rem;
    height: 85%;
    width: 31%;
    padding: 0rem;
    // border: 1px solid red;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 0rem;

  @media screen and (max-width: 760px) {
    width: 50%;
    height: 75%;
    margin-right: 10px;
  }
`;
