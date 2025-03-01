'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn } from '@/utils/animationStyles'

interface HomeSliderProps {
  sliderTitle?: string
  sliderProjects?: { _key: string; url: string }[]
  secondSliderProjects?: { _key: string; url: string }[] // Expect array of objects
}

export default function HomeSlider({
  sliderTitle,
  sliderProjects = [],
  secondSliderProjects = [],
}: HomeSliderProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const rowTransform = useTransform(scrollYProgress, [0, 1], [0, 150])
  const row2Transform = useTransform(scrollYProgress, [0, 1], [150, 0])

  // If no title and both project arrays are empty, show a message
  if (
    !sliderTitle &&
    !sliderProjects?.length &&
    !secondSliderProjects?.length
  ) {
    return (
      <div className="text-center text-gray-500 text-lg">
        No projects available.
      </div>
    )
  }

  return (
    <div
      ref={container}
      className="flex flex-col relative py-32 bg-void overflow-x-hidden"
    >
      <div className="h-[150px] overflow-hidden">
        <MotionWrapper
          variants={fadeIn}
          delay={1}
          className="!pb-64 text-center max-w-[800px] mx-auto"
        >
          <h2 className=" text-gradient font-arbiet ~text-4xl/6xl">
            {sliderTitle}
          </h2>
        </MotionWrapper>
      </div>

      {/* First row of slider projects */}
      <motion.div
        style={{ x: rowTransform }}
        className="flex relative gap-[2vw] w-[120vw] -left-[10vw]"
      >
        {sliderProjects.map(({ _key, url }) => (
          <div
            key={_key}
            className="md:w-1/4 md:h-[20vw] w-1/2 h-[40vw] flex items-center justify-center bg-void ~p-2/4"
          >
            <div className="relative w-full md:h-4/5 h-1/2 aspect-video">
              <Image
                fill
                key={_key}
                alt="Project Image"
                src={url}
                className="aspect-video object-cover hover:scale-105 transition-all transition-500 rounded-sm border border-white/10"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second Row of Slider Projects */}
      <motion.div
        style={{ x: row2Transform }}
        className="flex relative gap-[2vw] w-[120vw] right-[10vw]"
      >
        {secondSliderProjects.map(({ _key, url }) => (
          <div
            key={_key}
            className="md:w-1/4 md:h-[20vw] w-1/2 h-[40vw] flex items-center justify-center bg-void ~p-2/4"
          >
            <div className="relative w-full md:h-4/5 h-1/2 aspect-video p-4">
              <Image
                fill
                key={_key}
                alt="Project Image"
                src={url}
                className="aspect-video object-cover hover:scale-105 transition-all transition-500 rounded-sm border border-white/10"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
