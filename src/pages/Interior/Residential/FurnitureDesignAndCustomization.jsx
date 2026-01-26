import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { furnitureData } from '../../../Data';


const FurnitureDesignAndCustomization = () => {
  return (
    <ServicePageBuilder 
      data={furnitureData} 
      accentColor="#2a2a2a" // Deep Walnut/Charcoal for furniture
    />
  );
}

export default FurnitureDesignAndCustomization;