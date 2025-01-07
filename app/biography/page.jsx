'use client'
import HeroSection from '../ui/[Biography]/HeroSection'
import TimelineSection from '../ui/[Biography]/TimelineSection'
import LogoSection from '../ui/[Biography]/LogoSection'
import ContentSection from '../ui/[Biography]/ContentSection'

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
