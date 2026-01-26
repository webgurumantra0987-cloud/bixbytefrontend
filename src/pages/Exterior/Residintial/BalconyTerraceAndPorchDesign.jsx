import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { outdoorLivingData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const BalconyTerraceAndPorchDesign = () => {
  return (
    <ServicePageSoftStudio 
      data={outdoorLivingData} 
      accentColor="#a1887f" // Warm Sandstone
    />
  );
}

export default BalconyTerraceAndPorchDesign;