import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { facadeDesignData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const BuildingFacadeDesignAndElevation = () => {
  return (
    <ServicePageGallery 
      data={facadeDesignData} 
      accentColor="#264653" // Deep Graphite / Teal
    />
  );
}

export default BuildingFacadeDesignAndElevation;