import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { weatherMaterialData } from '../../../Data';

const WeatherResistntMetrialSelection = () => {
  return (
    <ServicePageMinimal 
      data={weatherMaterialData} 
      accentColor="#795548" // Earthy Rust / Brown
    />
  );
}

export default WeatherResistntMetrialSelection;