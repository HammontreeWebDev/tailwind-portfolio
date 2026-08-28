'use client';

import GridSection from "@/app/ui/common/GridSection/GridSection";
import HeroImage from "@/app/ui/common/HeroImage/HeroImage.jsx";

const TO_BE_WITH_REPO = 'https://github.com/HammontreeWebDev/to_be_with_counseling';

export default function Portfolio() {
  return (
    <>
      <HeroImage
        eyebrow="Selected work"
        title="Projects That Ship"
        subText="A curated look at client websites and applications — each built with care, performance, and a distinct brand identity. Explore the live sites or dive into the code on GitHub."
        buttonText="View GitHub Repos"
        image1="/img/home/brofit.png"
        image2="/img/home/jesse.png"
        image3="/img/home/outtaTouch.png"
        image4="/img/home/pokewire.png"
        image5="/img/home/toBeWith.png"
        btnHref="https://github.com/HammontreeWebDev"
      />
      <GridSection
        eyebrow="Featured"
        title="Client Projects"
        subTitle="Real products for real businesses — designed, built, and deployed."
        posts={[
          {
            id: 1,
            title: 'BroFit Personal Training',
            href: 'https://www.reesewilder.com/',
            imageUrl: '/img/portfolio/brofit.png',
            alt: 'BroFit Personal Training website screenshot',
            category: { title: 'HTML · Bootstrap · CSS · JavaScript' },
          },
          {
            id: 2,
            title: 'To Be With Counseling',
            href: TO_BE_WITH_REPO,
            imageUrl: '/img/portfolio/tobewith.png',
            alt: 'To Be With Counseling website screenshot',
            category: { title: 'React · Next.js · Tailwind · Figma · Vercel' },
          },
        ]}
      />
    </>
  );
}
