"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// --- Import Semua Section ---
import { HomeSection } from "@/components/sections/home-section"
import { RoomsSection } from "@/components/sections/rooms-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BookingSection } from "@/components/sections/booking-section"
import { ThankYouSection } from "@/components/sections/thank-you-section"

// Wedding Sections
import { WeddingSection } from "@/components/sections/wedding-section"
import { WeddingBookingSection } from "@/components/sections/wedding-booking-section"

// KTV Sections
import { KtvSection } from "@/components/sections/ktv-section"
import { KtvBookingSection } from "@/components/sections/ktv-booking-section"

// Resto Section
import { RestoSection } from "@/components/sections/resto-section"

// Meeting Sections
import { MeetingSection } from "@/components/sections/meeting-section"
import { MeetingBookingSection } from "@/components/sections/meeting-booking-section"

// Policy & Privacy Sections (NEW)
import { PolicySection } from "@/components/sections/policy-section"
import { PrivacySection } from "@/components/sections/privacy-section"

export default function GrandAsiaHotel() {
  const [activeSection, setActiveSection] = useState("home")
  
  // State untuk menyimpan data booking (Room, Wedding, KTV, atau Meeting)
  const [bookingData, setBookingData] = useState<any | null>(null)

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBookingComplete = (data: any) => {
    setBookingData(data)
    setActiveSection("thank-you")
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  // Reset scroll ke atas secara instan saat pindah halaman/section
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [activeSection])

  const renderSection = () => {
    switch (activeSection) {
      // --- MENU UTAMA ---
      case "home":
        return <HomeSection onNavigate={handleNavigate} />
      
      // --- FLOW KAMAR ---
      case "rooms":
        return <RoomsSection onNavigate={handleNavigate} />
      case "booking":
        return <BookingSection onNavigate={handleNavigate} onBookingComplete={handleBookingComplete} />
      
      // --- FLOW WEDDING ---
      case "wedding":
        return <WeddingSection onNavigate={handleNavigate} />
      case "booking-wedding":
        return <WeddingBookingSection onNavigate={handleNavigate} onBookingComplete={handleBookingComplete} />

      // --- FLOW KTV ---
      case "ktv":
        return <KtvSection onNavigate={handleNavigate} />
      case "booking-ktv":
        return <KtvBookingSection onNavigate={handleNavigate} onBookingComplete={handleBookingComplete} />

      // --- FLOW RESTO ---
      case "resto":
        return <RestoSection />

      // --- FLOW MEETING ---
      case "meeting":
        return <MeetingSection onNavigate={handleNavigate} />
      case "booking-meeting":
        return <MeetingBookingSection onNavigate={handleNavigate} onBookingComplete={handleBookingComplete} />

      // --- LEGAL & INFORMASI (BARU) ---
      case "policy":
        return <PolicySection />
      case "privacy":
        return <PrivacySection />

      // --- MENU LAIN ---
      case "contact":
        return <ContactSection />
      
      // --- HALAMAN THANK YOU ---
      case "thank-you":
        return bookingData ? (
          <ThankYouSection bookingData={bookingData} onNavigate={handleNavigate} />
        ) : (
          <HomeSection onNavigate={handleNavigate} />
        )

      // --- PLACEHOLDERS ---
      case "lounge":
        return (
          <div className="min-h-screen flex items-center justify-center bg-muted/20">
            <div className="text-center">
              <h1 className="text-4xl font-serif font-bold mb-4 capitalize">{activeSection}</h1>
              <p className="text-muted-foreground">Halaman ini sedang dalam tahap pengembangan.</p>
              <button onClick={() => handleNavigate("home")} className="mt-6 text-primary underline">
                Kembali ke Beranda
              </button>
            </div>
          </div>
        )
      
      default:
        return <HomeSection onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header navigasi global */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="pt-20">
        {renderSection()}
      </main>

      {/* Footer disembunyikan di semua halaman proses form (booking) 
          dan halaman konfirmasi (thank you) agar user fokus pada transaksi.
      */}
      {activeSection !== "booking" && 
       activeSection !== "booking-wedding" && 
       activeSection !== "booking-ktv" && 
       activeSection !== "booking-meeting" && 
       activeSection !== "thank-you" && (
       <Footer onNavigate={handleNavigate} />
      )}
    </div>
  )
}