'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React, { useEffect, useRef } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Button from '@/components/shared/IconButton'
import FadeInOnScroll from '@/utils/FadeInOnScroll'
import SplitTextOnScroll from '@/utils/SplitWordsScroll'
import SplitLines from '@/utils/SplitLinesScroll'
// Removed unused imports: MotionWrapper and fadeIn

// Register plugins
gsap.registerPlugin(SplitText, ScrollTrigger)

export function HomeIntro(props) {
  const { description } = props
  const textRef = useRef(null)
  const splitRef = useRef(null)

  useEffect(() => {
    if (!description?.text || !description?.displayText || !textRef.current)
      return

    // Split the text
    splitRef.current = new SplitText(textRef.current, {
      type: 'lines',
      tag: 'span',
      linesClass: '',
    })

    // GSAP animation with ScrollTrigger
    gsap.from(splitRef.current.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
      delay: 0.4,
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 1,
      ease: 'power2.out',
    })

    return () => {
      splitRef.current?.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [description])

  if (!description) {
    return null
  }

  return (
    <section className="flex xl:min-h-[800px] bg-void mx-auto">
      <div className="fluid-container flex flex-col mx-auto gap-12">
        <FadeInOnScroll
          delay={0.3}
          className="~text-4xl/7xl text-pretty font-arbeit xl:w-3/4 w-full font-medium text-gradient"
        >
          {description.displayText === true && (
            <CustomPortableText value={description.text} />
          )}
        </FadeInOnScroll>

        <div className="w-full items-end justify-end flex flex-col">
          <div className="flex flex-col max-w-[800px] lg:w-1/2 gap-8">
            <SplitLines
              delay={0.4}
              className="font-arbeit text-pretty ~text-lg/2xl text-slate-200 !leading-relaxed w-full"
            >
              {description.introParagraph}
            </SplitLines>
            <Button buttonText="Read More" link="/about" />
          </div>
        </div>
      </div>
    </section>
  )
}
