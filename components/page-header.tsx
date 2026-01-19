interface PageHeaderProps {
  tag: string
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHeader({ tag, title, subtitle, backgroundImage }: PageHeaderProps) {
  // Fungsi untuk membersihkan string backgroundImage agar tidak double url()
  const cleanImage = backgroundImage?.replace("url('", "").replace("')", "")

  return (
    <div className="relative py-32 md:py-40 overflow-hidden border-b border-border bg-primary">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${cleanImage}')` }}
        />
      )}
      
      {/* Overlay gradient - Dibuat lebih transparan (opacity 70% - 40%) agar gambar terlihat */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-black/40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase mb-8 animate-fade-in">
          {tag}
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}