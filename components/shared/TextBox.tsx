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
    <div className="fluid-container">
      {/* Description */}
      {description && (
        <div className="text-center ~text-lg/3xl text-slate-200 !leading-relaxed text-balance font-arbeit max-w-[1200px] mx-auto">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
