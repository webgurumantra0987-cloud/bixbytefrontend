import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { facadeMaintenanceData } from '../../../Data';

const FacadeMaintenancePlanning = () => {
  return (
    <ServicePageMinimal 
      data={facadeMaintenanceData} 
      accentColor="#006064" // Deep Teal
    />
  );
}

export default FacadeMaintenancePlanning;