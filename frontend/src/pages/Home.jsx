import React from 'react'
import FullWidthSlider from '../components/FullWidthSlider'
import WhatWeDoSection from '../components/WhatWeDoSection'
import GreatPlaceToWorkSection from '../components/GreatPlaceToWorkSection'
import ServicesPillars from '../components/ServicesPillars'
import IndustryAugmentationSection from '../components/IndustryAugmentationSection'
import OpenIPSection from '../components/OpenIPSection'
import PartnershipsSection from '../components/PartnershipsSection'
import InsightsFeaturedSection from '../components/InsightsFeaturedSection'
import AwardsRecognitions from '../components/AwardsRecognitions'
import CareersCTASection from '../components/CareersCTASection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <FullWidthSlider />
      <WhatWeDoSection />
      <GreatPlaceToWorkSection />
      <ServicesPillars />
      <IndustryAugmentationSection />
      <OpenIPSection />
      <PartnershipsSection />
      <InsightsFeaturedSection />
      <AwardsRecognitions />
      <CareersCTASection />
      <Footer />
    </div>
  )
}

export default Home 