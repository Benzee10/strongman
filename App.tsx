import React from 'react';
import BenefitsSection from './components/BenefitsSection';
import FaqSection from './components/FaqSection';
import FloatingCta from './components/FloatingCta';
import Footer from './components/Footer';
import GuaranteeSection from './components/GuaranteeSection';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import OrderSection from './components/OrderSection';
import PricingSection from './components/PricingSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TestimonialSection from './components/TestimonialSection';
import UrgencySection from './components/UrgencySection';
import SealOfQualitySection from './components/SealOfQualitySection';

function App() {
  return (
    <div className="bg-black text-white font-sans antialiased">
      <main>
        <HeroSection />
        <ProblemSection />
        <UrgencySection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialSection />
        <PricingSection />
        <GuaranteeSection />
        <SealOfQualitySection />
        <OrderSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

export default App;
