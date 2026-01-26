import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { fastTrackData } from '../../../Data';
import ServicePageSoftStudio from '../../../components/common/ServicePageSoftStudio';

const FastTrackExecution = () => {
  return (
    <ServicePageSoftStudio 
      data={fastTrackData} 
      accentColor="#c0392b" // Racing Red / Crimson
    />
  );
}

export default FastTrackExecution;