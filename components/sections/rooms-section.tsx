'use client';

import { PageHeader } from "@/components/page-header"
import { 
  Wifi, 
  Wind, 
  Coffee, 
  Bath, 
  Tv, 
  Maximize2, 
  CheckCircle2, 
  Clock,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomsSectionProps {
  onNavigate?: (section: string) => void
}

export function RoomsSection({ onNavigate }: RoomsSectionProps) {
  
  // Data Kamar
  const rooms = [
    {
      name: "SUPERIOR SINGLE/TWIN ROOM",
      price: "IDR 400.000",
      unit: "/Night",
      size: "26.0 m²",
      images: [
        "/SUPERIOR-1.jpg", 
        "/SP1.jpg",
        "/SP2.jpg",
        "/SP3.jpg"
      ], 
      amenities: [
        "Bathtub", "Area tempat duduk", "Mineral Water", "Air panas", "AC", "Free WiFi"
      ]
    },
    {
      name: "DELUXE ROOM",
      price: "IDR 500.000",
      unit: "/Night",
      size: "36.0 m²",
      images: [
        "/DELUXE-1.jpg",
        "/DL1.jpg",
        "/DL2.jpg",
        "/DL3.jpg"
      ],
      amenities: [
        "Bathtub", "Coffe Maker", "Area tempat duduk", "Mineral Water", "Air panas", "AC", "Free WiFi"
      ]
    },
    {
      name: "GRAND SUITE ROOM",
      price: "IDR 600.000",
      unit: "/Night",
      size: "36.0 m²",
      images: [
        "/GRAND-SUITE-1.jpg",
        "/GS1.jpg",
        "/GS2.jpg",
        "/GS3.jpg"
      ],
      amenities: [
        "Bathtub", "Coffe Maker", "Area tempat duduk", "Mineral Water", "Air panas", "AC", "Free WiFi"
      ]
    }
  ]

  // Data Fasilitas (Dikelompokkan)
  const facilityCategories = [
    {
      title: "Umum",
      items: ["AC", "Aula", "Banquet", "Kamar dengan pintu penghubung", "Ruang keluarga", "Alat pemanas", "Area bebas asap rokok", "Area merokok", "Teras"]
    },
    {
      title: "Fasilitas Publik",
      items: ["Area parkir", "Kopi/teh di lobby", "Kafe", "Lift", "Layanan kamar 24 jam", "Restoran", "Layanan kamar", "Brankas", "WiFi di area umum"]
    },
    {
      title: "Fasilitas Kamar",
      items: ["Bathtub", "TV kabel", "Meja", "Pengering rambut", "Brankas kamar", "Kulkas", "Lemari es", "Pancuran", "TV"]
    },
    {
      title: "Service Hotel",
      items: ["Concierge/layanan tamu", "Keamanan 24 jam", "Laundry", "Penitipan bagasi", "Resepsionis 24 jam"]
    },
    {
      title: "Makanan & Minuman",
      items: ["Bar", "Sarapan prasmanan", "Chinese – Western Food"]
    },
    {
      title: "Kegiatan Lainnya",
      items: ["Karaoke", "Layanan pijat"]
    },
    {
      title: "Konektivitas & Bisnis",
      items: ["WiFi gratis", "Internet Kamar", "Fasilitas bisnis", "Fasilitas rapat"]
    },
    {
      title: "Fasilitas Terdekat",
      items: ["ATM/Bank", "Supermarket"]
    }
  ]

  return (
    <div className="bg-white">
      <PageHeader
        tag="Akomodasi"
        title="Kamar & Promo"
        subtitle="Temukan kenyamanan sempurna dengan pilihan kamar terbaik kami"
        backgroundImage="url('/kamarheader.jpeg')"
      />

      {/* --- ROOMS LIST SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          
          {rooms.map((room, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start border-b border-border pb-20 last:border-0 last:pb-0">
              
              {/* Left Side: Images Gallery */}
              <div className="w-full lg:w-1/2 space-y-4">
                {/* Main Image */}
                {/* UBAH: aspect-[4/3] menjadi aspect-[16/10] */}
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-muted shadow-lg relative group">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <img 
                      src={room.images[0]} 
                      alt={`${room.name} Main View`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/800x600?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                    {room.size}
                  </div>
                </div>

                {/* Sub Images (Grid of 3) */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((imgIdx) => (
                    <div key={imgIdx} className="aspect-square rounded-xl overflow-hidden bg-muted shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                      <img 
                        src={room.images[imgIdx]} 
                        alt={`${room.name} detail ${imgIdx}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=Detail";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full lg:w-1/2 flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">{room.name}</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">{room.price}</span>
                    <span className="text-muted-foreground text-lg">{room.unit}</span>
                  </div>
                </div>

                <div className="bg-secondary/5 rounded-2xl p-8 mb-8 border border-secondary/20">
                  <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    Fasilitas Kamar Ini
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {room.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700">
                        {/* Icon Mapping Sederhana */}
                        {item.includes("WiFi") ? <Wifi className="h-4 w-4 text-secondary/70" /> :
                         item.includes("AC") ? <Wind className="h-4 w-4 text-secondary/70" /> :
                         item.includes("Coffe") ? <Coffee className="h-4 w-4 text-secondary/70" /> :
                         item.includes("Bathtub") ? <Bath className="h-4 w-4 text-secondary/70" /> :
                         item.includes("TV") ? <Tv className="h-4 w-4 text-secondary/70" /> :
                         item.includes("m²") ? <Maximize2 className="h-4 w-4 text-secondary/70" /> :
                         <CheckCircle2 className="h-4 w-4 text-secondary/70" />
                        }
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  {onNavigate && (
                    <Button
                      onClick={() => onNavigate('booking')}
                      size="lg"
                      className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                    >
                      BOOK {room.name}
                    </Button>
                  )}
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --- FACILITIES & SERVICES LIST --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fasilitas & Layanan</h2>
            <p className="text-slate-500">Kenyamanan lengkap untuk pengalaman menginap terbaik Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {facilityCategories.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-bold text-lg text-primary border-b border-primary/20 pb-2">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POLICIES SECTION --- */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="bg-amber-100 p-4 rounded-full text-amber-600 shrink-0">
              <Info className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-serif text-xl font-bold text-amber-900 mb-2">Kebijakan Akomodasi</h3>
              <p className="text-amber-800/80 mb-4 text-sm">Informasi penting mengenai waktu kedatangan dan keberangkatan Anda.</p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-12">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Check-in</p>
                    <p className="font-bold text-amber-900">Dari 14:00 WIB</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-amber-200 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Check-out</p>
                    <p className="font-bold text-amber-900">Sebelum 12:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}