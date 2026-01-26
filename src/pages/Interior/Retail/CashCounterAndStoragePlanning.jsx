import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { cashCounterData } from '../../../Data';

const CashCounterAndStoragePlanning = () => {
  return (
    <ServicePageMinimal 
      data={cashCounterData} 
      accentColor="#2d3436" 
    />
  );
}

export default CashCounterAndStoragePlanning;