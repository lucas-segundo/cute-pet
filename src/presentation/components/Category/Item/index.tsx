import { Text, View } from 'react-native'

export interface CategoryItemProps {
  text: string
}

const CategoryItem = ({ text }: CategoryItemProps) => {
  return (
    <View className="py-3 px-5 border rounded-full border-gray-50 bg-indigo-500">
      <Text className="text-white">{text}</Text>
    </View>
  )
}

export default CategoryItem
