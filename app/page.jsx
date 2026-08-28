import HeroSection from "@/app/ui/brand/HeroSection.jsx";
import ServicesSection from "@/app/ui/common/ServicesSection/ServicesSection.jsx";
import TestimonialsSection from "@/app/ui/common/TestimonialsSection/TestimonialsSection.jsx";

export const metadata = {
  title: 'Elite Web & App Engineering',
  description:
    'Hammontree Full-Stack Solutions designs and builds custom web and mobile applications for startups and enterprise clients. Based in Central Florida.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hammontree Full-Stack Solutions — Elite Web & App Engineering',
    description:
      'Custom web and app development for startups and enterprise. Design, engineering, and launch — done right.',
    url: '/',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}
