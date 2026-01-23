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
import CorporateSpacePlanning from './pages/Interior/Corporate/CorporateSpacePlanning';
import ErgonomicWorkstationDesign from './pages/Interior/Corporate/ErgonomicWorkstationDesign';
import CeoCabinandManagementOffices from './pages/Interior/Corporate/CeoCabinandManagementOffices';
import BoardroomAndConfrenceRoomDesign from './pages/Interior/Corporate/BoardroomAndConfrenceRoomDesign';
import CorporateBrandingIntregration from './pages/Interior/Corporate/CorporateBrandingIntregration';
import ModularFurnitureSolution from './pages/Interior/Corporate/ModularFurnitureSolution';
import SmartLightingAndAutomation from './pages/Interior/Corporate/SmartLightingAndAutomation';
import SoundProofingAndAcoustics from './pages/Interior/Corporate/SoundProofingAndAcoustics';
import SustaibleAndGreenInteriosSetup from './pages/Interior/Corporate/SustaibleAndGreenInteriosSetup';
import ItAvAndVideoConfrencingSetup from './pages/Interior/Corporate/ItAvAndVideoConfrencingSetup';
import TurnkeyProjectExecution from './pages/Interior/Corporate/TurnkeyProjectExecution';
import AmcAndPostHandoverSupport from './pages/Interior/Corporate/AmcAndPostHandoverSupport';


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




        {/* interiour   commercial */} 
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
         <Route path="/workstation-design" element={<WorkstationCabionDesign />} />
        {/*   interion corporate */}
        <Route path="/corporate-planning" element={<CorporateSpacePlanning />} />
        <Route path="/ergonomic-design" element={<ErgonomicWorkstationDesign />} />
        <Route path="/executive-offices" element={<CeoCabinandManagementOffices />} />
        <Route path="/conference-rooms" element={<BoardroomAndConfrenceRoomDesign />} />
        <Route path="/corporate-branding" element={<CorporateBrandingIntregration />} />
        <Route path="/modular-furniture" element={<ModularFurnitureSolution />} />
        <Route path="/smart-automation" element={<SmartLightingAndAutomation />} />        
        <Route path="/soundproofing" element={<SoundProofingAndAcoustics />} />
        <Route path="/sustainable-green" element={<SustaibleAndGreenInteriosSetup />} />
        <Route path="/it-av-setup" element={<ItAvAndVideoConfrencingSetup />} />
        <Route path="/turnkey-execution" element={<TurnkeyProjectExecution />} />
        <Route path="/amc-support" element={<AmcAndPostHandoverSupport />} />

 








      </Routes>
      <Footer />
    </Router>
  )
}

export default App;