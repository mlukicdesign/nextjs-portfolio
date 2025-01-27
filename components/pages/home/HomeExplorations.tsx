import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LoopCarousel from '@/components/shared/LoopCarousel'

const wordsArray = ['React', 'GSAP', 'Tailwind', 'TypeScript', 'JavaScript']

const HomeExplorations = () => {
  return (
    <div className="bg-void w-screen">
      <div className="fluid-container mx-auto flex flex-row">
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
          <div className="h-screen flex items-center justify-center text-white">
            <LoopCarousel words={wordsArray} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeExplorations
