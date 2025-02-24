'use client'

import type { HomePagePayload, SettingsPayload } from '@/types'
import { motion } from 'framer-motion'
import { cubicBezier } from 'framer-motion'
import Button from '@/components/shared/IconButton'

interface FooterProps {
  data: SettingsPayload
  title: string | null
  homepage: HomePagePayload | null
}
export default function Footer(props: FooterProps) {
  const {} = props ?? {}
  const title = props.title
  const lastUpdated = props.homepage?._updatedAt ?? ''
  const displayLastUpdate = props.data?.displayLastUpdated

  return (
    <footer className="bg-void mx-auto w-screen">
      <div className="flex flex-col w-full justify-between md:h-[400px] fluid-container-x pb-4">
        <div className="flex flex-row justify-between">
          {/* Right Column */}

          <div className="flex flex-col gap-6">
            <span className="uppercase text-gray-600 tracking-widest font-arbeit">
              Stay Connected
            </span>
            <a
              href="mailto:mlukicdesign@gmail.com"
              className="text-2xl font-arbiet text-neutral-grey"
            >
              mlukicdesign@gmail.com
            </a>
            <div className="flex flex-row gap-4">
              <Button buttonText="LinkedIn" link="#" />
              <Button buttonText="Explore My Github" link="#" />
            </div>
          </div>

          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-arbeit text-2xl pt-4">
              How you do <span className="text-[#1D3BFF]">something,</span>{' '}
              <br></br>is how you do{' '}
              <span className="text-[#A4E3FE]">everything</span>
            </span>

            <span className="text-sm text-gray-500 font-arbeit max-w-[280px] text-balance">
              All projects displayed on this portfolio are for demonstration
              purposes only. Ownership and rights remain with the respective
              clients and agencies.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between items-end gap-12">
          <div className="w-[80%]">
            <span>Perth, Western Australia</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="full"
              height="104"
              viewBox="0 0 1275 104"
              fill="none"
            >
              <path
                d="M0 102.414V2.30538H26.9484L55.6542 88.7305L83.9207 2.30538H111.162V102.414H93.7334V22.1832L66.3457 102.414H44.2305L17.575 22.4713V102.414H0Z"
                fill="url(#paint0_linear_82_628)"
              />
              <path
                d="M122.445 102.414L160.524 2.30538H184.543L223.501 102.414H203.437L194.796 78.7916H150.712L142.07 102.414H122.445ZM155.398 64.9636H190.109L172.827 17.5738L155.398 64.9636Z"
                fill="url(#paint1_linear_82_628)"
              />
              <path
                d="M225.472 52.1439C225.472 21.463 244.951 -0.143324 275.268 0.000715882C302.362 0.144756 319.791 14.9811 322.574 38.1718H303.681C300.751 24.0557 291.817 14.693 275.707 14.693C256.081 14.693 244.365 30.5376 244.365 52.1439C244.365 73.8942 256.081 89.7388 275.707 89.7388C291.817 89.7388 301.777 80.3761 303.681 66.26H322.574C319.791 89.3067 302.362 104.143 275.268 103.999C244.951 103.855 225.472 82.8248 225.472 52.1439Z"
                fill="url(#paint2_linear_82_628)"
              />
              <path
                d="M335.705 2.30538H353.28V51.9998L400 2.30538H421.383L379.789 46.2382L421.822 102.414H400.146L367.486 58.6258L352.987 73.4621L353.28 102.414H335.705V2.30538Z"
                fill="url(#paint3_linear_82_628)"
              />
              <path
                d="M430.782 2.30538H507.234V15.9894H448.357V44.3656H502.108V58.0496H448.357V88.7305H507.234V102.414H430.782V2.30538Z"
                fill="url(#paint4_linear_82_628)"
              />
              <path
                d="M539.431 26.5044V102.414H521.856V2.30538H540.895L593.62 78.2155V2.44943H610.902V102.414H592.156L539.431 26.5044Z"
                fill="url(#paint5_linear_82_628)"
              />
              <path
                d="M622.162 88.7305L685.433 15.9894H623.773V2.30538H708.134V15.9894L643.399 88.7305H707.255V102.414H622.162V88.7305Z"
                fill="url(#paint6_linear_82_628)"
              />
              <path
                d="M719.592 2.30538H737.167V102.414H719.592V2.30538Z"
                fill="url(#paint7_linear_82_628)"
              />
              <path
                d="M757.03 2.30538H833.481V15.9894H774.605V44.3656H828.355V58.0496H774.605V88.7305H833.481V102.414H757.03V2.30538Z"
                fill="url(#paint8_linear_82_628)"
              />
              <path
                d="M871.668 2.30538H889.243V88.7305H941.675V102.414H871.668V2.30538Z"
                fill="url(#paint9_linear_82_628)"
              />
              <path
                d="M990.717 103.855C964.501 103.855 947.951 90.459 947.951 61.0745V2.30538H965.526V61.0745C965.526 81.6725 976.071 89.7388 990.717 89.7388C1005.22 89.7388 1016.2 81.8165 1016.2 61.0745V2.30538H1033.78V61.0745C1033.78 90.459 1016.93 103.855 990.717 103.855Z"
                fill="url(#paint10_linear_82_628)"
              />
              <path
                d="M1051.24 2.30538H1068.82V51.9998L1115.54 2.30538H1136.92L1095.32 46.2382L1137.36 102.414H1115.68L1083.02 58.6258L1068.52 73.4621L1068.82 102.414H1051.24V2.30538Z"
                fill="url(#paint11_linear_82_628)"
              />
              <path
                d="M1146.32 2.30538H1163.89V102.414H1146.32V2.30538Z"
                fill="url(#paint12_linear_82_628)"
              />
              <path
                d="M1177.9 52.1439C1177.9 21.463 1197.38 -0.143324 1227.69 0.000715882C1254.79 0.144756 1272.22 14.9811 1275 38.1718H1256.11C1253.18 24.0557 1244.24 14.693 1228.13 14.693C1208.51 14.693 1196.79 30.5376 1196.79 52.1439C1196.79 73.8942 1208.51 89.7388 1228.13 89.7388C1244.24 89.7388 1254.2 80.3761 1256.11 66.26H1275C1272.22 89.3067 1254.79 104.143 1227.69 103.999C1197.38 103.855 1177.9 82.8248 1177.9 52.1439Z"
                fill="url(#paint13_linear_82_628)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_82_628"
                  x1="0"
                  y1="52"
                  x2="1275"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A4E3FE" />
                  <stop offset="1" stop-color="#04199F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {title && (
            <div className="font-arbeit text-sm w-[20%] flex flex-row justify-end">
              © {title} {new Date().getFullYear()}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
