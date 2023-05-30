import { atom } from 'jotai'
import { type AnimalType } from '../../domain/models/Animal'

export const animalTypeState = atom<AnimalType>('cat')
