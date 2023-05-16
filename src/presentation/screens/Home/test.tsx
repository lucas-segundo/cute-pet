import HomeScreen from '.'
import { render, screen } from '@testing-library/react-native'

const makeSut = () => {
  render(<HomeScreen />)
}

describe('Home', () => {
  it('should render correctly', () => {
    makeSut()

    const text = screen.getByText('HomeScreen')

    expect(text).toBeTruthy()
  })
})
