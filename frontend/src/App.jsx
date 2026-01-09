import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'

// Service Pages
import StrategyAdvisory from './pages/services/strategy-advisory'
import AnalyticsRoadmap from './pages/services/analytics-roadmap'
import DataStrategy from './pages/services/data-strategy'
import PlatformStrategy from './pages/services/platform-strategy'
import EngineerYourData from './pages/services/engineer-your-data'
import DataModernization from './pages/services/data-modernization'
import DataFoundation from './pages/services/data-foundation'
import DataOperations from './pages/services/data-operations'
import AIML from './pages/services/ai-ml'
import DataScience from './pages/services/data-science'
import AIEngineering from './pages/services/ai-engineering'
import MLProductsPlatforms from './pages/services/ml-products-platforms'
import OperationalizeInsights from './pages/services/operationalize-insights'
import ExperienceConsulting from './pages/services/experience-consulting'
import ApplicationEngineering from './pages/services/application-engineering'
import BusinessIntelligence from './pages/services/business-intelligence'
import MLOps from './pages/services/mlops'

// Industry Pages
import IndustryIndex from './pages/industry/index'

// Company Pages
import CompanyIndex from './pages/company/index'
import Contact from './pages/company/contact'
import Careers from './pages/company/careers'
import MissionValues from './pages/company/mission-values'
import Investors from './pages/company/investors'
import People from './pages/company/people'
import News from './pages/company/news'
import Newsletters from './pages/company/newsletters'
import Webinars from './pages/company/webinars'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />

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

        {/* Company */}
        <Route path="/company" element={<CompanyIndex />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/mission-values" element={<MissionValues />} />
        <Route path="/company/investors" element={<Investors />} />
        <Route path="/company/people" element={<People />} />
        <Route path="/company/news" element={<News />} />
        <Route path="/company/newsletters" element={<Newsletters />} />
        <Route path="/company/webinars" element={<Webinars />} />
      </Routes>
    </Router>
  )
}

export default App