'use client';

import { PageHeader } from "@/components/page-header"
import { 
  Wifi, 
  Wind, 
  Music, 
  Mic2, 
  Ticket, 
  Speaker,
  Disc,
  Armchair
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface KtvSectionProps {
  onNavigate?: (section: string) => void
}

export function KtvSection({ onNavigate }: KtvSectionProps) {
  
  // Data Ruangan KTV
  const ktvRooms = [
    {
      name: "STANDARD ROOM",
      price: "IDR 1.000.000",
      category: "Small / Medium",
      // Ganti path gambar sesuai file Anda di folder public
      images: [
        "/ktv1.jpg", 
        "/ktv2.jpg",
        "/SP2 (1).jpg",
        "/ktv1.jpg"
      ], 
      amenities: [
        "AC", "Free WiFi", "Usage Room KTV Standard", "Voucher Package F&B 1.000K"
      ]
    },
    {
      name: "VIP ROOM",
      price: "IDR 2.000.000",
      category: "Large",
      images: [
        "/VIP1.jpg",
        "/VIP2.jpg",
        "/VIP3.jpg",
        "/VIP4.jpg"
      ],
      amenities: [
        "AC", "Free WiFi", "Usage Room KTV VIP", "Voucher Package F&B 2.000K"
      ]
    },
    {
      name: "VVIP ROOM",
      price: "IDR 3.000.000",
      category: "Party Size",
      images: [
        "/VVIP1.jpg",
        "/VVIP2.jpg",
        "/VVIP3.jpg",
        "/GS1.jpg"
      ],
      amenities: [
        "AC", "Free WiFi", "Usage Room KTV VVIP", "Voucher Package F&B 3.000K"
      ]
    },
    {
      name: "SUITE ROOM",
      price: "IDR 5.000.000",
      category: "Royal Suite",
      images: [
        "/VVIP1.jpg",
        "/SUITE2.jpg",
        "/SUITE3.jpg",
        "/GS1.jpg"
      ],
      amenities: [
        "AC", "Free WiFi", "Usage Room KTV SUITE", "Voucher Package F&B 5.000K"
      ]
    }
  ]

  return (
    <div className="bg-white">
      <PageHeader
        tag="Entertainment"
        title="Executive KTV & Lounge"
        subtitle="Rasakan pengalaman hiburan kelas atas dengan sistem audio terbaik dan privasi maksimal"
        backgroundImage="url('/karoke.jpeg')"
      />

      {/* --- KTV ROOMS LIST --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          
          {ktvRooms.map((room, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start border-b border-border pb-20 last:border-0 last:pb-0">
              
              {/* Left Side: Images Gallery */}
              <div className="w-full lg:w-1/2 space-y-4">
                {/* Main Image */}
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-lg relative group">
                  <img 
                    src={room.images[0]} 
                    alt={`${room.name} Main View`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/800x600?text=KTV+Image";
                    }}
                  />
                  {/* Badge Category: Background Merah #7d0000 */}
                  <div className="absolute top-4 left-4 bg-[#7d0000]/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                    {room.category}
                  </div>
                </div>

                {/* Sub Images (Grid of 3) */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((imgIdx) => (
                    <div key={imgIdx} className="aspect-video rounded-xl overflow-hidden bg-neutral-100 shadow-sm cursor-pointer hover:opacity-90 transition-opacity border border-neutral-200">
                      <img 
                        src={room.images[imgIdx]} 
                        alt={`${room.name} detail ${imgIdx}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x300?text=Detail";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full lg:w-1/2 flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-3">{room.name}</h2>
                  <div className="flex items-baseline gap-2">
                    {/* Harga: Text Merah #7d0000 */}
                    <span className="text-3xl font-bold text-[#7d0000]">{room.price}</span>
                    <span className="text-neutral-500 text-sm">/ Package</span>
                  </div>
                </div>

                {/* Box Amenities: Background Merah Tipis, Border Merah */}
                <div className="bg-[#7d0000]/5 rounded-2xl p-8 mb-8 border border-[#7d0000]/20">
                  <h3 className="font-semibold mb-4 text-[#7d0000] flex items-center gap-2">
                    <Music className="h-5 w-5 text-[#7d0000]" />
                    Package Inclusions
                  </h3>
                  <div className="grid grid-cols-1 gap-y-3">
                    {room.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-neutral-700">
                        {/* Icons: Merah #7d0000 */}
                        {item.includes("WiFi") ? <Wifi className="h-4 w-4 text-[#7d0000]" /> :
                         item.includes("AC") ? <Wind className="h-4 w-4 text-[#7d0000]" /> :
                         item.includes("Voucher") ? <Ticket className="h-4 w-4 text-[#7d0000]" /> :
                         item.includes("Usage") ? <Mic2 className="h-4 w-4 text-[#7d0000]" /> :
                         <Speaker className="h-4 w-4 text-[#7d0000]" />
                        }
                        <span className="text-base font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  {onNavigate && (
                    <Button
                      // NAVIGASI KE BOOKING KTV
                      onClick={() => onNavigate('booking-ktv')}
                      size="lg"
                      // Button: Hitam (Black) hover Abu Gelap
                      className="w-full md:w-auto bg-black text-white hover:bg-neutral-800 px-10 py-7 text-lg font-bold rounded-xl shadow-lg shadow-black/20 transition-all hover:-translate-y-1"
                    >
                      BOOK NOW
                    </Button>
                  )}
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --- KTV FACILITIES INFO (Background Hitam, Icon Merah #7d0000) --- */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">Fasilitas KTV & Lounge</h2>
            <p className="text-neutral-400">Teknologi hiburan terkini untuk momen terbaik Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#7d0000]/50 transition-colors">
                <Speaker className="h-10 w-10 text-[#7d0000] mb-4" />
                <h3 className="text-xl font-bold mb-2">Premium Sound</h3>
                <p className="text-neutral-400 text-sm">Sistem audio JBL & Bose terbaru dengan subwoofer dentuman bass yang powerful.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#7d0000]/50 transition-colors">
                <Disc className="h-10 w-10 text-[#7d0000] mb-4" />
                <h3 className="text-xl font-bold mb-2">Lagu Terlengkap</h3>
                <p className="text-neutral-400 text-sm">Lebih dari 100.000 lagu update setiap bulan (Indonesia, Barat, Mandarin, Korea).</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#7d0000]/50 transition-colors">
                <Armchair className="h-10 w-10 text-[#7d0000] mb-4" />
                <h3 className="text-xl font-bold mb-2">Sofa Mewah</h3>
                <p className="text-neutral-400 text-sm">Interior mewah dengan sofa kulit premium yang nyaman dan luas.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#7d0000]/50 transition-colors">
                <Wind className="h-10 w-10 text-[#7d0000] mb-4" />
                <h3 className="text-xl font-bold mb-2">Air Purifier</h3>
                <p className="text-neutral-400 text-sm">Ruangan dilengkapi sistem sirkulasi udara dan pembersih udara modern.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}