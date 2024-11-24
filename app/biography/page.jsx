'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeroSection from '../ui/[Biography]/HeroSection'
import TimelineSection from '../ui/[Biography]/TimelineSection'
import LogoSection from '../ui/[Biography]/LogoSection'
import ContentSection from '../ui/[Biography]/ContentSection'
import StatsSection from '../ui/[Biography]/StatsSection'
import AltContentSection from '../ui/[Biography]/AltContentSection'

export default function Biography() {

  return (
    <div>
      <main className="isolate">
        <HeroSection />
        <TimelineSection />
        <LogoSection />
        <ContentSection />
        <StatsSection />
        <AltContentSection />
      </main>
    </div>
  )
}
