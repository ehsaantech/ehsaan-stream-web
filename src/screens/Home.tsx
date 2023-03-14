import React,{useEffect} from 'react';
import ChannelContainer from "../container/channel-container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { logWebVisited } from "../services/analytics";

const Home = () => {

  useEffect(() => {
    logWebVisited();
  }, [])
  
  
  return (
    <>
      <Header />
      <Hero />
      <ChannelContainer />
      <Footer />
    </>
  );
};

export default Home;
