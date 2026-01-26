import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { kitchenData } from '../../../Data';

const ModularKitchenDesign = () => {
  return (
    <ServicePageBuilder 
      data={kitchenData} 
      accentColor="#2c3e50" // Deep Charcoal / Navy
    />
  );
}

export default ModularKitchenDesign;