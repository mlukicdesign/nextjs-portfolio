'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn } from '@/utils/animationStyles'
import SplitLines from '@/utils/SplitLineHeadings'

interface ProjectImage {
  _key: string
  url: string
}

interface HomeSliderProps {
  sliderTitle?: string
  sliderProjects?: ProjectImage[]
  secondSliderProjects?: ProjectImage[]
}

export default function HomeSlider({
  sliderTitle,
  sliderProjects = [],
  secondSliderProjects = [],
}: HomeSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Transform values for parallax scrolling effect
  const firstRowTransform = useTransform(scrollYProgress, [0, 1], [0, 150])
  const secondRowTransform = useTransform(scrollYProgress, [0, 1], [150, 0])

  // Check if there's any content to display
  const hasContent =
    sliderTitle || sliderProjects.length > 0 || secondSliderProjects.length > 0
  if (!hasContent) {
    return (
      <div className="text-center text-gray-500 text-lg py-8">
        No projects available.
      </div>
    )
  }

  /**
   * Renders a project image with consistent styling
   */
  const renderProjectImage = ({ _key, url }: ProjectImage) => (
    <div
      key={_key}
      className="md:w-1/4 md:h-[20vw] w-1/2 h-[40vw] flex items-center justify-center bg-void ~p-2/4"
    >
      <div className="relative w-full md:h-4/5 h-1/2 aspect-video p-4">
        <Image
          fill
          alt="Project Image"
          src={url}
          className="aspect-video object-cover hover:scale-105 transition-all duration-500 rounded-sm border border-white/10"
        />
      </div>
    </div>
  )

  return (
    <section
      ref={containerRef}
      className="flex flex-col relative py-32 bg-void overflow-x-hidden"
    >
      {/* Title Section */}
      {sliderTitle && (
        <div className="h-[150px] overflow-hidden">
          <div className="lg:!pb-64 text-center max-w-[800px] mx-auto">
            <h2 className="text-ion-200 font-arbiet font-medium ~text-4xl/6xl pb-6">
              <SplitLines>{sliderTitle}</SplitLines>
            </h2>
          </div>
        </div>
      )}

      {/* First Row - Forward Motion */}
      {sliderProjects.length > 0 && (
        <motion.div
          style={{ x: firstRowTransform }}
          className="flex relative gap-[2vw] w-[120vw] -left-[10vw]"
        >
          {sliderProjects.map(renderProjectImage)}
        </motion.div>
      )}

      {/* Second Row - Reverse Motion */}
      {secondSliderProjects.length > 0 && (
        <motion.div
          style={{ x: secondRowTransform }}
          className="flex relative gap-[2vw] w-[120vw] right-[10vw]"
        >
          {secondSliderProjects.map(renderProjectImage)}
        </motion.div>
      )}
    </section>
  )
}
