import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'

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
          classesWrapper="relative aspect-[5/4]"
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
    <div className="flex flex-wrap justify-between mt-2 mb-2 w-full text-lg md:text-2xl flex-stretch">
      {/* Title */}
      <div className="flex">{project.title}</div>
      {/* Year */}
      <div className="flex">{project.year}</div>
      {/* Year */}
      <div className="flex">
        {/* Tags */}
        {Array.isArray(project.tags) && (
          <div className="">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-white px-3 py-1 rounded-full text-sm font-medium p-2 bg-slate-500 mx-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
