"use client"

import { PageHeader } from "@/components/page-header"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export function ContactSection() {
  const contactCards = [
    {
      icon: Phone,
      title: "Telepon",
      value: "(021) 6660-6969",
      href: "tel:02166606969",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Kamar",
      value: "0821-8888-1366",
      href: "https://wa.me/6282188881366",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Event",
      value: "0822-4926-2328",
      href: "https://wa.me/6282249262328",
    },
  ]

  return (
    <div>
      <PageHeader
        tag="Hubungi Kami"
        title="Kontak"
        subtitle="Kami siap membantu Anda dengan segala kebutuhan reservasi dan informasi"
        backgroundImage="url('/kontak.jpeg')"
      />

      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {contactCards.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 p-8 bg-card border border-border rounded-2xl hover:bg-primary transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110">
                  <contact.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors mb-1">{contact.title}</p>
                  <p className="font-bold text-foreground group-hover:text-primary-foreground transition-colors text-lg">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Address and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-2xl p-10 flex flex-col justify-center shadow-lg">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Alamat</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Jl. Bandengan Sel. No.88, RT.1/RW.2, Pejagalan, Kec. Penjaringan, Jakarta Utara 14450
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground text-lg mb-5">Jam Operasional</h4>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Check-in</span>
                    <span className="font-semibold text-foreground">14:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Check-out</span>
                    <span className="font-semibold text-foreground">12:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Resepsionis</span>
                    <span className="font-semibold text-foreground">24 Jam</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0425791220976!2d106.8016423!3d-6.1249764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1df88701979b%3A0xc3f83713023e9a7e!2sGrand%20Asia%20Hotel!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Asia Hotel Jakarta Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}