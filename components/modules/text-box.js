import TextBox from '@/components/shared/TextBox'
import SplitLines from '@/utils/SplitLineHeadings'

const Image = ({ data = {} }) => {
  const { description } = data

  if (!description) return null
  return (
    <div className="divider">
      <TextBox description={description} classesWrapper="relative" />
    </div>
  )
}

export default Image
