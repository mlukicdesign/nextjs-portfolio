import Image from 'next/image'
import { motion } from 'framer-motion'
import { cubicBezier } from 'framer-motion'
import { MotionWrapper } from '@/components/shared/MotionWrapper'
import { fadeIn } from '@/utils/animationStyles'
import type { HomePagePayload } from '@/types'
import SplitLines from '@/utils/SplitLineHeadings'
import SplitLinesParagraph from '@/utils/SplitLineParagraph'

const easing = cubicBezier(0, 0.55, 0.45, 1)

const logoAnimations = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: easing },
  }),
}

const HomeTech = ({ techGrid }: HomePagePayload) => {
  const designTech = techGrid?.designTech || []
  const devTech = techGrid?.devTech || []

  return (
    <div className="radial-gradient w-screen">
      <div className="fluid-container mx-auto">
        <MotionWrapper variants={fadeIn} delay={1} className="">
          <h2 className="text-ion-200 ~text-3xl/6xl mb-16 font-arbeit font-medium pb-6">
            <SplitLines>Design, Code, Deliver.</SplitLines>
            <SplitLines>Every layer counts.</SplitLines>
          </h2>
        </MotionWrapper>

        {/* Design Grid */}
        <div className="mb-16">
          <div className="flex border-b border-neutral-200">
            <SplitLinesParagraph className="~text-sm/2xl font-arbeit pb-2 font-medium">
              DESIGN
            </SplitLinesParagraph>
          </div>
          <div className="flex flex-row">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="md:w-2/3 lg:w-2/3 w-full grid grid-cols-4">
              {designTech?.map((logo, index) => (
                <div
                  key={index} // ✅ Keep key here, remove duplicate
                  className="border border-white border-opacity-50 bg-white/10 backdrop-blur-sm aspect-square flex items-center justify-center group hover:border-opacity-80 transition-all"
                >
                  <motion.div
                    key={index} // ✅ Keep key here, remove duplicate
                    variants={logoAnimations}
                    whileInView="visible"
                    initial="hidden"
                    custom={index}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={logo.url}
                      alt={logo.alt || 'Design Logo'}
                      width={100} // Adjust as needed
                      height={100} // Adjust as needed
                      className="object-contain p-2 group-hover:scale-105 transition-all"
                      priority={true} // ✅ Optional: Faster loading
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Grid */}
        <div className="mb-16">
          <div className="flex border-b border-neutral-200">
            <SplitLinesParagraph
              delay={0.2}
              className="~text-sm/2xl font-arbeit pb-2 font-medium"
            >
              DEVELOPMENT
            </SplitLinesParagraph>
          </div>
          <div className="flex flex-row">
            <div className="md:w-1/2 hidden md:block"></div>
            <div className="md:w-2/3 lg:w-2/3 w-full grid grid-flow-col grid-rows-2">
              {devTech?.map((logo, index) => (
                <div
                  key={index}
                  className="border border-white border-opacity-50 bg-white/10 backdrop-blur-sm aspect-square flex items-center justify-center group hover:border-opacity-80 transition-all"
                >
                  <motion.div
                    key={index} // ✅ Keep key here, remove duplicate
                    variants={logoAnimations}
                    whileInView="visible"
                    initial="hidden"
                    custom={index}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={logo.url}
                      alt={logo.alt || 'Design Logo'}
                      width={100} // Adjust as needed
                      height={100} // Adjust as needed
                      className="object-contain max-w-[60px]  py-2 group-hover:scale-105 transition-all"
                      priority={true} // ✅ Optional: Faster loading
                    />
                  </motion.div>
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
