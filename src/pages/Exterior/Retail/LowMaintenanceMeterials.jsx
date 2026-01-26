import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { lowMaintenanceData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

/**
 * LowMaintenanceMeterials Component
 * Showcases high-durability, low-maintenance architectural materials for commercial use.
 */
const LowMaintenanceMeterials = () => {
  return (
    <ServicePageGallery 
      data={lowMaintenanceData} 
      accentColor="#2e7d32" // Moss Green
    />
  );
}

export default LowMaintenanceMeterials;