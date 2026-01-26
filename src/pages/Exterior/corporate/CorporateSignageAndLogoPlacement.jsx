import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { corporateSignageData } from '../../../Data';

const CorporateSignageAndLogoPlacement = () => {
  return (
    <ServicePageMinimal 
      data={corporateSignageData} 
      accentColor="#263238" // Sleek Onyx
    />
  );
}

export default CorporateSignageAndLogoPlacement;