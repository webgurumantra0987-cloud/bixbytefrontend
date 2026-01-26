import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { claddingFinishesData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const AcpGlassAndMetalFinishes = () => {
  return (
    <ServicePageGallery 
      data={claddingFinishesData} 
      accentColor="#455a64" // Polished Steel Slate
    />
  );
}

export default AcpGlassAndMetalFinishes;  