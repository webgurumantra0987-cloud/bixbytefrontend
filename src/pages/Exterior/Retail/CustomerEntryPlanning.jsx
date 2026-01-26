import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { customerEntryData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const CustomerEntryPlanning = () => {
  return (
    <ServicePageSoftStudio 
      data={customerEntryData} 
      accentColor="#1a237e" // Deep Royal Blue
    />
  );
}

export default CustomerEntryPlanning;