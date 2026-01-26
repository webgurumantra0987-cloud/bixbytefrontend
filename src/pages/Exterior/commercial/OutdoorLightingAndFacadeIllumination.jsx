import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { outdoorLightingData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const OutdoorLightingAndFacadeIllumination = () => {
  return (
    <ServicePageGallery 
      data={outdoorLightingData} 
      accentColor="#303f9f" // Midnight Indigo
    />
  );
}

export default OutdoorLightingAndFacadeIllumination;