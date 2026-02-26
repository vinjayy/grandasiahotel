"use client"

import { Phone, Mail, MapPin, Instagram, Facebook, Globe } from "lucide-react"

// 1. Definisikan Interface untuk Props
interface FooterProps {
  onNavigate?: (section: string) => void
}

// 2. Terima props onNavigate
export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- Top Section: Main Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* 1. Brand Identity (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src="/logowhite.png"
              alt="Grand Asia Hotel White Logo"
              className="h-28 w-auto object-contain opacity-90"
            />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Menghadirkan kenyamanan dan kemewahan di jantung Jakarta Utara.
              Destinasi utama untuk perjalanan bisnis dan liburan keluarga Anda dengan pelayanan berkelas internasional.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d0000] hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d0000] hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d0000] hover:text-white transition-all duration-300">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Explore</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              {/* Update Quick Links agar berfungsi dengan onNavigate */}
              {[
                { label: 'Home', id: 'home' },
                { label: 'Kamar & Suites', id: 'rooms' },
                { label: 'Meeting & Events', id: 'meeting' },
                { label: 'Wedding', id: 'wedding' },
                { label: 'Restoran', id: 'resto' },
                { label: 'KTV & Lounge', id: 'ktv' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate?.(item.id)}
                    className="hover:text-[#7d0000] transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#7d0000] transition-all duration-300"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Hubungi Kami</h3>
            <ul className="space-y-5 text-sm text-neutral-400">
              <li className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-[#7d0000] mt-0.5 group-hover:text-white transition-colors" />
                <div>
                  <p className="font-medium text-white mb-1">Telepon</p>
                  <span className="hover:text-white transition-colors cursor-pointer">(021) 6660-6969</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-[#7d0000] mt-0.5 group-hover:text-white transition-colors" />
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <span className="hover:text-white transition-colors cursor-pointer">admin@ptsumberjayasugihmakmur.co.id</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 4. Address (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Lokasi</h3>
            <div className="flex items-start gap-3 text-sm text-neutral-400 group">
              <MapPin className="h-5 w-5 text-[#7d0000] mt-1 shrink-0 group-hover:text-white transition-colors" />
              <p className="leading-relaxed">
                Jl. Bandengan Sel. No.88, RT.1/RW.2, Pejagalan, Kec. Penjaringan, <br /> Jakarta Utara 14450
              </p>
            </div>
            {/* Maps Link */}
            <a
              href="https://maps.app.goo.gl/1FaoR4SwGZj5pSar5"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-xs font-bold text-[#7d0000] border-b border-[#7d0000] pb-0.5 hover:text-white hover:border-white transition-all"
            >
              LIHAT DI GOOGLE MAPS
            </a>
          </div>

        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Grand Asia Hotel Jakarta. All rights reserved.</p>
          <div className="flex gap-6">
            {/* 3. Gunakan Button onClick untuk navigasi ke Policy */}
            <button
              onClick={() => onNavigate?.('policy')}
              className="hover:text-white transition-colors text-left"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}