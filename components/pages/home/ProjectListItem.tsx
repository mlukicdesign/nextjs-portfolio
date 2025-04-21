import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'
import SplitLines from '@/utils/SplitLineHeadings'
import FadeInOnScroll from '@/utils/FadeInOnScroll'
import SplitLinesParagraph from '@/utils/SplitLineParagraph'

interface ProjectProps {
  project: ShowcaseProject
}

// Edit this to create interactive project list component on homepage!

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div className={`flex flex-col gap-x-5`}>
      <div className="w-full">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[5/4] hover:opacity-75 transition-opacity duration-300"
        />
      </div>
      <div className="flex">
        <TextBox project={project} />
      </div>
    </div>
  )
}

// Content to be displayed beneath project image.

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="flex flex-wrap justify-between mt-4 mb-2 w-full text-lg md:text-2xl flex-stretch">
      {/* Title */}
      <SplitLinesParagraph
        delay={0.2}
        className="font-arbeit flex ~text-xs/4xl mb-8"
      >
        {project.title}
      </SplitLinesParagraph>
      <FadeInOnScroll delay={0.4} className="flex">
        {/* Tags */}
        {Array.isArray(project.tags) && (
          <div>
            {project.tags.map((tag, index) => {
              let tagStyle = ''

              // Switch statement to determine tag style
              switch (tag) {
                case 'WordPress':
                  tagStyle =
                    'text-[#1986DA] border text-arbeit px-6 py-3 rounded-full text-xs font-medium bg-[#00121A] mx-1 border border-slate-900 mx-1 hover:opacity-75 transition-opacity duration-300'
                  break
                case 'PHP':
                  tagStyle =
                    'text-[#A259FF] text-arbeit px-6 py-3 rounded-full text-xs font-medium bg-[#10061E] mx-1 border border-slate-900 mx-1  hover:opacity-75 transition-opacity duration-300'
                  break
                case 'Design':
                  tagStyle =
                    'text-[#0ACF83] text-arbeit px-6 py-3 rounded-full text-xs font-medium bg-[#011E13] border border-slate-900 mx-1 hover:opacity-75 transition-opacity duration-300'
                  break
                case 'Headless':
                  tagStyle =
                    'text-[#FF7262] text-arbeit px-6 py-3 rounded-full text-xs font-medium bg-[#200300] border border-slate-900 mx-1 hover:opacity-75 transition-opacity duration-300'
                  break
                case 'React':
                  tagStyle =
                    'text-[#1986DA] border text-arbeit px-6 py-3 rounded-full text-xs font-medium bg-[#00121A] mx-1 border border-slate-900 mx-1 hover:opacity-75 transition-opacity duration-300'
                  break
                case 'Shopify':
                  tagStyle =
                    'text-[#64FFC3] border text-arbeit px-6 py-3 rounded-full text-xs font-medium bg-[#013420] mx-1 border border-slate-900 mx-1 hover:opacity-75 transition-opacity duration-300'
                  break
                case '':
                  tagStyle =
                    'text-gray-500 px-6 py-3 rounded-full text-xs font-medium hover:opacity-75 bg-slate-200 mx-1 transition-opacity duration-300'
              }

              return (
                <span key={index} className={tagStyle}>
                  {tag}
                </span>
              )
            })}
          </div>
        )}
      </FadeInOnScroll>
    </div>
  )
}
