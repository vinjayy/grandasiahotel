"use client"

import { Wifi, Coffee, Clock, MapPin, Briefcase, Bed, UtensilsCrossed, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/gallery-grid"

interface HomeSectionProps {
  onNavigate: (section: string) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const features = [
    { icon: Wifi, label: "High Speed Wifi" },
    { icon: Coffee, label: "Coffee Shop" },
    { icon: Clock, label: "24H Service" },
    { icon: MapPin, label: "Strategic Location" },
  ]

  const highlights = [
    {
      icon: Briefcase,
      title: "Business Center",
      description: "Ruang pertemuan modern dengan kapasitas fleksibel untuk kebutuhan korporat Anda.",
    },
    {
      icon: Bed,
      title: "Kamar Mewah",
      description: "Interior elegan dengan pemandangan kota, menjamin istirahat berkualitas.",
    },
    {
      icon: UtensilsCrossed,
      title: "Restoran & Dining",
      description: "Sajian kuliner lokal dan internasional yang memanjakan lidah Anda.",
    },
  ]

  const galleryImages = [
    {
      src: "outdoor.jpeg",
      alt: "Hotel Exterior",
      category: "Eksterior"
    },
    {
      src: "resepsion.jpeg",
      alt: "Hotel Lobby",
      category: "Lobby"
    },
    {
      src: "kamar.jpeg",
      alt: "Luxury Room",
      category: "Kamar"
    },
    {
      src: "karoke.jpeg",
      alt: "Karoke Room",
      category: "Karoke Room"
    },
    {
      src: "resto.jpeg",
      alt: "Restaurant",
      category: "Restoran"
    },
    {
      src: "karoke2.jpeg",
      alt: "Karoke Room",
      category: "Karoke Room"
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('lobby.jpeg')",
          }}
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-foreground/70 to-foreground/90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center py-32">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase mb-8 animate-fade-in">
            Welcome to Jakarta
          </span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance leading-tight tracking-tight">
            Grand Asia Hotel
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Kenyamanan dan kemewahan di jantung Penjaringan. Solusi terbaik untuk liburan keluarga & bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => onNavigate("contact")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-medium rounded-full shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
            >
              Hubungi Kami
            </Button>
            <Button 
              onClick={() => onNavigate("rooms")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-lg font-medium rounded-full transition-all hover:scale-105 bg-transparent"
            >
              Lihat Promo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-medium tracking-widest uppercase mb-6">
                Tentang Kami
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
                Kenyamanan di Jantung Jakarta
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Grand Asia Hotel hadir sebagai oase ketenangan di tengah hiruk pikuk Jakarta Utara. 
                Terletak strategis di kawasan Penjaringan, kami menawarkan akses tak tertandingi ke 
                pusat bisnis, kuliner legendaris, dan destinasi wisata sejarah.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-5 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all group"
                  >
                    <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center border border-border"
                style={{
                  backgroundImage: "url('lobby.jpeg')",
                }}
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-2xl border border-border">
                <p className="text-xl font-bold">Grand Asia</p>
                <p className="text-sm opacity-80 mt-1">Hotel Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-medium tracking-widest uppercase mb-6">
              Fasilitas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Fasilitas Unggulan Kami
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-10 bg-card border border-border rounded-2xl hover:bg-primary transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-8 transition-all group-hover:scale-110">
                  <item.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed text-lg transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium tracking-widest uppercase mb-6">
              Galeri
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6">
              Jelajahi Keindahan Hotel Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Lihat suasana dan fasilitas yang membuat Grand Asia Hotel menjadi pilihan terbaik untuk Anda.
            </p>
          </div>
          
          <GalleryGrid images={galleryImages} columns={3} />
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div 
            className="relative rounded-2xl overflow-hidden min-h-[600px] flex items-center border border-border"
            style={{
              backgroundImage: "url('gedung.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            
            <div className="relative z-10 p-12 md:p-20 max-w-2xl">
              <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-widest uppercase mb-6">
                Promo Spesial
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                Liburan Impian Keluarga Dimulai Di Sini
              </h2>
              <p className="text-white/90 text-lg mb-10 text-pretty leading-relaxed">
                Nikmati momen tak terlupakan bersama keluarga dengan penawaran spesial Holiday School Package & Paket Tahun Baru.
              </p>
              <Button 
                onClick={() => onNavigate("rooms")}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-medium rounded-full shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
              >
                Lihat Penawaran
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}