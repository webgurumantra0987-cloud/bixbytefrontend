import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { waterproofingData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const WaterProofingAndDrainage = () => {
  return (
    <ServicePageSoftStudio 
      data={waterproofingData} 
      accentColor="#0277bd" // Technical Blue
    />
  );
}

export default WaterProofingAndDrainage;