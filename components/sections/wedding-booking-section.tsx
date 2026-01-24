'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  CalendarHeart, 
  CheckCircle2,
  MessageSquare,
  Sparkles
} from 'lucide-react'

interface WeddingBookingSectionProps {
  onNavigate: (section: string) => void
  onBookingComplete: (data: any) => void
}

export function WeddingBookingSection({ onNavigate, onBookingComplete }: WeddingBookingSectionProps) {
  // Data Paket Wedding
  const weddingPackages = [
    { id: 'silver', name: 'Silver Package', price: 36800000, pax: 150, details: 'Buffet Standard, Decoration, Sound' },
    { id: 'gold', name: 'Gold Package', price: 39800000, pax: 150, details: 'Buffet + Lamb, Luxury Decor, Band' },
    { id: 'diamond', name: 'Diamond Package', price: 88800000, pax: 300, details: 'Premium Buffet, Grand Decor, Suite Room' },
  ]

  const [formData, setFormData] = useState({
    groomName: '',
    brideName: '',
    phone: '',
    email: '',
    weddingDate: '',
    selectedPackage: 'silver',
    guestEstimate: '',
    notes: ''
  })

  const selectedPkg = weddingPackages.find(p => p.id === formData.selectedPackage)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.groomName || !formData.brideName || !formData.phone || !formData.weddingDate) {
      alert('Mohon lengkapi data wajib')
      return
    }
    
    // Kirim data ke parent (bisa diarahkan ke Thank You page yang sama atau beda)
    onBookingComplete({
      type: 'wedding',
      ...formData,
      totalPrice: `Rp ${selectedPkg?.price.toLocaleString('id-ID')}`,
      packageName: selectedPkg?.name
    })
  }

  return (
    <div className="min-h-screen bg-rose-50/30">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => onNavigate('wedding')}
            className="flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-all font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Paket Wedding</span>
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-10 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-bold rounded-full mb-3 tracking-widest uppercase">
            Wedding Reservation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
            Wujudkan Hari Bahagia Anda
          </h1>
          <p className="text-slate-500 text-lg">Isi formulir di bawah untuk konsultasi dan reservasi tanggal pernikahan.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Utama */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Detail Pasangan */}
              <section className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
                <div className="p-6 border-b border-rose-50 bg-rose-50/30">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                    <Heart className="h-5 w-5 text-rose-500" />
                    Informasi Mempelai
                  </h2>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Calon Pengantin Pria</label>
                    <input
                      type="text" name="groomName" value={formData.groomName} onChange={handleChange}
                      placeholder="Nama Lengkap"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Calon Pengantin Wanita</label>
                    <input
                      type="text" name="brideName" value={formData.brideName} onChange={handleChange}
                      placeholder="Nama Lengkap"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor WhatsApp / Telepon</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="0812..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="email@anda.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all outline-none"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* 2. Detail Acara */}
              <section className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
                <div className="p-6 border-b border-rose-50 bg-rose-50/30">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                    <CalendarHeart className="h-5 w-5 text-rose-500" />
                    Rencana Pernikahan
                  </h2>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Pilih Paket Wedding</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {weddingPackages.map(pkg => (
                        <label 
                          key={pkg.id} 
                          className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.selectedPackage === pkg.id 
                            ? 'border-rose-400 bg-rose-50' 
                            : 'border-slate-100 hover:border-rose-200'
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
                          <span className="font-serif font-bold text-slate-900">{pkg.name}</span>
                          <span className="text-xs text-slate-500 mt-1">{pkg.pax} Pax</span>
                          <span className="text-sm font-bold text-rose-500 mt-3">
                            Rp {(pkg.price / 1000000).toFixed(1)} Juta
                          </span>
                          {formData.selectedPackage === pkg.id && (
                            <div className="absolute top-3 right-3 w-4 h-4 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Rencana Tanggal</label>
                      <input
                        type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Estimasi Tambahan Tamu (Opsional)</label>
                      <input
                        type="number" name="guestEstimate" value={formData.guestEstimate} onChange={handleChange}
                        placeholder="Contoh: 50"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none"
                      />
                      <p className="text-xs text-slate-400 mt-1">*Paket sudah termasuk pax dasar</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Catatan Khusus / Permintaan</label>
                    <textarea
                      name="notes" value={formData.notes} onChange={handleChange}
                      rows={3}
                      placeholder="Misal: Tema warna maroon, request test food, dll."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none resize-none"
                    />
                  </div>
                </div>
              </section>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-rose-600 hover:bg-rose-700 text-white h-16 text-lg font-bold rounded-2xl shadow-lg shadow-rose-200 transition-all transform hover:-translate-y-1"
              >
                Ajukan Reservasi Wedding
              </Button>
            </form>
          </div>

          {/* Sidebar Ringkasan */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="p-6 bg-slate-900 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-serif">Ringkasan Paket</h3>
                    <p className="text-white/70 text-sm">Grand Asia Hotel Wedding</p>
                  </div>
                  <Sparkles className="absolute top-2 right-2 text-white/10 h-24 w-24 -rotate-12" />
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="text-center pb-6 border-b border-dashed border-slate-200">
                    <p className="text-sm font-medium text-slate-500 mb-1">Paket Terpilih</p>
                    <h4 className="text-2xl font-serif font-bold text-rose-600">{selectedPkg?.name}</h4>
                    <p className="text-slate-900 font-bold mt-2">
                      Rp {selectedPkg?.price.toLocaleString('id-ID')}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      untuk {selectedPkg?.pax} Pax
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium text-slate-900 text-sm">Includes:</h5>
                    <ul className="space-y-2">
                      {selectedPkg?.details.split(', ').map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl text-xs flex gap-3 border border-yellow-100">
                    <MessageSquare className="h-4 w-4 shrink-0" />
                    <p>Setelah pengajuan ini, Wedding Specialist kami akan menghubungi Anda untuk konsultasi detail & technical meeting.</p>
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