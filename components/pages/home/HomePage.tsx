'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import HomeContact from './HomeContact'
import HomeExplorations from './HomeExplorations'
import { HomeIntro } from './HomeIntro'
import HomeSlider from './HomeSlider'
import HomeTech from './HomeTech'

gsap.registerPlugin(ScrollTrigger)

export interface HomePageProps {
  data: HomePagePayload
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const { overview = [], showcaseProjects = [] } = data ?? {}
  const headerVideo = data?.headerVideo
  const sliderTitle = data?.sliderTitle
  const sliderProjects = Array.isArray(data?.sliderProjects)
    ? data.sliderProjects
    : undefined
  const secondSliderProjects = Array.isArray(data?.secondSliderProjects)
    ? data.secondSliderProjects
    : undefined
  const techGrid = data?.techGrid
  const explorationCarousel = Array.isArray(data?.explorationCarousel)
    ? data.explorationCarousel
    : undefined

  // Create array of refs for animation targets
  const projectRefs = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      if (!el) return

      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div>
      {overview && <Header headerVideo={headerVideo} />}
      <HomeIntro description={overview} />

      {/* Projects section */}
      <div id="projects" className="fluid-container-x bg-void">
        <div className="w-full flex justify-end mb-8 xl:mb-0">
          <h2 className="text-gradient ~text-3xl/6xl underline underline-offset-8 text-right lg:-mb-16 sm:mb-0 mt-6 md:mt-16 xl:mt-0 font-medium">
            A Collection <br /> of Recent Works
          </h2>
        </div>

        {showcaseProjects && showcaseProjects.length > 0 && (
          <div className="grid gap-8 md:gap-16 grid-cols-1 xl:grid-cols-2 pt-16 md:pt-0">
            {showcaseProjects.map((project, key) => {
              const href = resolveHref(project?._type, project?.slug)
              if (!href) return null

              const index = key + 1
              const offset = `${index === 2 ? 'pt-0 md:pt-32' : ''} ${
                index === 3 ? 'md:-mt-32' : ''
              }`

              return (
                <Link
                  key={key}
                  href={href}
                  className={offset}
                  ref={(el) => {
                    if (el) projectRefs.current[key] = el
                  }}
                  data-sanity={encodeDataAttribute?.([
                    'showcaseProjects',
                    key,
                    'slug',
                  ])}
                >
                  <ProjectListItem project={project} />
                </Link>
              )
            })}
          </div>
        )}
      </div>

      <HomeSlider
        sliderTitle={sliderTitle}
        sliderProjects={sliderProjects}
        secondSliderProjects={secondSliderProjects}
      />
      <HomeTech techGrid={techGrid ?? { designTech: [], devTech: [] }} />
      <HomeExplorations explorationCarousel={explorationCarousel} />
      <HomeContact />
    </div>
  )
}

export default HomePage
