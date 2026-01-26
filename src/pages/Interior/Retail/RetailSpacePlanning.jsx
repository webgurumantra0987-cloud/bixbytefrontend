import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { retailPlanningData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const RetailSpacePlanning = () => {
  return (
    <ServicePageSoftStudio 
      data={retailPlanningData} 
      accentColor="#263238" // Deep Charcoal
    />
  );
}

export default RetailSpacePlanning;