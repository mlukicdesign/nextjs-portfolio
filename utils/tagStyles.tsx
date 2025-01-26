{
  /* Refactor to use tagstyling elsewhere in project */
}

export const getTagStyle = (tag: string): string => {
  const baseStyle =
    'text-arbeit px-6 py-3 rounded-full text-sm font-medium mx-1 border border-slate-900'

  const styles: Record<string, string> = {
    WordPress: 'text-[#1986DA] bg-[#00121A]',
    PHP: 'text-[#A259FF] bg-[#10061E]',
    Design: 'text-[#0ACF83] bg-[#011E13]',
    Headless: 'text-[#FF7262] bg-[#200300]',
  }

  return styles[tag]
    ? `${styles[tag]} ${baseStyle}`
    : 'text-gray-500 bg-slate-200 px-6 py-3 rounded-full text-sm font-medium mx-1'
}
