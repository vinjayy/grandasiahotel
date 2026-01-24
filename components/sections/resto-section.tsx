"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Utensils, X, ZoomIn, ShoppingBag, Send, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header" // Import PageHeader

export function RestoSection() {
  const carouselImages = [
    "/CAFFE.jpg", "/CAFFE2.jpg", "/CAFFE3.jpg", 
    "/CAFFE6.jpg", "/BUFFET-MENU6.jpg", "/CAFFE3.J4.jpg"
  ]

  const menuImages = [
    "/MENU1.jpg", "/MENU2.jpg", "/MENU3.jpg", "/MENU5.jpg"
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  // State untuk Lightbox & Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [orderForm, setOrderForm] = useState({
    name: "",
    tableNumber: "",
    orderItems: "",
    notes: ""
  })

  // --- FUNGSI NAVIGASI ---
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }, [carouselImages.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  // --- LOGIKA AUTO PLAY ---
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // --- FORM HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setOrderForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSendToWhatsapp = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = "6281234567890" 
    const message = `*Order Makanan - Cathay Resto*\nNama: ${orderForm.name}\nMeja: ${orderForm.tableNumber}\nItems: ${orderForm.orderItems}\nNote: ${orderForm.notes}`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    setIsOrderModalOpen(false)
  }

  return (
    <div className="bg-white min-h-screen pb-24 relative">
      
      {/* --- PAGE HEADER (Style Sama dengan Room) --- */}
      <PageHeader
        tag="Fine Dining"
        title="The Cathay Resto"
        subtitle="Nikmati sajian kuliner legendaris dengan suasana otentik dan pelayanan berkelas"
        backgroundImage="url('/resto3.jpeg')" // Menggunakan foto resto sebagai background header
      />

      {/* --- ORDER BUTTON SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 text-center mb-16">
         <div className="inline-block p-2 bg-white rounded-full shadow-xl">
             <Button 
                onClick={() => setIsOrderModalOpen(true)}
                size="lg"
                className="bg-[#7d0000] hover:bg-[#5a0000] text-white px-10 py-8 rounded-full shadow-lg hover:shadow-red-900/20 transition-all text-xl font-bold gap-3"
             >
                <ShoppingBag className="w-6 h-6" />
                Pesan Makanan Sekarang
             </Button>
         </div>
      </div>

      {/* --- CAROUSEL SECTION (AUTO SCROLL + ARROWS) --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div
            className="relative w-full group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* CONTAINER GAMBAR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
                {[0, 1, 2].map((offset) => {
                    const index = (currentSlide + offset) % carouselImages.length;
                    return (
                        <div 
                            key={`${index}-${currentSlide}`}
                            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative animate-in fade-in slide-in-from-right-4 duration-500"
                        >
                            <img 
                                src={carouselImages[index]} 
                                alt={`Resto Ambience ${index}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => (e.currentTarget.src = `https://placehold.co/800x600/eee/999?text=Image+Error`)}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                    )
                })}
            </div>

            {/* --- TOMBOL NAVIGASI --- */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#7d0000] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#7d0000] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "w-8 bg-[#7d0000]" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                        }`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* --- MENU SECTION HEADER --- */}
      <div className="text-center mb-12 px-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7d0000]/10 mb-4">
            <Utensils className="h-6 w-6 text-[#7d0000]" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            MENU CATHAY RESTO
        </h2>
        <div className="h-1 w-20 bg-[#7d0000] mx-auto rounded-full" />
      </div>

      {/* --- MENU GRID (A4 Ratio) --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {menuImages.map((src, index) => (
                <div 
                    key={index} 
                    onClick={() => setSelectedImage(src)}
                    className="aspect-[210/297] rounded-2xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200 relative group cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                >
                    <div className="w-full h-full relative">
                         <img 
                            src={src} 
                            alt={`Menu Item ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => (e.currentTarget.src = `https://placehold.co/600x850/f8f8f8/ccc?text=Menu+A4+${index + 1}`)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 bg-white/20 backdrop-blur-md p-3 rounded-full">
                                <ZoomIn className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-[110]"
                onClick={() => setSelectedImage(null)}
            >
                <X className="h-8 w-8" />
            </button>
            <div 
                className="relative w-full max-w-2xl h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img src={selectedImage} alt="Menu Detail" className="max-h-[90vh] max-w-full w-auto object-contain rounded-lg shadow-2xl" />
            </div>
        </div>
      )}

      {/* --- ORDER FORM MODAL --- */}
      {isOrderModalOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setIsOrderModalOpen(false)}
        >
            <div 
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-[#7d0000] p-6 text-white flex justify-between items-center">
                    <h3 className="font-serif text-2xl font-bold flex items-center gap-2">
                        <Utensils className="h-6 w-6" /> Pesan Makanan
                    </h3>
                    <button onClick={() => setIsOrderModalOpen(false)} className="text-white/80 hover:text-white">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <form onSubmit={handleSendToWhatsapp} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Nama Pemesan</label>
                        <input type="text" name="name" required placeholder="Nama Anda" value={orderForm.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#7d0000] outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Nomor Meja / Kamar</label>
                        <input type="text" name="tableNumber" placeholder="Contoh: Meja 5" value={orderForm.tableNumber} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#7d0000] outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Daftar Pesanan</label>
                        <textarea name="orderItems" required rows={4} placeholder="Contoh: 1x Nasi Goreng" value={orderForm.orderItems} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#7d0000] outline-none resize-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Catatan</label>
                        <input type="text" name="notes" placeholder="Contoh: Tidak pedas" value={orderForm.notes} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#7d0000] outline-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" /> Kirim ke WhatsApp
                    </Button>
                </form>
            </div>
        </div>
      )}
    </div>
  )
}