import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SpacePlanningandLayout from './pages/Interior/Commercial/SpacePlanningandLayout';
import OfficeShowroomandIndustrial from './pages/Interior/Commercial/OfficeShowroomandIndustrial';
import ReceptionandareaWaitingdesign from './pages/Interior/Commercial/ReceptionandareaWaitingdesign';
import AcousticTreatment from './pages/Interior/Commercial/AcousticTreatment';
import BrandAllignedAndinteriosContept from './pages/Interior/Commercial/BrandAllignedAndinteriosContept';
import ComplianceWithCommercialBuilding from './pages/Interior/Commercial/ComplianceWithCommercialBuilding';
import ElectricalAndNetworkingLayout from './pages/Interior/Commercial/ElectricalAndNetworkingLayout';
import FlaseCeilingandlightsolution from './pages/Interior/Commercial/FlaseCeilingandlightsolution';
import Hvacandfiresafetycoordation from './pages/Interior/Commercial/Hvacandfiresafetycoordation';
import Materialselectionandfinishing from './pages/Interior/Commercial/Materialselectionandfinishing';
 import ProjectManagementAndExecution from './pages/Interior/Commercial/ProjectManagementAndExecution';

import WorkstationCabionDesign from './pages/Interior/Commercial/WorkstationCabionDesign';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Header isScrolled={isScrolled} />
        <Navbar isScrolled={isScrolled} />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />




        {/* interiour */} 
        <Route path="/space-planning" element={<SpacePlanningandLayout />} />
        <Route path="/office-design" element={<OfficeShowroomandIndustrial />} />
        <Route path="/reception-design" element={<ReceptionandareaWaitingdesign />} />
        <Route path="/acoustic-treatment" element={<AcousticTreatment />} />
        <Route path="/brand-interiors" element={<BrandAllignedAndinteriosContept />} />
         <Route path="/commercial-compliance" element={<ComplianceWithCommercialBuilding />} />
         <Route path="/electrical-networking" element={<ElectricalAndNetworkingLayout />} />
         <Route path="/lighting-solutions" element={<FlaseCeilingandlightsolution />} />
         <Route path="/hvac-safety" element={<Hvacandfiresafetycoordation />} />
         <Route path="/material-selection" element={<Materialselectionandfinishing />} />
         <Route path="/project-management" element={<ProjectManagementAndExecution />} />
         <Route path="/" element={<WorkstationCabionDesign />} />
        {/*   */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;