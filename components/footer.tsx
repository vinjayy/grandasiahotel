"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logowhite.png" 
                alt="Grand Asia Hotel White Logo" 
                className="h-40 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-3xl font-bold tracking-tight"></span>
                <span className="font-serif text-3xl font-bold text-secondary tracking-tight"></span>
              </div>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Kenyamanan dan kemewahan di jantung Penjaringan. Solusi terbaik untuk liburan keluarga & bisnis Anda.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-6 font-serif">Kontak</h3>
            <ul className="space-y-4 text-base text-white/70">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-secondary" />
                (021) 6660-6969
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-secondary" />
                grandasiahotel99@gmail.com
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-xl mb-6 font-serif">Alamat</h3>
            <div className="flex items-start gap-3 text-base text-white/70">
              <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
              <p className="leading-relaxed">
                Jl. Bandengan Sel. No.88, RT.1/RW.2, Pejagalan, Kec. Penjaringan, Jakarta Utara 14450
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-10 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Grand Asia Hotel Jakarta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}