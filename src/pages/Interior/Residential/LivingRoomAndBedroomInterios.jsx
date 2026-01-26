import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { livingBedroomData } from '../../../Data'; 

const LivingRoomAndBedroomInterios = () => {
  return (
    <ServicePageBuilder 
      data={livingBedroomData} 
      accentColor="#c5a059" // Warm Champagne
    />
  );
}

export default LivingRoomAndBedroomInterios;