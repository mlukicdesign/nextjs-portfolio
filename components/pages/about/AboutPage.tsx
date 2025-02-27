'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import AboutImageBox from '@/components/shared/AboutImageBox'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { AboutPayload } from '@/types'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn, slideUp } from '@/utils/animationStyles'

export interface AboutPageProps {
  data: AboutPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function AboutPage({ data }: AboutPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, overview, aboutImage, aboutLinks } = data ?? {}

  return (
    <div>
      {/* Header */}
      <div className="md:h-[400px] h-[100px] bg-red-500 flex flex-col justify-end radial-gradient">
        <div className="fluid-container">
          {title && (
            <div className="~text-2xl/5xl font-arbeit text-white">{title}</div>
          )}
        </div>
      </div>
      <div className="fluid-container mx-auto flex flex-col justify-center items-center bg-void">
        {/* Title
        <div>{title && title}</div> */}

        <MotionWrapper variants={slideUp} delay={0.6}>
          {overview && (
            <div className="mt-2 ~text-lg/3xl text-gray-300 !leading-relaxed text-balance font-arbeit justify-center max-w-[800px] ">
              <CustomPortableText value={overview} />
            </div>
          )}
        </MotionWrapper>
        <div className="mt-10 flex flex-col">
          {/* Links */}
          {aboutLinks &&
            aboutLinks.map((aboutLink, key) => {
              return (
                <div key={key} className="flex flex-wrap">
                  <Link
                    target="_blank"
                    className={`flex flex-wrap text-xl text-secondary underline md:text-2xl`}
                    href={aboutLink.url!}
                  >
                    {aboutLink.title}
                  </Link>
                </div>
              )
            })}
        </div>
      </div>

      <div className="w-full">
        {/* About image */}
        {aboutImage && (
          <AboutImageBox
            image={aboutImage}
            alt={`About image`}
            classesWrapper="relative"
          />
        )}
      </div>

      <div className="h-full w-full absolute top-0 -z-30">
        <div className="absolute z-10 top-0 left-0 w-full h-full radial-gradient"></div>
        <video
          src="https://cdn.sanity.io/files/6o5yisdo/production/1f88f75e0189bd95381d4ab5c2268a6496e6a84c.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="fixed h-full w-full object-cover radial-gradient"
        />
      </div>
    </div>
  )
}

export default AboutPage
