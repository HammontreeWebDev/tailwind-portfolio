'use client'
import HeroSection from '@/app/ui/[Biography]/HeroSection'
import TimelineSection from '@/app/ui/[Biography]/TimelineSection'
import LogoSection from '@/app/ui/[Biography]/LogoSection'
import ContentSection from '@/app/ui/[Biography]/ContentSection'

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
