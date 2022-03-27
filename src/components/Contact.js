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
            <Icons>
              <AiOutlineTwitter />
            </Icons>
            <Icons>
              <AiOutlineInstagram />
            </Icons>
            <Icons>
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
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  margin-left: 110px;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
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
    height: 2.5rem;
    width: 85%;
    border: none;
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
    height: 2.5rem;
    width: 85%;
    border: none;
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
    height: 5rem;
    width: 85%;
    border: none;
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

  @media screen and (max-width: 768px) {
    height: 2.5rem;
  }

  &:hover{
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
  font-size: 4rem;
  font-weight: 1000;
  letter-spacing: 0.8rem;

  & > span {
    font-size: 8rem;
  }
`;
const SocialIcon = styled.div`
  display: flex;
`;

const Icons = styled.div`
  font-size: 3rem;
  margin-right: 2rem;
`;
