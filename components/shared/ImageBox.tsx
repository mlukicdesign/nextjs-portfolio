'use client'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any; lqip?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  caption?: string
  previewImageUrl?: any
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw',
  classesWrapper,
  previewImageUrl = image?.lqip,
  ...props
}: ImageBoxProps) {
  const containerRef = useRef(null)
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  // Combine both refs
  const refs = (el: any) => {
    containerRef.current = el
    inViewRef(el)
  }

  return (
    <div
      ref={refs}
      className={`w-full h-full overflow-hidden relative ${classesWrapper} rounded-md border border-white/15`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <motion.div
          style={{ y }}
          className="absolute w-full h-[120%] top-[-10%]" // Extra height for parallax movement
        >
          <Image
            className="absolute w-full h-full"
            style={{
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.3s linear',
              objectFit: 'cover',
            }}
            alt={alt}
            width={width}
            height={height}
            sizes={size}
            src={imageUrl}
            priority
          />
        </motion.div>
      )}
      <div className={`w-full overflow-hidden h-full`}>
        <Image
          width={width}
          height={height}
          src={previewImageUrl}
          style={{
            height: '100%',
          }}
          alt=""
          role="presentation"
        />
      </div>
    </div>
  )
}
