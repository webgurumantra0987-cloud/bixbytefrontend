import React from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from '../components/common/HeroSection'
import { interiorData, exteriorData } from '../Data'

const ServicePage = () => {
  const { serviceSlug } = useParams();

  // 1. Find the service data based on the URL slug
  const allServices = [...interiorData, ...exteriorData].flatMap(cat => cat.services);
  const currentService = allServices.find(s => s.path.includes(serviceSlug));

  // 2. Fallback title if data isn't found
  const displayTitle = currentService ? currentService.name : "Architecture Service";

  return (
    <main>
      <HeroSection 
        subtitle="Expert Architectural Solutions"
        title={displayTitle} 
        highlight="Project."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
      />
      
      {/* Add your specific content for the service here */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif italic mb-6">About this Service</h2>
          <p className="text-gray-600 leading-relaxed">
            Our approach to {displayTitle} focuses on maximizing efficiency 
            and aesthetic flow. We ensure every detail aligns with your vision.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ServicePage;