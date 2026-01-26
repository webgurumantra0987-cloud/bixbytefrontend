import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { budgetExteriorData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const BudgetBasedExteriorDesign = () => {
  return (
    <ServicePageSoftStudio 
      data={budgetExteriorData} 
      accentColor="#546e7a" 
    />
  );
}

export default BudgetBasedExteriorDesign;