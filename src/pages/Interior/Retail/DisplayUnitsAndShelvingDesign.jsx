import React from 'react';
import { shelvingData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const DisplayUnitsAndShelvingDesign = () => {
  return (
    <ServicePageBuilder 
      data={shelvingData} 
      accentColor="#d4af37" // Burnished Gold
    />
  );
}

export default DisplayUnitsAndShelvingDesign;