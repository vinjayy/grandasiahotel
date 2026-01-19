"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  category?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

export function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-border hover:border-white/20 transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${image.src}')` }}
            />
            
            {/* Gradient Overlay - Now using Black */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {image.category && (
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-black text-xs font-semibold shadow-lg">
                  {image.category}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[60]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div
            className="relative max-w-6xl w-full max-h-[80vh] aspect-video bg-contain bg-no-repeat bg-center rounded-lg"
            style={{ backgroundImage: `url('${selectedImage.src}')` }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}