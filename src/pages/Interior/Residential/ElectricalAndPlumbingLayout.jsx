import React from 'react';
import { mepData } from '../../../Data';
import ServicePageBuilder from '../../../components/common/ServicePageBuilder';

const ElectricalAndPlumbingLayout = () => {
  
  return <ServicePageBuilder data={mepData} accentColor="#475569" />;
};

export default ElectricalAndPlumbingLayout;