import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { landscapeDrivewayData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const LandscapeAndDrivewayPlaning = () => {
  return (
    <ServicePageSoftStudio 
      data={landscapeDrivewayData} 
      accentColor="#689f38" // Natural Moss Green
    />
  );
}

export default LandscapeAndDrivewayPlaning;