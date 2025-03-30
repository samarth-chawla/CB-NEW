import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import React from "react"
const galleryImages = [
  {
    src: "https://drive.google.com/file/d/1q99Kz6nHDJ4pgC_DxzYi6zIpAFFLN2jI/view",
    alt: "Event image 1",


  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%206",
    alt: "Event image 6",

  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%207",
    alt: "Event image 7",
 
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%208",
    alt: "Event image 8",
 
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%209",
    alt: "Event image 9",

  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%2010",
    alt: "Event image 10",

  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%2011",
    alt: "Event image 11",
 
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Event%20Image%2012",
    alt: "Event image 12",

  },
]

export default function Gallery({images}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                
                className="absolute top-0 right-0 z-10 text-white"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative w-full max-h-[70vh] flex items-center justify-center">
                <img
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  className="object-contain max-h-[70vh] max-w-full"
                />
              </div>

              <div className="mt-4 text-white text-center">
                
                <p className="text-sm text-white/70">
                  Image {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <button
                  
                  className="text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <button
                  
                  className="text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

