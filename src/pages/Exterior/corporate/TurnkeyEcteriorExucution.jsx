import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { turnkeyExteriorData } from '../../../Data';

const TurnkeyEcteriorExucution = () => {
  return (
    <ServicePageMinimal 
      data={turnkeyExteriorData} 
      accentColor="#212121" // Command Iron
    />
  );
}

export default TurnkeyEcteriorExucution;