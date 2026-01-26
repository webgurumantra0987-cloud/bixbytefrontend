import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { mallAuthorityData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const MallAndAuthority = () => {
  return (
    <ServicePageGallery 
      data={mallAuthorityData} 
      accentColor="#f9a825" 
    />
  );
}

export default MallAndAuthority;