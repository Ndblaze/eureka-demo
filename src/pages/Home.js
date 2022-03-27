import React, {useState} from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";


const Home = () => {

  const [isOpen, setIsOpen] = useState(false) 

    const toggle = () =>{
        setIsOpen (!isOpen)
    }

  return (
     <>
       <Sidebar isOpen= {isOpen} toggle= {toggle} />
      <Nav toggle={toggle}/>
      <Overview />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
