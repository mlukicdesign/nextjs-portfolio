'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 1,
  y = 50,
  triggerOffset = 'top 80%',
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: triggerOffset,
        },
      },
    )
  }, [delay, duration, y, triggerOffset])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
