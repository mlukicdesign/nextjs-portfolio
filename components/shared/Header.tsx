import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  description?: any
  headerVideo?: string
}

export function Header(props: HeaderProps) {
  const { description, headerVideo } = props

  return (
    <>
      <div className="w-full h-screen md:max-h-screen max-h-[600px] relative">
        <div className="w-full h-full flex flex-col justify-end">
          <h1 className="text-fluid font-semibold leading-none font-arbeit">
            MACKENZIE LUKIC
          </h1>
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
