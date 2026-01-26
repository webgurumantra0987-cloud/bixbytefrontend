import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { visualMerchandisingData } from '../../../Data';

const VisualMerchandising = () => {
  return (
    <ServicePageMinimal 
      data={visualMerchandisingData} 
      accentColor="#5e35b1" // Deep Plum / Violet
    />
  );
}

export default VisualMerchandising;