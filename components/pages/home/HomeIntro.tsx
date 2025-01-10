import React from 'react'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  description?: any
}

export function HomeIntro(props: HeaderProps) {
  const { description } = props
  if (!description) {
    return null
  }

  return (
    <section className="flex flex-col ~py-8/32 ~px-8/16 gap-16 xl:min-h-[800px] align-middle">
      <div className="~text-3xl/6xl text-pretty font-arbeit indent-12 xl:w-1/2 w-full text-gradient">
        {description.displayText == true && (
          <CustomPortableText value={description.text} />
        )}
      </div>
      <div className="w-full flex items-end justify-end">
        <div className="lg:w-1/2 font-arbeit text-balance ~text-lg/xl leading-loose">
          Lorem ipsum dolor sit amet consectetur. Ut ultrices id nisi dictumst.
          Suspendisse elementum sed lectus elit. Ut turpis montes amet sapien
          nam. Morbi fermentum ac pellentesque condimentum sit aliquet ut
          ultrices. Tellus lectus sollicitudin quisque vivamus. Hac eget non
          lorem balandit id non dui tincidunt. Ut volutpat porta eget ut. Elit
          sem massa non facilisi vulputate. Quisque amet amet egestas euismod
          aliquam in morbi. Egestas vulputate lectus massa nulla feugiat
          tincidunt imperdiet fringilla.
        </div>
      </div>
    </section>
  )
}
