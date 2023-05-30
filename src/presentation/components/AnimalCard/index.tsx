import { Image, Text, View, type ViewProps } from 'react-native'
import type Animal from '../../../domain/models/Animal'

export interface AnimalCardProps extends ViewProps {
  animal: Animal
}

const AnimalCard = ({ animal, ...props }: AnimalCardProps) => {
  return (
    <View
      {...props}
      className={`h-72 border border-gray-200 rounded-2xl p-4 ${
        props.className ?? ''
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
