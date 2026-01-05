import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Features from "./components/Features/Features";
import SLAStats from "./components/SLAStats/SLAStats";
import SDKIntegration from "./components/SDKIntegration/SDKIntegration";
import SDKPlatforms from "./components/SDKPlatforms/SDKPlatforms";
import PaywallABTesting from "./components/PaywallABTesting/PaywallABTesting";
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";
import EnterprisePlatform from "./components/EnterprisePlatform/EnterprisePlatform";
import TrustSection from "./components/TrustSection/TrustSection";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <SLAStats />
        <SDKIntegration />
        <SDKPlatforms />
        <PaywallABTesting />
        <TestimonialsCarousel />
        <EnterprisePlatform />
        <TrustSection />
        <CaseStudies />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
