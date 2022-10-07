import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainProvider } from '../../context/MainContext'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import PostSingle from './index'

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
  const data = {
    userId: '1',
    id: '2',
    title: 'React blog post',
    body: 'React is a javascript library',
  }
  render(<PostSingle {...data} />, { wrapper: RouterWrapper })
  expect(screen.getByTestId('single-post')).toBeInTheDocument()
})
