'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

interface HomeSliderProps {
  sliderTitle?: string
  sliderProjects?: { _key: string; url: string }[] // Expect array of objects
}

export default function HomeSlider({
  sliderTitle,
  sliderProjects,
}: HomeSliderProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const xTransform = useTransform(scrollYProgress, [0, 1], [0, 150])

  // Handle missing props gracefully
  if (!sliderTitle || !sliderProjects?.length) {
    return (
      <div className="text-center text-gray-500">No projects available.</div>
    )
  }

  return (
    <div
      ref={container}
      className="flex flex-col gap-[3vw] relative py-32 mb-[100vh] bg-void"
    >
      <div className="pb-32 text-center">
        <h2 className="text-gradient text-6xl">{sliderTitle}</h2>
      </div>

      {/* Motion wrapper for sliding effect */}
      <motion.div
        style={{ x: xTransform }}
        className="flex relative gap-[3vw] w-[120vw] -left-[10vw]"
      >
        {sliderProjects.map(({ _key, url }) => (
          <div
            key={_key}
            className="w-1/4 h-[20vw] flex items-center justify-center bg-gray-200"
          >
            <div className="relative w-4/5 h-4/5">
              <Image
                fill
                alt="Project Image"
                src={url}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
