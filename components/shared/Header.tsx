'use client'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { motion } from 'framer-motion'
import { cubicBezier } from 'framer-motion'

interface HeaderProps {
  headerVideo?: string
}

export function Header(props: HeaderProps) {
  const { headerVideo } = props

  const svgLetters = [
    'M0 143.774V3.2364H37.7911L78.0469 124.564L117.686 3.2364H155.888V143.774H131.447V31.1418L93.0401 143.774H62.0267L24.6464 31.5462V143.774H0Z',
    'M171.711 143.774L225.112 3.2364H258.795L313.428 143.774H285.29L273.172 110.611H211.351L199.233 143.774H171.711ZM217.923 91.1989H266.6L242.364 24.6709L217.923 91.1989Z',
    'M316.191 73.202C316.191 30.1307 343.507 -0.201205 386.022 0.00100499C424.019 0.203215 448.46 21.0311 452.362 53.5874H425.867C421.76 33.7705 409.231 20.6267 386.638 20.6267C359.117 20.6267 342.686 42.8701 342.686 73.202C342.686 103.736 359.117 125.979 386.638 125.979C409.231 125.979 423.197 112.836 425.867 93.0188H452.362C448.46 125.373 424.019 146.201 386.022 145.999C343.507 145.796 316.191 116.273 316.191 73.202Z',
    'M470.776 3.2364H495.423V72.9998L560.941 3.2364H590.927L532.598 64.9113L591.544 143.774H561.146L515.345 82.3016L495.012 103.129L495.423 143.774H470.776V3.2364Z',
    'M604.109 3.2364H711.321V22.4466H628.755V62.2825H704.132V81.4927H628.755V124.564H711.321V143.774H604.109V3.2364Z',
    'M756.472 37.2081V143.774H731.826V3.2364H758.526L832.465 109.802V3.43862H856.701V143.774H830.411L756.472 37.2081Z',
    'M872.491 124.564L961.218 22.4466H874.751V3.2364H993.053V22.4466L902.272 124.564H991.821V143.774H872.491V124.564Z',
    'M1009.12 3.2364H1033.77V143.774H1009.12V3.2364Z',
    'M1061.62 3.2364H1168.84V22.4466H1086.27V62.2825H1161.65V81.4927H1086.27V124.564H1168.84V143.774H1061.62V3.2364Z',
    'M1222.39 3.2364H1247.03V124.564H1320.56V143.774H1222.39V3.2364Z',
    'M1389.34 145.796C1352.57 145.796 1329.36 126.991 1329.36 85.7392V3.2364H1354.01V85.7392C1354.01 114.656 1368.8 125.979 1389.34 125.979C1409.67 125.979 1425.07 114.858 1425.07 85.7392V3.2364H1449.72V85.7392C1449.72 126.991 1426.1 145.796 1389.34 145.796Z',
    'M1474.21 3.2364H1498.86V72.9998L1564.37 3.2364H1594.36L1536.03 64.9113L1594.98 143.774H1564.58L1518.78 82.3016L1498.45 103.129L1498.86 143.774H1474.21V3.2364Z',
    'M1607.54 3.2364H1632.19V143.774H1607.54V3.2364Z',
    'M1651.83 73.202C1651.83 30.1307 1679.15 -0.201205 1721.66 0.00100499C1759.66 0.203215 1784.1 21.0311 1788 53.5874H1761.51C1757.4 33.7705 1744.87 20.6267 1722.28 20.6267C1694.75 20.6267 1678.32 42.8701 1678.32 73.202C1678.32 103.736 1694.75 125.979 1722.28 125.979C1744.87 125.979 1758.83 112.836 1761.51 93.0188H1788C1784.1 125.373 1759.66 146.201 1721.66 145.999C1679.15 145.796 1651.83 116.273 1651.83 73.202Z',
  ]

  const easing = cubicBezier(0, 0.55, 0.45, 1)

  const letterAnimation = {
    hidden: { y: 180 },
    visible: (i) => ({
      y: 0,
      transition: { delay: i * 0.08, duration: 0.8, ease: easing }, // Staggered delay
    }),
  }

  return (
    <>
      <div className="w-full h-screen md:max-h-screen max-h-[600px] relative">
        <div className="w-full h-full flex flex-col justify-end">
          <div className="">
            <div className="h-[146px] relative bottom-8 overflow-hidden">
              <svg
                width="full"
                height="146"
                viewBox="0 0 1788 146"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {svgLetters.map((path, i) => (
                  <motion.path
                    d={path}
                    key={i}
                    variants={letterAnimation}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    fill="white"
                  />
                ))}
              </svg>
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
