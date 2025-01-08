'use client'
import HeroSection from '@/app/ui/[Biography]/HeroSection.jsx'
import TimelineSection from '@/app/ui/[Biography]/TimelineSection.jsx'
import LogoSection from '@/app/ui/[Biography]/LogoSection.jsx'
import ContentSection from '@/app/ui/[Biography]/ContentSection.jsx'

export default function Biography() {

  return (
    <div>
      <main className="isolate">
        <HeroSection />
        <TimelineSection />
        <LogoSection />
        <ContentSection />
      </main>
    </div>
  )
}
