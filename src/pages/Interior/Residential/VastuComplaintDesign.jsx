import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { vastuData } from '../../../Data'; 
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const VastuComplaintDesign = () => {
  return (
    <ServicePageSoftStudio 
      data={vastuData} 
      accentColor="#e67e22" 
    />
  );
}

export default VastuComplaintDesign;