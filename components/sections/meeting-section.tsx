"use client"

import { PageHeader } from "@/components/page-header"
import { Clock, Users, Monitor, Coffee, UtensilsCrossed } from "lucide-react"
import { GalleryGrid } from "@/components/gallery-grid"

export function MeetingSection() {
  const meetingGalleryImages = [
    {
      src: "/meeting.jpeg",
      alt: "Conference Room",
      category: "Ruang Konferensi"
    },
    {
      src: "/meeting2.jpeg",
      alt: "Meeting Setup",
      category: "Setup Meeting"
    },
    {
      src: "/meeting3.jpeg",
      alt: "Business Event",
      category: "Event Bisnis"
    }
  ]

  const meetingPackages = [
    {
      title: "Half Day",
      duration: "5 Jam",
      icon: Clock,
      meetingOnly: "Rp 270k/pax",
      smallMeeting: "Rp 290k/pax",
    },
    {
      title: "One Day",
      duration: "8 Jam",
      icon: Clock,
      meetingOnly: "Rp 320k/pax",
      smallMeeting: "Rp 350k/pax",
    },
    {
      title: "Full Day",
      duration: "10 Jam",
      icon: Clock,
      meetingOnly: "Rp 430k/pax",
      smallMeeting: "Rp 460k/pax",
    },
    {
      title: "Short Meet",
      duration: "3 Jam",
      icon: Clock,
      meetingOnly: "Rp 185k/pax",
      smallMeeting: "Rp 210k/pax",
    },
  ]

  const residentialPackages = [
    {
      title: "Full Board Meeting I",
      subtitle: "Menginap + Meeting",
      twinSharing: "Rp 900.000",
      single: "Rp 1.100.000",
    },
    {
      title: "Full Board Meeting II",
      subtitle: "Meeting Package",
      twinSharing: "Rp 550.000",
      single: "Rp 600.000",
    },
  ]

  const banquetRentals = [
    { capacity: "30-50 Pax", price: "Rp 3.500.000" },
    { capacity: "50-100 Pax", price: "Rp 5.000.000" },
    { capacity: "100-150 Pax", price: "Rp 6.500.000" },
    { capacity: "150-300 Pax", price: "Rp 8.000.000" },
    { capacity: "300-500 Pax (Standing Party)", price: "Rp 11.000.000" },
  ]

  const addOns = [
    { icon: Coffee, name: "Coffee Break", price: "Rp 85k/pax" },
    { icon: UtensilsCrossed, name: "Lunch/Dinner", price: "Rp 150k/pax" },
    { icon: Monitor, name: "LCD Projector", price: "Rp 1.250k" },
  ]

  return (
    <div>
      <PageHeader
        tag="Ruang Meeting"
        title="Meeting & Event"
        subtitle="Solusi lengkap untuk kebutuhan meeting, konferensi, dan acara bisnis Anda"
        backgroundImage="url('/meeting3.jpeg')"
      />

      {/* Meeting Packages */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-medium tracking-widest uppercase mb-6">
              Paket Meeting
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Pilihan Paket Fleksibel
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meetingPackages.map((pkg, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:bg-primary transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-secondary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-all group-hover:scale-110">
                    <pkg.icon className="h-7 w-7 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                      {pkg.duration}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-border group-hover:border-white/20 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">Meeting Only</span>
                    <span className="font-bold text-foreground group-hover:text-primary-foreground transition-colors text-base">{pkg.meetingOnly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">Small Meeting</span>
                    <span className="font-bold text-foreground group-hover:text-primary-foreground transition-colors text-base">{pkg.smallMeeting}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Gallery */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium tracking-widest uppercase mb-6">
              Galeri Meeting
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6">
              Ruang Meeting & Event Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Fasilitas meeting room yang modern dan lengkap untuk berbagai kebutuhan acara bisnis Anda.
            </p>
          </div>
          
          <GalleryGrid images={meetingGalleryImages} columns={3} />
        </div>
      </section>

      {/* Residential / Full Board */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium tracking-widest uppercase mb-6">
              Paket Menginap
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
              Residential / Full Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialPackages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-10 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-5 bg-muted rounded-xl">
                    <span className="text-foreground font-medium">Twin Sharing</span>
                    <span className="font-bold text-primary text-xl">{pkg.twinSharing}</span>
                  </div>
                  <div className="flex justify-between items-center p-5 bg-muted rounded-xl">
                    <span className="text-foreground font-medium">Single</span>
                    <span className="font-bold text-primary text-xl">{pkg.single}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet Rental */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium tracking-widest uppercase mb-6">
              Sewa Ruangan
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
              Sewa Ruangan Banquet
            </h2>
            <p className="text-muted-foreground text-lg">Room Rental Only (3 Hours)</p>
          </div>

          <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl mb-16 border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-8 py-6 text-left text-primary-foreground font-semibold text-base">Kapasitas</th>
                    <th className="px-8 py-6 text-right text-primary-foreground font-semibold text-base">Harga Sewa</th>
                  </tr>
                </thead>
                <tbody>
                  {banquetRentals.map((rental, index) => (
                    <tr key={index} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                      <td className="px-8 py-5 text-primary-foreground text-base">{rental.capacity}</td>
                      <td className="px-8 py-5 text-right text-accent font-bold text-xl">{rental.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-10">Tambahan (Add-ons)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-5 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <addon.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base">{addon.name}</p>
                    <p className="text-sm text-primary font-bold">{addon.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}