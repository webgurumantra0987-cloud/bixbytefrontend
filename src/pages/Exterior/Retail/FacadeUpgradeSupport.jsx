import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { facadeUpgradeData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

/**
 * FacadeUpgradeSupport Component
 * Focuses on the technical refurbishment and aesthetic renewal of existing commercial facades.
 */
const FacadeUpgradeSupport = () => {
  return (
    <ServicePageSoftStudio 
      data={facadeUpgradeData} 
      accentColor="#b8860b" // Structural Dark Gold
    />
  );
}

export default FacadeUpgradeSupport;