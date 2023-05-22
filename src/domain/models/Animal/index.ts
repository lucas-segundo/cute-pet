export type AnimalType = 'cat' | 'dog'

export interface AnimalPhoto {
  url: string
}

export default interface Animal {
  id: string
  name: string
  type: AnimalType
  race: string
  photos: AnimalPhoto[]
}
