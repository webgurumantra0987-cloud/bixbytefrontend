import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { glazingDesignData } from '../../../Data';


const WindowDisplayAndGlazingDesign = () => {
  return (
    <ServicePageMinimal 
      data={glazingDesignData} 
      accentColor="#00acc1" // Polished Cyan
    />
  );
}

export default WindowDisplayAndGlazingDesign;