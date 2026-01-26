import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { greenBuildingData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const GreenBuildingFeatures = () => {
  return (
    <ServicePageSoftStudio 
      data={greenBuildingData} 
      accentColor="#2e7d32" // Sustainable Forest Green
    />
  );
}

export default GreenBuildingFeatures;