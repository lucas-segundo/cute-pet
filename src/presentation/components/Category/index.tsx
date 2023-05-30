import { Text, View } from 'react-native'
import { useAnimalType } from '../../hooks/useAnimalType'
import CategoryItem from './Item'

const Category = () => {
  const [animalType, setAnimalType] = useAnimalType()

  return (
    <View>
      <Text className="font-bold text-lg">Categoria</Text>
      <View className="bg-gray-100 p-1 flex-row rounded-full mt-5">
        <CategoryItem
          text="🐈 Gatos"
          testID="catCategory"
          isOutline={animalType !== 'cat'}
          onPress={() => {
            setAnimalType('cat')
          }}
        />
        <CategoryItem
          text="🐕 Cachorros"
          testID="dogCategory"
          isOutline={animalType !== 'dog'}
          onPress={() => {
            setAnimalType('dog')
          }}
        />
      </View>
    </View>
  )
}

export default Category
