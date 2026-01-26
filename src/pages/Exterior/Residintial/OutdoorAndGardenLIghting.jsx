import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { outdoorLightingDatas } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const OutdoorAndGardenLIghting = () => {
  return (
    <ServicePageGallery 
      data={outdoorLightingDatas} 
      accentColor="#1a237e" // Midnight Indigo
    />
  );
}

export default OutdoorAndGardenLIghting;