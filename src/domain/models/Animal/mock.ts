import { faker } from '@faker-js/faker'
import type Animal from '.'
import { type AnimalPhoto } from '.'

const mockPhoto = (): AnimalPhoto => ({
  url: faker.image.urlPlaceholder({
    width: 400,
    height: 400,
    text: '',
  }),
})

export const mockAnimal = (): Animal => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  race: faker.animal.cat(),
  type: 'cat',
  photos: [mockPhoto(), mockPhoto(), mockPhoto()],
})
