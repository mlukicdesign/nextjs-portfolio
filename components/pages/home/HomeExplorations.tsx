import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoopCarouselProps {
  explorationCarousel?: { url: string; _key: string }[]
}

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5)
}

export default function HomeExplorations({
  explorationCarousel = [],
}: LoopCarouselProps) {
  const [shuffledImages, setShuffledImages] = useState<any[]>([])

  useEffect(() => {
    // Shuffle images whenever the component is mounted or data is updated
    const randomizedImages = shuffleArray([...explorationCarousel])
    setShuffledImages(randomizedImages)
  }, [explorationCarousel])

  return (
    <div className="bg-void w-screen">
      <div className="fluid-container mx-auto flex md:flex-row flex-col gap-16">
        <div className="md:w-1/2 w-full">
          <h2 className="text-gradient ~text-3xl/6xl underline underline-offset-8 text-right font-arbeit mb-8">
            Explorations
          </h2>
          <p className="text-balance ~text-lg/xl font-arbeit">
            Intrigue and passion drive a passion for learning. Here are a few
            tools & technologies I’m currently, learning, experimenting, or even
            breaking.
          </p>
        </div>

        {/* Loop Carousel */}
        <div className="md:w-1/2 w-full">
          <div className="overflow-hidden">
            {/* Wrapper for horizontal scrolling */}
            <div className="flex animate-marquee">
              {shuffledImages?.map(({ _key, url }) => (
                <div key={_key} className="flex-shrink-0 w-1/3 p-2">
                  <Image
                    src={url}
                    alt="Exploration Image"
                    width={100} // Adjust the size
                    height={100}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
