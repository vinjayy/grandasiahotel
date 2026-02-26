"use client"

import { PageHeader } from "@/components/page-header"
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowUpRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Front Office (24 Jam)",
      value: "(021) 6660-6969",
      action: "tel:02166606969",
      actionLabel: "Call Now",
      color: "text-slate-900"
    },
    {
      icon: MessageCircle,
      label: "Reservasi Kamar",
      value: "0821-8888-1366",
      action: "https://wa.me/6282188881366",
      actionLabel: "WhatsApp",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      label: "Wedding & Events",
      value: "0822-4926-2328",
      action: "https://wa.me/6282249262328",
      actionLabel: "WhatsApp",
      color: "text-green-600"
    },
    {
      icon: Mail,
      label: "Email Inquiry",
      value: "admin@ptsumberjayasugihmakmur.co.id",
      action: "mailto:admin@ptsumberjayasugihmakmur.co.id",
      actionLabel: "Send Email",
      color: "text-red-600"
    }
  ]

  return (
    <div className="bg-white">
      <PageHeader
        tag="Contact Us"
        title="Hubungi Kami"
        subtitle="Kami siap membantu merencanakan pengalaman menginap atau acara terbaik Anda."
        backgroundImage="url('/kontak.jpeg')"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* --- LEFT COLUMN: Contact Info --- */}
            <div>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Get in touch
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Apakah Anda memiliki pertanyaan tentang tipe kamar, paket wedding, atau ketersediaan ruang meeting? Tim kami siap menjawab pertanyaan Anda.
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-6">
                {contactMethods.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-5 mb-4 sm:mb-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-lg font-bold text-slate-900">{item.value}</p>
                      </div>
                    </div>

                    <a
                      href={item.action}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="rounded-full border-slate-300 hover:border-[#7d0000] hover:text-[#7d0000] transition-colors">
                        {item.actionLabel} <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                ))}
              </div>

              {/* Address Block */}
              <div className="mt-12 p-8 bg-[#7d0000] rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-6 w-6 text-white/80 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Grand Asia Hotel Jakarta</h3>
                      <p className="text-white/80 leading-relaxed max-w-sm">
                        Jl. Bandengan Sel. No.88, RT.1/RW.2, Pejagalan, Kec. Penjaringan, Jakarta Utara, 14450
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-white/60 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                    <Clock className="h-4 w-4" />
                    Buka 24 Jam
                  </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: Big Map --- */}
            <div className="relative h-[500px] lg:h-auto min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.949485524044!2d106.79501979999999!3d-6.1374893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7a062027599%3A0xcbfac67f37517d27!2sGrand%20Asia%20Hotel%20Jakarta!5e0!3m2!1sen!2sid!4v1769241478598!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                title="Peta Lokasi Grand Asia Hotel"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-32 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}