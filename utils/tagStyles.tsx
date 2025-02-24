// types/tags.ts
type TagColor = {
  text: string
  background: string
}

type TagConfig = {
  colors: TagColor
  customStyle?: string
}

type TagsConfig = Record<string, TagConfig>

// utils/tagStyles.ts
const BASE_STYLE =
  'px-6 py-3 rounded-full text-sm font-medium mx-1 border border-slate-900 text-arbeit'
const DEFAULT_STYLE =
  'text-gray-500 bg-slate-200 px-6 py-3 rounded-full text-sm font-medium mx-1'

// Tag configuration object - easily extendable
const TAGS_CONFIG: TagsConfig = {
  WordPress: {
    colors: {
      text: '#1986DA',
      background: '#00121A',
    },
  },
  PHP: {
    colors: {
      text: '#A259FF',
      background: '#10061E',
    },
  },
  Design: {
    colors: {
      text: '#0ACF83',
      background: '#011E13',
    },
  },
  Headless: {
    colors: {
      text: '#FF7262',
      background: '#200300',
    },
  },
  // Easy to add new tags with custom styles
  CustomTag: {
    colors: {
      text: '#FFFFFF',
      background: '#000000',
    },
    customStyle: 'border-2', // Optional custom classes
  },
}

export const getTagStyle = (tag: string): string => {
  const config = TAGS_CONFIG[tag]

  if (!config) return DEFAULT_STYLE

  const { colors, customStyle = '' } = config
  const colorStyle = `text-[${colors.text}] bg-[${colors.background}]`

  return `${colorStyle} ${BASE_STYLE} ${customStyle}`.trim()
}

// Optional: Helper function to add new tag styles programmatically
export const addTagStyle = (
  tagName: string,
  textColor: string,
  backgroundColor: string,
  customStyle?: string,
) => {
  TAGS_CONFIG[tagName] = {
    colors: {
      text: textColor,
      background: backgroundColor,
    },
    customStyle,
  }
}
