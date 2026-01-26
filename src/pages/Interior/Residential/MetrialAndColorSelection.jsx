import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { materialData } from '../../../Data'; // Ensure this is exported from your Data index

const MetrialAndColorSelection = () => {
  return (
    <ServicePageBuilder 
      data={materialData} 
      accentColor="#a0522d" // Deep Terracotta / Sienna
    />
  );
}

export default MetrialAndColorSelection;