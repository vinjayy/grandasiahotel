"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

interface WeddingSectionProps {
  onNavigate: (section: string) => void
}

export function WeddingSection({ onNavigate }: WeddingSectionProps) {
  const packages = [
    {
      name: "SILVER PACKAGE",
      price: "IDR 36.800.000",
      pax: "/ 150 Pax",
      image: "/silverwedding.jpg",
      description: "Paket intim untuk momen berharga Anda.",
      items: [
        "Buffet Menu (Soup, Appetizer, Main Course, Dessert)",
        "Soft Drink & Juices",
        "Food Stall",
        "Wedding Cake",
        "Standard Decoration",
        "Standard Sound System"
      ],
      highlight: false,
      style: "default"
    },
    {
      name: "GOLD PACKAGE",
      price: "IDR 39.800.000",
      pax: "/ 150 Pax",
      image: "/goldwedding.jpg",
      description: "Pilihan favorit dengan menu spesial Lamb.",
      items: [
        "Buffet Menu Lengkap",
        "Free Flow Mineral Water",
        "Soft Drink & Juices",
        "Food Stall",
        "Wedding Cake",
        "Grilled Lamb Special",
        "Luxury Decoration",
        "Entertainment Band"
      ],
      highlight: true,
      style: "gold"
    },
    {
      name: "DIAMOND PACKAGE",
      price: "IDR 88.800.000",
      pax: "/ 300 Pax",
      image: "/diamondwedding.jpg",
      description: "Kemewahan maksimal untuk pesta akbar.",
      items: [
        "Premium Buffet Menu",
        "Free Flow Mineral Water",
        "Soft Drink & Juices",
        "Multiple Food Stalls",
        "Premium Wedding Cake",
        "Grilled Lamb Special",
        "Grand Ballroom Decoration",
        "Full Band Entertainment",
        "Complimentary Suite Room"
      ],
      highlight: false,
      style: "default"
    }
  ]

  return (
    <div className="bg-white">
      {/* PageHeader consistent with Rooms page */}
      <PageHeader
        tag="Celebration"
        title="Wedding at Grand Asia"
        subtitle="Wujudkan pernikahan impian Anda di venue mewah dengan pelayanan profesional kami"
        backgroundImage="url('/Pacific-Ballroom.jpg')"
      />

      {/* Intro Section */}
      <section className="relative py-20 lg:py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-in slide-in-from-left duration-700">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Pacific Ballroom
              </span>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Everlasting <br />
                <span className="text-primary">Moment</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-justify">
                Capture and share the most beautiful romantic wedding experience at GRAND ASIA HOTEL where every single aspect of the event will be hand-picked, customized and wraps in a warm and friendly service style by our professional wedding staff. With the selection of bespoke wedding venues from indoors to outdoors, we are ready to organize your wedding experience to be your everlasting moment.
              </p>
              <Button 
                onClick={() => onNavigate("contact")}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all"
              >
                Konsultasi Wedding
              </Button>
            </div>

            {/* Main Poster Image - A4 Ratio */}
            <div className="relative flex justify-center lg:justify-end animate-in slide-in-from-right duration-700 delay-200">
              <div className="relative w-full max-w-md aspect-[210/297] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-border bg-gray-100">
                <img 
                  src="/wedding1.jpg"
                  alt="Wedding Package Poster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Packages</h2>
            <p className="text-muted-foreground">Pilih paket yang sesuai dengan impian pernikahan Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col overflow-hidden ${
                  pkg.style === "gold"
                    ? "bg-amber-50 border-amber-200 ring-4 ring-amber-100 scale-105 z-10" // Gold Accent Styling
                    : pkg.highlight 
                      ? "bg-foreground text-white border-foreground" 
                      : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {/* Image Section (A4 Aspect Ratio: 210/297) */}
                {/* PERUBAHAN DISINI: aspect-[9/16] diubah menjadi aspect-[210/297] */}
                <div className="w-full aspect-[210/297] relative overflow-hidden bg-gray-200">
                   <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                    {pkg.highlight && (
                    <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-bold shadow-lg z-20 ${
                      pkg.style === "gold" ? "bg-amber-500 text-white" : "bg-primary text-white"
                    }`}>
                        POPULAR
                    </div>
                    )}
                    
                    <div className="mb-8">
                    <h3 className={`text-xl font-bold tracking-wide mb-2 ${
                      pkg.style === "gold" ? "text-amber-600" : pkg.highlight ? "text-primary" : "text-primary"
                    }`}>
                        {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-2xl font-bold ${pkg.style === "gold" ? "text-slate-900" : ""}`}>
                          {pkg.price}
                        </span>
                    </div>
                    <span className={`text-sm ${
                      pkg.style === "gold" ? "text-amber-700/70" : pkg.highlight ? "text-gray-400" : "text-muted-foreground"
                    }`}>
                      {pkg.pax}
                    </span>
                    <p className={`mt-4 text-sm leading-relaxed ${
                      pkg.style === "gold" ? "text-slate-600" : pkg.highlight ? "text-gray-300" : "text-muted-foreground"
                    }`}>
                        {pkg.description}
                    </p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                    {pkg.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className={`h-5 w-5 shrink-0 ${
                          pkg.style === "gold" ? "text-amber-500" : pkg.highlight ? "text-primary" : "text-primary"
                        }`} />
                        <span className={
                          pkg.style === "gold" ? "text-slate-700" : pkg.highlight ? "text-gray-200" : "text-foreground"
                        }>
                          {item}
                        </span>
                        </li>
                    ))}
                    </ul>

                    <Button 
                    onClick={() => onNavigate("booking-wedding")}
                    className={`w-full py-6 rounded-xl font-bold text-base transition-all ${
                        pkg.style === "gold"
                        ? "bg-amber-500 text-white hover:bg-amber-600" // Gold Button
                        : pkg.highlight 
                          ? "bg-primary text-white hover:bg-primary/90" 
                          : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                    }`}
                    >
                    Book Now
                    </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}