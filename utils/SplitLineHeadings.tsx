// @ts-nocheck
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function SplitLinesHeading({
  children,
  delay = 0,
  duration = 1,
  y = 20,
  triggerOffset = 'top 85%',
  className = '',
}) {
  const ref = useRef(null)
  const splitRef = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Cleanup before creating a new split
    if (splitRef.current) {
      splitRef.current.revert()
    }

    // Correct usage here
    splitRef.current = new SplitText(element, {
      type: 'lines',
      tag: 'span',
    })

    // Animate each line
    gsap.fromTo(
      splitRef.current.lines,
      {
        clipPath: 'inset(0% 0% 80% 0%)',
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% -50% 0%)',
        duration,
        delay,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: triggerOffset,
          once: true,
          // 👇 Add the callback here
        },

        onComplete: () => {
          // Remove all GSAP-applied inline styles
          gsap.set(splitRef.current.lines, { clearProps: 'all' })
          element.classList.add('text-gradient')
        },
      },
    )

    return () => {
      if (splitRef.current) {
        splitRef.current.revert()
      }
    }
  }, [delay, duration, y, triggerOffset])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
