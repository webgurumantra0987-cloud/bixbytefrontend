import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { durableMaterialData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const DurableMetrialSection = () => {
  return (
    <ServicePageGallery 
      data={durableMaterialData} 
      accentColor="#455a64" // Deep Graphite/Slate
    />
  );
}

export default DurableMetrialSection;