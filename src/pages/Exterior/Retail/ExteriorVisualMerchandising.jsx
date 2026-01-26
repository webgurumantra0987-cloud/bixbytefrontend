import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { visualMerchandisingDatas } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';


const ExteriorVisualMerchandising = () => {
  return (
    <ServicePageSoftStudio 
      data={visualMerchandisingDatas} 
      accentColor="#c2185b" // Vibrant Magenta
    />
  );
}

export default ExteriorVisualMerchandising;