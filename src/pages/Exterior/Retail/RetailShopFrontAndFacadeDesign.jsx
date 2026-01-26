import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { retailDesignData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

/**
 * RetailShopFrontAndFacadeDesign Component
 * The flagship service for commercial exteriors, focusing on branding and glazing engineering.
 */
const RetailShopFrontAndFacadeDesign = () => {
  return (
    <ServicePageSoftStudio 
      data={retailDesignData} 
      accentColor="#212121" // Premium Charcoal
    />
  );
}

export default RetailShopFrontAndFacadeDesign;