import '@testing-library/jest-native/extend-expect'
import { screen, render, fireEvent } from '@testing-library/react-native'

import { faker } from '@faker-js/faker'

import CategoryItem from '.'
import { type ReactInstance } from 'react'

const getMockValues = () => {
  const text = faker.lorem.text()

  return {
    text,
  }
}

export const expectToBeOutline = (component: ReactInstance) => {
  expect(component).not.toHaveStyle({
    backgroundColor: '#6366f1',
  })
}

export const expectNotToBeOutline = (component: ReactInstance) => {
  expect(component).toHaveStyle({
    backgroundColor: '#6366f1',
  })
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
    expectToBeOutline(component)
  })

  it('should not render outline', () => {
    const { text } = getMockValues()

    render(<CategoryItem text={text} />)

    const component = screen.getByTestId('categoryItemContainer')
    expectNotToBeOutline(component)
  })

  it('should render with right testID', () => {
    const { text } = getMockValues()

    const testID = faker.lorem.word()
    render(<CategoryItem text={text} testID={testID} />)

    const component = screen.getByTestId(testID)
    expect(component).toBeTruthy()
  })

  it('should render with right onPress', () => {
    const { text } = getMockValues()

    const testID = faker.lorem.word()
    const onPress = jest.fn()
    render(<CategoryItem text={text} testID={testID} onPress={onPress} />)

    const component = screen.getByTestId(testID)
    fireEvent.press(component)
    expect(onPress).toBeCalled()
  })
})
