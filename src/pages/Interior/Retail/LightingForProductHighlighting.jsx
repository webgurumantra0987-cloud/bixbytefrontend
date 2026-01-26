import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { productLightingData } from '../../../Data';

const LightingForProductHighlighting = () => {
  return (
    <ServicePageMinimal 
      data={productLightingData} 
      accentColor="#ffb300" // Brilliant Amber
    />
  );
}

export default LightingForProductHighlighting;