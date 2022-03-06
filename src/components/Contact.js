import React from "react";
import styled from "styled-components";
import { colors } from "../config/colors";

const Contact = () => {
  return (
    <Container id="contact">
      <Left>
        <div>
        <Header>Contact</Header>
        <Form>
          <div>
          <Name placeholder="Name(s)" />
          <Email type="email" placeholder="@email" />
          <Message type="text" placeholder="Enter a message....." />
          <Button type="submit" >Submit</Button>
          </div>
        </Form>
        </div>
      </Left>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 500px;
  background-color: ${colors.gray};
 
  @media screen and (max-width: 600px) {
    background-color: pink;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 3rem;

  @media screen and (max-width: 900px) {
    padding: 0rem 0rem;
    width: 100%;  
    height: 100%;
  }
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: 2rem;
  color: ${colors.primary};
  margin-top: 0;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
    
  }
`;

const Form = styled.form`
    padding: 0 1.5rem;
`;

const Name = styled.input`
  width: 80%;
  height: 3rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${colors.black};
  border-radius: 0.8rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  outline: none;

  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 85%;
    border: none;
  }
`;

const Email = styled.input`
  width: 80%;
  height: 3rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${colors.black};
  border-radius: 0.8rem;
  padding-left: 1rem;
  font-size: 1.1rem;
  outline: none;

  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 85%;
    border: none;
  }
`;

const Message = styled.textarea`
  width: 80%;
  height: 7rem;
  border: 1px solid ${colors.black};
  border-radius: 0.8rem;
  font-size: 1.1rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  outline: none;
  resize: none;

  @media screen and (max-width: 768px) {
    height: 5rem;
    width: 85%;
    border: none;
  }
`;

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: ${colors.primary};
  border: none;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    height: 2.5rem;
  }
`;
