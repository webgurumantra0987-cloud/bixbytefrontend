import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { glassCurtainData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const GlassCurtainWallSystem = () => {
  return (
    <ServicePageGallery 
      data={glassCurtainData} 
      accentColor="#0288d1" // Azure Blue
    />
  );
}

export default GlassCurtainWallSystem;