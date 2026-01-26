import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { spaceSavingData } from '../../../Data';

const SpaceSavingSolutions = () => {
  return (
    <ServicePageBuilder 
      data={spaceSavingData} 
      accentColor="#4a69bd" 
    />
  );
}


export default SpaceSavingSolutions;