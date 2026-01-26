import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { frontageData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const EntranceAndFrontageDesign = () => {
  return (
    <ServicePageGallery 
      data={frontageData} 
      accentColor="#1a237e" // Majestic Navy
    />
  );
}

export default EntranceAndFrontageDesign;