import React, { useState, useEffect, lazy, Suspense } from 'react'
import HeroSection from './components/HeroSection'
import CaseStudies from './pages/CaseStudies'

// Lazy load service pages
const StrategyAdvisory = lazy(() => import('./pages/services/strategy-advisory'))
const AnalyticsRoadmap = lazy(() => import('./pages/services/strategy-advisory/analytics-roadmap'))
const DataStrategy = lazy(() => import('./pages/services/strategy-advisory/data-strategy'))
const PlatformStrategy = lazy(() => import('./pages/services/strategy-advisory/platform-strategy'))

const EngineerYourData = lazy(() => import('./pages/services/engineer-your-data'))
const DataModernization = lazy(() => import('./pages/services/engineer-your-data/data-modernization'))
const DataFoundation = lazy(() => import('./pages/services/engineer-your-data/data-foundation'))
const DataOperations = lazy(() => import('./pages/services/engineer-your-data/data-operations'))

const DifferentiateWithAIML = lazy(() => import('./pages/services/ai-ml'))
const DataScience = lazy(() => import('./pages/services/ai-ml/data-science'))
const AIEngineering = lazy(() => import('./pages/services/ai-ml/ai-engineering'))
const MLProductsPlatforms = lazy(() => import('./pages/services/ai-ml/ml-products-platforms'))

const OperationalizeInsights = lazy(() => import('./pages/services/operationalize-insights'))
const ExperienceConsulting = lazy(() => import('./pages/services/operationalize-insights/experience-consulting'))
const ApplicationEngineering = lazy(() => import('./pages/services/operationalize-insights/application-engineering'))
const BusinessIntelligence = lazy(() => import('./pages/services/operationalize-insights/business-intelligence'))
const MLOps = lazy(() => import('./pages/services/operationalize-insights/mlops'))

// Lazy load industry pages
const Industry = lazy(() => import('./pages/industry'))
const CPG = lazy(() => import('./pages/industry/cpg'))
const Retail = lazy(() => import('./pages/industry/cpg/retail'))

const BFS = lazy(() => import('./pages/industry/bfs'))
const Insurance = lazy(() => import('./pages/industry/bfs/insurance'))

const Manufacturing = lazy(() => import('./pages/industry/manufacturing'))
const Logistics = lazy(() => import('./pages/industry/manufacturing/logistics'))

const LifeSciences = lazy(() => import('./pages/industry/life-sciences'))
const Healthcare = lazy(() => import('./pages/industry/life-sciences/healthcare'))

const TechnologyTelecomMedia = lazy(() => import('./pages/industry/technology-telecom-media'))

// Lazy load company pages
const Company = lazy(() => import('./pages/company'))
const MissionValues = lazy(() => import('./pages/company/mission-values'))
const Investors = lazy(() => import('./pages/company/investors'))
const People = lazy(() => import('./pages/company/people'))
const ContactUs = lazy(() => import('./pages/company/contact'))
const Careers = lazy(() => import('./pages/company/careers'))
const News = lazy(() => import('./pages/company/news'))
const Newsletters = lazy(() => import('./pages/company/newsletters'))
const Webinars = lazy(() => import('./pages/company/webinars'))

// Loading component
const LoadingPage = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <p className="text-slate-600">Loading...</p>
    </div>
  </div>
)

const App = () => {
  const [path, setPath] = useState(window.location.pathname || '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const renderPage = () => {
    // Strategy & Advisory pages
    if (path === '/services/strategy-advisory/analytics-roadmap') {
      return <AnalyticsRoadmap />
    }
    if (path === '/services/strategy-advisory/data-strategy') {
      return <DataStrategy />
    }
    if (path === '/services/strategy-advisory/platform-strategy') {
      return <PlatformStrategy />
    }
    if (path === '/services/strategy-advisory') {
      return <StrategyAdvisory />
    }

    // Engineer Your Data pages
    if (path === '/services/engineer-your-data/data-modernization') {
      return <DataModernization />
    }
    if (path === '/services/engineer-your-data/data-foundation') {
      return <DataFoundation />
    }
    if (path === '/services/engineer-your-data/data-operations') {
      return <DataOperations />
    }
    if (path === '/services/engineer-your-data') {
      return <EngineerYourData />
    }

    // Differentiate with AI/ML pages
    if (path === '/services/ai-ml/data-science') {
      return <DataScience />
    }
    if (path === '/services/ai-ml/ai-engineering') {
      return <AIEngineering />
    }
    if (path === '/services/ai-ml/ml-products-platforms') {
      return <MLProductsPlatforms />
    }
    if (path === '/services/ai-ml') {
      return <DifferentiateWithAIML />
    }

    // Operationalize Insights pages
    if (path === '/services/operationalize-insights/experience-consulting') {
      return <ExperienceConsulting />
    }
    if (path === '/services/operationalize-insights/application-engineering') {
      return <ApplicationEngineering />
    }
    if (path === '/services/operationalize-insights/business-intelligence') {
      return <BusinessIntelligence />
    }
    if (path === '/services/operationalize-insights/mlops') {
      return <MLOps />
    }
    if (path === '/services/operationalize-insights') {
      return <OperationalizeInsights />
    }

    // Industry pages
    if (path === '/industry/cpg/retail') {
      return <Retail />
    }
    if (path === '/industry/cpg') {
      return <CPG />
    }

    if (path === '/industry/bfs/insurance') {
      return <Insurance />
    }
    if (path === '/industry/bfs') {
      return <BFS />
    }

    if (path === '/industry/manufacturing/logistics') {
      return <Logistics />
    }
    if (path === '/industry/manufacturing') {
      return <Manufacturing />
    }

    if (path === '/industry/life-sciences/healthcare') {
      return <Healthcare />
    }
    if (path === '/industry/life-sciences') {
      return <LifeSciences />
    }

    if (path === '/industry/technology-telecom-media') {
      return <TechnologyTelecomMedia />
    }
    if (path === '/industry') {
      return <Industry />
    }

    // Company pages
    if (path === '/company/mission-values') {
      return <MissionValues />
    }
    if (path === '/company/investors') {
      return <Investors />
    }
    if (path === '/company/people') {
      return <People />
    }
    if (path === '/company/contact') {
      return <ContactUs />
    }
    if (path === '/company/careers') {
      return <Careers />
    }
    if (path === '/company/news') {
      return <News />
    }
    if (path === '/company/newsletters') {
      return <Newsletters />
    }
    if (path === '/company/webinars') {
      return <Webinars />
    }
    if (path === '/company') {
      return <Company />
    }

    if (path.startsWith('/case-studies')) {
      return <CaseStudies />
    }

    // Default home page
    return <HeroSection />
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      {renderPage()}
    </Suspense>
  )
}

export default App
