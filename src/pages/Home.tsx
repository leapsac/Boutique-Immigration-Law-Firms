import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
