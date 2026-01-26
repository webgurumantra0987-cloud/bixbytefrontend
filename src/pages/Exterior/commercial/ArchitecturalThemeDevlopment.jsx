import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { architecturalThemeData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const ArchitecturalThemeDevlopment = () => {
  return (
    <ServicePageBuilder 
      data={architecturalThemeData} 
      accentColor="#607d8b" // Architectural Slate Grey
    />
  );
}

export default ArchitecturalThemeDevlopment;