import { Text, View } from 'react-native'

export interface CategoryItemProps {
  text: string
  isOutline?: boolean
  testID?: string
}

const CategoryItem = ({
  text,
  isOutline = false,
  testID,
}: CategoryItemProps) => {
  const containerStyle = []
  const textStyle = []

  if (isOutline) {
    textStyle.push('text-black')
  } else {
    textStyle.push('text-white')
    containerStyle.push('bg-indigo-500')
  }

  return (
    <View
      testID={testID ?? 'categoryItemContainer'}
      className={`py-3 px-5 border rounded-full border-gray-50 ${containerStyle.join(
        ' '
      )}`}
    >
      <Text className={`font-bold ${textStyle.join(' ')}`}>{text}</Text>
    </View>
  )
}

export default CategoryItem
