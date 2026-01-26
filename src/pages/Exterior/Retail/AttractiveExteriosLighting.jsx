import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { attractiveLightingData } from '../../../Data';

const AttractiveExteriosLighting = () => {
  return (
    <ServicePageMinimal 
      data={attractiveLightingData} 
      accentColor="#af9333" // Luxury Champagne
    />
  );
}

export default AttractiveExteriosLighting;