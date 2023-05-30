import { useAtom } from 'jotai'
import { animalTypeState } from '../states/animal-type'

export const useAnimalType = () => {
  const state = useAtom(animalTypeState)

  return state
}
