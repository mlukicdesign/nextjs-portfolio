import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { HomeIntro } from './HomeIntro'
import HomeSlider from './HomeSlider'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [] } = data ?? {}
  const headerVideo = data?.headerVideo
  const sliderTitle = data?.sliderTitle
  const sliderProjects = data?.sliderProjects

  return (
    <div className="">
      {/* Header */}

      {overview && (
        <Header description={overview} headerVideo={headerVideo} />
      )}

      <HomeIntro description={overview} />
      {/* Showcase projects */}
      {/* Map over projects and parse to ProjectListItem component */}

      <div className="fluid-container-x bg-void">
        <div className="w-full flex justify-end mb-8 xl:mb-0">
          <h2 className="text-gradient ~text-3xl/6xl underline underline-offset-8 text-right -mb-16 mt-16 xl:mt-0 text-arbeit">
            A Collection <br /> of Recent Works
          </h2>
        </div>

        {showcaseProjects && showcaseProjects.length > 0 && (
          <div className="grid gap-8 md:gap-36 grid-cols-1 xl:grid-cols-2 pt-16 md:pt-0">
            {showcaseProjects.map((project, key) => {
              const href = resolveHref(project?._type, project?.slug)

              const index = key + 1
              const isEven = index % 2 === 0 ? 'md:pt-32 pt-0' : 'pt-0'

              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  href={href}
                  className={isEven}
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

      <HomeSlider sliderTitle={sliderTitle} sliderProjects={sliderProjects} />
    </div>
  )
}

export default HomePage
