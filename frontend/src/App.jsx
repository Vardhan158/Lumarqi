import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LumarLoader from "./components/LumarLoader";

/* Pages */
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";

/* Services */
import StrategyAdvisory from "./pages/services/strategy-advisory";
import AnalyticsRoadmap from "./pages/services/analytics-roadmap";
import DataStrategy from "./pages/services/data-strategy";
import PlatformStrategy from "./pages/services/platform-strategy";
import EngineerYourData from "./pages/services/engineer-your-data";
import DataModernization from "./pages/services/data-modernization";
import DataFoundation from "./pages/services/data-foundation";
import DataOperations from "./pages/services/data-operations";
import AIML from "./pages/services/ai-ml";
import DataScience from "./pages/services/data-science";
import AIEngineering from "./pages/services/ai-engineering";
import MLProductsPlatforms from "./pages/services/ml-products-platforms";
import OperationalizeInsights from "./pages/services/operationalize-insights";
import ExperienceConsulting from "./pages/services/experience-consulting";
import ApplicationEngineering from "./pages/services/application-engineering";
import BusinessIntelligence from "./pages/services/business-intelligence";
import MLOps from "./pages/services/mlops";

/* Industry */
import IndustryIndex from "./pages/industry";
import CPG from "./pages/industry/cpg";
import Retail from "./pages/industry/retail";
import BFS from "./pages/industry/bfs";
import Insurance from "./pages/industry/insurance";
import Manufacturing from "./pages/industry/manufacturing";
import Logistics from "./pages/industry/logistics";
import LifeSciences from "./pages/industry/life-sciences";
import Healthcare from "./pages/industry/healthcare";
import TechTelecomMedia from "./pages/industry/technology-telecom-media";

/* Company */
import CompanyIndex from "./pages/company";
import Contact from "./pages/company/contact";
import Careers from "./pages/company/careers";
import MissionValues from "./pages/company/mission-values";
import StrategicPartner from "./pages/company/StrategicPartner";
import Leadership from "./pages/company/Leadership";
import News from "./pages/company/news";
import Newsletters from "./pages/company/newsletters";
import Webinars from "./pages/company/webinars";

/* Case Studies */
import CaseStudyAI from "./pages/case-studies/CaseStudyAI";
import CaseStudyDetail from "./pages/case-studies/CaseStudyDetail";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <LumarLoader isVisible={loading} />

      {/* App */}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/ai-agents" element={<CaseStudyAI />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

            {/* Services */}
            <Route path="/services" element={<StrategyAdvisory />} />
            <Route path="/services/strategy-advisory" element={<StrategyAdvisory />} />
            <Route path="/services/strategy-advisory/analytics-roadmap" element={<AnalyticsRoadmap />} />
            <Route path="/services/strategy-advisory/data-strategy" element={<DataStrategy />} />
            <Route path="/services/strategy-advisory/platform-strategy" element={<PlatformStrategy />} />
            <Route path="/services/engineer-your-data" element={<EngineerYourData />} />
            <Route path="/services/engineer-your-data/data-modernization" element={<DataModernization />} />
            <Route path="/services/engineer-your-data/data-foundation" element={<DataFoundation />} />
            <Route path="/services/engineer-your-data/data-operations" element={<DataOperations />} />
            <Route path="/services/ai-ml" element={<AIML />} />
            <Route path="/services/ai-ml/data-science" element={<DataScience />} />
            <Route path="/services/ai-ml/ai-engineering" element={<AIEngineering />} />
            <Route path="/services/ai-ml/ml-products-platforms" element={<MLProductsPlatforms />} />
            <Route path="/services/operationalize-insights" element={<OperationalizeInsights />} />
            <Route path="/services/operationalize-insights/experience-consulting" element={<ExperienceConsulting />} />
            <Route path="/services/operationalize-insights/application-engineering" element={<ApplicationEngineering />} />
            <Route path="/services/operationalize-insights/business-intelligence" element={<BusinessIntelligence />} />
            <Route path="/services/operationalize-insights/mlops" element={<MLOps />} />

            {/* Industries */}
            <Route path="/industry" element={<IndustryIndex />} />
            <Route path="/industry/cpg" element={<CPG />} />
            <Route path="/industry/cpg/retail" element={<Retail />} />
            <Route path="/industry/bfs" element={<BFS />} />
            <Route path="/industry/bfs/insurance" element={<Insurance />} />
            <Route path="/industry/manufacturing" element={<Manufacturing />} />
            <Route path="/industry/manufacturing/logistics" element={<Logistics />} />
            <Route path="/industry/life-sciences" element={<LifeSciences />} />
            <Route path="/industry/life-sciences/healthcare" element={<Healthcare />} />
            <Route path="/industry/technology-telecom-media" element={<TechTelecomMedia />} />

            {/* Company */}
            <Route path="/company" element={<CompanyIndex />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/mission-values" element={<MissionValues />} />
            <Route path="/company/StrategicPartners" element={<StrategicPartner />} />
            <Route path="/company/leadership" element={<Leadership />} />
            <Route path="/company/news" element={<News />} />
            <Route path="/company/newsletters" element={<Newsletters />} />
            <Route path="/company/webinars" element={<Webinars />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
