'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Music, 
  Users, 
  CalendarClock, 
  CheckCircle2,
  Mic2,
  Disc
} from 'lucide-react'

interface KtvBookingSectionProps {
  onNavigate: (section: string) => void
  onBookingComplete: (data: any) => void
}

export function KtvBookingSection({ onNavigate, onBookingComplete }: KtvBookingSectionProps) {
  
  const ktvPackages = [
    { id: 'standard', name: 'STANDARD ROOM', price: 1000000, desc: 'Small/Medium • Voucher F&B 1.000K' },
    { id: 'vip', name: 'VIP ROOM', price: 2000000, desc: 'Large • Voucher F&B 2.000K' },
    { id: 'vvip', name: 'VVIP ROOM', price: 3000000, desc: 'Party Size • Voucher F&B 3.000K' },
    { id: 'suite', name: 'SUITE ROOM', price: 5000000, desc: 'Royal Suite • Voucher F&B 5.000K' },
  ]

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    pax: '',
    selectedPackage: 'standard',
    notes: ''
  })

  const selectedPkg = ktvPackages.find(p => p.id === formData.selectedPackage)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Mohon lengkapi data wajib')
      return
    }
    
    // Kirim data ke parent dengan tipe 'ktv'
    onBookingComplete({
      type: 'ktv',
      ...formData,
      packageName: selectedPkg?.name,
      totalPrice: `IDR ${selectedPkg?.price.toLocaleString('id-ID')}`,
    })
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => onNavigate('ktv')}
            className="flex items-center gap-2 text-neutral-600 hover:text-[#7d0000] transition-all font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Menu KTV</span>
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-10 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-[#7d0000]/10 text-[#7d0000] text-xs font-bold rounded-full mb-3 tracking-widest uppercase">
            KTV Reservation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-2">
            Booking Hiburan Anda
          </h1>
          <p className="text-neutral-500 text-lg">Amankan ruangan favorit Anda untuk malam yang tak terlupakan.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Utama */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Detail Kontak */}
              <section className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-neutral-800">
                    <Mic2 className="h-5 w-5 text-[#7d0000]" />
                    Informasi Pemesan
                  </h2>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-[#7d0000]/20 focus:border-[#7d0000] transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Nomor WhatsApp</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="0812..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-[#7d0000]/20 focus:border-[#7d0000] transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Jumlah Tamu (Pax)</label>
                    <input
                      type="number" name="pax" value={formData.pax} onChange={handleChange}
                      placeholder="Contoh: 5"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-[#7d0000]/20 focus:border-[#7d0000] transition-all outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* 2. Detail Booking */}
              <section className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-neutral-800">
                    <CalendarClock className="h-5 w-5 text-[#7d0000]" />
                    Pilihan Paket & Waktu
                  </h2>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">Pilih Tipe Ruangan</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ktvPackages.map(pkg => (
                        <label 
                          key={pkg.id} 
                          className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.selectedPackage === pkg.id 
                            ? 'border-[#7d0000] bg-[#7d0000]/5' 
                            : 'border-neutral-100 hover:border-[#7d0000]/30'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="selectedPackage" 
                            value={pkg.id} 
                            checked={formData.selectedPackage === pkg.id} 
                            onChange={handleChange} 
                            className="sr-only" 
                          />
                          <span className="font-bold text-neutral-900">{pkg.name}</span>
                          <span className="text-xs text-neutral-500 mt-1">{pkg.desc}</span>
                          <span className="text-sm font-bold text-[#7d0000] mt-3">
                            IDR {pkg.price.toLocaleString('id-ID')}
                          </span>
                          {formData.selectedPackage === pkg.id && (
                            <div className="absolute top-3 right-3 w-4 h-4 bg-[#7d0000] rounded-full border-2 border-white shadow-sm" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Tanggal Booking</label>
                      <input
                        type="date" name="date" value={formData.date} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-[#7d0000]/20 focus:border-[#7d0000] outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Jam Kedatangan</label>
                      <input
                        type="time" name="time" value={formData.time} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-[#7d0000]/20 focus:border-[#7d0000] outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Catatan Tambahan (Opsional)</label>
                    <textarea
                      name="notes" value={formData.notes} onChange={handleChange}
                      rows={2}
                      placeholder="Request lagu, dekorasi ultah, dll."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-[#7d0000]/20 focus:border-[#7d0000] outline-none resize-none"
                    />
                  </div>
                </div>
              </section>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#7d0000] hover:bg-[#5a0000] text-white h-16 text-lg font-bold rounded-2xl shadow-lg shadow-[#7d0000]/20 transition-all transform hover:-translate-y-1"
              >
                Konfirmasi Booking KTV
              </Button>
            </form>
          </div>

          {/* Sidebar Ringkasan */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
                <div className="p-6 bg-neutral-900 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-serif">Ringkasan Paket</h3>
                    <p className="text-white/70 text-sm">Grand Asia Executive KTV</p>
                  </div>
                  <Disc className="absolute top-2 right-2 text-white/10 h-24 w-24 animate-spin-slow" />
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="text-center pb-6 border-b border-dashed border-neutral-200">
                    <p className="text-sm font-medium text-neutral-500 mb-1">Ruangan Terpilih</p>
                    <h4 className="text-2xl font-bold text-[#7d0000]">{selectedPkg?.name}</h4>
                    <p className="text-neutral-900 font-bold mt-2 text-xl">
                      IDR {selectedPkg?.price.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium text-neutral-900 text-sm">Includes:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-[#7d0000] shrink-0 mt-0.5" />
                        <span>Private Room Usage</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-[#7d0000] shrink-0 mt-0.5" />
                        <span>High-Speed WiFi</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-[#7d0000] shrink-0 mt-0.5" />
                        <span className="font-semibold text-neutral-900">{selectedPkg?.desc.split('•')[1]}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl text-xs border border-yellow-100">
                    <p>Booking ini bersifat reservasi. Pembayaran dilakukan di tempat (Front Office KTV) saat kedatangan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}