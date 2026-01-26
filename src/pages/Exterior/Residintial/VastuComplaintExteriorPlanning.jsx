import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { vastuExteriorData } from '../../../Data';

const VastuComplaintExteriorPlanning = () => {
  return (
    <ServicePageMinimal 
      data={vastuExteriorData} 
      accentColor="#ff8f00" // Sacred Saffron
    />
  );
}

export default VastuComplaintExteriorPlanning;