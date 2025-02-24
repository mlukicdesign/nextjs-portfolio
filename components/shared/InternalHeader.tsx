'use client'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface InternalHeaderProps {
  headerVideo?: string
}

export function InternalHeader(props: InternalHeaderProps) {
  const { headerVideo } = props

  return (
    <>
      <div className="w-full h-screen md:max-h-screen max-h-[600px] relative">
        <div className="w-full h-full flex flex-col justify-end">
          <div className="">
            <div className="w-screen ~h-[146px]/[250px] relative bottom-8 overflow-hidden">
              <h1>Hello World!</h1>
            </div>
          </div>
        </div>
        {/* Gradient overlay */}

        <div className="h-full w-full absolute top-0 -z-30">
          <div className="absolute z-10 top-0 left-0 w-full h-full radial-gradient"></div>
          <video
            src={headerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="fixed h-full w-full object-cover radial-gradient"
          />
        </div>
      </div>
    </>
  )
}
