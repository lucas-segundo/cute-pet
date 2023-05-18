import { screen, render } from '@testing-library/react-native'
import CategoryItem from '.'
import { faker } from '@faker-js/faker'

describe('CategoryItem', () => {
  it('should render with props correctly', () => {
    const text = faker.lorem.text()

    render(<CategoryItem text={text} />)

    expect(screen.getByText(text)).toBeTruthy()
  })
})
