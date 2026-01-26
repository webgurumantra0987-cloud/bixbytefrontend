import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { waterproofMaterialData } from '../../../Data';

const WaterProofMaterial = () => {
  return (
    <ServicePageMinimal 
      data={waterproofMaterialData} 
      accentColor="#01579b" // Deep Navy Blue
    />
  );
}

export default WaterProofMaterial;