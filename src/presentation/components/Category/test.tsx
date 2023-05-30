import { fireEvent, render, screen } from '@testing-library/react-native'

import Category from '.'

import { expectNotToBeOutline, expectToBeOutline } from './Item/test'

describe('Category', () => {
  it('should have the first item selected', () => {
    render(<Category />)

    const catCategory = screen.getByTestId('catCategory')
    const dogCategory = screen.getByTestId('dogCategory')

    expectToBeOutline(dogCategory)
    expectNotToBeOutline(catCategory)
  })

  it('should change category items style when one of the items is selected', () => {
    render(<Category />)

    const catCategory = screen.getByTestId('catCategory')
    const dogCategory = screen.getByTestId('dogCategory')

    fireEvent.press(dogCategory)

    expectToBeOutline(catCategory)
    expectNotToBeOutline(dogCategory)
  })
})
