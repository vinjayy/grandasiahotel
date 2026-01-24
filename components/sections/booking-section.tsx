'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { 
  CreditCard, 
  DollarSign, 
  Banknote, 
  ArrowLeft, 
  ShieldCheck, 
  Info,
  CalendarDays,
  BedDouble
} from 'lucide-react'

// Mock images untuk logo payment
const PAYMENT_LOGOS = [
  { name: 'Visa', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
  { name: 'Mastercard', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
  { name: 'JCB', url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg' },
  { name: 'American Express', url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg' },
  { name: 'UnionPay', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg' },
]

interface BookingSectionProps {
  onNavigate: (section: string) => void
  onBookingComplete: (bookingData: BookingData) => void
}

export interface BookingData {
  fullName: string
  phone: string
  email: string
  bookingDate: string
  roomType: string
  paymentMethod: string
  totalPrice: string
}

export function BookingSection({ onNavigate, onBookingComplete }: BookingSectionProps) {
  // Update opsi kamar sesuai rooms-section.tsx
  const roomOptions = [
    { 
      value: 'superior', 
      label: 'Superior Single/Twin', 
      price: '400000', 
      sub: '26 m², Bathtub, Free WiFi' 
    },
    { 
      value: 'deluxe', 
      label: 'Deluxe Room', 
      price: '500000', 
      sub: '36 m², Bathtub, Coffee Maker' 
    },
    { 
      value: 'grand-suite', 
      label: 'Grand Suite Room', 
      price: '600000', 
      sub: '36 m², Spacious, Full Amenities' 
    },
  ]

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    bookingDate: '',
    roomType: 'superior', // Default ke superior
    paymentMethod: 'transfer-bank',
  })

  const paymentMethods = [
    { id: 'transfer-bank', label: 'Kartu Kredit / Debit Online', icon: CreditCard },
    { id: 'e-wallet', label: 'E-Wallet (OVO, Dana, QRIS)', icon: DollarSign },
    { id: 'cash', label: 'Bayar di Tempat (Cash)', icon: Banknote },
  ]

  const selectedRoom = roomOptions.find(r => r.value === formData.roomType)
  const totalPriceRaw = selectedRoom?.price || '0'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phone || !formData.email || !formData.bookingDate) {
      alert('Mohon isi semua field yang diperlukan')
      return
    }
    onBookingComplete({
      ...formData,
      totalPrice: `Rp ${parseInt(totalPriceRaw).toLocaleString('id-ID')}`,
    })
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => onNavigate('rooms')}
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-all font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Pilihan Kamar</span>
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-10">
          <h1 className="font-serif text-4xl font-bold text-slate-900 tracking-tight">Konfirmasi Reservasi</h1>
          <p className="text-slate-500 mt-2 text-lg">Selesaikan langkah terakhir untuk mengamankan kamar Anda.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Utama */}
          <div className="lg:col-span-8 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Seksi Data Diri */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                    Informasi Kontak
                  </h2>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap Sesuai ID</label>
                    <input
                      type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor WhatsApp</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="0812..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Alamat Email</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="email@anda.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Seksi Pilihan Kamar & Tanggal */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                    Detail Menginap
                  </h2>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3 text-center md:text-left">Pilih Tipe Kamar</label>
                    <div className="grid grid-cols-1 gap-4">
                      {roomOptions.map(room => (
                        <label key={room.value} className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.roomType === room.value ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}>
                          <input type="radio" name="roomType" value={room.value} checked={formData.roomType === room.value} onChange={handleChange} className="w-5 h-5 text-primary accent-primary" />
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-slate-900 text-lg">{room.label}</span>
                                <span className="text-primary font-bold">Rp {parseInt(room.price).toLocaleString('id-ID')}</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">{room.sub}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="max-w-xs">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Tanggal Check-in</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="date" name="bookingDate" value={formData.bookingDate} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Seksi Pembayaran */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">3</span>
                    Metode Pembayaran
                  </h2>
                </div>
                <div className="p-8">
                  <div className="space-y-3">
                    {paymentMethods.map(method => {
                      const Icon = method.icon
                      return (
                        <label key={method.id} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === method.id ? 'bg-slate-50 border-primary' : 'border-slate-100 hover:bg-slate-50'}`}>
                          <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={handleChange} className="w-4 h-4 text-primary accent-primary" />
                          <Icon className="h-5 w-5 text-slate-500 ml-4" />
                          <span className="ml-3 font-medium text-slate-700">{method.label}</span>
                        </label>
                      )
                    })}
                  </div>

                  {/* Payment Icons */}
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4">Kami menerima kartu internasional</p>
                    <div className="flex flex-wrap gap-5 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      {PAYMENT_LOGOS.map((logo) => (
                        <img key={logo.name} src={logo.url} alt={logo.name} className="h-6 md:h-7 object-contain" title={logo.name} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-16 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
                Selesaikan Pembayaran Sekarang
              </Button>
            </form>
          </div>

          {/* Sidebar Ringkasan */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="p-6 bg-slate-900 text-white">
                  <h3 className="text-lg font-bold">Ringkasan Pesanan</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{selectedRoom?.label}</p>
                      <p className="text-xs text-slate-500 mt-1">1 Kamar x 1 Malam</p>
                    </div>
                    <span className="text-sm font-bold text-slate-900">Rp {parseInt(totalPriceRaw).toLocaleString('id-ID')}</span>
                  </div>
                  
                  {formData.bookingDate && (
                    <div className="flex justify-between py-3 border-y border-slate-50 text-sm">
                      <span className="text-slate-500">Check-in</span>
                      <span className="font-semibold text-slate-800">{new Date(formData.bookingDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-500 text-sm">Total Harga</span>
                      <div className="text-right">
                        <span className="block text-2xl font-black text-primary">Rp {parseInt(totalPriceRaw).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-emerald-50 text-emerald-700 text-xs flex gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <p>Enkripsi SSL aman. Data Anda terlindungi secara privasi.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex gap-3">
                <Info className="h-5 w-5 text-blue-500 shrink-0" />
                <p className="text-[11px] text-blue-700 leading-relaxed">
                  Konfirmasi instan akan dikirimkan ke email Anda segera setelah pembayaran divalidasi oleh sistem kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}