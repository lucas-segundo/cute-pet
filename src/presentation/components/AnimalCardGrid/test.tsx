import { render, screen } from '@testing-library/react-native'
import AnimalCardGrid from '.'
import {
  mockAnimal,
  mockCatAnimal,
  mockDogAnimal,
} from '../../../domain/models/Animal/mock'

const mockParams = () => {
  const animals = [mockAnimal(), mockAnimal(), mockAnimal()]

  return {
    animals,
  }
}

describe('AnimalCardGrid', () => {
  it('should render with animal cards correctly', () => {
    const { animals } = mockParams()

    render(<AnimalCardGrid animals={animals} />)

    expect(screen.getAllByTestId('animalCard').length).toBe(animals.length)
  })

  it('should show only cats cards', () => {
    const animals = [mockCatAnimal(), mockCatAnimal(), mockDogAnimal()]

    render(<AnimalCardGrid animals={animals} />)

    expect(screen.getAllByTestId('animalCard').length).toBe(2)
  })
})
