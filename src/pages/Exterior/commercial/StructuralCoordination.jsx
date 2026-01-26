import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { structuralCoordinationData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const StructuralCoordination = () => {
  return (
    <ServicePageBuilder 
      data={structuralCoordinationData} 
      accentColor="#283593" // Deep Steel Blue
    />
  );
}

export default StructuralCoordination;