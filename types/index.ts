import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  page?: {
    _type: string
    slug?: string
    title?: string
  }
  link?: {
    _type: string
    url?: string
    title?: string
  }
}

export interface PageItem {
  _type: string
  slug?: string
  title?: string
}

export interface LinkItem {
  _type: string
  url?: string
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string
  title?: string
  year?: string
  _updatedAt?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: any
  showcaseProjects?: ShowcaseProject[]
  title?: string
  headerVideo?: string
  tags?: string
  techGrid?: {
    designTech?: { url: string; alt?: string }[]
    devTech?: { url: string; alt?: string }[]
  }
  _updatedAt?: string
  sliderTitle?: string
  sliderProjects?: Image
  secondSliderProjects?: Image
  explorationCarousel?: Image
  customLogo?: Image
}

export interface ProjectPayload {
  year?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  site?: {
    urltitle?: string
    url: string
  }
  slug: string
  tags?: string
  title?: string
  content?: Content[]
}

export interface Content {
  _type: string
  _key: string
  photo: object[]
  photoOne: object[]
  photoTwo: object[]
  textBlock: object[]
  videoLink: object[]
}

export interface SettingsPayload {
  menuItems?: {
    page?: PageItem[]
    link?: LinkItem[]
  }
  internalVideo?: string
  ogImage?: Image
  favIcon?: Image
  title?: string
  bgColor: {
    r?: string
    g?: string
    b?: string
  }
  textColor: {
    r?: string
    g?: string
    b?: string
  }
  displayLastUpdated: boolean
}

export interface AboutPayload {
  overview?: PortableTextBlock[]
  title?: string
  heading?: string
  aboutImage?: {
    asset: Image
    width: number
    height: number
  }
  aboutLinks?: LinkItem[]
}
