'use client'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { MotionWrapper } from './MotionWrapper'
import { slideUp } from '@/utils/animationStyles'

interface TextBoxProps {
  description?: any[]
}
export default function Header(props: TextBoxProps) {
  const { description } = props
  if (!description) {
    return null
  }
  return (
    <MotionWrapper variants={slideUp} delay={0.6}>
      <div className="fluid-container">
        {/* Description */}
        {description && (
          <div className="text-center ~text-lg/3xl text-slate-400 !leading-relaxed text-balance font-arbeit max-w-[1200px] mx-auto">
            <CustomPortableText value={description} />
          </div>
        )}
      </div>
    </MotionWrapper>
  )
}
