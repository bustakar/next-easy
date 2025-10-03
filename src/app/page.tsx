import CallToAction from '@/app/components/call-to-action';
import Features from '@/app/components/features-1';
import FooterSection from '@/app/components/footer';
import HeroSection from '@/app/components/hero-section';
import Pricing from '@/components/pricing/pricing-table';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
      <CallToAction />
      <FooterSection />
    </>
  );
}
