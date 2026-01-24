"use client"

import { Wifi, Coffee, Clock, MapPin, Briefcase, Bed, UtensilsCrossed, Star, ArrowRight, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/gallery-grid"

interface HomeSectionProps {
  onNavigate: (section: string) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  
  const highlights = [
    {
      icon: Bed,
      title: "Luxury Rooms",
      description: "Istirahat berkualitas dengan interior elegan dan pemandangan kota Jakarta.",
      action: "rooms"
    },
    {
      icon: UtensilsCrossed,
      title: "The Cathay Resto",
      description: "Nikmati sajian kuliner legendaris dengan cita rasa otentik Chinese & Western.",
      action: "resto"
    },
    {
      icon: Briefcase,
      title: "Meeting & Events",
      description: "Ballroom luas dan ruang meeting modern untuk kesuksesan acara bisnis Anda.",
      action: "meeting"
    },
    {
      icon: Music,
      title: "Executive KTV",
      description: "Hiburan kelas atas dengan sistem audio terbaik untuk melepas penat.",
      action: "ktv"
    },
  ]

  const galleryImages = [
    { src: "/lobby.jpeg", alt: "Grand Lobby", category: "Interior" },
    { src: "/kamarheader.jpeg", alt: "Grand Suite", category: "Rooms" },
    { src: "/resto.jpeg", alt: "Cathay Resto", category: "Dining" },
    { src: "/meeting3.jpeg", alt: "Ballroom", category: "Events" },
    { src: "/karoke.jpeg", alt: "KTV Room", category: "Entertainment" },
    { src: "/gedung.jpeg", alt: "Exterior", category: "Exterior" },
  ]

  return (
    <div className="bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Parallax Effect (Simulated) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/lobby.jpeg')" }}
        >
           {/* Dark Gradient Overlay for text readability */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <div className="animate-in fade-in zoom-in duration-1000">
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-white/60"></div>
               <span className="text-white/90 text-sm md:text-base font-medium tracking-[0.3em] uppercase">
                 Welcome to Jakarta
               </span>
               <div className="h-[1px] w-12 bg-white/60"></div>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
              Grand Asia Hotel
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Experience the perfect blend of business and leisure <br className="hidden md:block" />
              in the heart of Penjaringan.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button 
                onClick={() => onNavigate("booking")}
                size="lg"
                className="bg-[#7d0000] hover:bg-[#5a0000] text-white px-10 py-7 text-lg rounded-full shadow-xl transition-all hover:scale-105 min-w-[200px]"
              >
                Book Now
              </Button>
              <Button 
                onClick={() => onNavigate("rooms")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-10 py-7 text-lg rounded-full backdrop-blur-sm bg-white/5 transition-all hover:scale-105 min-w-[200px]"
              >
                Explore Rooms
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </section>

      {/* --- ABOUT / WELCOME SECTION --- */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="text-[#7d0000] font-bold tracking-widest uppercase text-sm mb-4 block">
                Tentang Kami
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                A Sanctuary of Comfort <br /> in North Jakarta
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                Grand Asia Hotel hadir sebagai oase ketenangan di tengah hiruk pikuk Jakarta Utara. 
                Terletak strategis di kawasan Penjaringan, kami menawarkan akses tak tertandingi ke 
                pusat bisnis, kuliner legendaris, dan destinasi wisata sejarah.
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-100 rounded-full"><Wifi className="h-5 w-5 text-slate-700"/></div>
                   <span className="text-slate-700 font-medium">High Speed WiFi</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-100 rounded-full"><Clock className="h-5 w-5 text-slate-700"/></div>
                   <span className="text-slate-700 font-medium">24H Service</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-100 rounded-full"><Coffee className="h-5 w-5 text-slate-700"/></div>
                   <span className="text-slate-700 font-medium">Coffee Shop</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-100 rounded-full"><MapPin className="h-5 w-5 text-slate-700"/></div>
                   <span className="text-slate-700 font-medium">Strategic Location</span>
                </div>
              </div>

              <Button onClick={() => onNavigate("contact")} variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                More About Us
              </Button>
            </div>

            {/* Image Composition */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/resepsion.jpeg" alt="Reception" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-[#7d0000] rounded-2xl -z-0 opacity-5 hidden md:block"></div>
              <div className="absolute -top-10 -right-10 w-1/2 h-1/2 border-2 border-[#7d0000]/20 rounded-2xl -z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES HIGHLIGHTS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">World Class Facilities</h2>
            <p className="text-slate-500 text-lg">
              Kami menyediakan fasilitas lengkap untuk menunjang kenyamanan istirahat maupun produktivitas bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                onClick={() => onNavigate(item.action)}
                className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-[#7d0000]/5"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#7d0000] transition-colors duration-300">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-[#7d0000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:underline">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROMO BANNER --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/gedung.jpeg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
            
            <div className="relative z-10 p-12 md:p-24 max-w-2xl text-white">
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold tracking-widest uppercase text-sm">Special Offer</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Liburan Keluarga <br/> <span className="text-[#fca5a5]">Lebih Berkesan</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Dapatkan penawaran eksklusif untuk Holiday School Package & Paket Tahun Baru. Diskon spesial untuk pemesanan melalui website.
              </p>
              <Button 
                onClick={() => onNavigate("rooms")}
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-7 rounded-full font-bold text-lg shadow-xl"
              >
                Lihat Promo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[#7d0000] font-bold tracking-widest uppercase text-sm mb-2 block">Galeri Foto</span>
              <h2 className="font-serif text-4xl font-bold text-slate-900">Grand Asia Experience</h2>
            </div>
            <p className="text-slate-500 max-w-md text-right md:text-left">
              Jelajahi setiap sudut keindahan dan kenyamanan yang kami tawarkan.
            </p>
          </div>
          
          <GalleryGrid images={galleryImages} columns={3} />
        </div>
      </section>

    </div>
  )
}