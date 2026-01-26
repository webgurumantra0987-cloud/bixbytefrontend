import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { shopfrontData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const ShopfrontAndFacadeDesign = () => {
  return (
    <ServicePageSoftStudio 
      data={shopfrontData} 
      accentColor="#b87333" // Burnished Copper
    />
  );
}

export default ShopfrontAndFacadeDesign;