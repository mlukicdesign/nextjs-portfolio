'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

interface HomeSliderProps {
  sliderTitle?: string
}

const sliders = [
  [
    { color: '#e3e5e7', src: 'app/projects/Frame 54.jpg' },
    { color: '#d6d7dc', src: 'app/projects/Frame54.jpg' },
    { color: '#e3e5e7', src: 'app/projects/Frame 54.jpg' },
    { color: '#d6d7dc', src: 'app/projects/Frame54.jpg' },
  ],
  [
    { color: '#d4e3ec', src: 'maven.jpg' },
    { color: '#e5e0e1', src: 'panda.jpg' },
    { color: '#d7d4cf', src: 'powell.jpg' },
    { color: '#e1dad6', src: 'wix.jpg' },
  ],
]

export default function HomeSlider(props: HomeSliderProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const xTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, 150]),
    useTransform(scrollYProgress, [0, 1], [0, -150]),
  ]

  const { sliderTitle } = props
  if (!sliderTitle) {
    return 'missing text'
  }

  return (
    <div
      ref={container}
      className="flex flex-col gap-[3vw] relative py-32 mb-[100vh] bg-void"
    >
      <div className="pb-32 text-center">
        <h2 className="text-gradient text-6xl">{sliderTitle}</h2>
      </div>
      {sliders.map((slider, index) => (
        <motion.div
          key={index}
          style={{ x: xTransforms[index] }}
          className="flex relative gap-[3vw] w-[120vw] -left-[10vw]"
        >
          {slider.map(({ color, src }, idx) => (
            <div
              key={idx}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <div className="relative w-4/5 h-4/5">
                <Image
                  fill
                  alt="Project Image"
                  src={`/images/${src}`}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
