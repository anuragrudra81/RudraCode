import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Suspense fallback={<div className="w-full py-32 text-center">Loading testimonials...</div>}>
        <TestimonialsSection />
      </Suspense>
    </>
  );
}
