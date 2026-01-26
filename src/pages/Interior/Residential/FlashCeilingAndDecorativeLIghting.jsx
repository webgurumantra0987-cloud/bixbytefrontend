import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { lightingData } from '../../../Data';


const FlashCeilingAndDecorativeLIghting = () => {
  return (
    <ServicePageBuilder 
      data={lightingData} 
      accentColor="#b87333" // Warm Copper/Amber for Lighting
    />
  );
}

export default FlashCeilingAndDecorativeLIghting;