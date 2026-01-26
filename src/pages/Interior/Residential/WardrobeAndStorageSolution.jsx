import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal'; // Using your updated light-mode version
import { wardrobeData } from '../../../Data';

const WardrobeAndStorageSolution = () => {
  return (
    <ServicePageMinimal 
      data={wardrobeData} 
      accentColor="#7a7a7a" 
    />
  );
}

export default WardrobeAndStorageSolution;