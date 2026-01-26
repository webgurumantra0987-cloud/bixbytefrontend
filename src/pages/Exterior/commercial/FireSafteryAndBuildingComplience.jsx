import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { fireSafetyData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const FireSafteryAndBuildingComplience = () => {
  return (
    <ServicePageBuilder 
      data={fireSafetyData} 
      accentColor="#b71c1c" // Safety Crimson
    />
  );
}

export default FireSafteryAndBuildingComplience;