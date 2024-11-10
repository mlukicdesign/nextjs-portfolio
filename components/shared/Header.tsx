import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  description?: any
}
export function Header(props: HeaderProps) {
  const { description } = props
  if (!description) {
    return null
  }
  return (
    <div className="w-full md:w-4/6">
      {description && (
        <div className="h-96 pb-8 flex items-end ~text-3xl/7xl  md:text-4.5xl">
          {description.displayText == true && (
            <CustomPortableText value={description.text} />
          )}
        </div>
      )}
    </div>
  )
}
