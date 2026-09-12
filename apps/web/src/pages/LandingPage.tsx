import Hero from "../components/LandingPage/Hero";
import TrustStatement from "../components/LandingPage/TrustStatement";
import WhyBlockVault from "../components/LandingPage/WhyBlockVault";
import HowItWorks from "../components/LandingPage/HowItWorks";
import SecuritySection from "../components/LandingPage/SecuritySection";
import ArchitectureVisualization from "../components/LandingPage/ArchitectureVisualization";
import StatsSection from "../components/LandingPage/StatsSection";
import CTASection from "../components/LandingPage/CTASection";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main>
        <Hero />
        <TrustStatement />
        <WhyBlockVault />
        <HowItWorks />
        <SecuritySection />
        <ArchitectureVisualization />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  );
}
