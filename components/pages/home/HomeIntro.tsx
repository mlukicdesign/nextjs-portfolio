'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React, { useEffect, useRef } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Button from '@/components/shared/IconButton'
import FadeInOnScroll from '@/utils/FadeInOnScroll'
import SplitTextOnScroll from '@/utils/SplitWordsScroll'
import SplitLinesHeading from '@/utils/SplitLineHeadings'
import SplitLinesParagraph from '@/utils/SplitLineParagraph'
// Removed unused imports: MotionWrapper and fadeIn

// Register plugins
gsap.registerPlugin(SplitText, ScrollTrigger)

export function HomeIntro(props) {
  const { description } = props

  console.log(description)
  const textRef = useRef(null)
  const splitRef = useRef(null)

  return (
    <section className="flex xl:min-h-[800px] bg-void mx-auto">
      <div className="fluid-container flex flex-col mx-auto gap-12">
        <SplitLinesHeading
          delay={0.3}
          className="~text-4xl/7xl text-balance font-arbeit xl:w-3/4 w-full text-ion-200 transition-all duration-300 ease-in-out pb-6"
        >
          {description.introHeading}
        </SplitLinesHeading>

        <div className="w-full items-end justify-end flex flex-col">
          <div className="flex flex-col max-w-[800px] lg:w-1/2 gap-8">
            <SplitLinesParagraph
              delay={0.4}
              className="font-arbeit text-pretty ~text-lg/2xl !text-slate-200 !leading-relaxed w-full "
            >
              {description.introParagraph}
            </SplitLinesParagraph>
            <Button buttonText="Read More" link="/about" />
          </div>
        </div>
      </div>
    </section>
  )
}
