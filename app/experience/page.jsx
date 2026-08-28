'use client';

import GridSection from "@/app/ui/common/GridSection/GridSection.jsx";
import ExpHeroSection from "@/app/ui/[Experience]/ExpHeroSection.jsx";
import TechStack from "../ui/TechStack/TechStack";

export default function Experience() {
  return (
    <>
      <ExpHeroSection />
      <GridSection
        eyebrow="Career"
        title="Professional Experience"
        subTitle="Enterprise engineering by day, premium client work by passion."
        posts={[
          {
            id: 1,
            title: 'Forsyth Health',
            href: 'https://www.linkedin.com/in/kaileb-hammontree/',
            imageUrl: '/img/experience/forsyth_health_logo.jpeg',
            alt: 'Forsyth Health',
            category: { title: 'Mar 2025 – Present · Remote' },
            roleHistory: [
              { title: 'Business Analytics Advisor', dates: 'Jun 2026 – Present' },
              { title: 'Business Analytics Lead Analyst', dates: 'Mar 2025 – Jun 2026' },
            ],
          },
          {
            id: 2,
            title: 'Software Engineering Lead Analyst',
            href: 'https://www.linkedin.com/in/kaileb-hammontree/',
            imageUrl: '/img/experience/evernorth_logo.jpeg',
            alt: 'Evernorth Health Services',
            category: { title: 'Apr 2024 – Mar 2025 · Evernorth Health Services' },
          },
          {
            id: 3,
            title: 'Owner Full Stack Developer',
            href: 'https://www.linkedin.com/company/hammontreefullstacksolutions',
            imageUrl: '/brand/hammontree-logo-full.svg',
            alt: 'Hammontree Full-Stack Solutions',
            imageClassName:
              'aspect-video w-full bg-canvas object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-[2/1] lg:aspect-[3/2]',
            category: { title: 'Jun 2023 – Present · Hammontree Full-Stack Solutions' },
          },
        ]}
      />
      <TechStack />
      <GridSection
        eyebrow="Education"
        title="Certifications & Training"
        subTitle="Continuous learning from one of Florida's top universities."
        posts={[
          {
            id: 1,
            title: 'Full-Stack Coding Boot Camp',
            href: 'https://badgr.com/public/assertions/ewkha2NyQ8-IAo-788fTUA?identity__email=kaileb47@outlook.com',
            imageUrl: '/img/experience/bootCamp.webp',
            alt: 'UCF Coding Boot Camp',
            category: { title: 'Certified Dec 2022 · University of Central Florida' },
          },
          {
            id: 2,
            title: 'Cyber Defense Professional',
            href: 'https://badgr.com/public/assertions/Rxyg7wKwTgWLC07_shNy6A?identity__email=kaileb47@outlook.com',
            imageUrl: '/img/experience/cyber.webp',
            alt: 'Cyber Defense Professional',
            category: { title: 'Certified Dec 2021 · University of Central Florida' },
          },
        ]}
      />
    </>
  );
}
