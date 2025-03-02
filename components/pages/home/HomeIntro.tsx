'use client'

import React from 'react'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { motion } from 'framer-motion'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn } from '@/utils/animationStyles'
import { slideUp } from '@/utils/animationStyles'
import Button from '@/components/shared/IconButton'

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
          variants={slideUp}
          delay={0.6}
          className="~text-4xl/7xl text-pretty font-arbeit indent-12 xl:w-3/4 w-full text-gradient !font-medium"
        >
          {description.displayText == true && (
            <CustomPortableText value={description.text} />
          )}
        </MotionWrapper>
        <MotionWrapper
          variants={fadeIn}
          delay={1}
          className="w-full items-end justify-end flex flex-col"
        >
          <div className="flex flex-col max-w-[600px] lg:w-1/2 gap-8">
            <p className="font-arbeit text-pretty ~text-lg/xl text-gray-200 leading-loose w-full">
              {description.introParagraph}
            </p>
            <Button buttonText="Read More" link="/about" />
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
