import '@testing-library/jest-native/extend-expect'
import { screen, render } from '@testing-library/react-native'

import { faker } from '@faker-js/faker'

import CategoryItem from '.'

const getMockValues = () => {
  const text = faker.lorem.text()

  return {
    text,
  }
}

describe('CategoryItem', () => {
  it('should render with text', () => {
    const { text } = getMockValues()

    render(<CategoryItem text={text} />)

    const component = screen.getByText(text)
    expect(component).toBeTruthy()
  })

  it('should render outline', () => {
    const { text } = getMockValues()

    render(<CategoryItem text={text} isOutline />)

    const component = screen.getByTestId('categoryItemContainer')
    expect(component).not.toHaveStyle({
      backgroundColor: '#6366f1',
    })
  })
})
