'use client'

import React from 'react'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { motion } from 'framer-motion'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn } from '@/utils/animationStyles'
import { slideUp } from '@/utils/animationStyles'

interface IntroProps {
  description?: any
}

export function HomeIntro(props: IntroProps) {
  const { description } = props
  if (!description) {
    return null
  }

  return (
    <section className="flex xl:min-h-[800px] bg-void mx-auto">
      <div className="fluid-container flex flex-col mx-auto gap-12">
        <MotionWrapper
          variants={fadeIn}
          delay={0.6}
          className="~text-3xl/7xl text-pretty font-arbeit indent-12 xl:w-3/4 w-full text-gradient"
        >
          {description.displayText == true && (
            <CustomPortableText value={description.text} />
          )}
        </MotionWrapper>
        <MotionWrapper
          variants={slideUp}
          delay={1}
          className="w-full flex items-end justify-end"
        >
          <p className="lg:w-1/2 font-arbeit  text-pretty ~text-lg/xl text-neutral-300 leading-loose max-w-[600px]">
            {description.introParagraph}
          </p>
        </MotionWrapper>
      </div>
    </section>
  )
}
