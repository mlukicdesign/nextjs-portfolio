import Image from 'next/image'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn } from '@/utils/animationStyles'

interface TechGridProps {
  techGrid: {
    designTech?: { url: string; alt?: string }[]
    devTech?: { url: string; alt?: string }[]
  }
}

const HomeTech = ({ techGrid }: TechGridProps) => {
  return (
    <div className="radial-gradient w-screen">
      <div className="fluid-container mx-auto">
        <h2 className="text-gradient ~text-3xl/6xl mb-16 font-arbeit">
          Design, Code, Deliver.
          <br />
          Every layer counts.
        </h2>

        {/* Design Grid */}
        <div className="mb-16">
          <div className="flex border-b border-neutral-200">
            <h4 className="~text-sm/2xl font-arbeit pb-2">DESIGN</h4>
          </div>
          <div className="flex flex-row">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="md:w-2/3 lg:w-2/3 w-full grid grid-flow-col grid-cols-4">
              {techGrid.designTech?.map((logo, index) => (
                <div
                  key={index}
                  className="border border-white border-opacity-50 bg-white/10 backdrop-blur-sm aspect-square flex items-center justify-center"
                >
                  <Image
                    src={logo.url}
                    alt={logo.alt || 'Design Logo'}
                    width={100} // Adjust as needed
                    height={100} // Adjust as needed
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Grid */}
        <div className="mb-16">
          <div className="flex border-b border-neutral-200">
            <h4 className="~text-sm/2xl font-arbeit pb-2">DEVELOPMENT</h4>
          </div>
          <div className="flex flex-row">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="md:w-2/3 lg:w-2/3 w-full grid grid-flow-col grid-rows-2">
              {techGrid.devTech?.map((logo, index) => (
                <div
                  key={index}
                  className="border border-white border-opacity-50 bg-white/10 backdrop-blur-sm aspect-square flex items-center justify-center"
                >
                  <Image
                    src={logo.url}
                    alt={logo.alt || 'Design Technology Logo'}
                    width={100} // Adjust as needed
                    height={100} // Adjust as needed
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTech
