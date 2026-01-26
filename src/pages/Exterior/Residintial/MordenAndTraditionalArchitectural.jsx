import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { architecturalStylesData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const MordenAndTraditionalArchitectural = () => {
  return (
    <ServicePageSoftStudio 
      data={architecturalStylesData} 
      accentColor="#5d4037" // Heritage Bronze
    />
  );
}

export default MordenAndTraditionalArchitectural;