"use client"

import { useEffect } from "react"
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  CreditCard, 
  CalendarHeart, 
  Sparkles,
  Mic2, // Icon untuk KTV
  Music, // Icon untuk KTV
  Briefcase // Icon untuk Meeting
} from 'lucide-react'

interface ThankYouSectionProps {
  bookingData: any 
  onNavigate: (section: string) => void
}

export function ThankYouSection({ bookingData, onNavigate }: ThankYouSectionProps) {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  // =================================================================
  // TAMPILAN 1: KHUSUS KTV (Tema Terang + Aksen Merah #7d0000)
  // =================================================================
  if (bookingData?.type === 'ktv') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 md:py-16 px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200">
          
          {/* Header Merah */}
          <div className="bg-[#7d0000] p-10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                <Mic2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Reservasi Diterima!</h1>
              <p className="text-white/90 text-lg">Have a great time, {bookingData.name}!</p>
            </div>
            <Music className="absolute top-6 left-6 text-white/10 h-24 w-24 animate-pulse" />
            <Sparkles className="absolute bottom-6 right-6 text-white/10 h-16 w-16 animate-pulse" />
          </div>

          <div className="p-8 md:p-10">
            <p className="text-center text-neutral-600 mb-8 leading-relaxed">
              Reservasi KTV Anda telah kami catat. Silakan tunjukkan bukti ini di Front Office KTV saat kedatangan.
            </p>

            <div className="bg-neutral-50 rounded-2xl p-6 mb-8 border border-neutral-100">
              <h3 className="text-sm font-bold text-[#7d0000] uppercase tracking-widest mb-4 border-b border-neutral-200 pb-2">
                Detail Booking
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Ruangan</span>
                  <span className="font-bold text-neutral-900">{bookingData.packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Jadwal</span>
                  <span className="font-medium text-neutral-900">{bookingData.date} @ {bookingData.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Harga Paket</span>
                  <span className="text-lg font-bold text-[#7d0000]">{bookingData.totalPrice}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => onNavigate('home')}
              size="lg"
              className="w-full bg-black hover:bg-neutral-800 text-white text-base font-bold py-6 rounded-xl shadow-lg shadow-black/10"
            >
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // =================================================================
  // TAMPILAN 2: KHUSUS WEDDING (Tema Pink/Rose)
  // =================================================================
  if (bookingData?.type === 'wedding') {
    return (
      <div className="min-h-screen bg-rose-50/50 flex items-center justify-center py-12 md:py-16 px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100">
          <div className="bg-rose-600 p-10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarHeart className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Permintaan Diterima!</h1>
              <p className="text-rose-100 text-lg">Terima kasih {bookingData.groomName} & {bookingData.brideName}</p>
            </div>
            <Sparkles className="absolute top-6 left-6 text-white/10 h-24 w-24 animate-pulse" />
            <Sparkles className="absolute bottom-6 right-6 text-white/10 h-16 w-16 animate-pulse" />
          </div>

          <div className="p-8 md:p-10">
            <p className="text-center text-slate-600 mb-8 leading-relaxed">
              Tim Wedding Specialist kami telah menerima detail rencana pernikahan Anda. 
              Kami akan segera menghubungi Anda melalui WhatsApp untuk konsultasi lebih lanjut.
            </p>

            <div className="bg-rose-50 rounded-2xl p-6 mb-8 border border-rose-100">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-4 border-b border-rose-200 pb-2">
                Ringkasan Pengajuan
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Paket Pilihan</span>
                  <span className="font-serif font-bold text-slate-900">{bookingData.packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Rencana Tanggal</span>
                  <span className="font-medium text-slate-900">{bookingData.weddingDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Estimasi Biaya</span>
                  <span className="text-lg font-bold text-rose-600">{bookingData.totalPrice}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => onNavigate('home')}
              size="lg"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-base font-medium py-6 rounded-xl"
            >
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // =================================================================
  // TAMPILAN 3: KHUSUS MEETING (Tema Bisnis / Slate) - BARU!
  // =================================================================
  if (bookingData?.type === 'meeting') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 md:py-16 px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
                  <Briefcase className="h-9 w-9 text-primary" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Permintaan Terkirim!</h1>
                <p className="text-slate-300 text-lg">Terima kasih, {bookingData.companyName}</p>
             </div>
             {/* Background decorative pattern */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>

          <div className="p-8 md:p-10">
            <p className="text-center text-slate-600 mb-8 leading-relaxed">
               Permintaan penawaran untuk <strong>{bookingData.packageName}</strong> telah kami terima. 
               Sales Executive kami akan segera menghubungi Ibu/Bapak <strong>{bookingData.contactPerson}</strong> melalui WhatsApp/Email untuk memberikan penawaran harga terbaik.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
               <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
                 Ringkasan Request
               </h3>
               <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tanggal Acara</span>
                    <span className="font-medium text-slate-900">{bookingData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Jumlah Peserta</span>
                    <span className="font-medium text-slate-900">{bookingData.pax} Pax</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Paket</span>
                    <span className="font-bold text-primary">{bookingData.packageName}</span>
                  </div>
               </div>
            </div>

            <Button
              onClick={() => onNavigate('home')}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-base font-bold py-6 rounded-xl shadow-lg shadow-primary/20"
            >
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // =================================================================
  // TAMPILAN 4: STANDAR / KAMAR
  // =================================================================
  const getRoomLabel = (type: string) => {
    switch(type) {
      case 'superior': return 'Superior Single/Twin';
      case 'deluxe': return 'Deluxe Room';
      case 'grand-suite': return 'Grand Suite Room';
      case 'kamar-sarapan': return 'Kamar + Sarapan';
      case 'kamar-only': return 'Kamar Saja';
      default: return type;
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 md:py-16 px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              <CheckCircle className="h-24 w-24 text-primary relative" />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Terima Kasih!
          </h1>
          <p className="text-xl text-muted-foreground">
            Pemesanan Anda telah berhasil dikonfirmasi
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-8 shadow-lg">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Detail Pemesanan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <User className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nama Tamu</p>
                  <p className="text-base font-medium text-foreground">{bookingData.fullName}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nomor Telepon</p>
                  <p className="text-base font-medium text-foreground">{bookingData.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-base font-medium text-foreground break-all">{bookingData.email}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tanggal Check-in</p>
                  <p className="text-base font-medium text-foreground">
                    {bookingData.bookingDate ? new Date(bookingData.bookingDate).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : '-'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="h-6 w-6 text-primary mt-1 shrink-0 flex items-center justify-center text-sm font-bold">🛏️</div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tipe Kamar</p>
                  <p className="text-base font-medium text-foreground">{getRoomLabel(bookingData.roomType)}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Metode Pembayaran</p>
                  <p className="text-base font-medium text-foreground capitalize">
                    {bookingData.paymentMethod === 'transfer-bank' && 'Transfer Bank'}
                    {bookingData.paymentMethod === 'e-wallet' && 'E-Wallet'}
                    {bookingData.paymentMethod === 'cash' && 'Tunai'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-foreground">Total Harga</span>
              <span className="text-3xl font-bold text-primary">{bookingData.totalPrice}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => onNavigate('home')} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-secondary text-base font-medium py-6">
            Kembali ke Beranda
          </Button>
          <Button onClick={() => onNavigate('contact')} variant="outline" size="lg" className="flex-1 text-base font-medium py-6">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  )
}