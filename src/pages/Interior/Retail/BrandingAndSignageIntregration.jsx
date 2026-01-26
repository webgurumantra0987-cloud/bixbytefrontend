import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { brandingData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const BrandingAndSignageIntregration = () => {
  return (
    <ServicePageBuilder 
      data={brandingData} 
      accentColor="#283593" // Deep Cobalt Blue
    />
  );
}

export default BrandingAndSignageIntregration;