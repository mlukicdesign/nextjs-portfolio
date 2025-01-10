import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { HomeIntro } from './HomeIntro'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [] } = data ?? {}
  const headerVideo = data?.headerVideo

  return (
    <div className="">
      {/* Header */}

      {overview && <Header description={overview} headerVideo={headerVideo} />}

      <HomeIntro description={overview} />
      {/* Showcase projects */}
      {/* Map over projects and parse to ProjectListItem component */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="~px-8/16 grid gap-8 md:gap-36 grid-cols-1 xl:grid-cols-2">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)

            const index = key + 1
            const isEven = index % 2 === 0 ? 'md:pt-24 pt-0' : 'pt-0'

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
  )
}

export default HomePage
