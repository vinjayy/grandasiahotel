"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeSection } from "@/components/sections/home-section"
import { RoomsSection } from "@/components/sections/rooms-section"
import { MeetingSection } from "@/components/sections/meeting-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function GrandAsiaHotel() {
  const [activeSection, setActiveSection] = useState("home")

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Reset scroll position when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [activeSection])

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={handleNavigate} />
      case "rooms":
        return <RoomsSection />
      case "meeting":
        return <MeetingSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="pt-20">
        {renderSection()}
      </main>

      <Footer />
    </div>
  )
}
