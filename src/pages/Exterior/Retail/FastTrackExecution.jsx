import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { fastTrackExecutionData } from '../../../Data';
import ServicePageGallery from '../../../components/common/ServicePageGallery';


const FastTrackExecution = () => {
  return (
    <ServicePageGallery 
      data={fastTrackExecutionData} 
      accentColor="#d32f2f" // High-Velocity Red
    />
  );
}

export default FastTrackExecution;