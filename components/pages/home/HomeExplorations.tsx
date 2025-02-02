import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface LoopCarouselProps {
  explorationCarousel?: { url: string; _key: string }[]
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function HomeExplorations({
  explorationCarousel = [],
}: LoopCarouselProps) {
  // State for each carousel's randomized images
  const [carousel1Images, setCarousel1Images] = useState(explorationCarousel)
  const [carousel2Images, setCarousel2Images] = useState(explorationCarousel)
  const [carousel3Images, setCarousel3Images] = useState(explorationCarousel)

  // Randomize images when component mounts
  useEffect(() => {
    setCarousel1Images(shuffleArray(explorationCarousel))
    setCarousel2Images(shuffleArray(explorationCarousel))
    setCarousel3Images(shuffleArray(explorationCarousel))
  }, [explorationCarousel])

  const CarouselInstance = ({
    images,
    delay = 2000,
    reverseDirection = false,
  }) => (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        direction="vertical"
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        spaceBetween={75}
        speed={1200}
        autoplay={{
          delay,
          disableOnInteraction: false,
          reverseDirection,
        }}
        className="h-[200px] overflow-hidden"
      >
        {images.map(({ _key, url }) => (
          <SwiperSlide
            key={_key}
            className="flex justify-center items-center relative"
          >
            <Image
              src={url}
              width={100}
              height={100}
              alt="Exploration Image"
              className="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-0 right-0 bottom-0 carousel-gradient z-50"></div>
    </div>
  )

  return (
    <div className="bg-void w-screen">
      <div className="fluid-container mx-auto flex md:flex-row flex-col justify-between">
        <div className="md:w-1/2 w-full">
          <h2 className="text-gradient ~text-3xl/6xl underline underline-offset-8 text-right font-arbeit mb-8">
            Explorations
          </h2>
          <p className="text-balance ~text-lg/xl font-arbeit">
            Intrigue and passion drive a passion for learning. Here are a few
            tools & technologies I'm currently, learning, experimenting, or even
            breaking.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex flex-row gap-24 justify-center">
          <CarouselInstance images={carousel1Images} delay={2000} />
          <CarouselInstance
            images={carousel2Images}
            delay={2000}
            reverseDirection={true}
          />
          <CarouselInstance images={carousel3Images} delay={2000} />
        </div>
      </div>
    </div>
  )
}
