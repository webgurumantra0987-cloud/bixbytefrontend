import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { executionData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';

const ProjectExecutionAndSupervision = () => {
  return (
    <ServicePageGallery 
      data={executionData} 
      accentColor="#f57c00" // Deep Amber
    />
  );
}

export default ProjectExecutionAndSupervision;