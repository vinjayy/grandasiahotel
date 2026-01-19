import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Title yang muncul di tab browser
  title: 'Grand Asia Hotel Jakarta', 
  description: 'Kenyamanan dan kemewahan di jantung Penjaringan. Solusi terbaik untuk liburan keluarga & bisnis Anda.',
  generator: 'v0.app',
  // Setting Icon Website
  icons: {
    icon: '/logowhite.png', // Menggunakan logowhite.png sebagai favicon
    shortcut: '/logowhite.png',
    apple: '/logowhite.png', // Icon saat disimpan di home screen iPhone
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}