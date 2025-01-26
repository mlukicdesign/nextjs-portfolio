'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { HeaderLinks } from '@/components/shared/HeaderLinks'
import { resolveHref, urlForLogo } from '@/sanity/lib/utils'
import type { LinkItem, PageItem, SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
  title: string | null
  logo: any | null
}

// Navbar component for the website.
// Trigger this component with useEffect hook in main layout page to open cool modal.

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const title = props.title ?? ''

  const menuItems = data?.menuItems ?? {}
  const menuPages = menuItems?.page || ([] as PageItem[])
  const menuLinks = menuItems?.link || ([] as LinkItem[])

  const customLogo = props?.logo
  const logoImageUrl = customLogo && urlForLogo(customLogo)?.url()

  const navAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.6, ease: 'easeOut' }, // Staggered delay
    },
  }

  return (
    <motion.div variants={navAnimation} initial="hidden" animate="visible">
      <div className="flex flex-wrap w-full justify-between items-center gap-x-5 ~px-12/6 h-[100px]">
        {customLogo && customLogo ? (
          <Link
            href={`/`}
            className={`text-xl hover:text-secondary md:text-2xl`}
          >
            <div className="flex h-6">
              <Image
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                src={logoImageUrl}
              />
            </div>
          </Link>
        ) : (
          <Link
            href={`/`}
            className={` text-2xl hover:text-secondary md:text-2xl`}
          >
            {title}
          </Link>
        )}
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0 items-center">
          {menuPages &&
            menuPages.map((menuItem, key) => {
              const href = resolveHref(menuItem?._type, menuItem?.slug)
              if (!href) {
                return null
              }
              return (
                <HeaderLinks key={key} href={href} title={menuItem.title} />
              )
            })}

          {menuLinks &&
            menuLinks.map((menuItem, key) => {
              return (
                <Link
                  key={key}
                  target="_blank"
                  className={`text-lg px-3 py-1 text-secondary font-arbeit`}
                  href={menuItem.url!}
                >
                  {menuItem.title}
                </Link>
              )
            })}
          <a href="mailto:mlukicdesign@gmail.com">
            <div
              className="flex w-[66px] h-[66px] justify-center items-center gap-[10px] flex-shrink-0"
              style={{
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.20)',
                background: 'rgba(15, 15, 15, 0.25)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
              >
                <g clip-path="url(#clip0_262_9)">
                  <path
                    d="M56 40H40C38.9 40 38.01 40.9 38.01 42L38 54C38 55.1 38.9 56 40 56H56C57.1 56 58 55.1 58 54V42C58 40.9 57.1 40 56 40ZM56 44L48 49L40 44V42L48 47L56 42V44Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_262_9">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
