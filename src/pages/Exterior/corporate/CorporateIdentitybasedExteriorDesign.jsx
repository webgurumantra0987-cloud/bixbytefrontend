import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { corporateIdentityData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const CorporateIdentitybasedExteriorDesign = () => {
  return (
    <ServicePageSoftStudio 
      data={corporateIdentityData} 
      accentColor="#0d47a1" // Corporate Navy Blue
    />
  );
}

export default CorporateIdentitybasedExteriorDesign;