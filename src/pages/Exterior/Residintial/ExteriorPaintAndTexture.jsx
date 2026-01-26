import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { exteriorPaintData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const ExteriorPaintAndTexture = () => {
  return (
    <ServicePageSoftStudio 
      data={exteriorPaintData} 
      accentColor="#8d6e63" // Rich Terra Brown
    />
  );
}

export default ExteriorPaintAndTexture;