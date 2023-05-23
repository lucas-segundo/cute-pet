import { screen, render } from '@testing-library/react-native'
import AnimalCard from '.'
import { mockAnimal } from '../../../domain/models/Animal/mock'

const mockParams = () => {
  const animal = mockAnimal()
  const containerClassName = 'mt-2'

  return {
    animal,
    containerClassName,
  }
}

describe('AnimalCard', () => {
  it('should render with animal props correctly', () => {
    const { animal } = mockParams()

    render(<AnimalCard animal={animal} />)

    expect(screen.getByText(animal.name)).toBeTruthy()
    expect(screen.getByText(animal.race)).toBeTruthy()
    expect(screen.getByTestId('animalPhoto')).toHaveProperty(
      'props.source.uri',
      animal.photos[0].url
    )
  })

  it('should render with correct containerClassName', () => {
    const { animal, containerClassName } = mockParams()

    render(
      <AnimalCard animal={animal} containerClassName={containerClassName} />
    )

    expect(screen.getByTestId('container')).toHaveStyle({
      marginTop: 8,
    })
  })
})
