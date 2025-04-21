'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { HeaderLinks } from '@/components/shared/HeaderLinks'
import { resolveHref, urlForLogo } from '@/sanity/lib/utils'

import Button from '@/components/shared/IconButton'


export default function Navbar(props) {
  const { data } = props
  const title = props.title ?? ''
  const video = data?.internalVideo

  const menuItems = data?.menuItems ?? {}
  const menuPages = menuItems?.page || [] 
  const menuLinks = menuItems?.link || []

  const customLogo = props?.logo
  const logoImageUrl = customLogo && urlForLogo(customLogo)?.url()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.6, ease: 'easeOut' },
    },
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      variants={navAnimation}
      initial="hidden"
      animate="visible"
      className="fixed z-100 top-0 w-full"
    >
      <div className="flex w-full justify-between items-center gap-x-5 ~px-6/12 h-[100px] bg-gradient-to-b from-void/80 to-void/0 bg-blend-multiply font-medium">
        {customLogo ? (
          <Link href={`/`} className={`~text-sm/xl`}>
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
            className={`~text-sm/lg cursor-pointer hover:text-ion-400 transition-all px-3 py-1 !font-bold z-50`}
          >
            <span className="hidden md:inline">{title}</span>
            <span className="md:hidden">ML</span>
          </Link>
        )}

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button
            className="relative text-white focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-wrap gap-3 md:mt-0 items-center">
          {[...menuPages, ...menuLinks].map((menuItem, key) => {
            const href =
              '_type' in menuItem
                ? resolveHref(menuItem._type, menuItem.slug)
                : menuItem.url

            if (!href) return null

            return '_type' in menuItem ? (
              <HeaderLinks key={key} href={href} title={menuItem.title} />
            ) : (
              <Link
                key={key}
                target="_blank"
                className={`~text-sm/lg px-3 py-1 text-secondary font-arbeit`}
                href={href}
              >
                {menuItem.title}
              </Link>
            )
          })}
          <Link
            href="/about"
            className={`text-white ~text-sm/lg px-3 py-1 font-arbeit cursor-pointer hover:text-ion-400 transition-all`}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className={`text-white ~text-sm/lg px-3 py-1 font-arbeit cursor-pointer hover:text-ion-400 transition-all`}
          >
            Projects
          </Link>
          <Link
            href="/#contact-form"
            className={`~text-sm/lg px-3 py-1 text-white font-arbeit cursor-pointer hover:text-ion-400 transition-all`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute md:hidden flex flex-col justify-between backdrop-blur-sm px-6 py-4 h-screen top-0 w-full pt-24 z-20 bg-void/80"
          >
            <div className="flex flex-col gap-8 mt-16">
              {[...menuPages, ...menuLinks].map((menuItem, key) => {
                const href =
                  '_type' in menuItem
                    ? resolveHref(menuItem._type, menuItem.slug)
                    : menuItem.url

                if (!href) return null

                return '_type' in menuItem ? (
                  <HeaderLinks
                    key={key}
                    href={href}
                    title={menuItem.title}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <Link
                    key={key}
                    href={href}
                    target="_blank"
                    className="text-white ~text-sm/lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menuItem.title}
                  </Link>
                )
              })}
              <Link
                href="/about"
                className="text-white text-3xl p-2 font-medium hover:text-ion-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-white text-3xl p-2 font-medium hover:text-ion-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#contact-form"
                className="text-white text-3xl p-2 font-medium hover:text-ion-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-6 max-md:pb-8">
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
                <Button
                  buttonText="LinkedIn"
                  link="https://linkedin.com/in/mackenzie-lukic-380904147"
                />
                <Button
                  buttonText="Explore My Github"
                  link="https://github.com/mlukicdesign"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
