"use client"

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { ArrowLeft, Users, CalendarDays, Briefcase, Mail, Phone, Building2 } from 'lucide-react'

interface MeetingBookingSectionProps {
  onNavigate: (section: string) => void
  onBookingComplete: (data: any) => void
}

export function MeetingBookingSection({ onNavigate, onBookingComplete }: MeetingBookingSectionProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    date: '',
    duration: 'half-day',
    pax: '',
    packageType: 'half-day',
    notes: ''
  })

  const packages = [
    { id: 'half-day', label: 'Half Day Meeting (5 Jam)' },
    { id: 'one-day', label: 'One Day Meeting (8 Jam)' },
    { id: 'full-day', label: 'Full Day Meeting (10 Jam)' },
    { id: 'full-board', label: 'Full Board (Residential)' },
    { id: 'room-rental', label: 'Room Rental Only' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation logic here...
    
    onBookingComplete({
      type: 'meeting', // Important flag for Thank You page
      ...formData,
      packageName: packages.find(p => p.id === formData.packageType)?.label,
      totalPrice: "Menunggu Penawaran" // Meeting usually requires quotation
    })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => onNavigate('meeting')}
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-all font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Meeting</span>
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3">Request Meeting Quotation</h1>
          <p className="text-slate-500">Isi formulir di bawah ini untuk mendapatkan penawaran terbaik bagi acara bisnis Anda.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-6 text-white flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Detail Acara & Perusahaan</span>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Perusahaan / Instansi</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text" name="companyName" required
                    value={formData.companyName} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="PT. Grand Asia..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Kontak (PIC)</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text" name="contactPerson" required
                    value={formData.contactPerson} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Bpk/Ibu..."
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="email@perusahaan.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">No. Telepon / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="tel" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="0812..."
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100 my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tanggal Acara</label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="date" name="date" required
                    value={formData.date} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Estimasi Peserta (Pax)</label>
                <input
                  type="number" name="pax" required
                  value={formData.pax} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="Contoh: 50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Paket Meeting</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {packages.map(pkg => (
                  <label key={pkg.id} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.packageType === pkg.id ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-slate-200 hover:bg-slate-50'}`}>
                    <input 
                      type="radio" name="packageType" value={pkg.id}
                      checked={formData.packageType === pkg.id}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary accent-primary"
                    />
                    <span className="ml-3 text-sm font-medium text-slate-700">{pkg.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Catatan Tambahan / Request Khusus</label>
              <textarea
                name="notes" rows={3}
                value={formData.notes} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Contoh: Butuh setup U-Shape, tambahan mic wireless, menu vegetarian..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-primary/20">
              Kirim Permintaan Penawaran
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}