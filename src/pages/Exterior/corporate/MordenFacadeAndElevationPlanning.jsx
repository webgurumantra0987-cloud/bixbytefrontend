import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { modernFacadeData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const MordenFacadeAndElevationPlanning = () => {
  return (
    <ServicePageBuilder 
      data={modernFacadeData} 
      accentColor="#607d8b" // Industrial Slate
    />
  );
}

export default MordenFacadeAndElevationPlanning;