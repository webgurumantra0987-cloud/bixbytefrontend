import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { complianceData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const MailStreetAndComplience = () => {
  return (
    <ServicePageBuilder 
      data={complianceData} 
      accentColor="#34495e" // Deep Slate Blue
    />
  );
}

export default MailStreetAndComplience;