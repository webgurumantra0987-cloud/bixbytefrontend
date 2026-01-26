import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { landscapeIntegrationData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const LandScapeAndOutdoorSeatingINtregratoion = () => {
  return (
    <ServicePageSoftStudio 
      data={landscapeIntegrationData} 
      accentColor="#558b2f" // Natural Moss Green
    />
  );
}

export default LandScapeAndOutdoorSeatingINtregratoion;