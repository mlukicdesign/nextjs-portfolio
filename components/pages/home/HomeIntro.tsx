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
    <section className="flex flex-col ~py-8/32 ~px-8/16 ~gap-4/16 xl:min-h-[800px] align-middle bg-void">
      <div className="~text-3xl/6xl text-pretty font-arbeit indent-12 xl:w-3/4 w-full text-gradient">
        {description.displayText == true && (
          <CustomPortableText value={description.text} />
        )}
      </div>
      <MotionWrapper
        variants={slideUp}
        className="w-full flex items-end justify-end"
      >
        <p className="lg:w-1/2 font-arbeit text-pretty ~text-lg/2xl text-neutral-200 leading-loose max-w-[600px]">
          {description.introParagraph}
        </p>
      </MotionWrapper>
    </section>
  )
}
