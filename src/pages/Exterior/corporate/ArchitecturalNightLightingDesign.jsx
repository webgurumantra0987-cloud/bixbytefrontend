import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { nightLightingData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const ArchitecturalNightLightingDesign = () => {
  return (
    <ServicePageGallery 
      data={nightLightingData} 
      accentColor="#FFC107" // Deep Midnight Gold
    />
  );
}

export default ArchitecturalNightLightingDesign;