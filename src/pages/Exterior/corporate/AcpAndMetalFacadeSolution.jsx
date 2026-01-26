import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { acpFacadeData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const AcpAndMetalFacadeSolution = () => {
  return (
    <ServicePageBuilder 
      data={acpFacadeData} 
      accentColor="#455a64" // Corporate Steel Slate
    />
  );
}

export default AcpAndMetalFacadeSolution;