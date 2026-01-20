import React from 'react';
import { Services } from '../components/home/Services';
import { AboutUs } from '../components/home/AboutUs';
import { PartnersContact } from '../components/home/PartnersContact';
 import Hero  from '../components/home/Hero';


const Home = () => {
  return (
    <div className="bg-[#0f0f0f]">
      <Hero />
      <AboutUs />
      <Services />
      <PartnersContact />
    </div>
  );
};

export default Home;