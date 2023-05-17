import { screen, render } from '@testing-library/react-native'
import SearchInput from '.'
import { faker } from '@faker-js/faker'

describe('SearchInput', () => {
  it('should render with props correctly', () => {
    const placeholder = faker.lorem.text()

    render(<SearchInput placeholder={placeholder} />)

    expect(screen.getByPlaceholderText(placeholder)).toBeTruthy()
  })
})
