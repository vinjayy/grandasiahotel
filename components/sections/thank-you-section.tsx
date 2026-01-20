'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, Calendar, User, Phone, Mail, CreditCard } from 'lucide-react'
import { BookingData } from './booking-section'

interface ThankYouSectionProps {
  bookingData: BookingData
  onNavigate: (section: string) => void
}

export function ThankYouSection({ bookingData, onNavigate }: ThankYouSectionProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 md:py-16 px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
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

        {/* Booking Details Card */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-8 shadow-lg">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Detail Pemesanan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Guest Info */}
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

            {/* Booking Info */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tanggal Check-in</p>
                  <p className="text-base font-medium text-foreground">
                    {new Date(bookingData.bookingDate).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="h-6 w-6 text-primary mt-1 shrink-0 flex items-center justify-center text-sm font-bold">
                  🛏️
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tipe Kamar</p>
                  <p className="text-base font-medium text-foreground">
                    {bookingData.roomType === 'kamar-sarapan' ? 'Kamar + Sarapan' : 'Kamar Saja'}
                  </p>
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

          {/* Total Price */}
          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-foreground">Total Harga</span>
              <span className="text-3xl font-bold text-primary">{bookingData.totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Important Info */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-3">Informasi Penting</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Konfirmasi pemesanan telah dikirim ke email Anda</li>
            <li>✓ Check-in dimulai pukul 14:00 WIB dan Check-out pukul 12:00 WIB</li>
            <li>✓ Hubungi kami jika ada perubahan atau pertanyaan lebih lanjut</li>
            <li>✓ Pembayaran dapat diselesaikan sebelum atau saat check-in</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4">Hubungi Kami</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span><strong>Telepon:</strong> (021) 6660-6969</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span><strong>Email:</strong> grandasiahotel99@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => onNavigate('home')}
            size="lg"
            className="flex-1 bg-primary text-primary-foreground hover:bg-secondary text-base font-medium py-6"
          >
            Kembali ke Beranda
          </Button>
          <Button
            onClick={() => onNavigate('contact')}
            variant="outline"
            size="lg"
            className="flex-1 text-base font-medium py-6"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  )
}
