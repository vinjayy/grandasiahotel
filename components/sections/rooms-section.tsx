'use client';

import { PageHeader } from "@/components/page-header"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomsSectionProps {
  onNavigate?: (section: string) => void
}

export function RoomsSection({ onNavigate }: RoomsSectionProps) {
  const roomRates = [
    {
      type: "Kamar + Sarapan",
      publishPrice: "Rp 600.000",
      walkInPrice: "Rp 550.000",
    },
    {
      type: "Kamar Saja (Room Only)",
      publishPrice: "Rp 500.000",
      walkInPrice: "Rp 450.000",
    },
  ]

  const holidayPackages = [
    {
      duration: "2 Malam",
      withBreakfast: "Rp 900.000",
      roomOnly: "Rp 700.000",
    },
    {
      duration: "4 Malam",
      withBreakfast: "Rp 1.600.000",
      roomOnly: "Rp 1.300.000",
    },
    {
      duration: "1 Minggu",
      withBreakfast: "-",
      roomOnly: "Rp 1.200.000",
    },
  ]

  return (
    <div>
      <PageHeader
        tag="Akomodasi"
        title="Kamar & Promo"
        subtitle="Temukan kenyamanan sempurna dengan pilihan kamar dan penawaran terbaik kami"
        backgroundImage="url('/kamarheader.jpeg')"
      />

      {/* Room Rates Section */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-medium tracking-widest uppercase mb-6">
              Tarif Kamar
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Harga Terbaik untuk Anda
            </h2>
          </div>

          {/* Rates Table */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-8 py-6 text-left font-semibold text-base">Tipe Paket</th>
                    <th className="px-8 py-6 text-center font-semibold text-base">Harga Publish</th>
                    <th className="px-8 py-6 text-center font-semibold text-base">
                      <span className="flex items-center justify-center gap-2">
                        Harga Walk-In
                        <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">Best Deal</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roomRates.map((rate, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="px-8 py-6 font-medium text-foreground text-base">{rate.type}</td>
                      <td className="px-8 py-6 text-center text-muted-foreground line-through text-base">{rate.publishPrice}</td>
                      <td className="px-8 py-6 text-center text-secondary font-bold text-xl">{rate.walkInPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 py-5 bg-muted/30 text-sm text-muted-foreground border-t border-border">
              * Tipe Kamar tersedia: Superior / Deluxe / Grand Suite
            </div>
          </div>

          <div className="text-center mt-10">
            {onNavigate && (
              <Button
                onClick={() => onNavigate('booking')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary px-12 py-6 text-lg font-medium rounded-lg"
              >
                Pesan Kamar Sekarang
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div 
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center border border-border order-2 lg:order-1"
              style={{
                backgroundImage: "url('/kamarheader.jpeg')",
              }}
            />
            <div className="order-1 lg:order-2">
              <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-medium tracking-widest uppercase mb-6">
                Fasilitas Kamar
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance leading-tight">
                Kenyamanan Terbaik untuk Istirahat Anda
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Setiap kamar kami dirancang dengan perhatian khusus pada detail dan kenyamanan, 
                memastikan pengalaman menginap yang tak terlupakan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  "AC dengan kontrol individual",
                  "TV LED 32 inch",
                  "WiFi gratis berkecepatan tinggi",
                  "Kamar mandi dengan shower",
                  "Mini bar",
                  "Brankas pribadi",
                  "Meja kerja",
                  "Layanan kamar 24 jam",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-foreground text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday School Package */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div 
            className="relative rounded-2xl overflow-hidden p-12 md:p-16 border border-border"
            style={{
              backgroundImage: "url('/kamarheader.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-secondary/90 to-secondary/85" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-widest uppercase mb-6">
                  Promo Spesial
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance leading-tight">
                  Holiday School Package
                </h2>
                <p className="text-white/90 text-lg">15 – 31 Desember 2025 (Tipe Superior)</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="px-8 py-5 text-left text-white font-semibold text-base">Durasi</th>
                      <th className="px-8 py-5 text-center text-white font-semibold text-base">Dengan Sarapan</th>
                      <th className="px-8 py-5 text-center text-white font-semibold text-base">Room Only</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidayPackages.map((pkg, index) => (
                      <tr key={index} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                        <td className="px-8 py-5 text-white font-medium text-base">{pkg.duration}</td>
                        <td className="px-8 py-5 text-center text-white text-base">{pkg.withBreakfast}</td>
                        <td className="px-8 py-5 text-center text-white font-bold text-lg">{pkg.roomOnly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
