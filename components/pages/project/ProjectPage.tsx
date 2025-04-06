import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { Module } from '@/components/modules'
import { MoreProjects } from '@/components/pages/project/MoreProjects'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { ProjectPayload, HomePagePayload } from '@/types'
import Button from '@/components/shared/IconButton'

export interface ProjectPageProps {
  data: ProjectPayload | null
  moreProjects: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const getTagStyle = (tag: string): string => {
  const baseStyle =
    'text-arbeit px-6 py-3 rounded-full text-sm font-medium mx-1 border border-slate-900'

  const styles: Record<string, string> = {
    WordPress: 'text-[#1986DA] bg-[#00121A]',
    PHP: 'text-[#A259FF] bg-[#10061E]',
    Design: 'text-[#0ACF83] bg-[#011E13]',
    Headless: 'text-[#FF7262] bg-[#200300]',
    Shopify: 'text-[#64FFC3] bg-[#013420]',
  }

  return styles[tag]
    ? `${styles[tag]} ${baseStyle}`
    : 'text-gray-500 bg-slate-200 px-6 py-3 rounded-full text-sm font-medium mx-1'
}

export function ProjectPage({
  data,
  moreProjects,
  encodeDataAttribute,
}: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  // Safely destructures project data (`year`, `overview`, `site`, `title`, `content`, `slug`, `tags`) from the `data` prop, defaulting to an empty object if data is null.
  const { year, overview, site, title, content, slug, tags = [] } = data ?? {}

  // Get a list of showcased projects
  const { showcaseProjects = [] } = moreProjects ?? {}

  // Get the internal video from the global settings
  const video = global?.internalVideo

  // Get previous and next project
  const projects = showcaseProjects
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === slug,
  )
  const prevProject = projects[currentProjectIndex - 1] || null
  const nextProject = projects[currentProjectIndex + 1] || null

  return (
    <div>
      {/* Header */}
      <div className="h-[400px] flex flex-col justify-end radial-gradient">
        <div className="fluid-container">
          {title && (
            <div className="~text-4xl/5xl font-arbeit text-white capitalize font-medium">
              {title}
            </div>
          )}
        </div>
      </div>
      {/* className="fixed h-full w-full object-cover radial-gradient" */}
      <div className="pb-24 space-y-6 bg-void mx-auto">
        <div className="w-full mx-auto flex flex-wrap justify-between flex-col md:flex-row fluid-container">
          {/* Info col */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <div>
              <span className="text-sm text-slate-500 tracking-widest capitalize font-medium">
                YEAR COMPLETED
              </span>

              <div className="py-2 border-t border-gray-500">
                {year && (
                  <div className="md:mt-2 text-lg md:text-2xl">{year}</div>
                )}
              </div>
            </div>
            {/* Tags */}
            <div>
              <span className="text-sm text-slate-500 tracking-widest capitalize font-medium">
                SOLUTION & SERVICES
              </span>
              <div className="py-2 border-t border-gray-500 ">
                {Array.isArray(tags) && (
                  <div className="md:mt-4 text-lg md:text-2xl">
                    {tags.map((tag, index) => (
                      <span key={index} className={getTagStyle(tag)}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <span className="text-sm text-slate-500 tracking-widest capitalize font-medium">
                VIEW FULL SITE
              </span>
              <div className="py-4 border-t border-gray-500">
                {/* Site */}
                {site && (
                  <Button buttonText="View full website" link={site?.url} />
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            {/* Overview */}
            {overview && (
              <div className="mt-4 ~text-lg/3xl text-balance text-slate-200 !leading-relaxed">
                <CustomPortableText value={overview} />
              </div>
            )}
          </div>
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

        <div className="~pb-12/32 ~px-0/4 max-w-[2500px] mx-auto w-full">
          {/* Display project content by type */}
          {content?.map((content, key) => (
            <Module key={key} content={content} />
          ))}
        </div>

        <div className="w-full flex justify-center mx-auto ~py-2/4">
          <Button buttonText="View full website" link={site?.url} />
        </div>

        {/* Previous and next project links */}
        <div className="fluid-container-x">
          {projects && (
            <MoreProjects previous={prevProject} next={nextProject} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
