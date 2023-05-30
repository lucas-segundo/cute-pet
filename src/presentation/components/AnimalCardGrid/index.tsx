import { FlatList } from 'react-native'
import type Animal from '../../../domain/models/Animal'
import AnimalCard from '../AnimalCard'

export interface AnimalCardGridProps {
  animals: Animal[]
}

const AnimalCardGrid = ({ animals }: AnimalCardGridProps) => {
  return (
    <FlatList
      className="px-5 mb-5"
      data={animals}
      renderItem={({ item }) => (
        <AnimalCard testID="animalCard" className="mt-5" animal={item} />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export default AnimalCardGrid
