import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from 'next-sanity'
import type { Image } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'
import SplitLines from '@/utils/SplitLinesScroll'

type AnimatedBlock = {
  _type: 'animatedBlock'
  _key: string
  animate?: boolean
  body: PortableTextBlock
}

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: (PortableTextBlock | AnimatedBlock)[]
}) {
  const components: PortableTextComponents = {
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },

      // Render animatedBlock manually
      animatedBlock: ({ value }: { value: AnimatedBlock }) => {
        const { animate, body } = value

        const renderBlock = (
          <PortableText
            value={[body]}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className={paragraphClasses}>{children}</p>
                ),
              },
              marks: {
                link: ({ children, value }) => (
                  <a
                    className="underline transition hover:opacity-50"
                    href={value?.href}
                    rel="noreferrer noopener"
                  >
                    {children}
                  </a>
                ),
              },
            }}
          />
        )

        return animate ? (
          <SplitLines className={paragraphClasses}>{renderBlock}</SplitLines>
        ) : (
          renderBlock
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
