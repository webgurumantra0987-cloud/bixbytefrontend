import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { homeElevationData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const HomeElevationAndFacadeDesign = () => {
  return (
    <ServicePageGallery 
      data={homeElevationData} 
      accentColor="#8d6e63" // Luxury Bronze
    />
  );
}

export default HomeElevationAndFacadeDesign;