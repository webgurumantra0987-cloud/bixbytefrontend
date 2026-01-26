import React from 'react';
import ServicePageMinimal from '../../../components/common/ServicePageMinimal';
import { highVisibilityBrandingData } from '../../../Data';

/**
 * HighVisibilityBranding Component
 * Focuses on large-scale architectural branding and identity integration.
 */
const HighVisibilityBranding = () => {
  return (
    <ServicePageMinimal 
      data={highVisibilityBrandingData} 
      accentColor="#2962ff" // Electric Blue
    />
  );
}

export default HighVisibilityBranding;