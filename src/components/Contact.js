import React from "react";
import styled from "styled-components";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { colors } from "../config/colors";

const Contact = () => {
  return (
    <Container id="contact">
      <Header>Contact</Header>
      <Content>
        <Left>
          <div>
            <Form>
              <div>
                <Name placeholder="Name(s)" />
                <Email type="email" placeholder="@email" />
                <Message type="text" placeholder="Enter a message....." />
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </Left>
        <Right>
          <Discription>
            <span>W</span>e are <br /> online on
          </Discription>
          <SocialIcon>
            <Icons href="https://www.twitter.com/evrekapp">
              <AiOutlineTwitter />
            </Icons>
            <Icons href="https://www.instagram.com/evrekapp/">
              <AiOutlineInstagram />
            </Icons>
            <Icons href="https://www.facebook.com/profile.php?id=100082706121396">
              <BsFacebook />
            </Icons>
          </SocialIcon>
        </Right>
      </Content>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 550px;
  background-color: #eeeeee;
  font-family: "Red Hat Text", sans-serif;

  @media screen and (max-width: 600px) {
    background-color: pink;
    height: 500px;
  }
`;
const Content = styled.div`
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 3rem;

  & > div {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    padding: 0rem 0rem;
    width: 100%;
    height: 100%;

    & > div {
      width: 100%;
    }
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  margin-left: 110px;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-left: 30px;
  }
`;

const Form = styled.form`
  padding: 0 1.5rem;
`;

const Name = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${colors.black};
  border-radius: 0.9rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  outline: none;
  background-color: #e5e5e5;

  @media screen and (max-width: 768px) {
    height: 2rem;
    font-size: 0.8rem;
    width: 90%;
  }
`;

const Email = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${colors.black};
  border-radius: 0.8rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  outline: none;
  background-color: #e5e5e5;

  @media screen and (max-width: 768px) {
    height: 2rem;
    font-size: 0.8rem;
    width: 90%;
  }
`;

const Message = styled.textarea`
  width: 100%;
  height: 9rem;
  border: 1px solid ${colors.black};
  border-radius: 0.8rem;
  font-size: 1.1rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  outline: none;
  resize: none;
  background-color: #e5e5e5;

  @media screen and (max-width: 768px) {
    height: 6rem;
    padding-top: 0.5rem;
    font-size: 0.8rem;
    width: 90%;
  }
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 18px;
  background-color: #e5e5e5;
  border: 1px solid black;
  font-size: 1.2rem;
  font-weight: 600;
  float: right;

  @media screen and (max-width: 768px) {
    height: 2.5rem;
    font-size: 1.1rem;
    float: left;
  }

  &:hover {
    border: 1px solid white;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Discription = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  line-height: 6.5rem;

  & > span {
    font-size: 9rem;
    font-weight: 1000;
  }
`;
const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

const Icons = styled.a`
  font-size: 4rem;
  margin-right: 4rem;
  color: black;
  text-decoration: none;
`;
