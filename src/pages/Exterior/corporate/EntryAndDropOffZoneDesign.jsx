import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { entryZoneData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const EntryAndDropOffZoneDesign = () => {
  return (
    <ServicePageBuilder
      data={entryZoneData} 
      accentColor="#424242" // Sophisticated Graphite
    />
  );
}

export default EntryAndDropOffZoneDesign;