import React, { useEffect, useState } from 'react'

interface LoopCarouselProps {
  images?: { url: string; alt?: string }[] // Ensure it's optional to avoid undefined errors
}

const LoopCarousel = ({ images = [] }: LoopCarouselProps) => {
  // Ensure it's always an array
  const safeImages = Array.isArray(images) ? images : []

  // Duplicate images for smooth looping
  const [imageList, setImageList] = useState([...safeImages, ...safeImages])

  useEffect(() => {
    if (safeImages.length > 0) {
      setImageList([...safeImages, ...safeImages]) // Ensure continuous looping
    }
  }, [safeImages])

  return (
    <div className="relative overflow-hidden h-60 w-full">
      <div className="carousel-wrapper">
        {imageList.length > 0 ? (
          imageList.map((item, index) => (
            <img
              key={index}
              src={item.url}
              alt={item.alt || `Image ${index + 1}`}
              className="w-full object-cover h-60"
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No images available</p>
        )}
      </div>
    </div>
  )
}

export default LoopCarousel
