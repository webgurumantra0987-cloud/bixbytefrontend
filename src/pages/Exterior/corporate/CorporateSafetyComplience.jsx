import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { corporateSafetyData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const CorporateSafetyComplience = () => {
  return (
    <ServicePageSoftStudio 
      data={corporateSafetyData} 
      accentColor="#37474f" // Safety Slate / Charcoal
    />
  );
}

export default CorporateSafetyComplience;