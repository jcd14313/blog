import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import App from './App'

interface WrapperProps {
  children: ReactNode
}

const RouterWrapper = ({ children }: WrapperProps) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('Check if app is properly rendered', () => {
  beforeEach(() => {
    render(<App />, { wrapper: RouterWrapper })
  })

  afterEach(() => {
    cleanup()
  })

  test('check if wrap by layout component', () => {
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })

  test('check if search input is rendered', () => {
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
  })

  test('check if post-single is rendered', async () => {
    await waitFor(() => {
      const posts = screen.getAllByTestId('single-post')
      expect(posts.length).toBeGreaterThanOrEqual(1)
    })
  })
})
