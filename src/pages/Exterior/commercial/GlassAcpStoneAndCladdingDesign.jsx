import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { claddingData } from '../../../Data';

const GlassAcpStoneAndCladdingDesign = () => {
  return (
    <ServicePageMinimal 
      data={claddingData} 
      accentColor="#78909c" // Metallic Silver / Slate
    />
  );
}

export default GlassAcpStoneAndCladdingDesign;