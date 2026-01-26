import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { costEffectiveRetailData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const CostEffectiveRetailSolution = () => {
  return (
    <ServicePageSoftStudio 
      data={costEffectiveRetailData} 
      accentColor="#d35400" // Industrial Rust / Terracotta
    />
  );
}

export default CostEffectiveRetailSolution;