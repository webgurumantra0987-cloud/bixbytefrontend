import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { brandingIntegrationData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const SignageAndBrandingIntregration = () => {
  return (
    <ServicePageSoftStudio 
      data={brandingIntegrationData} 
      accentColor="#2962ff" // Electric Blue
    />
  );
}

export default SignageAndBrandingIntregration;