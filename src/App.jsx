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
import AcpGlassAndMetalFinishes from './pages/Exterior/Retail/AcpGlassAndMetalFinishes';
import AttractiveExteriosLighting from './pages/Exterior/Retail/AttractiveExteriosLighting';
import CostEffectiveSolutions from './pages/Exterior/Retail/CostEffectiveSolutions';
import CustomerEntryPlanning from './pages/Exterior/Retail/CustomerEntryPlanning';
import ExteriorVisualMerchandising from './pages/Exterior/Retail/ExteriorVisualMerchandising';
import FacadeUpgradeSupport from './pages/Exterior/Retail/FacadeUpgradeSupport';
import FastTrackExecution from './pages/Exterior/Retail/FastTrackExecution';
import HighVisibilityBranding from './pages/Exterior/Retail/HighVisibilityBranding';
import LowMaintenanceMeterials from './pages/Exterior/Retail/LowMaintenanceMeterials';
import RetailShopFrontAndFacadeDesign from './pages/Exterior/Retail/RetailShopFrontAndFacadeDesign';
import WindowDisplayAndGlazingDesign from './pages/Exterior/Retail/WindowDisplayAndGlazingDesign';
import AcpAndMetalFacadeSolution from './pages/Exterior/corporate/AcpAndMetalFacadeSolution';
import ArchitecturalNightLightingDesign from './pages/Exterior/corporate/ArchitecturalNightLightingDesign';
import CorporateIdentitybasedExteriorDesign from './pages/Exterior/corporate/CorporateIdentitybasedExteriorDesign';
import CorporateSafetyComplience from './pages/Exterior/corporate/CorporateSafetyComplience';
import CorporateSignageAndLogoPlacement from './pages/Exterior/corporate/CorporateSignageAndLogoPlacement';
import EntryAndDropOffZoneDesign from './pages/Exterior/corporate/EntryAndDropOffZoneDesign';
import FacadeMaintenancePlanning from './pages/Exterior/corporate/FacadeMaintenancePlanning';
import GreenBuildingFeatures from './pages/Exterior/corporate/GreenBuildingFeatures';
import LandScapeAndOutdoorSeatingINtregratoion from './pages/Exterior/corporate/LandScapeAndOutdoorSeatingINtregratoion';
import MordenFacadeAndElevationPlanning from './pages/Exterior/corporate/MordenFacadeAndElevationPlanning';
import TurnkeyEcteriorExucution from './pages/Exterior/corporate/TurnkeyEcteriorExucution';
import BalconyTerraceAndPorchDesign from './pages/Exterior/Residintial/BalconyTerraceAndPorchDesign';
import BudgetBasedExteriorDesign from './pages/Exterior/Residintial/BudgetBasedExteriorDesign';
import ExteriorPaintAndTexture from './pages/Exterior/Residintial/ExteriorPaintAndTexture';
import HomeElevationAndFacadeDesign from './pages/Exterior/Residintial/HomeElevationAndFacadeDesign';
import LandscapeAndDrivewayPlaning from './pages/Exterior/Residintial/LandscapeAndDrivewayPlaning';
import MordenAndTraditionalArchitectural from './pages/Exterior/Residintial/MordenAndTraditionalArchitectural';
import OutdoorAndGardenLIghting from './pages/Exterior/Residintial/OutdoorAndGardenLIghting';
import SiteExecutionAndSupervision from './pages/Exterior/Residintial/SiteExecutionAndSupervision';
import VastuComplaintExteriorPlanning from './pages/Exterior/Residintial/VastuComplaintExteriorPlanning';
import WaterProofingAndDrainage from './pages/Exterior/Residintial/WaterProofingAndDrainage';
import WaterProofMaterial from './pages/Exterior/Residintial/WaterProofMaterial';
import ArchitecturalThemeDevlopment from './pages/Exterior/commercial/ArchitecturalThemeDevlopment';
import BuildingFacadeDesignAndElevation from './pages/Exterior/commercial/BuildingFacadeDesignAndElevation';
import EnergyEfficientSolutions from './pages/Exterior/commercial/EnergyEfficientSolutions';
import EntranceAndFrontageDesign from './pages/Exterior/commercial/EntranceAndFrontageDesign';
import ExteriorSpacePlanning from './pages/Exterior/commercial/ExteriorSpacePlanning';
import FireSafteryAndBuildingComplience from './pages/Exterior/commercial/FireSafteryAndBuildingComplience';
import GlassAcpStoneAndCladdingDesign from './pages/Exterior/commercial/GlassAcpStoneAndCladdingDesign';
import OutdoorLightingAndFacadeIllumination from './pages/Exterior/commercial/OutdoorLightingAndFacadeIllumination';
import ProjectExecutionAndSupervision from './pages/Exterior/commercial/ProjectExecutionAndSupervision';
import SignageAndBrandingIntregration from './pages/Exterior/commercial/SignageAndBrandingIntregration';
import StructuralCoordination from './pages/Exterior/commercial/StructuralCoordination';
import WeatherResistntMetrialSelection from './pages/Exterior/commercial/WeatherResistntMetrialSelection';
import BrandingAndSignageIntregration from './pages/Interior/Retail/BrandingAndSignageIntregration';
import CashCounterAndStoragePlanning from './pages/Interior/Retail/CashCounterAndStoragePlanning';
import CostEffectiveRetailSolution from './pages/Interior/Retail/CostEffectiveRetailSolution';
import CustomerFlowAndLayoutDesign from './pages/Interior/Retail/CustomerFlowAndLayoutDesign';
import DisplayUnitsAndShelvingDesign from './pages/Interior/Retail/DisplayUnitsAndShelvingDesign';
import DurableMetrialSection from './pages/Interior/Retail/DurableMetrialSection';
import LightingForProductHighlighting from './pages/Interior/Retail/LightingForProductHighlighting';
import MailStreetAndComplience from './pages/Interior/Retail/MailStreetAndComplience';
import RetailSpacePlanning from './pages/Interior/Retail/RetailSpacePlanning';
import ShopfrontAndFacadeDesign from './pages/Interior/Retail/ShopfrontAndFacadeDesign';
import VisualMerchandising from './pages/Interior/Retail/VisualMerchandising';
import BudgetBasedCustomization from './pages/Interior/Residential/BudgetBasedCustomization';
import ElectricalAndPlumbingLayout from './pages/Interior/Residential/ElectricalAndPlumbingLayout';
import FlashCeilingAndDecorativeLIghting from './pages/Interior/Residential/FlashCeilingAndDecorativeLIghting';
import FurnitureDesignAndCustomization from './pages/Interior/Residential/FurnitureDesignAndCustomization';
import HomeInteriorConceptDesigs from './pages/Interior/Residential/HomeInteriorConceptDesigs';
import LivingRoomAndBedroomInterios from './pages/Interior/Residential/LivingRoomAndBedroomInterios';
import ModularKitchenDesign from './pages/Interior/Residential/ModularKitchenDesign';
import SpaceSavingSolutions from './pages/Interior/Residential/SpaceSavingSolutions';
import TurnkeyHomeInteriorExecution from './pages/Interior/Residential/TurnkeyHomeInteriorExecution';
import VastuComplaintDesign from './pages/Interior/Residential/VastuComplaintDesign';
import WardrobeAndStorageSolution from './pages/Interior/Residential/WardrobeAndStorageSolution';
import MetrialAndColorSelection from './pages/Interior/Residential/MetrialAndColorSelection';
import MallAndAuthority from './pages/Exterior/Retail/MallAndAuthority';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermAndCondations from './pages/TermAndCondations';


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




        {/*  interior retail */}

        <Route path="/retail-signage" element={<BrandingAndSignageIntregration />} />
        <Route path="/retail-storage" element={<CashCounterAndStoragePlanning />} />
        <Route path="/budget-retail" element={<CostEffectiveRetailSolution />} />
        <Route path="/customer-flow" element={<CustomerFlowAndLayoutDesign />} />
        <Route path="/display-units" element={<DisplayUnitsAndShelvingDesign />} />
        <Route path="/retail-materials" element={<DurableMetrialSection />} />
        <Route path="/fast-track-retail" element={<FastTrackExecution />} />          
        <Route path="/retail-lighting" element={<LightingForProductHighlighting />} />
        <Route path="/mall-compliance" element={<MailStreetAndComplience />} />  
        <Route path="/retail-planning" element={<RetailSpacePlanning />} />
        <Route path="/shopfront-design" element={<ShopfrontAndFacadeDesign />} />        
        <Route path="/merchandising" element={<VisualMerchandising />} />  



        {/*  interior residential */}

        <Route path="/budget-interiors" element={<BudgetBasedCustomization />} />   
        <Route path="/residential-utilities" element={<ElectricalAndPlumbingLayout />} />
        <Route path="/residential-lighting" element={<FlashCeilingAndDecorativeLIghting />} />
        <Route path="/custom-furniture" element={<FurnitureDesignAndCustomization />} />
        <Route path="/space-saving" element={<HomeInteriorConceptDesigs />} />
        <Route path="/room-interiors" element={<LivingRoomAndBedroomInterios />} />   
        <Route path="/modular-kitchen" element={<ModularKitchenDesign />} />
        <Route path="/space-saving" element={<SpaceSavingSolutions />} />
        <Route path="/home-turnkey" element={<TurnkeyHomeInteriorExecution />} />
        <Route path="/vastu-interiors" element={<VastuComplaintDesign />} />    
        <Route path="/residential-signage" element={<WardrobeAndStorageSolution />} />    
        <Route path="/color-consultancy" element={<MetrialAndColorSelection />} />



         {/*  exterios commercial */}

  
        <Route path="/architectural-theme" element={<ArchitecturalThemeDevlopment />} />
        <Route path="/building-facade" element={<BuildingFacadeDesignAndElevation />} />
         <Route path="/energy-solutions" element={<EnergyEfficientSolutions />} />
         <Route path="/entrance-design" element={<EntranceAndFrontageDesign />} />
         <Route path="/exterior-planning" element={<ExteriorSpacePlanning />} />
         <Route path="/exterior-compliance" element={<FireSafteryAndBuildingComplience />} />
         <Route path="/cladding-design" element={<GlassAcpStoneAndCladdingDesign />} />
         <Route path="/facade-lighting" element={<OutdoorLightingAndFacadeIllumination />} />
         <Route path="/exterior-execution" element={<ProjectExecutionAndSupervision />} />
         <Route path="/exterior-branding" element={<SignageAndBrandingIntregration />} />         
         <Route path="/structural-coordination" element={<StructuralCoordination />} />    
         <Route path="/weatherproof-materials" element={<WeatherResistntMetrialSelection />} />

{/*  exterior corporate */}


        <Route path="/metal-facade" element={<AcpAndMetalFacadeSolution />} />
        <Route path="/corporate-night-lighting" element={<ArchitecturalNightLightingDesign />} /> 
         <Route path="/corporate-identity" element={<CorporateIdentitybasedExteriorDesign />} />
         <Route path="/corporate-safety" element={<CorporateSafetyComplience />} />
         <Route path="/corporate-signage" element={<CorporateSignageAndLogoPlacement />} />
         <Route path="/corporate-entry" element={<EntryAndDropOffZoneDesign />} />
         <Route path="/facade-maintenance" element={<FacadeMaintenancePlanning />} />
         <Route path="/green-building" element={<GreenBuildingFeatures />} />    
         <Route path="/corporate-landscape" element={<LandScapeAndOutdoorSeatingINtregratoion />} />      
          <Route path="/fcorporate-facade" element={<MordenFacadeAndElevationPlanning />} />  
          <Route path="/corporate-turnkey" element={<TurnkeyEcteriorExucution />} />



{/* corporate residencial */}


 <Route path="/balcony-design" element={<BalconyTerraceAndPorchDesign />} />   
 <Route path="/budget-exterior" element={<BudgetBasedExteriorDesign />} />
 <Route path="/exterior-finishes" element={<ExteriorPaintAndTexture />} />
 <Route path="/rhome-elevation" element={<HomeElevationAndFacadeDesign />} />
 <Route path="/driveway-planning" element={<LandscapeAndDrivewayPlaning />} />
 <Route path="/architectural-styles" element={<MordenAndTraditionalArchitectural />} />   
 <Route path="/garden-lighting" element={<OutdoorAndGardenLIghting />} />
 <Route path="/site-supervision" element={<SiteExecutionAndSupervision />} />
 <Route path="/vastu-exterior" element={<VastuComplaintExteriorPlanning />} />
 <Route path="/waterproofing" element={<WaterProofingAndDrainage />} />     
 <Route path="/res-weatherproof" element={<WaterProofMaterial />} />
 





         {/*  exterior Retail */}



          <Route path="/retail-finishes" element={<AcpGlassAndMetalFinishes />} />
          <Route path="/retail-exterior-lighting" element={<AttractiveExteriosLighting />} />
          <Route path="/retail-budget" element={<CostEffectiveSolutions />} />
          <Route path="/retail-entry" element={<CustomerEntryPlanning />} />
          <Route path="/retail-storretail-exterior-merch" element={<ExteriorVisualMerchandising />} />
          <Route path="/facade-upgrade" element={<FacadeUpgradeSupport />} />
          <Route path="/retail-fast-track" element={<FastTrackExecution />} />          
          <Route path="/retail-visibility" element={<HighVisibilityBranding />} />
          <Route path="/retail-maintenance" element={<LowMaintenanceMeterials />} />  
          <Route path="/retail-compliance" element={<MallAndAuthority />} />
          <Route path="/retail-facade" element={<RetailShopFrontAndFacadeDesign />} />
          <Route path="/window-glazing" element={<WindowDisplayAndGlazingDesign />} />






 



<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-use" element={<TermAndCondations />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;