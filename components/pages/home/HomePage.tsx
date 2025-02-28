'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { HomeIntro } from './HomeIntro'
import HomeSlider from './HomeSlider'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn, slideUp } from '@/utils/animationStyles'
import HomeTech from './HomeTech'
import HomeExplorations from './HomeExplorations'
import HomeContact from './HomeContact'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
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

  return (
    <div className="">
      {/* Header */}

      {overview && <Header headerVideo={headerVideo} />}

      <HomeIntro description={overview} />
      {/* Showcase projects */}
      {/* Map over projects and parse to ProjectListItem component */}

      <div id="projects" className="fluid-container-x bg-void">
        <div className="w-full flex justify-end mb-8 xl:mb-0">
          <h2 className="text-gradient ~text-3xl/6xl underline underline-offset-8 text-right -mb-16 mt-16 xl:mt-0 font-arbeit">
            A Collection <br /> of Recent Works
          </h2>
        </div>

        {showcaseProjects && showcaseProjects.length > 0 && (
          <MotionWrapper
            variants={slideUp}
            delay={1.5}
            className="grid gap-8 md:gap-16 grid-cols-1 xl:grid-cols-2 pt-16 md:pt-0"
          >
            {showcaseProjects.map((project, key) => {
              const href = resolveHref(project?._type, project?.slug)

              const index = key + 1
              const offSet = `${index === 2 ? 'pt-0 md:pt-32' : ''} 
               ${index === 3 ? 'md:-mt-32' : ''}`

              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  href={href}
                  className={offSet}
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
          </MotionWrapper>
        )}
      </div>

      <HomeSlider
        sliderTitle={sliderTitle}
        sliderProjects={sliderProjects}
        secondSliderProjects={secondSliderProjects}
      />
      <HomeTech techGrid={techGrid} />
      <HomeExplorations explorationCarousel={explorationCarousel} />
      <HomeContact />
    </div>
  )
}

export default HomePage
