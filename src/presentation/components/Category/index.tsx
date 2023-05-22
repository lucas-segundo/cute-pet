import { Text, View } from 'react-native'
import { useState } from 'react'
import CategoryItem from './Item'

type CategoryItemSelected = 'cat' | 'dog'

const Category = () => {
  const [categoryItemSelected, setCategoryItemSelected] =
    useState<CategoryItemSelected>()

  return (
    <View>
      <Text className="font-bold text-lg">Categoria</Text>
      <View className="bg-gray-100 p-1 flex-row">
        <CategoryItem
          text="🐈 Gatos"
          testID="catCategory"
          isOutline={categoryItemSelected !== 'cat'}
          onPress={() => {
            setCategoryItemSelected('cat')
          }}
        />
        <CategoryItem
          text="🐕 Cachorros"
          testID="dogCategory"
          isOutline={categoryItemSelected !== 'dog'}
          onPress={() => {
            setCategoryItemSelected('dog')
          }}
        />
      </View>
    </View>
  )
}

export default Category
