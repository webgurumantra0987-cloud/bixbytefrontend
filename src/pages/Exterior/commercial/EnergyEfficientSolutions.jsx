import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { energyEfficientData } from '../../../Data';

const EnergyEfficientSolutions = () => {
  return (
    <ServicePageMinimal 
      data={energyEfficientData} 
      accentColor="#4f7942" // Sustainable Sage Green
    />
  );
}

export default EnergyEfficientSolutions;