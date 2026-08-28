'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/app/ui/brand/Logo.jsx'

const PERSONAL_SITE_URL = 'https://www.kailebhammontree.com/'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Experience', href: '/experience' },
  { name: 'Biography', href: '/biography' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-canvas-border bg-canvas/95 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href={PERSONAL_SITE_URL}
          className="transition-opacity hover:opacity-90"
          aria-label="Kaileb Hammontree — Personal site"
        >
          <Logo variant="full" />
        </a>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-secondary"
            >
              {item.name}
            </a>
          ))}
          <a href="/contact" className="btn-accent rounded-lg px-5 py-2 text-sm">
            Start Your Project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-lg border border-canvas-border bg-canvas-elevated p-2.5 text-ink lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-5 w-5" />
        </button>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-canvas/80 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-canvas-border bg-canvas px-6 py-6 sm:max-w-sm"
        >
          <div className="flex items-center justify-between">
            <a
              href={PERSONAL_SITE_URL}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Kaileb Hammontree — Personal site"
            >
              <Logo variant="full" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg border border-canvas-border p-2 text-ink"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-8 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-canvas-elevated hover:text-ink"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-accent mt-4 block rounded-lg px-4 py-3 text-center text-base"
            >
              Start Your Project
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
