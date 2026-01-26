import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { siteExecutionData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const SiteExecutionAndSupervision = () => {
  return (
    <ServicePageBuilder 
      data={siteExecutionData} 
      accentColor="#e65100" // Safety Orange
    />
  );
}

export default SiteExecutionAndSupervision;