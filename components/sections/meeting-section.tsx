"use client"

import { PageHeader } from "@/components/page-header"
import { Clock, Users, Monitor, Coffee, UtensilsCrossed, CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/gallery-grid"

interface MeetingSectionProps {
  onNavigate?: (section: string) => void
}

export function MeetingSection({ onNavigate }: MeetingSectionProps) {
  const meetingGalleryImages = [
    { src: "/meeting.jpeg", alt: "Conference Room", category: "Ruang Konferensi" },
    { src: "/meeting2.jpeg", alt: "Meeting Setup", category: "Setup Meeting" },
    { src: "/meeting3.jpeg", alt: "Business Event", category: "Event Bisnis" }
  ]

  const meetingPackages = [
    {
      title: "Half Day Meeting",
      duration: "5 Jam",
      price: "IDR 270.000",
      unit: "/ Pax",
      features: ["1x Coffee Break", "1x Lunch/Dinner", "Standard Sound System", "Memo Pad & Pencil", "Mineral Water & Candies"],
      highlight: false
    },
    {
      title: "One Day Meeting",
      duration: "8 Jam",
      price: "IDR 320.000",
      unit: "/ Pax",
      features: ["2x Coffee Break", "1x Lunch/Dinner", "Standard Sound System", "Memo Pad & Pencil", "Mineral Water & Candies"],
      highlight: true // Highlighted Package
    },
    {
      title: "Full Day Meeting",
      duration: "10 Jam",
      price: "IDR 430.000",
      unit: "/ Pax",
      features: ["2x Coffee Break", "1x Lunch", "1x Dinner", "Standard Sound System", "Memo Pad & Pencil"],
      highlight: false
    },
    {
      title: "Full Board (Twin)",
      duration: "Menginap",
      price: "IDR 900.000",
      unit: "/ Pax",
      features: ["Room (Twin Share)", "Breakfast", "2x Coffee Break", "1x Lunch", "1x Dinner"],
      highlight: false
    },
  ]

  const addOns = [
    { icon: Coffee, name: "Coffee Break", price: "IDR 85.000", unit: "/ pax" },
    { icon: UtensilsCrossed, name: "Lunch / Dinner", price: "IDR 150.000", unit: "/ pax" },
    { icon: Monitor, name: "LCD Projector", price: "IDR 1.250.000", unit: "/ day" },
  ]

  return (
    <div className="bg-white">
      <PageHeader
        tag="Business & Events"
        title="Meeting & Conference"
        subtitle="Solusi lengkap untuk kebutuhan meeting, konferensi, dan acara bisnis Anda dengan fasilitas modern."
        backgroundImage="url('/meeting.jpeg')"
      />

      {/* --- PACKAGES GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Packages</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Meeting Packages</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Pilih paket yang sesuai dengan durasi dan kebutuhan acara Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {meetingPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  pkg.highlight 
                    // UBAH: Menggunakan bg-primary (warna brand) bukan slate-900 (hitam)
                    ? "bg-primary text-primary-foreground border-primary ring-4 ring-primary/20 scale-105 z-10" 
                    : "bg-white text-slate-900 border-slate-200 hover:border-primary/50"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4 bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    {/* Harga Kontras: Putih jika highlight, Primary jika biasa */}
                    <span className={`text-2xl font-bold ${pkg.highlight ? "text-white" : "text-primary"}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <span className={`text-sm ${pkg.highlight ? "text-primary-foreground/80" : "text-slate-500"}`}>{pkg.unit}</span>
                  
                  {/* Badge Durasi */}
                  <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium ${
                    pkg.highlight 
                      ? "bg-white/20 text-white" 
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.duration}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pkg.highlight ? "text-white" : "text-primary"
                      }`} />
                      <span className={pkg.highlight ? "text-primary-foreground/90" : "text-slate-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => onNavigate && onNavigate("booking-meeting")}
                  className={`w-full py-6 rounded-xl font-bold transition-all ${
                    pkg.highlight 
                      ? "bg-white text-primary hover:bg-white/90" // Tombol Putih di background Primary
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANQUET RENTAL --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Room Rental</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">Banquet Hall Rental</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Menyewakan ruangan saja untuk kebutuhan acara privat, arisan, atau seminar singkat. Harga sewa berlaku untuk pemakaian 3 jam.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Small (30-50 Pax)", price: "IDR 3.500.000" },
                  { label: "Medium (50-100 Pax)", price: "IDR 5.000.000" },
                  { label: "Large (100-150 Pax)", price: "IDR 6.500.000" },
                  { label: "Grand (150-300 Pax)", price: "IDR 8.000.000" },
                  { label: "Standing Party (up to 500)", price: "IDR 11.000.000" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/50 transition-colors shadow-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button onClick={() => onNavigate && onNavigate("booking-meeting")} className="gap-2">
                  Sewa Ruangan <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/meeting2.jpeg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-serif text-2xl font-bold">Pacific Ballroom</p>
                    <p className="text-white/80">Capacity up to 500 Pax</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ADD ONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-primary font-medium text-sm">{item.price} <span className="text-slate-400 font-normal">{item.unit}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Our Facilities</h2>
            <p className="text-slate-400">Ruang meeting modern untuk menunjang produktivitas Anda</p>
          </div>
          <GalleryGrid images={meetingGalleryImages} columns={3} />
        </div>
      </section>
    </div>
  )
}