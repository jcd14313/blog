import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainProvider } from '../../context/MainContext'
import { render, cleanup, screen } from '@testing-library/react'
import Layout from './index'

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

test('check post-single component is rendering', () => {
  render(
    <Layout>
      <div data-testid="child">wrapper</div>
    </Layout>,
    { wrapper: RouterWrapper }
  )
  const descendant = screen.getByTestId('child')
  expect(screen.getByTestId('app')).toContainElement(descendant)
})
