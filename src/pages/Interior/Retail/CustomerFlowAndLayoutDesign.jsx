import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { customerFlowData } from '../../../Data';

const CustomerFlowAndLayoutDesign = () => {
  return (
    <ServicePageMinimal 
      data={customerFlowData} 
      accentColor="#006064" // Deep Teal
    />
  );
}

export default CustomerFlowAndLayoutDesign;