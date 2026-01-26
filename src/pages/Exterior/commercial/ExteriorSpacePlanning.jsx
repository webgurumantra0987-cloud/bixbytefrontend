import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { exteriorPlanningData } from '../../../Data';

const ExteriorSpacePlanning = () => {
  return (
    <ServicePageMinimal 
      data={exteriorPlanningData} 
      accentColor="#8d6e63" // Earth Tone / Terracotta
    />
  );
}

export default ExteriorSpacePlanning;