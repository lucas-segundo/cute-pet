import { TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export interface SearchInputProps {
  placeholder: string
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <View className="flex-row p-4 border border-gray-50 rounded-full bg-gray-100">
      <AntDesign name="search1" size={24} color="gray" />
      <TextInput className="ml-2" placeholder={placeholder} />
    </View>
  )
}

export default SearchInput
