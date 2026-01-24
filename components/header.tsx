"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "rooms", label: "Kamar & Promo" },
    { id: "resto", label: "Resto" },
    { id: "wedding", label: "Wedding" },
    { id: "meeting", label: "Meeting" },
    { id: "ktv", label: "KTV & Lounge" },
    { id: "contact", label: "Kontak" },
  ]

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2" 
          : "bg-white/90 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src="/logo.png" 
              alt="Grand Asia Hotel Logo" 
              className="h-18 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col items-start">
              <span className="font-serif text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-[#7d0000] transition-colors">
                GRAND ASIA
              </span>
              <span className="text-[10px] tracking-[0.2em] text-slate-500 font-medium uppercase mt-1">
                Hotel Jakarta
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium transition-all duration-300 group py-2 ${
                  activeSection === link.id 
                    ? "text-[#7d0000]" 
                    : "text-slate-600 hover:text-[#7d0000]"
                }`}
              >
                {link.label}
                {/* Underline Animation */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7d0000] transform origin-left transition-transform duration-300 ${
                  activeSection === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-8 py-4 text-sm font-medium border-l-4 transition-all ${
                    activeSection === link.id
                      ? "border-[#7d0000] bg-red-50/50 text-[#7d0000]"
                      : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}