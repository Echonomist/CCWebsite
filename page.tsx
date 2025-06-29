'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AnatomyVisualization from './components/AnatomyVisualization'
import TechnologySection from './components/TechnologySection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import DonationSection from './components/DonationSection'
import Footer from './components/Footer'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main ref={containerRef} className="relative">
      <Navigation />
      <AnatomyVisualization scrollY={scrollY} />
      <div className="relative z-10">
        <HeroSection />
        <TechnologySection />
        <AboutSection />
        <ContactSection />
        <DonationSection />
        <Footer />
      </div>
    </main>
  )
}
