'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function SplitTextOnScroll({
  children,
  delay = 0,
  duration = 1,
  y = 40,
  triggerOffset = 'top 80%',
  className = '',
  type = 'lines', // can be 'words' or 'chars' too
  tag = 'div', // optional wrapper tag
}) {
  const ref = useRef(null)
  const splitRef = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Clean up on re-renders or unmount
    if (splitRef.current) {
      splitRef.current.revert()
    }

    // Split the text into lines/words/chars
    splitRef.current = new SplitText(element, {
      type,
      linesClass: 'overflow-hidden', // or any class you need
    })

    // Animate the individual lines/words/chars
    gsap.from(splitRef.current[type], {
      y,
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        start: triggerOffset,
        once: true,
      },
    })

    // Cleanup
    return () => {
      if (splitRef.current) {
        splitRef.current.revert()
      }
    }
  }, [delay, duration, y, triggerOffset, type])

  const Tag = tag

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
