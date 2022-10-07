import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainProvider } from '../../context/MainContext'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import FormInput from './index'

interface WrapperProps {
  children: ReactNode
}

const RouterWrapper = ({ children }: WrapperProps) => (
  <MainProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </MainProvider>
)

afterEach(() => {
  cleanup()
})

test('check FormInput component is rendering', () => {
  render(
    <FormInput
      data-testid="search"
      handleChange={(v) => console.log(v)}
      name="search"
    />,
    {
      wrapper: RouterWrapper,
    }
  )
  expect(screen.getByTestId('search')).toBeInTheDocument()
  expect(screen.getByTestId('search')).toHaveAttribute('name', 'search')
})
