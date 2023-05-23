import type Animal from '../../../domain/models/Animal'
import { View, Image, Text } from 'react-native'

export interface AnimalCardProps {
  animal: Animal
  containerClassName?: string
}

const AnimalCard = ({ animal, containerClassName }: AnimalCardProps) => {
  return (
    <View
      testID="container"
      className={`h-72 border border-gray-200 rounded-2xl p-4 ${
        containerClassName ?? ''
      }`}
    >
      <Image
        testID="animalPhoto"
        className="w-full h-48 rounded-2xl"
        source={{ uri: animal.photos[0].url }}
      />
      <View className="mt-2">
        <Text className="font-bold text-lg">{animal.name}</Text>
        <Text className="font-bold text-gray-400">{animal.race}</Text>
      </View>
    </View>
  )
}

export default AnimalCard
