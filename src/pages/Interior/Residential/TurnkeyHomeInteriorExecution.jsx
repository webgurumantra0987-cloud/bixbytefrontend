import React from 'react';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';
import { turnkeyData } from '../../../Data';

const TurnkeyHomeInteriorExecution = () => {
  return (
    <ServicePageBuilder 
      data={turnkeyData} 
      accentColor="#d35400" // Safety Orange / Burnt Umber
    />
  );
}

export default TurnkeyHomeInteriorExecution;