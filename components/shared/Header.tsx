import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  description?: any
  headerVideo?: string
}

export function Header(props: HeaderProps) {
  const { description, headerVideo } = props
  if (!description) {
    return null
  }
  return (
    <>
      <div className="w-full h-[700px] relative">
        <div className="w-full h-full flex flex-col justify-end">
          {description && (
            <div className="text-9xl">
              {description.displayText == true && (
                <CustomPortableText value={description.text} />
              )}
            </div>
          )}
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
            className="h-full w-full object-cover relative radial-gradient"
          />
        </div>
      </div>
    </>
  )
}
