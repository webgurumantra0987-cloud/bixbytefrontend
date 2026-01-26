import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { costEffectiveSolutionsData } from '../../../Data';

const CostEffectiveSolutions = () => {
  return (
    <ServicePageMinimal 
      data={costEffectiveSolutionsData} 
      accentColor="#008080" // Smart Teal
    />
  );
}

export default CostEffectiveSolutions;