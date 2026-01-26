import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { conceptDesignData } from '../../../Data'; // Ensure you export this from your Data index

const HomeInteriorConceptDesigs = () => {
  return (
    <ServicePageBuilder 
      data={conceptDesignData} 
      accentColor="#556b2f" // Architectural Sage/Muted Green
    />
  );
}

export default HomeInteriorConceptDesigs;